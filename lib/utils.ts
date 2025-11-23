import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging Tailwind CSS classes with proper conflict resolution.
 *
 * Combines clsx for conditional class joining with tailwind-merge for
 * intelligent Tailwind class conflict resolution (e.g., "px-2 px-4" becomes "px-4").
 *
 * @param inputs - Class values to merge (strings, arrays, objects)
 * @returns Merged class string with conflicts resolved
 *
 * @example
 * cn("px-2 py-1", "px-4") // returns "py-1 px-4"
 * cn("text-red-500", isActive && "text-blue-500") // conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
