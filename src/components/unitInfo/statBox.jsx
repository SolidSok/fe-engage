import React from 'react';
import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';

export default function StatBox({
  selectedUnit,
  selectedClass,
  selectedEmblem,
}) {
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
          <td>{selectedUnit.growths.hp + selectedClass.growths.hp}</td>
        </tr>
        <tr>
          <td>STR</td>
          <td>{selectedUnit.growths.str}</td>
          <td>{selectedClass.growths.str}</td>
          <td>{selectedUnit.growths.str + selectedClass.growths.str}</td>
        </tr>
        <tr>
          <td>MAG</td>
          <td>{selectedUnit.growths.mag}</td>
          <td>{selectedClass.growths.mag}</td>
          <td>{selectedUnit.growths.mag + selectedClass.growths.mag}</td>
        </tr>{' '}
        <tr>
          <td>DEX</td>
          <td>{selectedUnit.growths.dex}</td>
          <td>{selectedClass.growths.dex}</td>
          <td>{selectedUnit.growths.dex + selectedClass.growths.dex}</td>
        </tr>{' '}
        <tr>
          <td>SPD</td>
          <td>{selectedUnit.growths.spd}</td>
          <td>{selectedClass.growths.spd}</td>
          <td>{selectedUnit.growths.spd + selectedClass.growths.spd}</td>
        </tr>{' '}
        <tr>
          <td>DEF</td>
          <td>{selectedUnit.growths.def}</td>
          <td>{selectedClass.growths.def}</td>
          <td>{selectedUnit.growths.def + selectedClass.growths.def}</td>
        </tr>
        <tr>
          <td>RES</td>
          <td>{selectedUnit.growths.res}</td>
          <td>{selectedClass.growths.res}</td>
          <td>{selectedUnit.growths.res + selectedClass.growths.res}</td>
        </tr>
        <tr>
          <td>LCK</td>
          <td>{selectedUnit.growths.lck}</td>
          <td>{selectedClass.growths.lck}</td>
          <td>{selectedUnit.growths.lck + selectedClass.growths.lck}</td>
        </tr>
        <tr>
          <td>BLD</td>
          <td>{selectedUnit.growths.bld}</td>
          <td>{selectedClass.growths.bld}</td>
          <td>{selectedUnit.growths.bld + selectedClass.growths.bld}</td>
        </tr>
      </tbody>
    </Table>
  );
}
