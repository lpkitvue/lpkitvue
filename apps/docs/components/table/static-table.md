# Static Table

A powerful and customizable table component for displaying static data in Vue 3 applications, built with TanStack Table.

## Introduction

The StaticTable component provides a flexible way to display and interact with table data in your Vue applications. It offers comprehensive features including sorting, filtering, pagination, and customization options. Designed for cases where you already have your data available, it renders efficiently and provides a consistent, accessible interface for your users.

## Features

- 📊 Efficient data display with sorting, filtering, and pagination
- 🎯 Row selection, expansion, and grouping capabilities
- 🎨 Customizable UI with themes and styling options
- 📱 Responsive design that works across devices
- 🔧 Column helpers for common data types (text, numeric, date, boolean)
- 🧩 Support for expandable rows with custom components
- ♿ Accessibility-friendly design with proper ARIA attributes
- 🧮 Footer summaries and aggregations
- 🔃 Customizable column resizing and reordering

## Live Examples

<script setup>
import '@lpkitvue/table/dist/table.css';
import { StaticTable, useColumnHelpers } from '@lpkitvue/table';
import { ref } from 'vue';

const { createTextColumn, createNumericColumn, createDateColumn, createBooleanColumn, createActionColumn } = useColumnHelpers();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  createNumericColumn('age', 'Age'),
  createDateColumn('joinDate', 'Join Date'),
  createBooleanColumn('isActive', 'Active Status', null, { iconMode: true }),
  createActionColumn('actions', [
    {
      label: 'Edit',
      icon: 'edit',
      onClick: (row) => alert(`Edit ${row.name}`),
      className: 'btn-primary'
    },
    {
      label: 'Delete',
      icon: 'trash',
      onClick: (row) => alert(`Delete ${row.name}`),
      className: 'btn-danger'
    }
  ])
];

// Sample data
const data = ref([
  { 
    name: 'John Doe', 
    email: 'john@example.com', 
    age: 32, 
    joinDate: '2023-01-15',
    isActive: true 
  },
  { 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    age: 28, 
    joinDate: '2023-03-22',
    isActive: true 
  },
  { 
    name: 'Bob Johnson', 
    email: 'bob@example.com', 
    age: 45, 
    joinDate: '2022-11-05',
    isActive: false 
  },
  { 
    name: 'Alice Williams', 
    email: 'alice@example.com', 
    age: 34, 
    joinDate: '2023-02-18',
    isActive: true 
  }
]);

// Component for expanded rows
const ExpandedRowContent = {
  props: ['row'],
  template: `
    <div style="padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
      <h4 style="margin-top: 0;">{{ row.name }} Details</h4>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
        <div><strong>Email:</strong> {{ row.email }}</div>
        <div><strong>Age:</strong> {{ row.age }}</div>
        <div><strong>Join Date:</strong> {{ row.joinDate }}</div>
        <div><strong>Status:</strong> {{ row.isActive ? 'Active' : 'Inactive' }}</div>
      </div>
    </div>
  `
};

// Table configuration
const tableConfig = {
  enablePagination: true,
  enableSorting: true,
  enableFiltering: true,
  enableRowSelection: true,
  enableRowExpand: true,
  tableClassName: 'table-striped table-hover',
};
</script>

<div class="table-example" style="margin: 2rem 0;">
  <StaticTable 
    :columns="columns" 
    :data="data" 
    :config="tableConfig"
    :subComponents="ExpandedRowContent"
  />
</div>

## Installation

```bash
npm install @lpkitvue/table
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/table/dist/table.css';
```

This package has dependencies on other LPKitVue components:

```bash
npm install @lpkitvue/alert @lpkitvue/button @lpkitvue/font-icon
```

## Basic Usage

```vue
<script setup>
import { StaticTable, useColumnHelpers } from '@lpkitvue/table';

const { createTextColumn, createNumericColumn, createDateColumn } = useColumnHelpers();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  createNumericColumn('age', 'Age'),
  createDateColumn('joinDate', 'Join Date')
];

// Define data
const data = [
  { name: 'John Doe', email: 'john@example.com', age: 32, joinDate: '2023-01-15' },
  { name: 'Jane Smith', email: 'jane@example.com', age: 28, joinDate: '2023-03-22' },
  // More data...
];
</script>

<template>
  <StaticTable :columns="columns" :data="data" />
</template>
```

## Advanced Usage

### Table with Expandable Rows

You can create expandable rows to show additional details:

```vue
<script setup>
import { StaticTable, useColumnHelpers } from '@lpkitvue/table';
import { ref } from 'vue';

const { createTextColumn } = useColumnHelpers();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  // More columns...
];

// Sample data
const data = ref([
  { name: 'John Doe', email: 'john@example.com', details: 'Some extra information' },
  // More data...
]);

// Define expandable row component
const ExpandedDetails = {
  props: ['row'],
  template: `
    <div class="expanded-details">
      <h3>{{ row.name }} Details</h3>
      <p>{{ row.details }}</p>
    </div>
  `
};
</script>

<template>
  <StaticTable 
    :columns="columns" 
    :data="data" 
    :subComponents="ExpandedDetails"
    :config="{ enableRowExpand: true }"
  />
</template>
```

### Table with Custom Actions

Add action buttons to your table rows:

```vue
<script setup>
import { StaticTable, useColumnHelpers } from '@lpkitvue/table';

const { createTextColumn, createActionColumn } = useColumnHelpers();

// Define handler functions
const handleEdit = (row) => {
  console.log('Edit:', row);
};

const handleDelete = (row) => {
  console.log('Delete:', row);
};

// Define columns with action column
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  createActionColumn('actions', [
    {
      label: 'Edit',
      icon: 'edit',
      onClick: handleEdit,
      className: 'btn-primary'
    },
    {
      label: 'Delete',
      icon: 'trash',
      onClick: handleDelete,
      className: 'btn-danger',
      // Only show delete for non-admin users
      visible: (row) => row.role !== 'admin'
    }
  ])
];
</script>

<template>
  <StaticTable :columns="columns" :data="users" />
</template>
```

### Custom Column Rendering

Use custom column definitions for complex rendering:

```vue
<script setup>
import { StaticTable } from '@lpkitvue/table';
import { h } from 'vue';

// Define columns with custom rendering
const columns = [
  {
    id: 'name',
    accessorKey: 'name',
    header: () => 'Full Name',
    cell: (info) => h('div', { class: 'name-cell' }, [
      h('span', { class: 'font-bold' }, info.getValue()),
      h('span', { class: 'text-gray-500 ml-2' }, `(${info.row.original.role})`)
    ])
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: () => 'Status',
    cell: (info) => {
      const status = info.getValue();
      const colorClass = status === 'active' 
        ? 'text-green-500' 
        : status === 'pending' 
          ? 'text-orange-500' 
          : 'text-red-500';
          
      return h('span', { class: `status-badge ${colorClass}` }, status);
    }
  }
];
</script>
```

### Table with Row Selection

Enable row selection for bulk actions:

```vue
<script setup>
import { StaticTable, useColumnHelpers, useTable } from '@lpkitvue/table';
import { ref } from 'vue';

const { createTextColumn } = useColumnHelpers();
const { setTable } = useTable();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
];

// Get access to selected rows
const handleTableMount = (tableInstance) => {
  setTable(tableInstance);
};

// Bulk action
const deleteSelected = () => {
  const selectedRows = table.getSelectedRowModel().rows;
  console.log('Deleting:', selectedRows.map(row => row.original));
};
</script>

<template>
  <div>
    <div class="table-actions">
      <button @click="deleteSelected" class="btn btn-danger">Delete Selected</button>
    </div>
    
    <StaticTable
      :columns="columns"
      :data="users"
      :config="{ enableRowSelection: true }"
      @mounted="handleTableMount"
    />
  </div>
</template>
```

## API Reference

### StaticTable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColumnDef<any>[]` | *Required* | Column definitions for the table |
| `data` | `any[]` | `[]` | Data to display in the table |
| `config` | `TableConfig` | *Default config* | Table configuration options |
| `subComponents` | `Component<{ row: any }>` | `undefined` | Component to render in expanded rows |

### TableConfig Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `tableFooterEnabled` | `boolean` | `false` | Whether to show table footer |
| `enablePagination` | `boolean` | `true` | Whether to enable pagination |
| `enableSorting` | `boolean` | `true` | Whether to enable column sorting |
| `enableFiltering` | `boolean` | `false` | Whether to enable filtering |
| `enableRowSelection` | `boolean` | `false` | Whether to enable row selection |
| `enableRowExpand` | `boolean` | `false` | Whether to enable row expansion |
| `enableRowGrouping` | `boolean` | `false` | Whether to enable row grouping |
| `enableColumnResizing` | `boolean` | `false` | Whether to enable column resizing |
| `tableClassName` | `string` | `'table-striped'` | CSS class for the table |
| `tableHeaderClass` | `string` | `'table-header'` | CSS class for the header |
| `tableBodyClass` | `string` | `'table-body'` | CSS class for the body |
| `tableFooterClass` | `string` | `'table-footer'` | CSS class for the footer |
| `tablePaginationClass` | `string` | `'table-pagination'` | CSS class for pagination |

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `mounted` | `tableInstance` | Emitted when the table is mounted, provides the table instance |

### Exposed Methods

When you capture the table instance with `@mounted`, you can access these methods:

| Method | Description |
|--------|-------------|
| `table.getSelectedRows()` | Get currently selected rows |
| `table.getPaginationState()` | Get current pagination state |
| `table.getSortingState()` | Get current sorting state |
| `table.resetPageIndex()` | Reset to first page |
| `table.resetSorting()` | Clear sorting |
| `table.resetFilters()` | Clear filters |

## Column Helpers

The `useColumnHelpers` composable provides functions to create common column types:

### Text Columns

```typescript
createTextColumn('name', 'Name')
```

### Numeric Columns

```typescript
createNumericColumn('amount', 'Amount', null, { 
  formatter: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }) 
})
```

### Date Columns

```typescript
createDateColumn('createdAt', 'Created', null, { 
  dateOptions: { 
    locale: 'en-US',
    formatOptions: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  } 
})
```

### Boolean Columns

```typescript
// As text
createBooleanColumn('isActive', 'Active Status')

// As icons
createBooleanColumn('isActive', 'Active Status', null, {
  iconMode: true,
  trueIcon: 'check-circle',
  falseIcon: 'close-circle'
})
```

### Action Columns

```typescript
createActionColumn('actions', [
  {
    label: 'Edit',
    icon: 'edit',
    onClick: (row) => editItem(row),
    className: 'btn-primary',
    visible: (row) => canEdit(row)
  },
  {
    label: 'Delete',
    icon: 'trash',
    onClick: (row) => deleteItem(row),
    className: 'btn-danger'
  }
])
```

## TypeScript Support

The component includes TypeScript definitions:

```typescript
import { StaticTable, useColumnHelpers } from '@lpkitvue/table';
import type { 
  TableConfig, 
  StaticTableType,
  ColumnConfigHelpers
} from '@lpkitvue/table';

// Type-safe configuration
const tableConfig: TableConfig = {
  enablePagination: true,
  enableSorting: true,
  tableClassName: 'table-striped'
};

// Type-safe column definitions
const { createTextColumn } = useColumnHelpers();
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email')
];

// Type-safe props
const tableProps: StaticTableType = {
  columns,
  data: [],
  config: tableConfig
};
```

## Accessibility

The table component is built with accessibility in mind:

- Semantic HTML structure with proper `<table>`, `<thead>`, `<tbody>` elements
- ARIA attributes for sortable columns
- Keyboard navigation support for pagination and interactive elements
- Screen reader announcements for loading and empty states
- Proper focus management for interactive elements
- High contrast between text and background
- Proper table caption and summary support
