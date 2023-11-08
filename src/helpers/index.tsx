import {cx} from "class-variance-authority";
import {ClassValue} from "class-variance-authority/dist/types";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(cx(inputs));
}