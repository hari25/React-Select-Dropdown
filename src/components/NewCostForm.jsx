import React from 'react';
import { useState, useEffect } from 'react';
import { getCodeById } from '../utils';
import cptApi from '../api/cptApi';

const NewCostForm = ({cptCodesData, selectedCptCode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
      cost: '',
      facilityType: '',
      copay: '',
    });
  
  //update form data on change
  const handleChange = (e) => {
      const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };
  
  //post new cost to API on submit
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
      setIsSubmitted(true);
      })
      .catch((error) => {
      console.log('Error submitting new cost:', error);
      });

  };
  return (
    <div class="flex flex-wrap items-center justify-center shadow-lg basis-1/2">
        {!isSubmitted ? (
        <form onSubmit={handleSubmit} onChange={handleChange} className="max-w-md mx-auto w-2/3 py-20">
            <h2 class="mb-10 text-2xl">Update new cost for selected CPT code</h2>
            <div className="mb-4">
                <label htmlFor="cost" className="block mb-2">
                Enter New Cost:
                </label>
                <input
                type="number"
                id="cost"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="facilityType" className="block mb-2">
                Enter New Facility Type:
                </label>
                <input
                type="text"
                id="facilityType"
                name="facilityType"
                value={formData.facilityType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="copay" className="block mb-2">
                Enter New Copay:
                </label>
                <input
                type="number"
                id="copay"
                name="copay"
                value={formData.copay}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
        ) : (
            <div className="bg-green-500 text-white p-4 mb-4">
                New Cost has been updated successfully!
             </div>
      )}
    </div>
  );
};

export default NewCostForm;