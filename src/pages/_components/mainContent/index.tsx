/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ChevronRightIcon, ChevronRightIcon2, DiamondSmallIcon, RFQIcon, StarIcon2 } from "@/components/icons";
import Checkbox from "@/components/inputs/checkbox";
import ProgressBar from "@/components/progressbar";
import Image from "next/image";

export default function MainContent() {
    const [listCompleted, setListCompleted] = useState<{
        id: number;
        title: string;
        value: number;
        description: string;
        completed: boolean;
    }[]>([
        {
            id: 1,
            title: "Set-up Your Profile",
            value: 1,
            description: "Choose a username and confirm your password.",
            completed: false,
        },
        {
            id: 2,
            title: "Select a Profile Picture and Header",
            value: 1,
            description: "Add a picture to build credibility.",
            completed: false,
        },
        {
            id: 3,
            title: "Start Connecting with Potential Network",
            value: 1,
            description: "Engage with professionals who share your industry or interests.",
            completed: false,
        },
        {
            id: 4,
            title: "Create Company/Organization Profile ",
            value: 5,
            description: "Access our database, generate leads, and get involved in exhibitions.",
            completed: false,
        },
    ]);

    const [products, setProducts] = useState<{
        id: number;
        title: string;
        image: string;
        sector: string;
        price: string;
        category: string;
        verified: boolean;
        moq: string;
        image_position: string;
        company_image: string;
    }[]>([
        {
            id: 1,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/bottle.png",
            image_position: "object-left",
            company_image: "/logo-company.png",
        },
        {
            id: 2,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/cup.png",
            image_position: "object-center",
            company_image: "/logo-company.png",
        },
        {
            id: 3,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/bottle.png",
            image_position: "object-left",
            company_image: "/logo-company.png",
        },
        {
            id: 4,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/cup.png",
            image_position: "object-center",
            company_image: "/logo-company.png",

        },
        {
            id: 5,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/cup.png",
            image_position: "object-center",
            company_image: "/logo-company.png",
        },
        {
            id: 6,
            title: "Van Ver Holding",
            verified: true,
            sector: "Palm Acid Oil (PAO)",
            price: "USD 50-250",
            moq: "1000 pcs",
            category: "Packaging",
            image: "/cup.png",
            image_position: "object-center",
            company_image: "/logo-company.png",
        },
    ]);

    const [sumChecked, setSumChecked] = useState(0);

    const handleCheckbox = (value: number) => {
        setSumChecked(value);
    };

    return (
        <section className="col-span-4 w-full flex flex-col gap-[10px]">
            <Image
                src="/banner.png"
                alt="banner"
                width={633}
                height={173}
                className="w-full h-[173px] !rounded-[10px]"
                priority
            />

            {/* Completed Component */}
            <div className="w-full flex flex-col gap-[9px] pt-[15px] px-[15px] pb-[23px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
                <h3 className="text-sm font-semibold">Ready to Unlock Everything? Complete Your Setup!</h3>
                <div className="w-full flex flex-col gap-[4px]">
                    <p className="text-sm">Tap into the power of Hi-Fella’s Discover Page. Showcase your products to a highly engaged international audience and unlock new growth opportunities!</p>
                    <ProgressBar percentage={sumChecked} height={5} />
                    <p className="text-xs">0/4 Completed</p>
                </div>
                {listCompleted.map((item) => (
                    <div key={item.id} className="relative w-full flex items-center gap-2 p-[10px] border border-[#D9D9D9] rounded-[10px]">
                        <Checkbox onChange={(e) => {
                            if (e.target.checked) {
                                handleCheckbox(sumChecked + 25);
                            } else {
                                handleCheckbox(sumChecked - 25);
                            }
                        }} />
                        <div className="flex flex-col">
                            <div className="flex items-center text-sm font-semibold">
                                <p className="">{item.title}</p>
                                {" "}
                                (<DiamondSmallIcon />+1)
                            </div>
                            <p className="text-xs">{item.description}</p>
                        </div>
                        <div className="absolute right-[10px]">
                            <ChevronRightIcon />
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Products */}
            <div className="w-full flex flex-col gap-[24px] pt-[15px] px-[15px] pb-[23px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
                <div className="w-full flex items-center justify-between">
                    <div className="w-2/3 flex items-center gap-2">
                        <StarIcon2 />
                        <div className="flex flex-col">
                            <h2 className="text-sm font-semibold">Featured Products</h2>
                            <p className="text-xs text-[#808080]">Ads</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center gap-[5px] cursor-pointer">
                        <p className="text-xs font-medium">View All Featured Products</p>
                        <ChevronRightIcon2 />
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-x-[26.5px] gap-y-[20px]">
                    {products.map((item) => (
                        <div key={item.id} className="flex flex-col gap-[10px]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={180}
                                height={180}
                                className={`w-full h-[180px] !rounded-[5px] object-cover ${item.image_position}`}
                                priority
                            />
                            <div className="flex gap-[5px]">
                                <Image
                                    src={item.company_image}
                                    alt="company"
                                    width={30}
                                    height={30}
                                    className="w-[30px] h-[30px] !rounded-full border border-[#F1F4F5]"
                                    priority
                                />
                                <div className="flex flex-col min-w-0">
                                    <div className="flex gap-[3px] items-center">
                                        <h3 className="text-sm text-[#808080]">{item.title}</h3>
                                        {item.verified && (
                                            <Image
                                                src="/verified.svg"
                                                alt="verified"
                                                width={15}
                                                height={15}
                                                className="w-[15px] h-[15px]"
                                                priority
                                            />
                                        )}
                                    </div>
                                    <h3 className="text-base text-[#323232] font-semibold !truncate">{item.sector}</h3>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-[#808080]">
                                        <p>Category: </p>
                                        <p className="capitalize">{item.category}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-[#808080]">
                                        <p>Price: </p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-[#808080]">
                                        <p>MOQ: </p>
                                        <p>{item.moq}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RFQ */}
            <div className="w-full flex flex-col gap-5 pt-[10px]">
                <div className="w-full flex items-center justify-between">
                    <div className="w-2/3 flex items-center gap-2">
                        <RFQIcon />
                        <h2 className="text-sm font-semibold">Request For Quotation</h2>
                    </div>
                    <div className="w-1/3 flex items-center gap-[5px] cursor-pointer">
                        <p className="text-xs font-medium">View All Request for Quotation</p>
                        <ChevronRightIcon2 />
                    </div>
                </div>

                {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="w-full flex flex-col gap-[24px] divide-y divide-[#F1F4F5] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
                        <div className="w-full flex items-center justify-between p-[21px]">
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-[20px] font-semibold">[company name] is looking for [product scope] Product</h2>
                                <div className="flex items-center gap-[5px]">
                                    <div className="flex items-center gap-[5px] justify-center px-[10px] py-[3px] bg-[#F1F4F5] rounded-[5px]">
                                        <span className="text-[10px] font-medium">coffee</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] justify-center px-[10px] py-[3px] bg-[#F1F4F5] rounded-[5px]">
                                        <span className="text-[10px] font-medium">Verified Company</span>
                                        <Image
                                            src="/verified.svg"
                                            alt="verified"
                                            width={10}
                                            height={10}
                                            className="w-[10px] h-[10px] object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            <ChevronRightIcon color="#808080" />
                        </div>
                        <div className="w-full flex flex-col gap-[5px] px-[21px] pb-[21px]">
                            <p className="text-[10px] text-[#808080]">Who&apos;s looking this product</p>
                            <div className="w-full flex gap-[10px] items-center">
                                <div className="w-[45px] h-[45px]">
                                    <Image
                                        src="/person/1.jpeg"
                                        alt="person"
                                        width={45}
                                        height={45}
                                        className="w-full h-full rounded-full object-none object-center"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-[3px]">
                                    <h3 className="text-xs font-medium">John Doe</h3>
                                    <div className="w-fit px-[11px] flex justify-center items-center bg-[#ACF5BE] rounded-full">
                                        <span className="text-xs text-[#259340]">Customer Acquisition </span>
                                    </div>
                                    <p className="text-sm text-[#808080]">Digital Marketing at PT ABC Indonesia - 2m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}