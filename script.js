const API = 'https://meowfacts.herokuapp.com/';
const button = document.querySelector('.btn');

async function getRandomFacts(){
    try {
        let res = await fetch(API,{
            method:"GET"
        });
        let data = await res.json();
        openPopup(data.data[0]);
    } catch (error) {
        console.log("Error",error);
    }
}
button.addEventListener("click", (event) =>{
    getRandomFacts();
});

function openPopup(content) {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".popup").style.display = "block";
    document.querySelector('.popup-content').textContent = content;
  }
  
  function closePopup() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";
  }
  