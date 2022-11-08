import React from "react";
import { useLocation } from "react-router";

export default function Card({ name, url, handleDetail }) {
  return (
    <div>
      <li key={name} onClick={() => handleDetail(url)}>
        <button>
          <span>{name}</span>
        </button>
      </li>
    </div>
  );
}
