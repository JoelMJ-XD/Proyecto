import React from 'react';

function BotonMenu({ label, onClick }) {
  return (
    <button className="menu-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default BotonMenu;
