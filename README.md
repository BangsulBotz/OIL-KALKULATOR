# **Oil Production Calculator** 🌍⛽

Aplikasi **Oil Production Calculator** adalah alat yang dirancang untuk menghitung estimasi keuntungan harian berdasarkan harga minyak dan tingkat produksi dalam industri perminyakan. Aplikasi ini berguna untuk memberikan gambaran kasar mengenai pendapatan yang dapat diperoleh dari hasil produksi minyak per hari.

## **Fitur Utama** 🚀

- **Input Harga Minyak (USD)** 💵  
  Menghitung estimasi keuntungan berdasarkan harga minyak yang dimasukkan.
  
- **Input Tingkat Produksi (Barrel/Hari)** 📊  
  Menentukan jumlah barrel yang diproduksi dalam sehari.
  
- **Perhitungan Keuntungan Harian** 💰  
  Menampilkan hasil perkalian antara harga minyak dan jumlah barrel per hari untuk menghitung keuntungan.

- **Visualisasi Harga Minyak** 📈  
  Menyediakan grafik yang menunjukkan fluktuasi harga minyak menggunakan **Chart.js**.

---

## **Screenshots** 🖼️

![Screenshot Aplikasi](https://via.placeholder.com/800x400.png?text=Oil+Production+Calculator)

---

## **Animasi Minyak** 💥

Untuk menambah kesan visual yang lebih menarik, berikut adalah animasi perminyakan yang dapat memberi kesan dinamis pada aplikasi. Tambahkan animasi berikut untuk menciptakan nuansa yang lebih hidup!

```html
<iframe src="https://giphy.com/embed/d2t0p96lICvbXbH2jO" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/oil-rig-d2t0p96lICvbXbH2jO">via GIPHY</a></p>

Cara Penggunaan 🛠️
Clone repository ini ke lokal komputer Anda menggunakan perintah:

bash
Salin kode
git clone https://github.com/username/OilCalculator.git
cd OilCalculator
Install dependencies yang dibutuhkan oleh aplikasi:

bash
Salin kode
npm install
Jalankan aplikasi:

bash
Salin kode
npm start
Aplikasi akan berjalan di localhost pada port yang telah ditentukan. Anda dapat membuka aplikasi melalui browser di alamat http://localhost:3000.

Alur Kerja Aplikasi 🔄
Masukkan harga minyak (USD) dan tingkat produksi (barrel/hari) di input form.
Aplikasi akan menghitung estimasi keuntungan harian berdasarkan input tersebut.
Visualisasi grafik harga minyak akan ditampilkan menggunakan Chart.js.
Hasil perhitungan keuntungan akan ditampilkan dalam dua mata uang: USD dan IDR.
Animasi Interaktif dengan Chart.js 📉
Aplikasi ini menampilkan grafik Harga Minyak secara real-time menggunakan Chart.js. Grafik ini memungkinkan pengguna untuk melihat fluktuasi harga minyak sepanjang waktu.

html
Salin kode
<canvas id="oilPriceChart" width="400" height="200"></canvas>
<script>
  var ctx = document.getElementById('oilPriceChart').getContext('2d');
  var oilPriceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Harga Minyak (USD)',
        data: [10, 15, 20, 25, 30, 35],
        borderColor: '#FF6347',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
Fitur Tambahan 🎨
Dark Mode 🌙
Aplikasi ini mendukung tema gelap, memberikan kenyamanan saat digunakan di malam hari.

Responsif 📱
Antarmuka aplikasi disesuaikan dengan perangkat seluler, sehingga pengguna dapat mengaksesnya dengan mudah di berbagai platform.

Keamanan 🔒
Menggunakan HTTPS untuk melindungi data pengguna dan memastikan aplikasi berjalan dengan aman.

Pengembangan Lebih Lanjut 🚧
Integrasi dengan API Harga Minyak Real-Time ⛽:
Aplikasi ini dapat ditingkatkan dengan mengintegrasikan API yang memberikan data harga minyak secara real-time untuk memperbarui grafik secara otomatis.

Fitur Multi-Mata Uang 💱:
Menambahkan fitur untuk mendukung lebih banyak mata uang internasional selain USD dan IDR.

Perhitungan Keuntungan Berkelanjutan 📊:
Menambahkan fitur untuk menghitung keuntungan jangka panjang, dengan mempertimbangkan variabel lain seperti biaya operasional, pajak, dan fluktuasi harg
