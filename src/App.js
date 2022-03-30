import React from 'react';
import './App.css';
import { ToDoList } from './modules/ToDo';
import { TodoListReducer } from './modules/ToDo/TodoListReducer';
import { Text } from './components/Text';

function App() {

  return (
    <div className="App container">
      <div>
        <Text text={'To Do List Project'} type="title"/>
      </div>
      <div>
        {/* <ToDoList /> */}
        <TodoListReducer />
      </div>
    </div>
  );
  
}

export default App;
