import {Button, Flex, Link} from "@chakra-ui/react";

interface SocialMediaLinkProps {
    href: string;
    icon: React.ReactNode;
    buttonText: string;
}

export const SocialMediaLink = ({href, icon, buttonText}: SocialMediaLinkProps)=> {
    return <Flex justifyContent={`space-between`} w={`full`} px={`1.25rem`} py={`0.75rem`} alignItems={`center`}>
        {icon}
        <Link href={href}>
            <Button variant={`solid`} colorScheme={`deepBlue`} color={`white`}>{buttonText}</Button>
        </Link>
    </Flex>
}