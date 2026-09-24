import React, { useState } from 'react';
import './AccordionGallery.css';

export default function AccordionGallery({ items, defaultIndex = 0, expandRatio = 0.5, trigger = "hover" }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="react-bits-accordion-container">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`react-bits-accordion-item ${isActive ? "active" : ""}`}
            style={{ 
              backgroundImage: `url('${item.image}')`,
              flex: isActive ? (1 + expandRatio * 10) : 1
            }}
            onMouseEnter={trigger === "hover" ? () => setActiveIndex(index) : undefined}
            onClick={trigger === "click" ? () => setActiveIndex(index) : undefined}
          >
            <div className="react-bits-accordion-content">
              <h3>{item.label}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
