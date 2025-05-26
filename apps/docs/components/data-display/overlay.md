# Overlay

A flexible and customizable overlay/tooltip component for Vue 3 applications built with TypeScript.

## Introduction

The Overlay component provides a versatile way to display tooltips, popovers, and other floating content. With support for multiple placements, triggers, and themes, it offers a comprehensive solution for enhancing user interfaces with contextual information and interactions.

## Features

- 🎯 Multi-directional tooltips/overlays (top, right, bottom, left)
- 🔄 Multiple trigger types (hover, click, focus)
- ⏱️ Configurable show/hide delays
- 🎨 Themeable with three built-in themes (default, dark, light)
- 🖱️ Interactive mode for clickable tooltip content
- 📏 Customizable offsets and max-width
- 📄 Supports rich content through slots
- 🔍 Automatically positions within viewport
- 📱 Responsive design with smart collision detection
- ♿ Accessibility-friendly with ARIA attributes
- 🌐 Teleport support for DOM positioning

## Live Examples

<script setup>
import { Overlay } from '@lpkitvue/overlay';
import '@lpkitvue/overlay/dist/overlay.css';
import { ref } from 'vue';

const selectedPosition = ref('top');
const selectedTrigger = ref('hover');
const isInteractive = ref(true);
const showArrow = ref(true);
</script>

### Basic Overlay

<div class="demo-container">
  <Overlay text="This is a basic tooltip" placement="top">
    <button class="demo-button">Hover me</button>
  </Overlay>
</div>

### Different Placements

<div class="demo-row">
  <Overlay text="Top tooltip" placement="top">
    <button class="demo-button">Top</button>
  </Overlay>

  <Overlay text="Right tooltip" placement="right">
    <button class="demo-button">Right</button>
  </Overlay>

  <Overlay text="Bottom tooltip" placement="bottom">
    <button class="demo-button">Bottom</button>
  </Overlay>

  <Overlay text="Left tooltip" placement="left">
    <button class="demo-button">Left</button>
  </Overlay>
</div>

### Different Triggers

<div class="demo-row">
  <Overlay text="Hover to see me" trigger="hover">
    <button class="demo-button">Hover</button>
  </Overlay>

  <Overlay text="Click to toggle me" trigger="click">
    <button class="demo-button">Click</button>
  </Overlay>

  <Overlay text="Focus to reveal me" trigger="focus">
    <input class="demo-input" placeholder="Focus me" />
  </Overlay>
</div>

### Themed Overlays

<div class="demo-row">
  <Overlay text="Default theme" theme="default">
    <button class="demo-button">Default</button>
  </Overlay>

  <Overlay text="Dark theme" theme="dark">
    <button class="demo-button">Dark</button>
  </Overlay>

  <Overlay text="Light theme" theme="light">
    <button class="demo-button">Light</button>
  </Overlay>
</div>

### Interactive Overlay with Rich Content

<div class="demo-container">
  <Overlay trigger="click" interactive placement="right">
    <button class="demo-button">Show Interactive Content</button>

    <template #content>
      <div class="demo-content">
        <h4>Interactive Content</h4>
        <p>You can interact with elements inside this overlay.</p>
        <button class="demo-action-button">Click Me</button>
      </div>
    </template>
  </Overlay>
</div>

<style>
.demo-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
  justify-content: center;
}
.demo-button {
  padding: 8px 16px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.demo-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.demo-content {
  padding: 12px;
  min-width: 200px;
}
.demo-content h4 {
  margin-top: 0;
  margin-bottom: 8px;
}
.demo-action-button {
  margin-top: 8px;
  padding: 4px 8px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

## Installation

```bash
npm install @lpkitvue/overlay
```

Then import the component and its styles:

```js
// In your main.js or component file
import '@lpkitvue/overlay/dist/overlay.css';
import { Overlay } from '@lpkitvue/overlay';
```

## Basic Usage

### Simple Tooltip

```vue
<template>
  <Overlay text="This is a tooltip">
    <button>Hover me</button>
  </Overlay>
</template>

<script setup>
import { Overlay } from '@lpkitvue/overlay';
</script>
```

### Customizing Placement and Trigger

```vue
<template>
  <Overlay 
    text="Click to see this tooltip" 
    placement="right" 
    trigger="click"
  >
    <button>Click me</button>
  </Overlay>
</template>
```

### Using Custom Content with Slot

```vue
<template>
  <Overlay placement="bottom">
    <button>Show details</button>
    
    <template #content>
      <div class="custom-tooltip">
        <h4>Detailed Information</h4>
        <p>This is some custom HTML content.</p>
        <button @click="doSomething">Action Button</button>
      </div>
    </template>
  </Overlay>
</template>
```

## Advanced Usage

### Interactive Overlay with Events

```vue
<template>
  <Overlay 
    trigger="click" 
    interactive 
    placement="right"
    @show="handleShow"
    @hide="handleHide"
  >
    <button>Interactive Overlay</button>
    
    <template #content>
      <div class="interactive-content">
        <h4>Interactive Content</h4>
        <p>Current count: {{ count }}</p>
        <button @click="incrementCount">Increment</button>
      </div>
    </template>
  </Overlay>
</template>

<script setup>
import { Overlay } from '@lpkitvue/overlay';
import { ref } from 'vue';

const count = ref(0);

const incrementCount = () => {
  count.value++;
};

const handleShow = () => {
  console.log('Overlay shown');
};

const handleHide = () => {
  console.log('Overlay hidden');
};
</script>
```

### Custom Themes and Styling

```vue
<template>
  <Overlay 
    text="Custom styled tooltip" 
    theme="dark" 
    :max-width="250"
    :offset="12"
  >
    <button>Custom Tooltip</button>
  </Overlay>
  
  <!-- With custom class for further styling -->
  <Overlay 
    text="Custom class tooltip"
    custom-class="my-special-tooltip"
  >
    <button>Custom Class</button>
  </Overlay>
</template>

<style>
/* In your CSS */
.my-special-tooltip {
  border: 2px solid #4361ee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
```

### Custom Delay Times

```vue
<template>
  <Overlay 
    text="Quick appearance" 
    :delay-show="100" 
    :delay-hide="100"
  >
    <button>Fast Tooltip</button>
  </Overlay>
  
  <Overlay 
    text="Slow appearance" 
    :delay-show="800" 
    :delay-hide="500"
  >
    <button>Slow Tooltip</button>
  </Overlay>
</template>
```

### Conditional Display

```vue
<template>
  <Overlay 
    text="This tooltip can be enabled/disabled" 
    :disabled="isDisabled"
  >
    <button>{{ isDisabled ? 'Tooltip disabled' : 'Tooltip enabled' }}</button>
  </Overlay>
  
  <button @click="isDisabled = !isDisabled">
    Toggle tooltip
  </button>
</template>

<script setup>
import { ref } from 'vue';

const isDisabled = ref(false);
</script>
```

### Teleporting to Different DOM Element

```vue
<template>
  <Overlay 
    text="This tooltip is teleported to the body" 
    teleport-to="body"
  >
    <button>Teleported Tooltip</button>
  </Overlay>
  
  <Overlay 
    text="This tooltip is teleported to #app" 
    teleport-to="#app"
  >
    <button>Custom Teleport</button>
  </Overlay>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `''` | Text content of the tooltip |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip placement relative to the trigger |
| `offset` | `number` | `8` | Space between tooltip and trigger (in pixels) |
| `delayShow` | `number` | `200` | Delay before showing tooltip (in ms) |
| `delayHide` | `number` | `200` | Delay before hiding tooltip (in ms) |
| `arrow` | `boolean` | `true` | Whether to show an arrow pointing to trigger |
| `disabled` | `boolean` | `false` | Disables the tooltip when true |
| `trigger` | `'hover' \| 'click' \| 'focus'` | `'hover'` | Event that triggers tooltip |
| `interactive` | `boolean` | `true` | Whether tooltip content can be interacted with |
| `maxWidth` | `number` | `300` | Maximum width of tooltip (in pixels) |
| `theme` | `'default' \| 'dark' \| 'light' \| string` | `'default'` | Tooltip appearance theme |
| `teleportTo` | `string` | `'body'` | CSS selector of element to teleport to |
| `appendTo` | `boolean` | `true` | Whether to append tooltip to teleport target |
| `zIndex` | `number` | `9999` | Z-index of the tooltip |
| `customClass` | `string` | — | Additional CSS class for styling |

### Events

| Event | Description |
|-------|-------------|
| `show` | Emitted when tooltip is shown |
| `hide` | Emitted when tooltip is hidden |
| `update:visible` | Emitted when visibility changes (for v-model support) |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Trigger element that the tooltip will be attached to |
| `content` | Custom content for the tooltip (used instead of `text` prop) |

## TypeScript Support

The package includes TypeScript definitions for all components and their props:

```typescript
import { Overlay } from '@lpkitvue/overlay';
import type { 
  OverlayProps, 
  OverlayPlacement, 
  OverlayTrigger, 
  OverlayTheme 
} from '@lpkitvue/overlay';

// Type-safe props
const overlayProps: OverlayProps = {
  text: 'This is a tooltip',
  placement: 'top',
  trigger: 'hover',
  theme: 'default',
  interactive: true
};

// Type definitions for specific properties
const placement: OverlayPlacement = 'right';
const trigger: OverlayTrigger = 'click';
const theme: OverlayTheme = 'dark';
```

## Accessibility

The Overlay component follows accessibility best practices to ensure a good experience for all users:

- Uses `role="tooltip"` for proper screen reader announcement
- Manages focus correctly for keyboard users
- Supports trigger via keyboard focus events
- Provides keyboard support for interactive tooltips
- Can be completely disabled when needed
- Uses appropriate ARIA attributes for better screen reader support
- Supports proper focus management for click-triggered tooltips
- Allows ESC key to dismiss tooltips
- Content remains accessible to screen readers even when visually hidden
- Provides sufficient contrast between tooltip content and background

For maximum accessibility:

- Ensure tooltip content is concise and helpful
- Use the `interactive` prop only when necessary
- Provide descriptive text in the `text` prop or via the content slot
- Consider the reading order and focus order when using complex interactive tooltips
- Test with screen readers and keyboard navigation
