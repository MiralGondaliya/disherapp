import React, { useMemo } from 'react';
import { Box, Text } from '@/component';
import { Svg, SvgIcon } from '@/assets/SvgIcon';
import { translation } from '@/localisation/localisation';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';
import { DishAndFoldEvent, DishAndFoldSlot } from '@/model';

export interface DishAndFoldEventBoxProps {
	event : DishAndFoldEvent
	dishAndFoldSlot: DishAndFoldSlot
}

export const DishAndFoldEventBox : React.FC<DishAndFoldEventBoxProps> = (
	{ event, dishAndFoldSlot } : DishAndFoldEventBoxProps,
)=> {
	const { colors } = useTheme<Theme>();

	const isConfirmed = useMemo(()=> {
		return event.confirmed == 1;
	}, [event.confirmed]);

	const iconText = (iconName:Svg, label:string)=> {
		return (
			<Box flexDirection={'row'} alignItems={'center'}>
				<SvgIcon
					fill={!isConfirmed ? colors.beige : colors.candyCorn}
					height={DeviceHelper.calculateWidthRatio(7)}
					width={DeviceHelper.calculateWidthRatio(7)}
					name={iconName}/>
				<Box marginStart={'ss'}>
					<Text variant={'r8'}>{label}</Text>
				</Box>
			</Box>
		);
	};

	const isEventStartTimeIsBeforeSlotTime = useMemo(()=> {
		return event.startTime.isBefore(dishAndFoldSlot.slotStartTime);
	}, [dishAndFoldSlot.slotStartTime, event.startTime]);

	const isEventEndTimeIsAfterSlotEndTime = useMemo(()=> {
		return event.endTime.isAfter(dishAndFoldSlot.slotEndTime);
	}, [dishAndFoldSlot.slotEndTime, event.endTime]);

	/**
	 * TOP - radius of card
	 */
	const topRadius = useMemo(()=> {
		if (isEventStartTimeIsBeforeSlotTime) {
			return 0;
		}
		return  12;
	}, [isEventStartTimeIsBeforeSlotTime]);

	/**
	 * BOTTOM - radius of card
	 */
	const bottomRadius = useMemo(()=> {
		if (isEventEndTimeIsAfterSlotEndTime) {
			return 0;
		}
		return 12;
	}, [isEventEndTimeIsAfterSlotEndTime]);

	/**
	 * Height of the card
	 */

	const cardHeight = useMemo(()=> {
		if (isEventEndTimeIsAfterSlotEndTime) {
			return 80;
		}
		return 74;
	}, [isEventEndTimeIsAfterSlotEndTime]);


	return (
		<Box
			style={{
				marginEnd:7,
			}}
			width={DeviceHelper.calculateWidthRatio(130)}
			height={DeviceHelper.calculateHeightRatio(80)}>
			<Box
				backgroundColor={!isConfirmed ? 'beige' : 'candyCorn'}
				padding={'s'}
				borderTopLeftRadius={topRadius}
				borderTopRightRadius={topRadius}
				borderBottomLeftRadius={bottomRadius}
				borderBottomRightRadius={bottomRadius}
				borderStyle={!isConfirmed ? 'dashed' : 'solid'}
				borderWidth={1}
				borderColor={isConfirmed ? 'transparent' : 'cloud'}
				width={DeviceHelper.calculateWidthRatio(130)}
				height={DeviceHelper.calculateHeightRatio(cardHeight)}>
				<Box flex={1}>
					<Text variant={'sm10'}>{event.title}</Text>
					<Box marginTop={'ss'} flexDirection={'row'} justifyContent={'space-between'}>
						{iconText('LocationPin', `${event.miles} ${translation.homeMilesFromYou}`)}
						{iconText('Rating', `${event.rating}`)}
					</Box>
					<Box  marginTop={'ss'} flexDirection={'row'} justifyContent={'space-between'}>
						{iconText('ClockIcon', `${event.dateStringFromTo()}`)}
						{iconText('DollarIcon', `${event.amount}`)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
