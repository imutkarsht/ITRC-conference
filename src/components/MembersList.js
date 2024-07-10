import React, { useState } from 'react';
import Member from './Member';

// Dummy data array
const members = [
  { 
    id: 1, 
    name: 'Dr. John Doe', 
    position: 'Chairman', 
    place: 'University of Example', 
    committee: 'Patron',
    imageSrc: 'https://picsum.photos/id/1/1200/1300'
  },
  { 
    id: 2, 
    name: 'Dr. Jane Smith', 
    position: 'Vice Chairman', 
    place: 'Institute of Example', 
    committee: 'General Chair',
    imageSrc: 'https://picsum.photos/id/2/1200/1300'
  },
  { 
    id: 3, 
    name: 'Dr. Alan Turing', 
    position: 'Member', 
    place: 'Organizing Chair', 
    committee: 'Organizing Chair',
    imageSrc: 'https://picsum.photos/id/3/1200/1300'
  },
  { 
    id: 4, 
    name: 'Dr. Ada Lovelace', 
    position: 'Member', 
    place: 'Computing Association', 
    committee: 'Conference Secretary',
    imageSrc: 'https://picsum.photos/id/4/1200/1300'
  },
  { 
    id: 5, 
    name: 'Dr. Charles Babbage', 
    position: 'Member', 
    place: 'Analytical Club', 
    committee: 'Technical Program Committee',
    imageSrc: 'https://picsum.photos/id/5/1200/1300'
  },
  { 
    id: 6, 
    name: 'Dr. Marie Curie', 
    position: 'Member', 
    place: 'Physics Union', 
    committee: 'Registration Committee',
    imageSrc: 'https://picsum.photos/id/6/1200/1300'
  },
  { 
    id: 7, 
    name: 'Dr. Nikola Tesla', 
    position: 'Member', 
    place: 'Electric Society', 
    committee: 'Publication Committee',
    imageSrc: 'https://picsum.photos/id/7/1200/1300'
  },
  { 
    id: 8, 
    name: 'Dr. Isaac Newton', 
    position: 'Member', 
    place: 'Science Academy', 
    committee: 'Publicity Committee',
    imageSrc: 'https://picsum.photos/id/8/1200/1300'
  },
  { 
    id: 9, 
    name: 'Dr. Rosalind Franklin', 
    position: 'Member', 
    place: 'DNA Research Group', 
    committee: 'Finance Committee',
    imageSrc: 'https://picsum.photos/id/9/1200/1300'
  },
  { 
    id: 10, 
    name: 'Dr. Katherine Johnson', 
    position: 'Member', 
    place: 'Space Research Institute', 
    committee: 'Sponsorship Committee',
    imageSrc: 'https://picsum.photos/id/10/1200/1300'
  },
];

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
    <div className="p-4">
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
