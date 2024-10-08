import React, { useRef } from 'react';
import { Box, Text } from '@/component';
import { ScrollView } from 'react-native';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { DishAndFoldEventBox } from '@/component/Disher.HomeTab';
import useDishAndFoldSlots from '@/hooks/useDishAndFoldSlots';

export const DishAndFoldEventSlots:React.FC = () => {
	const { dishAndFoldSlotList } = useDishAndFoldSlots();
	const timeSlotScrollViewRef = useRef(null);
	const eventsScrollViewRef = useRef(null);

	const handleOnTimeSlotScrollViewRef = (event) => {
		const { y } = event.nativeEvent.contentOffset;
		if (timeSlotScrollViewRef.current) {
			eventsScrollViewRef.current.scrollTo({ y, animated: false });
		}
	};

	const handleOnEventlotScrollViewRef = (event) => {
		const { y } = event.nativeEvent.contentOffset;
		if (eventsScrollViewRef.current) {
			timeSlotScrollViewRef.current.scrollTo({ y, animated: false });
		}
	};


	return (
		<Box flex={1} style={{ paddingBottom:69 }} flexDirection={'row'}>
			<Box>
				<ScrollView
					scrollEventThrottle={1}
					overScrollMode={'never'}
					alwaysBounceHorizontal={false}
					alwaysBounceVertical={false}
					bounces={false}
					ref={timeSlotScrollViewRef}
					onScroll={handleOnTimeSlotScrollViewRef}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ flexGrow:1, paddingTop:7, paddingBottom:7 }}>
					{
						dishAndFoldSlotList.map((item, index)=> {
							return (
								<Box
									paddingStart={'r'}
									key={item.id}
									justifyContent={'space-between'}
									height={DeviceHelper.calculateHeightRatio(80)}>
									<Box bottom={5} minWidth={DeviceHelper.calculateWidthRatio(36)}>
										<Text variant={'r12'}>{item.slotStartStr()}</Text>
									</Box>
									{
										index === dishAndFoldSlotList.size - 1
										&&
										<Box minWidth={DeviceHelper.calculateWidthRatio(34)}>
											<Text variant={'r12'}>{item.slotEndStr()}</Text>
										</Box>
									}
								</Box>
							);
						})
					}
				</ScrollView>
			</Box>
			<ScrollView
				horizontal={true}
				nestedScrollEnabled={true}
				contentContainerStyle={{ flexGrow:1 }}
				showsHorizontalScrollIndicator={false}>
				<Box>
					<ScrollView
						scrollEventThrottle={1}
						overScrollMode={'never'}
						alwaysBounceHorizontal={false}
						alwaysBounceVertical={false}
						bounces={false}
						ref={eventsScrollViewRef}
						onScroll={handleOnEventlotScrollViewRef}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ flexGrow:1, paddingTop:7, paddingBottom:7 }}>
						{
							dishAndFoldSlotList.map((item)=> {
								return (
									<Box
										flexDirection={'row'}
										key={item.id}
										height={DeviceHelper.calculateHeightRatio(80)}>
										<Box flex={1} flexDirection={'row'}>
											{
												item.events.map((event)=>
													<DishAndFoldEventBox
														key={event.id}
														event={event}
														dishAndFoldSlot={item}/>)
											}
										</Box>
									</Box>
								);
							})
						}
					</ScrollView>
				</Box>
			</ScrollView>
		</Box>
	);
};
