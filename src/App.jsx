import React , {useState}from 'react';
import Header from './Header';
import Footer from './Footer';
import  CreateNote from './CreateNote';
import Note from './Note';

const App = () =>{

    const [addItem , setAddItem] = useState([]);
     const addNote = (note)  =>{ 
    // alert("I am clicked.");
        setAddItem((oldData) =>{
            return[...oldData ,note ];
        });
        console.log(note);
    };  
    
    const onDelete = (id) =>{
        setAddItem((preValue) =>
        preValue.filter((currdata, index) =>{
          
            return index !== id;
        })
        );
    };

 return(
     <> 
       <Header/>
       <CreateNote passNote = {addNote}/>
       

        {addItem.map((val, index) =>{
            return <Note
               key = {index}
               id = {index}
               title={val.title}
               content = {val.content}
               deleteItem = {onDelete}
            />
        })}
       < Footer/>
     

    </>);   
}

export default App;