import { v4 as uuid } from "uuid";
import { useState } from "react";
import { InputOptions } from "../constants";
import styles from "../styles/Input.module.scss";

const Input = ({ onTodoAdd }: InputOptions) => {
  const [val, setVal] = useState<string>("");
  const onAddButtonClicked = (): void => {
    if (val.trim() && onTodoAdd && typeof onTodoAdd === "function") {
      onTodoAdd({
        id: uuid(),
        content: val.trim(),
        createdAt: new Date(),
        inEditMode: false,
        isEdited: false,
      });

      setVal("");
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={onAddButtonClicked} className={styles.btn}>
        +
      </div>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") onAddButtonClicked();
        }}
        value={val}
        placeholder="Write something to do"
        onChange={(e) => setVal(e.currentTarget.value)}
        className={styles.input}
        type="text"
      />
    </div>
  );
};

export default Input;
