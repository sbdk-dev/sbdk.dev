# SBDK.dev Brand Assets

Official brand assets for SBDK.dev. These logos and graphics are available for use in articles, presentations, and projects related to SBDK.

## Logo Files

### Icon Only

- **`logo-icon.svg`** - Blue icon on transparent background (64x64)
- **`logo-icon-dark.svg`** - White background variant for dark interfaces (64x64)

### Horizontal Lockup

- **`logo-horizontal.svg`** - Icon + text, dark text (240x64)
- **`logo-horizontal-dark.svg`** - Icon + text, white text for dark backgrounds (240x64)

### Favicon

- **`../favicon.svg`** - 32x32 favicon used in browser tabs

## Brand Colors

### Primary Colors

```css
/* Primary Blue */
--primary-50: #f0f9ff;
--primary-100: #e0f2fe;
--primary-200: #bae6fd;
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;  /* Main brand color */
--primary-600: #0284c7;
--primary-700: #0369a1;
--primary-800: #075985;
--primary-900: #0c4a6e;
```

### Accent Colors

```css
/* Accent Purple */
--accent-50: #fdf4ff;
--accent-100: #fae8ff;
--accent-200: #f5d0fe;
--accent-300: #f0abfc;
--accent-400: #e879f9;
--accent-500: #d946ef;
--accent-600: #c026d3;  /* Accent color */
--accent-700: #a21caf;
--accent-800: #86198f;
--accent-900: #701a75;
```

### Neutral Colors

- **Dark backgrounds**: `#0F172A` (gray-950)
- **Light backgrounds**: `#FFFFFF` (white)
- **Text on light**: `#0F172A` (gray-900)
- **Text on dark**: `#F1F5F9` (gray-100)

## Usage Guidelines

### Do's ✅

- Use the logo with adequate spacing around it
- Maintain the aspect ratio when scaling
- Use on backgrounds with sufficient contrast
- Use the appropriate variant for your background (light/dark)
- Download and host files rather than hotlinking

### Don'ts ❌

- Don't modify the logo colors
- Don't stretch or distort the logo
- Don't add effects (shadows, gradients, etc.)
- Don't rotate the logo
- Don't place on busy backgrounds that reduce readability
- Don't use low-resolution versions

## Minimum Sizes

- **Icon only**: Minimum 16x16px (for favicons), ideal 32x32px or larger
- **Horizontal lockup**: Minimum width 120px, ideal 240px or larger

## Clear Space

Maintain a clear space around the logo equal to the height of the icon on all sides.

## File Formats

All logos are provided in SVG format for scalability. SVG files can be used directly in web projects or converted to PNG/JPG for other uses.

### Converting to PNG

To convert SVG to PNG at specific sizes, you can use:

**Online tools:**
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- [Convertio](https://convertio.co/svg-png/)

**Command line (with ImageMagick):**
```bash
# Convert to 512x512 PNG
convert -background none logo-icon.svg -resize 512x512 logo-icon-512.png
```

## Questions?

For questions about brand usage or to request additional formats, please:

- Open a [GitHub Discussion](https://github.com/sbdk-dev/sbdk.dev/discussions)
- Check our [Contributing Guidelines](../../CONTRIBUTING.md)

## License

The SBDK.dev logo and brand assets are © 2025 SBDK. Usage is permitted for:

- Articles and blog posts about SBDK
- Conference presentations and talks
- Educational materials
- Open source projects using SBDK
- Community-created content

For commercial usage outside of these contexts, please contact us.

---

**Main Project**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev)
**Website**: [sbdk.dev](https://sbdk.dev)
