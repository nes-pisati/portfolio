import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonIT from './locales/it/common.json';
import projectsIT from './locales/it/projects.json';
import commonEN from './locales/en/common.json';
import projectsEN from './locales/en/projects.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'it',
        defaultNS: 'common',
        resources: {
            it: {
                common: commonIT,
                projects: projectsIT,
            },
            en: {
                common: commonEN,
                projects: projectsEN,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;