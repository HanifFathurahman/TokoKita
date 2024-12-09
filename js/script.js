let totalbarang = 0;
let totalharga = 0;

function addToCart(price) {
    totalbarang++;
    totalharga += price;
    document.getElementById('cart-count').innerText = totalbarang;
    alert(`Produk berhasil ditambahkan ke keranjang!\nTotal barang: ${totalbarang}\nTotal harga: Rp ${totalharga}`);
}