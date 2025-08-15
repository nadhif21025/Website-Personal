function beliProduk(namaProduk, hargaProduk) {
    localStorage.setItem('produk', namaProduk);
    localStorage.setItem('harga', hargaProduk);
    window.location.href = 'transaksi.html';
}

function prosesTransaksi() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const jumlah = document.getElementById('jumlah').value;

    const produk = localStorage.getItem('produk');
    const harga = localStorage.getItem('harga');
    const total = harga * jumlah;

    localStorage.setItem('namaPelanggan', nama);
    localStorage.setItem('alamatPelanggan', alamat);
    localStorage.setItem('jumlahBeli', jumlah);
    localStorage.setItem('totalHarga', total);

    window.location.href = 'invoice.html';
}