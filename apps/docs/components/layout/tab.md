# Tab

A versatile tab navigation system for Vue 3 applications with both router-based and component-based implementations.

## Introduction

The Tab component provides an accessible and flexible way to organize content into separate tabs, allowing users to navigate between different sections without page refreshes. It offers two main variants: `TabRouter` for integration with Vue Router, and `TabComponent` for self-contained tabbed interfaces.

## Features

- 🧩 Two implementation variants: router-based (`TabRouter`) and component-based (`TabComponent`)
- 🔄 Seamless integration with Vue Router for URL-based tab navigation
- ⚡ Lazy-loading support for optimized performance
- 🎨 Customizable styling with CSS classes
- 🖼️ Support for icons in tab headers
- 📱 Responsive design with horizontal scrolling on small screens
- ♿ Fully accessible with keyboard navigation and ARIA attributes
- 🎮 Comprehensive event system for tab changes
- 🖊️ Active tab styling with smooth transitions
- 📊 Support for dynamic tab generation
- 🧠 State preservation when switching between tabs

## Live Examples

<script setup>
import '@lpkitvue/tab/dist/tab.css';
import { TabComponent } from '@lpkitvue/tab';
import { ref, markRaw, defineComponent, h } from 'vue';

const HomeComponent = markRaw(defineComponent({
  setup() {
    return () => h('div', { class: 'p-4 bg-blue-50 rounded' }, [
      h('h3', { class: 'text-lg font-bold mb-2' }, 'Home Content'),
      h('p', {}, 'This is the home tab content. The tab component preserves state when switching between tabs.')
    ]);
  }
}));

const ProfileComponent = markRaw(defineComponent({
  setup() {
    const count = ref(0);
    
    return () => h('div', { class: 'p-4 bg-green-50 rounded' }, [
      h('h3', { class: 'text-lg font-bold mb-2' }, 'Profile Content'),
      h('p', { class: 'mb-2' }, 'This tab demonstrates state preservation. The counter will maintain its value when you switch tabs.'),
      h('div', { class: 'flex items-center gap-2' }, [
        h('span', {}, `Count: ${count.value}`),
        h('button', { 
          class: 'px-2 py-1 bg-green-500 text-white rounded',
          onClick: () => count.value++
        }, 'Increment')
      ])
    ]);
  }
}));

const SettingsComponent = markRaw(defineComponent({
  setup() {
    return () => h('div', { class: 'p-4 bg-purple-50 rounded' }, [
      h('h3', { class: 'text-lg font-bold mb-2' }, 'Settings Content'),
      h('p', {}, 'This tab demonstrates the settings content section.'),
      h('div', { class: 'mt-2' }, [
        h('label', { class: 'block mb-1' }, 'Theme'),
        h('select', { class: 'px-2 py-1 border rounded' }, [
          h('option', {}, 'Light'),
          h('option', {}, 'Dark'),
          h('option', {}, 'System')
        ])
      ])
    ]);
  }
}));

const NotificationsComponent = markRaw(defineComponent({
  setup() {
    return () => h('div', { class: 'p-4 bg-yellow-50 rounded' }, [
      h('h3', { class: 'text-lg font-bold mb-2' }, 'Notifications'),
      h('p', {}, 'You have no new notifications.')
    ]);
  }
}));

const tabComponents = [
  { 
    title: 'Home',
    icon: 'home',
    component: HomeComponent
  },
  { 
    title: 'Profile',
    icon: 'user',
    component: ProfileComponent
  },
  { 
    title: 'Settings',
    icon: 'settings',
    component: SettingsComponent
  },
  { 
    title: 'Notifications',
    icon: 'bell',
    component: NotificationsComponent
  }
];

const activeTab = ref(0);

const handleTabChange = (index) => {
  activeTab.value = index;
  console.log(`Tab changed to: ${index}`);
};
</script>

<div class="tab-example">
  <TabComponent 
    :tabComponents="tabComponents"
    :defaultTab="activeTab"
    @change="handleTabChange"
  />
</div>

## Installation

```bash
npm install @lpkitvue/tab
```

Don't forget to import the CSS:

```javascript
import '@lpkitvue/tab/dist/tab.css';
```

This package has the following peer dependencies:

```bash
npm install vue-router@^4.5.0 @lpkitvue/font-icon
```

The `TabRouter` component requires Vue Router, while both variants use the Font Icon component for tab icons.

## Basic Usage

### Component-Based Tabs

The `TabComponent` variant is ideal for self-contained tab interfaces that don't need URL synchronization:

```vue
<script setup>
import { TabComponent } from '@lpkitvue/tab';
import { ref, markRaw } from 'vue';
import HomeView from './components/HomeView.vue';
import ProfileView from './components/ProfileView.vue';
import SettingsView from './components/SettingsView.vue';

const tabComponents = [
  {
    title: 'Home',
    icon: 'home',
    component: markRaw(HomeView)
  },
  {
    title: 'Profile',
    icon: 'user',
    component: markRaw(ProfileView)
  },
  {
    title: 'Settings',
    icon: 'settings',
    component: markRaw(SettingsView)
  }
];

const activeTab = ref(0);

const handleTabChange = (index) => {
  activeTab.value = index;
  console.log(`Tab changed to: ${index}`);
};
</script>

<template>
  <TabComponent 
    :tabComponents="tabComponents"
    :defaultTab="activeTab"
    @change="handleTabChange"
  />
</template>
```

### Router-Based Tabs

The `TabRouter` variant integrates with Vue Router for URL-synchronized tabs:

```vue
<script setup>
import { TabRouter } from '@lpkitvue/tab';

const tabRouters = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'home'
  },
  {
    title: 'Products',
    to: '/products',
    icon: 'box'
  },
  {
    title: 'Customers',
    to: '/customers',
    icon: 'users'
  }
];
</script>

<template>
  <TabRouter 
    :tabRouters="tabRouters"
    :defaultTab="0"
    :changeOnRouteUpdate="true"
  />
</template>
```

With router configuration:

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';
import Customers from '../views/Customers.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/',
    redirect: '/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

## Advanced Usage

### Lazy Loading Tabs

The `TabComponent` supports lazy loading to improve performance by only mounting tab content when needed:

```vue
<script setup>
import { TabComponent } from '@lpkitvue/tab';

const tabComponents = [
  /* tab configuration */
];
</script>

<template>
  <TabComponent 
    :tabComponents="tabComponents"
    :lazy="true" <!-- Only mount tabs when they are viewed -->
  />
</template>
```

### Dynamic Tabs Based on Conditions

```vue
<script setup>
import { TabComponent } from '@lpkitvue/tab';
import { computed, markRaw } from 'vue';

const userRole = ref('admin');

const visibleTabs = computed(() => {
  const allTabs = [
    {
      title: 'Dashboard',
      icon: 'home',
      component: markRaw(DashboardComponent),
      roles: ['user', 'admin', 'editor']
    },
    {
      title: 'User Management',
      icon: 'users',
      component: markRaw(UserManagementComponent),
      roles: ['admin']
    },
    {
      title: 'Content',
      icon: 'file-text',
      component: markRaw(ContentComponent),
      roles: ['editor', 'admin']
    }
  ];
  
  return allTabs.filter(tab => tab.roles.includes(userRole.value));
});
</script>

<template>
  <TabComponent :tabComponents="visibleTabs" />
</template>
```

### Custom Tab Styling

```vue
<script setup>
import { TabComponent } from '@lpkitvue/tab';

const tabComponents = [
  {
    title: 'Home',
    icon: 'home',
    component: HomeComponent,
    linkClass: 'custom-home-tab' 
  },
  {
    title: 'Profile',
    icon: 'user',
    component: ProfileComponent,
    linkClass: 'custom-profile-tab'
  },
  {
    title: 'Settings',
    icon: 'settings',
    component: SettingsComponent,
    linkClass: 'custom-settings-tab'
  }
];
</script>

<template>
  <TabComponent :tabComponents="tabComponents" />
</template>

<style scoped>
.custom-home-tab {
  background-color: rgba(59, 130, 246, 0.1);
}

.custom-profile-tab {
  background-color: rgba(16, 185, 129, 0.1);
}

.custom-settings-tab {
  background-color: rgba(139, 92, 246, 0.1);
}

/* Active state styling */
.lp-tab-active.custom-home-tab {
  border-bottom-color: #3b82f6 !important;
}

.lp-tab-active.custom-profile-tab {
  border-bottom-color: #10b981 !important;
}

.lp-tab-active.custom-settings-tab {
  border-bottom-color: #8b5cf6 !important;
}
</style>
```

### Tabs with Programmatic Control

```vue
<script setup>
import { TabComponent } from '@lpkitvue/tab';
import { ref, markRaw } from 'vue';

const tabComponents = [
  /* tab configuration */
];

const currentTab = ref(0);

const nextTab = () => {
  if (currentTab.value < tabComponents.length - 1) {
    currentTab.value++;
  }
};

const prevTab = () => {
  if (currentTab.value > 0) {
    currentTab.value--;
  }
};

const goToTab = (index) => {
  if (index >= 0 && index < tabComponents.length) {
    currentTab.value = index;
  }
};
</script>

<template>
  <div>
    <div class="mb-4 flex gap-2">
      <button @click="prevTab" :disabled="currentTab === 0">
        Previous
      </button>
      <button @click="nextTab" :disabled="currentTab === tabComponents.length - 1">
        Next
      </button>
      <button v-for="(_, index) in tabComponents" :key="index" 
              @click="goToTab(index)"
              :class="{ 'bg-blue-500 text-white': currentTab === index }">
        Tab {{ index + 1 }}
      </button>
    </div>
    
    <TabComponent 
      :tabComponents="tabComponents"
      :defaultTab="currentTab"
      @change="index => currentTab = index"
    />
  </div>
</template>
```

## API Reference

### TabComponent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabComponents` | `TabComponent[]` | *Required* | Array of tab configuration objects |
| `defaultTab` | `number` | `0` | Index of the initial active tab |
| `lazy` | `boolean` | `true` | Whether to only mount tab content when it becomes active |

### TabComponent Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `change` | `(index: number)` | Emitted when the active tab changes |

### TabComponent Item Type

```typescript
interface TabComponent {
  title: string;            
  icon?: string;            
  linkClass?: string;       
  component: Component;    
}
```

### TabRouter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabRouters` | `TabRouter[]` | *Required* | Array of router tab configuration objects |
| `defaultTab` | `number` | `0` | Index of the initial active tab |
| `changeOnRouteUpdate` | `boolean` | `true` | Whether to update active tab based on route changes |

### TabRouter Item Type

```typescript
interface TabRouter {
  title: string;            
  to: string;               
  icon?: string;            
  linkClass?: string;       
}
```

## TypeScript Support

The package includes TypeScript definitions for all components:

```typescript
import { 
  TabRouter, 
  TabComponent 
} from '@lpkitvue/tab';

import type { 
  TabRouterType, 
  TabComponentType 
} from '@lpkitvue/tab';

const tabComponents: TabComponentType[] = [
  {
    title: 'Home',
    icon: 'home',
    component: HomeComponent
  },
  {
    title: 'Profile',
    icon: 'user',
    component: ProfileComponent
  }
];


const routerTabs: TabRouterType[] = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'dashboard'
  },
  {
    title: 'Products',
    to: '/products',
    icon: 'box'
  }
];
```

## Accessibility

The Tab components are built with accessibility in mind:

- Proper ARIA roles with `role="tablist"`, `role="tab"`, and `role="tabpanel"`
- ARIA attributes for selected state with `aria-selected="true|false"`
- Tab controls are properly labeled with `aria-controls` pointing to the corresponding panel
- Proper focus management with tabindex to ensure keyboard navigation works correctly
- Keyboard navigation support:
    - Left/Right arrow keys to navigate between tabs
    - Home key to go to the first tab
    - End key to go to the last tab
- Panels have proper `aria-labelledby` attributes referencing their tab
- Focus indicators for keyboard navigation
- All interactive elements have appropriate contrast ratios
- Tab panels are properly focused when switching tabs via keyboard
- Content is accessible to screen readers with proper announcements of tab changes
