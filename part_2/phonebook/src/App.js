import { useState } from "react";


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arian Ansari' }
  ])

  const [newNumber, setNewNumber] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const propertiesObj = {
      name: newNumber
    }
    setPersons(persons.concat(propertiesObj))
    setNewNumber('')
  }

  const addnewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newNumber} onChange={addnewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li>{person.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
