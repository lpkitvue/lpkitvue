# Editor

A flexible and feature-rich rich text editor component for Vue 3 applications built with TypeScript.

## Introduction

The Editor component provides a simple yet powerful WYSIWYG (What You See Is What You Get) editing experience for your Vue applications. It offers essential text formatting capabilities, supports two-way binding with v-model, and is highly customizable to meet your content editing needs.

## Features

- 🖋️ Rich text formatting (bold, italic, underline, strikethrough)
- 📝 Paragraph formatting and headings
- 🎨 Text color customization
- 📏 Text alignment options (left, center, right)
- 📋 Bulleted list support
- 🔄 Two-way binding with v-model
- 📱 Responsive design
- 🔒 Readonly mode support
- 💬 Placeholder text support
- ⌨️ Keyboard shortcuts for common formatting actions
- 🎯 Event-based interaction with parent components

## Live Examples

<script setup>
import '@lpkitvue/editor/dist/editor.css';
import { LpEditor } from '@lpkitvue/editor';
import { ref } from 'vue';

const content = ref('<p>This is a sample text. <strong>Try selecting part of this text</strong> to see the formatting options in the toolbar.</p>');
const readonlyContent = ref('<p>This content cannot be edited because it is in readonly mode.</p>');

const handleContentChange = (newContent) => {
  console.log('Content changed:', newContent);
};
</script>

### Basic Editor

<LpEditor
v-model="content"
placeholder="Start typing..."
@change="handleContentChange"
/>

<div class="mt-4">
  <h4>Output Preview:</h4>
  <div v-html="content" style="border: 1px solid #eee; padding: 10px; margin-top: 10px;"></div>
</div>

### Readonly Mode

<LpEditor
v-model="readonlyContent"
:readonly="true"
/>

## Installation

```bash
npm install @lpkitvue/editor
```

Don't forget to import any required CSS:

```javascript
import '@lpkitvue/editor/dist/editor.css';
```

## Basic Usage

```vue
<script setup>
import { LpEditor } from '@lpkitvue/editor';
import { ref } from 'vue';

const content = ref('<p>Initial content for the editor</p>');

const handleChange = (newContent) => {
  console.log('Content changed:', newContent);
};
</script>

<template>
  <LpEditor 
    v-model="content" 
    placeholder="Start typing..." 
    @change="handleChange"
  />
</template>
```

## Advanced Usage

### Form Integration

```vue
<script setup>
import { LpEditor } from '@lpkitvue/editor';
import { reactive } from 'vue';

const formData = reactive({
  title: '',
  content: '',
});

const submitForm = () => {
  // Submit form with content
  console.log('Submitting form:', formData);
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label>Title</label>
      <input v-model="formData.title" type="text" />
    </div>
    
    <div class="form-group">
      <label>Content</label>
      <LpEditor v-model="formData.content" placeholder="Enter content..." />
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>
```

### Auto-save Integration

```vue
<script setup>
import { LpEditor } from '@lpkitvue/editor';
import { ref, watch } from 'vue';
import { useStorage } from '@lpkitvue/storage';

// Initialize storage
const { storage } = useStorage({ storeName: 'editor-content' });

const content = ref('<p>Initial content</p>');

// Load saved content on mount
onMounted(async () => {
  const savedContent = await storage.getItem('draft-content');
  if (savedContent) {
    content.value = savedContent;
  }
});

// Save content on change
watch(content, async (newContent) => {
  await storage.setItem('draft-content', newContent);
  console.log('Content auto-saved');
}, { debounce: 500 });
</script>

<template>
  <div>
    <h3>Auto-saving Editor</h3>
    <p class="text-sm text-gray-500">Content is automatically saved as you type</p>
    <LpEditor v-model="content" placeholder="Start typing..." />
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | The HTML content of the editor (used with v-model) |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text to show when editor is empty |
| `readonly` | `boolean` | `false` | When true, content cannot be edited |
| `id` | `string` | auto-generated | Optional ID for the editor container |

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `update:modelValue` | `(value: string)` | Emitted when content changes (for v-model) |
| `change` | `(value: string)` | Emitted when content changes (debounced) |

### Formatting Options

The editor toolbar provides the following formatting options:

- **Paragraph Formatting**: Normal paragraph, Heading 1-6
- **Text Formatting**: Bold, Italic, Strikethrough, Underline
- **List Formatting**: Bulleted list
- **Alignment**: Left, Center, Right
- **Text Color**: Color picker with common color options

### Keyboard Shortcuts

The editor supports the following keyboard shortcuts:

- **Ctrl/Cmd + B**: Bold
- **Ctrl/Cmd + I**: Italic
- **Ctrl/Cmd + U**: Underline
- **Ctrl/Cmd + Shift + X**: Strikethrough

## TypeScript Support

The package includes TypeScript definitions:

```typescript
// Available types
import type { EditorProps, EditorEmits, FormatState } from '@lpkitvue/editor';

// Editor props interface
interface EditorProps {
  modelValue: string;
  placeholder?: string;
  readonly?: boolean;
  id?: string;
}

// Editor emit events
interface EditorEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}

// Format state interface
interface FormatState {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  alignment: 'left' | 'center' | 'right';
  color: string;
}
```

## Accessibility

The editor component is built with accessibility in mind:

- Proper ARIA attributes for toolbar buttons
- Keyboard navigation and shortcuts
- High-contrast visual indicators
- Role attributes for screen readers
- Focus management for keyboard users
- Semantic HTML structure

### Limitations

- Image uploading is not supported in the current version
- Table creation and management is not supported
- Limited HTML sanitization (be careful with user-generated content)
