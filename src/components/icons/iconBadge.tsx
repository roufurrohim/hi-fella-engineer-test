"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const BadgeIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_42_51)">
                <path d="M19.7917 1H5.20833C4.0625 1 3.13542 1.9 3.13542 3L3.125 15.93C3.125 16.62 3.48958 17.23 4.04167 17.59L11.9271 22.63C12.2812 22.85 12.7292 22.85 13.0833 22.63L20.9583 17.59C21.5104 17.23 21.875 16.62 21.875 15.93V3C21.875 1.9 20.9375 1 19.7917 1ZM19.0625 7.7L11.1562 15.29C10.75 15.68 10.0938 15.68 9.6875 15.29L5.94792 11.7C5.54167 11.31 5.54167 10.68 5.94792 10.29C6.35417 9.9 7.01042 9.9 7.41667 10.29L10.4167 13.17L17.5833 6.29C17.9896 5.9 18.6458 5.9 19.0521 6.29C19.4583 6.68 19.4687 7.31 19.0625 7.7Z" fill="url(#paint0_linear_42_51)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_42_51" x1="12.5" y1="1" x2="12.5" y2="22.795" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#035DFF" />
                    <stop offset="1" stopColor="#008FFF" />
                </linearGradient>
                <clipPath id="clip0_42_51">
                    <rect width="25" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

