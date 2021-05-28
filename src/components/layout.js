import * as React from "react";
// import { Link } from "gatsby";
import * as layoutStyles from "./layout.module.css";
export default ({ pageTitle, children }) => {
  return (
    <main className={layoutStyles.layout}>
      <title>{pageTitle}</title>

      <h2>{pageTitle} </h2>
      {children}
    </main>
  );
};
