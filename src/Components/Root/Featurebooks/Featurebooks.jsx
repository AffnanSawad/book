import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Featurebooks = () => {


const [books,setbooks] = useState([]);


useEffect( 
    ()=>{


  fetch('Books.json')
  .then(res=> res.json()  )
  .then(data=> setbooks(data) );

    }
    
    
    , [])


    return (
        <div  className="md:grid grid-cols-3 gap-16 ml-4  " >

{

  books.map( book =>  <Book  key={book.id} book={book}    ></Book>   )

}


        </div>
    );
};

export default Featurebooks;