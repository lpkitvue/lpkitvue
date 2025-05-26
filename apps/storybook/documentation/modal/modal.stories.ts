import type { Meta, StoryObj } from '@storybook/vue3';
import { Modal, FilterModal } from '@lpkitvue/modal';
import type { ModalProps, FilterModalProps } from '@lpkitvue/modal';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Define the meta information for modal stories
const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the modal is visible',
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title displayed in the header',
    },
    width: {
      control: { type: 'text' },
      description: 'Modal width (number for percentage, string for explicit value)',
    },
    height: {
      control: { type: 'text' },
      description: 'Modal height (number for percentage, string for explicit value)',
    },
    closeOnOutsideClick: {
      control: { type: 'boolean' },
      description: 'Whether clicking outside the modal closes it',
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      description: 'Whether pressing Escape key closes the modal',
    },
    customClass: {
      control: { type: 'text' },
      description: 'Additional CSS class for styling',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Modal components for lpkitvue framework with internationalization support',
      },
    },
  },
};

export default meta;

// Basic Modal Story
export const BasicModal: StoryObj<ModalProps> = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const isOpen = ref(args.open);

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      const handleSave = () => {
        console.log('Modal saved');
        closeModal();
      };

      return { args, isOpen, openModal, closeModal, handleSave };
    },
    template: `
      <div>
        <button @click="openModal" class="btn btn-primary">Open Modal</button>

        <Modal
          :open="isOpen"
          :title="args.title"
          :width="args.width"
          :height="args.height"
          :closeOnOutsideClick="args.closeOnOutsideClick"
          :closeOnEscape="args.closeOnEscape"
          :customClass="args.customClass"
          @close="closeModal"
          @save="handleSave"
        >
          <p>This is the modal content. You can put any content here.</p>
          <p>Click the buttons below or outside the modal to close it.</p>
        </Modal>
      </div>
    `,
  }),
  args: {
    open: false,
    title: 'Basic Modal',
    width: 500,
    height: undefined,
    closeOnOutsideClick: true,
    closeOnEscape: true,
    customClass: '',
  },
};

// Internationalized Modal Story
export const InternationalizedModal: StoryObj = {
  render: () => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false);
      const { t, locale } = useI18n();

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      const handleSave = () => {
        console.log('Modal saved');
        closeModal();
      };

      return { isOpen, openModal, closeModal, handleSave, t, locale };
    },
    template: `
      <div>
        <div class="mb-4">
          <p>Current locale: <strong>{{ locale }}</strong></p>
          <p>Use the "Locale" selector in the Storybook toolbar to change language</p>
        </div>

        <button @click="openModal" class="btn btn-primary">{{ t('MODAL.OPEN') }}</button>

        <Modal
          :open="isOpen"
          :title="t('MODAL.DIALOG_TITLE')"
          :width="500"
          :closeOnOutsideClick="true"
          :closeOnEscape="true"
          @close="closeModal"
          @save="handleSave"
        >
          <div>
            <h3>{{ t('COMMON.DIALOG_CONTENT') }}</h3>
            <p>{{ t('COMMON.DESCRIPTION') }}</p>
          </div>
        </Modal>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This modal demonstrates internationalization (i18n) support. Use the Locale selector in the Storybook toolbar to change the language.',
      },
    },
  },
};

// Filter Modal Story
export const BasicFilterModal: StoryObj<FilterModalProps> = {
  render: (args) => ({
    components: { FilterModal },
    setup() {
      const isOpen = ref(args.open);
      const { t } = useI18n();

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      const handleApplyFilters = (values: Record<string, any>) => {
        console.log('Filters applied:', values);
        closeModal();
      };

      const handleClearFilters = () => {
        console.log('Filters cleared');
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal,
        handleApplyFilters,
        handleClearFilters,
        t,
      };
    },
    template: `
      <div>
        <button @click="openModal" class="btn btn-primary">{{ t('BUTTON.FILTER') }}</button>

        <FilterModal
          :open="isOpen"
          :title="args.title"
          :formItems="args.formItems"
          :width="args.width"
          :customClass="args.customClass"
          :closeOnEscape="args.closeOnEscape"
          :initialValues="args.initialValues"
          @close="closeModal"
          @save="handleApplyFilters"
          @clear="handleClearFilters"
        />
      </div>
    `,
  }),
  args: {
    open: false,
    title: 'Filter Products',
    width: 30,
    closeOnEscape: true,
    customClass: '',
    formItems: [
      {
        name: 'category',
        label: 'Category',
        item: 'select',
        required: false,
        visible: true,
        options: [
          { label: 'All Categories', code: '' },
          { label: 'Electronics', code: 'electronics' },
          { label: 'Clothing', code: 'clothing' },
          { label: 'Books', code: 'books' },
        ],
      },
      {
        name: 'priceRange',
        label: 'Price Range',
        item: 'range',
        required: false,
        visible: true,
        min: 0,
        max: 1000,
      },
      {
        name: 'inStock',
        label: 'In Stock Only',
        item: 'checkbox',
        required: false,
        visible: true,
      },
    ],
    initialValues: {
      category: '',
      priceRange: [0, 1000],
      inStock: false,
    },
  },
};

// Modal Variants Demo
export const ModalVariants: StoryObj = {
  render: () => ({
    components: { Modal },
    setup() {
      const isBasicOpen = ref(false);
      const isWideOpen = ref(false);
      const isTallOpen = ref(false);
      const { t } = useI18n();

      const closeBasic = () => (isBasicOpen.value = false);
      const closeWide = () => (isWideOpen.value = false);
      const closeTall = () => (isTallOpen.value = false);

      const handleSave = (modalType: string) => {
        console.log(`${modalType} modal saved`);
        if (modalType === 'basic') closeBasic();
        if (modalType === 'wide') closeWide();
        if (modalType === 'tall') closeTall();
      };

      return {
        isBasicOpen,
        isWideOpen,
        isTallOpen,
        closeBasic,
        closeWide,
        closeTall,
        handleSave,
        t,
      };
    },
    template: `
      <div class="space-y-4">
        <div class="flex space-x-2">
          <button @click="isBasicOpen = true" class="btn btn-primary">{{ t('MODAL.BASIC') }}</button>
          <button @click="isWideOpen = true" class="btn btn-success">{{ t('MODAL.WIDE') }}</button>
          <button @click="isTallOpen = true" class="btn btn-info">{{ t('MODAL.TALL') }}</button>
        </div>

        <Modal
          :open="isBasicOpen"
          :title="t('MODAL.BASIC_TITLE')"
          @close="closeBasic"
          @save="() => handleSave('basic')"
        >
          <p>{{ t('MODAL.BASIC_CONTENT') }}</p>
        </Modal>

        <Modal
          :open="isWideOpen"
          :title="t('MODAL.WIDE_TITLE')"
          :width="80"
          @close="closeWide"
          @save="() => handleSave('wide')"
        >
          <p>{{ t('MODAL.WIDE_CONTENT') }}</p>
        </Modal>

        <Modal
          :open="isTallOpen"
          :title="t('MODAL.TALL_TITLE')"
          :height="80"
          @close="closeTall"
          @save="() => handleSave('tall')"
        >
          <div>
            <p>{{ t('MODAL.TALL_CONTENT') }}</p>
            <div class="bg-gray-100" style="height: 300px; display: flex; align-items: center; justify-content: center; margin-top: 1rem;">
              <span>{{ t('MODAL.TALL_AREA') }}</span>
            </div>
          </div>
        </Modal>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of different modal sizes and configurations with internationalization support',
      },
    },
  },
};
