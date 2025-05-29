
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-500 hover:to-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 border border-cyan-500/20",
        destructive: "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25 hover:from-red-500 hover:to-red-600 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 active:scale-95 border border-red-500/20",
        outline: "border-2 border-cyan-500/40 bg-slate-800/60 backdrop-blur-sm text-cyan-300 hover:bg-cyan-950/50 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95",
        secondary: "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-orange-600 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 border border-orange-500/20",
        ghost: "text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 hover:scale-105 active:scale-95 backdrop-blur-sm",
        link: "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300 transition-colors",
        creative: "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg shadow-slate-900/50 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 hover:shadow-xl hover:shadow-slate-900/60 hover:scale-105 active:scale-95 border border-slate-500/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:via-transparent before:to-orange-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        accent: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95 border border-purple-500/20 animate-pulse hover:animate-none"
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
