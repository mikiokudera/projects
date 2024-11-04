const accessKey="bv3CTijciAggAAZPg0jvCzF0JPJh5I0EdgWjnCaBWpc";

const searchForm=document.getElementById("#search-form");
const searchResult=document.getElementById("#search-result");
const showMoreBtn=document.getElementById("#show-btn");
const searchBox=document.getElementById("#search-box");

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response= await fetch(url);
    const data= await response.json();

    console.log(data);
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})