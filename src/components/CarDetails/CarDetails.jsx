import React from 'react';
import PropTypes from 'prop-types';
import Car1 from '../../images/audi-png-45298.png';

const CarDetailsComponent = ({
  financeFee, purchaseFee, totalPayable, duration,
}) => (
  <div className="bg-white p-8 flex flex-col items-center justify-center shadow-lg rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-64">
      <img src={Car1} alt="Car" className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8" />
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">FERRARI</h2>
        <h4 className="text-3sm mb-4">  - details are here</h4>
        <table className="table-auto border-collapse mb-4">
          <tbody>
            <tr className="border-b bg-slate-200">
              <td className="py-2">Finance fee</td>
              <td className="py-2">
                US$
                {financeFee}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Option to purchase fee</td>
              <td className="py-2">
                US$
                {purchaseFee}
              </td>
            </tr>
            <tr className="border-b bg-slate-200">
              <td className="py-2">Total amount payable</td>
              <td className="py-2">
                US$
                {totalPayable}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Duration</td>
              <td className="py-2">
                {duration}
                {' '}
                Months
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-2xl font-bold mb-6">
          5.9% APR Representative
        </div>
        <div className="flex justify-center lg:justify-start gap-4">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md"
          >
            Make Reservation
          </button>
        </div>
      </div>
    </div>
  </div>
);

CarDetailsComponent.propTypes = {
  financeFee: PropTypes.string.isRequired,
  purchaseFee: PropTypes.string.isRequired,
  totalPayable: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default CarDetailsComponent;
