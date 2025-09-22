# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
청춘도약일자리교육원 - 군복무 청년을 위한 구직청원휴가 상담 서비스 랜딩페이지

## Key Commands

### Development Server
```bash
# Start local server
python3 -m http.server 8000
# Then open http://localhost:8000
```

### Testing Changes
```bash
# Kill existing server if running
lsof -i :8000  # Find process
kill -9 [PID]  # Kill it

# Restart server
python3 -m http.server 8000
```

## Architecture

### Core Structure
- **Static Site**: Pure HTML/CSS/JS without build process
- **Configuration-Driven**: All content managed through `assets/config.js`
- **Multi-Page**: 4 HTML pages (index, center-intro, military-tips, reviews)

### Key Files
- `assets/config.js`: Central configuration for all content, forms, pricing
- `main.js`: Renders dynamic content from config, handles interactions
- `styles.css`: CSS variables for theming, responsive design system

### Dynamic Components
1. **Self-Diagnosis Section**: Category-based questionnaire system
   - Forms object contains category-specific questions (military-job, startup, education)
   - Dynamic question rendering with progress tracking
   - Category switching updates questions and results

2. **Sliders**: Two slider implementations
   - Proof slider: Auto-scrolling infinite loop
   - Document samples: Manual navigation with dots and arrows

3. **Floating CTA**: Centered "지금 바로 예약하기" button linking to Kakao channel

## Content Management

### Updating Text/Links
Edit `assets/config.js`:
- Hero section content
- Self-diagnosis questions and categories
- Document samples
- Process steps
- Pricing packages
- FAQ items

### Images
Replace files in `assets/images/` keeping same filenames:
- `청춘도약일자리교육원_logo.jpeg`: Main logo
- `thumb1-6.png`: Blog post thumbnails
- `certification_*.jpeg`: Document samples

### Styling
Modify CSS variables in `styles.css`:
```css
:root {
  --brand: #1f6fff;
  --brand-dark: #0051e0;
  --brand-light: #e8f0ff;
}
```

## Recent Architecture Changes

### Category-Based Forms
- `selfDiagnosis.forms` object maps category IDs to question sets
- `getCurrentForm()` function retrieves active category's questions
- Category buttons trigger form reset and re-render

### Document Slider Implementation
- Converted from grid layout to horizontal slider
- Touch/swipe support for mobile
- Dot navigation with active state tracking

## Git Workflow
```bash
# Check status
git status

# Stage and commit
git add .
git commit -m "Your message"

# Push changes
git push origin main
```