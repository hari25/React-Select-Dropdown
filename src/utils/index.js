//find the matching id for selected cpt code
export const getCodeById = (cptCodesData, code) => {
  const matchingId =
    cptCodesData.find((item) => item.code === code)?.id || null;
  return matchingId;
};

//calculate avg cost for selected CPt code
export const calculateAverageCost = (data) => {
  const totalCost = data.reduce((sum, item) => sum + item.cost, 0);
  const averageCost = totalCost / data.length;
  return averageCost;
};
