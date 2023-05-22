export const getCodeById = (cptCodesData, code) => {
  const matchingId =
    cptCodesData.find((item) => item.code === code)?.id || null;
  return matchingId;
};
