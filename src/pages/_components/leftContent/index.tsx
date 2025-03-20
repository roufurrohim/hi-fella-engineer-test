import Image from "next/image";

import { BookmarkIcon, DiamondIcon, GoldIcon, StarIcon } from "@/components/icons";
import Sidebar from "@/components/sidebar";

export default function LeftContent() {
    return (
        <div className="col-span-2 pr-[11px] flex flex-col gap-[10px]">
        <Sidebar />

        {/* Card Boost Product */}
        <div className="w-full px-7 flex justify-center items-center">
          <div className="w-full bg-white flex flex-col gap-[10px] p-[10px] rounded-[10px] border border-[#008FFF] shadow-[0px_0px_20px_0px_#0000000D]">
            <StarIcon />
            <h3 className="text-sm font-semibold">Expand Your Reach, Open New Doors.</h3>
            <p className="text-[12px] text-[#666666]">Tap into the power of Hi-Fella’s Discover Page. Showcase your products to a highly engaged international audience and unlock new growth opportunities!</p>
            <button className="w-full bg-[#008FFF] text-white py-[10px] rounded-full flex justify-center items-center font-bold text-xs cursor-pointer">Boost Product</button>
          </div>
        </div>

        {/* Card Person Information */}
        <div className="w-full px-7 flex justify-center items-center">
          <div className="w-full bg-white flex flex-col gap-[10px] p-[10px] rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
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
              <h3 className="text-lg font-medium">John Doe</h3>
              <div className="w-fit px-[11px] flex justify-center items-center bg-[#BEEDF4] rounded-full">
                <span className="text-xs text-[#0A889D]">Supplier Acquisition</span>
              </div>
            </div>
            <p className="text-sm text-[#808080]">Digital Marketing at PT ABC Indonesia</p>
            <div className="border-t border-[#BFBFBF] w-full pt-[6px] flex items-center gap-[10px] cursor-pointer">
              <BookmarkIcon />
              <span className="text-[#323232] text-sm font-medium">My Saved Post</span>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
              <span className="text-[#808080] text-xs">Your Balance</span>
              <div className="w-full flex gap-[10px] items-center">
                <GoldIcon />
                <span className="text-[#323232] text-sm font-semibold">100 Fella Gold</span>
              </div>
              <div className="w-full flex gap-[10px] items-center">
                <DiamondIcon />
                <span className="text-[#323232] text-sm font-semibold">100 Diamonds</span>
              </div>
            </div>
            <button className="w-full border border-[#008FFF] text-[#008FFF] py-[10px] rounded-full flex justify-center items-center font-bold text-xs cursor-pointer">Open Wallet</button>
          </div>
        </div>
      </div>
    );
}