# Toast

A flexible and powerful toast notification system for Vue 3 applications built with TypeScript.

## Introduction

The Toast component provides a simple yet powerful way to show feedback messages to users. It supports multiple toast types, positions, animations, and much more.

## Features

- 🎯 Multiple toast positions (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
- 🎨 Various toast types with appropriate styling (success, error, warning, info, default)
- ⏱️ Configurable display durations with auto-dismiss functionality
- 🔄 Interactive toasts with customizable action buttons
- 🎛️ Complete programmatic control (create, update, dismiss, clear)
- 📊 Smart toast stacking with configurable limits per position
- 🔔 Toast titles, icons, and customizable content
- 💫 Smooth entrance and exit animations
- 📱 Responsive design across desktop and mobile devices
- ♿ Accessibility features with proper ARIA attributes
- 🧩 Global configuration options
- 🔌 Vue plugin for easy app-wide integration

## Live Examples

<script setup>
import { useToast, LpToast } from '@lpkitvue/toast';
import '@lpkitvue/toast/dist/toast.css';
import { ref } from 'vue';

const toast = useToast();
const selectedPosition = ref('top-right');
const positions = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right'
];

const showSuccessToast = () => {
  toast.success({
    title: 'Success!',
    message: 'Operation completed successfully',
    position: selectedPosition.value
  });
};

const showErrorToast = () => {
  toast.error({
    title: 'Error',
    message: 'Something went wrong',
    position: selectedPosition.value
  });
};

const showWarningToast = () => {
  toast.warning({
    title: 'Warning',
    message: 'This action cannot be undone',
    position: selectedPosition.value
  });
};

const showInfoToast = () => {
  toast.info({
    title: 'Information',
    message: 'Here is some useful information',
    position: selectedPosition.value
  });
};

const showPersistentToast = () => {
  const id = toast.info({
    title: 'Interactive Toast',
    message: 'This toast will not auto-dismiss',
    duration: 0,
    position: selectedPosition.value,
    action: {
      text: 'Dismiss',
      onClick: () => toast.dismiss(id)
    }
  });
};
</script>

<div class="toast-demo">
    <div class="buttons">
      <button @click="showSuccessToast" class="success">Success</button>
      <button @click="showErrorToast" class="error">Error</button>
      <button @click="showWarningToast" class="warning">Warning</button>
      <button @click="showInfoToast" class="info">Info</button>
      <button @click="showPersistentToast" class="persistent">Persistent</button>
    </div>
  <LpToast />
</div>

::: info Note
Remember to import both the `useToast` composable and the `LpToast` component. The `LpToast` component must be included in your template for the toast notifications to appear.
:::

## Installation

```bash
npm install @lpkitvue/toast
```

## Basic Usage

### As a Vue Plugin

Register the toast system globally in your app:

```ts
// main.ts
import '@lpkitvue/toast/dist/toast.css';
import { createApp } from 'vue';
import App from './App.vue';
import { ToastPlugin } from '@lpkitvue/toast';

const app = createApp(App);

// Register with optional configuration
app.use(ToastPlugin, {
  defaultPosition: 'top-right',
  defaultDuration: 5000,
  maxToasts: 5
});

app.mount('#app');
```

Add the LpToast component to your App.vue or layout component:

```vue
<template>
  <div id="app">
    <!-- Your app content -->
    <LpToast />
  </div>
</template>
```

Then use toasts anywhere in your components:

```vue
<script setup>
function showToast() {
  // Access from the global property
  this.$toast.success('Operation completed successfully!');
}
</script>
```

### Using the Composable

For more control, use the `useToast` composable:

```vue
<script setup>
import { useToast, LpToast } from '@lpkitvue/toast';

const toast = useToast();

function showToasts() {
  // Basic toast types
  toast.success('Operation completed successfully!');
  toast.error('An error occurred while processing your request.');
  toast.warning('Please review your information before proceeding.');
  toast.info('New updates are available for your application.');
}
</script>

<template>
  <div>
    <button @click="showToasts">Show Toasts</button>
    
    <!-- Add LpToast to your template -->
    <LpToast />
  </div>
</template>
```

## Advanced Usage

### Toast with Title and Action Button

```ts
toast.warning({
  title: 'Unsaved Changes',
  message: 'You have unsaved changes. Would you like to save before continuing?',
  duration: 0, // Stay visible until dismissed
  action: {
    text: 'Save Changes',
    onClick: () => saveChanges()
  }
});
```

### Custom Position and Duration

```ts
toast.info({
  message: 'This toast appears at the bottom center',
  position: 'bottom-center',
  duration: 3000 // 3 seconds
});
```

### Programmatic Toast Control

```ts
// Create a toast and store its ID
const toastId = toast.info({
  title: 'Processing',
  message: 'Your request is being processed...',
  duration: 0
});

// Later update it
toast.update(toastId, {
  title: 'Completed',
  message: 'Your request has been processed successfully!',
  type: 'success',
  duration: 3000
});

// Or dismiss it manually
toast.dismiss(toastId);

// Clear all toasts
toast.clear();
```

### Custom Styling

```ts
toast.show({
  message: 'This toast has custom styling',
  className: 'my-custom-toast'
});
```

```css
/* Define your custom styles */
.my-custom-toast {
  background-color: purple;
  color: white;
  border-radius: 20px;
}
```

### Global Configuration

```ts
// Update global default configuration
const { updateConfig } = useToast();

updateConfig({
  defaultPosition: 'bottom-center',
  defaultDuration: 3000,
  maxToasts: 3,
  defaultClosable: true
});
```

## API Reference

### Toast Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `message` | `string` | *Required* | The main text content of the toast |
| `title` | `string` | — | Optional title displayed above the message |
| `type` | `'success' \| 'error' \| 'warning' \| 'info' \| 'default'` | `'default'` | Toast type that determines its styling |
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'top-right'` | Where the toast will appear on screen |
| `duration` | `number` | `5000` | How long the toast appears (in ms, 0 for no auto-dismiss) |
| `closable` | `boolean` | `true` | Whether to show a close button |
| `className` | `string` | — | Additional CSS class for custom styling |
| `action` | `{ text: string, onClick: () => void }` | — | Optional action button configuration |
| `icon` | `string` | — | Custom icon to override the default |
| `onClose` | `() => void` | — | Callback when toast is closed |
| `id` | `string` | — | Custom ID (auto-generated if not provided) |

### Global Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `defaultPosition` | `ToastPosition` | `'top-right'` | Default position for all toasts |
| `defaultDuration` | `number` | `5000` | Default display duration in milliseconds |
| `maxToasts` | `number` | `5` | Maximum number of toasts per position |
| `defaultClosable` | `boolean` | `true` | Whether to show close buttons by default |
| `container` | `string` | `'body'` | Where to mount the toast containers |
| `zIndex` | `number` | `9999` | Z-index for toast containers |

### useToast Composable

```ts
const {
  // Basic methods
  show,          // (options: ToastOptions | string) => string
  dismiss,       // (id: string) => boolean
  clear,         // () => void
  update,        // (id: string, options: Partial<ToastOptions>) => boolean
  
  // Shorthand methods
  success,       // (options | string) => string
  error,         // (options | string) => string
  warning,       // (options | string) => string
  info,          // (options | string) => string
  
  // Configuration
  updateConfig,  // (config: Partial<ToastGlobalOptions>) => void
  
  // State
  toasts,        // Readonly<Ref<Map<string, ToastItem>>>
  config,        // Readonly<Ref<ToastGlobalOptions>>
} = useToast();
```

### Components

- **LpToast**: Main component to manage and display toast notifications
- **Toast**: Individual toast container for a specific position
- **BaseToast**: Core component for a single toast notification

## TypeScript Support

The package includes full TypeScript definitions:

```ts
import type { 
  ToastOptions, 
  ToastItem, 
  ToastGlobalOptions, 
  ToastPosition, 
  ToastType 
} from '@lpkitvue/toast';
```

## Accessibility

The toast component follows accessibility best practices:

- Uses `role="alert"` for appropriate screen reader announcements
- Provides proper focus management
- Ensures sufficient color contrast
- Supports keyboard interaction with close and action buttons
