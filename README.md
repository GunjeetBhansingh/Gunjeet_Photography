# LENS - Photography Portfolio Website

A high-end, cinematic photography portfolio website featuring a dark, minimalist aesthetic with deep black backgrounds, subtle charcoal gradients, and elegant typography.

## 🎨 Design Features

- **Deep Black & Charcoal Color Palette**: Sophisticated gradient backgrounds with subtle depth
- **Low-Key Photography**: Dramatic rim lighting and shadow work that blends seamlessly with the background
- **Minimalist Layout**: Strong negative space emphasizing visual storytelling
- **Elegant Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Scroll-triggered reveals, hover effects, and micro-interactions
- **Cinematic Contrast**: Professional, artistic mood with mystery and sophistication
- **Fully Responsive**: Optimized for all screen sizes

## 🚀 Tech Stack

- **React 18** - Component-based UI library
- **Vite** - Next-generation frontend tooling
- **Vanilla CSS** - Custom design system with CSS variables
- **Google Fonts** - Playfair Display & Inter

## 📁 Project Structure

```
photography/
├── public/
│   └── images/
│       ├── photographer.png    # Hero portrait with low-key lighting
│       ├── portfolio1.png      # Urban Shadows - Architecture
│       ├── portfolio2.png      # Silent Silhouette - Portrait
│       └── portfolio3.png      # Misty Mountains - Landscape
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Fixed navigation with scroll effects
│   │   ├── Hero.jsx           # Landing section with portrait
│   │   ├── Portfolio.jsx      # Grid layout with hover overlays
│   │   ├── About.jsx          # Photographer biography
│   │   ├── Contact.jsx        # Contact information & links
│   │   └── Footer.jsx         # Footer with copyright
│   ├── App.jsx                # Main application component
│   ├── index.css              # Complete design system & styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML with SEO meta tags
└── package.json               # Dependencies & scripts
```

## 🎯 Key Components

### Navigation
- Fixed header with scroll-based styling changes
- Smooth scroll navigation to sections
- Elegant hover effects with underline animations

### Hero Section
- Split layout with text and portrait
- Fade-in animations on load
- Call-to-action button with hover effects

### Portfolio Grid
- Responsive grid layout (3 columns on desktop, 1 on mobile)
- Hover overlays revealing project details
- Staggered scroll animations
- Image zoom effects on hover

### About Section
- Two-column layout with biography and image
- Scroll-triggered reveal animations
- Compelling storytelling copy

### Contact Section
- Centered layout with contact methods
- Hover effects on contact links
- Clean, minimalist design

## 🎨 Design System

### Color Palette
```css
--color-black: #000000
--color-deep-black: #0a0a0a
--color-charcoal-dark: #1a1a1a
--color-charcoal: #2a2a2a
--color-off-white: #e8e8e8
--color-muted-gray: #b8b8b8
```

### Typography
- **Display Font**: Playfair Display (300, 400, 500, 600, 700)
- **Body Font**: Inter (300, 400, 500, 600)

### Animations
- Fade-in on scroll
- Hover scale transforms
- Smooth transitions (0.2s - 0.6s)
- Overlay slide effects

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

- **Desktop**: Full grid layouts, side-by-side content
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single-column layouts, stacked content

## ✨ Features

- ✅ Smooth scroll navigation
- ✅ Intersection Observer for scroll animations
- ✅ Hover effects on all interactive elements
- ✅ SEO-optimized with meta tags
- ✅ Open Graph & Twitter Card support
- ✅ Semantic HTML5 structure
- ✅ Accessible navigation
- ✅ Performance optimized

## 🎭 Aesthetic Philosophy

The design emphasizes:
- **Mystery**: Low-key lighting and deep shadows
- **Sophistication**: Elegant typography and minimal UI
- **Artistry**: Cinematic composition and visual storytelling
- **Professionalism**: Clean, modern, high-end aesthetic

## 📄 License

This project is a custom photography portfolio template.

## 🤝 Credits

- Design & Development: Custom built for LENS Photography
- Fonts: Google Fonts (Playfair Display, Inter)
- Images: AI-generated portfolio samples

---

**Built with precision and passion** ✨
