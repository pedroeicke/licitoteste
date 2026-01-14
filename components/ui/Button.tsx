import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ComponentProps<typeof Link> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outline";
}

export default function Button({ href, children, className = "", variant = "primary", ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105";

    const variants = {
        primary: "bg-gradient-primary text-slate-900 shadow-lg hover:shadow-cyan-400/30",
        outline: "border-2 border-slate-200 text-slate-700 hover:border-primary-cyan hover:text-primary-cyan bg-transparent",
    };

    return (
        <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
            {variant === "primary" && <ArrowRight className="w-4 h-4" />}
        </Link>
    );
}
