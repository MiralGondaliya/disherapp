import { t } from '@/localisation/index';

class Translation {
	transLate = (label:string) => t(`tr:${label}`).toString();

	get homeMilesFromYou() { return this.transLate('home.milesFromYou'); }
	get homeConfirmDailyEarnings() { return this.transLate('home.confirm.daily.earnings'); }
}
export const translation = new Translation();
