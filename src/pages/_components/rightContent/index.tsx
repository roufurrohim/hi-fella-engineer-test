/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronDownIcon2 } from "@/components/icons";
import Image from "next/image";
import { useState } from "react";

export default function RightContent() {
  const [footer, setFooter] = useState([
    {
      title: "About Us",
      links: "/"
    },
    {
      title: "Premium",
      links: "/"
    },
    {
      title: "Quality Inspection",
      links: "/"
    },
    {
      title: "Services",
      links: "/"
    },
    {
      title: "Advertising",
      links: "/"
    },
    {
      title: "Help Center",
      links: "/"
    },
    {
      title: "Download",
      links: "/"
    },
    {
      title: "Privacy Policy",
      links: "/"
    },
    {
      title: "Terms of Service",
      links: "/"
    },
  ]);

  const [users, setUsers] = useState([
    {
      name: "Cole Robert",
      image: "/person/2.png",
      title: "Supplier Acquisition",
      company: "Digital Marketing at PT ABC Indonesia",
      status: "Follow"
    },
    {
      name: "Zambore",
      image: "/person/1.jpeg",
      title: "Supplier Acquisition",
      company: "Digital Marketing at PT ABC Indonesia",
      status: "Follow"
    },
    {
      name: "Kobe Neil",
      image: "/person/3.png",
      title: "Supplier Acquisition",
      company: "Digital Marketing at PT ABC Indonesia",
      status: "Follow"
    },
  ]);
  return (
    <section className="col-span-2 w-full flex flex-col gap-[10px]">
      <div className="w-full bg-white flex flex-col gap-[10px] p-[15px] rounded-[10px] shadow-[0px_0px_20px_0px_#0000000D]">
        <h3 className="text-sm font-medium">Who to follow</h3>
        {users.map((user, index) => (
          <div key={index} className="w-full flex gap-[9px]">
            <div className="w-[45px] h-[45px]">
              <Image
                src={user.image}
                alt="person"
                width={45}
                height={45}
                className="w-full h-full rounded-full object-none object-center"
                priority
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h3 className="text-base font-medium">{user.name}</h3>
              <div className="w-fit px-[11px] flex justify-center items-center bg-[#ACF5BE] rounded-full">
                <span className="text-xs text-[#259340]">{user.title}</span>
              </div>
              <p className="text-xs text-[#808080]">{user.company}</p>
              <button className="w-[118px] border border-[#008FFF] text-[#008FFF] py-[10px] rounded-full flex justify-center items-center font-bold text-xs cursor-pointer">{user.status}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[288px] flex flex-col gap-[15px]">
        <div className="w-full flex flex-wrap gap-x-[20px] gap-y-[5px]">
          {footer.map((item, index) => (
            <a key={index} href={item.links} className="text-[#808080] text-xs">{item.title}</a>
          ))}
          <button
            className="flex items-center gap-[3px] bg-transparent !border-0 hover:bg-gray-50 hover:text-gray-700 "
          >
            <span className="text-[#808080] text-xs">More</span>
            <ChevronDownIcon2 />
          </button>
        </div>
        <span className="text-[#808080] text-xs">© Hifella 2023. All Rights Reserved</span>
      </div>

    </section>
  );
}