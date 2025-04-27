# Form
A comprehensive form component system for Vue 3 applications with built-in validation, dynamic field rendering, and extensive customization options.
The Form component provides a powerful and flexible way to build complex forms in your Vue applications. It offers a declarative approach to form creation, letting you define fields, validation rules, and layout through a simple configuration object. Built with TypeScript and integrated with popular validation libraries, it streamlines the entire form lifecycle from rendering to submission.

## Features

- 🔄 Dynamic field rendering based on JSON configuration
- ✅ Built-in validation through Yup integration
- 📱 Responsive grid layout with column span options
- 🧩 Rich set of input components (text, select, checkbox, date picker, etc.)
- 🎯 Conditional field visibility based on other field values
- 🔄 Two-way data binding with v-model support
- 🚦 Sophisticated field dependencies and cascading updates
- 📋 Form submission handling with loading states
- 🧹 Form reset functionality
- 👁️ Support for readonly and disabled states
- 🎛️ Customizable layout with row and column gap controls
- 📊 Comprehensive event system for form interactions
- 📐 Field sizing and responsive breakpoint control

## Live Examples

<script setup>
import '@lpkitvue/form/dist/form.css';
import { FormItem } from '@lpkitvue/form';
import { ref } from 'vue';

// Basic form fields
const basicFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'input',
    required: true,
    size: 12
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 12
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
    rows: 4,
    size: 12
  }
];

// Complex form with different field types
const complexFields = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    required: true,
    size: 6
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'input',
    required: true,
    size: 6
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 6
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'masked',
    mask: '(###) ###-####',
    size: 6
  },
  {
    name: 'department',
    label: 'Department',
    type: 'select',
    options: [
      { label: 'Marketing', value: 'marketing' },
      { label: 'Sales', value: 'sales' },
      { label: 'Engineering', value: 'engineering' },
      { label: 'Human Resources', value: 'hr' }
    ],
    size: 6
  },
  {
    name: 'role',
    label: 'Role',
    type: 'radio',
    options: [
      { label: 'Employee', value: 'employee' },
      { label: 'Manager', value: 'manager' },
      { label: 'Director', value: 'director' }
    ],
    size: 6
  },
  {
    name: 'notifications',
    label: 'Receive Notifications',
    type: 'switch',
    defaultValue: true,
    size: 12
  }
];

// Form with conditional fields
const conditionalFields = [
  {
    name: 'contactMethod',
    label: 'Preferred Contact Method',
    type: 'select',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'Phone', value: 'phone' },
      { label: 'Mail', value: 'mail' }
    ],
    size: 12
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 12,
    showWhen: (values) => values.contactMethod === 'email',
    dependsOn: ['contactMethod']
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'masked',
    mask: '(###) ###-####',
    required: true,
    size: 12,
    showWhen: (values) => values.contactMethod === 'phone',
    dependsOn: ['contactMethod']
  },
  {
    name: 'address',
    label: 'Mailing Address',
    type: 'textarea',
    required: true,
    size: 12,
    showWhen: (values) => values.contactMethod === 'mail',
    dependsOn: ['contactMethod']
  }
];

const formLoading = ref(false);
const formValues = ref({});

const handleSubmit = (values) => {
  formLoading.value = true;
  formValues.value = values;
  
  // Simulate API call
  setTimeout(() => {
    formLoading.value = false;
  }, 1500);
};

const resetForm = () => {
  formValues.value = {};
};
</script>

### Basic Form

<FormItem
:fields="basicFields"
:onSubmit="handleSubmit"
:loading="formLoading"
/>

### Complex Form with Multiple Field Types

<FormItem
:fields="complexFields"
:onSubmit="handleSubmit"
:loading="formLoading"
columnGap="4"
rowGap="6"
/>

### Form with Conditional Fields

<FormItem
:fields="conditionalFields"
:onSubmit="handleSubmit"
:loading="formLoading"
/>

<div v-if="Object.keys(formValues).length > 0" style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
  <h4>Submitted Values:</h4>
  <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
</div>

## Installation

```bash
npm install @lpkitvue/form
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/alert/dist/alert.css';
```

This package has the following peer dependencies:

```bash
npm install @lpkitvue/button @tanstack/vue-form @tanstack/yup-form-adapter yup
```

## Basic Usage

```vue
<script setup>
import { FormItem } from '@lpkitvue/form';

// Define form fields configuration
const fields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'input',
    required: true,
    size: 12
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 12
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
    rows: 4,
    size: 12
  }
];

// Handle form submission
const handleSubmit = (values) => {
  console.log('Form submitted:', values);
  // Process the form data
};
</script>

<template>
  <FormItem 
    :fields="fields" 
    :onSubmit="handleSubmit"
  />
</template>
```

## Advanced Usage

### Form with Responsive Layout

```vue
<script setup>
import { FormItem } from '@lpkitvue/form';

const fields = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    required: true,
    size: 12,     // Full width on mobile
    md: 6,        // Half width on medium screens
    lg: 4         // One-third width on large screens
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'input', 
    required: true,
    size: 12,     // Full width on mobile
    md: 6,        // Half width on medium screens
    lg: 4         // One-third width on large screens
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 12,     // Full width on mobile
    lg: 4         // One-third width on large screens
  }
];
</script>

<template>
  <FormItem 
    :fields="fields" 
    :onSubmit="handleSubmit"
    columnGap="4"
    rowGap="4"
  />
</template>
```

### Form with Validation

```vue
<script setup>
import { FormItem } from '@lpkitvue/form';
import * as yup from 'yup';

const fields = [
  {
    name: 'username',
    label: 'Username',
    type: 'input',
    required: true,
    rules: 'required|min:3|max:20',
    hint: 'Between 3-20 characters'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    itemType: 'email',
    required: true,
    rules: 'required|email',
    hint: 'Enter a valid email address'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    itemType: 'password',
    required: true,
    rules: 'required|min:8|matches:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/',
    hint: 'Min 8 chars with uppercase, lowercase and number'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'input',
    itemType: 'password',
    required: true,
    rules: 'required|same:password',
    dependsOn: ['password']
  }
];
</script>

<template>
  <FormItem 
    :fields="fields" 
    :onSubmit="handleSubmit"
  />
</template>
```

### Form with Conditional Logic

```vue
<script setup>
import { FormItem } from '@lpkitvue/form';

const fields = [
  {
    name: 'hasCompany',
    label: 'Do you represent a company?',
    type: 'switch',
    defaultValue: false,
    size: 12
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'input',
    required: true,
    size: 12,
    showWhen: (values) => values.hasCompany === true,
    dependsOn: ['hasCompany']
  },
  {
    name: 'companySize',
    label: 'Company Size',
    type: 'select',
    options: [
      { label: '1-10 employees', value: 'small' },
      { label: '11-50 employees', value: 'medium' },
      { label: '51-200 employees', value: 'large' },
      { label: '201+ employees', value: 'enterprise' }
    ],
    size: 12,
    showWhen: (values) => values.hasCompany === true,
    dependsOn: ['hasCompany']
  },
  {
    name: 'name',
    label: 'Your Name',
    type: 'input',
    required: true,
    size: 12
  }
];
</script>

<template>
  <FormItem 
    :fields="fields" 
    :onSubmit="handleSubmit"
  />
</template>
```

### Form with Readonly or Disabled State

```vue
<script setup>
import { FormItem } from '@lpkitvue/form';
import { ref } from 'vue';

const fields = [
  // Your field definitions here
];

const isReadonly = ref(false);
const isDisabled = ref(false);

const toggleReadonly = () => {
  isReadonly.value = !isReadonly.value;
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};
</script>

<template>
  <div>
    <div class="controls">
      <button @click="toggleReadonly">Toggle Readonly</button>
      <button @click="toggleDisabled">Toggle Disabled</button>
    </div>
    
    <FormItem 
      :fields="fields" 
      :onSubmit="handleSubmit"
      :readonly="isReadonly"
      :disabled="isDisabled"
    />
  </div>
</template>
```

## API Reference

### FormItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | `FormItemProps[]` | *Required* | Array of field definitions |
| `onSubmit` | `(values: Record<string, any>) => void \| Promise<void>` | *Required* | Form submission handler |
| `showClearButton` | `boolean` | `true` | Whether to show the clear button |
| `columnGap` | `string` | `'4'` | Gap between columns |
| `rowGap` | `string` | `'4'` | Gap between rows |
| `loading` | `boolean` | `false` | Whether the form is in loading state |
| `readonly` | `boolean` | `false` | Whether all fields are readonly |
| `disabled` | `boolean` | `false` | Whether all fields are disabled |
| `validateOnMount` | `boolean` | `false` | Whether to validate on mount |
| `validateOnBlur` | `boolean` | `true` | Whether to validate on blur |
| `validateOnChange` | `boolean` | `false` | Whether to validate on change |
| `formClassName` | `string` | `''` | Additional CSS class for the form |
| `actionAlign` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'end'` | Alignment of action buttons |
| `noActions` | `boolean` | `false` | Whether to hide action buttons |

### Field Definition Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Field name (unique identifier) |
| `label` | `string` | Field label |
| `type` | `string` | Field type ('input', 'select', 'textarea', 'switch', 'radio', 'checkbox', 'masked', 'datepicker', 'file', 'editor', etc.) |
| `required` | `boolean` | Whether the field is required |
| `value` | `any` | Initial field value |
| `defaultValue` | `any` | Default value if none provided |
| `placeholder` | `string` | Placeholder text |
| `disabled` | `boolean` | Whether the field is disabled |
| `readonly` | `boolean` | Whether the field is readonly |
| `visible` | `boolean` | Whether the field is visible |
| `hint` | `string` | Hint text below the field |
| `tooltip` | `string` | Additional info shown on hover |
| `className` | `string` | Additional CSS class |
| `size` | `number` | Column span (1-12) for default screens |
| `xs` | `number` | Column span for extra small screens |
| `sm` | `number` | Column span for small screens |
| `md` | `number` | Column span for medium screens |
| `lg` | `number` | Column span for large screens |
| `xl` | `number` | Column span for extra large screens |
| `showWhen` | `(values: Record<string, any>) => boolean` | Function to determine visibility based on form values |
| `dependsOn` | `string \| string[]` | Fields this field depends on |
| `rules` | `string` | Validation rules in string format |
| `options` | `{label: string, value: any}[]` | Options for select, radio, etc. |

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `submit` | `(values: Record<string, any>)` | Emitted when form is submitted |
| `reset` | none | Emitted when form is reset |
| `change` | `(name: string, value: any)` | Emitted when a field value changes |
| `blur` | `(name: string, value: any)` | Emitted when a field is blurred |
| `error` | `(errors: Record<string, string>)` | Emitted when validation errors occur |
| `valid` | `(isValid: boolean)` | Emitted when form validity changes |

### Exposed Methods

```typescript
// Reference the form component
const formRef = ref(null);

// Access methods
formRef.value.reset();         // Reset form
formRef.value.submit();        // Submit form programmatically
formRef.value.setFieldValue(name, value);  // Set a field's value
formRef.value.getFieldValue(name);         // Get a field's value
formRef.value.validate();                  // Validate all fields
formRef.value.isValid;                     // Check if form is valid
formRef.value.isDirty;                     // Check if form is dirty
formRef.value.errors;                      // Get all validation errors
formRef.value.values;                      // Get all form values
formRef.value.clearErrors();               // Clear all validation errors
```

## TypeScript Support

The package includes TypeScript definitions:

```typescript
// Import types
import type { FormItemProps } from '@lpkitvue/form';

// Define typed field configuration
const fields: FormItemProps[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'input',
    required: true,
    size: 12
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    itemType: 'email',
    required: true,
    size: 12
  }
];
```

## Accessibility

The form component implements accessibility best practices:

- Proper form semantics with fieldsets and legends where appropriate
- Labeled inputs with explicit associations via `for` attributes
- ARIA attributes for required fields, error states, and descriptions
- Clear error messaging with proper roles
- Keyboard navigation support
- Focus management
- High contrast visual indicators for active elements
- Screen reader support with properly announced validation errors
- Support for reduced motion preferences
