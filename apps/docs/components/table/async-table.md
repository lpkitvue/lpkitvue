# Query Table

A powerful and flexible table component for fetching and displaying asynchronous data in Vue 3 applications, built with TanStack Table and Query.

## Introduction

The QueryTable component provides a seamless way to display data fetched from APIs or other asynchronous sources. Built on top of TanStack Table and TanStack Query, it handles loading states, error management, pagination, sorting, and filtering with minimal configuration. This component is ideal for situations where you need to display server-side paginated and sorted data efficiently.

## Features

- 🔄 Built-in data fetching with loading states and error handling
- 📊 Server-side pagination, sorting, and filtering
- 🔃 Automatic data refetching when page, sort, or filter options change
- 🔄 Manual refresh and reset capabilities
- 📱 Responsive design with mobile-friendly controls
- 🎨 Customizable UI with themes and styling options
- 🎯 Integration with TanStack Query for efficient data caching
- 🧩 Support for expandable rows with custom components
- ♿ Accessibility-friendly with proper ARIA attributes
- 🧮 Support for server-side pagination metadata

## Live Examples

<script setup>
import '@lpkitvue/table/dist/table.css';
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';
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
      label: 'View',
      icon: 'eye',
      onClick: (row) => alert(`View ${row.name}`),
      className: 'btn-info'
    },
    {
      label: 'Edit',
      icon: 'edit',
      onClick: (row) => alert(`Edit ${row.name}`),
      className: 'btn-primary'
    }
  ])
];

// Function to fetch data from API
const fetchUserData = async (pagination, sorting, filtering) => {
  // Simulate API call with 1s delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // This would be your actual API call in a real application
  // const response = await fetch(`/api/users?page=${pagination.index}&size=${pagination.size}`);
  // return await response.json();
  
  // Simulate API response
  const baseData = [
    { name: 'John Doe', email: 'john@example.com', age: 32, joinDate: '2023-01-15', isActive: true },
    { name: 'Jane Smith', email: 'jane@example.com', age: 28, joinDate: '2023-03-22', isActive: true },
    { name: 'Bob Johnson', email: 'bob@example.com', age: 45, joinDate: '2022-11-05', isActive: false },
    { name: 'Alice Williams', email: 'alice@example.com', age: 34, joinDate: '2023-02-18', isActive: true },
    { name: 'Mike Brown', email: 'mike@example.com', age: 39, joinDate: '2022-09-30', isActive: true },
    { name: 'Sarah Miller', email: 'sarah@example.com', age: 27, joinDate: '2023-04-10', isActive: false },
    { name: 'David Wilson', email: 'david@example.com', age: 42, joinDate: '2022-12-20', isActive: true },
    { name: 'Emily Davis', email: 'emily@example.com', age: 31, joinDate: '2023-02-05', isActive: true },
    { name: 'Tom Garcia', email: 'tom@example.com', age: 36, joinDate: '2022-10-15', isActive: false },
    { name: 'Lisa Martinez', email: 'lisa@example.com', age: 29, joinDate: '2023-01-28', isActive: true },
  ];
  
  // Apply server-side pagination
  const pageSize = pagination.size;
  const pageIndex = pagination.index;
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const pageData = baseData.slice(start, end);
  
  // Apply server-side sorting if provided
  if (sorting.length > 0) {
    const { id, desc } = sorting[0];
    pageData.sort((a, b) => {
      if (a[id] < b[id]) return desc ? 1 : -1;
      if (a[id] > b[id]) return desc ? -1 : 1;
      return 0;
    });
  }
  
  // Return data with metadata for pagination
  return {
    data: pageData,
    meta: {
      totalCount: baseData.length,
      pageCount: Math.ceil(baseData.length / pageSize)
    }
  };
};

// Table configuration
const tableConfig = {
  enablePagination: true,
  enableSorting: true,
  enableFiltering: true,
  initialPageSize: 5,
  tableClassName: 'table-striped table-hover',
  queryKey: 'user-table',
};
</script>

<div class="table-example" style="margin: 2rem 0;">
  <QueryTable 
    :columns="columns" 
    :fetchData="fetchUserData" 
    :config="tableConfig"
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

This package has dependencies on other LPKitVue components and libraries:

```bash
npm install @lpkitvue/alert @lpkitvue/button @lpkitvue/font-icon @tanstack/vue-query
```

## Basic Usage

```vue
<script setup>
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';

const { createTextColumn, createNumericColumn } = useColumnHelpers();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  createNumericColumn('age', 'Age')
];

// Function to fetch data from API
const fetchUserData = async (pagination, sorting, filtering) => {
  try {
    const response = await fetch(
      `/api/users?page=${pagination.index}&pageSize=${pagination.size}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const result = await response.json();
    
    // Return in the expected format
    return {
      data: result.items,
      meta: {
        totalCount: result.totalCount,
        pageCount: result.pageCount
      }
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
</script>

<template>
  <QueryTable :columns="columns" :fetchData="fetchUserData" />
</template>
```

## Advanced Usage

### Handling Table Events

You can access the table instance to interact with it programmatically:

```vue
<script setup>
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';
import { ref } from 'vue';

const { createTextColumn } = useColumnHelpers();
const tableInstance = ref(null);

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email')
];

// Handle table mount
const handleTableMount = (instance) => {
  tableInstance.value = instance;
};

// Refresh table data
const refreshData = () => {
  if (tableInstance.value) {
    tableInstance.value.refresh();
  }
};

// Reset table (clear sorting, filtering, pagination)
const resetTable = () => {
  if (tableInstance.value) {
    tableInstance.value.reset();
  }
};
</script>

<template>
  <div>
    <div class="table-actions">
      <button @click="refreshData" class="btn btn-primary">Refresh Data</button>
      <button @click="resetTable" class="btn btn-secondary">Reset Table</button>
    </div>
    
    <QueryTable 
      :columns="columns" 
      :fetchData="fetchUserData" 
      @mounted="handleTableMount"
    />
  </div>
</template>
```

### Custom Loading and Empty States

You can customize the loading and empty states of the QueryTable:

```vue
<script setup>
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';
import { h } from 'vue';

const { createTextColumn } = useColumnHelpers();

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email')
];

// Custom loading component
const CustomLoader = {
  render() {
    return h('div', { class: 'custom-loader' }, [
      h('div', { class: 'spinner' }),
      h('p', 'Loading data, please wait...')
    ]);
  }
};

// Custom empty state component
const CustomEmpty = {
  render() {
    return h('div', { class: 'custom-empty-state' }, [
      h('img', { src: '/empty-state.svg', alt: 'No data' }),
      h('h3', 'No Data Found'),
      h('p', 'There are no items matching your criteria.')
    ]);
  }
};
</script>

<template>
  <QueryTable 
    :columns="columns" 
    :fetchData="fetchUserData"
    :loader-component="CustomLoader"
    :empty-component="CustomEmpty"
  />
</template>
```

### Filtering with Server-Side Logic

Implement server-side filtering with the QueryTable:

```vue
<script setup>
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';
import { ref } from 'vue';

const { createTextColumn } = useColumnHelpers();

// Define filter state
const filters = ref({
  searchTerm: '',
  status: 'all'
});

// Define columns
const columns = [
  createTextColumn('name', 'Name'),
  createTextColumn('email', 'Email'),
  createTextColumn('status', 'Status')
];

// Function to fetch data with filters
const fetchFilteredData = async (pagination, sorting, filtering) => {
  // Combine pagination, sorting, and our custom filters
  const params = new URLSearchParams({
    page: pagination.index.toString(),
    pageSize: pagination.size.toString(),
    searchTerm: filters.value.searchTerm,
    status: filters.value.status
  });
  
  // Add sorting if present
  if (sorting.length > 0) {
    params.append('sortField', sorting[0].id);
    params.append('sortDirection', sorting[0].desc ? 'desc' : 'asc');
  }
  
  const response = await fetch(`/api/users?${params.toString()}`);
  const result = await response.json();
  
  return {
    data: result.items,
    meta: {
      totalCount: result.totalCount,
      pageCount: result.pageCount
    }
  };
};

// Apply filters and reset pagination
const applyFilters = () => {
  if (tableInstance.value) {
    // Reset to first page when filters change
    tableInstance.value.table.resetPageIndex();
    // Trigger refetch with new filters
    tableInstance.value.refresh();
  }
};
</script>

<template>
  <div>
    <div class="filter-controls">
      <input 
        v-model="filters.searchTerm" 
        placeholder="Search..." 
        @input="applyFilters"
      />
      
      <select v-model="filters.status" @change="applyFilters">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    
    <QueryTable 
      :columns="columns" 
      :fetchData="fetchFilteredData" 
      @mounted="tableInstance = $event"
    />
  </div>
</template>
```

## API Reference

### QueryTable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColumnDef<any>[]` | *Required* | Column definitions for the table |
| `fetchData` | `Function` | *Required* | Function to fetch data from API |
| `data` | `any[]` | `[]` | Initial data (optional) |
| `config` | `TableConfig` | *Default config* | Table configuration options |
| `subComponents` | `Component<{ row: any }>` | `undefined` | Component to render in expanded rows |

### TableConfig Options

Standard options plus these additional options for QueryTable:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `initialPageSize` | `number` | `20` | Initial page size for pagination |
| `initialPageIndex` | `number` | `0` | Initial page index (0-based) |
| `refetchOnWindowFocus` | `boolean` | `false` | Whether to refetch data when window regains focus |
| `queryKey` | `string` | `'table-data'` | Key for TanStack Query cache |

### FetchData Function

The `fetchData` function should match this signature:

```typescript
type FetchDataFunction = (
  pagination: { index: number; size: number },
  sorting: { id: string; desc: boolean }[],
  filtering: Record<string, any>
) => Promise<TableQueryResponse | any[]>;

interface TableQueryResponse {
  data: any[];
  meta: {
    totalCount: number;
    pageCount: number;
    [key: string]: any;
  };
}
```

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `mounted` | `{ table, refresh, reset }` | Emitted when the table is mounted, provides table instance and methods |
| `dataChanged` | `data` | Emitted when table data changes |
| `error` | `error` | Emitted when an error occurs during data fetching |

### Exposed Methods

The QueryTable exposes these methods through the `mounted` event:

| Method | Description |
|--------|-------------|
| `table` | The TanStack Table instance |
| `refresh` | Function to refresh the data |
| `reset` | Function to reset the table (pagination, sorting, filters) |

## Column Helpers

The same column helper functions from StaticTable are available for QueryTable:

```javascript
const { 
  createTextColumn, 
  createNumericColumn, 
  createDateColumn,
  createBooleanColumn,
  createActionColumn
} = useColumnHelpers();
```

## TypeScript Support

The component includes TypeScript definitions:

```typescript
import { QueryTable, useColumnHelpers } from '@lpkitvue/table';
import type { 
  TableConfig, 
  QueryTableType,
  TableQueryResponse
} from '@lpkitvue/table';

// Type-safe fetch function
const fetchData = async (
  pagination: { index: number; size: number },
  sorting: { id: string; desc: boolean }[],
  filtering: Record<string, any>
): Promise<TableQueryResponse> => {
  // Fetch implementation
  return {
    data: [],
    meta: {
      totalCount: 0,
      pageCount: 0
    }
  };
};

// Type-safe configuration
const tableConfig: TableConfig = {
  enablePagination: true,
  enableSorting: true,
  initialPageSize: 25,
  queryKey: 'users-table'
};

// Type-safe props
const tableProps: QueryTableType = {
  columns: [],
  fetchData,
  config: tableConfig
};
```

## Accessibility

The QueryTable component inherits all the accessibility features of the StaticTable and adds:

- ARIA live regions for asynchronous content updates
- Loading state announcements for screen readers
- Error state handling with proper focus management
- Keyboard navigation support throughout loading and error states
- Progress indicators for loading data
- Proper focus management when data is refreshed
