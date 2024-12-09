let cartCount = 0;
let subtotal = 0;

function addToCart(price) {
    cartCount++;
    subtotal += price;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Produk berhasil ditambahkan ke keranjang!\nTotal barang: ${cartCount}\nTotal harga: Rp ${subtotal}`);
}
