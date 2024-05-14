import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Box} from "@/component";

export const CashBankBalancesSkeleton:React.FC = () =>{
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
