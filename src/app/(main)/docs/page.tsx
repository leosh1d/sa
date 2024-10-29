'use client'
import {Container, VStack, Text, Heading, UnorderedList, ListItem, Link} from "@chakra-ui/react";
import NextLink from 'next/link'

export default function Docs() {
    return (
        <Container maxW='container.md' minH='100vh'>
            <VStack w='full' spacing={8}>
                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>Полное фирменное наименование, ИНН, юридический и фактический адреса, телефон
                        и адрес электронной почты организации, осуществляющей продажу товаров (работ, услуг)</Heading>
                    <Text> полное фирменное наименование: “Студенческий актив Бизнес-информатики НИУ ВШЭ”</Text>
                    <Text> ИНН: -</Text>
                    <Text> Фактический адрес: 119049, Москва, улица Шаболовка, 26, стр. 1</Text>
                    <Text> телефон: <Link as={NextLink} href='tel:+7(910) 775-12-82'>+7(910) 775-12-82</Link></Text>
                    <Text>
                        адрес электронной почты организации: <Link as={NextLink}
                                                                   href='malto:studaktivbi@gmail.com'>studaktivbi@gmail.com</Link>
                    </Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>данные о Предприятии (наименование Предприятия/ ФИО индивидуального
                        предпринимателя/Самозанятого лица, ИНН, ОГРН/ОГРНИП, контакты</Heading>
                    <Text> ФИО самозанятого лица: Сластионов Никита Андреевич</Text>
                    <Text> ИНН: 332890087148</Text>
                    <Text> ОГРНИП: - (у самозанятых нет)</Text>
                    <Text> телефон: <Link as={NextLink}  href='tel:+7(910) 775-12-82'>+7(910) 775-12-82</Link></Text>
                    <Text>
                        адрес электронной почты организации: <Link as={NextLink}
                                                                   href='malto:studaktivbi@gmail.com'>studaktivbi@gmail.com</Link>
                    </Text>
                    <Text>контакты:</Text>
                    <UnorderedList>
                        <ListItem>телефон: <Link as={NextLink} href='tel:+7(910) 775-12-82'>+7(910)
                            775-12-82</Link></ListItem>
                        <ListItem>почта: <Link as={NextLink}
                                               href='malto:n_slastionov@mail.ru'>n_slastionov@mail.ru</Link></ListItem>
                        <ListItem>вк: <Link as={NextLink}
                                            href='https://vk.com/slastionov'>https://vk.com/slastionov</Link></ListItem>
                        <ListItem>тг: <Link as={NextLink} href='https://t.me/slastionov'>https://t.me/slastionov</Link></ListItem>
                    </UnorderedList>
                </VStack>
                <Link href="/docs/sales" textDecoration='underline'  w='full' as={NextLink}>
                    <Heading fontSize='md'>Договор розничной купли-продажи с любым лицом, выразившим намерение
                        приобрести товар на условиях оферты (лицензионного соглашения)</Heading>
                </Link>

                <Link href="/docs/privacy" textDecoration='underline' w='full' as={NextLink}>
                    <Heading fontSize='md'>Политика конфиденциальности (порядок обработки персональных
                        данных);</Heading>
                </Link>
                <VStack w='full'>
                    <Heading w='full' fontSize='xl'>Cогласие на обработку персональных данных</Heading>
                    <Text>Персональные данные пользователей веб-сайта ___ (далее – «Сайт»), используемые и хранящиеся на
                        Сайте, регулируются Федеральным законом от 27.07.2006 N 152-ФЗ (ред. от 21.07.2014) «О
                        персональных данных». Пользователь предоставляет свои персональные данные в целях получения
                        консультационных услуг, для получения рекламно-информационных материалов, в том числе
                        распространяемых по сетям электросвязи путем осуществления прямых контактов с помощью средств
                        связи и/или иным образом.

                        ___ (ФИО индивидуального предпринимателя), адрес: ___ (Адрес индивидуального предпринимателя)
                        (далее – «Индивидуальный предприниматель») гарантирует конфиденциальность персональных данных
                        пользователей Сайта.
                    </Text>
                    <Heading w='full' fontSize='md'>Под понятием «конфиденциальность» понимается следующее:</Heading>
                    <UnorderedList>
                        <ListItem>строгое и ясное ограничение круга лиц, имеющих доступ к персональным данным
                            пользователей Сайта;</ListItem>
                        <ListItem>индивидуальный предприниматель гарантирует использование персональных данных только в
                            целях, указанных в настоящем согласии;
                        </ListItem>
                        <ListItem>индивидуальный предприниматель не вправе передавать конфиденциальную информацию без
                            согласия пользователя Сайта;</ListItem>
                        <ListItem>индивидуальный предприниматель обязан принимать меры защиты от несанкционированного
                            доступа к персональным данным извне.</ListItem>
                    </UnorderedList>
                    <Text>Заполняя Форму обратной связи (далее – «Форма»), пользователь дает согласие Индивидуальному
                        предпринимателю на хранение и обработку следующих персональных данных: фамилию, имя, отчество,
                        адрес электронной почты, контактные телефоны и другую предоставленную пользователем
                        информацию.</Text>
                    <Text>Согласие на обработку персональных данных предоставляется с момента заполнения Формы обратной
                        связи и действительно в течение 5 (Пяти) лет, либо до его письменного отзыва. Письменный отзыв
                        должен быть предоставлен лично субъектом персональных данных по адресу (месту нахождения)
                        Индивидуального предпринимателя, либо направлен почтовым отправлением по адресу (месту
                        нахождения) Индивидуального предпринимателя. В случае направления отзыва почтовым направлением
                        подпись субъекта персональных данных на отзыве должна быть нотариально удостоверена.</Text>
                    <Text> <b>я согласен</b> на обработку и хранение моих персональных данных, указанных мною в Форме
                        обратной связи в соответствии с условиями настоящего согласия на обработку персональных данных.</Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>Полное описание потребительских характеристик продаваемых товаров/оказываемых
                        услуг/работ</Heading>
                    <Text whiteSpace='pre-line'>
                        {"Проведение мероприятий для студентов. В рамках нашей услуги мы предлагаем полный спектр услуг, начиная с выбора подходящей площадки и заканчивая ее оформлением в соответствии с тематикой мероприятия.\n" +
                            "Основной целью наших мероприятий является создание условий для тимбилдинга среди студентов, возможность интересно провести вечер, получить незабываемые эмоции и поучаствовать в новом формате общения. Мы стремимся сделать каждое мероприятие не только увлекательным, но и полезным для формирования дружеских связей и командного духа. \n" +
                            "В спектр услуг на мероприятии входит проведение квестов на знакомство, различные типы викторин, развлекательная составляющая программы, например, танцы, песни, а также дискотека в качестве яркого завершения вечера."
                        }</Text>
                </VStack>
                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>Способ оплаты товаров (работ, услуг)</Heading>
                    <Text>
                        Оплата услуг возможна с использованием торгового интернет-эквайринга и системы быстрых платежей
                    </Text>
                    <Text>1) Система быстрых платежей (СБП) — это система, позволяющая производить мгновенные переводы
                        между пользователями различных банков с использованием номер телефона или QR-кода. Оплата
                        возможна с использованием мобильных банковских приложений, которые поддерживают функцию
                        СБП.</Text>
                    <Text>2) Торговый интернет-эквайринг — это услуга, предоставляемая финансовыми учреждениями,
                        позволяющая интернет-магазинам принимать платежи от клиентов через кредитные и дебетовые карты.
                        Оплата осуществляется с использованием кредитных и дебетовых карт. Услуга предоставляется ПАО
                        «МТС-Банк»</Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>Порядок проведения оплаты по Банковским картам;</Heading>
                    <Text>
                        <b>1. выбор мероприятия:</b> Из доступных мероприятий клиент выбирает заинтересовавшее его.
                    </Text>
                    <Text><b>2. регистрация:</b> Нажимает на кнопку “Войти в аккаунт” и заполняет необходимые данные,
                        такие как
                        имя, контактная информация.
                    </Text>
                    <Text><b>3. оплата:</b> После выполнения вход в аккаунт клиент автоматически перенаправляется на
                        страницу
                        оплаты. Здесь нужно будет ввести данные вашей банковской карты:
                    </Text>
                    <UnorderedList>
                        <ListItem>Номер карты</ListItem>
                        <ListItem>Срок действия
                        </ListItem>
                        <ListItem>CVV-код</ListItem>
                        <ListItem>Имя</ListItem>
                    </UnorderedList>
                    <Text><b>4. безопасная передача данных:</b> введенные данные передаются через защищенное соединение,
                        что гарантирует безопасность вашей информации.
                    </Text>
                    <Text><b>5. аутентификация и авторизация:</b> Банк проверяет данные карты и наличие достаточных
                        средств. В некоторых случаях может потребоваться дополнительная аутентификация (например, ввод
                        кода из SMS).

                    </Text>
                    <Text><b>6. подтверждение оплаты</b> После успешной авторизации клиент получает уведомление о том,
                        что оплата прошла успешно.
                    </Text>
                    <Text><b>7. подтверждение успешной регистрации:</b> После этого также подтверждается регистрация на
                        мероприятие.

                    </Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>порядок возврата товара/отказа от работ/услуг</Heading>


                    <Text fontWeight='bold'>
                        1. порядок оплаты услуг
                    </Text>
                    <Text>1.1. Оплата за услуги по организации мероприятий осуществляется с использованием банковских
                        карт через онлайн-систему оплаты (онлайн-эквайринг)
                    </Text>
                    <Text>1.2. Держателю карты предоставляется информация о стоимости услуги, способах оплаты, сроках и
                        условиях оказания услуги.
                    </Text>

                    <Text fontWeight='bold'>
                        2. порядок возврата средств

                    </Text>
                    <Text>2.1. В случае отказа заказчика от услуги до её начала, возврат средств обсуждается
                        индивидуально. При согласовании сторон - возврат происходит в полном объеме на ту карту, с
                        которой была произведена оплата.

                    </Text>
                    <Text>2.2. В случае отказа от услуги после её частичного оказания, возврат средств производится в
                        размере, пропорциональном неоказанной части услуги.

                    </Text>
                    <Text>2.3. Возврат средств в случае отмены мероприятия или непредоставления услуги по вине
                        исполнителя осуществляется в полном объеме.
                    </Text>

                    <Text fontWeight='bold'>
                        3. процедура согласования с Банком
                    </Text>
                    <Text>3.1. Вся информация, предоставляемая держателям карт по оплате и возврату средств, должна быть
                        согласована с обслуживающим Банком. Это включает в себя условия, суммы возврата и другие
                        параметры возвратных операций.
                    </Text>
                    <Text>3.2. Для урегулирования вопросов возврата, самозанятый вправе обращаться в Банк за
                        консультацией и уточнением условий возврата средств.
                    </Text>

                    <Text fontWeight='bold'>
                        4. контактная информация
                    </Text>
                    <Text>Для получения дополнительной информации, а также по вопросам, связанным с оплатой или
                        возвратом, держатели карт могут обратиться по контактным данным, указанным выше.
                    </Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>условия доставки товара</Heading>
                    <Text fontWeight='bold'>
                        1. общие положения
                    </Text>
                    <Text>1.1. Настоящие условия регулируют порядок доставки и передачи информационных материалов,
                        оборудования, реквизита и иных предметов, необходимых для проведения организуемых мероприятий.
                    </Text>
                    <Text fontWeight='bold'>
                        2. порядок передачи материалов
                    </Text>
                    <Text>2.1. Доставка реквизита и оборудования, если она предусмотрена условиями оказания услуги,
                        осуществляется в сроки и по адресу, согласованным с заказчиком. </Text>
                    <Text>2.2. Заказчик обязуется принять материалы по указанному адресу и предоставить доступ к месту
                        проведения мероприятия для установки оборудования.</Text>
                    <Text fontWeight='bold'>
                        2. ответственность за доставку
                    </Text>
                    <Text>3.1. Исполнитель несет ответственность за целостность и сохранность доставляемых предметов до
                        момента их передачи заказчику.</Text>
                    <Text>3.2. В случае повреждения или потери оборудования в ходе транспортировки, исполнитель
                        обязуется заменить или компенсировать стоимость ущерба.</Text>
                </VStack>
                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>информация о мерах по обеспечению безопасности Операций с использованием
                        Карт</Heading>
                    <Text fontWeight='bold'>
                        1. защита данных
                    </Text>
                    <Text>Обработка платежей осуществляется через сертифицированные платежные системы, обеспечивающие
                        безопасность данных держателей карт.</Text>
                    <Text>1.2. Индивидуальный предприниматель не хранит и не обрабатывает данные карт клиентов. Все
                        данные передаются через защищенные каналы связи.</Text>

                    <Text fontWeight='bold'>
                        2. обработка операций
                    </Text>
                    <Text>2.1. Все операции с использованием карт проводятся с использованием многофакторной
                        аутентификации для повышения безопасности.</Text>
                    <Text>2.2. При обнаружении подозрительных операций клиенты могут связаться с исполнителем по
                        контактным данным, указанным в начале документа.</Text>

                    <Text fontWeight='bold'>
                        3. меры по предотвращению мошенничества
                    </Text>
                    <Text>3.1. Для защиты от мошенничества применяются средства мониторинга операций и анализа
                        подозрительных транзакций.
                    </Text>
                    <Text>3.2. В случае возникновения проблем или подозрительных операций клиент вправе обратиться в
                        банк для блокировки карты.
                    </Text>
                </VStack>

                <VStack w='full' alignItems='flex-start'>
                    <Heading fontSize='xl'>гарантийные обязательства;</Heading>
                    <Text fontWeight='bold'>
                        1. гарантия качества услуг
                    </Text>
                    <Text>1.1. Исполнитель гарантирует соответствие оказываемых услуг стандартам качества и требованиям заказчика, согласованным перед началом оказания услуг.
                    </Text>
                    <Text fontWeight='bold'>
                        2. обязательства при некачественном оказании услуги
                    </Text>
                    <Text>2.1. В случае обнаружения недостатков, влияющих на качество предоставляемой услуги, исполнитель обязуется устранить их в разумный срок.</Text>
                    <Text>2.2. Если устранение недостатков невозможно, заказчику предоставляется право на возврат части средств, пропорциональной некачественно оказанной части услуги.</Text>
                    <Text fontWeight='bold'>
                        3. cрок действия гарантий
                    </Text>
                    <Text>3.1. Гарантийные обязательства распространяются на услуги в течение срока их проведения и считаются выполненными по завершению мероприятия.
                    </Text>


                </VStack>

            </VStack>
        </Container>

    );
}
