"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const ChevronDownIcon: React.FC<IconSvgProps> = ({
    color,
}: {
    color?: string;
}) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.79 9.79C17.4 9.4 16.77 9.4 16.38 9.79L12.5 13.67L8.61998 9.79C8.22998 9.4 7.59998 9.4 7.20998 9.79C6.81998 10.18 6.81998 10.81 7.20998 11.2L11.8 15.79C12.19 16.18 12.82 16.18 13.21 15.79L17.8 11.2C18.18 10.82 18.18 10.18 17.79 9.79Z" fill={color ?? "#323232"} />
        </svg>
    );
};

export const ChevronDownIcon2: React.FC<IconSvgProps> = () => {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.14782 4.87398L6.8975 7.62366L9.64719 4.87398C9.92357 4.59759 10.37 4.59759 10.6464 4.87398C10.9228 5.15036 10.9228 5.59683 10.6464 5.87322L7.39358 9.12606C7.1172 9.40245 6.67073 9.40245 6.39434 9.12606L3.14149 5.87322C2.86511 5.59683 2.86511 5.15036 3.14149 4.87398C3.41788 4.60468 3.87144 4.59759 4.14782 4.87398Z" fill="#808080" />
        </svg>

    );
};
