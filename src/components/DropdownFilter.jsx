import React from 'react';

const DropdownFilter = ({ label, options, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default DropdownFilter;
