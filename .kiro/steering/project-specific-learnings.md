# Project-Specific Corrections and Learnings

## Flight & Fortune Tracker Specific Guidelines

### Content Strategy
- **50 Custom Horoscopes**: 25 positive, 25 negative travel-themed messages
- **Performance-Based Selection**: >75% on-time = positive, ≤75% = negative horoscope
- **Mock Flight Data**: Predefined data for AS486, UA123, DL456 with random fallback
- **"ur fucked" Alert**: Display for flights with <80% on-time performance

### Technical Decisions
- **Vite over Create React App**: Faster builds and development
- **Yarn over npm**: Consistent with other projects (Andii reference)
- **Bootstrap 5**: Rapid UI development with consistent styling
- **TypeScript**: Type safety throughout the application
- **GitHub Pages**: Simple deployment with custom domain (wolff.sh)

### Image and Asset Management
- **Convert PNG to JPG**: For photographs and thumbnails
- **Remove Unused Assets**: Clean up fortune_teller.png when features are removed
- **Optimize for Web**: Compress images and use appropriate formats

### Development Workflow Lessons
- **Test Builds Frequently**: Verify changes don't break compilation
- **Clean Dependencies**: Remove unused packages
- **Manual + Automatic Deployment**: Both should work (yarn deploy + GitHub Actions)

### User Experience Insights
- **Immediate Feedback**: Show results immediately after input
- **Visual Appeal**: Animated backgrounds create engagement
- **Simplicity**: Remove features that don't add clear value
- **Performance Feedback**: Use flight data to drive user experience (alerts, horoscope tone)
