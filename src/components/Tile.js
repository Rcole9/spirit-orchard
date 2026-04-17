import React from 'react';


function Tile({ type, onClick }) {
  const style = {
    width: 40,
    height: 40,
    border: '1px solid #aaa',
    background: type === 'planted' ? '#8fbc8f' : '#f5f5dc',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    userSelect: 'none',
  };
  return (
    <div style={style} onClick={onClick} title={type}>
      {type === 'planted' ? '🌱' : ''}
    </div>
  );
}

export default Tile;
