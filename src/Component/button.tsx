import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva(["transision-colors"], {
  variants: {
    // icons: {
    //   "text-secondary-text",
    //   "border-secondary-border",
    // },
    size: {
      defult: [
        "flex",
        "align-center",
        "justify-center",
        "rounded-md",
        "px-6",
        "py-2",
        "my-2",
        "border-solid",
        "border",
        "text-sm",
      ],
      small: [
        "px-4",
        "py-1",
        "inline",
        "text-xs",
        "rounded-sm",
        "border-solid",
        "border",
        "mx-2",
      ],

      inherate: [
        "w-full",
        "h-[57px]",
        "flex",
        "items-center",
        "border-b-primary-text",
      ],
      icon: [
        "stroke-2",
        "w-8",
        "h-8",
        "rounded-full",
        "p-2",
        "mr-2",
        "flex",
        "items-center",
        "justify-between",
      ],
      fticon: ["mx-2"],
    },
    variant: {
      defult: [
        "bg-secondary-defult",
        "hover:bg-secondary-hover",
        "hover:text-secondary-text-hover",
        "text-secondary-text",
        "group",
        "border-secondary-border",
      ],
      ghost: ["bg-secondary-defult", "text-secondary-text"],
      icon: ["bg-white-500"],
      fticon: ["color-grey-100", " text-gray-400", " stroke-2"],
    },
  },
  defaultVariants: {
    variant: "ghost",
    size: "defult",
  },
});
type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<"button">;
export default function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={twMerge(buttonStyle({ variant, size }), className)}
    ></button>
  );
}
