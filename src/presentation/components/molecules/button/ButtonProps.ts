import React from "react";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  title: string,
  color?: string,
  className: string,
  labelSize: "sm" | "md" | "lg";
}