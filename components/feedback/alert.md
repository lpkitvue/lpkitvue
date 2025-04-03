# Alert

The Alert component is designed to provide feedback messages and notifications to users with different severity levels.

## Features

- 🚀 Four predefined alert variants: success, error, warning, and info
- ✅ Optional dismiss button with close events
- 🔄 Smooth fade transition animations
- 🎨 Customizable via CSS classes
- 🎭 Icon support for each variant
- ♿ Accessibility-friendly with proper ARIA attributes
- 📱 Responsive design that works across devices

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

## Live Demo

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

<div style="margin-top: 1rem;">
  <button @click="resetAlerts" style="padding: 0.5rem 1rem; background-color: #4361ee; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Reset Alerts
  </button>
</div>
