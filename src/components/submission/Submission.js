import React, { useState } from 'react';
import { sections } from './submissionSectionData';
import HeadText from '../UI/HeadText';

const SubmissionPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="py-4 bg-slate-100 dark:bg-slate-900 dark:text-white text-black" id="submissions">
      <div className='flex items-center justify-center'>
        <HeadText title="Submission" />
      </div>
      <div className="max-w-7xl bg-slate-200 dark:bg-slate-800 mx-auto mt-4 px-4 py-2">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400">Submission Guidelines for conference name</h1>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left dark:bg-slate-700 bg-slate-300 px-4 py-2 rounded-t-lg text-orange-500 dark:text-orange-300 font-semibold focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </button>
            {openSection === index && (
              <div className="dark:bg-slate-600 bg-white px-4 py-2 rounded-b-lg">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmissionPage;
