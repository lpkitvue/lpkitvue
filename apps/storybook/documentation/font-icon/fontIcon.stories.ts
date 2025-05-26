import type { Meta, StoryObj } from '@storybook/vue3';
import { LpIcon } from '@lpkitvue/font-icon';
import type { LpIconTypes } from '@lpkitvue/font-icon';

// Define meta information for all icon stories
const meta: Meta<LpIconTypes> = {
  title: 'Components/FontIcon',
  component: LpIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: 'Icon name from Solar icon set or custom LP icon',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Predefined icon size',
    },
    color: {
      control: { type: 'color' },
      description: 'Icon color',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    width: {
      control: { type: 'text' },
      description: 'Custom width (overrides size)',
    },
    height: {
      control: { type: 'text' },
      description: 'Custom height (overrides size)',
    },
    animate: {
      control: { type: 'select' },
      options: ['none', 'spin', 'pulse', 'bounce'],
      description: 'Animation effect',
    },
    flip: {
      control: { type: 'select' },
      options: ['none', 'horizontal', 'vertical', 'both'],
      description: 'Flip the icon',
    },
    rotate: {
      control: { type: 'number' },
      description: 'Rotate the icon (degrees)',
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon component for LP Kit Vue framework. Uses Iconify under the hood with Solar icons by default.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<LpIconTypes>;

// Basic icon usage
export const Basic: Story = {
  args: {
    icon: 'user',
    size: 'md',
    color: 'currentColor',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage with a Solar icon. The icon name is automatically prefixed with "solar:" and suffixed with "-linear".',
      },
    },
  },
};

// Custom color icon
export const CustomColor: Story = {
  args: {
    icon: 'star',
    size: 'lg',
    color: '#FFD700',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon with custom color. You can use any valid CSS color.',
      },
    },
  },
};

// Sizes showcase
export const Sizes: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="flex items-center space-x-4">
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="xs" />
          <span class="mt-2 text-xs">xs</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="sm" />
          <span class="mt-2 text-xs">sm</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="md" />
          <span class="mt-2 text-xs">md</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="lg" />
          <span class="mt-2 text-xs">lg</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="xl" />
          <span class="mt-2 text-xs">xl</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="sun" size="2xl" />
          <span class="mt-2 text-xs">2xl</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Available predefined sizes for icons.',
      },
    },
  },
};

// Custom LP icons
export const CustomLpIcons: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="flex items-center space-x-4">
        <div class="flex flex-col items-center">
          <LpIcon icon="lp:plus" size="lg" />
          <span class="mt-2 text-xs">lp:plus</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="lp:close-linear" size="lg" />
          <span class="mt-2 text-xs">lp:close-linear</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="lp:search" size="lg" />
          <span class="mt-2 text-xs">lp:search</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Custom LP icons with "lp:" prefix.',
      },
    },
  },
};

// Animations
export const Animations: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="flex items-center space-x-6">
        <div class="flex flex-col items-center">
          <LpIcon icon="refresh" size="lg" animate="spin" />
          <span class="mt-2 text-xs">spin</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="bell" size="lg" animate="pulse" />
          <span class="mt-2 text-xs">pulse</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-down" size="lg" animate="bounce" />
          <span class="mt-2 text-xs">bounce</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons with animation effects.',
      },
    },
  },
};

// Flipping
export const Flipping: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="flex items-center space-x-4">
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-right" size="lg" />
          <span class="mt-2 text-xs">normal</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-right" size="lg" flip="horizontal" />
          <span class="mt-2 text-xs">horizontal</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-right" size="lg" flip="vertical" />
          <span class="mt-2 text-xs">vertical</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-right" size="lg" flip="both" />
          <span class="mt-2 text-xs">both</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Flipping icons horizontally, vertically, or both.',
      },
    },
  },
};

// Rotation
export const Rotation: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="flex items-center space-x-4">
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-up" size="lg" />
          <span class="mt-2 text-xs">0°</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-up" size="lg" :rotate="90" />
          <span class="mt-2 text-xs">90°</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-up" size="lg" :rotate="180" />
          <span class="mt-2 text-xs">180°</span>
        </div>
        <div class="flex flex-col items-center">
          <LpIcon icon="arrow-up" size="lg" :rotate="270" />
          <span class="mt-2 text-xs">270°</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Rotating icons at different angles.',
      },
    },
  },
};

// Clickable icon
export const Clickable: Story = {
  args: {
    icon: 'bell',
    size: 'lg',
    color: '#4361ee',
    onClick: () => alert('Icon clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon with click handler.',
      },
    },
  },
};

// Icon buttons
export const IconButtons: Story = {
  render: () => ({
    components: { LpIcon },
    methods: {
      handleClick(icon: string) {
        alert(`${icon} clicked!`);
      },
    },
    template: `
      <div class="flex space-x-2">
        <button
          class="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          @click="handleClick('Add')"
        >
          <LpIcon icon="add-circle" size="md" />
        </button>

        <button
          class="p-2 bg-danger text-white rounded-full hover:bg-danger-dark transition-colors"
          @click="handleClick('Delete')"
        >
          <LpIcon icon="trash-bin-trash" size="md" />
        </button>

        <button
          class="p-2 bg-success text-white rounded-full hover:bg-success-dark transition-colors"
          @click="handleClick('Check')"
        >
          <LpIcon icon="check-circle" size="md" />
        </button>

        <button
          class="p-2 bg-warning text-white rounded-full hover:bg-warning-dark transition-colors"
          @click="handleClick('Warning')"
        >
          <LpIcon icon="minus-circle" size="md" />
        </button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons used inside buttons.',
      },
    },
  },
};

// Icon with text
export const IconsWithText: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="space-y-2">
        <div class="flex items-center">
          <LpIcon icon="home" size="md" color="#4361ee" />
          <span class="ml-2">Home</span>
        </div>

        <div class="flex items-center">
          <LpIcon icon="settings" size="md" color="#4361ee" />
          <span class="ml-2">Settings</span>
        </div>

        <div class="flex items-center">
          <LpIcon icon="user" size="md" color="#4361ee" />
          <span class="ml-2">Profile</span>
        </div>

        <div class="flex items-center">
          <span class="mr-2">Logout</span>
          <LpIcon icon="logout" size="md" color="#4361ee" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons combined with text, often used in navigation or menus.',
      },
    },
  },
};

// Icon grid showcase
export const IconGrid: Story = {
  render: () => ({
    components: { LpIcon },
    setup() {
      // Common Solar icons that might be useful in the library
      const icons = [
        'home',
        'user',
        'settings',
        'bell',
        'calendar',
        'search',
        'trash',
        'edit',
        'check',
        'close',
        'plus',
        'minus',
        'star',
        'heart',
        'download',
        'upload',
        'refresh',
        'lock',
        'unlock',
        'eye',
        'eye-closed',
        'mail',
        'phone',
        'location',
        'bookmark',
        'flag',
        'chat',
        'info',
        'warning',
        'danger',
        'menu',
      ];

      return { icons };
    },
    template: `
      <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
        <div
          v-for="icon in icons"
          :key="icon"
          class="flex flex-col items-center justify-center p-2 border rounded hover:bg-gray-50"
        >
          <LpIcon :icon="icon" size="md" />
          <span class="mt-2 text-xs text-center">{{ icon }}</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A grid showcasing common Solar icons available for use.',
      },
    },
  },
};

// Color theme examples
export const ThemedIcons: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-semibold">Primary Colors</h3>
          <div class="flex space-x-4">
            <div class="flex flex-col items-center">
              <LpIcon icon="star" size="lg" color="var(--color-primary)" />
              <span class="mt-1 text-xs">primary</span>
            </div>
            <div class="flex flex-col items-center">
              <LpIcon icon="star" size="lg" color="var(--color-secondary)" />
              <span class="mt-1 text-xs">secondary</span>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-semibold">Status Colors</h3>
          <div class="flex space-x-4">
            <div class="flex flex-col items-center">
              <LpIcon icon="shield-check" size="lg" color="var(--color-success)" />
              <span class="mt-1 text-xs">success</span>
            </div>
            <div class="flex flex-col items-center">
              <LpIcon icon="shield-check" size="lg" color="var(--color-warning)" />
              <span class="mt-1 text-xs">warning</span>
            </div>
            <div class="flex flex-col items-center">
              <LpIcon icon="shield-check" size="lg" color="var(--color-danger)" />
              <span class="mt-1 text-xs">danger</span>
            </div>
            <div class="flex flex-col items-center">
              <LpIcon icon="shield-check" size="lg" color="var(--color-info)" />
              <span class="mt-1 text-xs">info</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons using theme colors from your design system.',
      },
    },
  },
};
