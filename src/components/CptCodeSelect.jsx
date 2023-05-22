import React from 'react';
import Select from 'react-select';

const CptCodeSelect = ({ options, onChange }) => {
  return (
    <div className="mb-10 mt-10">
      <p className="my-10 px-20">Current Procedural Terminology, more commonly known as CPT, refers to a medical code set created and maintained by the American Medical Association — and used by physicians, allied health professionals, nonphysician practitioners, hospitals, outpatient facilities, and laboratories to represent the services and procedures they perform.</p>
      <div class="mx-auto max-w-lg ...">
         <Select options={options} onChange={onChange} placeholder="Select CPT Code" />
      </div>
    </div>
  );
};

export default CptCodeSelect;