import React from 'react';

const NewCostForm = ({ onSubmit, onChange, formData }) => {
  return (
    <div class="flex flex-wrap items-center justify-center shadow-lg basis-1/2">
        <form onSubmit={onSubmit} className="max-w-md mx-auto w-2/3 py-20">
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
    </div>

  );
};

export default NewCostForm;