import { EntityId, Model } from '@/model/core';
import { DishAndFoldsSlotsDto } from '@/dtos';
import moment from 'moment';
import { DishAndFoldEventList } from '@/model';

export class DishAndFoldSlot extends Model<DishAndFoldsSlotsDto> {
	id!:EntityId;
	public constructor(dto:DishAndFoldsSlotsDto) {
		super(dto);
	}

	get slotStartTime(): moment {
		return this.dto?.slotStartTime ?? '';
	}
	get slotEndTIme(): moment {
		return this.dto?.slotEndTIme ?? '';
	}
	get events(): DishAndFoldEventList {
		return  new DishAndFoldEventList(this.dto?.events);
	}

	slotStartStr():string {
		return this.slotStartTime?.format('h a');
	}

	slotEndStr():string {
		return this.slotEndTIme?.format('h a');
	}

}
