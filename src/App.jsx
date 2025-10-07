import React from "react";
import DataTable from "./components/DataTable";

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Expedientes</h1>
      </header>

      <main className="container">
        <DataTable />
      </main>

      <footer className="app-footer">Federico Diaz Escobar</footer>
    </div>
  );
}
