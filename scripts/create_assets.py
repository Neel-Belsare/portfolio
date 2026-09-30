import os
import math
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageEnhance
import subprocess

SRC_IMG = '/Users/neelkiranbelsare/.gemini/antigravity/brain/4b159e33-4803-469a-a1d9-a1956f8bbfa3/user_photo.png'
OUT_DIR = '/Users/neelkiranbelsare/.gemini/antigravity/scratch/neel-portfolio'
IMG_DIR = os.path.join(OUT_DIR, 'public/images')
VID_DIR = os.path.join(OUT_DIR, 'public/video')
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(VID_DIR, exist_ok=True)

# 1. Save original portrait
orig_img = Image.open(SRC_IMG)
orig_img.save(os.path.join(IMG_DIR, 'portrait.png'))
print("Saved original portrait.png")

# 2. Extract accurate cutout with floodfill / chroma distance
img_rgb = orig_img.convert('RGB')
w, h = img_rgb.size
arr = np.array(img_rgb, dtype=np.float32)

# Estimate background per row/col or spatial gradient
# The background is a studio gradient with gray center/edges
# Background color varies slightly from top (~125) to bottom (~145)
# Let's compute edge mask
bg_top = np.mean(arr[:40, :], axis=(0,1))
bg_left = np.mean(arr[:, :25], axis=(0,1))
bg_right = np.mean(arr[:, -25:], axis=(0,1))

# Distance to neutral studio gray
# Since the suit is dark navy [~25, 30, 45], hair [~20, 20, 20], face [~175, 120, 95], shirt [~240, 240, 240]
# Chroma (saturation) of background is nearly 0 (< 8). Subject has either high chroma (skin), or low luminance (suit/hair), or high luminance (shirt)
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
lum = 0.299 * r + 0.587 * g + 0.114 * b
chroma = np.sqrt((r - g)**2 + (g - b)**2 + (b - r)**2)

# In background, chroma is tiny (< 10) and lum is between 110 and 155
is_bg = (chroma < 14) & (lum >= 110) & (lum <= 165)

# Pure numpy and deque flood fill
visited = np.zeros((h, w), dtype=bool)
from collections import deque

queue = deque()
# seed borders
for x in range(w):
    if is_bg[0, x]:
        visited[0, x] = True
        queue.append((0, x))
    if is_bg[h-1, x]:
        visited[h-1, x] = True
        queue.append((h-1, x))
for y in range(h):
    if is_bg[y, 0]:
        visited[y, 0] = True
        queue.append((y, 0))
    if is_bg[y, w-1]:
        visited[y, w-1] = True
        queue.append((y, w-1))

# Relaxed 4-connectivity flood fill
dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
while queue:
    cy, cx = queue.popleft()
    for dy, dx in dirs:
        ny, nx = cy + dy, cx + dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            # if neighbor is close to background criteria
            if (chroma[ny, nx] < 16 and 100 <= lum[ny, nx] <= 170):
                visited[ny, nx] = True
                queue.append((ny, nx))

# Alpha mask: foreground = 255 where not visited
mask = (~visited).astype(np.uint8) * 255
mask_img = Image.fromarray(mask, mode='L')
# Smooth edges slightly
mask_img = mask_img.filter(ImageFilter.GaussianBlur(1.2))

cutout = Image.new('RGBA', (w, h), (0, 0, 0, 0))
cutout.paste(orig_img, (0, 0), mask=mask_img)
cutout_path = os.path.join(IMG_DIR, 'portrait-cutout.png')
cutout.save(cutout_path)
print("Saved portrait-cutout.png")

# Also save a high quality cropped portrait for the about section (square and 3:4)
portrait_sq = orig_img.crop((w*0.08, h*0.04, w*0.92, h*0.65))
portrait_sq.save(os.path.join(IMG_DIR, 'portrait-headshot.png'))
print("Saved portrait-headshot.png")
