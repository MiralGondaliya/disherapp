import { EntityId, Model } from '@/model/core';
import { DishAndFoldsEventDto } from '@/dtos';
import moment from 'moment';

export class DishAndFoldEvent extends Model<DishAndFoldsEventDto> {
	id!:EntityId;

	public constructor(dto:DishAndFoldsEventDto) {
		super(dto);
	}

	get startTime(): moment {
		return this.dto?.startTime as moment;
	}
	get endTime(): moment {
		return this.dto?.endTime as moment;
	}
	get title(): string {
		return this.dto?.title ?? '';
	}
	get rating(): number {
		return this.dto?.rating ?? 0;
	}
	get amount(): number {
		return this.dto?.amount ?? 0;
	}

	get miles():number {
		return this.dto?.miles ?? 0;
	}

	get confirmed():number {
		return this.dto?.confirmed ?? 0;
	}

	dateStringFromTo():string {
		return `${this.startTime.format('h:mm')} to ${this.endTime.format('h:mm a')}`;
	}

}
