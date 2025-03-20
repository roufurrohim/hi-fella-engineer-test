"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const FilesIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_42_43)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.40469 3.74997C9.98438 3.74997 10.5422 3.97966 10.9578 4.39528L12.5 5.93747H21.25C22.4531 5.93747 23.4375 6.92184 23.4375 8.12497V19.0625C23.4375 20.2656 22.4531 21.25 21.25 21.25H3.75C2.54688 21.25 1.5625 20.2656 1.5625 19.0625L1.57344 5.93747C1.57344 4.73434 2.54688 3.74997 3.75 3.74997H9.40469ZM17.3701 9.61127L18.18 12.2778V12.2833H20.6317C21.1661 12.2833 21.3865 12.9665 20.9512 13.2805L18.9458 14.713L19.7336 17.2528C19.8934 17.7652 19.2984 18.1784 18.8742 17.8533L16.8412 16.3052L14.8082 17.8478C14.384 18.1729 13.789 17.7597 13.9488 17.2473L14.7366 14.7075L12.7312 13.275C12.2959 12.9665 12.5163 12.2778 13.0507 12.2778H15.5024L16.3178 9.61127C16.4721 9.08787 17.2103 9.08787 17.3701 9.61127Z" fill="url(#paint0_linear_42_43)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_42_43" x1="12.5" y1="3.74997" x2="12.5" y2="21.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#035DFF" />
                    <stop offset="1" stop-color="#008FFF" />
                </linearGradient>
                <clipPath id="clip0_42_43">
                    <rect width="25" height="25" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

