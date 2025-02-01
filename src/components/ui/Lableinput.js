// components/LabelInput.js
const LabelInput = ({ label, type, name, value, onChange, readOnly = false, className = '', ...props }) => {
    return (
      <div>
        <label className="block text-primary font-semibold">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`w-full border border-gray-300 p-2 rounded-xl ${className}`}
          {...props}
        />
      </div>
    );
  };
  
  export default LabelInput;
  