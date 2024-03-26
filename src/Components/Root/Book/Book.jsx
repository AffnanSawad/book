import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";



const Book = ( {book} ) => {

const {image,bookName, author,review,totalPages,rating,category,publisher,yearOfPublishing   } = book ;


    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-8 mb-8 ml-4 ">
  <figure><img src={image} alt="Shoes" /></figure>


<div className="flex gap-4 mt-4">

 <Link className=" bg-green-300 rounded-sm	ml-4	 " >  {category}       </Link>

</div>


<div className="flex gap-4 ml-4">
<h1 className="text-2xl font-bold"> {bookName} </h1>
<h3 className="mt-2"  > {yearOfPublishing} </h3>


</div>


<h3 className="font-semibold ml-4" > {author} </h3> <br />

<h1 className="font-bold ml-4">REVIEW:-</h1>
<p  className="ml-4"> {review} </p>  <br />

<h1 className="text-2xl font-semibold ml-4">Published By: {publisher} </h1>

<div className="flex gap-56 mt-4 mb-6 ml-4 ">


<h1 className="flex gap-4">  <RiPagesLine /> {totalPages}
   </h1>
<h1 className="flex gap-4">  <IoStar>  </IoStar>  {rating}  </h1>

</div>


<div className="max-w-md ml-4 ">

<button className="btn btn-primary ">View Details</button>


</div>

</div>
    );
};

export default Book;