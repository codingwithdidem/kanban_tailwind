import React from "react";
import { useState } from "react";

export default function Home() {
  const [isOpen, toggleSidebar] = React.useState(false);
  return (
    <div className="h-screen flex">
      <div
        className={`fixed lg:static lg:translate-x-0 z-30 inset-y-0 left-0  w-64 px-8 py-4 bg-white border-r overflow-auto transform ${
          isOpen
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in transition-medium"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src="/image/logo.svg" alt="Logo" className="w-9 h-9" />
          <button
            className="text-gray-700 lg:hidden"
            onClick={() => toggleSidebar(false)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            SCRUMBOARD
          </h3>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg px-3 py-2 "
            >
              <span className="text-sm font-medium text-white">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
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
                New Feature
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
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">
                Research
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <div className="flex-shrink-0">
          <header className="px-6 border-b border-gray-200">
            <div className="flex justify-between items-center  py-3">
              {/* Searchbar */}
              <div className="min-w-0 flex-1 flex">
                <button
                  className="text-gray-600 lg:hidden"
                  onClick={() => toggleSidebar(true)}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="flex-shrink-1 ml-4 lg:ml-0 relative w-64">
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
              <div className="ml-6 flex-shrink-0 flex items-center">
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
              <div className="sm:flex sm:items-center">
                <h2 className="text-lg font-medium text-gray-900">Assignees</h2>
                <div className="flex items-center sm:ml-6 mt-1 sm:mt-0">
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
                <button className="pl-2 pr-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md">
                  Complete Sprint
                </button>
                <button className="ml-5 flex items-center pl-2 pr-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-600 hover:to-blue-400 rounded-md">
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

                  <span>New Item</span>
                </button>
              </div>
            </div>
          </header>
        </div>

        <div className="bg-gray-50">
          <main className="p-3 h-full overflow-hidden inline-flex flex flex-wrap mx-1">
            <div className="flex-shrink-0 flex flex-col bg-transparent rounded-md px-1 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 lg:px-4">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Todo
              </h3>
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-3 py-1 bg-red-200 rounded">
                          <span className="text-sm font-medium text-red-500 leading-tight">
                            BUG
                          </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Board In Progress */}
            <div className="flex-shrink-0 flex flex-col bg-transparent rounded-md px-1 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 lg:px-4">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                In Progress
              </h3>
              <div className=" flex-1 min-h-0 overflow-y-auto">

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="p-4">
                      <div className="flex items-baseline justify-between">
                            <div className="px-3 py-1 bg-pink-200 rounded">
                          <span className="text-sm font-medium text-pink-500 leading-tight">
                            RESEARCH
                          </span>
                            </div>

                            <div className="flex items-center text-sm text-gray-400">
                              <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                />
                              </svg>
                              <span className="ml-2">2</span>
                            </div>

                          </div>

                          <p className="mt-2 text-gray-500">
                            Product illustration to symbolize bringing people
                            together
                          </p>

                          <div className="mt-3 flex items-center">
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
                          </div>

                        </div>
                      </div>
                    </div>

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                  <div className="md:flex">
                    <div className="p-4">
                      <div className="flex items-baseline justify-between">
                        <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                          </svg>
                          <span className="ml-2">2</span>
                        </div>

                      </div>

                      <p className="mt-2 text-gray-500">
                        Product illustration to symbolize bringing people
                        together
                      </p>

                      <div className="mt-3 flex items-center">
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
                      </div>

                    </div>
                  </div>
                </div>

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                  <div className="md:flex">
                    <div className="p-4">
                      <div className="flex items-baseline justify-between">
                        <div className="px-3 py-1 bg-green-200 rounded">
                          <span className="text-sm font-medium text-green-500 leading-tight">
                            NEW FEATURE
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                          </svg>
                          <span className="ml-2">2</span>
                        </div>

                      </div>

                      <p className="mt-2 text-gray-500">
                        Product illustration to symbolize bringing people
                        together
                      </p>

                      <div className="mt-3 flex items-center">
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
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Board Testing */}
            <div className="flex-shrink-0 flex flex-col bg-transparent rounded-md px-1 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 lg:px-4">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Testing
              </h3>
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-3 py-1 bg-yellow-200 rounded">
                          <span className="text-sm font-medium text-yellow-500 leading-tight">
                            OVERDUE
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Board Done */}
            <div className="flex-shrink-0 flex flex-col bg-transparent rounded-md px-1 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 lg:px-4 h-screen">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Done
              </h3>
              <div className="overflow-scroll" id="board-scroll">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between ">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      Product illustration to symbolize bringing people
                      together
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="px-2 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            DESIGN
                          </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>

                    </div>

                    <p className="mt-2 text-gray-500">
                      **Product illustration to symbolize bringing people
                      together *
                    </p>

                    <div className="mt-3 flex items-center">
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
