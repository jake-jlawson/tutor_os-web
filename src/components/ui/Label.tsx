"use client"

import { cva } from "class-variance-authority"
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components"
import { cn } from "@/lib/utils"

const labelVariants = cva([
  "text-sm font-medium leading-none",
  "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
  "group-data-[invalid]:text-destructive",
])

export function Label({ className, ...props }: AriaLabelProps) {
  return <AriaLabel className={cn(labelVariants(), className)} {...props} />
}