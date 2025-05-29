

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-600 via-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 border border-cyan-500/30",
        destructive: "bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white shadow-lg shadow-red-500/20 hover:from-red-500 hover:via-red-500 hover:to-red-600 hover:shadow-xl hover:shadow-red-500/25 hover:scale-105 active:scale-95 border border-red-500/30",
        outline: "border-2 border-zinc-600/50 bg-zinc-800/70 backdrop-blur-sm text-zinc-200 hover:bg-zinc-700/60 hover:text-zinc-100 hover:border-zinc-500/60 hover:shadow-lg hover:shadow-zinc-500/15 hover:scale-105 active:scale-95",
        secondary: "bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-lg shadow-orange-500/20 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 active:scale-95 border border-orange-500/30",
        ghost: "text-zinc-300 hover:bg-zinc-800/40 hover:text-zinc-100 hover:scale-105 active:scale-95 backdrop-blur-sm",
        link: "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300 transition-colors",
        creative: "bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-900/40 hover:from-zinc-600 hover:via-zinc-500 hover:to-zinc-600 hover:shadow-xl hover:shadow-zinc-900/50 hover:scale-105 active:scale-95 border border-zinc-500/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/8 before:via-transparent before:to-purple-500/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        accent: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 border border-purple-500/30 animate-pulse hover:animate-none"
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-lg",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base font-semibold",
        icon: "h-11 w-11 rounded-lg",
        xl: "h-14 rounded-xl px-10 text-lg font-bold"
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

