'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Heart, Logo } from "./icons"
import { useState } from 'react'
import { SocialLinks } from './social-links'
import { navLinks } from './navbar'

export function MobileMenu() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button size="icon" className="lg:hidden bg-white rounded-full p-4 bg-opacity-20 hover:bg-opacity-30">
                    <Menu className="h-8 w-8 text-white" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full border-none bg-black p-0">
                <div className="flex min-h-screen flex-col">
                    <div className="flex items-center justify-between p-4 text-white">
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                            <Logo width={80} height={80} />
                        </Link>
                        <div className="w-10" />
                    </div>

                    <nav className="flex flex-1 flex-col items-center gap-6 p-8 text-white">
                        {navLinks.map(({ label, href }: { label: string, href: string }) => (
                            <Link href={href} key={label} className="text-lg" onClick={() => setOpen(false)}>
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center gap-6 p-8 mb-24">
                        <SocialLinks variant="header" />
                        <Button
                            size="lg"
                            className="bg-subbd-red hover:bg-subbd-red/80 text-white text-md font-bold rounded-full px-6"
                        >
                            <Heart className="h-4 w-4 fill-white" />
                            Join SUBBD
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

