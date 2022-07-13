import styles from '../styles/Todo.module.scss';

import { IoMdCheckmark } from 'react-icons/io';

import { Todo as ITodo } from "../constants"

const Todo = (todo: ITodo) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.checkboxInner}>
          <IoMdCheckmark onClick={() => {
            if (todo?.onTodoRemove && typeof todo?.onTodoRemove === 'function') {
              todo.onTodoRemove(todo.id);
            }
          }} className={styles.checkboxIcon}/>
        </div>
      </div>
      <div className={styles.content}>
        {todo.content}
      </div>
    </div>
  )
}

export default Todo