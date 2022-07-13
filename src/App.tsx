import styles from './styles/App.module.scss';

import { Todo as ITodo } from './constants';

import { useState } from 'react';

import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onTodoRemove = (id: string) => {
    setTodos(todos.filter(x => x?.id !== id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1>TODO</h1>
        </div>

        <div className={styles.body}>
          <Input onTodoAdd={(todo) => {
            setTodos([...todos, todo]);
          }} />
          <div className={styles.todos}>
            {
              todos?.map((todo, index) => {

                return <Todo key={index} id={todo.id} content={todo.content} createdAt={todo.createdAt} isEdited={todo.isEdited} onTodoRemove={onTodoRemove} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
