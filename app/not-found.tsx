import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-12">
            <h1 className="lg:text-6xl text-4xl font-bold text-white/80 text-center items-center justify-center">There's nothing here. 😇</h1>
            <Link href="/" className="text-white/80 lg:text-4xl text-2xl font-bold hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeftIcon className="lg:w-12 lg:h-12 w-8 h-8" />
                Go back to home
            </Link>
        </main>
    );
}
