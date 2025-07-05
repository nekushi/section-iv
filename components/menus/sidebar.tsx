"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideBorderColor, toTitleCase } from "@/lib/utils";

import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

export function MenuSidebar() {
  return (
    <aside className="relative p-4 bg-[#F8F8FF] basis-1/6 shadow-2xl">
      <div className="text-xl font-medium font-sans py-4 mb-4 border-b border-b-slate-500">
        Welcome, [user]
      </div>
      <ul>
        {navItems.map((navItem) => {
          const pathname = usePathname();
          const isActivePathname = pathname === navItem.href;

          return (
            <li
              key={navItem.label}
              className={`${
                isActivePathname &&
                `border-l-4 ${navItem.sideColor} rounded-r-md pl-2`
              } ${
                !isActivePathname && "rounded"
              } hover:bg-slate-100 hover:translate-x-1 transition-transform`}
            >
              <Link href={navItem.href} className="block py-2">
                <div className="flex gap-1.5 items-center">
                  {navItem.icon}
                  {toTitleCase(navItem.label)}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="absolute bottom-4 w-[calc(100%-2rem)] flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={"/pics/luna-cat.jpg"}
            alt="monkeycatluna"
            width={profileSize}
            height={profileSize}
            className="rounded-full"
          />
          <div>
            <h4>Ivan Pabayo</h4>
            <p className="text-xs">i.pabayo3000</p>
          </div>
        </div>
        <div className="p-2 rounded hover:bg-neutral-300 transition-all">
          <MdOutlineLogout className="size-6" />
        </div>
      </div>
    </aside>
  );
}

const navItems = [
  {
    icon: <MdOutlineAnnouncement className="text-xl" />,
    label: "announcements",
    href: "/menus/announcements",
    sideColor: sideBorderColor("amber"),
  },
  {
    icon: <MdOutlineAssignment className="text-xl" />,
    label: "assignments",
    href: "/menus/assignments",
    sideColor: sideBorderColor("cyan"),
  },
  {
    icon: <MdEventAvailable className="text-xl" />,
    label: "events",
    href: "/menus/events",
    sideColor: sideBorderColor("pink"),
  },
  { icon: "", label: "files", href: "#", sideColor: "border-l-cyan-500" },
  {
    icon: "",
    label: "general-chat",
    href: "#",
    sideColor: "border-l-cyan-500",
  },
  { icon: "", label: "members", href: "#", sideColor: "border-l-cyan-500" },
  { icon: "", label: "photo-dumps", href: "#", sideColor: "border-l-cyan-500" },
  { icon: "", label: "projects", href: "#", sideColor: "border-l-cyan-500" },
  { icon: "", label: "schedule", href: "#", sideColor: "border-l-cyan-500" },
] as const;

const profileSize: number = 42;

// import { TbSquareHalf } from "react-icons/tb";
// <TbSquareHalf />
