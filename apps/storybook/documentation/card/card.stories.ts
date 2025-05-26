import type { Meta, StoryObj } from '@storybook/vue3';
import { Card, ImageCard, FormCard, CollapsableCard, TableCard } from '@lpkitvue/card';
import { TableAddButton, TableExcelButton, TableFilterButton } from '@lpkitvue/button';
import { ref } from 'vue';

// Define the meta information for all card stories
const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Card components for lpkitvue framework',
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

// Basic Card Story
export const BasicCard: StoryObj = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title">
        <p class="p-4">This is a basic card with only a title and some content.</p>
      </Card>
    `,
  }),
  args: {
    title: 'Basic Card',
  },
};

// Card with Footer Story
export const CardWithFooter: StoryObj = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title">
        <p class="p-4">This card has a footer section.</p>
        <template #footer>
          <div class="p-4 bg-gray-100">
            <p>Footer content goes here</p>
          </div>
        </template>
      </Card>
    `,
  }),
  args: {
    title: 'Card With Footer',
  },
};

// Card with Custom Header Story
export const CardWithCustomHeader: StoryObj = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card>
        <template #header>
          <div class="p-4 bg-blue-100 flex justify-between items-center">
            <h3 class="text-lg font-bold text-blue-700">Custom Header</h3>
            <button class="px-2 py-1 bg-blue-500 text-white rounded">Action</button>
          </div>
        </template>
        <p class="p-4">This card has a custom header with a button.</p>
      </Card>
    `,
  }),
};

// Image Card Story
export const ImageCardStory: StoryObj = {
  render: (args) => ({
    components: { ImageCard },
    setup() {
      return { args };
    },
    template: `
      <ImageCard
        :title="args.title"
        :imageUrl="args.imageUrl"
        :aspectRatio="args.aspectRatio"
        :alt="args.alt"
      >
        <p class="p-2">Image card with content below the image.</p>
      </ImageCard>
    `,
  }),
  args: {
    title: 'Image Card',
    imageUrl: 'https://picsum.photos/800/400',
    aspectRatio: 0,
    alt: 'Placeholder image',
  },
};

// Form Card Story
export const FormCardStory: StoryObj = {
  render: (args) => ({
    components: { FormCard },
    setup() {
      const loading = ref(false);
      const fields = [
        {
          name: 'name',
          label: 'Full Name',
          type: 'input',
          required: true,
          placeholder: 'Enter your full name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'input',
          itemType: 'email',
          required: true,
          placeholder: 'your@email.com',
          hint: "We'll never share your email with anyone else.",
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          rows: 4,
          placeholder: 'Enter your message',
          required: true,
        },
        {
          name: 'subscribe',
          label: 'Subscribe to newsletter',
          type: 'switch',
          defaultValue: true,
        },
      ];

      const handleSubmit = (values: Record<string, any>) => {
        loading.value = true;
        console.log('Form submitted:', values);

        // Simulate API call
        setTimeout(() => {
          loading.value = false;
        }, 2000);
      };

      return {
        args,
        loading,
        fields,
        handleSubmit,
      };
    },
    template: `
      <FormCard
        :title="args.title"
        :fields="fields"
        :loading="loading"
        :submitText="args.submitText"
        :clearText="args.clearText"
        :onSubmit="handleSubmit"
      />
    `,
  }),
  args: {
    title: 'Contact Form',
    submitText: 'Send',
    clearText: 'Reset',
  },
};

// Form Card with Custom Footer
export const FormCardCustomFooter: StoryObj = {
  render: (args) => ({
    components: { FormCard },
    setup() {
      const fields = [
        {
          name: 'name',
          label: 'Full Name',
          type: 'input',
          required: true,
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'input',
          itemType: 'email',
          required: true,
        },
      ];

      const handleSubmit = (values: Record<string, any>) => {
        console.log('Form submitted:', values);
      };

      const handleCancel = () => {
        console.log('Form cancelled');
      };

      const formRef = ref(null);

      const handleCustomSubmit = () => {
        if (formRef.value) {
          formRef.value.submit();
        }
      };

      return {
        args,
        fields,
        handleSubmit,
        handleCancel,
        formRef,
        handleCustomSubmit,
      };
    },
    template: `
      <FormCard
        ref="formRef"
        :title="args.title"
        :fields="fields"
        :onSubmit="handleSubmit"
        customFooter
      >
        <template #footer>
          <div class="flex justify-between items-center">
            <button
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded"
              @click="handleCancel"
            >
              Cancel
            </button>
            <div class="flex space-x-2">
              <button
                class="px-4 py-2 bg-gray-200 text-gray-800 rounded"
                @click="formRef?.reset()"
              >
                Reset
              </button>
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded"
                @click="handleCustomSubmit"
              >
                Custom Submit
              </button>
            </div>
          </div>
        </template>
      </FormCard>
    `,
  }),
  args: {
    title: 'Form with Custom Footer',
  },
};

// Form Card with Complex Fields
export const FormCardComplex: StoryObj = {
  render: (args) => ({
    components: { FormCard },
    setup() {
      const fields = [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'input',
          required: true,
          size: 6,
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'input',
          required: true,
          size: 6,
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'input',
          itemType: 'email',
          required: true,
          size: 12,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'masked',
          mask: '(###) ###-####',
          size: 6,
        },
        {
          name: 'birthdate',
          label: 'Date of Birth',
          type: 'datepicker',
          size: 6,
        },
        {
          name: 'department',
          label: 'Department',
          type: 'select',
          options: [
            { label: 'Marketing', value: 'marketing' },
            { label: 'Sales', value: 'sales' },
            { label: 'Engineering', value: 'engineering' },
            { label: 'Human Resources', value: 'hr' },
            { label: 'Customer Support', value: 'support' },
          ],
          size: 6,
        },
        {
          name: 'role',
          label: 'Role',
          type: 'radio',
          options: [
            { label: 'Employee', value: 'employee' },
            { label: 'Manager', value: 'manager' },
            { label: 'Director', value: 'director' },
          ],
          size: 6,
        },
        {
          name: 'skills',
          label: 'Skills',
          type: 'select',
          options: [
            { label: 'JavaScript', value: 'js' },
            { label: 'TypeScript', value: 'ts' },
            { label: 'Vue', value: 'vue' },
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
          ],
          multiple: true,
          size: 12,
        },
        {
          name: 'bio',
          label: 'Biography',
          type: 'textarea',
          rows: 4,
          size: 12,
        },
        {
          name: 'notifications',
          label: 'Receive Notifications',
          type: 'switch',
          defaultValue: true,
          size: 12,
        },
      ];

      const handleSubmit = (values: Record<string, any>) => {
        console.log('Form submitted:', values);
      };

      return {
        args,
        fields,
        handleSubmit,
      };
    },
    template: `
      <FormCard
        :title="args.title"
        :fields="fields"
        :onSubmit="handleSubmit"
        :submitText="args.submitText"
      />
    `,
  }),
  args: {
    title: 'Employee Registration',
    submitText: 'Register',
  },
};

// Collapsable Card Story
export const CollapsableCardStory: StoryObj = {
  render: (args) => ({
    components: { CollapsableCard },
    setup() {
      return { args };
    },
    template: `
      <CollapsableCard
        :title="args.title"
        :defaultCollapsed="args.defaultCollapsed"
      >
        <div class="p-4">
          <p>This content can be collapsed or expanded by clicking on the header.</p>
          <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.</p>
        </div>
      </CollapsableCard>
    `,
  }),
  args: {
    title: 'Collapsable Section',
    defaultCollapsed: false,
  },
};

// Table Card Story
export const TableCardStory: StoryObj = {
  render: (args) => ({
    components: {
      TableCard,
      TableAddButton,
      TableExcelButton,
      TableFilterButton,
    },
    setup() {
      const handleAdd = () => console.log('Add clicked');
      const handleExport = () => console.log('Export clicked');
      const handleFilter = () => console.log('Filter clicked');

      const buttons = [
        { text: 'Add New', type: 'add', onClick: handleAdd, className: 'btn-primary' },
        { text: 'Export', type: 'export-excel', onClick: handleExport, className: 'btn-success' },
        { text: 'Filter', type: 'filter', onClick: handleFilter, className: 'btn-light' },
      ];

      return {
        args,
        buttons,
      };
    },
    template: `
      <TableCard
        :title="args.title"
        :buttons="buttons"
      >
        <div class="p-4">
          <table class="min-w-full border-collapse">
            <thead>
              <tr>
                <th class="border p-2 text-left">ID</th>
                <th class="border p-2 text-left">Name</th>
                <th class="border p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">001</td>
                <td class="border p-2">John Doe</td>
                <td class="border p-2">Active</td>
              </tr>
              <tr>
                <td class="border p-2">002</td>
                <td class="border p-2">Jane Smith</td>
                <td class="border p-2">Inactive</td>
              </tr>
              <tr>
                <td class="border p-2">003</td>
                <td class="border p-2">Robert Johnson</td>
                <td class="border p-2">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TableCard>
    `,
  }),
  args: {
    title: 'Users Table',
  },
};

// Card Variants in Grid
export const CardVariantsGrid: StoryObj = {
  render: () => ({
    components: {
      Card,
      ImageCard,
      CollapsableCard,
      FormCard,
    },
    setup() {
      const formFields = [
        {
          name: 'email',
          label: 'Email',
          type: 'input',
          itemType: 'email',
          required: true,
          placeholder: 'Your email address',
        },
      ];

      const handleSubmit = (values: Record<string, any>) => {
        console.log('Submitted:', values);
      };

      return {
        formFields,
        handleSubmit,
      };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Simple Card">
          <p class="p-4">A basic card with title and content.</p>
        </Card>

        <ImageCard
          title="Image Card"
          imageUrl="https://via.placeholder.com/400x225"
          aspectRatio="16/9"
          alt="Placeholder image"
        >
          <p class="p-2">Card with an image.</p>
        </ImageCard>

        <CollapsableCard title="Collapsable Card">
          <p class="p-4">This content can be collapsed.</p>
        </CollapsableCard>

        <FormCard
          title="Quick Subscribe"
          :fields="formFields"
          :onSubmit="handleSubmit"
          submitText="Subscribe"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Various card components displayed in a responsive grid layout',
      },
    },
  },
};
