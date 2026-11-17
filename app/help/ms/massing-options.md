---
title: Pilihan jisim disimpan bersebelahan
summary: Simpan beberapa pilihan jisim dalam model yang sama, jadikan satu sebagai pilihan semasa, semak dengan garis bangunan dan servitud tapak, ambil jisim daripada ModelCraft, dan bangunkan pilihan yang dipilih menjadi dinding dan lantai.
keywords: jisim, pilihan jisim, pilihan, set pilihan, skema, konsep, reka bentuk konsep, peringkat 2, alternatif, bandingkan pilihan, pilihan semasa, jisim bangunan, tolak tarik, modelcraft, civilcraft, luas lantai kasar, jejak, isipadu, bangunkan jisim, servitud, hak laluan, garis bangunan, tetapan undur
from: 69a01459
---

## Apa yang anda akan lakukan

Simpan pilihan jisim sesuatu konsep dalam satu model dan bukan dalam fail berasingan: beberapa jisim bangunan bersebelahan, satu daripadanya **pilihan semasa**, yang lain disimpan untuk perbandingan.

Pilihan jisim ialah jisim bangunan: garis luar yang dinaikkan ke ketinggian, dengan bilangan tingkat. Ia belum lagi dinding. Anda boleh simpan seberapa banyak yang anda mahu, dikumpulkan dalam **set pilihan** (pilihan dalam satu set ialah alternatif antara satu sama lain).

## Simpan pilihan

1. Buka {{ui:Room program to massing}}, taip program bilik dan garis luar, dan pilih {{ui:Find options}}.
2. Pilih satu daripada pilihan yang disenaraikan.
3. Di bawah {{ui:Massing options in the model}}, taip nama untuk {{ui:Option set}} jika anda mahu, dan pilih {{ui:Keep the selected option}}.

Pilihan itu muncul dalam model sebagai jisim bangunan dan dalam senarai, dengan tingkatnya, jejak, luas lantai kasar dan isipadu. Tiada apa dibina. Simpan yang lain dengan cara yang sama.

Pilihan pertama bagi satu set ialah pilihan semasanya. Setiap langkah ialah satu langkah buat asal.

## Pilihan semasa

Satu pilihan bagi setiap set ialah yang semasa. Itu bermakna dua perkara:

- **Tingkatnya dikira sebagai luas lantai bangunan.** Pilihan semasa mempunyai satu ruang bagi setiap tingkat yang membawa luas kasar tingkat itu, jadi apa-apa yang membaca luas lantai melihat pilihan yang berkuat kuasa dan tiada yang lain.
- **Ia disemak dengan tapak.** Jika ia berada di luar sempadan tapak, di atas garis bangunan atau di atas servitud, amaran yang menamakannya muncul dalam {{ui:Problems}}. Ia amaran sahaja: tiada apa yang ditolak. Pilihan yang bukan semasa tidak disemak.

Pilih {{ui:Make current}} pada pilihan lain untuk menukarnya.

{{ui:Hide the options that are not current}} menyembunyikan yang lain dalam paparan 3D. Itu untuk pelayar ini sahaja dan tidak disimpan dalam fail.

## Jisim daripada ModelCraft

Dalam ModelCraft, {{ui:Export}} › {{ui:Massing to BimCraft…}} menghantar setiap kumpulan atau komponen sebagai satu pilihan. BimCraft membuka fail dengan pilihan disenaraikan.

Untuk membawanya ke dalam model yang sudah dibuka, pilih {{ui:Add massing options from a file}} dan pilih fail `.ifc`. Jisimnya masuk sebagai pilihan bagi satu set, dalam satu langkah buat asal, berdiri di tempat ia dimodelkan. Fail jisim bangunan daripada CivilCraft berfungsi dengan cara yang sama.

Pilihan yang ditanda "(bentuk dipermudahkan)" bukan blok tegak biasa dalam ModelCraft (ia melangkah ke belakang, condong atau tidak tertutup). Jisimnya di sini ialah garis luar tapaknya dinaikkan ke ketinggiannya; luas lantai dan isipadunya ialah yang diukur daripada pepejal itu sendiri.

## Bangunkan pilihan yang dipilih

Pilih {{ui:Develop}} pada satu pilihan. Ia menjadi aras (ditambah sehingga bilangan tingkatnya), dinding mengelilingi garis luarnya pada setiap tingkat dan satu papak lantai pada setiap satu, dalam satu langkah buat asal. Pilihan itu keluar daripada senarai; pilihan lain kekal seperti sediakala. Belum ada bumbung lagi.

{{ui:Rename}} menukar nama pilihan, {{ui:Remove}} mengalih keluarnya daripada model. Mengalih keluar pilihan semasa menjadikan pilihan lain yang pertama bagi set itu sebagai semasa.

## Apa yang sepatutnya anda lihat

- Setiap pilihan yang disimpan sebagai blok dalam paparan 3D dan satu baris dalam senarai.
- "(semasa)" bersebelahan satu pilihan bagi setiap set.
- Amaran dalam {{ui:Problems}} apabila pilihan semasa merentasi sempadan tapak, garis bangunan atau servitud.

## Perkara yang berguna diketahui

- Dalam fail IFC, pilihan ialah proksi elemen bangunan dengan set sifat `CadCraft_SiteMass` (set pilihannya, nama pilihan dan sama ada ia semasa terdapat dalam set itu). Tingkat pilihan semasa ialah ruang jenis `MassingFloor`. Program lain membaca proksi sebagai elemen generik.
- Menyimpan pilihan tidak pernah menambah aras; membangunkannya menambahnya.
- Pembantu boleh menyenaraikan pilihan yang disimpan, menyimpan satu, menjadikan satu semasa, menamakan semula, membangunkan atau mengalih keluarnya.
