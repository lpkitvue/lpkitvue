import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert } from '@lpkitvue/alert';
import { ref } from 'vue';
import type { AlertProps } from '@lpkitvue/alert';

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info', 'danger'],
      description: 'Alert type/variant',
    },
    msg: {
      control: 'text',
      description: 'Alert message content',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes for customization',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether to automatically close the alert',
    },
    autoCloseDelay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Delay in milliseconds before auto-closing',
    },
    showProgress: {
      control: 'boolean',
      description: 'Whether to show a progress bar for auto-close',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the alert',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'center'],
      description: 'Position of the alert',
    },
    rtl: {
      control: 'boolean',
      description: 'Enable right-to-left layout',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable dark mode styling',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Enhanced alert component with RTL, dark mode, accessibility, and auto-close features.',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div class="p-4 max-w-2xl mx-auto"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj<AlertProps>;

// Basic Alert Story
export const BasicAlert: Story = {
  render: (args) => ({
    components: { Alert },
    setup() {
      const visible = ref(true);
      const handleClose = () => {
        visible.value = false;
        setTimeout(() => {
          visible.value = true;
        }, 1500);
      };

      return { args, visible, handleClose };
    },
    template: `
      <div>
        <Alert
          v-if="visible"
          :msg="args.msg"
          :component="args.component"
          :closable="args.closable"
          :custom-class="args.customClass"
          :auto-close="args.autoClose"
          :auto-close-delay="args.autoCloseDelay"
          :show-progress="args.showProgress"
          :size="args.size"
          :position="args.position"
          :rtl="args.rtl"
          :dark-mode="args.darkMode"
          @close="handleClose"
          @show="args.onShow"
          @hide="args.onHide"
        />
        <button
          v-if="!visible"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="visible = true"
        >
          Show Alert Again
        </button>
      </div>
    `,
  }),
  args: {
    msg: 'This is an enhanced alert with improved animations and accessibility',
    component: 'info',
    closable: true,
    customClass: '',
    autoClose: false,
    autoCloseDelay: 5000,
    showProgress: false,
    size: 'md',
    position: 'top',
    rtl: false,
    darkMode: false,
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const variants = ['success', 'info', 'warning', 'error', 'danger'] as const;
      const messages = {
        success: 'Operation completed successfully!',
        info: 'Here is some important information.',
        warning: 'Please be aware of this warning.',
        error: 'An error has occurred.',
        danger: 'This is a dangerous situation!',
      };

      return { variants, messages };
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">All Alert Variants</h3>
        <Alert
          v-for="variant in variants"
          :key="variant"
          :component="variant"
          :msg="messages[variant]"
          :closable="true"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available alert variants with their default styling.',
      },
    },
  },
};

// Size Variants
export const SizeVariants: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const sizes = ['sm', 'md', 'lg'] as const;
      return { sizes };
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Size Variants</h3>
        <Alert
          v-for="size in sizes"
          :key="size"
          component="info"
          :msg="\`This is a \${size.toUpperCase()} sized alert\`"
          :size="size"
          :closable="true"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of alerts.',
      },
    },
  },
};

// Auto-Close with Progress
export const AutoCloseWithProgress: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const alerts = ref([
        { id: 1, visible: true },
        { id: 2, visible: true },
        { id: 3, visible: true },
      ]);

      const handleClose = (id: number) => {
        const alert = alerts.value.find((a) => a.id === id);
        if (alert) {
          alert.visible = false;
          setTimeout(() => {
            alert.visible = true;
          }, 2000);
        }
      };

      return { alerts, handleClose };
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Auto-Close with Progress Bar</h3>
        <Alert
          v-if="alerts[0].visible"
          component="success"
          msg="This alert closes in 3 seconds with progress bar"
          :auto-close="true"
          :auto-close-delay="30000"
          :show-progress="true"
          @close="() => handleClose(1)"
        />
        <Alert
          v-if="alerts[1].visible"
          component="warning"
          msg="This alert closes in 5 seconds without progress bar"
          :auto-close="true"
          :auto-close-delay="50000"
          :show-progress="false"
          @close="() => handleClose(2)"
        />
        <Alert
          v-if="alerts[2].visible"
          component="info"
          msg="Hover to pause auto-close timer (7 seconds)"
          :auto-close="true"
          :auto-close-delay="70000"
          :show-progress="true"
          @close="() => handleClose(3)"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with auto-close functionality and progress bars. Hover over alerts to pause the timer.',
      },
    },
  },
};

// RTL Support
export const RTLSupport: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">RTL (Right-to-Left) Support</h3>
        <Alert
          component="info"
          msg="This is a left-to-right alert (default)"
          :closable="true"
          :rtl="false"
        />
        <Alert
          component="success"
          msg="هذا تنبيه من اليمين إلى اليسار"
          :closable="true"
          :rtl="true"
        />
        <Alert
          component="warning"
          msg="Mixed content: Alert with עברית and English text"
          :closable="true"
          :rtl="true"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with right-to-left language support.',
      },
    },
  },
};

// Dark Mode
export const DarkMode: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const variants = ['success', 'info', 'warning', 'error'] as const;
      return { variants };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Light Mode (Default)</h3>
          <div class="space-y-4">
            <Alert
              v-for="variant in variants"
              :key="\`light-\${variant}\`"
              :component="variant"
              :msg="\`Light mode \${variant} alert\`"
              :closable="true"
              :dark-mode="false"
            />
          </div>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 text-white">Dark Mode</h3>
          <div class="space-y-4">
            <Alert
              v-for="variant in variants"
              :key="\`dark-\${variant}\`"
              :component="variant"
              :msg="\`Dark mode \${variant} alert\`"
              :closable="true"
              :dark-mode="true"
            />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of alerts in light and dark mode.',
      },
    },
  },
};

// Interactive Features
export const InteractiveFeatures: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const alertConfig = ref({
        msg: 'Customizable alert message',
        component: 'info' as const,
        closable: true,
        autoClose: false,
        autoCloseDelay: 5000,
        showProgress: false,
        size: 'md' as const,
        rtl: false,
        darkMode: false,
      });

      const visible = ref(true);

      const resetAlert = () => {
        visible.value = false;
        setTimeout(() => {
          visible.value = true;
        }, 100);
      };

      return { alertConfig, visible, resetAlert };
    },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold">Interactive Alert Customizer</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label class="block text-sm font-medium mb-1">Message:</label>
            <input
              v-model="alertConfig.msg"
              class="w-full p-2 border rounded"
              @input="resetAlert"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Type:</label>
            <select
              v-model="alertConfig.component"
              class="w-full p-2 border rounded"
              @change="resetAlert"
            >
              <option value="success">Success</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="danger">Danger</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Size:</label>
            <select
              v-model="alertConfig.size"
              class="w-full p-2 border rounded"
              @change="resetAlert"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Auto Close Delay (ms):</label>
            <input
              v-model.number="alertConfig.autoCloseDelay"
              type="number"
              min="1000"
              max="10000"
              step="500"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="flex flex-wrap gap-4">
            <label class="flex items-center">
              <input
                v-model="alertConfig.closable"
                type="checkbox"
                class="mr-2"
                @change="resetAlert"
              />
              Closable
            </label>

            <label class="flex items-center">
              <input
                v-model="alertConfig.autoClose"
                type="checkbox"
                class="mr-2"
                @change="resetAlert"
              />
              Auto Close
            </label>

            <label class="flex items-center">
              <input
                v-model="alertConfig.showProgress"
                type="checkbox"
                class="mr-2"
                @change="resetAlert"
              />
              Show Progress
            </label>
          </div>

          <div class="flex flex-wrap gap-4">
            <label class="flex items-center">
              <input
                v-model="alertConfig.rtl"
                type="checkbox"
                class="mr-2"
                @change="resetAlert"
              />
              RTL Mode
            </label>

            <label class="flex items-center">
              <input
                v-model="alertConfig.darkMode"
                type="checkbox"
                class="mr-2"
                @change="resetAlert"
              />
              Dark Mode
            </label>
          </div>
        </div>

        <div class="p-4 rounded-lg" :class="alertConfig.darkMode ? 'bg-gray-900' : 'bg-white'">
          <Alert
            v-if="visible"
            v-bind="alertConfig"
            @close="() => { visible = false; setTimeout(() => visible = true, 1000) }"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo allowing you to customize all alert properties in real-time.',
      },
    },
  },
};

// Accessibility Features
export const AccessibilityFeatures: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const alerts = ref([
        { id: 1, visible: true, type: 'success' as const },
        { id: 2, visible: true, type: 'error' as const },
        { id: 3, visible: true, type: 'info' as const },
      ]);

      const showAlert = (id: number) => {
        const alert = alerts.value.find((a) => a.id === id);
        if (alert) alert.visible = true;
      };

      const hideAlert = (id: number) => {
        const alert = alerts.value.find((a) => a.id === id);
        if (alert) alert.visible = false;
      };

      return { alerts, showAlert, hideAlert };
    },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold">Accessibility Features</h3>

        <div class="p-4 bg-blue-50 rounded-lg">
          <h4 class="font-medium mb-2">Accessibility Features Included:</h4>
          <ul class="text-sm space-y-1 list-disc list-inside">
            <li>Proper ARIA attributes (role="alert", aria-live, aria-atomic)</li>
            <li>Keyboard navigation support (Escape to close)</li>
            <li>Focus management for screen readers</li>
            <li>High contrast mode support</li>
            <li>Reduced motion support (prefers-reduced-motion)</li>
            <li>Color contrast compliant with WCAG guidelines</li>
            <li>Screen reader announcements</li>
          </ul>
        </div>

        <div class="space-y-4">
          <Alert
            v-if="alerts[0].visible"
            component="success"
            msg="Success: This alert uses aria-live='polite' for non-intrusive announcements"
            :closable="true"
            @close="() => hideAlert(1)"
          />

          <Alert
            v-if="alerts[1].visible"
            component="error"
            msg="Error: This alert uses aria-live='assertive' for immediate announcements"
            :closable="true"
            @close="() => hideAlert(2)"
          />

          <Alert
            v-if="alerts[2].visible"
            component="info"
            msg="Try pressing Escape key to close this alert, or tab to the close button"
            :closable="true"
            @close="() => hideAlert(3)"
          />

          <div class="flex gap-2 mt-4">
            <button
              v-for="alert in alerts"
              :key="alert.id"
              :disabled="alert.visible"
              class="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
              @click="showAlert(alert.id)"
            >
              Show {{ alert.type }} Alert
            </button>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstration of accessibility features including ARIA attributes, keyboard navigation, and screen reader support.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Custom Styled Alerts</h3>

        <Alert
          component="info"
          msg="Alert with custom border and shadow"
          custom-class="border-l-4 border-blue-500 shadow-lg"
          :closable="true"
        />

        <Alert
          component="success"
          msg="Alert with rounded corners and gradient background"
          custom-class="rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white border-none"
          :closable="true"
        />

        <Alert
          component="warning"
          msg="Alert with custom animation class"
          custom-class="animate-pulse border-2 border-dashed"
          :closable="true"
        />

        <Alert
          component="error"
          msg="Alert with custom typography"
          custom-class="font-mono text-lg tracking-wide"
          :closable="true"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of alerts with custom styling using the customClass prop.',
      },
    },
  },
};

// With Slot Content
export const WithSlotContent: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Alerts with Additional Content</h3>

        <Alert
          component="info"
          msg="Alert with action buttons"
          :closable="true"
        >
          <div class="mt-3 flex gap-2">
            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
              Learn More
            </button>
            <button class="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600">
              Dismiss
            </button>
          </div>
        </Alert>

        <Alert
          component="warning"
          msg="Alert with detailed information"
          :closable="true"
        >
          <div class="mt-2 text-sm">
            <p>This is additional information that provides more context about the warning.</p>
            <ul class="mt-2 list-disc list-inside">
              <li>First important detail</li>
              <li>Second important detail</li>
              <li>Third important detail</li>
            </ul>
          </div>
        </Alert>

        <Alert
          component="success"
          msg="Form submission successful"
          :closable="true"
        >
          <div class="mt-3 p-3 bg-white rounded border">
            <h4 class="font-medium text-gray-900">Next Steps:</h4>
            <ol class="mt-1 text-sm text-gray-600 list-decimal list-inside">
              <li>Check your email for confirmation</li>
              <li>Complete your profile setup</li>
              <li>Explore the dashboard</li>
            </ol>
          </div>
        </Alert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with additional content using slots for action buttons, lists, and detailed information.',
      },
    },
  },
};
