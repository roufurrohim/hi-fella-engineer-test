"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const ChevronRightIcon: React.FC<IconSvgProps> = ({ color }) => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_969)">
                <path d="M5.53499 16.2575C5.90249 16.625 6.49499 16.625 6.86249 16.2575L13.095 10.025C13.3875 9.73251 13.3875 9.26001 13.095 8.96751L6.86249 2.73501C6.49499 2.36751 5.90249 2.36751 5.53499 2.73501C5.16749 3.10251 5.16749 3.69501 5.53499 4.06251L10.965 9.50001L5.52749 14.9375C5.16749 15.2975 5.16749 15.8975 5.53499 16.2575Z" fill={color ?? "#323232"} />
            </g>
            <defs>
                <clipPath id="clip0_1_969">
                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export const ChevronRightIcon2: React.FC<IconSvgProps> = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
