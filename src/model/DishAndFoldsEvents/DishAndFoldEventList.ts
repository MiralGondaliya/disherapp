import { List } from '@/model/core';
import { DishAndFoldEvent } from '@/model';
import { DishAndFoldsEventDto } from '@/dtos';

export class DishAndFoldEventList extends List<DishAndFoldEvent> {
	constructor(dtos? : DishAndFoldsEventDto[]) {
		super(dtos ?? [], DishAndFoldEvent, true);
	}
}
