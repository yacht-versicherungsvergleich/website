# Yacht Versicherungsvergleich Website

A static website for comparing yacht insurance providers in Germany.

## Development

### CSS Build Process

This project uses Tailwind CSS for styling. After making any changes to HTML files or Tailwind classes, you need to rebuild the CSS:

```bash
npm run build-css
```

This command copies the latest Tailwind CSS from node_modules to `tailwind.css` which is used by the website.

### Setup

1. Install dependencies:
```bash
npm install
```

2. Build CSS:
```bash
npm run build-css
```

### Analytics

The site uses Umami analytics with event tracking on:
- Signup navigation button: `signup-nav-click`
- Hero CTA button: `hero-cta-click`
- Benefits section CTA: `benefits-cta-click`
- Footer CTA button: `footer-cta-click`

## Files

- `index.html` - Main landing page
- `agb.html` - Terms and conditions
- `datenschutz.html` - Privacy policy
- `impressum.html` - Legal notice
- `tailwind.css` - Generated Tailwind CSS (do not edit manually)
- `tailwind.config.js` - Tailwind configuration
- `input.css` - Tailwind input file