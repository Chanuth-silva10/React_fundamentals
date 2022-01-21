import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  //const [people, setPeople] = React.useState([]); => empty array
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);// newpeople array eka
    setPeople(newPeople);
  };

  const removeItem1 = (id) => {
    setPeople((oldPeople)=>{
      let newPeople = oldPeople.filter((person) => person.id !== id);// newpeople array eka
      return newPeople
    });
  };
  /*function(){ 
    removeItem(id)
  }
  */
  return (
    <>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;// 
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
