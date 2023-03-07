import React from 'react';

import UnitCard from './unitCard';
import unitData from './unitData';
export default function UnitInfo() {
  const unit = unitData;
  return (
    <div>
      <h1>Units</h1>
      <div className="page">
        {unit.map(unit => (
          <UnitCard unit={unit} key={unit.name} />
        ))}
      </div>
    </div>
  );
}
