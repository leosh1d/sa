'use client'

import {useBoolean, useClipboard, useDisclosure} from "@chakra-ui/hooks";
import {
    Button, FormControl, Heading, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Input, FormLabel,
    Flex,
    Text,
    Box,
    Link, useToast, Checkbox, HStack
} from "@chakra-ui/react";
import {ChangeEventHandler, FormEventHandler, useCallback, useEffect, useState} from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
// import {useClipboard} from '@chakra-ui/react'

import Confetti from 'react-confetti';
import {Dropzone} from "@/components/dropzone";
import NextLink from "next/link";
import {useCommonState} from "@/state/common/commonState";
import {TariffSwitch} from "@/components/events/tariffSwitch";
import {getUserId} from "@/components/auth/getUserId";
import {COST_BASIC, COST_VIP} from "@/consts/app";

export const RegModal = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const {isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess} = useDisclosure()

    const [showConfetti, setShowConfetti] = useBoolean(false)
    const {width, height} = useWindowSize()

    const {onCopy, hasCopied} = useClipboard('2200280670371378')
    // const {onCopy: onCopyPhone, hasCopied: hasCopiedPhone} = useClipboard('+79107751282')


    const name = useCommonState((state) => state.name)

    const [formState, setFormState] = useState({
        fio: name || '',
        social: '',
        phone: '',
    })
    useEffect(() => {
        if (name !== undefined && formState.fio === '') {
            setFormState({...formState, fio: name})
        }
    }, [formState, name]);

    const [isVip, setIsVip] = useBoolean(false)


    const [isLoading, setIsLoading] = useBoolean()
    const [checkFile, setCheckFile] = useState<File | null>(null)

    const toast = useToast()

    const isAuthorized = useCommonState((state)=> state.isAuthorized)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsLoading.on()

        if (!checkFile) {
            toast({
                title: "ошибка!",
                status: 'error',
                description: "заполни поля с файлами",
                isClosable: true,
            })
            setIsLoading.off()

            return
        }

        const formData = new FormData()
        formData.append("check", checkFile)

        formData.append("fio", formState.fio)
        formData.append("social", formState.social)
        formData.append("phone", formState.phone)
        formData.append("isVip", JSON.stringify(isVip.valueOf()))
        formData.append("cost", `${isVip ? COST_VIP : COST_BASIC}`)

        const userId = await getUserId()
        formData.append("token", userId || formState.fio)

        const response = await fetch('/api/event-reg', {
            method: 'POST',
            body: formData
        });

        setIsLoading.off()
        onClose()
        handleConfetti()
        onOpenSuccess()
    };

    const onDropCheck = useCallback((acceptedFiles: File[]) => {
        setCheckFile(acceptedFiles[0])
    }, [])


    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const prop = e.target.name
        setFormState({...formState, [prop]: e.target.value})
    }

    const handleConfetti = () => {
        setShowConfetti.on()
        setTimeout(() => {
            setShowConfetti.off()
        }, 3000)
    }


    return <>
        <Button w='full' variant={`solid`} isDisabled={!isAuthorized} colorScheme={`zhgut`} onClick={onOpen}>{isAuthorized ? 'зарегистрироваться' : 'войди в вк чтобы зарегистрироваться'}</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent maxW='container.md'>
                <ModalHeader>
                    <Heading fontSize='2xl'>регистрация</Heading>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit}>

                        <Flex w='full' pb={4} direction='column' gap={2}>
                            <FormControl isRequired>
                                <FormLabel>фио</FormLabel>
                                <Input name='fio' value={formState.fio} onChange={handleInputChange}/>
                            </FormControl>

                            {/*<FormControl isRequired>*/}
                            {/*    <FormLabel>номер телефона</FormLabel>*/}
                            {/*    <Input name='phone' onChange={handleInputChange}/>*/}
                            {/*</FormControl>*/}
                            <FormControl isRequired>
                                <FormLabel>ссылка на тг</FormLabel>
                                <Input name='social' onChange={handleInputChange}/>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>телефон</FormLabel>
                                <Input name='phone' onChange={handleInputChange}/>
                            </FormControl>

                            {/*<FormControl>*/}
                            {/*    <FormLabel>с кем бы вы хотели жить</FormLabel>*/}
                            {/*    <Input name='living' onChange={handleInputChange}/>*/}
                            {/*</FormControl>*/}

                            <Text>реквизиты для оплаты:</Text>
                            <HStack>
                                <Input readOnly value='2200 2806 7037 1378'/>
                                <Button colorScheme='zhgut' px={12} onClick={onCopy}
                                        isDisabled={hasCopied}>{hasCopied ? 'Скопировано' : 'Скопировать'}</Button>
                            </HStack>
                            <Text textAlign='right'>т-банк, <Link target="_blank" color='lobotomia.500'
                                                                  textDecoration='underline'
                                                                  href='https://vk.com/sovavocado'>никита
                                сластионов</Link></Text>

                            {/*<Text>номер телефона (для сбп)</Text>*/}
                            {/*<HStack>*/}
                            {/*    <Input readOnly value='+7 (910) 775-12-82'/>*/}
                            {/*    <Button colorScheme='zhgut' px={12} onClick={onCopyPhone}*/}
                            {/*            isDisabled={hasCopiedPhone}>{hasCopiedPhone ? 'Скопировано' : 'Скопировать'}</Button>*/}
                            {/*</HStack>*/}

                            <FormControl isRequired>
                                <FormLabel>чек об оплате</FormLabel>

                                <Dropzone onDrop={onDropCheck}/>
                            </FormControl>


                            {/*<FormControl>*/}
                            {/*    <FormLabel>прикрепи расписку или отдай кураторам</FormLabel>*/}

                            {/*    <Dropzone onDrop={onDropDocs}/>*/}

                            {/*</FormControl>*/}


                            {/*<Flex justifyContent='space-between' gap={2} flexWrap='wrap'>*/}
                            {/*    <Link target="_blank" color='lobotomia.500'*/}
                            {/*          textDecoration='underline'*/}
                            {/*          href='https://docs.google.com/document/d/11dBfPsiZemfQxoJTc0p6JcnE-fp7z3p7/edit'>*/}
                            {/*        несовершеннолетние*/}
                            {/*    </Link>*/}
                            {/*    <Link target="_blank" color='lobotomia.500'*/}
                            {/*          textDecoration='underline'*/}
                            {/*          href='https://docs.google.com/document/d/1YJAn4LNiZyR-x3G4LLneV7KeGX5_8vap/edit'>*/}
                            {/*        совершеннолетние*/}
                            {/*    </Link>*/}
                            {/*</Flex>*/}
                            <TariffSwitch isVip={isVip} setIsVip={setIsVip}/>
                            <Flex justifyContent='space-between'>
                                <Text fontSize='xl'>итого:</Text>
                                <Text fontSize='xl'>{isVip ? COST_VIP : COST_BASIC} ₽</Text>
                            </Flex>
                            {/*<Checkbox isRequired colorScheme='zhgut'>соглашаюсь с <Link as={NextLink} href='docs/privacy' textDecoration='underline'>политикой в отношении обработки персональных данных</Link> </Checkbox>*/}
                            <Checkbox isRequired colorScheme='zhgut'>соглашаюсь на <Link as={NextLink}
                                                                                         href='docs/privacy'
                                                                                         textDecoration='underline'>обработку
                                персональных данных</Link> </Checkbox>

                            <Button isLoading={isLoading}     loadingText='Загружаем чек' colorScheme='zhgut' type='submit'
                                    mt={4}>зарегистрироваться</Button>
                        </Flex>

                    </form>

                </ModalBody>
            </ModalContent>
        </Modal>

        <Modal isOpen={isOpenSuccess} onClose={onCloseSuccess}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Heading fontSize='2xl'>ты зарегался!</Heading>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text pb={4}>оплата ждёт подтверждения, статус можно проверить на страничке аккаунта</Text>
                </ModalBody>
                <Box position='fixed' left={0} top={0} zIndex={-1}>
                    <Confetti recycle={showConfetti} width={width} height={height}/>
                </Box>
            </ModalContent>
        </Modal>

    </>
}