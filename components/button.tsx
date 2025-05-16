import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
}

export default function Button({ text, variant = "primary", href }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  const styles = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "bg-white text-black",
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <button className={`${base} ${styles[variant]}`}>{text}</button>
      </Link>
    );
  }

  return <button className={`${base} ${styles[variant]}`}>{text}</button>;
}