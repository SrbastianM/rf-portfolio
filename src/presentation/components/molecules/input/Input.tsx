import { InputProps } from './InputProps';
import Label from '../../atoms/label/Label';

const Input: React.FC<InputProps> = ({ id, type, placeholder, className, label }) => {
  return (
    <div className="flex flex-col">
      <Label {...label} />
      <input id={id} type={type} placeholder={placeholder} className={`${className}`} />
    </div>
  );
};

export default Input;
