"use client"
import * as VKID from '@vkid/sdk';
import {useEffect, useRef} from "react";
import {Box} from "@chakra-ui/react";

export const VkIdOneTap = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        // Создание экземпляра кнопки.
        const oneTap = new VKID.OneTap();

        // Получение контейнера
        const container = ref.current

        // Проверка наличия кнопки в разметке.
        if (container) {
            container.innerHTML = "";

            // TODO: добавить обработчик ошибок

            oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS, showAlternativeLogin: false})
                // .on(VKID.WidgetEvents.ERROR, ()=> {}); // handleError — какой-либо обработчик ошибки.
        }

    }, []);
    return <Box ref={ref}/>
}