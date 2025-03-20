"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const NotifIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_42_68)">
                <path d="M20.9233 6.25C20.9233 7.97589 19.5242 9.375 17.7983 9.375C16.0725 9.375 14.6733 7.97589 14.6733 6.25C14.6733 4.52411 16.0725 3.125 17.7983 3.125C19.5242 3.125 20.9233 4.52411 20.9233 6.25Z" fill="#FF0000" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.6317 4.10032V3.64584C13.6317 2.78126 12.9338 2.08334 12.0692 2.08334C11.2047 2.08334 10.5067 2.78126 10.5067 3.64584V4.35418C7.51715 5.06251 5.81924 7.72918 5.81924 10.9375V16.1458L4.47549 17.4896C3.81924 18.1458 4.27757 19.2708 5.20465 19.2708H18.9234C19.8505 19.2708 20.3192 18.1458 19.663 17.4896L18.3192 16.1458V10.9375C18.3192 10.928 18.3192 10.9184 18.3192 10.9089C18.1482 10.9278 17.9744 10.9375 17.7984 10.9375C15.2095 10.9375 13.1109 8.83885 13.1109 6.25001C13.1109 5.47516 13.2989 4.74422 13.6317 4.10032ZM14.1526 20.3125C14.1526 21.4583 13.2151 22.3958 12.0692 22.3958C10.913 22.3958 9.9859 21.4583 9.9859 20.3125H14.1526Z" fill="url(#paint0_linear_42_68)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_42_68" x1="12.068" y1="2.08334" x2="12.068" y2="22.3958" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#035DFF" />
                    <stop offset="1" stopColor="#008FFF" />
                </linearGradient>
                <clipPath id="clip0_42_68">
                    <rect width="25" height="25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
