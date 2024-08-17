"use client"
import {Carousel} from "../carousel";
import {EventCardSmall} from "./eventCard";

export const EventCarousel = ()=> {
    return <Carousel items={[
        <EventCardSmall key={1}  eventType={'posvyat'} title={'посвят 23'} description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'} href={'/posvyat'}/>,
        <EventCardSmall key={2} eventType={'posvyat'} title={'посвят 24'} description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'} href={'/posvyat'}/>,
        <EventCardSmall  key={3} eventType={'posvyat'} title={'посвят 25'} description={'есть над чем задуматься: акционеры крупнейших компаний, инициированные исключительно синтетически, преданы социально-демократической анафеме.'} href={'/posvyat'}/>
    ]}/>
}