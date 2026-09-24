import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center border px-2 py-1 font-mono text-[0.61rem] uppercase leading-none",
  {
    variants: {
      variant: {
        default: "border-current bg-transparent text-current",
        accent:
          "border-[var(--line-strong)] bg-[var(--paper-strong)] text-[var(--ink)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

const Badge = ({
  asChild = false,
  className,
  variant,
  ...props
}: BadgeProps) => {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Badge };
