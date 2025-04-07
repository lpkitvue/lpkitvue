# Font Icon

A versatile and customizable icon component for Vue 3 applications built with TypeScript, supporting various icon libraries and custom styling options.

## Introduction

The Font Icon component provides a simple yet powerful way to incorporate icons into your Vue applications. Using the power of Iconify under the hood, it offers access to thousands of icons from popular libraries while maintaining a consistent API and styling options. The component supports customization for size, color, animations, and transformations.

## Features

- 🎭 Seamless access to thousands of icons via Iconify
- 🎨 Customizable colors, sizes, and styles
- 🔄 Animation support (spin, pulse, bounce)
- 🔁 Icon flipping and rotation transformations
- 📏 Predefined size options and custom sizing
- 🌗 Dark mode and RTL support
- 🖱️ Interactive icons with event handling
- 🎛️ Custom icon registration
- 🎯 Simple, unified API for all icons
- ♿ Accessibility-friendly with proper ARIA attributes
- 📱 Responsive design with optimal rendering

## Live Examples

<script setup>
import { LpIcon } from '@lpkitvue/font-icon';
import { ref } from 'vue';

const clickedIcon = ref('');
const handleIconClick = (name) => {
  clickedIcon.value = name;
  setTimeout(() => {
    clickedIcon.value = '';
  }, 1500);
}
</script>

### Basic Icons

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <LpIcon icon="user" size="lg" />
  <LpIcon icon="home" size="lg" />
  <LpIcon icon="settings" size="lg" />
  <LpIcon icon="bell" size="lg" />
  <LpIcon icon="mail" size="lg" />
</div>

### Different Sizes

<div style="display: flex; align-items: flex-end; gap: 1rem; margin-bottom: 1rem;">
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="xs" />
    <span style="font-size: 10px; margin-top: 4px;">xs</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="sm" />
    <span style="font-size: 10px; margin-top: 4px;">sm</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="md" />
    <span style="font-size: 10px; margin-top: 4px;">md</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="lg" />
    <span style="font-size: 10px; margin-top: 4px;">lg</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="xl" />
    <span style="font-size: 10px; margin-top: 4px;">xl</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <LpIcon icon="star" size="2xl" />
    <span style="font-size: 10px; margin-top: 4px;">2xl</span>
  </div>
</div>

### Custom Colors

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <LpIcon icon="heart" size="lg" color="#e7515a" />
  <LpIcon icon="check-circle" size="lg" color="#00ab55" />
  <LpIcon icon="danger-triangle" size="lg" color="#e2a03f" />
  <LpIcon icon="info-circle" size="lg" color="#2196f3" />
</div>

### Animations

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="refresh" size="lg" animate="spin" />
    <span style="font-size: 10px;">spin</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="bell" size="lg" animate="pulse" />
    <span style="font-size: 10px;">pulse</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="arrow-down" size="lg" animate="bounce" />
    <span style="font-size: 10px;">bounce</span>
  </div>
</div>

### Transformations

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="arrow-right" size="lg" />
    <span style="font-size: 10px;">normal</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="arrow-right" size="lg" flip="horizontal" />
    <span style="font-size: 10px;">horizontal</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="arrow-right" size="lg" flip="vertical" />
    <span style="font-size: 10px;">vertical</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <LpIcon icon="arrow-right" size="lg" :rotate="45" />
    <span style="font-size: 10px;">rotate:45°</span>
  </div>
</div>

### Interactive Icons

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <LpIcon 
    icon="heart" 
    size="lg" 
    :color="clickedIcon === 'heart' ? '#e7515a' : 'currentColor'" 
    @click="() => handleIconClick('heart')" 
    style="cursor: pointer;"
  />
  <LpIcon 
    icon="alt-arrow-up" 
    size="lg" 
    :color="clickedIcon === 'up' ? '#4361ee' : 'currentColor'" 
    @click="() => handleIconClick('up')"
    style="cursor: pointer;"
  />
  <LpIcon 
    icon="star" 
    size="lg" 
    :color="clickedIcon === 'star' ? '#e2a03f' : 'currentColor'" 
    @click="() => handleIconClick('star')" 
    style="cursor: pointer;"
  />
</div>
<div style="font-size: 12px; margin-bottom: 1rem;">
  {{ clickedIcon ? `Clicked: ${clickedIcon}` : 'Click on an icon above' }}
</div>

## Installation

```bash
npm install @lpkitvue/font-icon
```

This package depends on the Iconify Vue library, which will be installed automatically as a dependency.

## Basic Usage

```vue
<script setup>
import { LpIcon } from '@lpkitvue/font-icon';
</script>

<template>
  <LpIcon icon="user" />
  
  <LpIcon icon="home" size="lg" />
  
  <LpIcon icon="heart" color="#e7515a" />
  
  <LpIcon icon="refresh" animate="spin" />
</template>
```

## Advanced Usage

### Icon with Custom Dimensions

```vue
<template>
  <LpIcon icon="chart-bar" width="32px" height="24px" />
</template>
```

### Interactive Icons

```vue
<script setup>
import { LpIcon } from '@lpkitvue/font-icon';

const handleClick = () => {
  console.log('Icon clicked!');
};
</script>

<template>
  <LpIcon 
    icon="btn-play"
    size="lg"
    color="#4361ee"
    @click="handleClick"
    className="cursor-pointer hover:opacity-80"
  />
</template>
```

### Icons with Transformations

```vue
<template>
  <LpIcon icon="arrow-right" flip="horizontal" />
  
  <LpIcon icon="arrow-up" :rotate="90" />
  
  <LpIcon 
    icon="refresh" 
    flip="horizontal" 
    :rotate="45" 
  />
</template>
```

### Icons in Buttons

```vue
<template>
  <button class="btn btn-primary">
    <LpIcon icon="plus" class-name="mr-2" />
    Add Item
  </button>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | *Required* | Icon name, can be from Solar icon set (default) or a custom prefixed icon |
| `color` | `string` | `'currentColor'` | Color of the icon |
| `width` | `string` | Based on size | Custom width (overrides size) |
| `height` | `string` | Based on size | Custom height (overrides size) |
| `className` | `string` | `''` | Additional CSS classes |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| string` | `'md'` | Predefined or custom size |
| `animate` | `'spin' \| 'pulse' \| 'bounce' \| 'none'` | `'none'` | Animation effect |
| `flip` | `'horizontal' \| 'vertical' \| 'both' \| 'none'` | `'none'` | Flip the icon |
| `rotate` | `number` | `0` | Rotation angle in degrees |
| `onClick` | `() => void` | `undefined` | Click event handler |

### Size Values

The predefined size values correspond to the following dimensions:

| Size | Dimension |
|------|-----------|
| `xs` | 14px |
| `sm` | 16px |
| `md` | 20px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `click` | `(event: MouseEvent)` | Emitted when the icon is clicked |

### Icon Names

By default, the component uses the Solar icon set from Iconify. When providing an icon name, you can:

1. Use a plain name (e.g., `"user"`) which will be prefixed with `solar:` and suffixed with `-linear`
2. Use a fully qualified name with a prefix (e.g., `"mdi:home"`)
3. Use a custom registered icon with the `lp:` prefix (e.g., `"lp:custom-icon"`)

## TypeScript Support

The package includes TypeScript definitions:

```typescript
import { LpIcon } from '@lpkitvue/font-icon';
import type { LpIconTypes } from '@lpkitvue/font-icon';

const iconProps: LpIconTypes = {
  icon: 'check-circle',
  size: 'lg',
  color: '#00ab55',
  animate: 'pulse'
};
```

### Types

```typescript
export type FontIconTypes = {
  icon: string;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
  animate?: 'spin' | 'pulse' | 'bounce' | 'none';
  flip?: 'horizontal' | 'vertical' | 'both' | 'none';
  rotate?: 0 | 90 | 180 | 270 | number;
  onClick?: () => void;
};
```

## Accessibility

The FontIcon component follows accessibility best practices:

- Icons used alone (without accompanying text) should be given an `aria-label` attribute
- When icons are decorative and used alongside text, they should have `aria-hidden="true"`
- Interactive icons (with click handlers) are properly announced to screen readers
- Color combinations meet WCAG 2.1 contrast requirements
- Animations respect the user's `prefers-reduced-motion` setting
- Custom icons are properly sized for optimal visibility
- Focus states are clearly indicated for interactive icons

### Accessible Usage Examples

#### Icon with text (decorative icon)

```vue
<button class="btn">
  <LpIcon icon="save" aria-hidden="true" className="mr-2" />
  Save
</button>
```

#### Icon alone (semantic meaning)

```vue
<button class="btn" aria-label="Close">
  <LpIcon icon="close" />
</button>
```

#### Interactive icon with label

```vue
<LpIcon 
  icon="information"
  onClick={() => showHelp()}
  aria-label="Show help information"
  role="button"
  tabindex="0"
/>
```

Remember to provide appropriate alternative text for icons that convey meaning, and hide decorative icons from screen readers by using `aria-hidden="true"`.
