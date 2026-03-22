function serviceSection() {
  document.getElementById("service").scrollIntoView();
}
let cart = [];
function additem(button, name, price) {
  if (button.innerText.includes("Add")) {
    cart.push({
      service: name,
      cost: price,
    });

    button.innerHTML = `Remove Item
        <img src="/images/remove item.png" alt="add items" class="w-4 h-4 ml-1">`;
    button.classList.remove("bg-[#b4c0b581]");
    button.classList.add("bg-red-100", "text-red-600");
  } else {
    cart = cart.filter((item) => item.service !== name);

    button.innerHTML = `
        Add Item  
           <img src="/images/ADD items.png" alt="add items" class="w-4 h-4 ml-1">`;
    button.classList.remove("bg-red-100", "text-red-600");
    button.classList.add("bg-[#b4c0b581]");
  }
  updateCart();
}

function updateCart() {
  const cartBox = document.querySelector(".top-right");
  let html = `<h1 class="text-gray-500 text-xl my-2.5 font-bold">Added Items</h1>
    <hr class="border-gray-300">
    <div class="bg-[#b4c0b581] text-gray-500 font-medium flex justify-between  rounded-[5px] px-4">
                    <h1>S.No</h1>
                    <h1>Service Name</h1>
                    <h1>Price</h1>
                </div>`;
  let cost = 0;
  cart.forEach((item, index) => {
    cost += item.cost;
    html += `
        <div class="flex justify-between my-2 h-auto relative">
            <p class="absolute left-5">${++index}</p>
            <p class="mx-auto">${item.service}</p>
            <p class="absolute right-0">₹${item.cost}</p>
            <hr class="bg-gray-300">
        </div>
        `;
  });
  html += `
  <div class="mx-3 absolute bottom-0 left-0 right-0 p-4 pb-3">
                    <hr class="border-gray-300">
                    <div class="flex justify-between space-x-3">
                    <h1 class="text-xl font-medium text-gray-500">Total Amount</h1>
                    <h1 class="text-xl font-medium text-gray-500">₹${cost}</h1>
                    </div>
                </div>`;

  cartBox.innerHTML = html;
}
function sendMail() {
  const btn = document.querySelector("#book");
  btn.classList.remove("bg-sky-600");
  btn.classList.add("bg-sky-300");
  // reset after 3 seconds
  setTimeout(() => {
    btn.classList.remove("bg-sky-300");
    btn.classList.add("bg-sky-600");
    btn.innerText = "Book now";
  }, 3000);
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
  };

  const serviceId = "service_xahi10l";
  const templateId = "template_eoeta59";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));
}
