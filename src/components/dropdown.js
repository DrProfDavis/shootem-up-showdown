import React from "react";

function DropdownMenu() {
  

  function DropdownItem( props ) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem> Move </DropdownItem>
      <DropdownItem> Dash </DropdownItem>
      <DropdownItem> Shoot </DropdownItem>
      <DropdownItem> Rest </DropdownItem>
    </div>
  )
}

export default DropdownMenu;