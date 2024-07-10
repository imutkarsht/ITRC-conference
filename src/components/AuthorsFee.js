import React from 'react';

const AuthorsFee = () => {
  const fees = [
    {
      category: 'Regular Author',
      india: 'INR 8,100.00',
      outsideIndia: 'USD 300.00',
    },
    {
      category: 'Regular Authors (IEEE Members)',
      india: 'INR 7,200.00',
      outsideIndia: 'USD 240.00',
    },
    {
      category: 'Student Authors - UG & PG',
      india: 'INR 6,300.00',
      outsideIndia: 'USD 150.00',
    },
    {
      category: 'Student Author - UG & PG (IEEE Member)',
      india: 'INR 5,400.00',
      outsideIndia: 'USD 120.00',
    },
    {
      category: 'Invited Presentation',
      india: 'INR 4,500.00',
      outsideIndia: 'USD 90.00',
    },
  ];

  return (
    <div className="container mx-auto px-8 py-2">
      <h2 className="text-2xl font-bold mb-3 text-white text-center">AUTHOR'S FEE</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white px-10 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Affiliated within India</th>
              <th className="py-3 px-6 text-left">Affiliated outside India</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-6">{fee.category}</td>
                <td className="py-3 px-6">{fee.india}</td>
                <td className="py-3 px-6">{fee.outsideIndia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorsFee;
