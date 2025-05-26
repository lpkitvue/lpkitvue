# Storage

A flexible, encrypted browser storage solution for Vue 3 applications that provides secure, persistent data storage with automatic TTL support.

## Introduction

The Storage component provides a secure way to store and retrieve data in the browser with built-in encryption. It uses IndexedDB under the hood for performance and storage capacity, while offering a simple async API similar to localStorage. Perfect for securely storing user preferences, session data, form drafts, and other sensitive information.

## Features

- 🔐 Built-in AES encryption for secure data storage
- ⏱️ Automatic Time-To-Live (TTL) for data expiration
- 🔄 Configurable default TTL with per-item override options
- 🗃️ IndexedDB backend for large storage capacity
- 🎛️ Customizable database and store names
- 💾 Persistent across browser sessions
- 📱 Responsive design with robust error handling
- 🔁 Retry mechanism for failed operations
- 🏗️ Vue plugin for global access
- 🧰 Composable function for component-level usage
- 🧩 Compatible with Vue's Suspense feature through async API
- 🔍 TypeScript support with full type definitions

## Installation

```bash
npm install @lpkitvue/storage
```

## Basic Usage

### As a Vue Plugin

Register the storage module globally in your app:

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { storagePlugin } from '@lpkitvue/storage';

const app = createApp(App);

// Register with optional configuration
app.use(storagePlugin, {
    encryptionKey: 'your-secure-encryption-key',
    dbName: 'your-app-database',
    defaultTTL: 24 * 60 * 60 * 1000 // 1 day in milliseconds
});

app.mount('#app');
```

Then use the storage API anywhere in your components:

```vue
<script setup>
// Access from component
const saveUserPreference = async () => {
  try {
    await this.$idb.storage.setItem('theme', 'dark');
    console.log('Theme preference saved');
  } catch (error) {
    console.error('Error saving theme preference:', error);
  }
};
</script>
```

### Using the Composable

For more control and better TypeScript support, use the `useStorage` composable:

```vue
<script setup>
import { useStorage } from '@lpkitvue/storage';
import { ref, onMounted } from 'vue';

// Initialize storage for a specific store
const { storage } = useStorage({ 
  storeName: 'user-preferences',
  cacheTTL: 30 * 24 * 60 * 60 * 1000 // 30 days
});

const theme = ref('light');

onMounted(async () => {
  try {
    // Get stored theme preference
    const savedTheme = await storage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
    }
  } catch (error) {
    console.error('Error retrieving theme:', error);
  }
});

const saveTheme = async (newTheme) => {
  try {
    theme.value = newTheme;
    await storage.setItem('theme', newTheme);
    console.log('Theme saved successfully');
  } catch (error) {
    console.error('Error saving theme:', error);
  }
};
</script>

<template>
  <div>
    <p>Current theme: {{ theme }}</p>
    <button @click="saveTheme('light')">Light Theme</button>
    <button @click="saveTheme('dark')">Dark Theme</button>
  </div>
</template>
```

## Advanced Usage

### Custom TTL for Specific Items

You can override the default TTL for specific items:

```typescript
// Store for 1 hour regardless of default TTL
await storage.setItem('temporaryToken', token, 60 * 60 * 1000);

// Store permanently (no expiration)
await storage.setItem('userId', userId, 0);
```

### Handling Errors

The storage operations can throw exceptions, which should be handled appropriately:

```typescript
try {
  await storage.setItem('userProfile', JSON.stringify(profile));
} catch (error) {
  if (error.message.includes('QuotaExceededError')) {
    // Handle storage quota exceeded
    console.error('Storage quota exceeded. Clearing older data...');
    await storage.clear();
    // Try again
    await storage.setItem('userProfile', JSON.stringify(profile));
  } else {
    // Handle other errors
    console.error('Storage error:', error);
  }
}
```

### Multiple Storage Stores

You can create different stores for different types of data:

```typescript
// User preferences store
const { storage: prefsStorage } = useStorage({ 
  storeName: 'preferences'
});

// App state store with longer TTL
const { storage: stateStorage } = useStorage({ 
  storeName: 'app-state',
  cacheTTL: 90 * 24 * 60 * 60 * 1000 // 90 days
});

// Temporary cache with short TTL
const { storage: tempCache } = useStorage({ 
  storeName: 'temp-cache',
  cacheTTL: 5 * 60 * 1000 // 5 minutes
});
```

### Form Auto-save Example

```vue
<script setup>
import { useStorage } from '@lpkitvue/storage';
import { ref, watch, onMounted } from 'vue';

const { storage } = useStorage({ storeName: 'form-drafts' });
const formData = ref({ name: '', email: '', message: '' });
const formKey = 'contact-form-draft';
const saveStatus = ref('');

// Load draft on mount
onMounted(async () => {
  try {
    const savedDraft = await storage.getItem(formKey);
    if (savedDraft) {
      formData.value = JSON.parse(savedDraft);
      saveStatus.value = 'Draft loaded';
    }
  } catch (error) {
    console.error('Error loading draft:', error);
  }
});

// Auto-save on change
watch(
  formData, 
  async (newData) => {
    try {
      await storage.setItem(formKey, JSON.stringify(newData));
      saveStatus.value = 'Draft saved at ' + new Date().toLocaleTimeString();
    } catch (error) {
      saveStatus.value = 'Error saving draft';
      console.error('Error saving draft:', error);
    }
  }, 
  { deep: true }
);

const submitForm = async () => {
  // Submit form logic
  // ...
  
  // Clear draft after successful submission
  await storage.removeItem(formKey);
  saveStatus.value = 'Form submitted, draft cleared';
};

const clearDraft = async () => {
  await storage.removeItem(formKey);
  formData.value = { name: '', email: '', message: '' };
  saveStatus.value = 'Draft cleared';
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="formData.email" type="email" />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="formData.message"></textarea>
    </div>
    
    <div class="form-actions">
      <button type="submit">Submit</button>
      <button type="button" @click="clearDraft">Clear Draft</button>
    </div>
    
    <p class="save-status">{{ saveStatus }}</p>
  </form>
</template>
```

### Authentication Token Management

```typescript
import { useStorage } from '@lpkitvue/storage';

// Initialize a secure store for auth tokens
const { storage: authStorage } = useStorage({ 
  storeName: 'auth-tokens',
  cacheTTL: 7 * 24 * 60 * 60 * 1000 // 7 days
});

// Save authentication tokens
export const saveAuthTokens = async (tokens) => {
  await authStorage.setItem('accessToken', tokens.accessToken, 1 * 60 * 60 * 1000); // 1 hour
  await authStorage.setItem('refreshToken', tokens.refreshToken, 30 * 24 * 60 * 60 * 1000); // 30 days
};

// Get access token
export const getAccessToken = async () => {
  return await authStorage.getItem('accessToken');
};

// Get refresh token
export const getRefreshToken = async () => {
  return await authStorage.getItem('refreshToken');
};

// Clear auth tokens on logout
export const clearAuthTokens = async () => {
  await authStorage.removeItem('accessToken');
  await authStorage.removeItem('refreshToken');
};
```

## API Reference

### Configuration

#### StoragePlugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `encryptionKey` | `string` | `'default-secret-key'` | Key used for AES encryption |
| `dbName` | `string` | `'default-db-name'` | IndexedDB database name |
| `defaultTTL` | `number` | `1800000` (30 minutes) | Default time-to-live in milliseconds |

#### UseStorage Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `storeName` | `string` | *Required* | Name of the store to use |
| `cacheTTL` | `number` | *From global config* | TTL for this specific store |

### Storage API

The storage API implements an async interface similar to localStorage:

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `getItem` | `(key: string)` | `Promise<string \| null>` | Retrieves an item by key |
| `setItem` | `(key: string, value: string, customTTL?: number)` | `Promise<void>` | Stores an item with optional TTL |
| `removeItem` | `(key: string)` | `Promise<void>` | Removes an item by key |
| `clear` | none | `Promise<void>` | Clears all items in the store |

### Global Configuration Functions

| Function | Parameters | Description |
|----------|------------|-------------|
| `setEncryptionKey` | `(key: string)` | Sets the encryption key |
| `setDbName` | `(name: string)` | Sets the IndexedDB database name |
| `setDefaultTTL` | `(ttl: number)` | Sets the default TTL for all stores |

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import { useStorage, storagePlugin } from '@lpkitvue/storage';
import type { 
  UseStorageOptions,
  StorageTypes,
  StoredItem
} from '@lpkitvue/storage';

// Define options with TypeScript
const options: UseStorageOptions = {
  storeName: 'user-data',
  cacheTTL: 24 * 60 * 60 * 1000 // 1 day
};

// Use storage with proper types
const { storage } = useStorage(options);

// Type for stored items
const item: StoredItem = {
  value: 'some data',
  timestamp: Date.now(),
  ttl: 3600000 // 1 hour
};

// Storage methods are all properly typed
async function saveProfile(profile: any) {
  await storage.setItem('profile', JSON.stringify(profile));
}
```

## Accessibility

While storage is primarily a behind-the-scenes service component, it's built with application accessibility in mind:

1. **Error Recovery**: Implements robust error handling and retry mechanisms to maintain app stability
2. **Performance**: Uses efficient storage mechanisms to avoid UI freezes during data operations
3. **State Persistence**: Helps maintain user state across sessions, reducing the need for users to re-enter information
4. **Offline Support**: Enables offline data access for better accessibility in low-connectivity environments
5. **Security**: Protects sensitive user data through encryption
6. **Low-Impact Operations**: All storage operations run asynchronously to avoid blocking the main thread
7. **Graceful Degradation**: Falls back gracefully when storage limits are reached or other errors occur
8. **WCAG Compliance Support**: By preserving user preferences and form state, helps applications maintain WCAG compliance for remembering user settings
