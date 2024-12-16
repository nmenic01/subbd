import Link from "next/link"
import { SocialLinks } from "./social-links"
import { Logo, Heart } from "./icons"

export function Footer() {
    return (
        <footer className="text-gray-400 py-8 px-6 z-0">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo width={100} height={100} />
                        </Link>

                        <div className="flex text-center justify-center items-center gap-2 lg:ml-32">
                            <Heart className="h-5 w-5 fill-subbd-red opacity-70" />
                            <span className="text-white opacity-50 font-bold">by Creators for Creators</span>
                        </div>

                        <SocialLinks variant="footer" />
                    </div>

                    <div className="text-center text-white opacity-30 text-sm">
                        Copyright © {new Date().getFullYear()} SUBBD. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>

    )
}

