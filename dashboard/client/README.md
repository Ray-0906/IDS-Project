# IDS Dashboard Client

A modern React dashboard application built with Vite, React Router, and Tailwind CSS. This project provides a solid foundation for building data-driven dashboard interfaces with client-side routing and responsive design.

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **Vite 7** - Fast build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint** - Code linting with React hooks support
- **PostCSS** - CSS processing with Autoprefixer

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Main navigation component
│   └── landing/        # Landing page specific components
│       ├── HeroSection.jsx
│       ├── SocialProofSection.jsx
│       ├── ProblemStatement.jsx
│       ├── SolutionFeatures.jsx
│       ├── HowItWorks.jsx
│       ├── TechnicalSpecs.jsx
│       ├── LiveDemo.jsx
│       ├── Pricing.jsx
│       ├── DeveloperSection.jsx
│       ├── FinalCTA.jsx
│       ├── CodeSnippet.jsx
│       └── AnimatedBackground.jsx
├── layouts/            # Layout components
│   └── RootLayout.jsx  # Main app layout with navbar
├── pages/              # Route components
│   ├── Landing.jsx     # SaaS landing page
│   ├── Home.jsx        # Dashboard homepage
│   ├── About.jsx       # About page
│   └── NotFound.jsx    # 404 error page
├── assets/             # Static assets
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛣️ Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Landing | SaaS landing page with hero, features, pricing |
| `/dashboard` | Home | Main dashboard homepage |
| `/about` | About | About page |
| `*` | NotFound | 404 fallback for unknown routes |

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (16+ recommended)
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with the following configuration:

- **Content Sources**: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- **Global Styles**: Defined in `src/index.css`
- **Component Styling**: Utility classes throughout components

### Key Design Tokens
- **Primary Colors**: Blue variations (`blue-600`, `blue-700`, `blue-100`)
- **Background**: Gray-50 for main background, white for cards
- **Typography**: System font stack with semibold weights
- **Layout**: Max-width containers (`max-w-7xl`) with responsive padding

## 🧭 Navigation

The `Navbar` component provides:
- Brand logo/title linking to home
- Active link highlighting
- Responsive design
- Hover states and smooth transitions

## 📱 Responsive Design

The application is built mobile-first with Tailwind's responsive utilities:
- **Mobile**: Base styles
- **Tablet**: `sm:` prefix (640px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `postcss.config.js` | PostCSS configuration |
| `eslint.config.js` | ESLint rules and plugins |
| `package.json` | Dependencies and scripts |

## 🚦 Development Workflow

1. **Add New Pages**: Create in `src/pages/` and add route to `App.jsx`
2. **Add Components**: Create in `src/components/` for reusable UI elements
3. **Update Navigation**: Add links to `Navbar.jsx`
4. **Styling**: Use Tailwind utilities or extend in `tailwind.config.js`

### Adding a New Route

```jsx
// 1. Create component in src/pages/NewPage.jsx
function NewPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold">New Page</h1>
    </section>
  )
}

// 2. Add route in App.jsx
import NewPage from './pages/NewPage'

// In Routes component:
<Route path="/new-page" element={<NewPage />} />

// 3. Add navigation link in Navbar.jsx
<NavLink
  to="/new-page"
  className={({ isActive }) => `${linkBase} ${isActive ? active : 'text-gray-700'}`}
>
  New Page
</NavLink>
```

## 🏗️ Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Build output is generated in the `dist/` directory and includes:
- Minified and bundled JavaScript
- Optimized CSS with purged unused styles
- Static assets with cache-friendly naming

## 🤝 Contributing

1. Follow the established folder structure
2. Use Tailwind utilities for styling
3. Ensure components are responsive
4. Run linting before commits: `npm run lint`
5. Test build before deploying: `npm run build`

## 📝 Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Add your environment variables here
VITE_API_URL=http://localhost:3000
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port with `npm run dev -- --port 3001`
2. **Build errors**: Check ESLint output and fix linting issues
3. **Styling not updating**: Ensure Tailwind is processing your files correctly

---

Built with ❤️ using React, Vite, and Tailwind CSS
