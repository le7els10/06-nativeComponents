import {useState} from 'react';
import {FormItems} from '../data/MenuItems';

export const useForm = <T extends Object>(form: T) => {
  const [formulario, setformulario] = useState(FormItems);

  const onChange = <K extends Object>(value: K, campo: keyof T) => {
    setformulario({
      ...formulario,
      [campo]: value,
    });
  };
  return {
    ...formulario,
    onChange,
    formulario,
  };
};
