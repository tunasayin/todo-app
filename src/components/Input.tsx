import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { InputOptions } from '../constants';
import styles from '../styles/Input.module.scss';

const Input = ({ onTodoAdd } : InputOptions) => {
  const [val, setVal] = useState<string>("");
  const onAddButtonClicked = () : void => {
    if (val && onTodoAdd && typeof onTodoAdd === 'function') {
      onTodoAdd({
        id: uuid(),
        content: val,
        createdAt: new Date(),
        isEdited: false
     });
     
      setVal("");
    }
  }

  return (
    <div className={styles.container}>
        <div onClick={onAddButtonClicked} className={styles.btn}>+</div>
        <input value={val} placeholder="Write something to do" onChange={(e) => setVal(e.currentTarget.value?.trim())} className={styles.input} type="text" />
    </div>
  )
}

export default Input