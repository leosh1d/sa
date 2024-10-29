import { useState } from 'react';
import Image, {ImageProps} from 'next/image';
import { Box, Skeleton } from '@chakra-ui/react';


const ImageWithSkeleton: React.FC<ImageProps> = ({ src, alt, width, height }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Box position="relative" width={width} height={height}>
            {isLoading && (
                <Skeleton height="100%" width="100%" startColor="gray.300" endColor="gray.500" />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoadingComplete={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </Box>
    );
};

export default ImageWithSkeleton;