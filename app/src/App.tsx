import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<AddTodo/>} />

            <Route path="/edit/:id" element={<EditTodo />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
