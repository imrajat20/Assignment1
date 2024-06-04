import { useState } from 'react';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import VoteForm from './components/VoteForm/VoteForm';
import VoteList from './components/VoteList/VoteList';

const candidates = [
  'Amit',
  'Atul',
  'Aryan'
];

function App() {

  const [formShown, setFormShown] = useState(false);

  const showForm = () => {
    setFormShown(true);
  } 
  const hideForm = () => {
    setFormShown(false);
  };


  return (
   <div>
     { formShown && <VoteForm onClick={hideForm}/>}
    <HomePage onClick={showForm}/>
    <VoteList value={candidates}/>
   </div>
  );
}

export default App;
