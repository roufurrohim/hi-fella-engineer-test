"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const FeedIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.999 4.344 21 6.229 21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.001 19.656 3 17.771 3 14V10ZM6 12C6 10.586 6 9.879 6.44 9.44C6.878 9 7.585 9 9 9H15C16.414 9 17.121 9 17.56 9.44C18 9.879 18 10.586 18 12V16C18 17.414 18 18.121 17.56 18.56C17.121 19 16.414 19 15 19H9C7.586 19 6.879 19 6.44 18.56C6 18.122 6 17.415 6 16V12ZM7 5.25C6.80109 5.25 6.61032 5.32902 6.46967 5.46967C6.32902 5.61032 6.25 5.80109 6.25 6C6.25 6.19891 6.32902 6.38968 6.46967 6.53033C6.61032 6.67098 6.80109 6.75 7 6.75H12C12.1989 6.75 12.3897 6.67098 12.5303 6.53033C12.671 6.38968 12.75 6.19891 12.75 6C12.75 5.80109 12.671 5.61032 12.5303 5.46967C12.3897 5.32902 12.1989 5.25 12 5.25H7Z" fill="url(#paint0_linear_42_36)" />
            <defs>
                <linearGradient id="paint0_linear_42_36" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#035DFF" />
                    <stop offset="1" stopColor="#008FFF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

