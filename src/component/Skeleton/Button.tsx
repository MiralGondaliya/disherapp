import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Box } from "@/component";
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';

export const ButtonSkeleton: React.FC = () => {
    const { colors } = useTheme<Theme>();

    return (
        <Box
            style={{
                backgroundColor: '#fff',
                width: '50%',
            }}
            borderRadius={10}
            overflow={"hidden"}
        >
            <Box
                opacity={0.4}
            >
                <SkeletonPlaceholder
                    speed={1000}
                    highlightColor={'rgba(200,255,255,1)'}
                >
                    <SkeletonPlaceholder.Item>
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
