let result = document.querySelector("#show");
let num;
var show = document.querySelector(".showjs")
function toss(para) {
    show.innerHTML = `
    <div class="coin-wrapper">
    <img class="coin" src="" alt="">
    </div>
    <div style="text-align: center;margin-top: 10px;">
    <button onclick="clearAll()">Toss Again</button>
    </div>`;
    var coin = document.querySelector(".coin");
    num = Math.ceil(Math.random(num)*2);
    if (para === 1 && num === 1 || para ===2 && num === 2) {
        result.innerHTML = "You won the toss";
    }
    else{
        result.innerHTML = "You lost the toss";
    }
    if (num === 1) {
        coin.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18815.jpg"
    }else if(num === 2){
        coin.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"
    }
}
function clearAll() {
    show.innerHTML = '';
    result.innerHTML = "";
}