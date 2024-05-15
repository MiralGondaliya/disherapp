import { t } from '@/localisation/index';

class Translation {
	transLate = (label:string) => t(`tr:${label}`).toString();

	get homeMilesFromYou() { return this.transLate('home.milesFromYou'); }
}
export const translation = new Translation();
