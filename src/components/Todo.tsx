import styles from "../styles/Todo.module.scss";

import { IoMdCheckmark } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Todo as ITodo } from "../constants";
import { useEffect, useState } from "react";

const Todo = (todo: ITodo) => {
  const [inEditMode, setEditMode] = useState<boolean>(false);
  const [val, setVal] = useState<string>(todo.content || "");
  const tabIndex = parseInt(
    new Date().getMinutes().toString() + new Date().getMilliseconds().toString()
  );

  const onChange = (e: any) => {
    if (inEditMode) {
      setVal(e?.currentTarget?.value);
    }
  };

  const onBlur = () => {
    if (inEditMode) setEditMode(false);
  };

  const toggleEditMode = () => {
    if (inEditMode) setEditMode(false);
    else {
      setEditMode(true);

      if (todo?.onEditEnter && typeof todo?.onEditEnter === "function")
        todo.onEditEnter(todo.id);
    }
  };

  useEffect(() => {
    setEditMode(todo.inEditMode);
  }, [todo]);

  useEffect(() => {
    if (
      !inEditMode &&
      todo?.onTodoEdit &&
      typeof todo?.onTodoEdit === "function"
    ) {
      todo.onTodoEdit({
        ...todo,
        content: val,
        isEdited: true,
      });
    } else {
      (
        document.querySelector(`input[tabindex='${tabIndex}']`) as HTMLElement
      )?.focus();
    }

    //eslint-disable-next-line
  }, [inEditMode]);

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.checkboxInner}>
          <IoMdCheckmark
            onClick={() => {
              if (
                todo?.onTodoRemove &&
                typeof todo?.onTodoRemove === "function"
              ) {
                todo.onTodoRemove(todo.id);
              }
            }}
            className={styles.checkboxIcon}
          />
        </div>
      </div>
      <div className={styles.content}>
        <input
          tabIndex={tabIndex}
          onBlur={onBlur}
          className={`${inEditMode ? styles.editMode : ""}`}
          disabled={inEditMode ? false : true}
          type="text"
          value={val}
          onChange={onChange}
        />
      </div>
      <div className={styles.edit}>
        <div className={styles.editInner} onClick={toggleEditMode}>
          {inEditMode ? <IoMdClose /> : <HiPencil />}
        </div>
      </div>
    </div>
  );
};

export default Todo;
