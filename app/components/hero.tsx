import { Heart } from "./icons"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="relative pb-12 lg:min-h-[810px] z-40">
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{
                    backgroundImage: 'url("/assets/images/hero.jpeg")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
            </div>

            <div className="relative container mx-auto px-0 lg:px-32 pt-32 lg:pt-64">
                <div className="flex items-center justify-center lg:justify-start lg:items-start flex-col gap-8">
                    <h1 className={`text-white font-bebas text-4xl lg:text-[120px] font-bold tracking-wider leading-none text-center lg:text-left`}>
                        VICTORIA
                        <br />
                        BIANCHINI
                    </h1>
                    <Button
                        variant="default"
                        className="bg-subbd-red hover:bg-subbd-red/80 text-white font-bold w-fit rounded-full px-6 py-6 text-lg"
                    >
                        <Heart className="mr-2 h-5 w-5 fill-current" />
                        See More Content
                    </Button>
                </div>
            </div>
        </div>
    )
}

