---
title: Anggarkan cahaya siang dalam setiap bilik
summary: Purata faktor cahaya siang bagi setiap bilik daripada tingkapnya, permukaan dalamannya dan langit yang dilihat setiap tingkap, dengan sudut langit diukur dalam model. Anggaran reka bentuk awal, bukan simulasi atau semakan kod.
keywords: cahaya siang, faktor cahaya siang, purata faktor cahaya siang, adf, komponen langit menegak, vsc, perolehan suria, matahari, nilai-g, grid, fluks terbahagi, komponen langit, komponen pantulan dalaman, cahaya semula jadi, tingkap, kaca, sudut langit, halangan, bayang bertindih, balkoni, julur, pantulan, kebolehtelusan, reka bentuk awal, analisis, bilik, ruang
from: 5f300a78
---

Tab {{ui:Cahaya siang}} dalam panel kanan mengira **purata faktor cahaya siang** setiap bilik: berapa banyak cahaya langit mendung di luar yang sampai ke bilik, secara purata, sebagai peratusan. Ia membaca bilik (ruang) dan tingkap model IFC yang dibuka. Tiada apa diubah dalam model dan tiada apa dimuat naik.

:::warning
Semua dalam tab ini ialah **alat bantu reka bentuk, bukan pengiraan pematuhan**: anggaran reka bentuk awal menggunakan kaedah yang diterbitkan, **bukan simulasi** dan **bukan semakan terhadap kod bangunan atau piawaian**. BS EN 17037, LEED, BREEAM dan kod tenaga meminta simulasi cahaya siang dengan iklim tempat itu; gunakan program simulasi cahaya siang untuk itu.
:::

## Kira

1. Buka model IFC yang mempunyai bilik (ruang) dan tingkap. Model yang dilukis di sini mempunyai satu bilik dalam setiap set dinding tertutup.
2. Buka tab {{ui:Cahaya siang}} dan klik {{ui:Kira}}.
3. Setiap bilik memaparkan faktor cahaya siangnya dan satu jalur: di bawah 2 %, 2–5 %, 5 % atau lebih. Klik satu bilik untuk melihat permukaannya serta luas dan sudut langit setiap tingkap; bilik dan tingkapnya dipilih dalam model.

Ubah satu input dan nombor mengikutinya serta-merta; selepas menukar model, {{ui:Kira semula}}. {{ui:CSV}} menyimpan setiap bilik dengan nombornya dan input yang digunakan.

## Formula

Purata faktor cahaya siang (%) = T × Ag × θ × M ÷ (A × (1 − R²)), dijumlahkan ke atas tingkap bilik itu (formula Littlefair, digunakan oleh BRE 209, BS 8206-2 dan CIBSE LG10):

- **T**, kebolehtelusan cahaya kaca (0.7 sebagai permulaan: gunakan angka pengilang).
- **Ag**, luas kaca: luas setiap tingkap (lebar keseluruhan × tinggi, atau saiznya dalam model) × **bahagian kaca** (0.75 sebagai permulaan: selebihnya ialah bingkai).
- **θ**, sudut langit yang dilihat tingkap, dalam darjah (di bawah).
- **M**, faktor penyelenggaraan bagi kotoran pada kaca (1 sebagai permulaan).
- **A**, setiap permukaan dalam bilik: lantai, dinding, siling dan tingkap, diambil daripada bentuk bilik itu sendiri.
- **R**, purata pantulannya, dikira mengikut luas: lantai 0.2, dinding 0.5, siling 0.7 sebagai permulaan; kaca dikira sebagai 0.1.

## Cara sudut langit diukur

Bagi setiap tingkap BimCraft memotong model dengan satah tegak yang berserenjang dengan tingkap, bermula dari muka luar kaca, dan melihat dari ufuk terus ke atas. Apa sahaja yang dipotong di hadapan tingkap (bangunan bertentangan, balkoni atau julur di atas, kanopi bumbung) menghalang sebahagian daripada 90° itu. θ ialah apa yang tinggal. Tingkap itu sendiri dan dinding tempat ia terletak dikecualikan. Ia berbuat demikian di lima tempat merentasi lebar tingkap dan mengambil puratanya, supaya tiang nipis di hadapan bahagian tengah mengambil bahagiannya sahaja, bukan keseluruhan langit.

Sebuah bangunan 8.5 m di atas pusat tingkap dan 9.9 m jauhnya menghalang 40.65° (sudut yang tangennya ialah 8.5 ÷ 9.9), meninggalkan θ = 49.35°.

## Komponen langit menegak bagi setiap tingkap

{{ui:Kira}} juga mengukur, bagi setiap tingkap, apa yang dilihatnya daripada keseluruhan langit: potongan tegak yang sama, dipusingkan ke setiap arah merentasi muka tingkap (setiap 2°, dari satu sisi ke sisi lain), supaya bangunan di satu sisi, sirip atau ambang dalam mengambil bahagiannya. Daripada itu BimCraft mengira **komponen langit menegak (VSC)**: berapa banyak cahaya langit mendung sampai ke kaca, sebagai bahagian daripada apa yang diterima oleh bumbung rata terbuka. Tingkap tanpa apa-apa di hadapannya mendapat **39.6 %**, yang paling boleh dicapai oleh tingkap menegak. Bangunan panjang yang naik 25° di atas tingkap meninggalkan kira-kira **27 %**, angka yang digunakan oleh panduan UK (BRE 209) sebagai petua praktikal. Setiap tingkap dalam perincian bilik menunjukkan VSC dan **sudut halangannya** (setinggi mana perkara naik tegak di hadapannya).

Langit ialah langit mendung piawaian CIE, yang tiga kali lebih terang tepat ke atas berbanding ufuk, dan potongannya tepat: tiada apa yang disampel.

## Matahari melalui tingkap pada tarikh

Buka {{ui:Matahari melalui tingkap pada tarikh}} dan pilih satu tarikh. BimCraft mengikuti matahari sepanjang hari itu dalam sukuan jam dan menjumlahkan, bagi setiap tingkap, haba yang dibawa matahari melalui kaca:

- **cahaya matahari langsung**, apabila ia berada di hadapan tingkap dan tiada apa dalam model yang menghalangnya (potongan tepat yang sama, dipusingkan ke arah matahari: balkoni yang menaungi matahari tengah hari musim panas yang tinggi membenarkan matahari musim sejuk yang rendah masuk);
- **cahaya langit** pada kaca, tolak apa yang tidak dapat dilihat oleh tingkap;
- cahaya yang **dipantulkan dari tanah** (pantulannya: 0.2 sebagai permulaan);
- semuanya melalui **nilai-g** kaca (bahagian tenaga matahari yang dibenarkannya lalu: 0.6 sebagai permulaan; gunakan angka pengilang) dan bahagian kacanya.

Setiap bilik memaparkan jumlah hari itu dalam kWh dan puncaknya dalam watt beserta masanya; perincian bilik melukis hari itu sebagai carta. Langit ialah langit cerah mengikut model Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), dengan angka musim panas atau musim sejuk bagi tempat dan musim itu serta ketinggian tapak; kedudukan matahari ialah NOAA. Latitud dan longitud tapak diambil daripada tapak IFC, dan utara daripada utara benar model; jika model tiada tapak, taip latitud dan longitud. Masa ialah waktu piawai (tiada waktu musim panas) dalam zon waktu yang anda taip, atau yang dicadangkan oleh longitud.

Apa yang tidak diambil kira: awan (ia hari yang cerah), kaca yang membenarkan kurang cahaya pada sudut rendah, bingkai yang menaungi kaca, langsir, dan apa yang diserap oleh dinding serta bumbung. Anggaran penyejukan dalam tab yang sama menggunakan puncak itu.

## Faktor cahaya siang pada grid

Buka {{ui:Faktor cahaya siang pada grid}} dan {{ui:Kira grid}}: BimCraft meletakkan grid di atas lantai setiap bilik pada ketinggian satah kerja (0.85 m sebagai permulaan), setengah meter dari dinding, dan mengira faktor cahaya siang pada setiap titik dengan **kaedah fluks terbahagi BRE**:

- **komponen langit**: langit mendung yang dilihat dari titik itu melalui bukaan setiap tingkap, tolak bingkai;
- **komponen pantulan luar**: apa yang dilihat titik itu daripada bangunan di luar melalui tingkap, yang bersinar pada sepersepuluh langit di belakangnya (tukar kecerahan halangan jika ia jauh lebih cerah atau lebih gelap);
- **komponen pantulan dalam**: cahaya yang melantun di sekeliling bilik, daripada permukaan dan pantulan bilik, luas tingkap, dan berapa banyak yang berada di luarnya (formula BRE, dengan kebolehtelusan kaca menggantikan kaca jelas yang diandaikannya).

Setiap bilik memaparkan puratanya, titik terendahnya dan berapa banyak yang mendapat 2 % atau lebih. Perincian bilik melukis pelannya dengan setiap titik diwarnakan mengikut faktor cahaya siangnya dan tingkap dalam merah. Untuk memastikannya pantas pada mana-mana komputer, sesebuah bilik mendapat paling banyak **400 titik**: dalam bilik besar jaraknya bertambah untuk muat (taip jarak untuk memilih sendiri).

## Apa yang tidak diambil kira

- Tingkap bumbung (kaca yang terletak mendatar atau condong) disenaraikan tetapi tidak dikira: formula di sini adalah untuk tingkap dalam dinding.
- Tingkap tanpa bilik di belakangnya (dewan tanpa ruang, contohnya) disenaraikan berasingan.
- Lekukan tingkap (bukaan diambil pada muka luar), silau, jam sinaran matahari dan cahaya siang berasaskan iklim. Untuk BS EN 17037, LEED atau BREEAM, gunakan program simulasi cahaya siang.
- Jalurnya datang daripada panduan British yang lebih lama (BS 8206-2), ditunjukkan sebagai panduan, tidak sekali-kali sebagai lulus atau gagal.
