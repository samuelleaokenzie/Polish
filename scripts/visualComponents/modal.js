const buttonsControllersModal = document.querySelectorAll("[data-control-modal]")

for(let index = 0; index < buttonsControllersModal.length; index++){
    buttonsControllersModal[index].addEventListener("click", ()=>{
        let modalId = buttonsControllersModal[index].getAttribute("data-control-modal")
        document.querySelector(`[data-modal-id="${modalId}"]`).classList.toggle("show-modal")
    })
}

const buttonsControllersProduct = document.querySelectorAll("[data-control-product]")

for(let index = 0; index < buttonsControllersProduct.length; index++){
    buttonsControllersProduct[index].addEventListener("click", ()=>{
        let productTitle = buttonsControllersProduct[index].getAttribute("data-product-title")
        let productDescription = buttonsControllersProduct[index].getAttribute("data-product-description")
        let productImg = buttonsControllersProduct[index].getAttribute("data-product-img")
  
        document.querySelector(".product-modal-title").textContent = productTitle
        document.querySelector(".product-modal-description").textContent = productDescription
        document.querySelector(".product-modal-img").src = productImg
    })
}