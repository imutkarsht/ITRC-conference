import React from 'react';
import { fees } from '../../utils/mockData';
import Button from '../UI/Button';

const AuthorsFee = () => {
  
  return (
    <div className="container dark:bg-slate-800 text-black dark:text-white bg-slate-200 mx-auto px-8 py-2">
      <h2 className="text-2xl font-bold mb-3 dark:text-white text-gray-800 text-center">AUTHOR'S FEE</h2>
      <div className="overflow-x-auto flex flex-col items-center justify-center">
        <table className="min-w-full dark:bg-gray-700 bg-slate-300 dark:text-white text-black px-10 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-orange-200 text-white">
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
       <Button title="Register Now!"/>
      </div>
    </div>
  );
};

export default AuthorsFee;
