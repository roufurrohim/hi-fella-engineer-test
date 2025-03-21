"use client";

import * as React from "react";

import { IconSvgProps } from "@/types/svg";

export const DiamondIcon: React.FC<IconSvgProps> = ({ width = 25, height = 20 }) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_42_130)">
                <path d="M12.6756 18.9174C12.6166 18.9773 12.5576 19.0398 12.4874 19.1101C8.39421 15.278 4.32071 11.4615 0.196655 7.60324C0.362404 7.59282 0.471967 7.5824 0.578721 7.5824C2.5059 7.5824 4.43309 7.58501 6.36027 7.57458C6.62434 7.57458 6.73953 7.65795 6.84909 7.87418C8.62176 11.4354 10.4057 14.9888 12.1868 18.5474C12.2205 18.6152 12.257 18.6803 12.3441 18.7272C10.8355 15.0305 9.3297 11.3338 7.80706 7.60585H17.1845C16.8502 8.42386 16.5215 9.23406 16.1928 10.0443C15.041 12.8656 13.8864 15.6896 12.7374 18.511C12.6981 18.61 12.6868 18.7194 12.6615 18.8236C12.6672 18.8548 12.6728 18.8887 12.6756 18.92V18.9174Z" fill="url(#paint0_linear_42_130)" />
                <path d="M12.6756 18.9173C12.67 18.886 12.6643 18.8522 12.6615 18.8209C13.4987 17.1562 14.3359 15.4941 15.173 13.8294C16.176 11.8339 17.1761 9.83577 18.1734 7.83763C18.2492 7.68392 18.3167 7.5719 18.5442 7.57451C20.5753 7.58232 22.6065 7.57972 24.6376 7.57972C24.6713 7.57972 24.705 7.59014 24.7753 7.60056C24.7191 7.66829 24.6797 7.72561 24.6292 7.7725C20.7158 11.4327 16.8024 15.0929 12.8891 18.7532C12.8245 18.8131 12.7486 18.8626 12.6784 18.9173H12.6756Z" fill="url(#paint1_linear_42_130)" />
                <path d="M8.13293 6.5794C9.59658 4.76883 11.0349 2.99473 12.4902 1.19458C13.9566 2.98692 15.4062 4.76101 16.8923 6.5794H8.13293Z" fill="#6998F2" />
                <path d="M25 6.58715H18.71C19.4207 4.84431 20.1202 3.13013 20.8394 1.37427C22.23 3.11711 23.5982 4.83129 25 6.58715Z" fill="url(#paint2_linear_42_130)" />
                <path d="M11.4198 0.889771C9.9983 2.63521 8.61051 4.33897 7.19181 6.08442C6.46982 4.33116 5.76468 2.6274 5.05112 0.889771H11.4226H11.4198Z" fill="url(#paint3_linear_42_130)" />
                <path d="M0 6.58462C1.40465 4.82355 2.76717 3.11458 4.15777 1.37695C4.87414 3.12761 5.57366 4.83918 6.28441 6.58462H0Z" fill="#7CA8FE" />
                <path d="M19.9461 0.889771C19.2325 2.62219 18.5302 4.32334 17.8054 6.08181C16.3839 4.33897 14.9961 2.63261 13.5774 0.889771H19.9461Z" fill="url(#paint4_linear_42_130)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_42_130" x1="8.69059" y1="7.57458" x2="8.69059" y2="19.1101" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#89B1FF" />
                    <stop offset="1" stopColor="#527ED4" />
                </linearGradient>
                <linearGradient id="paint1_linear_42_130" x1="18.7184" y1="7.57446" x2="18.7184" y2="18.9173" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7CBDFF" />
                    <stop offset="1" stopColor="#6CA9E6" />
                </linearGradient>
                <linearGradient id="paint2_linear_42_130" x1="21.855" y1="1.37427" x2="21.855" y2="6.58715" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#99B9F7" />
                    <stop offset="1" stopColor="#5C8FF2" />
                </linearGradient>
                <linearGradient id="paint3_linear_42_130" x1="8.23687" y1="0.889771" x2="8.23687" y2="6.08442" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8CC1F8" />
                    <stop offset="1" stopColor="#3987D3" />
                </linearGradient>
                <linearGradient id="paint4_linear_42_130" x1="16.7617" y1="0.889771" x2="16.7617" y2="6.08181" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8FC7FF" />
                    <stop offset="1" stopColor="#56AAFE" />
                </linearGradient>
                <clipPath id="clip0_42_130">
                    <rect width={width} height={height} fill="white" transform="translate(0 0.889771)" />
                </clipPath>
            </defs>
        </svg>
    );
};
