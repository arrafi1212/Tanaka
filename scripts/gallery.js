let items = [
  {
    name: "Guitar Classic 1",
    details:
      "A type of acoustic guitar used in classical music. Has a characteristic on the strings are made of nylon.",
    catagory: "classic guitar",
    price: "Rp. 2.200.000",
    tag: "Sold",
    image: "./assets/products/product1.jpg",
  },
  {
    name: "Guitar Electric 1",
    details:
      "A type of guitar that uses multiple pickups to convert the sound or vibration of the guitar strings into an electric current.",
    catagory: "electric guitar",
    price: "Rp. 3.250.000",
    tag: "Sale",
    image: "./assets/products/product2.jpg",
  },
  {
    name: "Guitar Nylon 1",
    details:
      "This type of guitar uses nylon strings which gives it a warm tone and is very soft but is quite expensive.",
    catagory: "Nylon String",
    price: "Rp. 3.400.000",
    tag: "Sale",
    image: "./assets/products/product3.jpg",
  },
  {
    name: "Guitar Accoustic 1",
    details:
      "Built on the experience and technology gained when classical guitars are handcrafted and also the price is cheap.",
    catagory: "Accoustic Guitar",
    price: "Rp. 5.000.000",
    tag: "Sold",
    image: "./assets/products/product4.jpg",
  },
  {
    name: "Guitar Classic 2",
    details:
      "A type of acoustic guitar used in classical music. Has a characteristic on the strings are made of nylon.",
    catagory: "classic guitar",
    price: "Rp. 1.850.000",
    tag: "Sold",
    image: "./assets/products/product5.jpg",
  },
  {
    name: "Guitar Electric 2",
    details:
      "A type of guitar that uses multiple pickups to convert the sound or vibration of the guitar strings into an electric current.",
    catagory: "electric guitar",
    price: "Rp. 4.120.000",
    tag: "Sale",
    image: "./assets/products/product6.jpg",
  },
  {
    name: "Guitar Classic 3",
    details:
      "A type of acoustic guitar used in classical music. Has a characteristic on the strings are made of nylon.",
    catagory: "Classic Guitar",
    price: "Rp. 3.720.000",
    tag: "Sold",
    image: "./assets/products/product7.jpg",
  },
];

items.forEach((item) => {
  document.getElementById("grid").insertAdjacentHTML(
    "beforeend",
    `<div class="item">
            <div class="product-card">
              <div class="badge">${item.tag}</div>
              <div class="product-tumb">
                <img src="${item.image}" alt="" />
              </div>
              <div class="product-details">
                <span class="product-catagory">${item.catagory}</span>
                <h4><a href="">${item.name}</a></h4>
                <p>
                  ${item.details}
                </p>
                <div class="product-bottom-details">
                  <div class="product-price">${item.price}</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
  );
});

function selectCategory() {
  document.getElementById("grid").innerHTML = "";
  let catagory = document.forms["form-catagory"]["catagory"].value.toLowerCase();
  items.forEach((item) => {
    if (catagory == item.catagory.toLowerCase() || catagory == "all") {
      document.getElementById("grid").insertAdjacentHTML(
        "beforeend",
        `<div class="item">
                  <div class="product-card">
                      <div class="badge">${item.tag}</div>
                      <div class="product-tumb">
                      <img src="${item.image}" alt="" />
                      </div>
                      <div class="product-details">
                      <span class="product-catagory">${item.catagory}</span>
                      <h4><a href="">${item.name}</a></h4>
                      <p>
                          ${item.details}
                      </p>
                      <div class="product-bottom-details">
                          <div class="product-price">${item.price}</div>
                          <div class="product-links">
                          <a href=""><i class="fa fa-heart"></i></a>
                          <a href=""><i class="fa fa-shopping-cart"></i></a>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>`
      );
    }
  });
}