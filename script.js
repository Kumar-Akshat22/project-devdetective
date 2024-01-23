// Varialbles
const url = "https://api.github.com/users/";
const input = document.getElementById("input");
const search = document.getElementById("search");


search.addEventListener('click' , ()=>{
    
    console.log('Printing the search input value');
    getUserData(url + input.value);
})

async function getUserData(newUrl){

    try{

        const res = await fetch(newUrl);
        const data = await res.json();
        console.log(data);

    }

    catch(error){

        console.log('Error in fetching the data');

    }
}

