---
title: Bilik dan pemisah bilik
summary: Pilih bilik untuk menamakan dan menomborkannya, serta membaca luas, perimeter dan isipadunya. Lukis pemisah bilik di tempat dua bilik bertemu tanpa dinding di antaranya.
keywords: bilik, pemisah bilik, garis pemisah, ruang, IfcSpace, nama, nombor, luas, perimeter, isipadu, pelan terbuka, bahagikan bilik, dapur dan ruang tamu, tidak berkurung
from: d4c1d66b
---

## Apa yang akan anda lakukan

Namakan bilik yang dibentuk oleh dinding, dan bahagikan bilik terbuka kepada dua tanpa dinding.

## Di mana alatannya

- Susun atur reben: {{ui:Seni bina}} › **Bilik & Luas** › {{ui:Bilik}} dan {{ui:Pemisah Bilik}}.
- Susun atur klasik: bar Lukis › menu {{ui:Bilik}}.
- Mana-mana gaya menu: arahannya dinamakan Bilik dan Pemisah Bilik; palet arahan akan menjumpainya.

## Langkah

1. Lukis dinding. Setiap gelung dinding yang tertutup sudah menjadi bilik: BimCraft membuatnya, menomborkannya dan memberikan luasnya semasa anda melukis.
2. Pilih {{ui:Bilik}}. Gerakkan ke atas pelan: bilik di bawah penuding menyala dengan luas, perimeter dan isipadunya.
3. Untuk menamakan bilik dengan cepat, taip {{ui:Nama}} dan {{ui:Nombor}} dalam baris dahulu, kemudian klik dalam bilik. Nombor naik satu untuk bilik seterusnya (101, 102; A-09, A-10).
4. Atau klik sahaja bilik: ia dipilih, dan Sifat mempunyai namanya, nombornya, luas, perimeter, isipadu dan tagnya.
5. Untuk membahagikan bilik terbuka, pilih {{ui:Pemisah Bilik}} dan klik dua titik: dinding ke dinding, atau dinding ke pemisah lain. Teruskan mengklik untuk satu rantaian; Enter, Esc atau klik dua kali menamatkannya.

## Kelakuan pemisah

- Ia membatasi bilik seperti dinding tanpa ketebalan. Luas kedua-dua bilik sama tepat dengan bilik asal.
- Bilik yang memegang bahagian tengah bilik lama mengekalkan nama dan nombornya. Bilik yang satu lagi ialah yang baharu.
- Pemisah yang berhenti di ruang terbuka, tanpa menyentuh apa-apa di satu hujungnya, tidak membahagikan apa-apa. Panjangkannya dan ia akan membahagikan.
- Bahagian pemisah yang berada dalam dinding diabaikan, jadi anda boleh snap ke garis tengah dinding.
- Pilih pemisah dan tekan Delete untuk mengeluarkannya: kedua-dua bilik kembali menjadi satu. Buat asal mengembalikannya.

## Jika tiada bilik di tempat anda klik

Baris status memberitahu: dinding tidak tertutup di situ. Tutup jurang itu, atau lukis pemisah merentasinya. Tiada apa yang ditolak; hanya belum ada bilik yang tertutup.

## Dalam IFC

Bilik ialah IfcSpace dengan nombornya (Name), namanya (LongName) dan Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Isipadu ialah luas didarab dengan ketinggian hingga aras di atasnya.

Pemisah bilik ialah IfcVirtualElement, entiti yang IFC sediakan untuk sempadan yang tidak dibina. Ia mempunyai garisan dan tiada badan, jadi program lain tidak membaca dinding dan tidak mengira apa-apa untuknya.

## Belum dibina

- Pemisah melengkung.
- Bilik yang mengikut siling condong: isipadu sentiasa luas didarab dengan ketinggian aras.
- Perhubungan sempadan ruang (IfcRelSpaceBoundary) tidak ditulis, sama ada untuk dinding atau pemisah.

Lihat juga [Tag bilik dan luas](topic:room-and-area-tags), [Kawasan dan sempadan kawasan](topic:areas-and-area-boundaries).
