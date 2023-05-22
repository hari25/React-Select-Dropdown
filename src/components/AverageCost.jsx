import React from 'react';

const calculateAverageCost = (data) => {
  const totalCost = data.reduce((sum, item) => sum + item.cost, 0);
  const averageCost = totalCost / data.length;
  return averageCost;
};

const AverageCost = ({ cost, selectedCptCode }) => {
  return (
    <div className="flex flex-wrap items-center justify-center shadow-lg basis-1/2">
      <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center">
        <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 md:max-w-max bg-white z-30">
          <p className="text-xl">
            Average cost for selected CPT Code{' '}
            <span className="text-gray-500 font-bold">{selectedCptCode}</span> is
          </p>
          <div className="text-center py-4 px-7">
            <h2 className="text-gray-700 text-4xl font-black">{cost}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageCost;
export { calculateAverageCost };
