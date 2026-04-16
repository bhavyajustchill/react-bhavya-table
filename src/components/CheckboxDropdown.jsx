import React, { useState, useEffect } from "react";
import "../styles/checkbox_dropdown.css";

export default function CheckboxDropdown(props) {
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setOptions(props.colData);
  }, [props.colData]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionName) => {
    const updatedOptions = options.map((option) => {
      if (option.name === optionName) {
        return {
          ...option,
          selected: !option.selected,
        };
      }
      return option;
    });
    props.handleColumnToggle(optionName);
    setOptions(updatedOptions);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown__header" onClick={toggleDropdown}>
        <span className="dropdown__title">Select Columns </span>
        <span className="dropdown__arrow">&#9662;</span>
      </div>
      {isOpen && (
        <ul className="dropdown__options">
          {options.map((option) => (
            <li key={option.name} className="dropdown__option">
              <label className="dropdown__option-label">
                <input
                  type="checkbox"
                  className="me-2"
                  checked={option.selected}
                  onChange={() => handleOptionClick(option.name)}
                />
                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
