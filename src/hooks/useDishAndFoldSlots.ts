import moment from 'moment';
import { useEffect, useState } from 'react';
import { DishAndFoldsEventDto, DishAndFoldsSlotsDto } from '@/dtos';
import { DishAndFoldSlotList } from '@/model';

const dataJson = [
	{
		startTime:'2024-05-15 06:00:00',
		endTime:'2024-05-15 07:00:00',
		title:'DISH',
		rating:2.8,
		amount:30,
		miles:5,
		confirmed:1,
	},
	{
		startTime:'2024-05-15 07:00:00',
		endTime:'2024-05-15 08:00:00',
		title:'DISH',
		rating:2.8,
		amount:30,
		miles:5,
		confirmed:0,
	},
	{
		startTime:'2024-05-15 06:00:00',
		endTime:'2024-05-15 07:00:00',
		title:'DISH',
		rating:2.8,
		amount:30,
		miles:5,
		confirmed:0,
	},
	{
		startTime:'2024-05-15 08:00:00',
		endTime:'2024-05-15 09:00:00',
		title:'DISH + FOLD',
		rating:4.8,
		amount:15,
		miles:4,
		confirmed:0,
	},
	{
		startTime:'2024-05-15 08:00:00',
		endTime:'2024-05-15 09:00:00',
		title:'DISH + FOLD',
		rating:4.8,
		amount:15,
		miles:4,
		confirmed:0,
	},
	{
		startTime:'2024-05-15 09:00:00',
		endTime:'2024-05-15 10:00:00',
		title:'DISH + FOLD',
		rating:4.8,
		amount:15,
		miles:4,
		confirmed:0,
	},
];

const useDishAndFoldSlots = ()=> {
	const [slotStartTime] =  useState(moment().set({ hour: 6, minute: 0, second: 0, millisecond: 0 }));
	const [slotEndTime] = useState( moment().set({ hour: 13, minute: 0, second: 0, millisecond: 0 }));
	const [dishAndFoldSlotList, setDishAndFoldSlotList] = useState(new DishAndFoldSlotList());

	const prepareSlotArray = ()=>  {
		const slots : Array<DishAndFoldsSlotsDto> = [];
		let currentSlotStart = moment(slotStartTime);

		while (currentSlotStart.isBefore(slotEndTime)) {
			const currentSlotEnd = moment(currentSlotStart).add(1, 'hour');
			/**
			 * Filter events based on slots
			 */
			const eventList : DishAndFoldsEventDto[] = [];
			dataJson.forEach((event)=> {
				const dishFoldEvent : DishAndFoldsEventDto = {
					miles:event.miles,
					amount: event.amount,
					rating: event.rating,
					title: event.title,
					confirmed: event.confirmed,
					endTime: moment(event.endTime, 'YYYY-MM-DD HH:mm:ss'),
					startTime: moment(event.startTime, 'YYYY-MM-DD HH:mm:ss'),
				};
				const { startTime : eventStartTime, endTime: eventEndTime } = dishFoldEvent;

				/**
				 * Case one :
				 * Event slot is within Current slot
				 */
				const eventWithingTheSlot = eventStartTime.isSameOrAfter(currentSlotStart)
					&& eventEndTime.isSameOrBefore(currentSlotEnd);

				/**
				 * Case 2 :
				 * Current slot withing event slot
				 */
				const currentSlotWithinEventSlot = currentSlotStart.isSameOrAfter(eventStartTime)
					&& currentSlotEnd.isSameOrBefore(eventEndTime);

				if (eventWithingTheSlot || currentSlotWithinEventSlot) {
					eventList.push(dishFoldEvent);
				}


			});
			slots.push({ slotStartTime: currentSlotStart, slotEndTIme: currentSlotEnd, events:eventList });
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
