import Image from "next/image";
import { SearchIcon } from "../icons";
import Dropdown from "../dropdowns";

export default function Navbar() {
  return (
    <nav className="w-full py-[18px] flex justify-center items-center bg-white border-b border-[#D9D9D9]">
    <section className="w-full max-w-[1280px] grid grid-cols-8 justify-between items-center">
      <div className="col-span-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={23}
          className="w-[130px] h-[23px]"
          priority
        />
      </div>
      <div className="col-span-4">
        <div className="w-full flex items-center gap-[10px] py-[10.5px] px-5 bg-[#F0F3F4] rounded-full">
          <SearchIcon />
          <input type="text" placeholder="Search profile, company or product" className="w-full bg-transparent focus:outline-none text-black" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-end gap-2">
          <Dropdown />
          <div className="w-10 h-10 rounded-full">
            <Image
              src="/person/1.jpeg"
              alt="person"
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  </nav>
  );
}
        