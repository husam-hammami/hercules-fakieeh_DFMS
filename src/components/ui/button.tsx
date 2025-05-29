
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 border border-cyan-400/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        destructive: "bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:scale-105 active:scale-95 border border-red-400/30",
        outline: "border-2 border-cyan-400/40 bg-slate-900/60 backdrop-blur-sm text-cyan-300 hover:bg-cyan-950/50 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 glass-effect",
        secondary: "bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 text-white shadow-lg hover:shadow-xl hover:shadow-slate-500/25 hover:scale-105 active:scale-95 border border-slate-400/30",
        ghost: "text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 hover:scale-105 active:scale-95 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20",
        link: "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300 transition-colors hover:drop-shadow-lg",
        creative: "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 border border-slate-600/50 glass-effect neon-border relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:via-transparent before:to-orange-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        accent: "bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-600 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 active:scale-95 border border-cyan-400/30 pulse-glow animate-pulse hover:animate-none"
      },
      size: {
        default: "h-12 px-6 py-3 rounded-xl text-sm font-semibold",
        sm: "h-10 rounded-lg px-4 text-xs font-medium",
        lg: "h-14 rounded-xl px-8 text-base font-bold",
        icon: "h-12 w-12 rounded-xl",
        xl: "h-16 rounded-2xl px-10 text-lg font-bold"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
