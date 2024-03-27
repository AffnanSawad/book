import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoredreadbook } from '../../../Utility/localstorage';

const ListedBooks = () => {

const books = useLoaderData();

const [readbooks,setreadbooks] = useState([]);

useEffect(   
    
  ()=> {


const  storedbookIds = getstoredreadbook();
if(books.length > 0){

 //const booksread = books.filter(book => storedbookIds.includes(book.id) );


const booksread = [];
for(const id of storedbookIds){
const book = books.find(book=>book.id===id);
if(book){
    booksread.push(book)
}


}

setreadbooks(booksread);
 //console.log(books, storedbookIds ,booksread);

}

  }  
    
    
    ,[])

    return (
        <div className='' >
            <h1 className='text-4xl font-extrabold mb-5'> LIST OF READ BOOKS : </h1>
        
        <ul className='grid gap-10 md:grid-cols-3 ' >


{

readbooks.map(book => <li key={book.id}  >

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={book.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold "> {book.bookName} </h2>
    <p> <span className='font-bold text-xl' >By</span> {book.author} </p>
<h1 className="text-xl font-bold"> <span className=' text-xl' >PUBLISHED By</span> {book.publisher} </h1>
<h1 className="text-xl font-bold"> <span className='font-bold text-xl' >PUBLISHED YEAR</span> {book.yearOfPublishing} </h1>

<div className='flex gap-10' >

<h1>  <span className='font-bold text-xl' >PAGE:</span>      {book.totalPages} </h1>
<h1>  <span className='font-bold text-xl' >RATING::</span>   {book.rating} </h1>


</div>


    <div className="card-actions ">
      <button className="btn btn-primary">VIEW DETAILS</button>
    </div>
  </div>
</div>




</li>   )



}


        </ul>
        
        
        
        
        
        
        </div>





    );
};

export default ListedBooks;