import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Bookdetails = () => {

    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt );
    console.log(book);


    const notify = () => {
        
        toast("You have read successfully.");
    
    }
    const notify2 = () => {
        
        toast("Added to the Wishlist!");
    }


    return (
        <>
            
<div>


<div className="text-4xl" >

<h1>BOOK DETAILS :  </h1>


<div className="grid gap-4 md:grid-cols-4 border  border-b-2  mt-4 ">  

<div className=" mt-4 gap-4 md:col-span-2  ml-4 mb-4">

<h1 className="text-4xl font-bold mt-4 " >{book.bookName }</h1> 
<p className="mt-2 text-xl" ><span className="text-2xl font-bold" >BY:</span> {book.author} </p>
<h4 className="font-semibold mt-2" >{book.category}  </h4> 

<p className="text-xl mt-2 "> <span className="text-2xl font-bold" >REVIEW:</span>  {book.review} </p>

<div className="flex gap-4">

  <h4 className="text-xl mt-2 "><span className="text-2xl font-bold" >TAGS:</span> #YoungAdult  </h4>
  <h4 className="text-xl mt-2 "> Identity</h4>

</div>


<div className="text-xl font-semibold mt-4 ">


<p> NUMBER OF PAGES : { book.totalPages} </p>
<p>PUBLISHED BY: {book.publisher} </p>
<p>YEAR: {book.yearOfPublishing} </p>
<p> Rating: {book.rating} </p>

<Link> <button  onClick={notify} className="btn btn-primary" >READ </button> </Link>



<Link> <button onClick={notify2} className="btn btn-accent" >WISHLIST </button> </Link>

<ToastContainer />


</div>


</div>

<div className="">

<img src={book.image} alt="" />

</div>



</div>





</div>



</div>









</>

        
    );
};

export default Bookdetails;