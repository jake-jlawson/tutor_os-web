"use client"

import {
  Input as AriaInput,
  type InputProps as AriaInputProps,
  composeRenderProps,
} from "react-aria-components"
import { cn } from "@/lib/utils"

export function Input({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          "data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2",
          "focus-visible:outline-none",
          className
        )
      )}
      {...props}
    />
  )
}