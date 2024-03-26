import React from 'react';

const Contact = () => {
    return (
        <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Type</th>
        <th>Available</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>EMAIL: Aasan.12@gmail.com</td>
        <td>12am - 12pm</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>PHONE: 0112643123</td>
        <td>10AM -  10PM</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>EMAIL: asad2001@gmail.com</td>
        <td>24h</td>
      </tr>
    </tbody>
  </table>



<h1 className='text-4xl font-bold mt-10 text-center ' >OUR HEAD OFFICE : MIRPUR12,DHAKA BANGLADESH ....</h1>


</div>        </div>
    );
};

export default Contact;