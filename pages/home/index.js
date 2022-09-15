function scrollProductsCards() {
  let buttonsControl = document.querySelectorAll("[data-control-scroll]");

  for (let index = 0; index < buttonsControl.length; index++) {
    buttonsControl[index].addEventListener("click", function () {
      let scrolArea = buttonsControl[index].getAttribute("data-control-scroll");

      let direction = buttonsControl[index].getAttribute("data-direction");

      let scrollQuatity;
      if (direction == "positive") {
        scrollQuatity = 500;
      } else if (direction == "negative") {
        scrollQuatity = -500;
      }

      document
        .querySelector(`[data-scroll="${scrolArea}"]`)
        .scrollBy(scrollQuatity, 0);
    });
  }
}

scrollProductsCards();

function renderProducts(selector = HTMLAllCollection, products = Array) {
  products.map((product) =>
    document.querySelector(selector).insertAdjacentHTML(
      "beforeend",
      `
    <div class="product-card">
      <div class="product-card-header">
        <img src="${product.img}" alt="" />
        <button class="bt like">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0204 1.97656C10.7314 0.875 8.83295 1.08594 7.63763 2.30469L7.19232 2.77344L6.72357 2.30469C5.5517 1.08594 3.62982 0.875 2.34076 1.97656C0.864197 3.24219 0.793884 5.49219 2.10638 6.85156L6.65326 11.5391C6.93451 11.8438 7.4267 11.8438 7.70795 11.5391L12.2548 6.85156C13.5673 5.49219 13.497 3.24219 12.0204 1.97656Z"
            />
          </svg>
        </button>
      </div>
      <div class="product-card-body">
        <span class="font-4-400 color-grey-2">${
          productsCategory[product.category]
        }</span>
        <h3 class="font-3-medium">
          ${product.title}
        </h3>
        <strong class="font-3-bold">${Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}</strong>
      </div>
      <div class="product-card-footer">
        <button class="bt"  
        data-control-modal="modal-product-details" 
        data-product-img="${product.img}" 
        data-control-product="true" 
        data-product-title="${product.title}" 
        data-product-description="${product.description}">
          Ver mais detalhes
        </button>
        <button class="bt" aria-label="Adicionar ao carrinho" title="Adicionar ao carrinho" data-product-button-add="${
          product.id
        }">
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2812 9C14.582 9 14.8555 8.80859 14.9375 8.50781L16.2227 2.82031C16.3047 2.41016 16.0039 2 15.5664 2H4.84766L4.60156 0.796875C4.51953 0.496094 4.24609 0.25 3.94531 0.25H1.15625C0.773438 0.25 0.5 0.550781 0.5 0.90625V1.34375C0.5 1.72656 0.773438 2 1.15625 2H3.04297L4.98438 11.4062C4.49219 11.6797 4.16406 12.1992 4.21875 12.8281C4.24609 13.5938 4.875 14.2227 5.66797 14.25C6.54297 14.3047 7.28125 13.5938 7.28125 12.7188C7.28125 12.3086 7.08984 11.9258 6.81641 11.625H12.5312C12.2578 11.9258 12.0664 12.3359 12.0938 12.7734C12.0938 13.5938 12.7773 14.25 13.5977 14.25C14.4453 14.2773 15.1562 13.5938 15.1562 12.7188C15.1562 12.1172 14.8008 11.5977 14.2812 11.3516L14.418 10.6953C14.5273 10.2852 14.1992 9.875 13.7891 9.875H6.46094L6.26953 9H14.2812ZM11.6562 4.84375C11.875 4.84375 12.0938 5.0625 12.0938 5.28125V5.71875C12.0938 5.96484 11.875 6.15625 11.6562 6.15625H10.3438V7.25C10.3438 7.49609 10.125 7.6875 9.90625 7.6875H9.46875C9.22266 7.6875 9.03125 7.49609 9.03125 7.25V6.15625H7.71875C7.47266 6.15625 7.28125 5.96484 7.28125 5.71875V5.28125C7.28125 5.0625 7.47266 4.84375 7.71875 4.84375H9.03125V3.75C9.03125 3.53125 9.22266 3.3125 9.46875 3.3125H9.90625C10.125 3.3125 10.3438 3.53125 10.3438 3.75V4.84375H11.6562Z"
            />
          </svg>
        </button>
      </div>
    </div>
    `
    )
  );
}

function renderCartProducts(selector = HTMLAllCollection, product = Object) {
  document.querySelector(selector).insertAdjacentHTML(
    "beforeend",
    `
    <div class="cart-product">
      <img src="${product.img}" alt="">
      <h5 class="cart-product-title font-3-medium">${product.title}</h5>
      <strong class="cart-product-price font-4-bold">${Intl.NumberFormat(
        "pt-br",
        {
          style: "currency",
          currency: "BRL",
        }
      ).format(product.price)}</strong>
    </div>
    `
  );
}

const productsCategory = ["Estofados", "Estantes", "Decorações"];

const products = [
  {
    id: Math.random() * 15,
    title: "Poltrona branca com revestimento de tecido",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 400.0,
    img: "/assets/img/products/1.jpg",
    category: 0,
  },
  {
    id: Math.random() * 15,
    title: "Sofá verde escuro minimalista com almofadas",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 700.0,
    img: "/assets/img/products/2.png",
    category: 0,
  },
  {
    id: Math.random() * 15,
    title: "Poltrona azul minimalista com revestimento de tecido",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 300.0,
    img: "/assets/img/products/3.png",
    category: 0,
  },
  {
    id: Math.random() * 15,
    title: "Cama de casal minimalista feita com madeira original",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 900.0,
    img: "/assets/img/products/4.png",
    category: 0,
  },
  {
    id: Math.random() * 15,
    title: "Colchão de casal minimalista feito com algodão de alta qualidade",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 900.0,
    img: "/assets/img/products/5.png",
    category: 0,
  },
  {
    id: Math.random() * 15,
    title: "Estante simples para guardar livros e servir como decoração",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 100.0,
    img: "/assets/img/products/6.png",
    category: 1,
  },
  {
    id: Math.random() * 15,
    title: "Estante amadeirada com revestida com material de alta qualidade",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 140.0,
    img: "/assets/img/products/7.png",
    category: 1,
  },
  {
    id: Math.random() * 15,
    title: "Armario minimalista para guardar livros e servir de decoração",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 140.0,
    img: "/assets/img/products/8.png",
    category: 1,
  },
  {
    id: Math.random() * 15,
    title:
      "Armario simples - minimalista para guardar livros e servir de decoração",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 140.0,
    img: "/assets/img/products/9.png",
    category: 1,
  },
  {
    id: Math.random() * 15,
    title: "Jarro branco minimalista para decoração de sala",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/10.png",
    category: 2,
  },
  {
    id: Math.random() * 15,
    title: "Quadro com arte abstrata para decoração de salas",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/11.png",
    category: 2,
  },
  {
    id: Math.random() * 15,
    title: "Materiais de madeira para decoração de salas e escritórios",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/12.png",
    category: 2,
  },
  {
    id: Math.random() * 15,
    title: "Materiais de madeira para decoração de salas e escritórios",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/13.png",
    category: 2,
  },
  {
    id: Math.random() * 15,
    title: "Materiais de madeira para decoração de salas e escritórios",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/14.png",
    category: 2,
  },
  {
    id: Math.random() * 15,
    title: "Materiais de madeira para decoração de salas e escritórios",
    description:
      "Por ser um móvel que serve como assento, é importante que essa peça tenha estabilidade ideal, né? E é exatamente o que os pés em aço oferecem! O material é ideal para esse tipo de mobiliário já que deixa ele mais firme para receber visitas ou para os momentos de relaxar.",
    price: 40.0,
    img: "/assets/img/products/15.png",
    category: 2,
  },
];

const produtctsCategory0 = products.filter((element) => element.category === 0);
const produtctsCategory1 = products.filter((element) => element.category === 1);
const produtctsCategory2 = products.filter((element) => element.category === 2);

renderProducts("[data-products-filter='0']", produtctsCategory0);
renderProducts("[data-products-filter='1']", produtctsCategory1);
renderProducts("[data-products-filter='2']", produtctsCategory2);

let cart = [];

const buttonsProducts = document.querySelectorAll("[data-product-button-add]");

for (let index = 0; index < buttonsProducts.length; index++) {
  buttonsProducts[index].addEventListener("click", () => {
    let modalId = buttonsProducts[index].getAttribute(
      "data-product-button-add"
    );
    let newData = products.find((element) => element.id == modalId);
    cart = [...cart, newData];

    renderCartProducts("[data-modal-id='modal-cart'] .modal-body", newData);

    document.querySelector(".cart-number").textContent = cart.length;
  });
}
