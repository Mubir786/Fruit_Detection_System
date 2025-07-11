import react , {useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';


function App() {

  const [Contact, setContact] = useState([]);

  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList Contact = {Contact}/>
    </div>
  );
}

export default App;
