/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ChevronRightIcon, ChevronRightIcon2, DiamondSmallIcon, RFQIcon, StarIcon2 } from "@/components/icons";
import Checkbox from "@/components/inputs/checkbox";
import ProgressBar from "@/components/progressbar";

export default function CompletedComponents() {
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

    const [sumChecked, setSumChecked] = useState(0);

    /**
     * Handle checkbox change
     * @param value - The value of the checkbox
     */
    const handleCheckbox = (value: number) => {
        setSumChecked(value);
    };

    return (
        <div className="w-full flex flex-col gap-[9px] pt-[15px] px-[15px] pb-[23px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
            <h3 className="text-sm font-semibold">Ready to Unlock Everything? Complete Your Setup!</h3>
            <div className="w-full flex flex-col gap-[4px]">
                <p className="text-sm">Tap into the power of Hi-Fella’s Discover Page. Showcase your products to a highly engaged international audience and unlock new growth opportunities!</p>
                <ProgressBar percentage={sumChecked} height={5} />
                <p className="text-xs">0/4 Completed</p>
            </div>
            {listCompleted.map((item) => (
                <div key={item.id} className="relative w-full flex items-center gap-2 p-[10px] border border-border rounded-[10px]">
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
    )
}