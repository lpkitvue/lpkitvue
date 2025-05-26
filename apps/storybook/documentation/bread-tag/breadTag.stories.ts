import type { Meta, StoryObj } from '@storybook/vue3';
import { BreadTag } from '@lpkitvue/bread-tag';
import type { BreadTagOptions, BreadTagTypes } from '@lpkitvue/bread-tag';
import { ref } from 'vue';

// Define meta information for all breadcrumb stories
const meta: Meta<BreadTagOptions> = {
  title: 'Components/BreadTag',
  component: BreadTag,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Page title (will update the document title if autoTitle is true)',
    },
    description: {
      control: 'text',
      description: 'Optional description for SEO purposes',
    },
    breadTagList: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
    separator: {
      control: { type: 'select' },
      options: ['chevron', 'slash', 'dot', 'dash', 'arrow'],
      description: 'Separator between breadcrumb items',
    },
    autoTitle: {
      control: 'boolean',
      description: 'Whether to automatically update the document title',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of items to display (0 = no limit)',
    },
    structured: {
      control: 'boolean',
      description: 'Whether to include structured data for SEO',
    },
    activeClass: {
      control: 'text',
      description: 'CSS class for the active breadcrumb item',
    },
    inactiveClass: {
      control: 'text',
      description: 'CSS class for inactive breadcrumb items',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumb navigation component for lpkitvue framework',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div class="p-4 max-w-3xl mx-auto"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj<BreadTagOptions>;

// Basic breadcrumb story
export const Basic: Story = {
  args: {
    title: 'Products',
    breadTagList: [
      { title: 'Home', slug: '/' },
      { title: 'Products', slug: '/products' },
    ],
    separator: 'chevron',
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic breadcrumb navigation with default settings',
      },
    },
  },
};

// Multiple levels
export const MultipleLevels: Story = {
  args: {
    title: 'Product Details',
    breadTagList: [
      { title: 'Home', slug: '/' },
      { title: 'Products', slug: '/products' },
      { title: 'Electronics', slug: '/products/electronics' },
      { title: 'Laptops', slug: '/products/electronics/laptops' },
      { title: 'Product Details', slug: '/products/electronics/laptops/macbook-pro' },
    ],
    separator: 'chevron',
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with multiple levels of navigation',
      },
    },
  },
};

// Different separators
export const Separators: Story = {
  render: () => ({
    components: { BreadTag },
    setup() {
      const breadcrumbs: BreadTagTypes = [
        { title: 'Home', slug: '/' },
        { title: 'Products', slug: '/products' },
        { title: 'Laptops', slug: '/products/laptops' },
      ];

      return {
        breadcrumbs,
      };
    },
    template: `
      <div class="space-y-4">
        <div class="p-2 border-b">
          <p class="mb-1 font-semibold">Chevron Separator</p>
          <BreadTag
            title="Laptops"
            :breadTagList="breadcrumbs"
            separator="chevron"
            :autoTitle="false"
          />
        </div>

        <div class="p-2 border-b">
          <p class="mb-1 font-semibold">Slash Separator</p>
          <BreadTag
            title="Laptops"
            :breadTagList="breadcrumbs"
            separator="slash"
            :autoTitle="false"
          />
        </div>

        <div class="p-2 border-b">
          <p class="mb-1 font-semibold">Dot Separator</p>
          <BreadTag
            title="Laptops"
            :breadTagList="breadcrumbs"
            separator="dot"
            :autoTitle="false"
          />
        </div>

        <div class="p-2 border-b">
          <p class="mb-1 font-semibold">Dash Separator</p>
          <BreadTag
            title="Laptops"
            :breadTagList="breadcrumbs"
            separator="dash"
            :autoTitle="false"
          />
        </div>

        <div class="p-2 border-b">
          <p class="mb-1 font-semibold">Arrow Separator</p>
          <BreadTag
            title="Laptops"
            :breadTagList="breadcrumbs"
            separator="arrow"
            :autoTitle="false"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with different separator styles',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  args: {
    title: 'User Settings',
    breadTagList: [
      {
        title: 'Home',
        slug: '/',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
      },
      {
        title: 'Users',
        slug: '/users',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      },
      {
        title: 'Settings',
        slug: '/users/settings',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
      },
    ],
    separator: 'chevron',
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with icons for each item',
      },
    },
  },
};

// Truncated breadcrumbs
export const Truncated: Story = {
  args: {
    title: 'Deep Nested Page',
    breadTagList: [
      { title: 'Home', slug: '/' },
      { title: 'Products', slug: '/products' },
      { title: 'Electronics', slug: '/products/electronics' },
      { title: 'Computers', slug: '/products/electronics/computers' },
      { title: 'Laptops', slug: '/products/electronics/computers/laptops' },
      { title: 'Gaming', slug: '/products/electronics/computers/laptops/gaming' },
      { title: 'ASUS', slug: '/products/electronics/computers/laptops/gaming/asus' },
      { title: 'ROG Series', slug: '/products/electronics/computers/laptops/gaming/asus/rog' },
    ],
    separator: 'chevron',
    maxItems: 4,
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs that truncate when there are too many items',
      },
    },
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled Breadcrumbs',
    breadTagList: [
      { title: 'Home', slug: '/', classA: 'font-bold' },
      { title: 'Categories', slug: '/categories', classA: 'font-bold' },
      { title: 'Products', slug: '/categories/products', classA: 'font-bold' },
    ],
    separator: 'chevron',
    activeClass: 'text-green-600 font-bold',
    inactiveClass: 'text-blue-500 hover:text-blue-700',
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with custom styling for active and inactive items',
      },
    },
  },
};

// Dynamic breadcrumbs
export const DynamicBreadcrumbs: Story = {
  render: () => ({
    components: { BreadTag },
    setup() {
      const currentSection = ref('dashboard');
      const sections = ['dashboard', 'profile', 'settings', 'notifications'];

      const getBreadcrumbs = (section: string): BreadTagTypes => {
        return [
          { title: 'Home', slug: '/' },
          { title: 'User', slug: '/user' },
          { title: section.charAt(0).toUpperCase() + section.slice(1), slug: `/user/${section}` },
        ];
      };

      return {
        currentSection,
        sections,
        getBreadcrumbs,
      };
    },
    template: `
      <div class="space-y-4">
        <div class="flex space-x-4 mb-4">
          <button
            v-for="section in sections"
            :key="section"
            @click="currentSection = section"
            class="px-3 py-1 rounded"
            :class="currentSection === section ? 'bg-blue-500 text-white' : 'bg-gray-200'"
          >
            {{ section.charAt(0).toUpperCase() + section.slice(1) }}
          </button>
        </div>

        <BreadTag
          :title="currentSection.charAt(0).toUpperCase() + currentSection.slice(1)"
          :breadTagList="getBreadcrumbs(currentSection)"
          separator="chevron"
          :autoTitle="false"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs that change dynamically based on the current section',
      },
    },
  },
};

// Structured data
export const StructuredData: Story = {
  args: {
    title: 'SEO-Friendly Breadcrumbs',
    description: 'Breadcrumbs with structured data for better SEO',

    breadTagList: [
      { title: 'Home', slug: 'https://example.com/' },
      { title: 'Blog', slug: 'https://example.com/blog' },
      { title: 'Technology', slug: 'https://example.com/blog/technology' },
      { title: 'Web Development', slug: 'https://example.com/blog/technology/web-development' },
    ],

    separator: 'slash',
    autoTitle: true,
    structured: false,
    maxItems: 14,
    activeClass: 'jghgjjghj',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumbs with structured data markup for search engines (check the generated HTML to see the JSON-LD)',
      },
    },
  },
};

// Responsive behavior
export const ResponsiveBehavior: Story = {
  args: {
    title: 'Responsive Breadcrumbs',
    breadTagList: [
      { title: 'Home', slug: '/' },
      { title: 'Products', slug: '/products' },
      { title: 'Electronics', slug: '/products/electronics' },
      { title: 'Computers', slug: '/products/electronics/computers' },
      { title: 'Laptops', slug: '/products/electronics/computers/laptops' },
      { title: 'Gaming Laptops', slug: '/products/electronics/computers/laptops/gaming' },
    ],
    separator: 'chevron',
    maxItems: 3,
    autoTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how breadcrumbs respond to different screen sizes. Resize the browser window to see the effect.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
