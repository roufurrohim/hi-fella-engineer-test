import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon2, StarIcon2 } from "@/components/icons";

export default function ProductComponents() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    return (
        <div className="w-full flex flex-col gap-[24px] pt-[15px] px-[15px] pb-[23px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
                <div className="w-full flex items-center justify-between">
                    <div className="w-2/3 flex items-center gap-2">
                        <StarIcon2 />
                        <div className="flex flex-col">
                            <h2 className="text-sm font-semibold">Featured Products</h2>
                            <p className="text-xs text-accent-300">Ads</p>
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
                                    className="w-[30px] h-[30px] !rounded-full border border--border-200"
                                    priority
                                />
                                <div className="flex flex-col min-w-0">
                                    <div className="flex gap-[3px] items-center">
                                        <h3 className="text-sm text-accent-300">{item.title}</h3>
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
                                    <h3 className="text-base font-semibold !truncate">{item.sector}</h3>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-accent-300">
                                        <p>Category: </p>
                                        <p className="capitalize">{item.category}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-accent-300">
                                        <p>Price: </p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[2px] text-xs text-accent-300">
                                        <p>MOQ: </p>
                                        <p>{item.moq}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}