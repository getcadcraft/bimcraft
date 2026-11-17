---
title: Mainkan banjir, angin atau gempa bumi pada bangunan
summary: Air yang naik melalui bilik, tekanan angin pada setiap tingkat, atau gempa bumi yang menggegarkan tingkat, dimainkan pada pelan atau dongakan dengan peluncur masa. Model ringkas dengan andaiannya disenaraikan; bukan semakan kod atau reka bentuk struktur.
keywords: bahaya, banjir, angin, gempa bumi, seismik, anjakan sisi, ayunan, ricih tapak, paras air, iklim, senario, paras laut, main semula, tingkat, tempoh
from: ff0d34d1
---

Bahagian {{ui:Main semula bahaya}} pada panel kiri memainkan bahaya pada model IFC yang terbuka. Tiada apa-apa dalam model yang diubah.

:::warning
Ini ialah **model ringkas untuk melihat kesan bahaya terhadap susun atur ini**, bukan kajian banjir, semakan kod angin atau reka bentuk struktur. Setiap keputusan menyenaraikan andaiannya.
:::

## Banjir

Tetapkan paras air tertinggi di atas tingkat terendah dan minit untuk naik, kekal dan surut. Air memasuki bilik melalui bukaan yang ambangnya telah dilepasinya, dan bilik yang bersambung dengan bilik basah melalui bukaan di bawah paras air berada pada aras yang sama (kuasi-statik). Jadual memberikan bila setiap bilik mula basah dan kedalamannya; pelan memainkannya. Taip jumlah air maksimum yang boleh diterima sesebuah bilik, dan bilik yang melebihinya akan menjadi amaran. **Masa depan iklim:** buka fail senario anda sendiri (JSON atau CSV dengan tahun, kenaikan aras laut dan faktor banjir) dan pilih tahun. Atau hidupkan add-on Climate futures dan pilih senario serta tahun: banjir dijalankan dua kali, masa kini bersebelahan masa depan (lihat "Climate futures: banjir, haba dan kebakaran hutan 2050 dan 2080"). Jenis Pendedahan kebakaran hutan dan Haba: fail cuaca masa depan terdapat dalam senarai yang sama.

## Angin

Tekanan mengikut ½ρV² dengan kelajuan meningkat ke atas ketinggian; daya pada sesuatu tingkat ialah tekanan itu didarab dengan faktor tiupan, dua pekali tekanan, lebar dan ketinggian tingkat. Anda mendapat ricih, momen guling dan ayunan.

## Gempa bumi

Bangunan ricih: jisim bagi setiap lantai (luas tapak × kilogram per meter persegi, yang anda tetapkan), kekukuhan yang sama dalam setiap tingkat yang dipadankan dengan tempoh pertama yang anda berikan (sepersepuluh saat setiap tingkat jika anda biarkan kosong, dan ia menyatakannya), redaman, dan gegaran tanah yang dihasilkan (denyut atau hingar yang ditapis) pada pecutan puncak yang anda pilih. Hasilnya ialah anjakan sisi setiap tingkat, pecutan lantai dan ricih tapak; dongakan memainkan ayunan, dilukis lebih besar daripada sebenarnya. Taip nisbah anjakan sisi yang anda benarkan dan tingkat yang melebihinya akan menjadi amaran. Ia kenyal: tiada apa yang mengalah atau retak.

## Kekukuhan lantai daripada Bingkai Analisis

Bagi gempa bumi atau ayunan angin, pilih **Bingkai Analisis** sebagai sumber kekukuhan dan bukannya menaip tempoh. Setiap lantai ditolak secara sisi secara bergilir, bingkai (rasuk, tiang, pengukuh, papak) diselesaikan, dan kekukuhan lantai dengan semua bahagian bekerja bersama memacu larian. Berat ialah berat ahli itu sendiri ditambah beban lantai per meter persegi yang anda tetapkan pada kotak pelan setiap lantai. Tempoh pertama sebenar dipaparkan. Ia kenyal: tiada apa yang mengalah, dan kilasan tidak dimodelkan. Bagi angin, daya tingkat masih andaian di atas (profil hukum kuasa, faktor tiupan anda dan pekali tekanan tetap, bukan kod angin); hanya ayunan datang daripada bingkai, dengan menyelesaikan matriks kekukuhan penuh bingkai terhadap daya tersebut. Model memerlukan IFC dengan bingkai yang boleh dibaca oleh tab Analisis.

## Unit

Kedalaman air, ayunan dan anjakan sisi mengikut lantai, jarak dan luas dipaparkan dalam {{ui:Unit}} yang anda pilih. Daya (kN), masa dan pecutan mengekalkan unit sendiri, dan nilai yang anda taip dalam kotak berlabel dalam meter kekal dalam meter. Perkara yang sama berlaku pada keputusan pemindahan, cahaya siang, pemanasan dan penyejukan serta perabot: panjang, luas dan isipadu mengikut pilihan anda; tekanan, aliran, suhu, tenaga dan kuasa tidak sekali-kali ditukar.
