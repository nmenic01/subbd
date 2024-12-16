import { Instagram, Telegram, Reddit, Twitter, Discord } from "./icons"
import Link from "next/link"

type SocialLinkProps = {
    platforms?: string[];
    variant?: 'header' | 'footer';
};

interface SocialIcon {
    name: string;
    icon: JSX.Element;
    href: string;
}

const socialIcons: SocialIcon[] = [
    { name: 'instagram', icon: <Instagram className="h-5 w-5 fill-white opacity-70" />, href: "https://www.instagram.com/subbdapp/" },
    { name: 'telegram', icon: <Telegram className="h-5 w-5 fill-white opacity-70" />, href: "https://t.me/subbdapp" },
    { name: 'reddit', icon: <Reddit className="h-5 w-5 fill-white opacity-70" />, href: "https://www.reddit.com/r/subbdapp/" },
    { name: 'twitter', icon: <Twitter className="h-5 w-5 fill-white opacity-70" />, href: "https://x.com/subbdapp" },
    { name: 'discord', icon: <Discord className="h-5 w-5 fill-white opacity-70" />, href: "https://discord.gg/subbdapp" },
];

export function SocialLinks({ platforms, variant }: SocialLinkProps) {
    let orderedIcons = socialIcons;

    if (variant === 'header') {
        orderedIcons = [
            socialIcons.find(icon => icon.name === 'telegram'),
            socialIcons.find(icon => icon.name === 'twitter'),
            socialIcons.find(icon => icon.name === 'instagram'),
        ].filter(Boolean) as typeof socialIcons;
    }

    const filteredIcons = platforms && platforms.length > 0
        ? orderedIcons.filter(({ name }) =>
            platforms.includes(name)
        )
        : orderedIcons;

    return (
        <div className="flex items-center gap-4">
            {filteredIcons.map(({ icon, href }: { icon: JSX.Element, href: string }) => (
                <Link href={href} key={href} className="bg-white bg-opacity-20 hover:bg-opacity-10 rounded-full p-2.5">
                    {icon}
                </Link>
            ))}
        </div>
    );
}
