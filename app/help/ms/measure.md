---
title: Ukur jarak, luas permukaan dan lokasi dalam 3D
summary: Ukur antara dua titik model IFC dengan snap ke bucu dan tepi, baca perbezaan sepanjang X, Y dan Z, dan ukur luas permukaan rata.
keywords: ukur, pengukuran, jarak, panjang, dimensi, luas, luas permukaan, snap, bucu, tepi, pita, pembaris, kelegaan, lokasi, latitud, longitud, latitud longitud, koordinat, rujukan geografi, penukaran peta, EPSG, tinjauan, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Apa yang anda akan lakukan

Semak kelegaan, panjang dinding atau saiz permukaan terus daripada model, tanpa membuka program penciptaan.

## Langkah

1. Buka model IFC.
2. Klik {{ui:Measure}} pada bar alat, atau tekan {{key:M}}. Bar dibuka di bahagian bawah paparan.
3. **Jarak:** dengan {{ui:Distance}} dipilih, klik titik pertama, kemudian yang kedua. Berhampiran bucu, penunjuk snap ke bucu itu; berhampiran tepi, ke tepi itu. Label kecil di penunjuk memberitahu yang mana. Setiap pasangan klik membuat satu ukuran.
4. **Luas permukaan:** pilih {{ui:Face area}} dan klik satu permukaan. Seluruh permukaan rata itu menyala dan luasnya dipaparkan.
5. **Garisan lurus:** tahan {{key:Shift}} semasa anda memilih titik kedua, atau tekan {{ui:Straight}} dalam bar untuk mengekalkannya. Garisan kemudian berjalan sepanjang satu paksi yang paling hampir dengan penunjuk (dalam pandangan atas, sepanjang X atau Y pelan; dalam pandangan lain sepanjang X, Y atau Z), dan label penunjuk berbunyi "lurus sepanjang paksi". {{key:M}} masih memulakan dan menghentikan Ukur.
6. Klik {{ui:Clear}} untuk membuang ukuran, atau {{ui:Done}} (atau {{key:Esc}}) untuk berhenti mengukur.

## Apa yang sepatutnya anda lihat

- Garisan antara dua titik dengan panjangnya padanya, dan dalam bar, panjangnya bersama sejauh mana ia pergi sepanjang X, Y dan Z (dalam paksi model, Z ke atas), semuanya dalam {{ui:Units}} yang dipilih pada bar alat.
- Luas permukaan dalam meter persegi, pada permukaan dan dalam bar.
- Label kekal pada ukurannya semasa anda orbit, pan dan zum.
- Semasa anda mengukur, klik tidak memilih elemen. Satah atau kotak keratan masih memotong model, dan anda boleh mengukur apa yang ditunjukkannya, termasuk permukaan keratan.

## Di mana satu titik berada di bumi

Klik {{ui:Location}} dalam bar ukur, kemudian klik satu titik pada model (ia snap ke bucu dan tepi seperti jarak). Bar menunjukkan:

- **latitud dan longitud**, dalam darjah perpuluhan dan dalam darjah, minit dan saat, dalam WGS 84 untuk permulaan;
- **koordinat peta** (eastings dan northings, ditulis dalam {{ui:Units}} yang dipilih pada bar alat) dalam sistem peta model itu sendiri, contohnya `EPSG:28356`;
- **ketinggian** dan datum menegak yang dinamakan oleh fail, dan **datum sendiri** fail (contohnya GDA94).

{{ui:Copy}} meletakkan semuanya pada papan keratan dalam satu baris. Tukar sistem latitud dan longitud di bawah {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}}: WGS 84 (seperti GPS dan peta web), datum sendiri fail, atau datum lain yang biasa seperti ETRS89 atau NAD83.

Ini memerlukan model yang dirujuk geografi: yang dieksport dengan koordinat peta (penukaran peta kepada sistem unjuran dengan kod EPSG). Model yang hanya mempunyai latitud dan longitud tapak mendapat kedudukan anggaran, dikira daripada titik tapak dan utara sebenar, dan bar memberitahu anda. Dengan beberapa model terbuka, setiap titik menggunakan rujukan geografi modelnya sendiri.

:::note
Beralih antara datum (contohnya GDA94 ke WGS 84) dilakukan tanpa fail grid, jadi ia tepat kepada beberapa meter; baris status menyatakan sejauh mana tepatnya. Koordinat peta itu sendiri tepat.
:::

## Kesilapan biasa

- **"…tiada rujukan geografi".** Fail tiada penukaran peta dan tiada latitud dan longitud tapak. Eksport semula dengan sistem koordinatnya ditetapkan (koordinat dikongsi / titik tinjauan dalam alat penciptaan).
- **Koordinat peta tetapi tiada latitud dan longitud.** Fail menamakan sistem petanya tanpa kod EPSG, atau dengan kod yang tiada dalam senarai; baris status memberitahu yang mana.
- **Titik jatuh pada permukaan, bukan bucu.** Snap melihat elemen di bawah penunjuk. Dekatkan ke bucu, atau zum masuk.
- **Luas lebih kecil daripada dijangka.** Bukaan dikecualikan, dan permukaan yang melengkung ialah beberapa permukaan: klik setiap satu.
- **{{key:Esc}} menghentikan pengukuran.** {{key:Esc}} pertama menjatuhkan jarak yang separuh siap; yang kedua menghentikannya.

## Seterusnya

- [Potong model IFC dengan satah keratan](topic:section-plane)
- [Sembunyikan, asingkan dan lut sinar elemen](topic:hide-and-isolate)
