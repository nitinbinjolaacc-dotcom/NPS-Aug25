import React, { useState } from 'react';
import DropdownFilter from './components/DropdownFilter';
import SatisfactionDriverTable from './components/SatisfactionDriverTable';
import NPSSummary from './components/NPSSummary';

const initialDrivers = [
  { name: "Sales Consultation Recommendation", effort: 100, impact: "H", current: 8.1, expected: 8.2 },
  { name: "Value for Money", effort: 200, impact: "M", current: 7.9, expected: 8.0 },
  { name: "Explanation Of Work Carried Out", effort: 100, impact: "H", current: 8.7, expected: 8.9 },
  { name: "Model Recommendation", effort: 200, impact: "M", current: 7.9, expected: 8.0 },
  { name: "Booking Process", effort: 500, impact: "L", current: 8.0, expected: 8.0 },
  { name: "Retailer/Customer Proximity Distribution", effort: 700, impact: "L", current: 0.2, expected: 0.3 }
];

const impactWeight = { L: 1, M: 2, H: 3 };

function App() {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [category, setCategory] = useState("Retailer Group");
  const [buyerType, setBuyerType] = useState("First Time Buyer");
  const [region, setRegion] = useState("UK");

  const handleScoreChange = (index, newScore) => {
    const updatedDrivers = [...drivers];
    updatedDrivers[index].expected = newScore;
    setDrivers(updatedDrivers);
  };

  const calculateNPS = (useExpected = false) => {
    let total = 0;
    let weightSum = 0;
    drivers.forEach(driver => {
      const score = useExpected ? driver.expected : driver.current;
      const weight = impactWeight[driver.impact] / driver.effort;
      total += score * weight;
      weightSum += weight;
    });
    return total / weightSum;
  };

  const currentNPS = calculateNPS(false);
  const expectedNPS = calculateNPS(true);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">NPS Improvement Simulation Tool</h1>
      <div className="grid grid-cols-3 gap-4">
        <DropdownFilter label="Category" options={["Retailer Group", "Site"]} value={category} onChange={setCategory} />
        <DropdownFilter label="Buyer Type" options={["First Time Buyer", "Additional Replacer"]} value={buyerType} onChange={setBuyerType} />
        <DropdownFilter label="Region" options={["UK", "USA", "EU"]} value={region} onChange={setRegion} />
      </div>
      <div className="mt-6">
        <SatisfactionDriverTable drivers={drivers} onScoreChange={handleScoreChange} />
      </div>
      <NPSSummary currentNPS={currentNPS} expectedNPS={expectedNPS} />
    </div>
  );
}

export default App;
