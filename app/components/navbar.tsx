import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./mobile-menu"
import { Heart, Logo } from "./icons"
import { SocialLinks } from "./social-links"

interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "SUBBD", href: "/subbd" },
    { label: "AI Features", href: "/ai-features" },
    { label: "AI Creator", href: "/ai-creator" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Team", href: "/team" },
];

export function Navbar() {
    return (
        <div className="fixed top-5 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="my-2 rounded-full lg:bg-white lg:bg-opacity-10 backdrop-blur-sm">
                    <nav className="flex items-center justify-between px-8 py-0">
                        <div className="lg:hidden">
                            <MobileMenu />
                        </div>

                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center gap-2">
                                <Logo width={80} height={80} />
                            </Link>

                            <div className="hidden lg:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link key={link.label} href={link.href} className="text-white/80 text-md font-bold hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-6">
                            <SocialLinks variant="header" />
                            <Button
                                size="lg"
                                className="bg-subbd-red hover:bg-subbd-red/80 text-white text-md font-bold rounded-full px-6"
                            >
                                <Heart className="h-4 w-4 fill-white" />
                                Join SUBBD
                            </Button>
                        </div>

                        <div className="w-10 lg:hidden" />
                    </nav>
                </div>
            </div>
        </div>
    )
}

