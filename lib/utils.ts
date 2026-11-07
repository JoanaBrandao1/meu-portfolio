import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Junta classes (aceita textos vazios, condições e objetos) e resolve conflitos do Tailwind.
// Os componentes de components/ui dependem disso.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
