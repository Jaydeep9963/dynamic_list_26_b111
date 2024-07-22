import React, { useState } from "react";
import "./ItemList.css";

function ItemList({ items }) {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (itemId) => {
    setShowDetails((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item">
          <button
            onClick={() => toggleDetails(item.id)}
            aria-expanded={showDetails[item.id]}
            className="item-button"
          >
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </button>
          {showDetails[item.id] && (
            <div className="details">
              <p>{item.fullDescription}</p>
              {/* More details, images, actions, etc. can go here */}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
