import type { Meta, StoryObj } from '@storybook/vue3';
import {
  TableAddButton,
  TableExcelButton,
  TableFilterButton,
  ClearButton,
  SubmitButton,
  IconButton,
  ButtonGroup,
} from '@lpkitvue/button';
import type { ButtonTypes } from '@lpkitvue/button';

// Define the meta information for all button stories
const meta: Meta<ButtonTypes> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Button text content',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
      description: 'HTML button type attribute',
    },
    className: {
      control: { type: 'select' },
      options: [
        'btn-primary',
        'btn-secondary',
        'btn-success',
        'btn-danger',
        'btn-warning',
        'btn-info',
        'btn-dark',
        'btn-light',
        'btn-link',
        'btn-outline-primary',
        'btn-outline-secondary',
        'btn-outline-success',
        'btn-outline-danger',
        'btn-outline-warning',
        'btn-outline-info',
      ],
      description: 'Button style class',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    onClick: { action: 'clicked' },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Button components for lpkitvue framework',
      },
    },
  },
};

export default meta;

// Define the stories for TableAddButton
export const AddButton: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableAddButton },
    setup() {
      return { args };
    },
    template: `
      <TableAddButton
        :text="args.text"
        :type="args.type"
        :disabled="args.disabled"
        :className="args.className"
        :size="args.size"
        :onClick="args.onClick"
      />
    `,
  }),
  args: {
    text: 'Add',
    type: 'button',
    disabled: false,
    className: 'btn-primary',
    size: 'sm',
  },
};

// Define the stories for TableExcelButton
export const ExcelButton: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableExcelButton },
    setup() {
      return { args };
    },
    template: `
      <TableExcelButton
        :text="args.text"
        :type="args.type"
        :disabled="args.disabled"
        :className="args.className"
        :size="args.size"
        :onClick="args.onClick"
      />
    `,
  }),
  args: {
    text: 'Export to Excel',
    type: 'button',
    disabled: false,
    className: 'btn-success',
    size: 'sm',
  },
};

// Define the stories for TableFilterButton
export const FilterButton: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableFilterButton },
    setup() {
      return { args };
    },
    template: `
      <TableFilterButton
        :text="args.text"
        :type="args.type"
        :disabled="args.disabled"
        :className="args.className"
        :size="args.size"
        :onClick="args.onClick"
      />
    `,
  }),
  args: {
    text: 'Filter',
    type: 'button',
    disabled: false,
    className: 'btn-light',
    size: 'sm',
  },
};

// Define the stories for ClearButton
export const ClearFormButton: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { ClearButton },
    setup() {
      return { args };
    },
    template: `
      <ClearButton
        :text="args.text"
        :type="args.type"
        :disabled="args.disabled"
        :onClick="args.onClick"
      />
    `,
  }),
  args: {
    text: 'Clear',
    type: 'button',
    disabled: false,
  },
};

// Define the stories for SubmitButton with loading state
export const SubmitFormButton: StoryObj<ButtonTypes & { loading?: boolean }> = {
  render: (args) => ({
    components: { SubmitButton },
    setup() {
      return { args };
    },
    template: `
      <SubmitButton
        :text="args.text"
        :type="args.type"
        :disabled="args.disabled"
        :loading="args.loading"
      />
    `,
  }),
  args: {
    text: 'Submit',
    type: 'submit',
    disabled: false,
    loading: false,
  },
};

// Define stories for SubmitButton loading states
export const SubmitButtonStates: StoryObj<ButtonTypes & { loading?: boolean }> = {
  render: (args) => ({
    components: { SubmitButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex space-x-4">
        <SubmitButton text="Normal" type="submit" />
        <SubmitButton text="Loading" type="submit" :loading="true" />
        <SubmitButton text="Disabled" type="submit" :disabled="true" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Submit buttons can be in normal, loading, or disabled states',
      },
    },
  },
};

// Define the stories for IconButton
export const CustomIconButton: StoryObj<{
  text: string;
  icon: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit';
}> = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: `
      <IconButton
        :text="args.text"
        :icon="args.icon"
        :iconPosition="args.iconPosition"
        :className="args.className"
        :size="args.size"
        :disabled="args.disabled"
        :type="args.type"
        :onClick="() => console.log('Icon button clicked')"
      />
    `,
  }),
  args: {
    text: 'Icon Button',
    icon: 'check-circle',
    iconPosition: 'left',
    className: 'btn-primary',
    size: 'md',
    disabled: false,
    type: 'button',
  },
};

// Button Icon Position Variants
export const IconPositions: StoryObj = {
  render: () => ({
    components: { IconButton },
    template: `
      <div class="flex space-x-4">
        <IconButton text="Left Icon" icon="check-circle" iconPosition="left" className="btn-primary" />
        <IconButton text="Right Icon" icon="check-circle" iconPosition="right" className="btn-primary" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icon can be positioned either to the left or right of the button text',
      },
    },
  },
};

// ButtonGroup Demo
export const GroupedButtons: StoryObj = {
  render: () => ({
    components: { ButtonGroup, IconButton, TableAddButton, TableFilterButton },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-2">Horizontal Button Group</h3>
          <ButtonGroup>
            <TableAddButton text="Add" className="btn-primary" size="md" />
            <TableFilterButton text="Filter" className="btn-light" size="md" />
            <IconButton text="Save" icon="save" className="btn-success" size="md" />
          </ButtonGroup>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-2">Vertical Button Group</h3>
          <ButtonGroup vertical>
            <TableAddButton text="Add" className="btn-primary" size="md" />
            <TableFilterButton text="Filter" className="btn-light" size="md" />
            <IconButton text="Save" icon="save" className="btn-success" size="md" />
          </ButtonGroup>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-2">Button Group with Custom Spacing</h3>
          <ButtonGroup spacing="lg">
            <TableAddButton text="Add" className="btn-primary" size="md" />
            <TableFilterButton text="Filter" className="btn-light" size="md" />
            <IconButton text="Save" icon="save" className="btn-success" size="md" />
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'ButtonGroup can arrange buttons horizontally or vertically with customizable spacing',
      },
    },
  },
};

// Outline Button Styles
export const OutlineButtons: StoryObj = {
  render: () => ({
    components: { IconButton },
    template: `
      <div class="flex flex-col space-y-4">
        <div class="flex space-x-2">
          <IconButton text="Primary" icon="check-circle" className="btn-outline-primary" size="md" />
          <IconButton text="Secondary" icon="info" className="btn-outline-secondary" size="md" />
          <IconButton text="Success" icon="check" className="btn-outline-success" size="md" />
        </div>
        <div class="flex space-x-2">
          <IconButton text="Danger" icon="alert-circle" className="btn-outline-danger" size="md" />
          <IconButton text="Warning" icon="alert-triangle" className="btn-outline-warning" size="md" />
          <IconButton text="Info" icon="info" className="btn-outline-info" size="md" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Outline button styles provide a lighter visual weight alternative to filled buttons',
      },
    },
  },
};

// Button Styling Variants
export const ButtonStyling: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableAddButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col space-y-4">
        <div class="flex space-x-2">
          <TableAddButton text="Primary" className="btn-primary" size="md" />
          <TableAddButton text="Secondary" className="btn-secondary" size="md" />
          <TableAddButton text="Success" className="btn-success" size="md" />
          <TableAddButton text="Danger" className="btn-danger" size="md" />
        </div>
        <div class="flex space-x-2">
          <TableAddButton text="Warning" className="btn-warning" size="md" />
          <TableAddButton text="Info" className="btn-info" size="md" />
          <TableAddButton text="Dark" className="btn-dark" size="md" />
          <TableAddButton text="Light" className="btn-light" size="md" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button components support various styling through className prop',
      },
    },
  },
};

// Button Size Variants
export const ButtonSizes: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableAddButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center space-x-2">
        <TableAddButton text="Small" className="btn-primary" size="sm" />
        <TableAddButton text="Medium" className="btn-primary" size="md" />
        <TableAddButton text="Large" className="btn-primary" size="lg" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button components support three sizes: sm, md, and lg',
      },
    },
  },
};

// Button State Variants
export const ButtonStates: StoryObj<ButtonTypes> = {
  render: (args) => ({
    components: { TableAddButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex space-x-2">
        <TableAddButton text="Enabled" className="btn-primary" />
        <TableAddButton text="Disabled" className="btn-primary" :disabled="true" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be enabled or disabled using the disabled prop',
      },
    },
  },
};
