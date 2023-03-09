import React, { useEffect, useState } from 'react';

import UnitCard from './unitCard';
import unitData from './unitData';
export default function UnitInfo() {
  const unit = unitData;
  const [selectedUnit, setSelectedUnit] = useState(unit[0]);

  return (
    <div>
      <h1>Units</h1>
      {/* <div className="page">
        {unit.map(unit => (
          <UnitCard unit={unit} key={unit.name} />
        ))}
      </div> */}
      <div className="unit-select top-left">
        {unit.map(unit => {
          return (
            <img
              key={unit.name}
              className="image-select"
              src={unit.image}
              alt={unit.name}
              onClick={unit => setSelectedUnit(unit.indexOf(unit))}
            />
          );
        })}
      </div>
      <div className="unit-card top-right">
        {' '}
        <UnitCard unit={selectedUnit} />
      </div>
      <div className="class-select middle-left"></div>
      <div className="emblem-select bottom-left"></div>
    </div>
  );
}
