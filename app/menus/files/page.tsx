import { MdContentPaste } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Files() {
  return (
    <div className="">
      <div className="bg-rose-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-rose-200 active:bg-rose-300 transition-all">
            <IoAdd />
          </button>
        </div>
        {/* <div className="h-96 flex flex-col justify-center items-center">
          <MdContentPaste className="size-32" />
          <p>No files yet.</p>
        </div> */}
        <div className="h-64 p-4">
          <section>
            <h2 className="text-xl font-medium">Sample ID</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
