import React, { useState, useEffect } from 'react';
import cptApi from './api/cptApi';
import CptCodeSelect from './components/CptCodeSelect';
import AverageCost, {calculateAverageCost} from './components/AverageCost';
import NewCostForm from './components/NewCostForm';
import Logo from './components/Logo';
import { getCodeById } from './utils';

const App = () => {
  const [averageCost, setAverageCost] = useState(null);
  const [newCost, setNewCost] = useState('');
  const [cptCodes, setCptCodes] = useState(null);
  const [selectedCptCode, setSelectedCptCode] = useState(null);
  const [cptCodesData, setCptCodesData] = useState(null);
  const [formData, setFormData] = useState({
    cost: '',
    facilityType: '',
    copay: '',
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const cptCodeId = getCodeById(cptCodesData, selectedCptCode);
    cptApi
      .post('/costs', {
        id: '',
        cptCodeId: cptCodeId,
        cost: formData.cost,
        facilityType: formData.facilityType,
        copay: formData.copay,
      })
      .then((response) => {
        console.log('New cost submitted successfully:', response.data);
        setNewCost('');
      })
      .catch((error) => {
        console.log('Error submitting new cost:', error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div class="container mx-auto">
      <Logo />
      <CptCodeSelect options={cptCodes} onChange={handleCptCodeChange} />
      {averageCost && 
        <div class="flex flex-col lg:flex-row justify-center gap-20">
          <AverageCost cost={averageCost} selectedCptCode={selectedCptCode} />
          <NewCostForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
        </div>
      }
    </div>
  );
};

export default App;