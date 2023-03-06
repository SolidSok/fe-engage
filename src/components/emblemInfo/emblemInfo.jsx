import React from 'react';

import EmblemCard from './emblemCard';
import emblemData from './emblemData';

export default function EmblemInfo() {
  const emblem = emblemData;
  return (
    <div>
      <h1>Emblems</h1>
      <div className="emblem-page">
        {emblem.map(emblem => (
          <EmblemCard emblem={emblem} key={emblem.name} />
        ))}
      </div>
    </div>
  );
}
