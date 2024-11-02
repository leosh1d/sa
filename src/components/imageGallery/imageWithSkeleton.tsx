import { useState } from 'react';
import Image, {ImageProps} from 'next/image';
import {  Skeleton } from '@chakra-ui/react';


const ImageWithSkeleton: React.FC<ImageProps> = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (<>

            {isLoading && (
                <Skeleton height="100%" width="100%" />
            )}
            <Image
                {...props}
                onLoad={() => setIsLoading(false)}
            />
        </>

    );
};

export default ImageWithSkeleton;