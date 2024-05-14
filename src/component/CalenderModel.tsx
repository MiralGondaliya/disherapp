import React from 'react';
import {Calendar, DateData} from "react-native-calendars/src";
import {Box} from "@/component/Box";
import { Pressable } from './Pressable';
import { Button } from './Button';
import Modal from "react-native-modal";
export interface CalendarModelProps {
	isVisible: boolean;
	selectedDate: string;
	onClose:() => void;
	handleDateChange:(date: DateData) => void;
}

export const CalendarModel: React.FC<CalendarModelProps> = ({
	isVisible,
	onClose,
	selectedDate,
	handleDateChange,
}) => {
	return (
		<Modal
			testID="modal"
			isVisible={isVisible}
			onModalHide={onClose}
			onBackButtonPress={onClose}
			onSwipeComplete={onClose}
			animationInTiming={500}
			animationOutTiming={700}
			animationIn="slideInUp"
			backdropTransitionOutTiming={0}
			swipeDirection={['down']}
			style={{
				justifyContent: 'flex-end',
				margin: 0,
			}}
		>
			<Box
				flex={1}
				justifyContent="flex-end"
			>
				<Pressable onPress={onClose} flex={0.5} />
				<Box
					borderTopLeftRadius={12}
					borderTopRightRadius={12}
					padding="r"
					flex={0.5}
					backgroundColor="white"
					width="100%"
				>
					<Calendar
						onDayPress={handleDateChange}
						markedDates={{
							[selectedDate]: { selected: true, selectedColor: '#202548' },
						}}
					/>
				</Box>
			</Box>
		</Modal>
	);
};
