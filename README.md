# LPKitVue

A comprehensive, modular Vue 3 component library built with TypeScript and designed for modern web applications. LPKitVue provides accessible, customizable components that follow best practices for performance, accessibility, and developer experience.

[![CI/CD Pipeline](https://github.com/lpkitvue/lpkitvue/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/lpkitvue/lpkitvue/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)

## 📚 Documentation & Examples

- 🏠 **[Documentation Website](https://lpkitvue.github.io/lpkitvue/)** - Complete component documentation and guides
- 🎨 **[Storybook](https://lpkitvue.github.io/lpkitvue/storybook/)** - Interactive component examples and playground
- 🚀 **[Quick Start Guide](https://lpkitvue.github.io/lpkitvue/components/quick-start)** - Get started in minutes

## ✨ Features

- 🧩 **Modular Architecture** - Install only the components you need
- 🔍 **TypeScript Support** - Full type safety with excellent IDE support
- 🎨 **Customizable Theming** - CSS custom properties for easy styling
- 📱 **Responsive Design** - Mobile-first, works across all devices
- ♿ **Accessibility First** - WCAG 2.1 compliant with ARIA support
- 🎯 **Vue 3 Composition API** - Modern Vue 3 patterns and performance
- 📦 **Tree Shakable** - Optimized bundle sizes with proper tree shaking
- 🌗 **Dark Mode Support** - Built-in dark mode and theme switching
- 🌍 **Internationalization** - RTL support and i18n ready
- 🧪 **Well Tested** - Comprehensive test coverage

## 🚀 Quick Start

### Installation

Install individual components as needed:

```bash
npm install @lpkitvue/button @lpkitvue/alert @lpkitvue/toast
```

### Basic Usage

```vue
<script setup>
import { Button } from '@lpkitvue/button'
import { Alert } from '@lpkitvue/alert'
import { useToast, LpToast } from '@lpkitvue/toast'

// Import CSS
import '@lpkitvue/button/dist/button.css'
import '@lpkitvue/alert/dist/alert.css'
import '@lpkitvue/toast/dist/toast.css'

const toast = useToast()

function showToast() {
  toast.success('Hello LPKitVue!')
}
</script>

<template>
  <div>
    <Alert
      msg="Welcome to LPKitVue!"
      component="info"
      :closable="true"
    />
    
    <Button 
      text="Show Toast" 
      className="btn-primary"
      @click="showToast"
    />
    
    <LpToast />
  </div>
</template>
```

## 📦 Available Components

### Feedback
- **[Alert](https://lpkitvue.github.io/lpkitvue/components/feedback/alert)** - Display important messages with different severity levels
- **[Toast](https://lpkitvue.github.io/lpkitvue/components/feedback/toast)** - Non-intrusive notifications with positioning options

### Inputs & Forms
- **[Button](https://lpkitvue.github.io/lpkitvue/components/input-and-form/button)** - Versatile button component with multiple variants
- **[Form](https://lpkitvue.github.io/lpkitvue/components/input-and-form/form)** - Dynamic form generation with validation
- **[Editor](https://lpkitvue.github.io/lpkitvue/components/input-and-form/editor)** - Rich text editor with formatting

### Layout
- **[Card](https://lpkitvue.github.io/lpkitvue/components/layout/card)** - Content containers with various styles
- **[Modal](https://lpkitvue.github.io/lpkitvue/components/layout/modal)** - Dialogs and overlays for focused interactions
- **[Tab](https://lpkitvue.github.io/lpkitvue/components/layout/tab)** - Tabbed interfaces for organizing content

### Navigation
- **[Bread-Tag](https://lpkitvue.github.io/lpkitvue/components/navigation/bread-tag)** - Breadcrumb navigation

### Data Display
- **[Font-Icon](https://lpkitvue.github.io/lpkitvue/components/data-display/font-icon)** - Icon component with multiple icon libraries
- **[Overlay](https://lpkitvue.github.io/lpkitvue/components/data-display/overlay)** - Tooltips and popovers
- **[Table](https://lpkitvue.github.io/lpkitvue/components/table/)** - Static and async data tables

### Services
- **[Keycloak-Auth](https://lpkitvue.github.io/lpkitvue/components/service/keycloak-auth)** - Authentication integration
- **[Storage](https://lpkitvue.github.io/lpkitvue/components/service/storage)** - Encrypted browser storage utilities

## 🛠️ Development

This project uses a modern TurboRepo monorepo setup with optimized builds and caching.

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/lpkitvue/lpkitvue.git
cd lpkitvue

# Install dependencies
npm install

# Build packages
npm run build:packages
```

### Development Scripts

```bash
# Start development servers (docs + storybook)
npm run dev

# Start individual servers
npm run docs:dev          # Documentation site
npm run storybook:dev     # Storybook

# Build everything
npm run build             # Build all apps and packages
npm run build:packages    # Build packages only
npm run docs:build        # Build documentation
npm run storybook:build   # Build Storybook

# Quality checks
npm run lint              # ESLint
npm run type-check        # TypeScript checking
npm run test              # Run tests
npm run format            # Format code with Prettier
```

### Project Structure

```
lpkitvue/
├── apps/
│   ├── docs/             # VitePress documentation site
│   └── storybook/        # Storybook for component development
├── packages/
│   ├── alert/            # Alert component package
│   ├── button/           # Button component package
│   ├── toast/            # Toast component package
│   └── .../              # Other component packages
├── .github/
│   └── workflows/        # CI/CD workflows
├── turbo.json            # TurboRepo configuration
└── package.json          # Root package configuration
```

### TurboRepo Features

- ⚡ **Parallel Execution** - Build and test packages in parallel
- 📈 **Smart Caching** - Cache build outputs for faster subsequent runs
- 🔄 **Incremental Builds** - Only rebuild what has changed
- 🎯 **Task Dependencies** - Automatic dependency resolution between packages

### Adding a New Component

1. **Create Package Structure**
   ```bash
   # Copy existing component as template
   cp -r packages/button packages/new-component
   ```

2. **Update Package Configuration**
    - Update `package.json` with new component name
    - Update imports and exports in `lib/index.ts`
    - Implement your component in `lib/ComponentName.vue`

3. **Add Documentation**
    - Create Storybook stories in `apps/storybook/documentation/`
    - Add documentation page in `apps/docs/components/`

4. **Test Your Component**
   ```bash
   npm run build:packages
   npm run docs:dev        # Test in documentation
   npm run storybook:dev   # Test in Storybook
   ```

## 📖 Documentation Structure

- **VitePress Site** - Main documentation with guides and API references
- **Storybook** - Interactive component playground and examples
- **TypeScript Definitions** - Full type support with intellisense
- **Examples** - Real-world usage patterns and recipes

## 🚀 Deployment

### GitHub Pages

The project automatically deploys to GitHub Pages on pushes to `main`:

- **Documentation**: https://lpkitvue.github.io/lpkitvue/
- **Storybook**: https://lpkitvue.github.io/lpkitvue/storybook/

### CI/CD Pipeline

- ✅ **Quality Checks** - Linting, type checking, and testing
- 📦 **Package Building** - Automated package builds with TurboRepo
- 📚 **Documentation** - Automatic documentation and Storybook deployment
- 🔖 **Releases** - Automated package publishing on version tags

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://lpkitvue.github.io/lpkitvue/contributing) for details.

### Quick Contributing Steps

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes and add tests
4. **Test** your changes: `npm run test && npm run lint`
5. **Commit** using conventional commits: `git commit -m "feat: add amazing feature"`
6. **Push** to your branch: `git push origin feature/amazing-feature`
7. **Submit** a pull request

### Development Resources

- 📋 **[Issue Templates](https://github.com/lpkitvue/lpkitvue/issues/new/choose)** - Bug reports and feature requests
- 💬 **[Discussions](https://github.com/lpkitvue/lpkitvue/discussions)** - Questions and community chat
- 🎨 **[Storybook](https://lpkitvue.github.io/lpkitvue/storybook/)** - Component development environment
- 📚 **[Documentation](https://lpkitvue.github.io/lpkitvue/)** - Complete guides and API references

## 📄 License

LPKitVue is released under the [MIT License](https://github.com/lpkitvue/lpkitvue/blob/main/LICENSE).

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Vite team for the build tooling
- TurboRepo team for the monorepo infrastructure
- All our contributors and community members

## 🔗 Links

- **Website**: https://lpkitvue.github.io/lpkitvue/
- **Storybook**: https://lpkitvue.github.io/lpkitvue/storybook/
- **GitHub**: https://github.com/lpkitvue/lpkitvue
- **Issues**: https://github.com/lpkitvue/lpkitvue/issues
- **NPM**: https://www.npmjs.com/org/lpkitvue

---

Made with ❤️ by the LPKitVue team
