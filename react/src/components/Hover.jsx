export default function Hover() {
  return (
    <>
      <div className="flex justify-center items-center h-52 w-screen">
        <button className="text-2xl border-2 px-5 rounded-xl bg-red-700 border-black hover:bg-black hover:text-yellow-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          Click Here
        </button>
        <button className="transition-all ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Save Changes
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center flex-row gap-4">
        <div className="bg-red-700 basis-1/3">01</div>
        <div className="bg-red-700 basis-1/3">01</div>
        <div className="bg-red-700 basis-full">01</div>
        <div className="bg-red-700 basis-full">01</div>
        <div className="bg-red-700 basis-1/2">02</div>
        <div className="bg-red-700 basis-1/2">02</div>
        <div className="bg-red-700 basis-1/2">02</div>
      </div>
      <button className="dark:md:hover:bg-fuchsia-600 ...">
  Save changes
</button>
<button className="bg-violet-500 hover:bg-violet-600 active:bg-red-700">
  Save changes
</button>
    </>
  );
}
