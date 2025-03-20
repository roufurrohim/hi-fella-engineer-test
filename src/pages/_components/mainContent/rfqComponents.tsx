import Image from "next/image";
import { ChevronRightIcon, ChevronRightIcon2, RFQIcon } from "@/components/icons";

export default function RFQComponents() {
    return (
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
            <div key={index} className="w-full flex flex-col gap-[24px] divide-y divide--border-200 bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
                <div className="w-full flex items-center justify-between p-[21px]">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[20px] font-semibold">[company name] is looking for [product scope] Product</h2>
                        <div className="flex items-center gap-[5px]">
                            <div className="flex items-center gap-[5px] justify-center px-[10px] py-[3px] bg--border-200 rounded-[5px]">
                                <span className="text-[10px] font-medium">coffee</span>
                            </div>
                            <div className="flex items-center gap-[5px] justify-center px-[10px] py-[3px] bg--border-200 rounded-[5px]">
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
                    <p className="text-[10px] text-accent-300">Who&apos;s looking this product</p>
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
                            <div className="w-fit px-[11px] flex justify-center items-center bg-background-400 rounded-full">
                                <span className="text-xs text-accent-400">Customer Acquisition </span>
                            </div>
                            <p className="text-sm text-accent-300">Digital Marketing at PT ABC Indonesia - 2m</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}