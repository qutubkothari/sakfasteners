# Video Conversion Instructions

## ✅ Code is Ready - Just Add These Files:

The website code now expects these optimized video files in `/public/hero/`:

### Required Files:
1. **products.webm** (WebM format - smallest, ~120 KB)
2. **products.mp4** (MP4 format - fallback, ~150 KB)
3. **products-poster.jpg** (First frame as static image, ~50 KB)

---

## 🎬 How to Convert Your GIF:

### Method 1: CloudConvert (Easiest - No Software Required)
1. Go to: https://cloudconvert.com/gif-to-mp4
2. Upload: `/public/hero/products.gif`
3. Settings:
   - Video Codec: H.264
   - Quality: High
   - Resolution: Keep original
4. Click "Convert"
5. Download as **products.mp4**

6. Repeat for WebM:
   - Go to: https://cloudconvert.com/gif-to-webm
   - Upload products.gif
   - Video Codec: VP9
   - Download as **products.webm**

### Method 2: FFmpeg (Best Quality - If Installed)

**For MP4:**
```bash
ffmpeg -i products.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 23 products.mp4
```

**For WebM:**
```bash
ffmpeg -i products.gif -c:v libvpx-vp9 -crf 30 -b:v 0 products.webm
```

**For Poster Image:**
```bash
ffmpeg -i products.gif -frames:v 1 products-poster.jpg
```

### Method 3: Online GIF to Video Converter
- https://convertio.co/gif-mp4/
- https://www.freeconvert.com/gif-to-mp4

---

## 📂 After Conversion:

1. Place these files in: `C:\Users\QK\Documents\GitHub\sakfasteners\public\hero\`
   - products.mp4
   - products.webm
   - products-poster.jpg

2. Deploy:
```powershell
.\deploy.ps1 -Message "Add optimized hero videos (90% size reduction)"
```

---

## 📊 Expected Results:

**Before:** 1,335 KB (GIF)
**After:** ~120-150 KB (Video)
**Savings:** ~1,200 KB (90% reduction!)

**PageSpeed Impact:**
- Image delivery: ✅ Fixed
- LCP: Improved by 1-2 seconds
- Performance score: +20-30 points

---

## 🔄 Fallback Behavior:

The code is smart:
1. Tries WebM first (smallest)
2. Falls back to MP4 if WebM fails
3. Shows poster image while loading
4. Falls back to original GIF if videos missing

So it will work now with the GIF, but will automatically use videos once you add them!
