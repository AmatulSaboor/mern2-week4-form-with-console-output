import {useState} from 'react';

let MyForm = () => {
    
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let handleFormSubmit = e => {
        e.preventDefault();
        console.log(`The name is ${name} and age is ${age}`)
    }
    return(
        <form action="" onSubmit={e => handleFormSubmit(e)}>
            <label htmlFor="name">
                Name :   
            </label>
            <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} /><br />
            <label htmlFor="age">
                Age :   
            </label>
            <input type="text" value={age} id="age" onChange={e => setAge(e.target.value)} /><br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MyForm;