import React from 'react';
import Select from 'react-select';
import AverageCost from './AverageCost';
import NewCostForm from './NewCostForm';
import cptApi from '../api/cptApi';
import { getCodeById, calculateAverageCost } from '../utils';
import { useState, useEffect } from 'react';

const CptCodeSelect = () => {
  const [averageCost, setAverageCost] = useState(null);
  const [cptCodes, setCptCodes] = useState(null);
  const [selectedCptCode, setSelectedCptCode] = useState(null);
  const [cptCodesData, setCptCodesData] = useState(null);
  
  // fetch CPT codes from API
  useEffect(() => {
    const fetchCptCodes = async () => {
      try {
        const response = await cptApi.get('/cptCodes');
        const cptCodesObj = response.data.map((item) => ({
          value: item.code,
          label: item.code,
        }));
        setCptCodes(cptCodesObj);
        setCptCodesData(response.data);
      } catch (error) {
        console.log('Error fetching CPT codes:', error);
      }
    };

    fetchCptCodes();
  }, []);

  // fetch average cost for selected CPT code
  const handleCptCodeChange = (selectedOption) => {
    setSelectedCptCode(selectedOption.value);
    const cptCodeId = getCodeById(cptCodesData, selectedOption.value);
    cptApi
      .get(`/cptCodes/${cptCodeId}/costs`)
      .then((response) => {
        const average = calculateAverageCost(response.data);
        setAverageCost(average);
      })
      .catch((error) => {
        console.log('Error fetching average cost:', error);
      });
  };
  return (
    <div className="mb-10 mt-10">
      <p className="my-10 px-20">Current Procedural Terminology, more commonly known as CPT, refers to a medical code set created and maintained by the American Medical Association — and used by physicians, allied health professionals, nonphysician practitioners, hospitals, outpatient facilities, and laboratories to represent the services and procedures they perform.</p>
      <div class="mx-auto">
        <div class="text-center mb-10 max-w-lg z-50 relative mx-auto">
         <Select options={cptCodes} onChange={handleCptCodeChange} placeholder="Select CPT Code" />
        </div>
        {averageCost && 
          <div class="flex flex-col lg:flex-row justify-center gap-20">
            <AverageCost cost={averageCost} selectedCptCode={selectedCptCode} />
            <NewCostForm cptCodesData={cptCodesData} selectedCptCode={selectedCptCode}  />
          </div>
        }
      </div>
    </div>
  );
};

export default CptCodeSelect;