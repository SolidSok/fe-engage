import React from 'react';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
    <Tabs justify className="stat-tab" defaultActiveKey="growths">
      <Tab eventKey="growths" title="Growth Rates">
        <Table striped bordered hover variant="dark">
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
              <td>
                {selectedClass.growths.hp}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.hp + jeanClassRates.hp
                  : selectedUnit.growths.hp + selectedClass.growths.hp}
              </td>
            </tr>
            <tr>
              <td>STR</td>
              <td>{selectedUnit.growths.str}</td>
              <td>
                {selectedClass.growths.str}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.str + jeanClassRates.str
                  : selectedUnit.growths.str + selectedClass.growths.str}
              </td>
            </tr>
            <tr>
              <td>MAG</td>
              <td>{selectedUnit.growths.mag}</td>
              <td>
                {selectedClass.growths.mag}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.mag + jeanClassRates.mag
                  : selectedUnit.growths.mag + selectedClass.growths.mag}
              </td>
            </tr>
            <tr>
              <td>DEX</td>
              <td>{selectedUnit.growths.dex}</td>
              <td>
                {selectedClass.growths.dex}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.dex + jeanClassRates.dex
                  : selectedUnit.growths.dex + selectedClass.growths.dex}
              </td>
            </tr>
            <tr>
              <td>SPD</td>
              <td>{selectedUnit.growths.spd}</td>
              <td>
                {selectedClass.growths.spd}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.spd + jeanClassRates.spd
                  : selectedUnit.growths.spd + selectedClass.growths.spd}
              </td>
            </tr>
            <tr>
              <td>DEF</td>
              <td>{selectedUnit.growths.def}</td>
              <td>
                {selectedClass.growths.def}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.def + jeanClassRates.def
                  : selectedUnit.growths.def + selectedClass.growths.def}
              </td>
            </tr>
            <tr>
              <td>RES</td>
              <td>{selectedUnit.growths.res}</td>
              <td>
                {selectedClass.growths.res}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.res + jeanClassRates.res
                  : selectedUnit.growths.res + selectedClass.growths.res}
              </td>
            </tr>
            <tr>
              <td>LCK</td>
              <td>{selectedUnit.growths.lck}</td>
              <td>
                {selectedClass.growths.lck}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
              <td>
                {selectedUnit.name === 'Jean'
                  ? selectedUnit.growths.lck + jeanClassRates.lck
                  : selectedUnit.growths.lck + selectedClass.growths.lck}
              </td>
            </tr>
            <tr>
              <td>BLD</td>
              <td>{selectedUnit.growths.bld}</td>
              <td>
                {selectedClass.growths.bld}
                {selectedUnit.name === 'Jean' && '* 2'}
              </td>
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
      </Tab>
      <Tab eventKey="stats" title="Maximum Stats">
        <Table className="stat-box" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Stats</th>
              <th>Class Limits</th>
              <th>Unit Boosts</th>
              <th>Emblem Boosts</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HP</td>
              <td>{selectedClass.maxStats.hp}</td>
              <td>0</td>
              <td>{selectedEmblem.maxStats.hp}</td>
              <td>{selectedClass.maxStats.hp + selectedEmblem.maxStats.hp}</td>
            </tr>
            <tr>
              <td>STR</td>
              <td>{selectedClass.maxStats.str}</td>
              <td>{selectedUnit.maxStats.str}</td>
              <td>{selectedEmblem.maxStats.str}</td>
              <td>
                {selectedClass.maxStats.str +
                  selectedUnit.maxStats.str +
                  selectedEmblem.maxStats.str}
              </td>
            </tr>
            <tr>
              <td>MAG</td>
              <td>{selectedClass.maxStats.mag}</td>
              <td>{selectedUnit.maxStats.mag}</td>
              <td>{selectedEmblem.maxStats.mag}</td>
              <td>
                {selectedClass.maxStats.mag +
                  selectedUnit.maxStats.mag +
                  selectedEmblem.maxStats.mag}
              </td>
            </tr>
            <tr>
              <td>DEX</td>
              <td>{selectedClass.maxStats.dex}</td>
              <td>{selectedUnit.maxStats.dex}</td>
              <td>{selectedEmblem.maxStats.dex}</td>
              <td>
                {selectedClass.maxStats.dex +
                  selectedUnit.maxStats.dex +
                  selectedEmblem.maxStats.dex}
              </td>
            </tr>
            <tr>
              <td>SPD</td>
              <td>{selectedClass.maxStats.spd}</td>
              <td>{selectedUnit.maxStats.spd}</td>
              <td>{selectedEmblem.maxStats.spd}</td>
              <td>
                {selectedClass.maxStats.spd +
                  selectedUnit.maxStats.spd +
                  selectedEmblem.maxStats.spd}
              </td>
            </tr>
            <tr>
              <td>DEF</td>
              <td>{selectedClass.maxStats.def}</td>
              <td>{selectedUnit.maxStats.def}</td>
              <td>{selectedEmblem.maxStats.def}</td>
              <td>
                {selectedClass.maxStats.def +
                  selectedUnit.maxStats.def +
                  selectedEmblem.maxStats.def}
              </td>
            </tr>
            <tr>
              <td>RES</td>
              <td>{selectedClass.maxStats.res}</td>
              <td>{selectedUnit.maxStats.res}</td>
              <td>{selectedEmblem.maxStats.res}</td>
              <td>
                {selectedClass.maxStats.res +
                  selectedUnit.maxStats.res +
                  selectedEmblem.maxStats.res}
              </td>
            </tr>
            <tr>
              <td>LCK</td>
              <td>{selectedClass.maxStats.lck}</td>
              <td>{selectedUnit.maxStats.lck}</td>
              <td>{selectedEmblem.maxStats.lck}</td>
              <td>
                {selectedClass.maxStats.lck +
                  selectedUnit.maxStats.lck +
                  selectedEmblem.maxStats.lck}
              </td>
            </tr>
            <tr>
              <td>BLD</td>
              <td>{selectedClass.maxStats.bld}</td>
              <td>0</td>
              <td>{selectedEmblem.maxStats.bld}</td>
              <td>
                {selectedClass.maxStats.bld + selectedEmblem.maxStats.bld}
              </td>
            </tr>
            {selectedEmblem.maxStats.mov === 1 && (
              <tr>
                <td>MOV</td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>+2</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}
