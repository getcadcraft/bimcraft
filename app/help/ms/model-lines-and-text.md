---
title: Garisan model dan teks model: dilukis dalam model, pada satah kerja
summary: Garisan model ialah garisan, polygaris atau lengkok yang berada dalam model dan ditunjukkan dalam setiap pandangan yang melihatnya. Teks model ialah huruf 3D dengan kedalaman sebenar. Kedua-duanya dilukis pada satah kerja.
keywords: garisan model, teks model, teks 3D, huruf, papan tanda, isyarat, garisan dalam 3D, lengkok, polygaris, satah kerja, teks diekstrud, fon, kedalaman, garisan perincian, garisan lukisan, anotasi, IfcAnnotation
from: fc9cccb5
---

## Apa yang anda akan lakukan

Lukis garisan dan huruf yang menjadi sebahagian daripada model, bukan daripada satu pandangan.

## Langkah

1. Tetapkan satah kerja dahulu (lihat **Satah kerja**). Satah aras dilukis pada pelan; satah tegak dalam Work Plane Viewer.
2. Untuk garisan, pilih **Garisan Model** dalam menu **Binaan** dan pilih **Garisan**, **Polygaris** atau **Lengkok (tiga titik)**:
   - garisan ialah dua klik;
   - polygaris ialah satu klik untuk setiap titik, kemudian Enter atau klik dua kali. Klik pada titik pertama menutupnya;
   - lengkok ialah tiga klik: permulaannya, satu titik yang dilaluinya, dan hujungnya.
3. Untuk teks, pilih **Teks Model**. Taip perkataan, tetapkan ketinggian huruf dan kedalaman, kemudian klik di tempat teks bermula (hujung kiri garis dasarnya).
4. Pilih garisan atau teks untuk melihatnya dalam **Properties**. Perkataan, ketinggian dan kedalaman teks boleh diubah di sana. {{key:Delete}} memadamkannya.

## Di mana ia ditunjukkan

- Garisan model ditunjukkan dalam pelan aras itu, dalam pandangan 3D, dalam panel dongakan dan keratan, dan dalam Work Plane Viewer apabila ia terletak pada satah kerja. Garisan lukisan (Anotasi, Garisan) hanya tergolong pada satu pandangan.
- Teks model ialah geometri pepejal: ia ditunjukkan di mana sahaja model ditunjukkan, dalam pelan, 3D, dongakan dan keratan, dan pada helaian.
- Garisan model belum dicetak pada helaian lagi. Teks model sudah.

## Fon

Teks model menggunakan fon yang sama dengan helaian dan PDF: Liberation Sans, di bawah SIL Open Font License. Huruf yang tiada dalam fon itu dilukis sebagai tanda soal dan anda diberitahu yang mana. Hanya ada satu fon dan satu berat. Huruf dijarakkan mengikut lebar fon itu sendiri, tanpa kerning.

## Dalam fail IFC

- Garisan model ialah IfcAnnotation dengan jenis objek ModelLine. Bentuknya ialah lengkung 3D: polygaris, atau bulatan terpotong untuk lengkok.
- Teks model ialah IfcBuildingElementProxy dengan jenis objek ModelText. Bentuknya ialah satu pepejal diekstrud untuk setiap kepingan huruf, dengan lubang huruf seperti O dan B. Kuantitinya ialah luas muka dan isi padu (luas muka darab kedalaman).

## Perkara yang perlu diketahui

- Sebarang saiz dibuat mengikut permintaan anda. Hanya garisan tanpa panjang, lengkok yang tiga titiknya berada dalam satu garis lurus, atau teks tanpa huruf yang ditolak, kerana tiada apa untuk dibuat.
- Setiap garisan, dan setiap teks atau perubahan kepadanya, ialah satu langkah {{ui:Undo}}.
