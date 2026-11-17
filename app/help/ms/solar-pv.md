---
title: Tatasusunan Solar PV, teduhan dan hasil
summary: Pasang tatasusunan solar pada bumbung atau tanah, teduhkannya daripada model, anggarkan tenaga tahunan, saiz rentetan dan hasilkan data gambar rajah satu garisan. Semua input dipaparkan dan modul permulaan serta kehilangan adalah generik.
keywords: solar, pv, photovoltaic, tatasusunan, modul, bumbung, teduhan, hasil, kwh, kwp, saiz rentetan, invertor, satu garisan, kecondongan, azimut, jarak baris
from: adf4aaf3
---

## Apa yang akan anda lakukan

Buka **panel Solar PV**. Pilih muka bumbung (kecondongan dan arah hadapnya dibaca daripada model) atau letakkan tatasusunan di tanah dengan kecondongan dan arah hadap; modul dipasang di dalamnya dengan sela undur dan dikira, memberikan kuasa DC dalam kWp. Meletakkan tatasusunan menulisnya ke dalam model sebagai peranti solar, dalam satu langkah buat asal.

## Teduhan, hasil dan rentetan

- **Teduhan** memancarkan sinar dari setiap modul ke arah matahari untuk hari tipikal setiap bulan terhadap geometri model itu sendiri, supaya bangunan jiran, parapet dan baris di hadapan diambil kira. Hanya cahaya matahari langsung dikurangkan, dan tatasusunan yang sebahagiannya teduh kehilangan kuasa mengikut kadarnya.
- **Hasil** memberikan kWh mengikut bulan dan tahun, kWh per kWp, dan nisbah prestasi. Data matahari datang daripada jumlah bulanan anda sendiri pada permukaan mengufuk jika anda menaipnya. Tanpanya, panel menggunakan had atas langit cerah, dan ia menyatakannya. **Ambil iklim daripada NASA POWER** dengan butang pada tab Hasil: ia menghantar hanya latitud dan longitud tapak, sekali sahaja, dan menyimpan jawapannya pada komputer ini (disemak daripada pelayar pada 2026-10-30). PVGIS tidak membenarkan halaman web membaca jawapannya, jadi tab itu memberikan pautan yang membuka data bulanan PVGIS untuk tapak itu dalam tab baharu; tampal apa yang dipaparkan ke dalam kotak dan dua belas bulan akan diisi.
- **Rentetan** menyemak modul setiap rentetan terhadap julat voltan invertor pada hari paling sejuk dan paling panas, dan rentetan selari terhadap arusnya.
- **Gambar rajah satu garisan** menghasilkan data gambar rajah (tatasusunan, penggabung, pemutus, invertor, panel, utiliti) dengan saiz wayar dan fius daripada faktor yang anda taip. Ia ialah data dan SVG; add-on Elektrik dalam CadCraft boleh meletakkannya sebagai simbol.

Modul, invertor, kehilangan dan faktor wayar yang disertakan dengan BimCraft ialah contoh generik, dilabelkan dalam setiap hasil. Taip data pengilang dan nilai kod yang anda reka bentuk mengikutnya, dan minta reka bentuk disemak oleh orang yang bertanggungjawab ke atasnya.
