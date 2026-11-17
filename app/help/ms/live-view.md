---
title: Paparan langsung
summary: Panel di sebelah model yang memaparkannya dalam rupa masa nyata, dengan matahari, bayang-bayang dan cahaya pantulan, dan mengikut setiap perubahan yang anda buat; berjalan melaluinya dan tetapkan masa siang dan bulan.
keywords: paparan langsung, masa nyata, render masa nyata, berjalan, jalan-jalan, orang pertama, pembentangan, pelanggan, skrin kedua, tetingkap kedua, monitor, masa siang, matahari, musim, bulan, bayang-bayang, oklusi ambien, pantulan, cahaya pantulan, pencahayaan sejagat, webgpu, webgl
from: ea5c02bf
---

Paparan langsung menunjukkan model dalam rupa masa nyata: langit dan matahari mengikut tempat dan tarikh tapak anda, bayang-bayang matahari, cat dan bahan yang anda berikan kepada elemen, lampu, dan cahaya yang dipantulkan dari dinding dan lantai. Ia mengikut apa yang anda lakukan: pusingkan paparan 3D dan ia turut berpusing, ubah model dan ia menunjukkan perubahan itu sebentar kemudian. Tiada apa yang dimuat naik.

Ia melukis adegan, cat, lampu dan matahari yang sama seperti [Render imej](topic:render); untuk gambar siap, gunakan yang itu.

## Membukanya

1. Buka model dan pilih {{ui:Live view}} dalam bar alat. Panel dibuka di atas aplikasi, di sudut kanan bawah.
2. Seret bar tajuknya untuk mengalihkannya, tarik bucunya untuk membesarkannya.
3. {{ui:Live view in a new window}} (butang di sebelahnya) atau {{ui:New window}} dalam panel memindahkannya ke tetingkap sendiri, untuk skrin kedua. Jika pelayar anda menyekat tetingkap pop-up, ia dibuka sebagai panel.
4. {{ui:Close}} menutupnya.

## Kawalan

| Kawalan | Fungsinya |
|---|---|
| {{ui:Follow the view}} | Hidup: paparan langsung melihat ke arah yang dilihat paparan 3D. Berjalan mematikannya |
| {{ui:Walk}} | Berjalan melalui model (di bawah) |
| {{ui:Gravity}} | Semasa berjalan: berdiri di atas lantai dan mendaki tangga. Mati: terbang |
| {{ui:Time}} | Jam dalam sehari. Matahari bergerak semasa anda menyeret |
| {{ui:Month}} | Bulan, supaya anda dapat melihat matahari pada musim sejuk dan musim panas |
| {{ui:Quality}} | {{ui:For this computer}}, atau {{ui:Low}}, {{ui:Medium}} atau {{ui:High}} |

Baris di bawah menyatakan apa yang melukis paparan (WebGPU atau WebGL 2), kualitinya dan cahaya pantulan.

## Berjalan melalui model

1. Pusingkan paparan 3D ke tempat yang anda mahu berdiri dan pilih {{ui:Walk}}. Anda berdiri di atas lantai di bawah titik mata paparan, setinggi 1.6 m.
2. Klik paparan langsung, kemudian guna {{key:W}} {{key:A}} {{key:S}} {{key:D}} atau kekunci anak panah. Tahan {{key:Shift}} untuk berlari. Seret untuk melihat sekeliling.
3. Langkah sehingga 40 cm didaki (tangga); apa-apa yang lebih tinggi ialah dinding. Dinding menghentikan anda dan anda meluncur di sepanjangnya.
4. Dengan {{ui:Gravity}} dimatikan, anda terbang: {{key:E}} naik, {{key:Q}} turun.
5. {{key:Esc}} menghentikan berjalan.

## Cahaya pantulan

Cahaya yang dipantulkan dari dinding yang terkena matahari ke lantai, dan bahagian dalam bilik yang lebih gelap, dikira di latar belakang pada setiap teras pemproses. Semasa ia berfungsi, baris bawah menunjukkan {{ui:Cahaya pantulan: 40 %}}; apabila ia siap, paparan mengambilnya. Selepas sebarang perubahan, ia bermula semula.

:::note
Ini ialah anggaran untuk paparan langsung, bukan gambar yang dirender: butiran kecil antara titik mendapat cahaya pantulan titik yang berdekatan dengannya.
:::

:::note
Pelayar berbeza. Jika pelayar mempunyai WebGPU, paparan langsung menggunakannya; di tempat lain ia menggunakan WebGL 2 dan rupanya sama. Jika kedua-duanya tiada, panel memberitahu anda.
:::
