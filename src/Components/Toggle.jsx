import React from 'react'

const Toggle = (props) => {
    
  return (
    <div className="flex justify-center items-center h-screen">
  <button
    onClick={props.toggle}
    className={`px-6 py-2  rounded-md font-semibold transition-colors duration-300
      ${
        props.isDarkMode
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }
    `}
  >
    {props.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>
</div>

  )
}

export default Toggle
