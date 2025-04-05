import { createI18n } from 'vue-i18n'

// Basic messages
const messages = {
    en: {
        BUTTON: {
            LOADING: 'Loading...',
            FILTER: 'Filter',
            CLEAR_FILTERS: 'Clear Filters',
            APPLY_FILTERS: 'Apply Filters'
        },
        MODAL: {
            CLOSE: 'Close',
            DIALOG_TITLE: 'Modal Dialog',
            BASIC: 'Basic Modal',
            WIDE: 'Wide Modal',
            TALL: 'Tall Modal',
            BASIC_TITLE: 'Basic Modal',
            WIDE_TITLE: 'Wide Modal',
            TALL_TITLE: 'Tall Modal',
            BASIC_CONTENT: 'This is a basic modal with standard dimensions.',
            WIDE_CONTENT: 'This is a wide modal that takes up more horizontal space.',
            TALL_CONTENT: 'This is a tall modal with more vertical space.',
            TALL_AREA: 'Additional content area',
            OPEN: 'Open Modal'
        },
        COMMON: {
            DIALOG_CONTENT: 'Dialog Content',
            DESCRIPTION: 'This is a description'
        }
    }
}

export default createI18n({
    legacy: false,
    locale: 'en',
    messages
})
