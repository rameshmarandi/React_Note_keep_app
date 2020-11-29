import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) =>{

    const [expand , setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content:"" ,
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setNote((preValue) =>{
             return {
                ...preValue, 
                [name]:value,
            };
        });
        console.log(note);
    }

    const addEvent = ( ) =>{
       props.passNote(note);
       setNote(
           {
               title: "",
                content:"" ,
            });
    }

    const expandit = () => {
        setExpand(true);
    }
    const backNormal = () => {
        setExpand(false);
    }
    

 return(
     <> 
       <div className="main_note"  onDoubleClick = {backNormal}>
           <form>
              { expand? 
               <input 
               type="text" 
               name="title"
               value={note.title}
               onChange={inputEvent}
               autocomplete="off" 
               placeholder="Title"/>
               : null}
               <textarea  
               name="content"
               value={note.content}
               onChange={inputEvent}
               cols="82" 
               rows="2" 
               placeholder="Write a note"
                onClick = {expandit}
               
               >
               </textarea>

               {expand?
               <Button onClick={addEvent}>
                  <AddIcon className="plus_sign"/>
               </Button> : null}

           </form>
        
       </div>
     </>
 );   
}

export default CreateNote;