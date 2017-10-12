import * as React from "react";

const Shortcut2 = ({
  className = 'col-link px-4 py-3',
  iconClass,
  text,
  ...props }) => (
  <li>
    <a
      href='#'
      className={className}
      exact
      {...props}
    >
      <span className={iconClass} />
      {text}
    </a>
  </li>
);

export default Shortcut2;