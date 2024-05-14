import React from 'react';
import { Box } from '@/component';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const InviteTeamSkeleton:React.FC = () =>{
	return (
		<Box
			borderRadius={10}
			marginTop={'sr'}
			padding={'r'}
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
								flex={1}
								height={40}
								borderRadius={4}
							/>
						</SkeletonPlaceholder.Item>

						<SkeletonPlaceholder.Item
							height={20}
							width={'60%'}
							marginTop={10}
							borderRadius={4}
						/>

					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</Box>
		</Box>
	);
};
