import React, { useState } from 'react';
import Member from '../UI/Member';
import { members } from './memberData';


// Main component to render the list of members
const MembersList = () => {
  const [selectedCommittee, setSelectedCommittee] = useState('All');

  const handleCommitteeChange = (event) => {
    setSelectedCommittee(event.target.value);
  };

  // Generate unique committee options
  const committeeOptions = ['All', ...new Set(members.map(member => member.committee))];

  const filteredMembers = selectedCommittee === 'All'
    ? members
    : members.filter(member => member.committee === selectedCommittee);

  return (
    <div className="p-4 bg-slate-800 m-5 rounded-md">
      <div className="flex justify-center mb-4">
        <select 
          value={selectedCommittee} 
          onChange={handleCommitteeChange} 
          className="px-4 py-2 border rounded-md"
        >
          {committeeOptions.map(committee => (
            <option key={committee} value={committee}>{committee}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredMembers.map(member => (
          <Member 
            key={member.id} 
            name={member.name} 
            position={member.position} 
            place={member.place} 
            committee={member.committee} 
            imageSrc={member.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
