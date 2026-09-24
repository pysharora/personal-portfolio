import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border font-mono text-xs font-semibold uppercase tracking-[0.04em] transition-[transform,box-shadow,background-color,color] duration-150 outline-none focus-visible:ring-3 focus-visible:ring-[var(--pink)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--pink)] hover:text-[#17191d] hover:shadow-[3px_3px_0_var(--green)]",
        secondary:
          "border-[var(--line-strong)] bg-[var(--paper)] text-[var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--green)] hover:text-[#17191d] hover:shadow-[3px_3px_0_var(--pink)]",
        ghost:
          "border-transparent bg-transparent text-[var(--ink)] hover:bg-[var(--accent-soft)]",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-[0.62rem]",
        lg: "h-12 px-5 text-sm",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  asChild = false,
  className,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
};

export { Button };
