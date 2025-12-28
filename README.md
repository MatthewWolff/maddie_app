# Flight & Fortune Tracker

A React TypeScript application that combines flight delay tracking with personalized horoscope predictions.

🚀 **Live Demo**: [https://wolff.sh/maddie_app](https://wolff.sh/maddie_app)

## Project Structure

Following React best practices, the project is organized into a clean, maintainable structure:

```
src/
├── components/           # Reusable UI components
│   ├── AgeVerification/
│   ├── FlightSearch/
│   ├── FlightStats/
│   └── HoroscopeCard/
├── pages/               # Page-level components
│   └── FlightTracker/
├── utils/               # Utility functions
│   ├── horoscope.ts
│   └── flightData.ts
├── constants/           # Application constants
│   └── horoscopes.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Features

- **Age Verification**: 18+ verification with flight number input
- **Flight Tracking**: Real-time flight delay statistics and performance metrics
- **Smart Horoscopes**: Travel-themed predictions based on flight performance
- **Responsive Design**: Bootstrap-powered responsive UI with animated backgrounds
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

### GitHub Pages (Automatic)

The app automatically deploys to GitHub Pages when code is pushed to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

## Architecture Highlights

### Component Organization
- **Atomic Design**: Components are organized by functionality and reusability
- **Single Responsibility**: Each component has a clear, focused purpose
- **Props Interface**: All components use TypeScript interfaces for type safety

### State Management
- **React Hooks**: Uses modern functional components with hooks
- **Local State**: Efficient state management with useState and useCallback
- **Effect Management**: Proper cleanup and dependency management with useEffect

### Code Quality
- **TypeScript**: Full type coverage for better development experience
- **Consistent Naming**: PascalCase for components, camelCase for functions
- **Clean Imports**: Organized imports with proper path resolution
- **Error Handling**: Graceful error states and user feedback

### Performance Optimizations
- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Memoized functions to prevent recreation
- **Lazy Loading**: Efficient component loading strategies

## Best Practices Implemented

- ✅ **Component Nesting**: Clear parent-child relationships
- ✅ **Functional Components**: Modern React patterns with hooks
- ✅ **TypeScript**: Full type safety and better developer experience
- ✅ **Clean Folder Structure**: Organized by feature and responsibility
- ✅ **Consistent Naming**: Following React community conventions
- ✅ **Reusable Components**: DRY principle with modular design
- ✅ **Error Handling**: Graceful error states and user feedback
- ✅ **Performance**: Optimized re-renders and efficient state management
