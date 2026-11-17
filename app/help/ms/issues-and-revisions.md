---
title: Isu, semakan dan log perubahan lukisan
summary: Rekod setiap set helaian yang anda serahkan, lihat apa yang berubah sejak itu pada setiap helaian dan elemen, dan simpan arahan tapak, lukisan bengkel dan model terpaut mengikut isu yang berkaitan.
keywords: isu, set dikeluarkan, set diserahkan, penyerahan, semakan, semakan, apa yang berubah, sejak isu, log perubahan, log perubahan lukisan, daftar lukisan, transmittal, arahan tapak, lukisan bengkel, model terpaut, tender, pembinaan, syot kilat, bandingkan
from: 4c732832
---

## Apa yang anda akan lakukan

Rekod satu isu: helaian mana yang dikeluarkan, pada tarikh apa, untuk tujuan apa, setiap satu pada semakannya. Kemudian, tanya apa yang berubah sejak isu itu. Simpan arahan tapak dan lukisan bengkel yang dipulangkan mengikut isu.

## Langkah

1. Dalam panel kiri, buka **Isu dan semakan**.
2. Pilih **Rekod isu**. Semakan dicadangkan (A, kemudian B; semakan bernombor seperti P1 naik secara berangka). Pilih tujuan isu, kepada siapa ia dihantar, tarikh dan helaian. Apabila peringkat projek anda ditetapkan, tujuan mengikutinya. Apabila pakej permit mempunyai senarai dokumen sokongan, helaian yang dipautkan kepada senarai itu akan ditandakan untuk anda.
3. Biarkan **Juga simpan salinan model seperti yang dikeluarkan** ditandakan untuk mengekalkan model tepat seperti yang dikeluarkan. Salinan itu dimuat turun; namanya, saiznya dan SHA-256 disimpan bersama isu.
4. Pilih **Rekod isu ini**. Helaian yang berubah sejak kali terakhir dikeluarkan mendapat semakan baharu. Helaian yang tidak berubah mengekalkan semakannya. Blok tajuk setiap helaian menunjukkan semakannya.
5. Untuk melihat apa yang berubah, pilih **Perubahan sejak** di sebelah isu. Setiap helaian dibaca Sama atau Diubah, dengan elemen yang ditambah, diubah dan dikeluarkan padanya. Klik satu kiraan untuk memilih elemen tersebut.
6. Pilih **Tambah rekod** untuk arahan tapak, lukisan bengkel, set markup, model terpaut atau nota. Pilih isu yang ia berkaitan. Fail yang anda pilih direkod mengikut namanya, saiznya dan SHA-256; fail itu kekal di tempatnya.
7. **Log perubahan lukisan** menunjukkan satu baris untuk setiap helaian dan satu lajur untuk setiap isu. **Muat turun log perubahan (CSV)** menyimpannya bersama isu dan rekod.
8. **Simpan sejarah isu** menulis fail `.issues.json`. MarkupCraft, TakeoffCraft dan DetailCraft membacanya dengan **Baca sejarah isu**.

## Perkara yang perlu diketahui

- Sejarah disimpan di dalam fail IFC (set sifat `CadCraft_Issues` pada projek). Program lain mengabaikannya.
- Sesuatu helaian dikira berubah apabila persediaannya sendiri berubah, atau apabila elemen yang ditunjukkannya berubah: pelan menunjukkan aras, dongakan atau keratan menunjukkan seluruh model, dan jadual pintu atau tingkap menunjukkan pintu atau tingkapnya.
- Sesuatu elemen dikira berubah apabila sifat, kedudukan, saiz atau bentuknya berubah.
- Untuk melihat sifat mana yang berubah, buka salinan model yang dikeluarkan dan gunakan **Bandingkan versi**.
- Mengeluarkan isu mengekalkan rekodnya, tanpa isu. Setiap langkah boleh dibuat asal dengan satu {{ui:Buat asal}}.
- Model dengan lebih 60,000 elemen tidak menyimpan rekod setiap elemen bersama isu. Helaian tetap dibandingkan.

## Belum dibina

- Helaian tidak disimpan sebagai PDF bersama isu.
- Awan semakan tidak dilukis pada helaian BimCraft sendiri. Rekod awan dalam MarkupCraft mengikut isu.
