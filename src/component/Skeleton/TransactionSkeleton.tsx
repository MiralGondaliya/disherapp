import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Box } from "@/component";
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';

export const TransactionSkeleton: React.FC = () => {
    const { colors } = useTheme<Theme>();

    return (
        <Box
            style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: colors.lightGray,
                width:'100%'
            }}
            borderRadius={10}
            marginHorizontal={'r'}
            // marginTop={'sr'}
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
                            justifyContent={'space-between'}
                        >
                            <SkeletonPlaceholder.Item
                                flex={0.5}
                                height={20}
                                marginEnd={5}
                                borderRadius={4}
                            />

                            <SkeletonPlaceholder.Item
                                flex={0.2}
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
                            height={90}
                            borderRadius={4}
                            marginTop={10}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </Box>
        </Box>
    );
};
