[//]: # (# Card)

[//]: # ()
[//]: # (A versatile collection of card components for Vue 3 applications, designed to organize and present content in clean, well-structured containers.)

[//]: # ()
[//]: # (## Introduction)

[//]: # ()
[//]: # (The Card components provide flexible, attractive containers for displaying content in your application. They range from simple content cards to specialized variants for images, forms, tables, and collapsible sections. Each card type is designed to solve specific UI needs while maintaining a consistent design language across your application.)

[//]: # ()
[//]: # (## Features)

[//]: # ()
[//]: # (- 🧩 Multiple card variants for different use cases &#40;basic, image, form, table, collapsible&#41;)

[//]: # (- 🎨 Consistent styling with customizable headers, footers, and content areas)

[//]: # (- 📱 Responsive design that adapts to various screen sizes)

[//]: # (- 🖼️ Lazy-loaded image support with placeholder fallbacks)

[//]: # (- 📝 Integrated form handling with the FormCard component)

[//]: # (- 📊 Table functionality with action buttons for data operations)

[//]: # (- 🔄 Collapsible sections with smooth animations)

[//]: # (- 🎛️ Customizable headers and footers through slots)

[//]: # (- 📐 Flexible layout options with custom CSS class support)

[//]: # (- ♿ Accessibility compliant with proper ARIA attributes)

[//]: # ()
[//]: # (## Live Examples)

[//]: # ()
[//]: # (<script setup>)

[//]: # (import { Card, ImageCard, FormCard, CollapsableCard, TableCard } from '@lpkitvue/card';)

[//]: # (import '@lpkitvue/card/dist/card.css')

[//]: # (import { ref } from 'vue';)

[//]: # ()
[//]: # (// Sample form fields for FormCard)

[//]: # (const formFields = [)

[//]: # (  {)

[//]: # (    name: 'name',)

[//]: # (    label: 'Full Name',)

[//]: # (    type: 'input',)

[//]: # (    required: true,)

[//]: # (    size: 12)

[//]: # (  },)

[//]: # (  {)

[//]: # (    name: 'email',)

[//]: # (    label: 'Email Address',)

[//]: # (    type: 'input',)

[//]: # (    itemType: 'email',)

[//]: # (    required: true,)

[//]: # (    size: 12)

[//]: # (  },)

[//]: # (  {)

[//]: # (    name: 'message',)

[//]: # (    label: 'Message',)

[//]: # (    type: 'textarea',)

[//]: # (    required: true,)

[//]: # (    rows: 4,)

[//]: # (    size: 12)

[//]: # (  })

[//]: # (];)

[//]: # ()
[//]: # (// Sample buttons for TableCard)

[//]: # (const tableButtons = [)

[//]: # (  { text: 'Add New', type: 'add', onClick: &#40;&#41; => console.log&#40;'Add clicked'&#41;, className: 'btn-primary' },)

[//]: # (  { text: 'Export', type: 'export-excel', onClick: &#40;&#41; => console.log&#40;'Export clicked'&#41;, className: 'btn-success' },)

[//]: # (  { text: 'Filter', type: 'filter', onClick: &#40;&#41; => console.log&#40;'Filter clicked'&#41;, className: 'btn-light' })

[//]: # (];)

[//]: # ()
[//]: # (const isCollapsed = ref&#40;false&#41;;)

[//]: # (const formLoading = ref&#40;false&#41;;)

[//]: # ()
[//]: # (// Handle form submission)

[//]: # (const handleSubmit = &#40;values&#41; => {)

[//]: # (  formLoading.value = true;)

[//]: # (  console.log&#40;'Form submitted:', values&#41;;)

[//]: # (  )
[//]: # (  // Simulate API call)

[//]: # (  setTimeout&#40;&#40;&#41; => {)

[//]: # (    formLoading.value = false;)

[//]: # (  }, 1500&#41;;)

[//]: # (};)

[//]: # ()
[//]: # (// Handle collapse state change)

[//]: # (const handleCollapseChange = &#40;collapsed&#41; => {)

[//]: # (  isCollapsed.value = collapsed;)

[//]: # (  console.log&#40;'Card collapsed:', collapsed&#41;;)

[//]: # (};)

[//]: # (</script>)

[//]: # ()
[//]: # (### Basic Card)

[//]: # ()
[//]: # (<Card title="Basic Card">)

[//]: # (  <p>This is a basic card with a title and content. Cards are used to group related information and actions.</p>)

[//]: # (  <p>They typically provide a consistent layout and styling for content.</p>)

[//]: # (</Card>)

[//]: # ()
[//]: # (### Card with Custom Footer)

[//]: # ()
[//]: # (<Card title="Card with Footer">)

[//]: # (  <p>This card demonstrates the use of a custom footer through slots.</p>)

[//]: # (  <template #footer>)

[//]: # (    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">)

[//]: # (      <span>Last updated: April 6, 2025</span>)

[//]: # (      <button style="padding: 6px 12px; background-color: #4361ee; color: white; border: none; border-radius: 4px; cursor: pointer;">More Info</button>)

[//]: # (    </div>)

[//]: # (  </template>)

[//]: # (</Card>)

[//]: # ()
[//]: # (### Image Card)

[//]: # ()
[//]: # (<ImageCard)

[//]: # (title="Image Card Example")

[//]: # (imageUrl="https://placehold.co/600x400")

[//]: # (alt="Example placeholder image")

[//]: # (>)

[//]: # (  <p>The ImageCard component displays an image with lazy loading and fallback support.</p>)

[//]: # (  <p>It's perfect for media galleries, product displays, or article previews.</p>)

[//]: # (</ImageCard>)

[//]: # ()
[//]: # (### Collapsable Card)

[//]: # ()
[//]: # (<CollapsableCard)

[//]: # (title="Collapsable Content")

[//]: # (:defaultCollapsed="isCollapsed")

[//]: # (@collapse="handleCollapseChange")

[//]: # (>)

[//]: # (  <div>)

[//]: # (    <p>This content can be collapsed or expanded by clicking on the card header.</p>)

[//]: # (    <p>Collapsable cards are useful for organizing content that doesn't need to be visible all the time.</p>)

[//]: # (    <p>They help reduce visual clutter and allow users to focus on what's important.</p>)

[//]: # (  </div>)

[//]: # (</CollapsableCard>)

[//]: # ()
[//]: # (### Form Card)

[//]: # ()
[//]: # (<FormCard)

[//]: # (title="Contact Form")

[//]: # (:fields="formFields")

[//]: # (:loading="formLoading")

[//]: # (:onSubmit="handleSubmit")

[//]: # (submitText="Send Message")

[//]: # (clearText="Reset")

[//]: # (/>)

[//]: # ()
[//]: # (### Table Card)

[//]: # ()
[//]: # (<TableCard)

[//]: # (title="Users Table")

[//]: # (:buttons="tableButtons")

[//]: # (>)

[//]: # (  <div style="overflow-x: auto;">)

[//]: # (    <table style="width: 100%; border-collapse: collapse; text-align: left;">)

[//]: # (      <thead>)

[//]: # (        <tr>)

[//]: # (          <th style="padding: 12px; border-bottom: 1px solid #e9ecef;">ID</th>)

[//]: # (          <th style="padding: 12px; border-bottom: 1px solid #e9ecef;">Name</th>)

[//]: # (          <th style="padding: 12px; border-bottom: 1px solid #e9ecef;">Email</th>)

[//]: # (          <th style="padding: 12px; border-bottom: 1px solid #e9ecef;">Status</th>)

[//]: # (        </tr>)

[//]: # (      </thead>)

[//]: # (      <tbody>)

[//]: # (        <tr>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">1</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">John Doe</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">john@example.com</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">Active</td>)

[//]: # (        </tr>)

[//]: # (        <tr>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">2</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">Jane Smith</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">jane@example.com</td>)

[//]: # (          <td style="padding: 12px; border-bottom: 1px solid #e9ecef;">Inactive</td>)

[//]: # (        </tr>)

[//]: # (      </tbody>)

[//]: # (    </table>)

[//]: # (  </div>)

[//]: # (</TableCard>)

[//]: # ()
[//]: # (## Installation)

[//]: # ()
[//]: # (```bash)

[//]: # (npm install @lpkitvue/card)

[//]: # (```)

[//]: # ()
[//]: # (Don't forget to import the CSS:)

[//]: # ()
[//]: # (```javascript)

[//]: # (import '@lpkitvue/alert/dist/alert.css';)

[//]: # (```)

[//]: # ()
[//]: # (This package has dependencies on other LPKitVue components for specific card types:)

[//]: # ()
[//]: # (```bash)

[//]: # (# Required for FormCard)

[//]: # (npm install @lpkitvue/form)

[//]: # ()
[//]: # (# Required for TableCard)

[//]: # (npm install @lpkitvue/button)

[//]: # (```)

[//]: # ()
[//]: # (## Basic Usage)

[//]: # ()
[//]: # (### Basic Card)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { Card } from '@lpkitvue/card';)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <Card title="Card Title">)

[//]: # (    <p>This is the card content.</p>)

[//]: # (  </Card>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (### Card with Footer)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { Card } from '@lpkitvue/card';)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <Card title="Card with Footer">)

[//]: # (    <p>This is the main content of the card.</p>)

[//]: # (    )
[//]: # (    <template #footer>)

[//]: # (      <div class="card-footer-content">)

[//]: # (        <span>Last updated: April 6, 2025</span>)

[//]: # (        <button class="btn btn-primary">Action</button>)

[//]: # (      </div>)

[//]: # (    </template>)

[//]: # (  </Card>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (### Image Card)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { ImageCard } from '@lpkitvue/card';)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <ImageCard)

[//]: # (    title="Image Example")

[//]: # (    imageUrl="https://example.com/image.jpg")

[//]: # (    alt="Description of the image")

[//]: # (    :aspectRatio="16/9")

[//]: # (  >)

[//]: # (    <p>Content displayed below the image.</p>)

[//]: # (  </ImageCard>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (### Table Card)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { TableCard } from '@lpkitvue/card';)

[//]: # ()
[//]: # (const tableButtons = [)

[//]: # (  { )

[//]: # (    text: 'Add New', )

[//]: # (    type: 'add', )

[//]: # (    onClick: &#40;&#41; => console.log&#40;'Add clicked'&#41;, )

[//]: # (    className: 'btn-primary' )

[//]: # (  },)

[//]: # (  { )

[//]: # (    text: 'Export', )

[//]: # (    type: 'export-excel', )

[//]: # (    onClick: &#40;&#41; => console.log&#40;'Export clicked'&#41;, )

[//]: # (    className: 'btn-success' )

[//]: # (  })

[//]: # (];)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <TableCard)

[//]: # (    title="Data Table")

[//]: # (    :buttons="tableButtons")

[//]: # (  >)

[//]: # (    <table class="table">)

[//]: # (      <!-- Your table content -->)

[//]: # (    </table>)

[//]: # (  </TableCard>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (## Advanced Usage)

[//]: # ()
[//]: # (### Collapsable Card with Event Handling)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { CollapsableCard } from '@lpkitvue/card';)

[//]: # (import { ref } from 'vue';)

[//]: # ()
[//]: # (const isCollapsed = ref&#40;false&#41;;)

[//]: # ()
[//]: # (const handleCollapse = &#40;&#41; => {)

[//]: # (  console.log&#40;'Card collapsed'&#41;;)

[//]: # (};)

[//]: # ()
[//]: # (const handleExpand = &#40;&#41; => {)

[//]: # (  console.log&#40;'Card expanded'&#41;;)

[//]: # (};)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <CollapsableCard)

[//]: # (    title="Expandable Section")

[//]: # (    :defaultCollapsed="isCollapsed")

[//]: # (    @collapse="handleCollapse")

[//]: # (    @expand="handleExpand")

[//]: # (  >)

[//]: # (    <div class="collapsable-content">)

[//]: # (      <p>This content can be hidden or shown.</p>)

[//]: # (    </div>)

[//]: # (  </CollapsableCard>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (### Form Card with Custom Styling)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { FormCard } from '@lpkitvue/card';)

[//]: # (import { ref } from 'vue';)

[//]: # ()
[//]: # (const fields = [)

[//]: # (  {)

[//]: # (    name: 'name',)

[//]: # (    label: 'Full Name',)

[//]: # (    type: 'input',)

[//]: # (    required: true,)

[//]: # (    size: 12)

[//]: # (  },)

[//]: # (  {)

[//]: # (    name: 'email',)

[//]: # (    label: 'Email',)

[//]: # (    type: 'input',)

[//]: # (    itemType: 'email',)

[//]: # (    required: true,)

[//]: # (    size: 12)

[//]: # (  })

[//]: # (];)

[//]: # ()
[//]: # (const loading = ref&#40;false&#41;;)

[//]: # ()
[//]: # (const handleSubmit = async &#40;values&#41; => {)

[//]: # (  loading.value = true;)

[//]: # (  try {)

[//]: # (    // Process form submission)

[//]: # (    await submitData&#40;values&#41;;)

[//]: # (  } catch &#40;error&#41; {)

[//]: # (    console.error&#40;'Submission error:', error&#41;;)

[//]: # (  } finally {)

[//]: # (    loading.value = false;)

[//]: # (  })

[//]: # (};)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <FormCard)

[//]: # (    title="Contact Form")

[//]: # (    :fields="fields")

[//]: # (    :loading="loading")

[//]: # (    :onSubmit="handleSubmit")

[//]: # (    submitText="Send")

[//]: # (    clearText="Reset")

[//]: # (    headerClass="custom-header")

[//]: # (    contentClass="custom-content")

[//]: # (    footerClass="custom-footer")

[//]: # (  />)

[//]: # (</template>)

[//]: # ()
[//]: # (<style scoped>)

[//]: # (.custom-header {)

[//]: # (  background-color: #f0f4ff;)

[//]: # (  border-bottom: 2px solid #4361ee;)

[//]: # (})

[//]: # ()
[//]: # (.custom-content {)

[//]: # (  padding: 1.5rem;)

[//]: # (})

[//]: # ()
[//]: # (.custom-footer {)

[//]: # (  background-color: #f8faff;)

[//]: # (})

[//]: # (</style>)

[//]: # (```)

[//]: # ()
[//]: # (### Card with Custom Header)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { Card } from '@lpkitvue/card';)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <Card>)

[//]: # (    <template #header>)

[//]: # (      <div class="flex justify-between items-center p-4 bg-blue-50">)

[//]: # (        <h3 class="text-lg font-bold text-blue-700">Custom Header</h3>)

[//]: # (        <div class="flex space-x-2">)

[//]: # (          <button class="btn btn-sm btn-outline-primary">Edit</button>)

[//]: # (          <button class="btn btn-sm btn-outline-danger">Delete</button>)

[//]: # (        </div>)

[//]: # (      </div>)

[//]: # (    </template>)

[//]: # (    )
[//]: # (    <p>Card with a completely custom header.</p>)

[//]: # (  </Card>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (### Grid of Cards)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { Card, ImageCard } from '@lpkitvue/card';)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">)

[//]: # (    <Card title="First Card">)

[//]: # (      <p>Content for the first card.</p>)

[//]: # (    </Card>)

[//]: # (    )
[//]: # (    <ImageCard)

[//]: # (      title="Image Card")

[//]: # (      imageUrl="https://example.com/image1.jpg")

[//]: # (      alt="Example image")

[//]: # (    >)

[//]: # (      <p>Image card content.</p>)

[//]: # (    </ImageCard>)

[//]: # (    )
[//]: # (    <Card title="Third Card">)

[//]: # (      <p>Content for the third card.</p>)

[//]: # (    </Card>)

[//]: # (  </div>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (## API Reference)

[//]: # ()
[//]: # (### Card Component)

[//]: # ()
[//]: # (#### Props)

[//]: # ()
[//]: # (| Prop | Type | Default | Description |)

[//]: # (|------|------|---------|-------------|)

[//]: # (| `title` | `string` | `''` | Card title displayed in the header |)

[//]: # ()
[//]: # (#### Slots)

[//]: # ()
[//]: # (| Slot | Description |)

[//]: # (|------|-------------|)

[//]: # (| `default` | Main content of the card |)

[//]: # (| `header` | Custom header content &#40;overrides the title prop&#41; |)

[//]: # (| `footer` | Optional footer content |)

[//]: # ()
[//]: # (### ImageCard Component)

[//]: # ()
[//]: # (#### Props)

[//]: # ()
[//]: # (| Prop | Type | Default | Description |)

[//]: # (|------|------|---------|-------------|)

[//]: # (| `title` | `string` | *Required* | Card title displayed in the header |)

[//]: # (| `imageUrl` | `string` | *Required* | URL of the image to display |)

[//]: # (| `aspectRatio` | `number` | `16/9` | Aspect ratio of the image container |)

[//]: # (| `alt` | `string` | `''` | Alternative text for the image |)

[//]: # (| `imageClass` | `string` | `''` | Additional CSS classes for the image |)

[//]: # (| `contentClass` | `string` | `''` | Additional CSS classes for the content section |)

[//]: # (| `headerClass` | `string` | `''` | Additional CSS classes for the header section |)

[//]: # ()
[//]: # (#### Slots)

[//]: # ()
[//]: # (| Slot | Description |)

[//]: # (|------|-------------|)

[//]: # (| `default` | Content displayed below the image |)

[//]: # ()
[//]: # (### CollapsableCard Component)

[//]: # ()
[//]: # (#### Props)

[//]: # ()
[//]: # (| Prop | Type | Default | Description |)

[//]: # (|------|------|---------|-------------|)

[//]: # (| `title` | `string` | *Required* | Card title displayed in the header |)

[//]: # (| `defaultCollapsed` | `boolean` | `false` | Whether the card is initially collapsed |)

[//]: # (| `headerClass` | `string` | `''` | Additional CSS classes for the header |)

[//]: # (| `contentClass` | `string` | `''` | Additional CSS classes for the content section |)

[//]: # (| `animationDuration` | `number` | `300` | Duration of collapse/expand animation in milliseconds |)

[//]: # ()
[//]: # (#### Events)

[//]: # ()
[//]: # (| Event | Parameters | Description |)

[//]: # (|-------|------------|-------------|)

[//]: # (| `collapse` | none | Emitted when the card is collapsed |)

[//]: # (| `expand` | none | Emitted when the card is expanded |)

[//]: # ()
[//]: # (#### Slots)

[//]: # ()
[//]: # (| Slot | Description |)

[//]: # (|------|-------------|)

[//]: # (| `default` | Collapsible content of the card |)

[//]: # ()
[//]: # (### FormCard Component)

[//]: # ()
[//]: # (#### Props)

[//]: # ()
[//]: # (| Prop | Type | Default | Description |)

[//]: # (|------|------|---------|-------------|)

[//]: # (| `title` | `string` | *Required* | Card title displayed in the header |)

[//]: # (| `fields` | `FormItemProps[]` | *Required* | Form fields configuration |)

[//]: # (| `loading` | `boolean` | `false` | Whether the form is in loading state |)

[//]: # (| `submitText` | `string` | `'Submit'` | Text for the submit button |)

[//]: # (| `clearText` | `string` | `'Clear'` | Text for the clear button |)

[//]: # (| `onSubmit` | `&#40;values: Record<string, any>&#41; => void \| Promise<void>` | `undefined` | Form submission handler |)

[//]: # (| `onClear` | `&#40;&#41; => void` | `undefined` | Form clear handler |)

[//]: # (| `disableSubmit` | `boolean` | `false` | Whether to disable the submit button |)

[//]: # (| `showClearButton` | `boolean` | `true` | Whether to show the clear button |)

[//]: # (| `headerClass` | `string` | `''` | Additional CSS classes for the header |)

[//]: # (| `contentClass` | `string` | `''` | Additional CSS classes for the content section |)

[//]: # (| `footerClass` | `string` | `''` | Additional CSS classes for the footer section |)

[//]: # (| `formClassName` | `string` | `''` | Additional CSS classes for the form element |)

[//]: # (| `columnGap` | `string` | `undefined` | Gap between columns in the form |)

[//]: # (| `rowGap` | `string` | `undefined` | Gap between rows in the form |)

[//]: # (| `readonly` | `boolean` | `false` | Whether all form fields are readonly |)

[//]: # (| `disabled` | `boolean` | `false` | Whether all form fields are disabled |)

[//]: # (| `customFooter` | `boolean` | `false` | Whether to use a custom footer via slot instead of default form actions |)

[//]: # (| `actionAlign` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'end'` | Alignment of form action buttons |)

[//]: # ()
[//]: # (#### Events)

[//]: # ()
[//]: # (| Event | Parameters | Description |)

[//]: # (|-------|------------|-------------|)

[//]: # (| `submit` | `&#40;values: Record<string, any>&#41;` | Emitted when the form is submitted |)

[//]: # (| `clear` | none | Emitted when the form is cleared |)

[//]: # (| `change` | `&#40;name: string, value: any&#41;` | Emitted when a form field value changes |)

[//]: # (| `valid` | `&#40;isValid: boolean&#41;` | Emitted when form validity changes |)

[//]: # ()
[//]: # (#### Slots)

[//]: # ()
[//]: # (| Slot | Description |)

[//]: # (|------|-------------|)

[//]: # (| `default` | Additional content to display within the form |)

[//]: # (| `footer` | Custom footer content &#40;when customFooter prop is true&#41; |)

[//]: # ()
[//]: # (#### Methods)

[//]: # ()
[//]: # (| Method | Parameters | Description |)

[//]: # (|--------|------------|-------------|)

[//]: # (| `submit` | none | Programmatically submit the form |)

[//]: # (| `reset` | none | Reset the form to its initial state |)

[//]: # (| `getFormRef` | none | Get the underlying form component reference |)

[//]: # ()
[//]: # (### TableCard Component)

[//]: # ()
[//]: # (#### Props)

[//]: # ()
[//]: # (| Prop | Type | Default | Description |)

[//]: # (|------|------|---------|-------------|)

[//]: # (| `title` | `string` | *Required* | Card title displayed in the header |)

[//]: # (| `buttons` | `TableCardButton[]` | `[]` | Action buttons for the card header |)

[//]: # (| `headerClass` | `string` | `''` | Additional CSS classes for the header |)

[//]: # (| `contentClass` | `string` | `''` | Additional CSS classes for the content section |)

[//]: # ()
[//]: # (#### TableCardButton Type)

[//]: # ()
[//]: # (| Property | Type | Description |)

[//]: # (|----------|------|-------------|)

[//]: # (| `text` | `string` | Button text/label |)

[//]: # (| `type` | `'filter' \| 'add' \| 'export-excel' \| 'export-csv'` | Button type to determine which component to use |)

[//]: # (| `disabled` | `boolean` | Whether the button is disabled |)

[//]: # (| `onClick` | `&#40;&#41; => void` | Click handler function |)

[//]: # (| `className` | `string` | Optional CSS class to apply to the button |)

[//]: # (| `description` | `string` | Optional description for accessibility or tooltips |)

[//]: # ()
[//]: # (#### Slots)

[//]: # ()
[//]: # (| Slot | Description |)

[//]: # (|------|-------------|)

[//]: # (| `default` | Card content, typically a table |)

[//]: # ()
[//]: # (## TypeScript Support)

[//]: # ()
[//]: # (The package includes TypeScript definitions for all components:)

[//]: # ()
[//]: # (```typescript)

[//]: # (import { )

[//]: # (  Card, )

[//]: # (  ImageCard, )

[//]: # (  FormCard, )

[//]: # (  CollapsableCard, )

[//]: # (  TableCard )

[//]: # (} from '@lpkitvue/card';)

[//]: # ()
[//]: # (import type { )

[//]: # (  ImageCardProps,)

[//]: # (  FormCardProps,)

[//]: # (  CollapsableCardProps,)

[//]: # (  TableCardProps,)

[//]: # (  TableCardButton)

[//]: # (} from '@lpkitvue/card';)

[//]: # ()
[//]: # (const imageCardProps: ImageCardProps = {)

[//]: # (  title: 'Product Image',)

[//]: # (  imageUrl: '/images/product.jpg',)

[//]: # (  aspectRatio: 4/3,)

[//]: # (  alt: 'Product image')

[//]: # (};)

[//]: # ()
[//]: # (const tableButtons: TableCardButton[] = [)

[//]: # (  {)

[//]: # (    text: 'Add New',)

[//]: # (    type: 'add',)

[//]: # (    onClick: &#40;&#41; => console.log&#40;'Add clicked'&#41;,)

[//]: # (    className: 'btn-primary')

[//]: # (  })

[//]: # (];)

[//]: # (```)

[//]: # ()
[//]: # (## Accessibility)

[//]: # ()
[//]: # (The card components are built with accessibility in mind:)

[//]: # ()
[//]: # (- Semantic HTML structure with appropriate heading levels)

[//]: # (- ARIA attributes for interactive elements)

[//]: # (- Focus indicators for keyboard navigation)

[//]: # (- Proper contrast ratios for text and background colors)

[//]: # (- Accessible animations with respect for reduced motion preferences)

[//]: # (- Keyboard support for collapsible sections)

[//]: # (- Alt text support for images)

[//]: # (- Screen reader announcements for loading states)

[//]: # (- Proper labeling of interactive elements)

[//]: # ()
[//]: # (### CollapsableCard Accessibility)

[//]: # ()
[//]: # (The CollapsableCard component includes specific accessibility features:)

[//]: # ()
[//]: # (- Keyboard support for expanding/collapsing with Enter and Space keys)

[//]: # (- ARIA attributes to indicate expanded/collapsed state)

[//]: # (- Focus management when expanding/collapsing)

[//]: # (- Animation respects the user's reduced motion preference settings)
