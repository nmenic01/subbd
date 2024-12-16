'use client'

import { ReactNode } from "react"
import Link from "next/link"
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from "@/components/ui/button"
import { Carousel } from '@/components/ui/carousel'
import { Instagram, Telegram, Twitter } from "./icons"

interface Social {
    name: string;
    icon: ReactNode;
    href: string;
    image: string;
}

const socials: Social[] = [
    {
        name: 'Instagram',
        icon: <Instagram className="h-8 w-8 fill-white opacity-70" />,
        href: '#',
        image: '/assets/images/instagram.jpeg',
    },
    {
        name: 'Twitter',
        icon: <Twitter className="h-8 w-8 fill-white opacity-70" />,
        href: '#',
        image: '/assets/images/twitter.jpeg',
    },
    {
        name: 'Telegram',
        icon: <Telegram className="h-8 w-8 fill-white opacity-70" />,
        href: '#',
        image: '/assets/images/telegram.jpeg',
    },
];

export default function SocialSection() {
    const isMobile = useMediaQuery("(max-width: 768px)")

    const SocialCard = ({ social }: { social: typeof socials[number] }) => (
        <Link
            href={social.href}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
        >
            <div
                className="absolute -inset-5 bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${social.image})` }}
            />

            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

            <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
                <div className="rounded-full bg-white bg-opacity-20 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                </div>
                <h3 className="text-white text-2xl font-semibold">
                    {social.name}
                </h3>
                <Button
                    variant="outline"
                    className="border-white/20 text-white hover:text-black font-bold bg-transparent hover:bg-white backdrop-blur-sm rounded-full"
                >
                    Check profile
                </Button>
            </div>
        </Link>
    )

    return (
        <section className="bg-background py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Follow our socials
                    </h2>
                    <p className="text-gray-400 text-base">
                        Check our profiles to stay up to date with the latest news from
                        <br className="hidden sm:block" /> the SUBBD world.
                    </p>
                </div>

                {isMobile ? (
                    <Carousel>
                        {socials.map((social) => (
                            <div key={social.name} className="flex-[0_0_100%] aspect-[4/5]">
                                <SocialCard social={social} />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {socials.map((social) => (
                            <SocialCard key={social.name} social={social} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

