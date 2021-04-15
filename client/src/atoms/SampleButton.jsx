import React from 'react'

const SampleButton = (props) => {
    return <button {...props} className="px-4 py-1 text-xs text-white transition-all transform bg-teal-500 rounded shadow-md hover:bg-teal-600 active:shadow-sm active:bg-teal-700 active:scale-99">
       {props.text || "Click me"}
    </button>
}

export default SampleButton
