# Bread-Tag

A flexible and SEO-friendly breadcrumb navigation component for Vue 3 applications, designed to help users understand their current location within a website's hierarchy.

## Introduction

The Bread-Tag component provides intuitive breadcrumb navigation for your web applications. It helps users understand their location in the website structure and navigate back to previous levels with ease. The component is highly customizable, SEO-friendly with structured data support, and offers multiple separator styles to match your design requirements.

## Features

- 🧭 Simple and intuitive breadcrumb navigation
- 🔄 Multiple separator styles (chevron, slash, dot, dash, arrow)
- 🖼️ Support for icons in breadcrumb items
- 📱 Responsive design with truncation for mobile devices
- 🔍 Built-in structured data for improved SEO
- 🎨 Customizable styling for active and inactive items
- 🏷️ Automatic document title updates
- 🔗 Works seamlessly with Vue Router
- 🌐 Support for custom site title configuration

## Live Examples

<script setup>
import '@lpkitvue/bread-tag/dist/bread-tag.css';
import { BreadTag } from '@lpkitvue/bread-tag';
import { ref } from 'vue';

const basicBreadcrumbs = [
  { title: 'Home', slug: '/' },
  { title: 'Components', slug: '/components' },
  { title: 'Navigation', slug: '/components/navigation' },
  { title: 'Bread-Tag', slug: '/components/navigation/bread-tag' }
];

const iconBreadcrumbs = [
  { 
    title: 'Home', 
    slug: '/', 
  },
  { 
    title: 'Components', 
    slug: '/components',
  },
  { 
    title: 'Bread-Tag', 
    slug: '/components/bread-tag' 
  }
];


const selectedSeparator = ref('chevron');
const separators = ['chevron', 'slash', 'dot', 'dash', 'arrow'];


const longBreadcrumbs = [
  { title: 'Home', slug: '/' },
  { title: 'Products', slug: '/products' },
  { title: 'Electronics', slug: '/products/electronics' },
  { title: 'Computers', slug: '/products/electronics/computers' },
  { title: 'Laptops', slug: '/products/electronics/computers/laptops' },
  { title: 'Gaming', slug: '/products/electronics/computers/laptops/gaming' },
  { title: 'ASUS', slug: '/products/electronics/computers/laptops/gaming/asus' },
  { title: 'ROG Series', slug: '/products/electronics/computers/laptops/gaming/asus/rog' }
];
</script>

### Basic Example

<BreadTag
title="Bread-Tag Component"
:breadTagList="basicBreadcrumbs"
separator="chevron"
/>

### With Icons

<BreadTag
title="Using Icons"
:breadTagList="iconBreadcrumbs"
separator="chevron"
/>

### Different Separators

<div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
  <div style="display: flex; gap: 8px; align-items: center;">
    <span style="font-weight: bold; min-width: 100px;">Separator:</span>
    <select v-model="selectedSeparator" style="padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc;">
      <option v-for="separator in separators" :key="separator" :value="separator">
        {{ separator }}
      </option>
    </select>
  </div>

<BreadTag
title="Different Separators"
:breadTagList="basicBreadcrumbs"
:separator="selectedSeparator"
/>
</div>

### Truncated for Mobile (Many Levels)

<BreadTag
title="Truncated Breadcrumbs"
:breadTagList="longBreadcrumbs"
separator="chevron"
:maxItems="4"
/>

## Installation

```bash
npm install @lpkitvue/bread-tag
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/bread-tag/dist/bread-tag.css';
```

This package has dependencies on other LPKitVue components:

```bash
# Required for icon support
npm install @lpkitvue/font-icon

# Vue Router is a peer dependency
npm install vue-router
```

## Basic Usage

```vue
<script setup>
import { BreadTag } from '@lpkitvue/bread-tag';
import type { BreadTagTypes } from '@lpkitvue/bread-tag';

const breadcrumbs = [
  { title: 'Home', slug: '/' },
  { title: 'Products', slug: '/products' },
  { title: 'Electronics', slug: '/products/electronics' },
];
</script>

<template>
  <BreadTag
    title="Electronics"
    :breadTagList="breadcrumbs"
    separator="chevron"
  />
</template>
```

## Advanced Usage

### With Icons

```vue
<script setup>
import { BreadTag } from '@lpkitvue/bread-tag';

const breadcrumbs = [
  { 
    title: 'Home', 
    slug: '/', 
  },
  { 
    title: 'Users', 
    slug: '/users',
  },
  { 
    title: 'Settings', 
    slug: '/users/settings',
  },
];
</script>

<template>
  <BreadTag
    title="User Settings"
    :breadTagList="breadcrumbs"
    separator="chevron"
  />
</template>
```

### Truncated for Mobile

When you have many levels, you can use the `maxItems` prop to truncate the breadcrumb:

```vue
<template>
  <BreadTag
    title="Product Details"
    :breadTagList="breadcrumbs"
    separator="chevron"
    :maxItems="4"
  />
</template>
```

This will show the first and last 3 items, with an ellipsis (...) in the middle when there are more than 4 items.

### Custom Styling

```vue
<template>
  <BreadTag
    title="Custom Styled Breadcrumbs"
    :breadTagList="breadcrumbs"
    activeClass="text-green-600 font-bold"
    inactiveClass="text-blue-500 hover:text-blue-700"
  />
</template>
```

### SEO-Friendly with Structured Data

The BreadTag component automatically generates structured data in JSON-LD format for better SEO:

```vue
<template>
  <BreadTag
    title="SEO-Friendly Breadcrumbs"
    description="Page description for SEO"
    :breadTagList="breadcrumbs"
    :structured="true"
  />
</template>
```

This adds schema.org markup that search engines can use to understand the page hierarchy.

### Dynamic Breadcrumbs from Route

You can dynamically generate breadcrumbs based on the current route:

```vue
<script setup>
import { BreadTag } from '@lpkitvue/bread-tag';
import type { BreadTagTypes } from '@lpkitvue/bread-tag';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);
  const breadcrumbItems = [
    { title: 'Home', slug: '/' }
  ];
  
  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      slug: currentPath
    });
  });
  
  return breadcrumbItems;
});
</script>

<template>
  <BreadTag
    :title="route.meta.title || 'Page'"
    :breadTagList="breadcrumbs"
  />
</template>
```

### Global Configuration

You can set global defaults for all BreadTag components:

```typescript
import { setSiteTitle, setSeparator, setConfig } from '@lpkitvue/bread-tag';

setSiteTitle('My Website');

setSeparator('slash');

setConfig({
  siteTitle: 'My Website',
  separator: 'slash',
  autoTitle: true,
  maxItems: 5,
  structured: true,
  activeClass: 'text-blue-500 font-bold',
  inactiveClass: 'text-gray-500 hover:text-gray-700'
});
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'default-site-title'` | Page title (will update document title if autoTitle is true) |
| `description` | `string` | `''` | Optional description for SEO purposes |
| `breadTagList` | `BreadTagTypes` | `[{ slug: 'javascript:void(0)' }]` | Array of breadcrumb items |
| `separator` | `BreadTagSeparatorType` | `'chevron'` | Separator style between items |
| `autoTitle` | `boolean` | `true` | Whether to automatically update document title |
| `maxItems` | `number` | `0` | Maximum number of items to display (0 = no limit) |
| `structured` | `boolean` | `true` | Whether to include structured data for SEO |
| `activeClass` | `string` | `'text-primary'` | CSS class for active breadcrumb item |
| `inactiveClass` | `string` | `'hover:text-gray-500/70 dark:hover:text-white-dark/70'` | CSS class for inactive items |

### Types

```typescript
type BreadTagSeparatorType = 'chevron' | 'slash' | 'dot' | 'dash' | 'arrow' | string;

type BreadTagType = {
  title?: string;
  slug: string;
  icon?: string;
  classLi?: string;
  classA?: string;
  active?: boolean;
  isLast?: boolean;
  isMobile?: boolean;
};

type BreadTagTypes = BreadTagType[];

interface BreadTagOptions {
  title: string;
  description?: string;
  breadTagList: BreadTagTypes;
  separator?: BreadTagSeparatorType;
  autoTitle?: boolean;
  maxItems?: number;
  structured?: boolean;
  activeClass?: string;
  inactiveClass?: string;
}
```

### Global Configuration Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `setSiteTitle` | `(title: string) => void` | Set global site title for all breadcrumbs |
| `setSeparator` | `(separator: string) => void` | Set global default separator |
| `setConfig` | `(config: Partial<typeof config>) => void` | Set multiple configuration options at once |

## TypeScript Support

The package includes TypeScript definitions for all components and types:

```typescript
import { BreadTag, setSiteTitle, setSeparator, setConfig } from '@lpkitvue/bread-tag';
import type { 
  BreadTagType, 
  BreadTagTypes, 
  BreadTagOptions, 
  BreadTagSeparatorType 
} from '@lpkitvue/bread-tag';

const breadcrumbs: BreadTagTypes = [
  { title: 'Home', slug: '/' },
  { title: 'Products', slug: '/products' },
  { title: 'Details', slug: '/products/details' }
];

const options: Partial<BreadTagOptions> = {
  title: 'Product Details',
  separator: 'chevron',
  maxItems: 5
};
```

## Accessibility

The BreadTag component follows accessibility best practices:

- Uses semantic HTML with `<nav>` and `<ol>` elements for proper breadcrumb structure
- Includes proper ARIA labeling with `aria-label="Breadcrumb"`
- Properly indicates the current page with `aria-current="page"`
- Uses appropriate contrast ratios for text and background
- Supports keyboard navigation
- Renders micro-data markup for screen readers
- Provides clear visual indication of the current location
- Maintains a logical navigation structure
- Supports RTL (right-to-left) languages
