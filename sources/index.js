var stock = data;
class Product {

    constructor(stock) {
        this.stock = stock;
        this.$stockTable = null;
    }

    HTMLtemplate({imageUrl:img, name, rarity, vBucks:price}) {
        return `
            <div id="item" class="content__stock-item content__stock-item--${rarity}">
                <img src="${img}" alt="${name}"/>
            </div>`;
    }
    printElements(){
        this.stock.forEach((element) => {
            let $templateElement = this.HTMLtemplate(element);
            this.$stockTable.innerHTML += $templateElement;
        })
    }

    start() {
        this.$stockTable = document.querySelector('#stockTable');
        if (this.$stockTable) {
            this.printElements();
        } else {
            console.log("me lo chupa en reversa");
        }
    }
}

let product = new Product(stock);
product.start();



