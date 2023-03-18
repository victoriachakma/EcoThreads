import React from 'react';

const Button = ({ styles }) => (
	<button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-olive bg-tea rounded-[10px] outline-none ${styles}`}>
    Download
  </button>
)

export default Button;