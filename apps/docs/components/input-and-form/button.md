# Button

A collection of customizable button components for Vue 3 applications built with TypeScript.

## Introduction

The Button component provides a comprehensive set of button variants designed for different use cases throughout your application. From standard actions to table operations, form submissions, and icon buttons, this component library offers a flexible and consistent approach to button styling and functionality.

## Features

- 🧩 Multiple button types for different contexts (table operations, form submissions, etc.)
- 🎨 Extensive styling options with predefined themes
- 📏 Three size variants (small, medium, large)
- 🖼️ Icon support with flexible positioning
- ⏳ Loading state support for asynchronous operations
- ♿ Accessibility-friendly with proper ARIA attributes
- 📱 Responsive design that works across devices
- 📦 Modular architecture - import only what you need
- 🔍 Complete TypeScript definitions

## Live Examples

<script setup>
import '@lpkitvue/button/dist/button.css';
import { 
  TableAddButton,
  TableExcelButton, 
  TableFilterButton,
  ClearButton,
  SubmitButton,
  Button,
  ButtonGroup
} from '@lpkitvue/button';
import { ref } from 'vue';

const handleClick = (type) => {
  alert(`${type} button clicked!`);
};

const isLoading = ref(false);

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  if (isLoading.value) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  }
};
</script>


<div class="button-demo" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
  <TableAddButton text="Add" @click="() => handleClick('Add')" />
  <TableExcelButton text="Export" @click="() => handleClick('Export')" />
  <TableFilterButton text="Filter" @click="() => handleClick('Filter')" />
  <ClearButton text="Clear" @click="() => handleClick('Clear')" />
  <SubmitButton text="Submit" @click="() => handleClick('Submit')" />
  <IconButton text="Save" icon="save" @click="() => handleClick('Save')" />
</div>
<div class="button-demo" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
  <Button text="Primary" className="btn-primary" @click="() => handleClick('Primary')" />
  <Button text="Secondary" className="btn-secondary" @click="() => handleClick('Secondary')" />
  <Button text="Success" className="btn-success" @click="() => handleClick('Success')" />
  <Button text="Danger" className="btn-danger" @click="() => handleClick('Danger')" />
  <Button text="Warning" className="btn-warning" @click="() => handleClick('Warning')" />
  <Button text="Info" className="btn-info" @click="() => handleClick('Info')" />
  <Button text="Dark" className="btn-dark" @click="() => handleClick('Dark')" />
  <Button text="Light" className="btn-light" @click="() => handleClick('Light')" />
</div>
<div class="button-demo" style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 2rem;">
  <Button text="Small" size="sm" className="btn-primary" @click="() => handleClick('Small')" />
  <Button text="Medium" size="md" className="btn-primary" @click="() => handleClick('Medium')" />
  <Button text="Large" size="lg" className="btn-primary" @click="() => handleClick('Large')" />
</div>
<div class="button-demo" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
  <Button text="Left Icon" icon="check" iconPosition="left" className="btn-primary" @click="() => handleClick('Left Icon')" />
  <Button text="Right Icon" icon="arrow-right" iconPosition="right" className="btn-primary" @click="() => handleClick('Right Icon')" />
</div>
<div class="button-demo" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
  <SubmitButton text="Submit" :loading="isLoading" className="btn-primary" @click="toggleLoading" />
  <SubmitButton text="Loading" :loading="true" className="btn-primary" />
</div>
<div class="button-demo" style="margin-bottom: 2rem;">
  <ButtonGroup>
    <TableAddButton text="Add" @click="() => handleClick('Add')" />
    <TableFilterButton text="Filter" @click="() => handleClick('Filter')" />
    <TableExcelButton text="Export" @click="() => handleClick('Export')" />
  </ButtonGroup>
</div>
<div class="button-demo" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
  <IconButton text="Disabled" className="btn-primary" :disabled="true" />
  <SubmitButton text="Disabled" className="btn-success" :disabled="true" />
  <ClearButton text="Disabled" :disabled="true" />
</div>

## Installation

```bash
npm install @lpkitvue/button
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/button/dist/button.css';
```

## Basic Usage

```vue
<script setup>
    import '@lpkitvue/button/dist/button.css';
    import {
        TableAddButton,
        SubmitButton,
        ClearButton,
        IconButton
    } from '@lpkitvue/button';

    const handleAdd = () => {
        // Add item logic
    };

    const handleSubmit = () => {
        // Form submission logic
    };

    const handleClear = () => {
        // Clear form logic
    };
</script>

<template>
    <!-- Table action buttons -->
    <div class="table-actions">
        <TableAddButton
            text="Add Item"
            className="btn-primary"
            :onClick="handleAdd"
        />
    </div>

    <!-- Form buttons -->
    <div class="form-actions">
        <ClearButton
            text="Clear Form"
            :onClick="handleClear"
        />

        <SubmitButton
            text="Submit"
            type="submit"
            :loading="isLoading"
        />
    </div>

    <!-- Icon button -->
    <IconButton
        text="Download"
        icon="download"
        className="btn-primary"
        :onClick="handleDownload"
    />
</template>
```

## Advanced Usage

### Button Group for Related Actions

Group related buttons together with `ButtonGroup` component:

```vue
<template>
    <ButtonGroup>
        <TableAddButton text="Add" @click="handleAdd" />
        <TableFilterButton text="Filter" @click="handleFilter" />
        <TableExcelButton text="Export" @click="handleExport" />
    </ButtonGroup>
</template>
```

### Vertical Button Group

```vue
<template>
    <ButtonGroup vertical>
        <IconButton text="Edit" icon="edit" className="btn-primary" />
        <IconButton text="Delete" icon="trash" className="btn-danger" />
        <IconButton text="Share" icon="share" className="btn-info" />
    </ButtonGroup>
</template>
```

### Outline Buttons

```vue
<template>
    <IconButton text="Outline Button" className="btn-outline-primary" />
    <IconButton text="Outline Button" className="btn-outline-danger" />
</template>
```

### Handling Asynchronous Operations

```vue
<script setup>
    import { ref } from 'vue';
    import { SubmitButton } from '@lpkitvue/button';

    const isLoading = ref(false);

    const handleAsyncAction = async () => {
        isLoading.value = true;

        try {
            // Perform async operation
            await someAsyncOperation();
        } catch (error) {
            // Handle error
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    };
</script>

<template>
    <SubmitButton
        text="Save Changes"
        :loading="isLoading"
        @click="handleAsyncAction"
    />
</template>
```

## API Reference

### Common Button Props

All button components share these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Varies by component | Button label text |
| `onClick` | `() => void` | `() => {}` | Click event handler |
| `type` | `'submit' \| 'button'` | `'button'` | HTML button type attribute |
| `className` | `ClassnameTypes` | `'btn-light'` | CSS class for styling |
| `disabled` | `boolean` | `false` | Disables the button when true |
| `name` | `string` | `'button'` | HTML name attribute |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` (varies by component) | Button size |
| `description` | `string` | `''` | Description for accessibility |

### Table Button Components

#### TableAddButton

Button with a plus icon for adding items.

```vue
<TableAddButton
    text="Add Item"
    className="btn-primary"
    :onClick="handleAdd"
/>
```

#### TableExcelButton

Button with an export icon for exporting data.

```vue
<TableExcelButton
    text="Export to Excel"
    className="btn-success"
    :onClick="handleExport"
/>
```

#### TableFilterButton

Button with a filter icon for filtering data.

```vue
<TableFilterButton
    text="Filter"
    className="btn-light"
    :onClick="handleFilter"
/>
```

### Form Button Components

#### SubmitButton

Button for submitting forms with loading state support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Shows loading spinner when true |

```vue
<SubmitButton
    text="Submit"
    type="submit"
    :loading="isSubmitting"
/>
```

#### ClearButton

Button for clearing form inputs.

```vue
<ClearButton
    text="Clear Form"
    :onClick="handleClear"
/>
```

### IconButton

Customizable button with icon support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | Required | Name of the icon to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon relative to text |

```vue
<IconButton
    text="Save"
    icon="save"
    className="btn-primary"
    :onClick="handleSave"
/>
```

### ButtonGroup

Container for grouping related buttons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | `boolean` | `false` | Renders buttons vertically when true |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'none'` | Space between buttons |

```vue
<ButtonGroup spacing="md">
    <TableAddButton text="Add" />
    <TableFilterButton text="Filter" />
</ButtonGroup>
```

### Style Variants

Button components support the following class names:

- `btn-primary` - Blue button for primary actions
- `btn-secondary` - Purple button for secondary actions
- `btn-success` - Green button for success/confirmation actions
- `btn-danger` - Red button for dangerous/destructive actions
- `btn-warning` - Orange button for warning actions
- `btn-info` - Light blue button for informational actions
- `btn-dark` - Dark gray button for less prominent actions
- `btn-light` - Light gray button for subtle actions
- `btn-link` - Link-styled button for navigation
- `btn-outline-*` - Outlined versions of above variants

### Size Variants

Buttons support three sizes:

- `sm` - Small buttons
- `md` - Medium buttons (default)
- `lg` - Large buttons

## TypeScript Support

The package exports TypeScript types for all components and their props:

```typescript
import type { ButtonTypes, ClassnameTypes } from '@lpkitvue/button';

// Define button configuration
const buttonConfig: ButtonTypes = {
    text: 'Save',
    onClick: () => console.log('Button clicked'),
    className: 'btn-primary',
    size: 'md',
    disabled: false
};

// Type for class names
const className: ClassnameTypes = 'btn-outline-danger';
```

## Accessibility

The button components are built with accessibility in mind:

- All buttons use semantic `<button>` elements
- Proper ARIA attributes for disabled and loading states
- Focus indicators for keyboard navigation
- High contrast colors that meet WCAG 2.1 standards
- Keyboard support for all interactions
- Support for screen readers with appropriate labels
- IconButton properly associates icon with button text
- ButtonGroup uses appropriate ARIA attributes for grouping
