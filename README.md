# Portfolio Website - Ashimwe Geoffrey

A modern, responsive portfolio website showcasing the work and skills of Ashimwe Geoffrey, a Software Engineer and ML Engineer from Kigali, Rwanda. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 About

This portfolio website features:

- **Modern Design**: Clean, professional layout with responsive design
- **Skills Showcase**: Dual expertise in Software Engineering and Machine Learning
- **Project Gallery**: Dynamic GitHub repository integration with live project data
- **Technology Stack**: Comprehensive display of technical skills and tools
- **Interactive Elements**: Smooth scrolling, animations, and engaging user experience

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: CSS3 with modern design principles
- **Icons**: React Icons for consistent iconography
- **API Integration**: GitHub API for dynamic project data
- **Build Tool**: Vite for fast development and optimized builds

## 📋 Features

### Core Sections

- **Hero Section**: Introduction with call-to-action buttons
- **Skills**: Dual focus on Software Engineering and ML Engineering
- **Projects**: Dynamic GitHub repository cards with live data
- **Technologies**: Comprehensive tech stack visualization
- **Social Links**: GitHub, LinkedIn, and Twitter integration
- **Responsive Navigation**: Smooth scrolling navigation

### Technical Features

- GitHub API integration for real-time repository data
- Responsive design for all device sizes
- Performance optimized with Vite
- TypeScript for type safety
- ESLint configuration for code quality

## 🔧 Development Setup

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AshimweGeoffrey/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Main/              # Hero section and profile card
│   ├── Navigation/        # Navigation bar
│   ├── Skills/           # Skills showcase (SE & ML)
│   ├── Projects/         # GitHub projects integration
│   ├── Technologies/     # Tech stack display
│   ├── Socials/         # Social media links
│   └── Footer/          # Footer component
├── assets/              # Static assets
└── App.tsx             # Main app component
```

## 🎯 Key Components

### Main Section

- **Hero Component**: Introduction and call-to-action buttons
- **Profile Card**: Personal information and contact button

### Skills Section

- **Software Engineering Card**: Full-stack development expertise
- **ML Engineering Card**: Machine learning and data science skills

### Projects Section

- **Dynamic GitHub Integration**: Fetches real-time repository data
- **Project Cards**: Display repo stats, languages, and descriptions
- **Configurable Repository List**: Easy project management via `data.js`

### Technologies Section

- **Tech Stack Visualization**: Emoji-based technology display
- **Comprehensive Coverage**: Languages, frameworks, and tools

## 🔌 GitHub API Integration

The portfolio dynamically fetches project data from GitHub using:

- Real-time repository statistics
- Language detection
- Last updated timestamps
- Star and fork counts
- Automatic fallback handling

Configuration can be found in `src/components/Projects/data.js`

## 🎨 Styling & Design

- **Modern CSS**: Clean, responsive design
- **Component-based Styling**: Isolated CSS for each component
- **Interactive Elements**: Hover effects and smooth transitions
- **Mobile-first Approach**: Responsive across all devices

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🚀 Performance

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Automatic code splitting for optimal loading
- **Asset Optimization**: Optimized images and resources
- **TypeScript**: Enhanced development experience and type safety
