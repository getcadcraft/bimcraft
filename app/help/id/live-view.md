---
title: Tampilan langsung
summary: Panel di samping model yang menampilkannya dengan tampilan waktu nyata, dengan matahari, bayangan dan cahaya pantulan, serta mengikuti setiap perubahan yang Anda buat; telusuri model dan atur waktu siang serta bulannya.
keywords: tampilan langsung, waktu nyata, real time, realtime, render waktu nyata, telusuri, walkthrough, jalan, orang pertama, presentasi, klien, layar kedua, jendela kedua, monitor, waktu siang, matahari, musim, bulan, bayangan, ambient occlusion, pantulan, cahaya pantulan, global illumination, webgpu, webgl
from: ea5c02bf
---

Tampilan langsung menampilkan model dengan tampilan waktu nyata: langit dan matahari dari lokasi dan tanggal tapak Anda, bayangan matahari, cat dan material yang Anda berikan pada elemen, lampu, dan cahaya yang dipantulkan dari dinding dan lantai. Ia mengikuti apa yang Anda lakukan: putar tampilan 3D dan ia ikut berputar, ubah model dan ia menampilkan perubahannya sebentar kemudian. Tidak ada yang diunggah.

Ia menggambar adegan, cat, lampu dan matahari yang sama seperti [Render gambar](topic:render); untuk gambar jadi, gunakan itu.

## Membukanya

1. Buka model dan pilih {{ui:Tampilan langsung}} di bilah alat. Panel terbuka di atas aplikasi, di kanan bawah.
2. Seret bilah judulnya untuk memindahkan, tarik sudutnya untuk memperbesar.
3. {{ui:Tampilan langsung di jendela baru}} (tombol di sebelahnya) atau {{ui:Jendela baru}} di panel memindahkannya ke jendela tersendiri, untuk layar kedua. Jika peramban Anda memblokir jendela pop-up, ia terbuka sebagai panel.
4. {{ui:Tutup}} menutupnya.

## Kontrolnya

| Kontrol | Fungsinya |
|---|---|
| {{ui:Ikuti tampilan}} | Aktif: tampilan langsung melihat ke arah yang dilihat tampilan 3D. Berjalan mematikannya |
| {{ui:Jalan}} | Berjalan menelusuri model (di bawah) |
| {{ui:Gravitasi}} | Saat berjalan: berdiri di lantai dan menaiki tangga. Mati: terbang |
| {{ui:Waktu}} | Jam dalam sehari. Matahari bergerak saat Anda menyeret |
| {{ui:Bulan}} | Bulannya, agar Anda dapat melihat matahari di musim dingin dan musim panas |
| {{ui:Kualitas}} | {{ui:Untuk komputer ini}}, atau {{ui:Rendah}}, {{ui:Sedang}} atau {{ui:Tinggi}} |

Baris di bagian bawah menyatakan apa yang menggambar tampilan (WebGPU atau WebGL 2), kualitasnya, dan cahaya pantulan.

## Menelusuri model

1. Putar tampilan 3D ke tempat Anda ingin berdiri, lalu pilih {{ui:Jalan}}. Anda berdiri di lantai di bawah titik mata tampilan, setinggi 1.6 m.
2. Klik tampilan langsung, lalu gunakan {{key:W}} {{key:A}} {{key:S}} {{key:D}} atau tombol panah. Tahan {{key:Shift}} untuk berlari. Seret untuk melihat sekeliling.
3. Langkah hingga 40 cm dinaiki (tangga); apa pun yang lebih tinggi adalah dinding. Dinding menghentikan Anda, dan Anda meluncur di sepanjangnya.
4. Dengan {{ui:Gravitasi}} mati, Anda terbang: {{key:E}} naik, {{key:Q}} turun.
5. {{key:Esc}} menghentikan berjalan.

## Cahaya pantulan

Cahaya yang memantul dari dinding yang terkena matahari ke lantai, serta bagian dalam ruangan yang lebih gelap, dihitung di latar belakang pada setiap inti prosesor. Selama bekerja, baris bawah menampilkan {{ui:Cahaya pantulan: 40 %}}; saat sudah siap, tampilan menerapkannya. Setelah ada perubahan, perhitungan dimulai lagi.

:::note
Ini adalah perkiraan untuk tampilan langsung, bukan gambar yang dirender: detail kecil di antara titik-titik mendapat cahaya pantulan dari titik-titik terdekat.
:::

:::note
Peramban berbeda. Jika peramban memiliki WebGPU, tampilan langsung menggunakannya; di tempat lain ia menggunakan WebGL 2 dan tampak sama. Jika keduanya tidak ada, panel akan memberi tahu.
:::
