import { createTheme } from '@shopify/restyle';
import { palette } from './Palette';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { fonts } from './Fonts';

export const theme = createTheme({
	colors: {
		...palette,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
	dark: false,
	spacing: {
		zero: 0,
		ss: 2,
		es: 4,
		s: 8,
		sr: 13,
		srr: 14,
		r: 16,
		rr: 20,
		m: 24,
		mes: 28,
		l: 32,
		lm: 36,
		ls: 40,
		lss:45,
		el: 54,
		se: 68,
		see:80,
		el100: 100,
		ll: 140,
		lll:220,
		mR: -16,
		mL: -32,
		mLL: 60,
		mLLL: 80,
		mS: -8,
		mES: -4,
		mEss: -2,
		mEs: -1,
		none: 0,
	},
	textVariants: {
		defaults: {},
		m14:{
			fontFamily: fonts.medium,
			fontSize:14,
			color:'chinesBlack',
		},
		m12:{
			fontFamily: fonts.medium,
			fontSize:12,
			color:'chinesBlack',
		},
		m10:{
			fontFamily: fonts.medium,
			fontSize:10,
			color:'chinesBlack',
		},
		r12:{
			fontFamily: fonts.regular,
			fontSize:12,
			color:'chinesBlack',
		},
		r10:{
			fontFamily: fonts.regular,
			fontSize:10,
			color:'chinesBlack',
		},
		r8:{
			fontFamily: fonts.regular,
			fontSize:8,
			color:'chinesBlack',
		},
		sm10:{
			fontFamily: fonts.semiBold,
			fontSize:10,
			color:'chinesBlack',
		},
	},
	cardVariants: {
		defaults: {
			width: DeviceHelper.width() - 48,
			margin: 'r',
			shadowColor: 'ffBlack',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0.5,
			shadowRadius: 4,
			elevation: 4,
			borderRadius: 10,
			backgroundColor: 'white',
		},
		big: {
			width: DeviceHelper.width() - 48,
			height: DeviceHelper.height() / 1.3,
		},
	},
});

export type Theme = typeof theme;
export type Color = keyof (typeof theme)['colors'];
export default theme;
