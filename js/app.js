const loadPhones = async (searchedText) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchedText}`);
   const data = await res.json();
   displayData(data.data);


}
const displayData = phones =>{
   const projectContainer = document.querySelector('.project-container');
   projectContainer.textContent = "";
   // display show more btn 
   const showMoreBtn = document.getElementById('show-more-btn');
   if(phones.length > 10){
      showMoreBtn.classList.remove('hidden')
   }else{
      showMoreBtn.classList.add('hidden')
   }
   // display products
   phones = phones.slice(0,10)
   phones.forEach(phone =>{
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
          <button onclick="showDetailsVBtn('${phone.slug}')" class="btn btn-primary font-bold text-lg mx-auto">Show Details</button>
        </div>
      </div>
    </div>
      `;
      projectContainer.appendChild(phoneCard);
   });
   loading(false)
}
// search item
const search = () => {
   loading(true)
   const inputFeild = document.getElementById('searchedItem');
   const searchedText = inputFeild.value;
   loadPhones(searchedText)
}
// show loading
const loading = (isLoading) => {
   const loading = document.getElementById('loading');
   if(isLoading){
      loading.classList.remove('hidden')
   }else{
      loading.classList.add('hidden');
   }
}
// Show details
const showDetailsVBtn = async (id) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
   const data = await res.json();
   displayDetails(data.data)
}


// display details
const displayDetails = (phone) => {
   show_details.showModal();
   console.log(phone);
   const detailsContainer = document.getElementById('details-container');
   detailsContainer.innerHTML = `
   <div class="py-6 px-7 shadow-lg flex justify-center items-center rounded-md">
   <img src="${phone.image}" alt="">
 </div>
 <h4 class="text-xl mt-3"><span class="font-bold">Brand:</span><span> ${phone.brand}</span></h4>
 <h4 class="text-xl"><span class="font-bold">Name:</span><span> ${phone.name}</span></h4>
 <h4 class="text-2xl"><span class="font-bold">MainFeatures</span></h4>
 <h4 class="text-xl"><span class="font-bold">Storage:</span><span> ${phone.mainFeatures.storage}</span></h4>
 <h4 class="text-xl"><span class="font-bold">Display size:</span><span> ${phone.mainFeatures.displaySize}</span></h4>
 <h4 class="text-xl"><span class="font-bold">Chip set:</span><span> ${phone.mainFeatures.chipSet}</span></h4>
 <h4 class="text-xl"><span class="font-bold">Memory:</span><span> ${phone.mainFeatures.memory}</span></h4>
   `;
}