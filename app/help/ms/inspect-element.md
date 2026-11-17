---
title: Pilih elemen dan baca sifatnya
summary: Klik mana-mana elemen dalam model 3D untuk menyerlahkannya dan membaca namanya, jenisnya, tag, GlobalId, set sifat dan kuantitinya.
keywords: sifat, pilih, klik, elemen, parameter, set sifat, pset, kuantiti, globalid, guid, jenis, periksa
from: 43b80aa8
---

## Apa yang anda akan lakukan

Pilih elemen dalam model IFC dan baca segala yang fail itu nyatakan tentangnya: atribut, set sifat, sifat jenis dan kuantiti.

## Langkah

1. Buka model IFC.
2. Klik elemen, contohnya pintu. Klik tanpa menyeret: seretan lebih beberapa piksel akan mengorbit dan bukannya memilih.
3. Lihat elemen itu: ia diserlahkan dengan warna biru.
4. Lihat panel {{ui:Sifat}} di sebelah kanan. Di bahagian atas ialah jenis elemen (seperti "Door" atau "WallStandardCase") dan namanya.
5. Baca blok pertama: **Nama**, **Jenis**, **Jenis objek**, **Tag**, **Penerangan**, **GlobalId** dan **Baris**.
6. Tatal ke bawah ke set sifat. Tiga yang pertama dibuka; klik nama mana-mana set lain untuk membukanya.
7. Klik elemen lain untuk beralih kepadanya.
8. Tekan {{key:Esc}}, atau klik latar belakang kosong, untuk mengosongkan pilihan.

## Apa yang anda patut lihat

- Elemen yang diserlahkan dan datanya di sebelah kanan.
- Set sifat disusun mengikut abjad. Set yang datang daripada **jenis** elemen mempunyai " (type)" selepas namanya dan nota "Sifat jenis: perubahan di sini terpakai pada setiap elemen bagi jenis ini."
- Set kuantiti (seperti panjang, luas dan isipadu) disenaraikan bersama set lain. Kuantiti hanya boleh dibaca.
- Nilai yang boleh diubah kelihatan seperti butang. [Ubah sifat IFC dan simpan salinan yang diedit](topic:edit-ifc-properties) menunjukkan caranya.

[Medan panel Sifat](topic:properties-panel) menerangkan setiap medan.

## Mendapatkan elemen tersembunyi

1. Untuk sampai ke sesuatu di dalam bangunan, nyahtandakan tingkat di atasnya dalam senarai {{ui:Tingkat}}.
2. Untuk sampai ke dinding di belakang isipadu bilik, matikan {{ui:Ruang}}.
3. Klik elemen itu.

## Kesilapan biasa

- **Menyeret sedikit semasa mengklik.** BimCraft menganggapnya sebagai orbit dan tidak memilih. Pegang tetikus dengan diam.
- **Menjangka unit di sebelah nombor.** Nilai dipaparkan seperti yang disimpan dalam fail, dibundarkan kepada empat titik perpuluhan, tanpa simbol unit. Panjang dalam eksport metrik biasanya milimeter atau meter; semak tetapan pengeksport.
- **Mencari parameter dengan nama yang biasa anda kenali.** Pengeksport menamakan semula dan mengumpulkan semula parameter ke dalam set sifat IFC seperti `Pset_WallCommon`. Lihat setiap set; parameter tersuai selalunya berada dalam set yang dinamakan sempena program pengeksport atau syarikat anda.
- **Menjangka kotak carian.** Klik untuk memilih elemen; {{key:Mod}}+klik atau {{key:Shift}}+klik memilih lebih banyak, dan {{key:Mod+A}} memilih setiap elemen yang dipaparkan. Senarai {{ui:Elemen}} di sebelah kiri hanya mengira elemen mengikut jenis; ia tidak boleh diklik.
- **Memilih pada kad fail projek.** Kad fail tidak mempunyai elemen untuk dipilih: "Sifat elemen memerlukan model 3D. Buka eksport IFC bagi fail ini untuk melihatnya."
