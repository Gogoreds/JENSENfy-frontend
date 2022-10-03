import React from "react";

function Menus({ title, menuObjects }) {
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObjects &&
          menuObjects.map((menus) => (
            <li>
              {" "}
              <a href="/">
                <i>{menus.icon}</i>
                <span>{menus.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menus };
