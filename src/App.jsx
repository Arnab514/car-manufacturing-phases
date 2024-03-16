import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

const phasesData = [
  {
    name: 'Market Research',
    subphases: [
      {
        name: 'External',
        subphases: [
          { name: 'B2C', subphases: ['Online', 'Interview', 'Public data', 'Health'] },
          { name: 'B2B', subphases: [] }
        ]
      },
      { name: 'Internal', subphases: [] }
    ]
  },
  {
    name: 'Planning',
    subphases: [
      { name: 'PRD', subphases: [] },
      { name: 'Specs', subphases: [] }
    ]
  },
  {
    name: 'Design',
    subphases: [
      { name: 'Hardware', subphases: [] },
      { name: 'Software', subphases: [] }
    ]
  },
  {
    name: 'Manufacturing',
    subphases: [
      { name: 'Material', subphases: [] },
      { name: 'Production', subphases: [] }
    ]
  },
  {
    name: 'Sales',
    subphases: [
      { name: 'Online', subphases: [] },
      { name: 'Dealership', subphases: [] }
    ]
  }
];

const Dashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const handlePhaseHover = (phaseName) => {
    setSelectedPhase(phaseName);
  };

  const handleSubphaseHover = (phaseName, subphases) => {
    if (subphases && subphases.length > 0) {
      setSelectedPhase(phaseName);
    }
  };

  const renderSubphases = (subphases) => {
    if (!subphases) return null; // Handle the case where subphases is undefined
    return (
      <ul>
        {subphases.map((subphase, index) => (
          <li key={index} onMouseEnter={() => handleSubphaseHover(subphase.name, subphase.subphases)}>
            {subphase.name}
            {subphase.subphases && subphase.subphases.length > 0 && selectedPhase === subphase.name && renderSubphases(subphase.subphases)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dashboard">
      <h1>Car Manufacturing Phases</h1>
      <div className="timeline">
        {phasesData.map((phase, index) => (
          <div key={index} className="phase" onMouseEnter={() => handlePhaseHover(phase.name)}>
            <h2>{phase.name}</h2>
            {renderSubphases(phase.subphases)}
          </div>
        ))}
      </div>
      <div className="details">
        {selectedPhase && (
          <div className="details-content">
            <h2>{selectedPhase}</h2>
            {/* Add detailed information about the selected phase here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
