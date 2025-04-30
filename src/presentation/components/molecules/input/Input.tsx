import { InputProps } from './InputProps';
import Label from '../../atoms/label/Label';

const Input: React.FC<InputProps> = ({ id, type, placeholder, className = '', label, name }) => {
  return (
    <div className="flex flex-col w-full">
      <Label {...label} />
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required
        className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
