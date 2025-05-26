import type { Meta, StoryObj } from '@storybook/vue3';
import { LpEditor } from '@lpkitvue/editor';
import { ref } from 'vue';

const meta: Meta<any> = {
  title: 'Components/Editor',
  component: LpEditor,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The content to be edited',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the editor is empty',
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the editor is in readonly mode',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Rich text editor component for lpkitvue framework',
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

type Story = StoryObj<any>;

// Basic Editor Story
export const Basic: Story = {
  args: {
    modelValue: '<p>This is a basic editor. Try editing this text!</p>',
    placeholder: 'Start typing...',
    readonly: false,
  },
};

// Readonly Editor Story
export const Readonly: Story = {
  args: {
    modelValue: '<p>This editor is in readonly mode. You cannot edit this text.</p>',
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Editor in readonly mode, preventing content modification',
      },
    },
  },
};

// Empty Editor with Placeholder Story
export const WithPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Type your content here...',
    readonly: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty editor showing a placeholder text',
      },
    },
  },
};

// Editor with Content Binding Story
export const WithBinding: Story = {
  render: (args) => ({
    components: { LpEditor },
    setup() {
      const content = ref(args.modelValue || '<p>Try editing this text and see it update below</p>');
      return { content, args };
    },
    template: `
      <div class="space-y-4">
        <LpEditor v-model="content" :placeholder="args.placeholder" :readonly="args.readonly" />
        <div class="mt-4 p-4 border rounded">
          <h3 class="text-lg font-semibold mb-2">Content Preview:</h3>
          <div v-html="content"></div>
        </div>
        <div class="mt-4 p-4 border rounded bg-gray-50">
          <h3 class="text-lg font-semibold mb-2">HTML Source:</h3>
          <pre class="text-sm">{{ content }}</pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates two-way binding with the editor component',
      },
    },
  },
};

// Pre-Formatted Content Story
export const PreFormattedContent: Story = {
  args: {
    modelValue: `
      <h1 style="text-align: center;">Formatted Content</h1>
      <p><strong>Bold text</strong>, <em>italic text</em>, and <strike>strikethrough text</strike> are supported.</p>
      <p style="text-align: right;">Right-aligned paragraph</p>
      <p style="text-align: center;">Center-aligned paragraph</p>
      <p style="text-align: left;">Left-aligned paragraph</p>
    `,
    readonly: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Editor initialized with pre-formatted content',
      },
    },
  },
};

// Interactive Story with Toolbar Focus
export const InteractiveDemo: Story = {
  render: () => ({
    components: { LpEditor },
    setup() {
      const content = ref('<p>Select some text and use the toolbar to format it.</p>');
      const instructions = [
        'Click the Bold button (B) to make text bold',
        'Click the Italic button (I) to italicize text',
        'Click the Strikethrough button (S) to add strikethrough',
        'Use the alignment buttons to change text alignment',
      ];
      return { content, instructions };
    },
    template: `
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 rounded border border-blue-200">
          <h3 class="text-lg font-semibold mb-2">Instructions:</h3>
          <ul class="list-disc pl-5">
            <li v-for="(instruction, index) in instructions" :key="index">
              {{ instruction }}
            </li>
          </ul>
        </div>

        <LpEditor v-model="content" placeholder="Try formatting your text..." />

        <div class="mt-4 p-4 border rounded">
          <h3 class="text-lg font-semibold mb-2">Output Preview:</h3>
          <div v-html="content"></div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the editor formatting capabilities',
      },
    },
  },
};

// Long-form Content Editing
export const LongFormEditing: Story = {
  args: {
    modelValue: `
      <h1 style="text-align: center;">Article Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. <strong>Suspendisse dictum feugiat nisl ut dapibus</strong>. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
      <h2>Section Heading</h2>
      <p>Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. <em>Ut vel arcu ac tortor adipiscing hendrerit vel sed massa</em>. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam.</p>
      <p style="text-align: center;">This paragraph is centered to draw attention to important information.</p>
      <h3>Subsection</h3>
      <p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    `,
    placeholder: 'Write your article here...',
    readonly: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Editor with long-form content for article writing or documentation',
      },
    },
  },
};

// Form Integration Example
export const FormIntegration: Story = {
  render: () => ({
    components: { LpEditor },
    setup() {
      const formData = ref({
        title: 'My Document',
        content: '<p>This is the document content that will be submitted with the form.</p>',
      });

      const submitForm = () => {
        alert('Form submitted with content: ' + formData.value.content);
      };

      return { formData, submitForm };
    },
    template: `
      <form @submit.prevent="submitForm" class="space-y-4 border rounded p-4">
        <div>
          <label class="block mb-2 font-medium">Document Title</label>
          <input
            v-model="formData.title"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label class="block mb-2 font-medium">Document Content</label>
          <LpEditor
            v-model="formData.content"
            placeholder="Enter document content..."
          />
        </div>

        <div class="pt-4 border-t mt-4">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Form
          </button>
        </div>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to integrate the editor within a form',
      },
    },
  },
};
