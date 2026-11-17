---
title: Unit semasa import: fail menyatakan unitnya, atau anda ditanya dahulu
summary: Apabila fail yang anda import menyatakan unitnya, BimCraft menggunakannya dan memaklumkannya. Apabila tidak, BimCraft bertanya sebelum meletakkan apa-apa dan mengingati jawapan anda untuk fail itu.
keywords: unit, import, buka, OBJ, STL, DWG, DXF, IFC, awan titik, item pustaka, milimeter, meter, inci, kaki, skala, saiz salah, terlalu besar, terlalu kecil, 1000 kali, tanya, diingati
from: f044e9bc
---

## Apa yang anda lakukan

Import fail dan pastikan ia masuk pada saiz yang betul.

## Langkah

1. Buka atau tambah fail seperti biasa: {{ui:Buka}}, {{ui:Fail}} Pustaka, {{ui:Awan titik}}, atau Bina › Daripada lukisan.
2. Jika fail menyatakan unitnya, tiada apa-apa ditanya. Baris status menyatakan unit yang dinyatakan oleh fail itu.
3. Jika tidak, kotak dialog bertanya **Unit bagi** fail itu. Pilih apa yang mewakili satu unit dalam fail itu dan klik {{ui:Guna unit ini}}. Tiada apa-apa diletakkan sehingga anda menjawab.
4. {{ui:Batal}} (atau {{key:Esc}}) tidak memasukkan apa-apa.

## Fail yang menyatakan unitnya

- **IFC**: menyatakan unit panjangnya, dan "Dibuka" menyatakan yang mana. IFC yang tidak menyatakan apa-apa akan ditanya sebelum dibuka; jawapan anda ditulis ke dalam model, jadi fail itu menyatakannya sekali apabila anda simpan.
- **DWG dan DXF**: unit sisipan lukisan. Lukisan tanpa unit ini akan ditanya (fail Pustaka, Bina › Daripada lukisan, rupa bumi daripada kontur).
- **Senarai titik** untuk rupa bumi: tidak menyatakan unit. Anda ditanya.
- **Awan titik**: LAS dan LAZ dengan sistem koordinat, E57, PTX dan PLY menyatakan unit mereka. Yang lain akan ditanya.
- **OBJ dan STL**: tidak pernah menyatakan unit. Anda ditanya.
- **glTF dan GLB**: meter, mengikut peraturan format itu sendiri.
- **Gambar**: tidak mempunyai saiz sendiri. Gambar dipadankan dengan pandangan dan anda menetapkan saiznya dengan Skala mengikut dua titik. Saiz yang anda beri diingati untuk fail itu: apabila diletakkan semula, ia masuk pada saiz itu dan baris status memaklumkannya.
- **Add-on Awan titik**: bertanya apabila anda membina awan yang failnya tidak menyatakan unit, dan melabelkan nombor awan dalam unit yang dibawanya.

## Perkara yang perlu diketahui

- Jawapan diingati untuk fail itu (namanya, saiz dan tarikhnya) pada komputer ini, dalam setiap aplikasi CadCraft. Kali seterusnya fail yang sama diimport, anda tidak ditanya, dan baris status memaklumkan bahawa unit yang diingati telah digunakan.
- Untuk ditanya semula: palet arahan ({{key:Mod+K}}) › **Tanya semula untuk unit fail yang diimport**.
- Senarai unit yang sudah ada dalam import (Unit Pustaka, Unit bar awan, Unit lukisan dalam Daripada lukisan) tetap menukar unit selepas itu. Senarai Unit alat rupa bumi kini hanyalah apa yang bermula dengan soalan itu.
