import { MdSchedule } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Projects() {
  return (
    <div className="">
      <div className="bg-emerald-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-emerald-200 active:bg-emerald-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdSchedule className="size-32" />
          <p>No schedules yet.</p>
        </div>
      </div>
    </div>
  );
}
