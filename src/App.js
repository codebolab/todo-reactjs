import './App.css';
import { Task } from './components/Task';

const TODO = [
  {id: '1', title: 'valor', completed: false, description: 'description', steps: []},
  {id: '2', title: 'valor 2', completed: false, description: 'description 2', steps: []},
]

function App() {

  return (
    <div className="App">
      {TODO.map(task => <Task task={task} key={task.id}/>)}
    </div>
  );
  
}

export default App;
