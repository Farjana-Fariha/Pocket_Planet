const loadPhones = async (searchedText) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchedText}`);
   const data = await res.json();
   console.log( searchedText, data.data);
   displayData(data.data);


}
const displayData = phones =>{
   const projectContainer = document.querySelector('.project-container');
   projectContainer.textContent = "";
   phones.forEach(phone =>{
      console.log(phone);
      const phoneCard = document.createElement('div');
      phoneCard.classList ='phone-card';
      phoneCard.innerHTML = `
      <div class="card bg-base-100 shadow-lg p-3">
      <figure><img class="" src="${phone.image}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="text-center text-2xl font-bold py-4">${phone.phone_name
        }</h2>
        <p class="text-center text-xl pb-4">${phone.slug}</p>
        <div class="card-actions">
          <button class="btn btn-primary font-bold text-lg mx-auto">Show Details</button>
        </div>
      </div>
    </div>
      `;
      projectContainer.appendChild(phoneCard);
      

   })
}
const search = () => {
   const inputFeild = document.getElementById('searchedItem');
   const searchedText = inputFeild.value;
   loadPhones(searchedText)
}
