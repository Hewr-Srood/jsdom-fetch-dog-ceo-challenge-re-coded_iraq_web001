console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function(){
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
   const dogImageContainer = document.getElementById('dog-image-container');
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';
   let dogBreedsContainer = document.querySelector('#dog-breeds')
   const breedDropdown = document.getElementById("breed-dropdown")

   fetch(imgUrl)
   .then(response =>   {return response.json();})
   .then(json => {
     console.log(json);
      let dogImg = json.message;
      dogImg.forEach(createDogImg);

   fetch(breedUrl)
   .then(response => { return response.json();
})
   .then(json => {
      let dogBreeds = Object.keys(json.message);
      dogBreeds.forEach(breedParser);
   });

   dogBreedsContainer.addEventListener('click', function(event){
      if (event.target.style.color != 'blue'){
         event.target.style.color = 'blue';
      }
      else if (event.target.style.color == 'blue')
      {event.target.style.color = 'black'}
   });

   breedDropdown.addEventListener('change', function(event){
      let listItem = document.querySelectorAll('#breedName');
      listItem.forEach(function(breed){
         if (event.target.value == 'all'){
            breed.style.display = '';
         }
         else if (breed.innerHTML[0] !== event.target.value){
            breed.style.display = 'all';
         }
         else breed.style.display = '';
      });
   })

function createDogImg(url){
    dogImageContainer.insertAdjacentHTML('beforeend',`<img src="${url}">`)
}

   function breedParser(breed){
      const newList = document.createElement('li');
      newList.textContent = breed;
      newList.id = 'breedName';
      dogBreedsContainer.append(newList);
   }
}) //end of DOMloader
