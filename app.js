//STEP 1 Grab the page elements we need
const searchInput = document.getElementById("search");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");
const rndBtn = document.getElementById("random-btn");

//All the shows live in the array once they load
//Search filters This array, so searching cost zero network request



let allShows = [];

//Step 2 Place your order: fetch our Tv shows

//We need the address
const BASE_URL = "https://api.tvmaze.com";

// Every request goes through this helper function, three steps every time:
//1 Order ----. fetch(url)
//2 Check the plate -> res.ok
//3 unwrap ----> res.json()


async function getJSON(path) {
  const response =  await fetch (BASE_URL + path);
  return await response.json();
}

//Two ways to order from menu:
// "/shows?page=0" -----> LIST of shows -----> an array (shows)
// "/show/1".    ---> ONE show   -------> {} an object (one show)



//Create a function to pull all shows



async function getShows() {
    const data = await getJSON("/shows?page=0");
    console.log(data);
    console.log(toCard(data[0]));
}



//Create a function to pull only one show



async function getShow(id) {
    return await getJSON("/show/" + id )
}




function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        image: raw.image.medium
    };
}




//-------------------event listener------------------

