# Modal

A collection of flexible and customizable modal dialog components for Vue 3 applications built with TypeScript.

## Introduction

The Modal components provide a means to display content in a layer that sits above the main page content. They are used for creating dialogs, lightboxes, popovers, and other overlay elements that require user attention or interaction. The `@lpkitvue/modal` package offers two main components: `Modal` for standard dialog usage and `FilterModal` specifically designed for form-based filtering operations.

## Features

- 🎯 Customizable modal dialogs with flexible dimensions and positioning
- 🔄 Specialized filter modal for form-based operations
- 💫 Smooth animations and transitions for opening and closing
- 🖱️ Configurable click-outside behavior
- ⌨️ Keyboard support (Escape key to close)
- 🎛️ Fully controlled visibility with v-model support
- 🚀 Internationalization (i18n) support
- 📱 Responsive design that works across devices
- ♿ Accessibility-compliant with proper ARIA attributes
- 🎨 Customizable styling through CSS classes
- 🧩 Flexible content through slot system
- 📊 Event system for action handling

## Live Examples

<script setup>
import '@lpkitvue/modal/dist/modal.css';
import { Modal, FilterModal } from '@lpkitvue/modal';
import { ref } from 'vue';

const isBasicModalOpen = ref(false);
const openBasicModal = () => isBasicModalOpen.value = true;
const closeBasicModal = () => isBasicModalOpen.value = false;
const handleSave = () => {
  alert('Save action triggered!');
  closeBasicModal();
};

const isFilterModalOpen = ref(false);
const openFilterModal = () => isFilterModalOpen.value = true;
const closeFilterModal = () => isFilterModalOpen.value = false;

const filterFormItems = [
  {
    name: 'category',
    label: 'Category',
    type: 'select',
    options: [
      { label: 'All Categories', value: '' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Clothing', value: 'clothing' },
      { label: 'Books', value: 'books' },
    ],
    size: 12
  },
  {
    name: 'inStock',
    label: 'In Stock Only',
    type: 'switch',
    defaultValue: false,
    size: 12
  }
];

const handleApplyFilters = (values) => {
  alert('Filters applied: ' + JSON.stringify(values));
  closeFilterModal();
};
</script>

<div style="display: flex; gap: 1rem;">
  <button 
    @click="openBasicModal" 
    style="padding: 0.5rem 1rem; background-color: #4361ee; color: white; border: none; border-radius: 0.25rem; cursor: pointer;"
  >
    Open Basic Modal
  </button>

<button @click="openFilterModal">
Open Filter Modal
</button>
</div>

<Modal
:open="isBasicModalOpen"
title="Basic Modal Example"
:width="500"
@close="closeBasicModal"
@save="handleSave"
>
  <p>This is a basic modal dialog. It demonstrates the core functionality of the Modal component.</p>
  <p>You can close this modal by:</p>
  <ul>
    <li>Clicking the X in the top right</li>
    <li>Clicking the Cancel button</li>
    <li>Clicking outside the modal (if enabled)</li>
    <li>Pressing the Escape key</li>
  </ul>
</Modal>

<FilterModal
:open="isFilterModalOpen"
title="Filter Products"
:formItems="filterFormItems"
:width="30"
@close="closeFilterModal"
@save="handleApplyFilters"
/>

## Installation

```bash
npm install @lpkitvue/modal
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/modal/dist/modal.css';
```

This package has dependencies on other LPKitVue components:

```bash
# Required dependencies
npm install @lpkitvue/button @lpkitvue/font-icon

# Required for FilterModal
npm install @lpkitvue/form
```

The package also requires `vue-i18n` for internationalization support:

```bash
npm install vue-i18n
```

## Basic Usage

### Standard Modal

```vue
<script setup>
import { ref } from 'vue';
import { Modal } from '@lpkitvue/modal';

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const handleSave = () => {
  console.log('Save button clicked');
  closeModal();
};
</script>

<template>
  <button @click="openModal">Open Modal</button>

  <Modal
    :open="isOpen"
    title="Example Modal"
    @close="closeModal"
    @save="handleSave"
  >
    <p>This is the modal content.</p>
  </Modal>
</template>
```

### Filter Modal

```vue
<script setup>
import { ref } from 'vue';
import { FilterModal } from '@lpkitvue/modal';
import type { FormItemProps } from '@lpkitvue/form';

const isOpen = ref(false);

const formItems = [
  {
    name: 'category',
    label: 'Category',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    size: 12
  },
  {
    name: 'active',
    label: 'Active Only',
    type: 'switch',
    defaultValue: false,
    size: 12
  },
];

const handleApplyFilters = (values) => {
  console.log('Filters applied:', values);
  isOpen.value = false;
};
</script>

<template>
  <button @click="isOpen = true">Open Filters</button>

  <FilterModal
    :open="isOpen"
    title="Filter Options"
    :formItems="formItems"
    @close="isOpen = false"
    @save="handleApplyFilters"
  />
</template>
```

## Advanced Usage

### Custom-Sized Modals

```vue
<template>
  <!-- Wide modal (80% of screen width) -->
  <Modal
    :open="isWideModalOpen"
    title="Wide Modal"
    :width="80"
    @close="closeWideModal"
  >
    <p>This modal takes up 80% of the screen width.</p>
  </Modal>

  <!-- Fixed width modal (500px) -->
  <Modal
    :open="isFixedWidthOpen"
    title="Fixed Width Modal"
    width="500px"
    @close="closeFixedWidth"
  >
    <p>This modal has a fixed width of 500px.</p>
  </Modal>

  <!-- Tall modal (80% of screen height) -->
  <Modal
    :open="isTallModalOpen"
    title="Tall Modal"
    :height="80"
    @close="closeTallModal"
  >
    <p>This modal takes up 80% of the screen height.</p>
  </Modal>
</template>
```

### Controlling Click-Outside and Escape Key Behavior

```vue
<template>
  <Modal
    :open="isOpen"
    title="Modal with Custom Behavior"
    :closeOnOutsideClick="false"
    :closeOnEscape="false"
    @close="closeModal"
  >
    <p>This modal can only be closed using the buttons.</p>
    <p>Clicking outside or pressing Escape won't close it.</p>
  </Modal>
</template>
```

### Custom Styling

```vue
<template>
  <Modal
    :open="isOpen"
    title="Custom Styled Modal"
    customClass="my-custom-modal"
    @close="closeModal"
  >
    <p>This modal has custom styling applied via the customClass prop.</p>
  </Modal>
</template>

<style>
.my-custom-modal {
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}

.my-custom-modal .modal-header {
  background-color: #4361ee;
  color: white;
}

.my-custom-modal .modal-footer {
  background-color: #f8f9fa;
}
</style>
```

### Complex Filter Modal with Initial Values

```vue
<script setup>
import { ref } from 'vue';
import { FilterModal } from '@lpkitvue/modal';

const isOpen = ref(false);

const formItems = [
  {
    name: 'dateRange',
    label: 'Date Range',
    type: 'daterange',
    size: 12
  },
  {
    name: 'categories',
    label: 'Categories',
    type: 'select',
    multiple: true,
    options: [
      { label: 'Electronics', value: 'electronics' },
      { label: 'Books', value: 'books' },
      { label: 'Clothing', value: 'clothing' }
    ],
    size: 6
  },
  {
    name: 'priceRange',
    label: 'Price Range',
    type: 'range',
    min: 0,
    max: 1000,
    size: 6
  }
];

const initialValues = {
  dateRange: [new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)],
  categories: ['electronics'],
  priceRange: [0, 500]
};

const handleApplyFilters = (values) => {
  console.log('Advanced filters:', values);
  isOpen.value = false;
};
</script>

<template>
  <FilterModal
    :open="isOpen"
    title="Advanced Filters"
    :formItems="formItems"
    :initialValues="initialValues"
    :width="40"
    @close="isOpen = false"
    @save="handleApplyFilters"
  />
</template>
```

### Internationalization

```vue
<script setup>
import { useI18n } from 'vue-i18n';
import { Modal } from '@lpkitvue/modal';

const { t } = useI18n();
const isOpen = ref(false);
</script>

<template>
  <Modal
    :open="isOpen"
    :title="t('MODAL.DIALOG_TITLE')"
    @close="isOpen = false"
  >
    <p>{{ t('MODAL.DIALOG_CONTENT') }}</p>
  </Modal>
</template>
```

## API Reference

### Modal Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | Required | Controls visibility of the modal |
| `title` | `string` | Required | Title displayed in the modal header |
| `width` | `string \| number` | `undefined` | Modal width (number for percentage, string for explicit value) |
| `height` | `string \| number` | `undefined` | Modal height (number for percentage, string for explicit value) |
| `closeOnOutsideClick` | `boolean` | `true` | Whether clicking outside the modal closes it |
| `closeOnEscape` | `boolean` | `true` | Whether pressing Escape key closes the modal |
| `customClass` | `string` | `''` | Additional CSS class for styling |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `close` | none | Emitted when the modal is closed |
| `save` | none | Emitted when the save button is clicked |

#### Slots

| Slot | Description |
|------|-------------|
| `default` | Modal body content |
| `footer` | Custom footer content (replaces default footer) |

### FilterModal Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | Required | Controls visibility of the modal |
| `title` | `string` | Required | Title displayed in the modal header |
| `formItems` | `FormItemProps[]` | Required | Form configuration for the filter form |
| `width` | `number` | `30` | Width of the modal as a percentage of the screen |
| `customClass` | `string` | `''` | Additional CSS class for styling |
| `closeOnEscape` | `boolean` | `true` | Whether pressing Escape key closes the modal |
| `initialValues` | `Record<string, any>` | `{}` | Initial values for the form fields |

#### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `close` | none | Emitted when the modal is closed |
| `save` | `(values: Record<string, any>)` | Emitted when filters are applied with form values |
| `clear` | none | Emitted when the clear button is clicked |

#### Slots

| Slot | Description |
|------|-------------|
| `header` | Custom content to display above the form |
| `default` | Additional content to display below the form |

## TypeScript Support

The package includes TypeScript definitions for all components and their props:

```typescript
import { Modal, FilterModal } from '@lpkitvue/modal';
import type { ModalProps, FilterModalProps } from '@lpkitvue/modal';

const modalProps: ModalProps = {
  open: true,
  title: 'Typed Modal',
  width: 500,
  closeOnOutsideClick: true,
  closeOnEscape: true
};

import type { FormItemProps } from '@lpkitvue/form';

const formItems: FormItemProps[] = [
  {
    name: 'search',
    label: 'Search',
    type: 'input',
    required: false,
    size: 12
  }
];

const filterModalProps: FilterModalProps = {
  open: true,
  title: 'Typed Filter Modal',
  formItems,
  width: 30
};
```

## Accessibility

The modal components implement accessibility best practices:

- **Proper ARIA Roles**: Uses `role="dialog"` and `aria-modal="true"` to indicate a modal dialog
- **Focus Management**: Focuses on the first focusable element when opened and restores focus when closed
- **Keyboard Navigation**:
  - Tab key for navigating through focusable elements within the modal
  - Escape key for closing the modal (configurable)
  - Enter key for triggering the primary action
- **Screen Reader Support**: Modal title is properly associated with the dialog
- **Color Contrast**: Meets WCAG 2.1 AA standards for text and interactive elements
- **Descriptive Labels**: Buttons and controls have clear, descriptive labels
- **Reduced Motion Support**: Animations respect user preferences for reduced motion

When implementing modals in your application, consider these additional accessibility practices:

- Ensure modal content is descriptive and concise
- Provide clear instructions and feedback
- Use proper heading structure within the modal content
- Test with screen readers and keyboard-only navigation
- Consider adding `aria-describedby` for more complex modals
