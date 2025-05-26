import type { Meta, StoryObj } from '@storybook/vue3';
import { LpToast, useToast } from '@lpkitvue/toast';
import { ref, onMounted } from 'vue';

// Define meta information for all toast stories
const meta: Meta = {
  title: 'Components/Toast',
  component: LpToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toast notification system for providing feedback to users',
      },
    },
  },
  argTypes: {
    defaultPosition: {
      control: { type: 'select' },
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Default position for toast notifications',
    },
    defaultDuration: {
      control: { type: 'number' },
      description: 'Default display duration in milliseconds',
    },
    maxToasts: {
      control: { type: 'number' },
      description: 'Maximum number of toasts displayed at once per position',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'Z-index for the toast container',
    },
  },
};

export default meta;

type Story = StoryObj;

// Basic Toast Types
export const BasicToastTypes: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const showDefault = () => {
        toast.show('This is a default toast notification');
      };

      const showSuccess = () => {
        toast.success('Operation completed successfully!');
      };

      const showError = () => {
        toast.error('An error occurred while processing your request');
      };

      const showWarning = () => {
        toast.warning('Please review the information before proceeding');
      };

      const showInfo = () => {
        toast.info('New updates are available for your application');
      };

      return {
        showDefault,
        showSuccess,
        showError,
        showWarning,
        showInfo,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Toast Types</h3>
        <div class="flex flex-wrap gap-3">
          <button
            @click="showDefault"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Default Toast
          </button>

          <button
            @click="showSuccess"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Success Toast
          </button>

          <button
            @click="showError"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Error Toast
          </button>

          <button
            @click="showWarning"
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Warning Toast
          </button>

          <button
            @click="showInfo"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Info Toast
          </button>
        </div>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'The basic toast types available: default, success, error, warning, and info.',
      },
    },
  },
};

// Different Positions
export const ToastPositions: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const showToast = (position: string) => {
        toast.info({
          message: `Toast positioned at ${position}`,
          position: position as any,
          title: 'Position Demo',
        });
      };

      return {
        showToast,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Toast Positions</h3>
        <div class="grid grid-cols-3 gap-3">
          <button
            @click="showToast('top-left')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Top Left
          </button>

          <button
            @click="showToast('top-center')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Top Center
          </button>

          <button
            @click="showToast('top-right')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Top Right
          </button>

          <button
            @click="showToast('bottom-left')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Bottom Left
          </button>

          <button
            @click="showToast('bottom-center')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Bottom Center
          </button>

          <button
            @click="showToast('bottom-right')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Bottom Right
          </button>
        </div>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the different positions where toasts can be displayed on the screen.',
      },
    },
  },
};

// Custom Duration
export const CustomDuration: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const showQuick = () => {
        toast.info({
          message: 'This toast will disappear quickly (1 second)',
          duration: 1000,
        });
      };

      const showNormal = () => {
        toast.info({
          message: 'This toast has the default duration (5 seconds)',
        });
      };

      const showLong = () => {
        toast.info({
          message: 'This toast will stay longer (10 seconds)',
          duration: 10000,
        });
      };

      const showPersistent = () => {
        toast.warning({
          title: 'Important Notice',
          message: 'This toast will not disappear automatically (duration: 0)',
          duration: 0,
        });
      };

      return {
        showQuick,
        showNormal,
        showLong,
        showPersistent,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Toast Durations</h3>
        <div class="flex flex-wrap gap-3">
          <button
            @click="showQuick"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Quick Toast (1s)
          </button>

          <button
            @click="showNormal"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Default Duration (5s)
          </button>

          <button
            @click="showLong"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Long Toast (10s)
          </button>

          <button
            @click="showPersistent"
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Persistent Toast
          </button>
        </div>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Control how long toasts remain visible with custom durations, including persistent toasts.',
      },
    },
  },
};

// Custom Styling
export const CustomStyledToasts: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const showCustomStyled = () => {
        toast.show({
          message: 'This toast has custom styling',
          title: 'Custom Style',
          className: 'custom-toast',
          icon: 'sparkles',
        });
      };

      const showGradientToast = () => {
        toast.show({
          message: 'Toast with gradient background',
          className: 'gradient-toast',
          position: 'top-center',
        });
      };

      const showRoundedToast = () => {
        toast.success({
          message: 'Fully rounded corners and shadow',
          className: 'rounded-toast',
          position: 'bottom-center',
        });
      };

      const showMinimalToast = () => {
        toast.info({
          message: 'Minimal toast with no icons',
          className: 'minimal-toast',
          icon: '',
          position: 'bottom-right',
        });
      };

      return {
        showCustomStyled,
        showGradientToast,
        showRoundedToast,
        showMinimalToast,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Custom Styled Toasts</h3>
        <div class="flex flex-wrap gap-3">
          <button
            @click="showCustomStyled"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Custom Styled Toast
          </button>

          <button
            @click="showGradientToast"
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          >
            Gradient Toast
          </button>

          <button
            @click="showRoundedToast"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Rounded Toast
          </button>

          <button
            @click="showMinimalToast"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Minimal Toast
          </button>
        </div>

        <style>
          .custom-toast {
            background-color: #2d3748;
            color: white;
            border-left: 4px solid #f56565;
          }

          .gradient-toast {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none !important;
          }

          .rounded-toast {
            border-radius: 9999px;
            padding-left: 20px;
            padding-right: 20px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border: none !important;
          }

          .minimal-toast {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            border: none !important;
            border-radius: 4px;
            padding: 8px 16px;
          }
        </style>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be customized with additional classes for unique styling.',
      },
    },
  },
};

// Multiple Toasts and Stacking Behavior
export const MultipleToasts: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const showMultiple = () => {
        toast.info({
          message: 'First toast message',
          position: 'top-right',
        });

        setTimeout(() => {
          toast.success({
            message: 'Second toast message',
            position: 'top-right',
          });
        }, 300);

        setTimeout(() => {
          toast.warning({
            message: 'Third toast message',
            position: 'top-right',
          });
        }, 600);

        setTimeout(() => {
          toast.error({
            message: 'Fourth toast message',
            position: 'top-right',
          });
        }, 900);
      };

      const showTooMany = () => {
        for (let i = 1; i <= 10; i++) {
          setTimeout(() => {
            toast.info({
              message: `Toast message ${i}`,
              position: 'top-right',
            });
          }, i * 200);
        }
      };

      const clearAllToasts = () => {
        toast.clear();
        toast.success('All toasts cleared!');
      };

      return {
        showMultiple,
        showTooMany,
        clearAllToasts,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Multiple Toasts</h3>
        <div class="flex flex-wrap gap-3">
          <button
            @click="showMultiple"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Show 4 Toasts
          </button>

          <button
            @click="showTooMany"
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          >
            Show 10 Toasts
          </button>

          <button
            @click="clearAllToasts"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear All
          </button>
        </div>

        <LpToast :maxToasts="5" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how multiple toasts stack and how the system handles when too many toasts are shown at once.',
      },
    },
  },
};

// Toast Manager Configuration
export const LpToastConfig: Story = {
  args: {
    defaultPosition: 'bottom-right',
    defaultDuration: 3000,
    maxToasts: 3,
    zIndex: 9999,
  },
  render: (args: any) => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      onMounted(() => {
        // Update global config from args
        toast.updateConfig({
          defaultPosition: args.defaultPosition,
          defaultDuration: args.defaultDuration,
          maxToasts: args.maxToasts,
          zIndex: args.zIndex,
        });
      });

      const showToast = () => {
        toast.info('This toast uses the configured defaults');
      };

      return {
        args,
        showToast,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Toast Manager Configuration</h3>
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Current configuration:</p>
          <ul class="text-sm space-y-1">
            <li><strong>Default Position:</strong> {{ args.defaultPosition }}</li>
            <li><strong>Default Duration:</strong> {{ args.defaultDuration }}ms</li>
            <li><strong>Max Toasts:</strong> {{ args.maxToasts }}</li>
            <li><strong>Z-Index:</strong> {{ args.zIndex }}</li>
          </ul>
        </div>

        <button
          @click="showToast"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Show Toast with Config
        </button>

        <LpToast v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'The Toast Manager component can be configured with default behavior for all toasts.',
      },
    },
  },
};

// Auto-Stacking Demo
export const AutoStackingDemo: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();

      const autoStackDemo = () => {
        // Show toasts across different positions
        const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

        positions.forEach((position, index) => {
          setTimeout(() => {
            toast.info({
              message: `Toast at ${position}`,
              position: position as any,
            });
          }, index * 500);
        });
      };

      return {
        autoStackDemo,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Auto-Stacking Demo</h3>
        <button
          @click="autoStackDemo"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Show Toasts at All Positions
        </button>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how toasts automatically stack at different screen positions.',
      },
    },
  },
};

// Programmatic Usage
export const ProgrammaticUsage: Story = {
  render: () => ({
    components: { LpToast },
    setup() {
      const toast = useToast();
      const toastId = ref<string | null>(null);

      const createToast = () => {
        toastId.value = toast.info({
          title: 'Task Started',
          message: 'Processing your request...',
          duration: 0,
        });
      };

      const updateToast = () => {
        if (toastId.value) {
          toast.update(toastId.value, {
            title: 'Task Progress',
            message: 'Your request is 50% complete',
            type: 'warning',
          });
        } else {
          toast.error('No active toast to update');
        }
      };

      const completeToast = () => {
        if (toastId.value) {
          toast.update(toastId.value, {
            title: 'Task Complete',
            message: 'Your request has been processed successfully',
            type: 'success',
            duration: 3000,
          });
          toastId.value = null;
        } else {
          toast.error('No active toast to complete');
        }
      };

      const dismissToast = () => {
        if (toastId.value) {
          toast.dismiss(toastId.value);
          toastId.value = null;
        } else {
          toast.error('No active toast to dismiss');
        }
      };

      return {
        createToast,
        updateToast,
        completeToast,
        dismissToast,
        hasActiveToast: () => toastId.value !== null,
      };
    },
    template: `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Programmatic Toast Control</h3>
        <div class="flex flex-wrap gap-3">
          <button
            @click="createToast"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            :disabled="hasActiveToast()"
          >
            1. Create Toast
          </button>

          <button
            @click="updateToast"
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            :disabled="!hasActiveToast()"
          >
            2. Update Toast
          </button>

          <button
            @click="completeToast"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            :disabled="!hasActiveToast()"
          >
            3. Complete Toast
          </button>

          <button
            @click="dismissToast"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            :disabled="!hasActiveToast()"
          >
            Dismiss Toast
          </button>
        </div>

        <p class="mt-4 text-sm text-gray-600">
          Click the buttons in sequence to see a toast being created, updated, and completed.
        </p>

        <LpToast />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of programmatically controlling toasts throughout their lifecycle.',
      },
    },
  },
};
