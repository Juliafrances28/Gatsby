import React from "react";

export default function Container({ children }) {
  return (
    <div className="header">
      <h1>Next Departing Trains </h1>
      <h4> New York City Subway </h4>
      
      {children}
    </div>
  );
}
