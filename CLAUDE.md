# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Korean military youth employment counseling service landing page (청춘도약일자리교육원). It's a static website focused on helping Korean military personnel with job leave permissions and career transitions.

## Tech Stack
- **Frontend Only**: Pure HTML, CSS, JavaScript (no framework)
- **No Build Process**: Direct file serving
- **Domain**: 청춘도약일자리교육원.kr
- **Hosting**: GitHub Pages (CNAME configured)

## Development Commands

### Local Development
```bash
# Python 3 server
python3 -m http.server 8000

# Check for port conflicts
lsof -i :8000
kill -9 [PID]  # if needed
```

### Git Operations
```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Your message"

# Push to GitHub (auto-deploys to GitHub Pages)
git push origin main
```

## Project Structure
- **index.html**: Main landing page
- **center-intro.html**: Center introduction page
- **military-tips.html**: Military tips blog integration page
- **reviews.html**: Customer reviews page
- **main.js**: Core JavaScript for dynamic content rendering
- **styles.css**: All styles using CSS custom properties and clamp() for responsive design
- **assets/config.js**: Centralized content configuration (text, links, FAQs, pricing)
- **assets/images/**: All image assets including logos and blog thumbnails

## Key Architecture Decisions

### Content Management
All dynamic content is centralized in `assets/config.js`. This includes:
- Brand information and contact details
- Service descriptions and pricing
- FAQ items
- Kakao channel URLs
- Navigation text

### Responsive Design Strategy
The site uses modern CSS clamp() functions throughout for fluid responsive design instead of multiple media queries:
```css
font-size: clamp(1rem, 3vw, 1.5rem);
padding: clamp(1rem, 3vw, 2rem);
```

### Multi-Page Navigation
- Sub-navigation menu consistent across all pages
- Active page highlighting via JavaScript
- Pages: 홈, 센터 소개, 군인 꿀팁, 상담 후기

### Blog Integration
The military-tips.html page displays 6 blog posts linking to Naver Blog articles. Images are stored as thumb1-6.png in assets/images/.

## Important Notes

### Korean Language Support
- Use `word-break: keep-all` for proper Korean text wrapping
- Maintain Korean UI text in config.js

### Mobile Optimization
- Primary target: iPhone SE (375px) to Pro Max
- Horizontal scroll prevention is critical
- Test diagnosis category buttons on small screens

### Logo Usage
- Main logo: `assets/images/청춘도약일자리교육원_logo.jpeg`
- Used in header and footer across all pages
- Fallback text when image fails

### Floating CTAs
- Desktop: Yellow circular Kakao button (bottom right)
- Mobile: Smart sticker CTA bar (bottom center)

## Common Tasks

### Update Blog Posts
Edit the blog card HTML in `military-tips.html` directly. Update thumb images in assets/images/.

### Modify FAQ Content
Edit the `faq` array in `assets/config.js`.

### Change Brand Colors
Modify CSS custom properties at the top of `styles.css`:
```css
:root {
  --brand: #1f6fff;
  --brand-dark: #0051e0;
}
```

### Test Responsive Design
Always check on:
1. iPhone SE (375px)
2. iPad (768px)
3. Desktop (1200px+)

Focus on:
- Diagnosis category buttons overflow
- Hero section text wrapping
- Navigation menu on mobile