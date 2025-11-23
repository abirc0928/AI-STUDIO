import React from 'react'

const InputField = ({ id, label, type = "text", value, placeholder, disabled = false, onChange }) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-zinc-700 mb-1">{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
      />
    </div>
  )
}

export default InputField
