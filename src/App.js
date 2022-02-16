import {useEffect , useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
const getData=()=>{
  const data =localStorage.getItem('todos');
  if(data){
    return JSON.parse(data)
    
  }
  else
  {
    return []
  }

}
function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos,setTodos]=useState(getData());
  
//useEffect(()=>{
  //setTodos(JSON.parse(window.localStorage.getItem('todos')));
//}, []);

//useEffect(()=>{
  //window.localStorage.setItem('todos',todos);
//}, [todos] );
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
   
    let todo={
        title:title,
        description:description
    }
    setTodos([...todos,todo])
  };
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <div >
      <Header 
      todoCount={todos.length}/>
      <Form
      handleSubmit={handleSubmit} 
      setTitle={setTitle}
      setDescription={setDescription}
      title={title}
      description={description}
      todos={todos}
      
      />
      <TodoList
       todos={todos}
      />
      <Footer/>
      

      
    </div>
  );
}
export default App;
