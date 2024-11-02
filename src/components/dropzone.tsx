import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    Box,
    Text,
    Stack,
} from '@chakra-ui/react';

interface DropzoneProps {
    onDrop: (acceptedFiles: File[]) => void;
}

export const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
    const onDropAccepted = useCallback(
        (acceptedFiles: File[]) => {
            onDrop(acceptedFiles);
        },
        [onDrop]
    );

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive,
        isDragReject,
    } = useDropzone({ onDrop: onDropAccepted });

    let dropText = 'выбери файл';

    if (acceptedFiles.length > 0) {
        dropText = `${acceptedFiles[0].name}`;
    } else if (isDragReject) {
        dropText = 'не поддерживаем такой тип(';
    } else if (isDragActive) {
        dropText = 'дропни сюда';
    }

    return (
        <Box
            p={4}
            borderWidth={4}
            borderRadius="md"
            borderStyle="dashed"
            bg={acceptedFiles.length > 0 ? 'green.50' :  'transparent'}
            borderColor={acceptedFiles.length > 0 ? 'green.400' : isDragReject ? 'red.400' : 'scumbria'}
            position="relative"
            transition="border .24s ease-in-out"
            cursor='pointer'
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <Stack align="center" spacing={3} pointerEvents='none'>
                {/*<Icon as={FiUpload} w={8} h={8} />*/}
                <Text fontSize="lg" color={acceptedFiles.length > 0 ? 'green.400' :'zhgut.600'}>
                    {dropText}
                </Text>
            </Stack>
        </Box>
    );
};

