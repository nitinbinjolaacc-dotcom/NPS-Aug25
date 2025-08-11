import React from 'react';

const SatisfactionDriverTable = ({ drivers, onScoreChange }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th>Driver</th>
        <th>Effort</th>
        <th>Impact</th>
        <th>Current Score</th>
        <th>Expected Score</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {drivers.map((driver, index) => (
        <tr key={index}>
          <td>{driver.name}</td>
          <td>{driver.effort}</td>
          <td>{driver.impact}</td>
          <td>{driver.current}</td>
          <td>
            <input
              type="number"
              step="0.1"
              value={driver.expected}
              onChange={e => onScoreChange(index, parseFloat(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 w-20"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SatisfactionDriverTable;
