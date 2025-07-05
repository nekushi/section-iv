import { MdOutlineAnnouncement } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Announcements() {
  return (
    <div className="">
      <div className="bg-amber-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-amber-200 active:bg-amber-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdOutlineAnnouncement className="size-32" />
          <p>No announcements yet.</p>
        </div>
      </div>
    </div>
  );
}
