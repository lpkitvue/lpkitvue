import type { Meta, StoryObj } from '@storybook/vue3';
import { TabRouter, TabComponent } from '@lpkitvue/tab';
import { ref, defineComponent, h } from 'vue';
import { LpIcon } from '@lpkitvue/font-icon';

// Mock components for the TabComponent stories
const DemoContent = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#4361ee',
    },
  },
  setup(props) {
    return () =>
      h(
        'div',
        {
          style: {
            padding: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: props.color + '10',
            border: `1px solid ${props.color}`,
          },
        },
        [
          h('h3', { class: 'text-lg font-bold mb-2', style: { color: props.color } }, props.title),
          h('p', { class: 'text-sm' }, props.description || 'Tab content goes here...'),
        ]
      );
  },
});

// Mock vue-router to simulate TabRouter behavior
// This is needed because TabRouter requires vue-router, which might not be available in Storybook
const mockRouter = {
  push: () => {},
  replace: () => {},
};

const mockRoute = {
  path: '/home',
};

// Meta information for both tab components
const meta: Meta = {
  title: 'Components/Tab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tab components for navigation and content organization',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      setup() {
        // Provide a mock router
        return {
          $router: mockRouter,
          $route: mockRoute,
        };
      },
      template: '<div class="p-4 max-w-4xl mx-auto border rounded bg-white"><story /></div>',
    }),
  ],
};

export default meta;

// Type for a story object
type Story = StoryObj;

// TabComponent Basic Story
export const BasicTabComponent: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      const tabs = [
        {
          title: 'Home',
          component: DemoContent,
          props: { title: 'Home Tab', description: 'This is the home tab content', color: '#4361ee' },
        },
        {
          title: 'Profile',
          component: DemoContent,
          props: { title: 'Profile Tab', description: 'User profile information goes here', color: '#00ab55' },
        },
        {
          title: 'Settings',
          component: DemoContent,
          props: { title: 'Settings Tab', description: 'Application settings and preferences', color: '#e2a03f' },
        },
      ];

      // Transform tabs into the format expected by TabComponent
      const tabComponents = tabs.map((tab) => ({
        title: tab.title,
        component: {
          setup() {
            return () => h(tab.component, tab.props);
          },
        },
      }));

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Basic Tab Component</h2>
        <TabComponent :tab-components="tabComponents" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic example of TabComponent with three simple tabs',
      },
    },
  },
};

// TabComponent with Icons
export const TabComponentWithIcons: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      const tabs = [
        {
          title: 'Home',
          icon: 'home',
          component: DemoContent,
          props: { title: 'Home Tab', description: 'This is the home tab content', color: '#4361ee' },
        },
        {
          title: 'Profile',
          icon: 'user',
          component: DemoContent,
          props: { title: 'Profile Tab', description: 'User profile information goes here', color: '#00ab55' },
        },
        {
          title: 'Settings',
          icon: 'settings',
          component: DemoContent,
          props: { title: 'Settings Tab', description: 'Application settings and preferences', color: '#e2a03f' },
        },
        {
          title: 'Notifications',
          icon: 'bell',
          component: DemoContent,
          props: { title: 'Notifications Tab', description: 'Your notification preferences', color: '#e7515a' },
        },
      ];

      // Transform tabs into the format expected by TabComponent
      const tabComponents = tabs.map((tab) => ({
        title: tab.title,
        icon: tab.icon,
        component: {
          setup() {
            return () => h(tab.component, tab.props);
          },
        },
      }));

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Tab Component with Icons</h2>
        <TabComponent :tab-components="tabComponents" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'TabComponent with icons in the tab headers',
      },
    },
  },
};

// TabComponent with Default Tab and Lazy Loading
export const TabComponentWithOptions: Story = {
  render: () => ({
    components: { TabComponent, DemoContent, LpIcon },
    setup() {
      const selectedTabIndex = ref(1); // Start with the second tab

      const tabs = [
        {
          title: 'Home',
          component: DemoContent,
          props: {
            title: 'Home Tab',
            description: 'This component is lazily loaded when tab is first visited',
            color: '#4361ee',
          },
        },
        {
          title: 'Profile',
          component: DemoContent,
          props: {
            title: 'Profile Tab',
            description: 'This tab is selected by default because defaultTab=1',
            color: '#00ab55',
          },
        },
        {
          title: 'Settings',
          component: {
            setup() {
              return () =>
                h('div', { class: 'p-4 border rounded bg-gray-50' }, [
                  h('h3', { class: 'text-lg font-bold mb-2' }, 'Heavy Component'),
                  h(
                    'p',
                    { class: 'mb-2' },
                    'This component would be expensive to render. With lazy=true, it will only be mounted when selected.'
                  ),
                  h('div', { class: 'flex items-center text-yellow-600' }, [
                    h(LpIcon, { icon: 'info-circle', size: 'sm', class: 'mr-2' }),
                    'The current time is: ' + new Date().toLocaleTimeString(),
                  ]),
                ]);
            },
          },
        },
      ];

      // Transform tabs into the format expected by TabComponent
      const tabComponents = tabs.map((tab) => ({
        title: tab.title,
        component: tab.component instanceof Function ? tab.component : '',
      }));

      const handleTabChange = (index) => {
        selectedTabIndex.value = index;
        console.log(`Tab changed to index: ${index}`);
      };

      return {
        tabComponents,
        selectedTabIndex,
        handleTabChange,
      };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Tab Component with Options</h2>
        <div class="mb-4">
          <div class="text-sm text-gray-600 mb-2">
            Current Tab: <span class="font-medium">{{ selectedTabIndex }}</span>
          </div>
        </div>
        <TabComponent
          :tab-components="tabComponents"
          :default-tab="1"
          :lazy="true"
          @change="handleTabChange"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'TabComponent with a default selected tab and lazy loading of tab content',
      },
    },
  },
};

// TabRouter Example
export const BasicTabRouter: Story = {
  render: () => ({
    components: { TabRouter },
    setup() {
      const tabRoutes = [
        { title: 'Dashboard', to: '/dashboard', icon: 'home' },
        { title: 'Products', to: '/products', icon: 'box' },
        { title: 'Customers', to: '/customers', icon: 'users' },
        { title: 'Orders', to: '/orders', icon: 'shopping-cart' },
      ];

      // Simulate route change to show active tab
      const mockCurrentPath = ref('/products');

      // Mock router-view content based on current path
      const getRouteContent = (path) => {
        const route = tabRoutes.find((r) => r.to === path);
        return route ? `${route.title} content would be shown here` : 'Not found';
      };

      const changePath = (path) => {
        mockCurrentPath.value = path;
        // Mock the router.push functionality
        console.log(`Route changed to: ${path}`);
      };

      return {
        tabRoutes,
        mockCurrentPath,
        getRouteContent,
        changePath,
      };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Basic Tab Router</h2>
        <p class="text-sm text-gray-600 mb-4">
          This demonstrates TabRouter's UI. In a real application, it would work with Vue Router.
        </p>

        <TabRouter :tab-routers="tabRoutes" />

        <div class="mt-4 p-4 border rounded">
          <h3 class="font-medium mb-2">Router View Simulation</h3>
          <p>Current path: <code>{{ mockCurrentPath }}</code></p>
          <p class="mt-2">{{ getRouteContent(mockCurrentPath) }}</p>

          <div class="mt-4 flex gap-2">
            <button
              v-for="route in tabRoutes"
              :key="route.to"
              class="px-3 py-1 text-sm border rounded hover:bg-gray-100"
              :class="{'bg-blue-100 border-blue-300': mockCurrentPath === route.to}"
              @click="changePath(route.to)"
            >
              Go to {{ route.title }}
            </button>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic example of TabRouter that would work with Vue Router in a real application',
      },
    },
  },
};

// Many Tabs Example
export const ManyTabs: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      // Generate 10 tabs
      const tabComponents = Array.from({ length: 10 }, (_, i) => ({
        title: `Tab ${i + 1}`,
        icon: i % 2 === 0 ? 'check-circle' : '',
        component: {
          setup() {
            return () =>
              h(DemoContent, {
                title: `Tab ${i + 1} Content`,
                description: `This is the content for tab ${i + 1}`,
                color: i % 3 === 0 ? '#4361ee' : i % 3 === 1 ? '#00ab55' : '#e7515a',
              });
          },
        },
      }));

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Many Tabs Example</h2>
        <p class="text-sm text-gray-600 mb-4">
          This demonstrates how the tab component handles many tabs with horizontal scrolling.
        </p>
        <TabComponent :tab-components="tabComponents" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the tab component handles many tabs with horizontal scrolling',
      },
    },
  },
};

// Custom Styled Tabs
export const CustomStyledTabs: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      const tabs = [
        {
          title: 'Home',
          icon: 'home',
          linkClass: 'custom-tab-home',
          component: DemoContent,
          props: { title: 'Home Tab', description: 'Custom styled tab example', color: '#4361ee' },
        },
        {
          title: 'Profile',
          icon: 'user',
          linkClass: 'custom-tab-profile',
          component: DemoContent,
          props: { title: 'Profile Tab', description: 'Custom styled tab example', color: '#00ab55' },
        },
        {
          title: 'Settings',
          icon: 'settings',
          linkClass: 'custom-tab-settings',
          component: DemoContent,
          props: { title: 'Settings Tab', description: 'Custom styled tab example', color: '#e2a03f' },
        },
      ];

      // Transform tabs into the format expected by TabComponent
      const tabComponents = tabs.map((tab) => ({
        title: tab.title,
        icon: tab.icon,
        linkClass: tab.linkClass,
        component: {
          setup() {
            return () => h(tab.component, tab.props);
          },
        },
      }));

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Custom Styled Tabs</h2>
        <p class="text-sm text-gray-600 mb-4">
          This demonstrates custom styling using the linkClass property on each tab.
        </p>
        <TabComponent :tab-components="tabComponents" />

        <style>
          .custom-tab-home {
            background-color: rgba(67, 97, 238, 0.1);
          }
          .custom-tab-profile {
            background-color: rgba(0, 171, 85, 0.1);
          }
          .custom-tab-settings {
            background-color: rgba(226, 160, 63, 0.1);
          }
          /* Active state overrides */
          .lp-tab-active.custom-tab-home {
            border-bottom-color: #4361ee !important;
          }
          .lp-tab-active.custom-tab-profile {
            border-bottom-color: #00ab55 !important;
          }
          .lp-tab-active.custom-tab-settings {
            border-bottom-color: #e2a03f !important;
          }
        </style>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to apply custom styles to tabs using the linkClass property',
      },
    },
  },
};

// Programmatic Tab Control
export const ProgrammaticTabControl: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      const tabs = [
        {
          title: 'Home',
          component: DemoContent,
          props: { title: 'Home Tab', description: 'This is the home tab content', color: '#4361ee' },
        },
        {
          title: 'Profile',
          component: DemoContent,
          props: { title: 'Profile Tab', description: 'User profile information goes here', color: '#00ab55' },
        },
        {
          title: 'Settings',
          component: DemoContent,
          props: { title: 'Settings Tab', description: 'Application settings and preferences', color: '#e2a03f' },
        },
      ];

      // Transform tabs into the format expected by TabComponent
      const tabComponents = tabs.map((tab) => ({
        title: tab.title,
        component: {
          setup() {
            return () => h(tab.component, tab.props);
          },
        },
      }));

      // Reactive reference to store the current tab index
      const currentTabIndex = ref(0);

      // Method to handle tab changes
      const handleTabChange = (index) => {
        currentTabIndex.value = index;
      };

      // Method to programmatically change tabs
      const goToTab = (index) => {
        currentTabIndex.value = index;
      };

      return {
        tabComponents,
        currentTabIndex,
        handleTabChange,
        goToTab,
      };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Programmatic Tab Control</h2>

        <div class="mb-4 flex gap-2">
          <button
            v-for="(_, index) in tabComponents"
            :key="index"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            :class="{'bg-blue-600': currentTabIndex === index}"
            @click="goToTab(index)"
          >
            Go to Tab {{ index + 1 }}
          </button>
        </div>

        <div class="p-2 bg-gray-100 rounded mb-4">
          <p>Current Tab Index: {{ currentTabIndex }}</p>
        </div>

        <TabComponent
          :tab-components="tabComponents"
          :default-tab="currentTabIndex"
          @change="handleTabChange"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to programmatically control the selected tab',
      },
    },
  },
};

// Responsive Tab Behavior
export const ResponsiveTabBehavior: Story = {
  render: () => ({
    components: { TabComponent, DemoContent },
    setup() {
      // Generate tabs with long names to demonstrate responsive behavior
      const tabComponents = [
        {
          title: 'Dashboard Overview',
          icon: 'home',
          component: {
            setup() {
              return () =>
                h(DemoContent, {
                  title: 'Dashboard Overview',
                  description: 'This tab demonstrates responsive behavior with long tab names',
                  color: '#4361ee',
                });
            },
          },
        },
        {
          title: 'User Profile Management',
          icon: 'user',
          component: {
            setup() {
              return () =>
                h(DemoContent, {
                  title: 'User Profile Management',
                  description: 'User profile management and settings section',
                  color: '#00ab55',
                });
            },
          },
        },
        {
          title: 'Application Configuration',
          icon: 'settings',
          component: {
            setup() {
              return () =>
                h(DemoContent, {
                  title: 'Application Configuration',
                  description: 'Configure application settings and preferences',
                  color: '#e2a03f',
                });
            },
          },
        },
        {
          title: 'Notification Center',
          icon: 'bell',
          component: {
            setup() {
              return () =>
                h(DemoContent, {
                  title: 'Notification Center',
                  description: 'Manage your notifications and alerts',
                  color: '#e7515a',
                });
            },
          },
        },
      ];

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Responsive Tab Behavior</h2>
        <p class="text-sm text-gray-600 mb-4">
          Resize your browser window to see how the tabs respond. On smaller screens, the tabs will scroll horizontally.
        </p>

        <div class="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <strong>Note:</strong> This example uses longer tab names to demonstrate the responsive behavior.
        </div>

        <TabComponent :tab-components="tabComponents" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the tabs respond to different screen sizes',
      },
    },
  },
};

// Tab with Dynamic Content
export const DynamicTabContent: Story = {
  render: () => ({
    components: { TabComponent },
    setup() {
      // Counter state for dynamic content
      const counter = ref(0);

      // Increment the counter
      const incrementCounter = () => {
        counter.value++;
      };

      // Reset the counter
      const resetCounter = () => {
        counter.value = 0;
      };

      // Dynamic component that updates based on counter
      const CounterComponent = {
        setup() {
          return () =>
            h('div', { class: 'p-4 border rounded bg-blue-50' }, [
              h('h3', { class: 'text-lg font-bold mb-2' }, 'Dynamic Content Example'),
              h('p', { class: 'mb-4' }, [
                'Current count: ',
                h('span', { class: 'font-bold text-blue-600' }, counter.value.toString()),
              ]),
              h('div', { class: 'flex gap-2' }, [
                h(
                  'button',
                  {
                    class: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
                    onClick: incrementCounter,
                  },
                  'Increment'
                ),
                h(
                  'button',
                  {
                    class: 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600',
                    onClick: resetCounter,
                  },
                  'Reset'
                ),
              ]),
            ]);
        },
      };

      // Static component for comparison
      const StaticComponent = {
        setup() {
          return () =>
            h('div', { class: 'p-4 border rounded bg-green-50' }, [
              h('h3', { class: 'text-lg font-bold mb-2' }, 'Static Content Tab'),
              h('p', { class: 'mb-2' }, "This tab has static content that doesn't change."),
              h('p', { class: 'text-sm text-gray-600' }, 'Switch between tabs to see how state is preserved.'),
            ]);
        },
      };

      // Transform tabs into the format expected by TabComponent
      const tabComponents = [
        {
          title: 'Dynamic Content',
          icon: 'refresh',
          component: CounterComponent,
        },
        {
          title: 'Static Content',
          icon: 'file-text',
          component: StaticComponent,
        },
      ];

      return { tabComponents };
    },
    template: `
      <div>
        <h2 class="text-lg font-bold mb-4">Dynamic Tab Content</h2>
        <p class="text-sm text-gray-600 mb-4">
          This example demonstrates how component state is preserved when switching between tabs.
          Try incrementing the counter, switching tabs, and then coming back.
        </p>

        <TabComponent :tab-components="tabComponents" :lazy="false" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how component state is preserved when switching between tabs',
      },
    },
  },
};
