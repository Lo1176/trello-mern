import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function combines clsx and tailwind-merge to handle conditional class names
// and merge Tailwind CSS classes intelligently.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
