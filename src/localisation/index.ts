import { initReactI18next, useTranslation as useTranslationi18next } from 'react-i18next';
import i18next, { LanguageDetectorModule, TFunction } from 'i18next';
import { Storage } from '@/core/Storage';
import enJson from './en.json';
import spJson from './sp.json';

export enum LangCode {
	ENGLISH = 'en',
	SPANISH = 'es',
}

let appLanguage = LangCode.ENGLISH;

const languageDetector: LanguageDetectorModule = {
	type: 'languageDetector',
	detect: () => appLanguage,
	init: () => { },
	cacheUserLanguage: () => { },
};

const englishTranslations = {
	...enJson,
};

const spanishTranslations = {
	...spJson,
};

const resources = {
	en: {
		...englishTranslations,
	},
	es: {
		...spanishTranslations,
	},
};

i18next
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: LangCode.ENGLISH,
		resources,
		interpolation: {
			escapeValue: false,
		},
		compatibilityJSON: 'v3',
	}).catch((reason) => {
		console.log('reason ==>.', reason);
	});

export const setLanguage = async (): Promise<void> => {
	const currentLanguage = await Storage.getItemAsync(Storage.keys.language);
	if (!currentLanguage) {
		await Storage.setItemAsync(Storage.keys.language, LangCode.ENGLISH);
	} else {
		appLanguage = currentLanguage as LangCode;
	}
	i18next.changeLanguage(appLanguage);
};

export const updateLanguage = async (newLangCode:LangCode) => {
	await Storage.setItemAsync(Storage.keys.language, newLangCode);
	await setLanguage();
};

export const useTranslation = (key: string, params?: Record<string, unknown>): string => {
	const { t } = useTranslationi18next();
	return t(key, params);
};

export const t = (key: string, params?: Record<string, unknown>): TFunction =>
	// @ts-ignore
	i18next.t(key, params);

export const changeLanguage = (): void => {
	const currentlanguage = i18next.language;
	if (currentlanguage === 'en') {
		i18next.changeLanguage('es');
	} else {
		i18next.changeLanguage('en');
	}
};

export default i18next;
