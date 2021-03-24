export default function Home() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 px-8 py-4 bg-gray-100 border-r overflow-auto ">
        <img src="/image/logo.svg" alt="Logo" className="w-9 h-9" />
        <nav className="mt-8">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Issues
          </h3>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              className="flex justify-between items-center bg-gray-200 rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Assigned to me
              </span>
              <span className="text-xs font-semibold text-gray-700">2</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Created by me
              </span>
              <span className="text-xs font-semibold text-gray-700">1</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Archived
              </span>
            </a>
          </div>

          <h3 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Tags
          </h3>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              className="flex justify-between items-center  rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Feature Request
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Marketing
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">v2.0</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Enhancement
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
          </div>
          <button className=" -ml-2.5 flex items-center text-sm font-medium text-gray-600 mt-2">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>

            <span>New Project</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <div className="flex-shrink-0 border-b-2 border-gray-200">
          <header className="px-6">
            <div className="flex justify-between items-center border-b border-gray-200 py-3">
              {/* Searchbar */}
              <div className="flex-1">
                <div className="relative w-64">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    className=" block w-full text-sm  border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
                    placeholder="Search"
                  />
                </div>
              </div>

              {/* Icons */}
              <div className="flex items-center">
                <button className="w-6 h-6 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="ml-6">
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1599140781147-e9a53c8cdd03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                    alt="Avatar"
                  />
                </button>
              </div>
            </div>

            {/* Header Bottom */}
            <div className=" flex items-center justify-between py-2">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                  All Issues
                </h2>
                <div className=" ml-6 flex items-center">
                  <span className="rounded-full border-2 border-white">
                    <img
                      className="w-6 h-6 rounded-full object-cover "
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                      alt="Avatar"
                    />
                  </span>
                  <span className="-ml-2.5 rounded-full border-2 border-white">
                    <img
                      className="w-6 h-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                      alt="Avatar"
                    />
                  </span>
                  <span className="-ml-2.5 rounded-full border-2 border-white">
                    <img
                      className="w-6 h-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1506697084665-7f7d652308af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                      alt="Avatar"
                    />
                  </span>
                  <span className="-ml-2.5 rounded-full border-2 border-white">
                    <img
                      className="w-6 h-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1541119370235-6c11470cfb1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                      alt="Avatar"
                    />
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="inline-flex border rounded-md bg-gray-200 p-0.5">
                  <button className="px-2 py-1 rounded">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <button className="px-2 py-1 bg-white rounded shadow">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                      />
                    </svg>
                  </button>
                </span>

                <button className="ml-5 flex items-center pl-2 pr-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>

                  <span>New Issue</span>
                </button>
              </div>
            </div>
          </header>
        </div>

        <div className="flex-1 overflow-auto">
          <main className="p-3 inline-flex space-x-2">
            <div className="flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-3">
                  <a href="#" className=" block p-5 rounded-md bg-white shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="w-6 h-6 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                          alt="Avatar"
                        />
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between">
                      <div className="text-sm text-gray-600">Sep 14</div>
                      <div className="p-2 flex items-center bg-green-100 rounded">
                        <span className="block w-2 h-2 border border-green-400 bg-green-400 rounded-full" />
                        <span className="ml-2 text-sm font-medium text-green-500 leading-tight">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
