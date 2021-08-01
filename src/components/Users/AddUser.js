import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {

    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge , setEnteredAge] = useState('');
    const [error , setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            setError({
                title : "Invalid Input",
                message : "Please enter a valid name and age(non-empty values)"
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title : "Invalid age",
                message : "Please enter a valid age (> 0)"
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const updatedUsername = (event) => {
        setEnteredUsername(event.target.value);
    }
    const updatedAge = (event) => {
        setEnteredAge(event.target.value);
    }
    const submitHandler = event => {
        setError();
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message}  onSubmit={submitHandler}/>}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUsername} type="text" id="username" onChange={updatedUsername}/>
                <label htmlFor="age">Age (years)</label>
                <input type="number" id="age" value={enteredAge} onChange={updatedAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
        
    )
};

export default AddUser;
