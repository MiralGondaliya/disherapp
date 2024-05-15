import { List } from '@/model/core';
import { DishAndFoldsSlotsDto } from '@/dtos';
import { DishAndFoldSlot } from '@/model';

export class DishAndFoldSlotList extends List<DishAndFoldSlot> {
	public constructor(dtos? : DishAndFoldsSlotsDto[]) {
		super(dtos ?? [], DishAndFoldSlot, true);
	}
}
