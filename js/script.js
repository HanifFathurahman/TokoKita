let cartCount = 0;

function addToCart(price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Produk berhasil ditambahkan ke keranjang! Total barang: ${cartCount}`);
}