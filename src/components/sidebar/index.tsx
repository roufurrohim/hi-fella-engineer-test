import { useState } from "react";
import { BadgeIcon, ChatIcon, FeedIcon, FilesIcon, GlobeIcon, NotifIcon, PersonsIcon, PlusIcon, RecordingIcon } from "../icons";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sidebarList, setSidebarList] = useState<{
        id: number;
        title: string;
        icon: React.ReactNode;
        url: string;
        is_new: boolean;
    }[]>([
        {
            id: 1,
            title: "Discover",
            icon: <GlobeIcon />,
            url: "/",
            is_new: false,
        },
        {
            id: 2,
            title: "Events",
            icon: <RecordingIcon />,
            url: "/events",
            is_new: false,
        },
        {
            id: 3,
            title: "Feeds",
            icon: <FeedIcon />,
            url: "/feeds",
            is_new: false,
        },
        {
            id: 4,
            title: "Networks",
            icon: <PersonsIcon />,
            url: "/networks",
            is_new: false,
        },
        {
            id: 5,
            title: "Database",
            icon: <FilesIcon />,
            url: "/database",
            is_new: false,
        },
        {
            id: 6,
            title: "Regulatory",
            icon: <BadgeIcon />,
            url: "/regulatory",
            is_new: true,
        },
        {
            id: 7,
            title: "Messages",
            icon: <ChatIcon />,
            url: "/messages",
            is_new: false,
        },
        {
            id: 8,
            title: "Notifications",
            icon: <NotifIcon />,
            url: "/notifications",
            is_new: false,
        },
        {
            id: 9,
            title: "Create a post",
            icon: <PlusIcon />,
            url: "/create-post",
            is_new: false,
        }
    ]);

  return (
    <section className="w-full flex flex-col gap-[10px]">
        {sidebarList.map((item) => (
            <Link key={item.id} href={item.url} className={`w-full max-w-[221px] flex items-center gap-[22px] text-md px-7 py-[11px] cursor-pointer ${pathname === item.url ? "text-[#008FFF] font-bold bg-[#E2ECF6] rounded-full" : "font-normal"}`}>
                <div className="w-fit flex items-center gap-3">
                    {item.icon}
                </div>
                <div className="w-fit flex items-center gap-3">
                    {item.title}
                    {item.is_new && <div className="px-[10px] py-1 bg-[#008FFF] rounded-full text-[10px] text-white font-semibold flex justify-center items-center">NEW!</div>}
                </div>
            </Link>
        ))}
    </section>
  )
}