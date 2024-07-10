import React from 'react';

const ConferenceInfo = () => {
  return (
    <div className="container mx-auto px-4 py-2 bg-slate-100 dark:bg-slate-900 text-black dark:text-white">
      <div className="dark:bg-slate-800 bg-slate-200 shadow-md rounded-lg p-6">
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          <span className="font-bold text-orange-500">&lt;CONFERENCE NAME&gt;</span> is inviting original, previously unpublished, and high-quality research papers addressing research challenges and advances in the topics mentioned below. <span className="font-bold text-orange-500">&lt;CONFERENCE NAME&gt;</span> takes plagiarism very seriously and regards plagiarism as professional misconduct. Papers will be screened for plagiarism and, when identified, the paper will be rejected. In addition, all authors of the paper will be denied the conference, and other papers by these author(s) will also be rejected.
        </p>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          When a paper is accepted, <span className="font-bold text-orange-500">&lt;CONFERENCE NAME&gt;</span> does not encourage withdrawals after the paper is accepted, meaning it should not be submitted with the intention to get reviews by the TPC.
        </p>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Papers for presentations should conform to the IEEE format and specifications. All submissions must be in English only. Authors are invited to submit a full paper (Maximum 6 pages, double-column US letter size) as PDF using the IEEE templates. The IEEE paper template can be downloaded from the link given below:
        </p>
        <div className="text-center">
          <a 
            href="https://www.ieee.org/content/dam/ieeeorg/ieee/web/org/conferences/conference-template-a4.docx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-orange-200 text-black font-bold px-4 py-2 rounded-md shadow-md hover:bg-orange-400 transition-colors duration-300"
          >
            Download IEEE Template
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;
