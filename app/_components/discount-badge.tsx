import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./ui/badge";
import { twMerge } from "tailwind-merge";
import React from "react";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <>
      <Badge className={twMerge("top-2 px-2", className)} {...props}>
        <ArrowDownIcon size={14} />
        {children}%
      </Badge>
    </>
  );
};

export default DiscountBadge;
