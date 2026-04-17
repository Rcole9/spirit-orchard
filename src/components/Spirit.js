import React from 'react';

function Spirit({ name }) {
  return (
    <div className="spirit">
      {/* Render spirit character */}
      <span role="img" aria-label="spirit">👻</span> {name}
    </div>
  );
}

export default Spirit;
