import type { Meta, StoryObj } from '@storybook/vue3';
import { Overlay, useOverlay } from '@lpkitvue/overlay';
import { ref, onUnmounted } from 'vue';

const meta: Meta = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the overlay',
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Placement of the overlay relative to the trigger element',
    },
    offset: {
      control: { type: 'number' },
      description: 'Space between the overlay and the trigger element (in pixels)',
    },
    delayShow: {
      control: { type: 'number' },
      description: 'Delay before showing the overlay (in ms)',
    },
    delayHide: {
      control: { type: 'number' },
      description: 'Delay before hiding the overlay (in ms)',
    },
    arrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger element',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the overlay when true',
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus'],
      description: 'Event that triggers the overlay',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether overlay content can be interacted with',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width of overlay (in pixels)',
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'dark', 'light'],
      description: 'Overlay appearance theme',
    },
    teleportTo: {
      control: 'text',
      description: 'Custom teleport target CSS selector',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'Z-index of the overlay',
    },
    onShow: { action: 'show' },
    onHide: { action: 'hide' },
    'onUpdate:visible': { action: 'update:visible' },
    onPositionChange: { action: 'position-change' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Enhanced overlay/tooltip component with accessibility, RTL support, and dark mode',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div class="p-8 flex items-center justify-center min-h-[400px]"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj;

// Basic Overlay
export const Basic: Story = {
  args: {
    text: 'This is an enhanced overlay tooltip',
    placement: 'top',
    offset: 8,
    arrow: true,
    trigger: 'hover',
    theme: 'default',
  },
  render: (args) => ({
    components: { Overlay },
    setup() {
      return { args };
    },
    template: `
      <Overlay v-bind="args">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Hover me
        </button>
      </Overlay>
    `,
  }),
};

// Accessibility Features
export const AccessibilityFeatures: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Accessibility Features Demo</h3>

        <div class="flex gap-4">
          <Overlay
            text="Keyboard accessible - press Enter or Space to toggle"
            trigger="click"
            placement="top"
          >
            <button class="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              Click or Keyboard
            </button>
          </Overlay>

          <Overlay
            text="Focus me with Tab key"
            trigger="focus"
            placement="top"
          >
            <input
              class="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tab to focus"
            />
          </Overlay>

          <Overlay
            text="Press Escape to close this tooltip"
            trigger="click"
            placement="top"
          >
            <button class="px-4 py-2 bg-green-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400">
              Escape to Close
            </button>
          </Overlay>
        </div>

        <div class="mt-4 p-4 bg-gray-100 rounded">
          <h4 class="font-medium mb-2">Accessibility Features:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ Full keyboard navigation support</li>
            <li>✓ ARIA attributes for screen readers</li>
            <li>✓ Focus management and visible focus indicators</li>
            <li>✓ Escape key to close</li>
            <li>✓ High contrast mode support</li>
            <li>✓ Reduced motion support</li>
          </ul>
        </div>
      </div>
    `,
  }),
};

// RTL Support Demo
export const RTLSupport: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const isRTL = ref(false);

      const toggleRTL = () => {
        isRTL.value = !isRTL.value;
        document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr';
      };

      onUnmounted(() => {
        document.documentElement.dir = 'ltr';
      });

      return { isRTL, toggleRTL };
    },
    template: `
      <div>
        <div class="mb-4">
          <button
            @click="toggleRTL"
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Toggle RTL (Currently: {{ isRTL ? 'RTL' : 'LTR' }})
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <Overlay text="מיקום שמאל" placement="left">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">
              Left שמאל
            </button>
          </Overlay>

          <Overlay text="מיקום ימין" placement="right">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">
              Right ימין
            </button>
          </Overlay>

          <Overlay text="מיקום למעלה" placement="top">
            <button class="px-4 py-2 bg-green-500 text-white rounded">
              Top למעלה
            </button>
          </Overlay>

          <Overlay text="מיקום למטה" placement="bottom">
            <button class="px-4 py-2 bg-green-500 text-white rounded">
              Bottom למטה
            </button>
          </Overlay>
        </div>
      </div>
    `,
  }),
};

// Dark Mode Support
export const DarkModeSupport: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const isDark = ref(false);

      const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        if (isDark.value) {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      };

      onUnmounted(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      });

      return { isDark, toggleDarkMode };
    },
    template: `
      <div :class="{ 'dark bg-gray-900 p-6 rounded-lg': isDark }">
        <div class="mb-4">
          <button
            @click="toggleDarkMode"
            class="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Toggle Dark Mode (Currently: {{ isDark ? 'Dark' : 'Light' }})
          </button>
        </div>

        <div class="flex gap-4 flex-wrap">
          <Overlay text="Default theme adapts to dark mode" theme="default">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">
              Default Theme
            </button>
          </Overlay>

          <Overlay text="Dark theme always dark" theme="dark">
            <button class="px-4 py-2 bg-gray-800 text-white rounded">
              Dark Theme
            </button>
          </Overlay>

          <Overlay text="Light theme adapts to dark mode" theme="light">
            <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded">
              Light Theme
            </button>
          </Overlay>
        </div>
      </div>
    `,
  }),
};

// Programmatic Control
export const ProgrammaticControl: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const { show, hideAll } = useOverlay();
      const buttonRef = ref<HTMLElement>();
      let hideFunction: (() => void) | null = null;

      const showProgrammaticTooltip = async () => {
        if (buttonRef.value) {
          hideFunction = await show(buttonRef.value, 'This tooltip was created programmatically!', {
            placement: 'top',
            theme: 'dark',
          });
        }
      };

      const hideProgrammaticTooltip = () => {
        if (hideFunction) {
          hideFunction();
          hideFunction = null;
        }
      };

      return {
        buttonRef,
        showProgrammaticTooltip,
        hideProgrammaticTooltip,
        hideAll,
      };
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Programmatic Control</h3>

        <div class="flex gap-4">
          <button
            ref="buttonRef"
            @click="showProgrammaticTooltip"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show Programmatic Tooltip
          </button>

          <button
            @click="hideProgrammaticTooltip"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Hide Specific Tooltip
          </button>

          <button
            @click="hideAll"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Hide All Tooltips
          </button>
        </div>

        <div class="mt-4 p-4 bg-gray-100 rounded">
          <h4 class="font-medium mb-2">useOverlay() Composable:</h4>
          <pre class="text-xs bg-gray-800 text-white p-2 rounded overflow-x-auto">
const { show, hideAll } = useOverlay();

// Show tooltip
const hide = await show(element, 'Content', options);

// Hide specific tooltip
hide();

// Hide all tooltips
hideAll();</pre>
        </div>
      </div>
    `,
  }),
};

// Touch Device Support
export const TouchDeviceSupport: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">Touch Device Support</h3>

        <div class="flex gap-4 flex-wrap">
          <Overlay
            text="On touch devices, tap to show this tooltip"
            trigger="hover"
            placement="top"
          >
            <button class="px-4 py-2 bg-blue-500 text-white rounded">
              Touch/Hover Me
            </button>
          </Overlay>

          <Overlay
            text="Interactive tooltip - stays open on touch devices"
            trigger="hover"
            interactive
            placement="top"
          >
            <button class="px-4 py-2 bg-green-500 text-white rounded">
              Interactive Touch
            </button>
          </Overlay>

          <Overlay
            text="Click trigger works the same on all devices"
            trigger="click"
            placement="top"
          >
            <button class="px-4 py-2 bg-purple-500 text-white rounded">
              Click/Tap Me
            </button>
          </Overlay>
        </div>

        <div class="mt-4 p-4 bg-blue-50 rounded">
          <p class="text-sm">
            <strong>Note:</strong> The overlay automatically detects touch devices and adjusts behavior accordingly.
            Hover triggers become tap triggers on touch devices.
          </p>
        </div>
      </div>
    `,
  }),
};

// Advanced Positioning
export const AdvancedPositioning: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const showPositionChange = ref(false);
      const lastPosition = ref('');

      const handlePositionChange = (position: string) => {
        lastPosition.value = position;
        showPositionChange.value = true;
        setTimeout(() => {
          showPositionChange.value = false;
        }, 2000);
      };

      return { showPositionChange, lastPosition, handlePositionChange };
    },
    template: `
      <div class="relative h-[600px] overflow-auto border rounded p-8">
        <h3 class="text-lg font-semibold mb-4">Smart Positioning Demo</h3>

        <div v-if="showPositionChange" class="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 rounded p-2 text-sm">
          Position changed to: {{ lastPosition }}
        </div>

        <div class="grid grid-cols-3 gap-4" style="padding: 100px 0;">
          <!-- Top row -->
          <div></div>
          <Overlay
            text="I flip to bottom when there's no space above"
            placement="top"
            @position-change="handlePositionChange"
          >
            <button class="px-4 py-2 bg-blue-500 text-white rounded w-full">
              Top (may flip)
            </button>
          </Overlay>
          <div></div>

          <!-- Middle row -->
          <Overlay
            text="I flip to right when there's no space on the left"
            placement="left"
            @position-change="handlePositionChange"
          >
            <button class="px-4 py-2 bg-green-500 text-white rounded w-full">
              Left (may flip)
            </button>
          </Overlay>

          <div class="flex items-center justify-center">
            <span class="text-gray-500">Scroll to see flipping behavior</span>
          </div>

          <Overlay
            text="I flip to left when there's no space on the right"
            placement="right"
            @position-change="handlePositionChange"
          >
            <button class="px-4 py-2 bg-green-500 text-white rounded w-full">
              Right (may flip)
            </button>
          </Overlay>

          <!-- Bottom row -->
          <div></div>
          <Overlay
            text="I flip to top when there's no space below"
            placement="bottom"
            @position-change="handlePositionChange"
          >
            <button class="px-4 py-2 bg-blue-500 text-white rounded w-full">
              Bottom (may flip)
            </button>
          </Overlay>
          <div></div>
        </div>

        <div class="mt-8 p-4 bg-gray-100 rounded">
          <p class="text-sm">
            Scroll this container to see how overlays automatically flip to stay within the viewport.
            The overlay will emit a 'position-change' event when it flips.
          </p>
        </div>
      </div>
    `,
  }),
};

// Performance Demo
export const PerformanceDemo: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const count = 50;
      const items = Array.from({ length: count }, (_, i) => ({
        id: i,
        text: `Tooltip ${i + 1}`,
      }));

      return { items };
    },
    template: `
      <div>
        <h3 class="text-lg font-semibold mb-4">Performance Demo ({{ items.length }} overlays)</h3>

        <div class="grid grid-cols-10 gap-2">
          <Overlay
            v-for="item in items"
            :key="item.id"
            :text="item.text"
            placement="top"
            :delay-show="50"
            :delay-hide="50"
          >
            <button class="p-2 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
              {{ item.id + 1 }}
            </button>
          </Overlay>
        </div>

        <div class="mt-4 p-4 bg-green-50 rounded">
          <p class="text-sm">
            <strong>Performance optimizations:</strong>
          <ul class="list-disc list-inside mt-2 text-sm">
            <li>Event listeners are attached efficiently</li>
            <li>Position calculations are optimized</li>
            <li>Transitions use CSS transforms for hardware acceleration</li>
            <li>Unused overlays are not rendered in the DOM</li>
          </ul>
          </p>
        </div>
      </div>
    `,
  }),
};

// All Features Combined
export const AllFeaturesCombined: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold mb-4">All Features Combined</h3>

        <Overlay placement="right" trigger="click" max-width="400" theme="default">
          <button class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            Click for Feature-Rich Overlay
          </button>

          <template #content>
            <div class="space-y-3">
              <h4 class="font-bold text-lg flex items-center gap-2">
                <span class="text-2xl">🚀</span>
                Enhanced Overlay Features
              </h4>

              <div class="space-y-2 text-sm">
                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>Accessibility:</strong> Full keyboard navigation, ARIA attributes, focus management
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>RTL Support:</strong> Automatic layout adjustments for right-to-left languages
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>Dark Mode:</strong> Adapts to system preferences automatically
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>Smart Positioning:</strong> Flips to stay within viewport
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>Touch Support:</strong> Works seamlessly on mobile devices
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <div>
                    <strong>Performance:</strong> Optimized rendering and animations
                  </div>
                </div>
              </div>

              <div class="pt-3 mt-3 border-t">
                <p class="text-xs text-gray-600">
                  Press <kbd class="px-2 py-1 bg-gray-200 rounded text-xs">Escape</kbd> to close
                </p>
              </div>
            </div>
          </template>
        </Overlay>
      </div>
    `,
  }),
};
