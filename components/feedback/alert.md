# Alert

## Introduction

The Alert component is designed to provide feedback messages and notifications to users with different severity levels. It's a lightweight, flexible, and customizable way to display important information, success messages, warnings, or errors in your application.

## Features

- 🚀 Four predefined alert variants: success, error, warning, and info
- ✅ Optional dismiss button with close events
- 🔄 Smooth fade transition animations
- 🎨 Customizable via CSS classes
- 🎭 Icon support for each variant
- ♿ Accessibility-friendly with proper ARIA attributes
- 📱 Responsive design that works across devices
- 🌐 RTL support for right-to-left languages

## Live Examples

<div class="alert-demo">
  <Alert msg="This is an informational alert message" component="info" :closable="true" />
  <Alert msg="Operation completed successfully!" component="success" :closable="true" />
  <Alert msg="Please check the form for errors." component="error" :closable="true" />
  <Alert msg="This action cannot be undone." component="warning" :closable="true" />
</div>

<script setup>
import '@lpkitvue/alert/dist/alert.css';
import { Alert } from '@lpkitvue/alert';
import { ref } from 'vue';

const showInfo = ref(true);
const showSuccess = ref(true);
const showError = ref(true);
const showWarning = ref(true);

function resetAlerts() {
  showInfo.value = true;
  showSuccess.value = true;
  showError.value = true;
  showWarning.value = true;
}
</script>

## Installation

```bash
npm install @lpkitvue/alert
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/alert/dist/alert.css';
```

## Basic Usage

```vue
<script setup>
import '@lpkitvue/alert/dist/alert.css';
import { Alert } from '@lpkitvue/alert';
</script>

<template>
  <Alert
    msg="Operation completed successfully!"
    component="success"
    :closable="true"
    @close="handleAlertClosed"
  />
</template>
```

## Advanced Usage

### Alert Variant Components

For convenience, specific alert variant components are also available directly.

```vue
<script setup>
import { Success, Error, Warning, Info } from '@lpkitvue/alert';
</script>

<template>
  <Success 
    msg="Profile updated successfully" 
    :closable="true" 
    @close="handleSuccess"
  />
  
  <Error 
    msg="An error occurred during the process" 
    :closable="true" 
  />
  
  <Warning 
    msg="This action cannot be undone" 
    :closable="true" 
  />
  
  <Info 
    msg="New updates are available" 
    :closable="true" 
  />
</template>
```

### Custom Styling

You can customize the appearance of alerts using the `customClass` prop:

```vue
<Alert
  msg="This is a custom styled alert"
  component="info"
  custom-class="border-l-4 shadow-lg bg-blue-50"
  :closable="true"
/>
```

### Handling Alert Closed Event

```vue
<script setup>
import { ref } from 'vue';
import { Alert } from '@lpkitvue/alert';

const showAlert = ref(true);

const handleAlertClosed = () => {
  showAlert.value = false;
  // Additional logic after the alert is closed
};
</script>

<template>
  <Alert
    v-if="showAlert"
    msg="This alert can be closed"
    component="success"
    :closable="true"
    @close="handleAlertClosed"
  />
</template>
```

### Using AlertBase for Advanced Customization

For advanced usage, you can directly use the `AlertBase` component which provides more customization options:

```vue
<script setup>
import { AlertBase } from '@lpkitvue/alert';
</script>

<template>
  <AlertBase
    variant="success"
    msg="Custom alert with additional options"
    :closable="true"
    :show-icon="true"
    custom-class="my-custom-class"
    @close="handleClose"
  />
</template>
```

## API Reference

### Alert Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `msg` | `string` | *Required* | The alert message to display |
| `component` | `'success' \| 'error' \| 'warning' \| 'info'` | *Required* | Determines the alert variant |
| `closable` | `boolean` | `false` | Whether the alert can be dismissed |
| `customClass` | `string` | `''` | Additional CSS classes for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `close` | none | Emitted when the alert is closed |

### Alert Variant Components (Success, Error, Warning, Info)

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `msg` | `string` | *Required* | The alert message to display |
| `closable` | `boolean` | `false` | Whether the alert can be dismissed |
| `customClass` | `string` | `''` | Additional CSS classes for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `close` | none | Emitted when the alert is closed |

### AlertBase Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `msg` | `string` | *Required* | The alert message to display |
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | *Required* | Alert style variant |
| `closable` | `boolean` | `false` | Whether the alert can be dismissed |
| `customClass` | `string` | `''` | Additional CSS classes for styling |
| `icon` | `string` | *Based on variant* | Icon to display in the alert |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `close` | none | Emitted when the alert is closed |

## TypeScript Support

The package includes TypeScript definitions:

```typescript
import type { AlertTypes } from '@lpkitvue/alert';

// Define alert options
const alertConfig: AlertTypes = {
  msg: 'Operation successful',
  component: 'success',
  closable: true,
  customClass: 'my-custom-alert'
};
```

## Accessibility

The alert component follows accessibility best practices:

- Proper ARIA `role="alert"` to announce the content to screen readers
- Appropriate ARIA attributes for interactive elements
- Keyboard navigation support for dismissible alerts (can be closed with the Escape key)
- Semantic HTML structure
- High contrast colors that meet WCAG 2.1 standards
- Focus management for the close button
