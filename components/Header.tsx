import React from "react";
function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="header">
      {/* <img id="logo" src="/logo.png"></img> */}
      {children}
    </div>
  );
}

export default Header;
