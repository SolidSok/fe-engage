import React from 'react';
import classData from './classData';
import ClassCard from './classCard';

export default function ClassInfo() {
  const classes = classData;
  return (
    <div>
      <h1>ClassInfo</h1>
      <div className="page">
        {' '}
        {classes.map(classes => (
          <ClassCard classes={classes} key={classes.name} />
        ))}
      </div>
    </div>
  );
}
