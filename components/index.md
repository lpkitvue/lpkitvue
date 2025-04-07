# LPKitVue Components Overview

LPKitVue is a modular Vue 3 component library designed to provide developers with reusable, accessible, and customizable UI building blocks. Each component is built with TypeScript, ensuring type safety and providing a better developer experience.

## Component Categories

The library is organized into several logical categories to help you find the components you need:

### Feedback
- [Alert](/components/feedback/alert) - Display important messages to users with support for different severity levels
- [Toast](/components/feedback/toast) - Show non-intrusive notifications with various positioning options

### Inputs & Forms
- [Button](/components/input-and-form/button) - Various button types for different actions and contexts
- [Form](/components/input-and-form/form) - Dynamic form generation with validation and field dependencies
- [Editor](/components/input-and-form/editor) - Rich text editor with formatting toolbar

### Layout
- [Card](/components/layout/card) - Content containers with various presentation styles
- [Modal](/components/layout/modal) - Dialogs and popovers for focused user interactions
- [Tab](/components/layout/tab) - Tabbed interfaces for organizing related content

### Navigation
- [Bread-Tag](/components/navigation/bread-tag) - Breadcrumb navigation with structured data support

### Data Display
- [Font-Icon](/components/data-display/font-icon) - Icon component with support for various icon libraries
- [Overlay](/components/data-display/overlay) - Tooltips and popover content with flexible positioning

### Services
- [Keycloak-Auth](/components/service/keycloak-auth) - Authentication integration with Keycloak
- [Storage](/components/service/storage) - Encrypted browser storage utilities

## Design Principles

LPKitVue follows these core design principles:

1. **Modularity**: Each component is published as an individual package, allowing you to install only what you need
2. **Accessibility**: Components follow WCAG guidelines and include proper ARIA attributes
3. **Customizability**: Extensive prop-based configuration and CSS customization options
4. **Composability**: Components work well together while maintaining independent functionality
5. **Performance**: Optimized rendering and minimal dependencies
6. **TypeScript Support**: Comprehensive type definitions for better IDE integration

## Getting Started

### Installation

You can install individual components as needed:

```bash
npm install @lpkitvue/[component-name]
```

For example, to install the Button component:

```bash
npm install @lpkitvue/button
```

### Basic Usage

Import and use components in your Vue application:

```vue
<script setup>
import { Button } from '@lpkitvue/button';
import '@lpkitvue/button/dist/index.css';
</script>

<template>
  <Button text="Click Me" className="btn-primary" @click="handleClick" />
</template>
```

### Component Dependencies

Some components have dependencies on other components within the library. For example, the `FormCard` component depends on both the `Form` and `Button` components. Make sure to install all required dependencies for your chosen components.

## Theming

LPKitVue components use CSS variables for consistent theming across the library. You can customize the appearance by overriding these variables in your application's CSS:

```css
:root {
  --color-primary: #4361ee;
  --color-secondary: #805dca;
  --color-success: #00ab55;
  --color-danger: #e7515a;
  --color-warning: #e2a03f;
  --color-info: #2196f3;
  --color-dark: #3b3f5c;
  --color-light: #f4f5f7;
}
```

## TypeScript Support

All components include TypeScript definitions. You can import types from each package:

```typescript
import { Button } from '@lpkitvue/button';
import type { ButtonTypes } from '@lpkitvue/button';

const buttonConfig: ButtonTypes = {
  text: 'Submit',
  className: 'btn-primary',
  size: 'md'
};
```

## Internationalization

Many components support internationalization through Vue I18n. You can provide translations for built-in text strings and configure the locale as needed.

## Accessibility

LPKitVue components are designed with accessibility in mind:

- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Color contrast compliance

## Browser Support

LPKitVue supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions to LPKitVue are welcome! For details on how to contribute, please see the [contribution guidelines](https://github.com/lpkitvue/lpkitvue/blob/main/CONTRIBUTING.md).

## License

LPKitVue is licensed under the [MIT License](https://github.com/lpkitvue/lpkitvue/blob/main/LICENSE).
