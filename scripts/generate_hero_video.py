import os
import math
import wave
import struct
import numpy as np
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance
import subprocess

OUT_DIR = '/Users/neelkiranbelsare/.gemini/antigravity/scratch/neel-portfolio'
VID_DIR = os.path.join(OUT_DIR, 'public/video')
IMG_DIR = os.path.join(OUT_DIR, 'public/images')
TEMP_FRAMES_DIR = os.path.join(OUT_DIR, 'scratch_frames')
os.makedirs(VID_DIR, exist_ok=True)
os.makedirs(TEMP_FRAMES_DIR, exist_ok=True)

WIDTH, HEIGHT = 1920, 1080
FPS = 30
DURATION_SEC = 6
TOTAL_FRAMES = FPS * DURATION_SEC

# Load the portrait
portrait = Image.open(os.path.join(IMG_DIR, 'portrait.png')).convert('RGBA')
pw, ph = portrait.size

# Create a graded portrait with slightly enhanced contrast and rich tones
enhancer = ImageEnhance.Contrast(portrait)
portrait_graded = enhancer.enhance(1.12)
enhancer_col = ImageEnhance.Color(portrait_graded)
portrait_graded = enhancer_col.enhance(1.08)

# Initialize 35 particles with random positions, speeds, sizes and opacities
np.random.seed(42)
num_particles = 35
particles = []
for _ in range(num_particles):
    particles.append({
        'x': np.random.uniform(0, WIDTH),
        'y': np.random.uniform(0, HEIGHT),
        'vx': np.random.uniform(-0.4, 0.4),
        'vy': np.random.uniform(-0.8, -0.2), # gentle upward drift
        'size': np.random.uniform(2.0, 7.5),
        'base_alpha': np.random.uniform(40, 160),
        'phase': np.random.uniform(0, math.pi * 2)
    })

print(f"Generating {TOTAL_FRAMES} frames at {WIDTH}x{HEIGHT}...")

# Base background canvas: deep dark obsidian with subtle lighting gradients
bg_base = Image.new('RGBA', (WIDTH, HEIGHT), (10, 10, 12, 255))
bg_draw = ImageDraw.Draw(bg_base)

# Radial ambient glow behind subject
for r in range(450, 0, -15):
    alpha = int(18 * (1.0 - r / 450.0))
    bg_draw.ellipse(
        (WIDTH//2 - r, HEIGHT//2 - r - 30, WIDTH//2 + r, HEIGHT//2 + r - 30),
        fill=(30, 38, 55, alpha)
    )

# Subtle warm amber backlight from lower right
for r in range(350, 0, -20):
    alpha = int(14 * (1.0 - r / 350.0))
    bg_draw.ellipse(
        (WIDTH*0.65 - r, HEIGHT*0.55 - r, WIDTH*0.65 + r, HEIGHT*0.55 + r),
        fill=(255, 107, 53, alpha)
    )

# Top & bottom cinematic gradient mask for typography contrast
vignette = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
vig_draw = ImageDraw.Draw(vignette)
for y in range(HEIGHT):
    # Top gradient
    if y < 220:
        a = int(180 * (1.0 - y / 220.0))
        vig_draw.line([(0, y), (WIDTH, y)], fill=(8, 8, 10, a))
    # Bottom gradient
    elif y > HEIGHT - 320:
        a = int(230 * ((y - (HEIGHT - 320)) / 320.0))
        vig_draw.line([(0, y), (WIDTH, y)], fill=(8, 8, 10, a))

for i in range(TOTAL_FRAMES):
    progress = i / float(TOTAL_FRAMES)
    # Slow, smooth Ken Burns breathing zoom (sine cycle for perfect loop)
    zoom = 1.0 + 0.045 * math.sin(progress * math.pi)
    
    frame = bg_base.copy()
    
    # Scale portrait to fit ~88% of height at base
    target_h = int(HEIGHT * 0.90 * zoom)
    target_w = int(pw * (target_h / float(ph)))
    
    scaled_portrait = portrait_graded.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Slight smooth vertical breathing pan
    y_offset = int((HEIGHT - target_h) // 2 + 15 - 12 * math.sin(progress * math.pi))
    x_offset = int((WIDTH - target_w) // 2)
    
    # Soft drop shadow / edge blend for subject
    frame.paste(scaled_portrait, (x_offset, y_offset), mask=scaled_portrait)
    
    # Overlay vignette
    frame.alpha_composite(vignette)
    
    # Render floating atmospheric particles
    particle_overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(particle_overlay)
    
    for p in particles:
        # Update position
        px = (p['x'] + p['vx'] * i * 3.0) % WIDTH
        py = (p['y'] + p['vy'] * i * 3.0) % HEIGHT
        # Smooth alpha pulsation
        p_alpha = int(p['base_alpha'] * (0.6 + 0.4 * math.sin(progress * math.pi * 2 + p['phase'])))
        s = p['size']
        # Glow
        p_draw.ellipse(
            (px - s, py - s, px + s, py + s),
            fill=(255, 180, 130, p_alpha)
        )
    
    # Soften particles
    particle_overlay = particle_overlay.filter(ImageFilter.GaussianBlur(1.0))
    frame.alpha_composite(particle_overlay)
    
    # Save frame
    frame_path = os.path.join(TEMP_FRAMES_DIR, f"frame_{i:04d}.jpg")
    frame.convert('RGB').save(frame_path, quality=95)
    
    # Save the first frame as poster image
    if i == 0:
        poster_path = os.path.join(VID_DIR, 'hero-poster.jpg')
        frame.convert('RGB').save(poster_path, quality=95)
        print(f"Saved hero-poster.jpg")

print("All frames rendered. Generating audio track...")

# 3. Generate a 6-second seamless futuristic ambient drone audio
audio_path = os.path.join(VID_DIR, 'ambient.wav')
sample_rate = 44100
total_samples = sample_rate * DURATION_SEC
wav_file = wave.open(audio_path, 'w')
wav_file.setnchannels(2) # Stereo
wav_file.setsampwidth(2) # 16-bit
wav_file.setframerate(sample_rate)

frames_audio = []
for n in range(total_samples):
    t = n / float(sample_rate)
    # Deep sub-bass 55Hz (A1) + gentle fifth 82.4Hz + subtle 110Hz harmonic
    sub = 0.40 * math.sin(2 * math.pi * 55.0 * t)
    fifth = 0.25 * math.sin(2 * math.pi * 82.41 * t)
    octave = 0.15 * math.sin(2 * math.pi * 110.0 * t + 0.5)
    # Gentle slow filter shimmer
    shimmer = 0.08 * math.sin(2 * math.pi * 440.0 * t) * (0.5 + 0.5 * math.sin(2 * math.pi * 0.33 * t))
    # Fade in / fade out at seams for seamless audio loop
    fade = 1.0
    fade_len = int(sample_rate * 0.2)
    if n < fade_len:
        fade = n / float(fade_len)
    elif n > total_samples - fade_len:
        fade = (total_samples - n) / float(fade_len)
    
    sample_val = int((sub + fifth + octave + shimmer) * fade * 16000)
    # Clamp
    sample_val = max(-32767, min(32767, sample_val))
    frames_audio.append(struct.pack('<hh', sample_val, sample_val))

wav_file.writeframes(b''.join(frames_audio))
wav_file.close()
print("Saved ambient.wav")

# 4. Use ffmpeg to encode MP4 with H.264 video + AAC audio, faststart, 30fps
mp4_path = os.path.join(VID_DIR, 'hero.mp4')
ffmpeg_cmd = [
    'ffmpeg', '-y',
    '-framerate', str(FPS),
    '-i', os.path.join(TEMP_FRAMES_DIR, 'frame_%04d.jpg'),
    '-i', audio_path,
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-preset', 'fast',
    '-crf', '20',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-movflags', '+faststart',
    '-shortest',
    mp4_path
]

print("Running ffmpeg...")
res = subprocess.run(ffmpeg_cmd, capture_output=True, text=True)
if res.returncode == 0:
    print(f"Successfully generated hero.mp4 ({os.path.getsize(mp4_path)} bytes)!")
else:
    print(f"ffmpeg error: {res.stderr}")

# Clean up temp frames to save space
for f in os.listdir(TEMP_FRAMES_DIR):
    os.remove(os.path.join(TEMP_FRAMES_DIR, f))
os.rmdir(TEMP_FRAMES_DIR)
print("Cleaned up temp frames.")
