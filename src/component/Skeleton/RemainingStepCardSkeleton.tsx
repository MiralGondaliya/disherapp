import React from 'react';
import { Box } from '@/component';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { DeviceHelper } from '@/helper/DeviceHelper';

export const RemainingStepCardSkeleton:React.FC = () =>{
	return (
		<Box
			height={DeviceHelper.isIos()
				? (DeviceHelper.height() * 73) / 100
				: (DeviceHelper.height() * 80) / 100
			}
			alignItems={'center'}
			borderRadius={8}
			backgroundColor={'peacockBlue2'}

		>
			<Box>
				<SkeletonPlaceholder
					speed={1000}
					backgroundColor={'rgba(255,255,255,0.78)'}
					highlightColor={'rgba(200,255,255,1)'}>
					<SkeletonPlaceholder.Item marginTop={20} marginHorizontal={16}>
						<SkeletonPlaceholder.Item
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								flex={1}
								height={80}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>

						<SkeletonPlaceholder.Item
							height={28}
							borderRadius={4}
							marginTop={20}
						/>

						<SkeletonPlaceholder.Item
							marginTop={10}
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								height={30}
								width={'35%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'60%'}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item
							marginTop={10}
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								height={30}
								width={'20%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'40%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'35%'}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>

						<SkeletonPlaceholder.Item
							height={45}
							borderRadius={4}
							marginTop={20}
						/>

						<SkeletonPlaceholder.Item
							height={28}
							borderRadius={4}
							marginTop={20}
						/>

						<SkeletonPlaceholder.Item
							marginTop={10}
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								height={30}
								width={'35%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'60%'}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item
							marginTop={10}
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								height={30}
								width={'20%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'40%'}
								marginEnd={5}
								borderRadius={4}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={'35%'}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>

						<SkeletonPlaceholder.Item
							height={45}
							borderRadius={4}
							marginTop={20}
						/>

					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</Box>
		</Box>
	);
};
