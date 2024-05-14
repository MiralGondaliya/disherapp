import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Box } from '@/component';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';

export const TotalAssetsSkeleton:React.FC = () =>{
	const { colors } = useTheme<Theme>();
	return (
		<Box
			borderRadius={10}
			marginTop={'sr'}
			paddingVertical={'r'}
			marginHorizontal={'r'}
			marginBottom={'sr'}
			overflow={'hidden'}
		>
			<Box
				opacity={0.4}
			>
				<SkeletonPlaceholder
					speed={1000}
					highlightColor={'rgba(200,255,255,1)'}>
					<SkeletonPlaceholder.Item>
						<SkeletonPlaceholder.Item
							flexDirection={'row'}
							alignItems={'center'}
						>
							<SkeletonPlaceholder.Item
								flex={0.5}
								height={20}
								marginEnd={5}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>

						<SkeletonPlaceholder.Item
							height={40}
							borderRadius={4}
							marginTop={10}
						/>
						<SkeletonPlaceholder.Item
							height={20}
							borderRadius={4}
							marginTop={10}
						/>
						<SkeletonPlaceholder.Item
							flexDirection={'row'}
							alignItems={'center'}
							marginTop={20}
						>
							<SkeletonPlaceholder.Item
								height={30}
								width={30}
								marginEnd={5}
								borderRadius={20}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={30}
								marginEnd={5}
								borderRadius={20}
							/>
							<SkeletonPlaceholder.Item
								height={30}
								width={30}
								marginEnd={5}
								borderRadius={20}
							/>
						</SkeletonPlaceholder.Item>
					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</Box>
		</Box>
	);
};
