import React from "react";
import "./globalStyles.css";
import { logo, header, navbar, navList } from "./layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <title>Huzaifa</title>
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        Wesite under active development
      </div>
      <header className={header}>
        <p className={logo}>
          HUZ
          <br />
          AIFA.
        </p>

        <nav className={navbar}>
          <ul role="list" className={navList}>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
