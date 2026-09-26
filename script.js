/* =========================
   PRODUCTS
========================= */

const products = [

    {
        id: 1,
        name: "Espresso",
        description: "إسبريسو غني ومركز",
        price: 1.50,
        category: "hot",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e32?auto=format&fit=crop&w=800&q=85"    },

    {
        id: 2,
        name: "Americano",
        description: "إسبريسو مع ماء ساخن",
        price: 1.75,
        category: "hot",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "Cappuccino",
        description: "إسبريسو وحليب ورغوة ناعمة",
        price: 2.25,
        category: "hot",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "Latte",
        description: "إسبريسو مع حليب كريمي",
        price: 2.25,
        category: "hot",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 5,
        name: "Spanish Latte",
        description: "إسبريسو مع الحليب المكثف",
        price: 2.75,
        category: "hot",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Iced Latte",
        description: "لاتيه بارد مع الثلج",
        price: 2.50,
        category: "cold",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 7,
        name: "Iced Spanish Latte",
        description: "سبانيش لاتيه بارد",
        price: 2.75,
        category: "cold",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 8,
        name: "Iced Mocha",
        description: "قهوة باردة مع الشوكولاتة",
        price: 2.75,
        category: "cold",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 9,
        name: "Caramel Frappe",
        description: "فرابيه كراميل كريمي",
        price: 3.25,
        category: "cold",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 10,
        name: "Vanilla Frappe",
        description: "فرابيه فانيلا منعش",
        price: 3.00,
        category: "cold",
        image: "https://images.unsplash.com/photo-1572286258217-2d3e8c7a9f8f?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 11,
        name: "Cheesecake",
        description: "تشيزكيك كريمي ناعم",
        price: 2.75,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 12,
        name: "Chocolate Cake",
        description: "كيكة شوكولاتة غنية",
        price: 2.75,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 13,
        name: "Lotus Cake",
        description: "كيكة لوتس بطبقة كريمية",
        price: 3.00,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 14,
        name: "Brownie",
        description: "براوني شوكولاتة دافئ",
        price: 2.25,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 15,
        name: "Waffle",
        description: "وافل طازج مع صوص الشوكولاتة",
        price: 3.00,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 16,
        name: "Fresh Orange",
        description: "عصير برتقال طازج",
        price: 2.00,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 17,
        name: "Lemon Mint",
        description: "ليمون ونعنع منعش",
        price: 2.25,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 18,
        name: "Mojito",
        description: "موهيتو منعش بالفواكه",
        price: 2.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 19,
        name: "Iced Tea",
        description: "شاي مثلج منعش",
        price: 1.75,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 20,
        name: "Strawberry Smoothie",
        description: "سموثي فراولة كريمي",
        price: 3.00,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a0868?auto=format&fit=crop&w=800&q=85"
    }

];


/* =========================
   CART
========================= */

let cart = [];

let currentCategory = "all";


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(list = products) {

    const container = document.getElementById("products");

    if (!container) return;


    if (list.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                color: #766b7d;
            ">
                <div style="font-size:45px; margin-bottom:15px;">
                    🔎
                </div>

                <h3>
                    ما لقينا نتائج
                </h3>

                <p style="margin-top:8px;">
                    جرّب كلمة بحث ثانية
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML = list.map(product => {

        return `

            <div class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-content">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <span class="product-price">
                            ${product.price.toFixed(2)} JD
                        </span>

                        <button
                            class="add-button"
                            onclick="addToCart(${product.id})"
                            aria-label="إضافة للسلة"
                        >
                            +
                        </button>

                    </div>

                </div>

            </div>

        `;

    }).join("");

}


/* =========================
   FILTER
========================= */

function filterProducts(category, button) {

    currentCategory = category;


    document.querySelectorAll(".category-button").forEach(btn => {

        btn.classList.remove("active");

    });


    if (button) {
        button.classList.add("active");
    }


    applyFilters();

}


function searchProducts() {

    applyFilters();

}


function applyFilters() {

    const searchInput = document.getElementById("search-input");

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    let filtered = products.filter(product => {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;


        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);


        return matchesCategory && matchesSearch;

    });


    displayProducts(filtered);

}


/* =========================
   ADD TO CART
========================= */

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );


    if (!product) return;


    const existing = cart.find(
        item => item.id === id
    );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();

    showCartNotification();

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const countElement =
        document.getElementById("cart-count");

    const itemsElement =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");


    const count = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    if (countElement) {
        countElement.textContent = count;
    }


    if (totalElement) {
        totalElement.textContent =
            total.toFixed(2);
    }


    if (!itemsElement) return;


    if (cart.length === 0) {

        itemsElement.innerHTML = `

            <div class="empty-cart">

                <div>

                    <div style="
                        font-size:50px;
                        margin-bottom:15px;
                    ">
                        🛍️
                    </div>

                    <h3>
                        السلة فاضية
                    </h3>

                    <p style="margin-top:8px;">
                        أضف بعض الأصناف وابدأ طلبك
                    </p>

                </div>

            </div>

        `;

        return;
    }


    itemsElement.innerHTML = cart.map(item => {

        return `

            <div class="cart-item">

                <img
                    class="cart-item-image"
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        ${item.price.toFixed(2)} JD
                    </div>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-button"
                        onclick="removeFromCart(${item.id})"
                    >
                        حذف
                    </button>

                </div>

            </div>

        `;

    }).join("");

}


/* =========================
   QUANTITY
========================= */

function changeQuantity(id, amount) {

    const item = cart.find(
        item => item.id === id
    );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== id
        );

    }


    updateCart();

}


/* =========================
   REMOVE
========================= */

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );


    updateCart();

}


/* =========================
   OPEN CART
========================= */

function openCart() {

    const overlay =
        document.getElementById("cart-overlay");


    if (overlay) {

        overlay.classList.add("show");

        document.body.style.overflow = "hidden";

    }

}


/* =========================
   CLOSE CART
========================= */

function closeCart(event) {

    if (
        event &&
        event.target &&
        event.target.id !== "cart-overlay"
    ) {
        return;
    }


    const overlay =
        document.getElementById("cart-overlay");


    if (overlay) {

        overlay.classList.remove("show");

        document.body.style.overflow = "";

    }

}


/* =========================
   NOTIFICATION
========================= */

function showCartNotification() {

    const old =
        document.querySelector(".cart-notification");


    if (old) {
        old.remove();
    }


    const notification =
        document.createElement("div");


    notification.className =
        "cart-notification";


    notification.innerHTML =
        "✓ تمت إضافة المنتج للسلة";


    notification.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 5000;

        background: #35145f;
        color: white;

        padding: 13px 20px;

        border-radius: 12px;

        font-size: 13px;
        font-weight: 700;

        box-shadow: 0 12px 30px rgba(0,0,0,0.2);
    `;


    document.body.appendChild(notification);


    setTimeout(() => {

        notification.remove();

    }, 1800);

}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert("السلة فاضية، أضف منتجات أولاً.");

        return;
    }


    const phone = "962781257466";


    let message =
        "مرحباً Café Luna 👋%0A%0A";

    message +=
        "أرغب بطلب:%0A";


    cart.forEach(item => {

        message +=
            `• ${item.name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} JD%0A`;

    });


    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    message +=
        `%0Aالمجموع: ${total.toFixed(2)} JD`;


    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

}


/* =========================
   INITIALIZE
========================= */


displayProducts();

updateCart();
function changeOrderType() {

    const selected =
        document.querySelector(
            'input[name="order-type"]:checked'
        );

    const tableField =
        document.getElementById("table-field");

    const phoneField =
        document.getElementById("phone-field");

    const tableInput =
        document.getElementById("table-number");

    const phoneInput =
        document.getElementById("customer-phone");


    if (selected.value === "table") {

        tableField.style.display = "block";
        phoneField.style.display = "none";

        tableInput.required = true;
        phoneInput.required = false;

        phoneInput.value = "";

    } else {

        tableField.style.display = "none";
        phoneField.style.display = "block";

        tableInput.required = false;
        phoneInput.required = true;

        tableInput.value = "";

    }

}



