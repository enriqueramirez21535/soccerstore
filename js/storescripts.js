//data struction for products
const PRODUCTS = {
    product_1: {
        id: "product_1",
        name: "Franklin Sports Soccer Ball",
        description: "Soft Cover foam cushioning system gives these soccer balls a soft, responsive feel. All Weather PVC cover makes this ball water resistant.",
        price: 10.99,
        stars: 1,
        image: "assets/img/products/soccerball.jpg"
    }, product_2: {
        id: "product_2",
        name: "adidas Soccer Duffel Bag",
        description: "Medium size duffel made of 100% polyester. Bottom Width: 19 in, Depth: 10 in, Height: 9 in.",
        price: 40.99,
        stars: 5,
        image: "assets/img/products/adidasduffel.jpg"
    }, product_3: {
        id: "product_3",
        name: "KAEGREEL Drawstring Soccer Bag",
        description: "Hidden Net Drawstring Backpack Fit soccer ball, basketball,baseball ,or whatever else you or your kids need to play. Perfect for sports, gym, yoga, travel and etc. It is a great sports gift for men and women. ",
        price: 19.99,
        stars: 4,
        image: "assets/img/products/soccerbackpack.jpg"
    }, product_4: {
        id: "product_4",
        name: "Youth Soccer Shin Guards, Age 12-16 Years",
        description: "Adjustable Elastic Nylon Buckle Straps: crafted with two flexible bands, the child soccer pads are more stable for long time wearing, great for teenagers, children, kids, boys, girls etc.",
        price: 12.99,
        stars: 2,
        image: "assets/img/products/youthshinguard.jpg"
    }, product_5: {
        id: "product_5",
        name: "PodiuMax Portable Soccer Trainer, Rebounder Net with Adjustable Angle",
        description: "Portable Soccer rebounder trainer with adjustable angle. Includes travel carrying bag.",
        price: 89.99,
        stars: 3,
        image: "assets/img/products/portabletrainer.jpg"
    }, product_6: {
        id: "product_6",
        name: "QUICKPLAY Q-Fold Soccer Goal",
        description: "Fast set-up-all-weather soccer goal. Made from durable 68mm diameter high-grade uPVC. ",
        price: 145.99,
        stars: 2,
        image: "assets/img/products/soccergoal.jpg"
    }, product_7: {
        id: "product_7",
        name: "adidas Unisex-Adult Training Predator Goalie Gloves",
        description: "83% Ethylenvinyl Acetate, 15% Polyester, 2% Natural Rubber. Soft Grip 2.5 latex for grip and cushioning.",
        price: 14.99,
        stars: 2,
        image: "assets/img/products/goalgloves.jpg"
    }, product_8: {
        id: "product_8",
        name: "adidas unisex-adult 3-stripe Hoop Soccer Socks (1-pair)",
        description: "80% Nylon/13% Polyester/6% Natural Latex Rubber/1% Spandex. Lightweight construction for a close fit and excellent ball touch.",
        price: 10.99,
        stars: 2,
        image: "assets/img/products/soccersocks.jpg"
    }, product_9: {
        id: "product_9",
        name: "adidas Men's Trio 21 Training Jersey",
        description: "100% polyester men's jersey for training. Moisture-absorbing AEROREADY helps you stay dry and mesh inserts offer breathability. ",
        price: 29.99,
        stars: 2,
        image: "assets/img/products/trainingjersey.jpg"
        
    }
};

const CART = [];

$(document).ready(function () {
    showProducts();

    $('#show-cart').on('click', showCart);


});

function getProductHTML(productId) {

    const product = PRODUCTS[productId];

    const productHTML = $("#product-template").clone();
    productHTML.prop("id", "");
    productHTML.removeClass('d-none');

    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-price").text(product.price);

    const imageE = productHTML.find(".card-img-top");
    imageE.prop("src", product.image);
    imageE.prop("alt", product.name);

    return productHTML;
}

function showProducts() {
    for (let product in PRODUCTS) {
        const productHTML = getProductHTML(product);
        
        const buttonE = productHTML.find(".product-action")
        buttonE.text("Add to Cart");
        buttonE.on('click', addProduct);
        buttonE.data("target", product);
        $("#products").append(productHTML);

    }

}
function addProduct () {
    const productId = $(this).data("target");
    CART.push(productId);

    updateCartNumber();
}

function showCart() {
    $("#products-cart").empty();

    for(let i = 0; i < CART.length; i++) {
        const productId = CART[i];

        const productHTML = getProductHTML(productId);

        const buttonE = productHTML.find(".product-action")
        buttonE.text("Remove");
        buttonE.data("product-index", i);
        buttonE.on('click', removeProduct);

        $("#products-cart").append(productHTML);
    }
}

function removeProduct () {
    const productIndex = $(this).data("product-index");
    CART.splice(productIndex, 1);

    showCart();
    updateCartNumber();
}

function updateCartNumber () {
    $("#cart-total").text(CART.length);
}