import React from 'react';
import Table from 'react-bootstrap/Table';

export default function StatBox({
  selectedUnit,
  selectedClass,
  selectedEmblem,
}) {
  const jeanClassRates = {
    hp: selectedClass.growths.hp * 2,
    str: selectedClass.growths.str * 2,
    mag: selectedClass.growths.mag * 2,
    dex: selectedClass.growths.dex * 2,
    spd: selectedClass.growths.spd * 2,
    def: selectedClass.growths.def * 2,
    res: selectedClass.growths.res * 2,
    lck: selectedClass.growths.lck * 2,
    bld: selectedClass.growths.bld * 2,
  };

  return (
    <Table className="stat-box" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Personal Growth Rate</th>
          <th>Class Growth Rate</th>
          <th>Combined Growth Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HP</td>
          <td>{selectedUnit.growths.hp}</td>
          <td> {selectedClass.growths.hp}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.hp + jeanClassRates.hp
              : selectedUnit.growths.hp + selectedClass.growths.hp}
          </td>
        </tr>
        <tr>
          <td>STR</td>
          <td>{selectedUnit.growths.str}</td>
          <td>{selectedClass.growths.str}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.str + jeanClassRates.str
              : selectedUnit.growths.str + selectedClass.growths.str}
          </td>
        </tr>
        <tr>
          <td>MAG</td>
          <td>{selectedUnit.growths.mag}</td>
          <td>{selectedClass.growths.mag}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.mag + jeanClassRates.mag
              : selectedUnit.growths.mag + selectedClass.growths.mag}
          </td>
        </tr>
        <tr>
          <td>DEX</td>
          <td>{selectedUnit.growths.dex}</td>
          <td>{selectedClass.growths.dex}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.dex + jeanClassRates.dex
              : selectedUnit.growths.dex + selectedClass.growths.dex}
          </td>
        </tr>
        <tr>
          <td>SPD</td>
          <td>{selectedUnit.growths.spd}</td>
          <td>{selectedClass.growths.spd}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.spd + jeanClassRates.spd
              : selectedUnit.growths.spd + selectedClass.growths.spd}
          </td>
        </tr>
        <tr>
          <td>DEF</td>
          <td>{selectedUnit.growths.def}</td>
          <td>{selectedClass.growths.def}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.def + jeanClassRates.def
              : selectedUnit.growths.def + selectedClass.growths.def}
          </td>
        </tr>
        <tr>
          <td>RES</td>
          <td>{selectedUnit.growths.res}</td>
          <td>{selectedClass.growths.res}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.res + jeanClassRates.res
              : selectedUnit.growths.res + selectedClass.growths.res}
          </td>
        </tr>
        <tr>
          <td>LCK</td>
          <td>{selectedUnit.growths.lck}</td>
          <td>{selectedClass.growths.lck}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.lck + jeanClassRates.lck
              : selectedUnit.growths.lck + selectedClass.growths.lck}
          </td>
        </tr>
        <tr>
          <td>BLD</td>
          <td>{selectedUnit.growths.bld}</td>
          <td>{selectedClass.growths.bld}</td>
          <td>
            {selectedUnit.name === 'Jean'
              ? selectedUnit.growths.bld + jeanClassRates.bld
              : selectedUnit.growths.bld + selectedClass.growths.bld}
          </td>
        </tr>
        {selectedUnit.name === 'Jean' && (
          <tr>
            <td colSpan={4}>Jean doubles his class growth rates</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
