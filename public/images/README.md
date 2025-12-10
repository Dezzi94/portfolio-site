# Images Directory Structure

This directory contains all images and visual assets for the Jack Desmond portfolio website, organized by purpose and page context.

## Directory Structure

```
/public/images/
│
├── hero/                  ← Main background images or brand header visuals
│   └── (Background images, hero graphics, brand visuals)
│
├── services/              ← Icons or visual explainer images for services
│   └── (Service icons, automation diagrams, process visuals)
│
├── projects/              ← Project case study images and screenshots
│   ├── wywm/             ← WithYouWithMe project assets
│   ├── third-academy/    ← Third Academy project assets  
│   ├── wearbasecamp/     ← Wearbasecamp project assets
│   ├── inspired-learning/ ← Inspired Learning project assets
│   ├── dezzi-digital/    ← Dezzi Digital project assets
│   ├── mammoth-hunter-club/ ← Mammoth Hunter Club project assets
│   └── techstart-accelerator/ ← TechStart Accelerator project assets
│
├── testimonials/          ← Avatar headshots and client photos (optional)
│   └── (Client headshots, testimonial graphics)
│
├── ui/                    ← Animated assets, backgrounds, SVGs
│   └── (UI elements, animated graphics, background patterns)
│
└── branding/              ← Logo, signature, favicon, brand assets
    └── (Logo variations, brand elements, favicon files)
```

## Usage Guidelines

### File Naming Convention
- Use lowercase with hyphens: `hero-background.jpg`
- Include descriptive names: `automation-workflow-diagram.svg`
- Add size suffixes when needed: `logo-large.png`, `logo-small.png`

### Recommended File Formats
- **Photos/Screenshots**: `.jpg`, `.webp`
- **Graphics/Logos**: `.svg`, `.png`
- **Icons**: `.svg` (preferred), `.png`

### Image Optimization
- Compress images before uploading
- Use responsive images with multiple sizes when needed
- Consider lazy loading for large images

## Current Project Case Studies
The following project directories correspond to case studies in the application:
- `wearbasecamp/` → `/case/wearbasecamp`
- `inspired-learning/` → `/case/inspired-learning`
- `dezzi-digital/` → `/case/dezzi-digital`
- `mammoth-hunter-club/` → `/case/mammoth-hunter-club`
- `techstart-accelerator/` → `/case/techstart-accelerator`
- `wywm/` → Future WithYouWithMe case study
- `third-academy/` → Future Third Academy case study

## Adding New Images
1. Choose the appropriate directory based on image purpose
2. Follow the naming convention
3. Optimize the image file size
4. Update component imports if needed
5. Test responsive behavior across devices 

# Image Assets Directory

## Hero Image

### Required Image: `hero/Jackimage.png`

**Location**: `public/images/hero/Jackimage.png`

**Specifications**:
- **Format**: JPG or PNG (JPG preferred for file size)
- **Dimensions**: 800x800px minimum (square aspect ratio)
- **Quality**: High resolution, professional headshot
- **Style**: Should show Jack clearly, preferably professional attire
- **Background**: Clean background preferred (will be cropped to circle/rounded rectangle)
- **File Size**: Optimized for web (under 500KB recommended)

**Usage**:
- Mobile: Displayed as 192px circular image
- Desktop: Displayed as 320px rounded rectangle image
- Both layouts include glow effects and animations

### Image Optimization Tips:
1. Use a square crop (1:1 aspect ratio)
2. Ensure Jack's face is centered in the frame
3. Good lighting and sharp focus
4. Professional, approachable expression
5. Consider how it will look when cropped to circle (mobile)

### Placeholder:
Currently using a placeholder path. Replace with actual image file when ready.

---

## Future Image Assets

Other image directories can be created here for:
- Project case study screenshots
- Service icons
- Team photos
- Brand assets 