import React from "react";

export default function (props) {
  return (
    <div>
      <a href={props.downloadUrl} target="_blank">
        <button
          type="button"
          className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`}
        >
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <div className="flex flex-col -space-y-1">
              <span className="text-xs">{props.buttonName}</span>
              <span className="text-lg font-light">
                <span className="">{props.version}</span> Version
              </span>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}
