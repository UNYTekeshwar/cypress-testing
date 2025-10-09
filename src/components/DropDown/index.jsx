import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = ({ options = [], placeholder = "Select...", onSelect, value }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onOutside = (e) => {
        console.log(ref.current, e.target,'e.target');
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onOutside);
    return () => document.removeEventListener("click", onOutside);
  }, []);

  const handleSelect = (opt) => {
    onSelect && onSelect(opt);
    setOpen(false);
  };

  const label = value ? (typeof value === "object" ? value.label : value) : placeholder;

  return (
    <div className="custom-dropdown" ref={ref} data-cy="dropdown">
      <button className="dropdown-toggle" onClick={() => setOpen((s) => !s)} data-cy="dropdown-toggle">
        <span className="dropdown-label">{label}</span>
        <span className="dropdown-caret">▾</span>
      </button>
      {open && (
        <ul className="dropdown-menu" data-cy="dropdown-menu">
          {options.map((opt, idx) => (
            <li key={idx} className="dropdown-item" onClick={() => handleSelect(opt)} data-cy={`dropdown-item-${idx}`}>
              {typeof opt === "object" ? opt.label : opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
