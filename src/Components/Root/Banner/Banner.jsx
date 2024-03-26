import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/K2FTrgX/ready-back-school.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WELCOME TO THE BOOKS ARENA!</h1>
            <p className="mb-5">A sanctuary of literature, diverse stories, knowledge, exploration, community, belonging, comfort, imagination, and endless possibilities for readers and writers alike..</p>
         
<Link to='/listedbooks'  ><button className="btn btn-primary">View The List</button></Link>
         
          </div>

        </div>



      </div>


    );
};

export default Banner;