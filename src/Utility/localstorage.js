const getstoredreadbook =()=>{

const storedreadbook = localStorage.getItem('read-books');

if(storedreadbook){

return JSON.parse(storedreadbook);

}

return [];

}





const savereadbooks = id => {


const storedreadbooks = getstoredreadbook();
const exists = storedreadbooks.find(bookId =>  bookId ===id);

if(!exists){

    storedreadbooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storedreadbooks))
}



}



export { getstoredreadbook ,savereadbooks}