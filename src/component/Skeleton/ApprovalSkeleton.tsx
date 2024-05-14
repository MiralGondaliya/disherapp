import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Box} from "@/component";

export const ApprovalSkeleton:React.FC = () =>{
    return (
        <Box
            style={{
                backgroundColor:"rgba(255,255,255,0.8)"
            }}
            borderRadius={10}
            marginHorizontal={'r'}
            marginTop={'sr'}
            padding={"r"}
            overflow={"hidden"}
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
                                flex={0.9}
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
                            height={25}
                            width={'70%'}
                            borderRadius={4}
                            marginTop={10}
                        />
                        <SkeletonPlaceholder.Item
                            height={40}
                            borderRadius={4}
                            marginTop={10}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </Box>
        </Box>
    );
};
