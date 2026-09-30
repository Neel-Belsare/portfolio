import os
import math
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageEnhance
from collections import deque

SRC_IMG = '/Users/neelkiranbelsare/.gemini/antigravity/brain/4b159e33-4803-469a-a1d9-a1956f8bbfa3/.user_uploaded/media_1790746502558.png'
OUT_DIR = '/Users/neelkiranbelsare/.gemini/antigravity/scratch/neel-portfolio'
IMG_DIR = os.path.join(OUT_DIR, 'public/images')
VID_DIR = os.path.join(OUT_DIR, 'public/video')
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(VID_DIR, exist_ok=True)

# 1. Load original portrait
orig_img = Image.open(SRC_IMG).convert('RGB')
w, h = orig_img.size
arr = np.array(orig_img, dtype=np.float32)

# Remove the small sparkle/watermark in the bottom right background area (x: 450 to 550, y: 880 to 950)
# Replace with surrounding background studio gray
bg_ref = np.median(arr[840:875, 450:550], axis=(0,1))
sparkle_mask = (arr[880:960, 450:560, 0] > 165) & (arr[880:960, 450:560, 1] > 165) & (arr[880:960, 450:560, 2] > 165)
arr[880:960, 450:560][sparkle_mask] = bg_ref

cleaned_portrait = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
cleaned_portrait.save(os.path.join(IMG_DIR, 'portrait.png'))
print("Saved cleaned portrait.png")

# 2. Extract accurate cutout with floodfill / chroma distance
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
lum = 0.299 * r + 0.587 * g + 0.114 * b
chroma = np.sqrt((r - g)**2 + (g - b)**2 + (b - r)**2)

# In background, chroma is tiny (< 14) and lum is between 100 and 165
is_bg = (chroma < 14) & (lum >= 100) & (lum <= 165)

visited = np.zeros((h, w), dtype=bool)
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

dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
while queue:
    cy, cx = queue.popleft()
    for dy, dx in dirs:
        ny, nx = cy + dy, cx + dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            if (chroma[ny, nx] < 16 and 95 <= lum[ny, nx] <= 170):
                visited[ny, nx] = True
                queue.append((ny, nx))

# Alpha mask: foreground = 255 where not visited
mask = (~visited).astype(np.uint8) * 255
mask_img = Image.fromarray(mask, mode='L')
mask_img = mask_img.filter(ImageFilter.GaussianBlur(1.2))

cutout = Image.new('RGBA', (w, h), (0, 0, 0, 0))
cutout.paste(cleaned_portrait, (0, 0), mask=mask_img)
cutout_path = os.path.join(IMG_DIR, 'portrait-cutout.png')
cutout.save(cutout_path)
print("Saved portrait-cutout.png")

# Also save headshot cropped portrait for the about section
portrait_sq = cleaned_portrait.crop((int(w*0.08), int(h*0.03), int(w*0.92), int(h*0.65)))
portrait_sq.save(os.path.join(IMG_DIR, 'portrait-headshot.png'))
print("Saved portrait-headshot.png")
