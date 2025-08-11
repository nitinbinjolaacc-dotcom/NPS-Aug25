import React from 'react';

const NPSSummary = ({ currentNPS, expectedNPS }) => (
  <div className="mt-6 p-4 border rounded bg-gray-50">
    <h2 className="text-lg font-semibold">NPS Summary</h2>
    <p>Current NPS: {currentNPS.toFixed(2)}</p>
    <p>Expected NPS: {expectedNPS.toFixed(2)}</p>
  </div>
);

export default NPSSummary;
