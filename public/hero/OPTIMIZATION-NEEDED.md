# Hero Banner Optimization Required

## Current Issue
- `products.gif` is **1,335 KB (1.3 MB)** - causing PageSpeed warnings
- This is the #1 performance bottleneck

## Solution Options

### Option 1: Convert GIF to Video (Recommended - 90% savings)
Convert `products.gif` to:
- **MP4** (H.264) - ~150 KB
- **WebM** (VP9) - ~120 KB

**Tools:**
- Online: https://cloudconvert.com/gif-to-mp4
- FFmpeg: `ffmpeg -i products.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" products.mp4`

### Option 2: Optimize GIF (Medium savings - 50%)
Use tools like:
- https://ezgif.com/optimize
- https://www.iloveimg.com/compress-image/compress-gif

**Target:** < 500 KB

### Option 3: Use Static Image Instead (Maximum savings - 95%)
Replace animated GIF with a high-quality static JPG
- Convert first frame to WebP: ~50-80 KB

## Implementation
Once you have optimized video/image:
1. Place MP4/WebM in `/public/hero/`
2. Update `src/app/page.tsx` line 316-324
3. Replace `<Image>` with `<video>` tag

## Expected Impact
- PageSpeed score: +20-30 points
- LCP improvement: ~1-2 seconds faster
- Image delivery savings: 1,200+ KB
