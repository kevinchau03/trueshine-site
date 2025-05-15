import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({ text, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition";
  const styles = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "bg-white text-black",
  };

  return <button className={`${base} ${styles[variant]}`}>{text}</button>;
}