const Navbar = () => {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">ReaderState</h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 duration-150 cursor-pointer">
            Discover
          </li>
          <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100">
            Category
          </li>
          <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100">
            Collections
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
