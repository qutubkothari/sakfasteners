# Google Search Console Setup Guide

## Step 1: Get Your Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**
4. Select **"Domain"** and enter: `sakfasteners.com`
5. Click **Continue**
6. You'll see verification options. Choose **"HTML tag"** method
7. Copy the verification code that looks like: `google-site-verification=ABC123XYZ...`
8. Send this code back to continue the setup

## Step 2: Update the Website (I'll do this)

Once you provide the verification code, I will:
- Update `src/app/layout.tsx` with your verification code
- Build and deploy the changes to your VPS

## Step 3: Complete Verification

1. Return to Google Search Console
2. Click **"Verify"** button
3. You should see "Ownership verified" ✓

## Step 4: Submit Sitemap

1. In Google Search Console, click **"Sitemaps"** in the left menu
2. Enter: `https://www.sakfasteners.com/sitemap.xml`
3. Click **"Submit"**
4. Status should show "Success" within a few minutes

## Step 5: Monitor Indexing

- **Coverage**: Check which pages are indexed
- **Performance**: See search impressions, clicks, CTR
- **Enhancements**: Monitor Core Web Vitals, mobile usability

---

## Expected Timeline

- **Verification**: Instant (once code is added)
- **Sitemap Processing**: 1-2 hours
- **First Indexing**: 24-48 hours
- **Full Coverage**: 1-2 weeks

---

## What to Monitor Weekly

1. **Indexed Pages**: Should reach 6-7 pages (all your routes)
2. **Search Queries**: What keywords are bringing traffic
3. **Errors**: Fix any crawl errors immediately
4. **Mobile Usability**: Ensure 100% mobile-friendly

---

**Next Action:** Please visit Google Search Console and send me the verification code starting with `google-site-verification=`
