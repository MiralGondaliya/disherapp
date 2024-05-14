import React from 'react';
import { Box } from '@/component';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { DeviceHelper } from '@/helper/DeviceHelper';

export const AllEntitiesBottomSheetSkeleton:React.FC = ()=>{
	return (
		<Box
			borderRadius={10}
			marginTop={'sr'}
			paddingVertical={'r'}
			overflow={'hidden'}
		>
			<Box
				opacity={0.4}
			>
				<SkeletonPlaceholder
					speed={1000}
					highlightColor={'rgba(200,255,255,1)'}
				>
					<SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item flexDirection={'row'} alignItems={'center'}>
							<SkeletonPlaceholder.Item
								height={DeviceHelper.calculateHeightRatio(34)}
								width={'10%'}
								borderRadius={DeviceHelper.calculateWidthRatio(17)}
							/>
							<SkeletonPlaceholder.Item
								height={25}
								width={'100%'}
								borderRadius={4}
								marginStart={12}
								marginTop={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item flexDirection={'row'} alignItems={'center'} marginTop={12}>
							<SkeletonPlaceholder.Item
								height={DeviceHelper.calculateHeightRatio(34)}
								width={'10%'}
								borderRadius={DeviceHelper.calculateWidthRatio(17)}
							/>
							<SkeletonPlaceholder.Item
								height={25}
								width={'100%'}
								borderRadius={4}
								marginStart={12}
								marginTop={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item flexDirection={'row'} alignItems={'center'} marginTop={12}>
							<SkeletonPlaceholder.Item
								height={DeviceHelper.calculateHeightRatio(34)}
								width={'10%'}
								borderRadius={DeviceHelper.calculateWidthRatio(17)}
							/>
							<SkeletonPlaceholder.Item
								height={25}
								width={'100%'}
								borderRadius={4}
								marginStart={12}
								marginTop={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item flexDirection={'row'} alignItems={'center'} marginTop={12}>
							<SkeletonPlaceholder.Item
								height={DeviceHelper.calculateHeightRatio(34)}
								width={'10%'}
								borderRadius={DeviceHelper.calculateWidthRatio(17)}
							/>
							<SkeletonPlaceholder.Item
								height={25}
								width={'100%'}
								borderRadius={4}
								marginStart={12}
								marginTop={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item flexDirection={'row'} alignItems={'center'} marginTop={12}>
							<SkeletonPlaceholder.Item
								height={DeviceHelper.calculateHeightRatio(34)}
								width={'10%'}
								borderRadius={DeviceHelper.calculateWidthRatio(17)}
							/>
							<SkeletonPlaceholder.Item
								height={25}
								width={'100%'}
								borderRadius={4}
								marginStart={12}
								marginTop={4}
							/>
						</SkeletonPlaceholder.Item>
					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</Box>
		</Box>
	);
};
