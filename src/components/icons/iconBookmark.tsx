"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const BookmarkIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_42_109)">
                <path d="M17.5 3.5H7.5C6.4 3.5 5.5 4.4 5.5 5.5V21.5L12.5 18.5L19.5 21.5V5.5C19.5 4.4 18.6 3.5 17.5 3.5Z" fill="#323232" />
            </g>
            <defs>
                <clipPath id="clip0_42_109">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};
