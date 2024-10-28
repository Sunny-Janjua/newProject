export default function Card() {
    return (
      <div>
        <ul role="list" className="p-6 divide-y divide-slate-200">
          <li className="flex py-4 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="/image.png" // Add a source for the image
              alt="User Avatar" // Add an alt text for accessibility
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Hello World</p>
              <p className="text-sm text-slate-500 truncate">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, maiores recusandae ipsum aut corrupti ad dolorum optio alias aspernatur harum neque minima praesentium ullam similique rerum repellat a, sit dolorem.
              </p>
            </div>
          </li>
        </ul>
  
        <form className="p-6">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Username</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </form>
      </div>
    );
  }
  