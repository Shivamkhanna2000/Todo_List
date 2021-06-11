import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


const List = (props) =>{

   
    return(
        <>
            <div className="todo_style">                
                   <span> <DeleteIcon className="deleteIcon" onClick={ () =>{
                    props.onSelect(props.id)
                }}/> </span> 
               
                <li>{props.txt}</li>
            </div>
        </>
    )
}

export default List;