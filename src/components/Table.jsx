import React from "react";

function Table({
  pageData,
  sortBy,
  handleSort,
  page,
  PAGE_SIZE,
  toggleRow,
  expandedRows,
  HEADERS,
}) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {HEADERS.map((h) => (
            <th
              key={h.key}
              onClick={() => handleSort(h.key)}
              className="sortable"
            >
              <div className="th-content">
                <span>{h.label}</span>
                {sortBy.key === h.key && (
                  <span className="sort-ind">
                    {sortBy.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pageData.length === 0 ? (
          <tr>
            <td colSpan={HEADERS.length} className="no-data">
              Sin resultados
            </td>
          </tr>
        ) : (
          pageData.map((row, i) => {
            const globalIndex = (page - 1) * PAGE_SIZE + i;
            const isExpanded = expandedRows.has(globalIndex);
            return (
              <React.Fragment key={globalIndex}>
                <tr className={`row ${isExpanded ? "expanded" : ""}`}>
                  {HEADERS.map((h) => (
                    <td
                      key={h.key}
                      className={h.key === "caratula" ? "caratula-cell" : ""}
                      onClick={() =>
                        h.key === "caratula" && toggleRow(globalIndex)
                      }
                    >
                      {String(row[h.key] ?? "")}
                    </td>
                  ))}
                </tr>
                <tr className="mobile-details">
                  <td colSpan={HEADERS.length}>
                    <div className={`details ${isExpanded ? "open" : ""}`}>
                      {HEADERS.filter((h) => h.key !== "caratula").map((h) => (
                        <div className="detail-row" key={h.key}>
                          <div className="detail-label">{h.label}</div>
                          <div className="detail-value">
                            {String(row[h.key] ?? "")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })
        )}
      </tbody>
    </table>
  );
}

export default Table;
