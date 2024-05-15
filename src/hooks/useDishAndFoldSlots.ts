import moment from 'moment';
import { useEffect, useState } from 'react';
import { DishAndFoldsSlotsDto } from '@/dtos';
import { DishAndFoldSlotList } from '@/model';

const useDishAndFoldSlots = ()=> {
	const [slotStartTime] =  useState(moment().set({ hour: 6, minute: 0, second: 0, millisecond: 0 }));
	const [slotEndTime] = useState( moment().set({ hour: 13, minute: 0, second: 0, millisecond: 0 }));
	const [dishAndFoldSlotList, setDishAndFoldSlotList] = useState(new DishAndFoldSlotList());

	const prepareSlotArray = ()=>  {
		const slots : Array<DishAndFoldsSlotsDto> = [];
		let currentSlotStart = moment(slotStartTime);

		while (currentSlotStart.isBefore(slotEndTime)) {
			const currentSlotEnd = moment(currentSlotStart).add(1, 'hour');
			slots.push({ slotStartTime: currentSlotStart, slotEndTIme: currentSlotEnd, events:[] });
			currentSlotStart = currentSlotEnd;
		}
		setDishAndFoldSlotList(new DishAndFoldSlotList(slots));
	};

	useEffect(()=> {
		prepareSlotArray();
	}, []);

	return {
		dishAndFoldSlotList,
	};
};

export default useDishAndFoldSlots;
