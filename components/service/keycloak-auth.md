# Keycloak Auth

A seamless Keycloak integration for Vue 3 applications that provides secure authentication, token management, and role-based access control.

## Introduction

The Keycloak Auth module is a comprehensive solution for integrating Keycloak authentication into your Vue 3 applications. It provides a composable API, Vue plugin support, and middleware for securing routes. With built-in token refresh, role-based access control, and a clean API, it makes implementing authentication a straightforward process.

## Features

- 🔐 Seamless Keycloak integration with Vue 3
- 🔄 Built-in token refresh and management
- 🛡️ Role-based access control with fine-grained permissions
- 🧩 Vue composable API for flexible integration
- 🧰 Vue plugin support for global configuration
- 📱 SPA-friendly with redirection handling
- 🔍 TypeScript support with complete type definitions
- 🧪 Authentication middleware for route protection
- 🔌 Easy API integration with bearer token support
- 🔑 Secure token storage and handling
- 🌐 Cross-domain authentication support
- 📊 User profile management

## Installation

```bash
npm install @lpkitvue/keycloak-auth
```

This package requires Keycloak JS as a dependency, which is automatically installed.

## Basic Usage

### Register as a Plugin

The simplest way to use Keycloak Auth is to register it as a Vue plugin in your main application file:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { authPlugin } from '@lpkitvue/keycloak-auth'

const app = createApp(App)

app.use(authPlugin, {
  url: 'https://keycloak.example.com/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
  redirectUri: window.location.origin,
  logoutUri: `${window.location.origin}/logout`
})

app.mount('#app')
```

### Use as a Composable

For more control and flexibility, you can use the `useAuth` composable in your components:

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuth } from '@lpkitvue/keycloak-auth'

const { 
  authenticate, 
  isAuthenticated, 
  getAuthState, 
  logout,
  getUserProfile 
} = useAuth()

const authState = getAuthState()
const userProfile = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    // Initialize authentication
    await authenticate()
    
    if (isAuthenticated()) {
      userProfile.value = await getUserProfile()
    }
  } catch (err) {
    error.value = err.message
    console.error('Authentication failed:', err)
  } finally {
    loading.value = false
  }
})

const handleLogout = async () => {
  try {
    await logout()
  } catch (err) {
    console.error('Logout failed:', err)
  }
}
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>
    
    <div v-else-if="isAuthenticated()">
      <h2>Welcome, {{ userProfile?.firstName || 'User' }}!</h2>
      <p>Email: {{ userProfile?.email }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
    
    <div v-else>
      <p>You are not logged in.</p>
      <button @click="authenticate">Login</button>
    </div>
  </div>
</template>
```

## Advanced Usage

### Role-Based Access Control

The Keycloak Auth module provides easy-to-use methods for role-based access control:

```typescript
import { useAuth } from '@lpkitvue/keycloak-auth'

const { hasRole, hasAnyRole } = useAuth()

// Check if user has a specific role
if (hasRole('admin')) {
  // Show admin features
}

// Check if user has any of these roles
if (hasAnyRole(['editor', 'author'])) {
  // Show content management features
}
```

### Authentication Middleware

Protect routes or actions with the authentication middleware:

```typescript
import { authMiddleware } from '@lpkitvue/keycloak-auth'

// Basic auth check
await authMiddleware(() => {
  // Proceed with authenticated operation
})

// With role requirements
await authMiddleware(
  () => { 
    // Success handler 
    console.log('User is authenticated and has required roles')
  },
  {
    requiredRoles: ['admin'],
    onAuthFailed: (error) => {
      console.error('Authentication failed:', error)
      // Redirect or show error message
    }
  }
)
```

### Vue Router Integration

Integrate with Vue Router to protect routes:

```typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@lpkitvue/keycloak-auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/admin',
      component: AdminDashboard,
      meta: { 
        requiresAuth: true,
        requiredRoles: ['admin']
      }
    },
    {
      path: '/profile',
      component: UserProfile,
      meta: { 
        requiresAuth: true 
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    await authMiddleware(
      () => next(),
      {
        requiredRoles: to.meta.requiredRoles,
        onAuthFailed: () => next('/login')
      }
    )
  } else {
    next()
  }
})

export default router
```

### API Calls with Authentication

Use the auth module to make authenticated API calls:

```typescript
import { useAuth } from '@lpkitvue/keycloak-auth'

const { getBearerToken, checkToken } = useAuth()

async function fetchProtectedData() {
  // Ensure token is valid before making API call
  await checkToken()
  
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': getBearerToken()
    }
  })
  
  return response.json()
}
```

### Custom Config and Advanced Options

Set custom configurations and advanced options:

```typescript
import { setConfig } from '@lpkitvue/keycloak-auth'

setConfig({
  url: 'https://keycloak.example.com/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
  redirectUri: window.location.origin,
  logoutUri: `${window.location.origin}/logout`,
  minTokenValidity: 60, // Refresh token if less than 60 seconds validity
  enablePkce: true,     // Use PKCE for enhanced security
  checkLoginIframe: false,
  onLoad: 'check-sso'
})
```

### Managing Logout Redirect

Set a custom logout redirect URI:

```typescript
import { useAuth } from '@lpkitvue/keycloak-auth'

const { setLogoutRedirectUri } = useAuth()

// Set dynamic logout redirect
function logout(redirectPath) {
  setLogoutRedirectUri(`${window.location.origin}${redirectPath}`)
  auth.logout()
}

// Usage
logout('/thank-you')
```

## API Reference

### useAuth Composable

The `useAuth` composable provides the following methods and properties:

| Method/Property | Type | Description |
|-----------------|------|-------------|
| `getKeycloakInstance` | `() => Keycloak \| null` | Get the underlying Keycloak instance |
| `initializeKeycloak` | `() => Keycloak` | Initialize Keycloak |
| `hasRole` | `(role: string) => boolean` | Check if user has a specific role |
| `hasAnyRole` | `(roles: string[]) => boolean` | Check if user has any of the specified roles |
| `authenticate` | `() => Promise<KeycloakAuthResponse>` | Perform authentication |
| `logout` | `() => Promise<void>` | Logout the user |
| `refreshToken` | `(minValidity?: number) => Promise<KeycloakAuthResponse>` | Refresh the current token |
| `getAuthState` | `() => AuthState` | Get current auth state |
| `isAuthenticated` | `() => boolean` | Check if user is authenticated |
| `getUserProfile` | `() => Promise<KeycloakUserProfile>` | Get user profile |
| `getBearerToken` | `() => string \| null` | Get bearer token for API calls |
| `checkToken` | `(minValidity?: number) => Promise<boolean>` | Check token validity and refresh if needed |
| `parseToken` | `(token: string) => any` | Parse JWT token |
| `setLogoutRedirectUri` | `(uri: string) => void` | Set a logout redirectUri |

### AuthState Interface

The `AuthState` interface provides information about the current authentication state:

```typescript
interface AuthState {
  isAuthenticated: boolean;
  userProfile: KeycloakUserProfile | null;
  loading: boolean;
  error: string | null;
  token: string | null;
  tokenExpiration: number | null;
}
```

### AuthMiddleware Options

The `authMiddleware` function accepts the following options:

```typescript
interface AuthMiddlewareOptions {
  onAuthFailed?: (error: AuthError) => void;
  minTokenValidity?: number;
  requiredRoles?: string[];
}
```

## TypeScript Support

The package includes comprehensive TypeScript definitions for all components and functions:

```typescript
import { useAuth } from '@lpkitvue/keycloak-auth'
import type { 
  KeycloakAuthProps,
  KeycloakAuthResponse,
  KeycloakUserProfile,
  AuthState,
  AuthError,
  UseAuthReturn
} from '@lpkitvue/keycloak-auth'

// Type-checked configurations
const config: KeycloakAuthProps = {
  url: 'https://keycloak.example.com/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
  redirectUri: window.location.origin,
  logoutUri: window.location.origin + '/logout',
  enablePkce: true,
  minTokenValidity: 30
}
```

## Accessibility

The Keycloak Auth module follows these accessibility best practices:

- Properly handles focus when redirecting for authentication
- Preserves user's current state during authentication flows
- Provides clear error messages for authentication failures
- Respects user preferences for session duration
- Ensures seamless keyboard navigation during the authentication process
- Provides programmatic access to authentication states for custom UI feedback
- Implements proper ARIA attributes for loading states during authentication
- Maintains session information across page refreshes when appropriate
- Supports accessible logout flows with clear user feedback
