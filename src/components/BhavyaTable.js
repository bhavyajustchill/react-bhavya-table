import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import CheckboxDropdown from "./CheckboxDropdown";

export default function BhavyaTable(props) {
  const data = props.data;
  const allColumns = Object.keys(data[0]).map((column) => ({
    name: column,
    visible: true,
  }));
  const [colData, setColData] = useState([]);
  const [columns, setColumns] = useState(allColumns);
  const [filteredData, setFilteredData] = useState(data);
  const [sortOrder, setSortOrder] = useState(-1);
  const [selectedFilters, setSelectedFilters] = useState({});

  if (colData.length <= 0) {
    columns.forEach((column) => {
      colData.push({
        name: column.name,
        selected: true,
      });
    });
  }

  const handleSort = (column) => {
    let sortedData = null;
    if (sortOrder === -1) {
      sortedData = [...filteredData].sort((a, b) => (a[column] > b[column] ? 1 : -1));
      setSortOrder(0);
    } else if (sortOrder === 0 || sortOrder === 1) {
      sortedData = filteredData.reverse();
      sortOrder === 0 ? setSortOrder(1) : setSortOrder(0);
    }
    setFilteredData(sortedData);
  };

  const handleFilterToggle = (columnName, value) => {
    const columnFilters = selectedFilters[columnName] || [];
    const updatedFilters = columnFilters.includes(value)
      ? columnFilters.filter((val) => val !== value)
      : [...columnFilters, value];

    setSelectedFilters({
      ...selectedFilters,
      [columnName]: updatedFilters,
    });
  };

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      return Object.entries(selectedFilters).every(([column, filters]) => {
        return filters.length === 0 || filters.includes(item[column]);
      });
    });
    setFilteredData(filteredData);
  };

  const handleColumnToggle = (columnName) => {
    const updatedColumns = columns.map((column) =>
      column.name === columnName ? { ...column, visible: !column.visible } : column
    );
    setColumns(updatedColumns);
  };

  const handleExportCSV = () => {
    const selectedColumns = columns.filter((column) => column.visible);
    const csvData = filteredData.map((item) => {
      return selectedColumns.reduce((acc, col) => {
        acc[col.name] = item[col.name];
        return acc;
      }, {});
    });

    return csvData;
  };

  const handleExportPDF = () => {
    const selectedColumns = columns.filter((column) => column.visible);
    const doc = new jsPDF();
    const tableData = filteredData.map((item) =>
      selectedColumns.map((col) => String(item[col.name]))
    );
    doc.autoTable({
      head: [selectedColumns.map((col) => String(col.name))],
      body: tableData,
    });
    doc.save("table.pdf");
  };

  return (
    <div>
      <div className="container d-grid">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start my-3">
            <CheckboxDropdown
              colData={colData}
              handleColumnToggle={handleColumnToggle}></CheckboxDropdown>
          </div>
          <div className="d-flex justify-content-end my-3">
            <button className="btn btn-primary mx-1" onClick={() => window.print()}>
              Print
            </button>
            <button className="btn btn-danger mx-1" onClick={handleExportPDF}>
              Export PDF
            </button>
            <button className="btn btn-success mx-1">
              <CSVLink
                className="text-light text-decoration-none"
                data={handleExportCSV()}
                filename="table.csv">
                Export CSV
              </CSVLink>
            </button>
          </div>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            {columns.map((column) =>
              column.visible ? (
                <>
                <th key={column.name}>
                  <div className="row container">
                  {column.name.charAt(0).toUpperCase() + column.name.slice(1)}  
                  </div>
                  <div className="row d-flex justify-content-center mt-2">
                    <div className="col-6 p-1 text-end">
                  <button
                    className="btn btn-link text-light text-decoration-none p-0"
                    onClick={() => handleSort(column.name)}>
                    <i className="bi bi-arrow-down-up"></i>
                  </button>
                    </div>
                    <div className="col-6 text-start p-1"><button
                    className="btn btn-sm btn-link text-light text-decoration-none p-0"
                    data-bs-toggle="modal"
                    data-bs-target={`#filterModal_${column.name}`}>
                    <i class="bi bi-funnel-fill"></i>
                  </button></div>
                  </div>  
                  <div
                    className="modal fade"
                    id={`filterModal_${column.name}`}
                    tabIndex="-1"
                    aria-labelledby={`filterModalLabel_${column.name}`}
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-dark" id={`filterModalLabel_${column.name}`}>
                            {column.name.charAt(0).toUpperCase() + column.name.slice(1)} Filters
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body fw-normal">
                          {Array.from(new Set(filteredData.map((item) => item[column.name]))).map(
                            (value) => (
                              <div className="form-check my-4" key={value}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`filter_${column.name}_${value}`}
                                  value={value}
                                  checked={selectedFilters[column.name]?.includes(value) || false}
                                  onChange={() => handleFilterToggle(column.name, value)}
                                />
                                <label
                                  className="form-check-label text-dark"
                                  htmlFor={`filter_${column.name}_${value}`}>
                                  {value}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-success" onClick={handleFilter}>
                            Apply Filters
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                </>
              ) : null
            )}
          </tr>
          
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) =>
                column.visible ? <td key={column.name}>{item[column.name]}</td> : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
