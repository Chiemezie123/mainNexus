import React from "react";

export default function Stroke() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%" // Use 100% to make it responsive
      height="2" // Fixed height
      viewBox="0 0 1113 2" // Keep the viewBox for scaling
      fill="none"
      preserveAspectRatio="none" // Ensure the stroke stretches to fit the width
    >
      <path d="M0.5 1L1112.5 1.0001" stroke="#828385" />
    </svg>
  );
}