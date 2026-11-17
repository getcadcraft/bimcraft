---
title: Tempatkan peralatan dan furnitur dari Pustaka
summary: Temukan item di Pustaka, file, atau gambar yang terbuka, tempatkan di lantai model IFC dengan pratinjau bayangan, putar, tempelkan ke dinding, lalu simpan.
keywords: pindahkan, putar, seret, pustaka, librarycraft, tempatkan, sisipkan, peralatan, furnitur, blok, famili, item, katalog, konten, kcl, csv, gltf, obj, rfa, dwg, tipe ifc
from: 3dad5d4b
---

## Yang akan Anda lakukan

Masukkan item pustaka ke dalam model IFC: wastafel, meja kerja, kursi. BimCraft menulisnya sebagai elemen IFC yang tepat dengan tipe, sehingga setiap salinan dari item yang sama berbagi satu set geometri, dan datanya, nomor item, serta lisensinya ikut terbawa.

## Langkah

1. Buka model IFC.
2. Klik tab {{ui:Library}} di samping {{ui:Properties}} di kanan, atau {{ui:Library}} di bilah alat di atas model.
3. Pilih sumber:
   - **Simbol bawaan**: simbol denah plambing generik yang disertakan BimCraft di bawah Apache-2.0, tersedia offline. Periksa dimensinya sebelum konstruksi. Untuk simbol denah listrik dan perangkat listrik IFC, gunakan **Build › Listrik**.
   - **Pustaka**: Pustaka CadCraft di situs ini. Item publik tidak memerlukan masuk.
   - **File ini**: blok dari gambar DWG atau DXF yang terbuka. Blok dinamis dengan status visibilitas ditawarkan satu kali per status, dinamai "Sink: Double bowl", masing-masing digambar hanya dengan objek status itu.
   - **File…**: file DWG, DXF, IFC, glTF/GLB, OBJ, RFA, atau CSV di komputer Anda. File dibaca di tab ini; tidak ada yang diunggah.
   - **Feed lain**: pustaka lain yang memakai format feed yang sama. Tambahkan alamatnya sekali; alamat itu disimpan di peramban ini.
4. Cari atau pilih kategori, lalu klik sebuah kartu. Kartu menampilkan pratinjau denah, nama, pabrikan dan model, lisensi, serta versinya.
5. Klik {{ui:Place in plan}} (di tampilan Denah) atau {{ui:Place in model}} (di tampilan 3D). Di {{ui:Split}}, tempat denah dan tampilan 3D keduanya terlihat, tombolnya adalah tombol belah: aksi utamanya adalah {{ui:Place in plan}}, dan panah di ujung kanannya membuka menu berisi {{ui:Place in model}}. Atau seret kartu, atau gambar di rincian item, ke denah atau tampilan 3D: item ditempatkan di tempat Anda melepaskannya. Dengan pena atau jari, tekan dan tahan kartu sebentar, lalu seret.
6. Pilih lantai di bilah penempatan. Di tampilan 3D, lantai di atasnya disembunyikan selama penempatan dan tampilannya beralih ke atas; di denah, denah sudah menampilkan lantai itu. Memilih {{ui:Place in model}} dari denah saja akan memunculkan tampilan 3D di sebelahnya.
7. Gerakkan penunjuk di atas model: kotak transparan menunjukkan tempat item akan ditaruh.
8. Tekan {{key:R}} untuk memutar 90°. Tekan {{key:Tab}} (atau {{ui:Wall snap}}) untuk menempelkan bagian belakangnya ke dinding terdekat, menghadap ruangan.
9. Klik untuk menempatkannya. Atau ketik posisinya di **X, Y (mm)**, misalnya `1200, 3400`, lalu tekan {{key:Enter}}.

Lampu atau apa pun yang digantung dari atas: atur **Pemasangan** ke **Di plafon**. Bagian atas item kemudian berada di bawah plafon di titik itu (atau di ketinggian level jika tidak ada plafon). Dengan denah plafon pada tampilan Denah, **Pemasangan** dimulai pada **Di plafon**.

10. Jawab satu pertanyaan: **nomor item** (nomor bebas berikutnya sudah terisi), kuantitas, dan catatan. Tekan {{key:Enter}}.
11. Tempatkan lagi, atau tekan {{key:Esc}} untuk berhenti.
12. Klik {{ui:Save as IFC}} untuk mengunduh salinan yang telah diedit.

## Denah atau model

Tombol tempatkan Pustaka mengikuti tampilan yang sedang Anda gunakan, dan berubah segera setelah Anda mengubah tampilan (tombol {{ui:Plan}}, {{ui:Split}}, dan {{ui:3D}}, papan ketik, atau membuka file). Denah menampilkan satu tombol, {{ui:Place in plan}}; 3D menampilkan satu tombol, {{ui:Place in model}}; Split menampilkan tombol belah, dengan {{ui:Place in plan}} sebagai aksi utama dan {{ui:Place in model}} di menunya. Kedua cara memakai bilah penempatan yang sama dan menulis elemen IFC yang sama: penunjuk bekerja di tampilan denah untuk satu cara, dan di tampilan 3D untuk cara lainnya. Tekan {{key:Esc}} kapan saja untuk berhenti.

Menyeret kartu tidak memiliki tombol sendiri: tombol belah, atau tombol biasa, melakukan hal yang sama dengan papan ketik.

## Memindahkan atau memutar item yang ditempatkan

Di {{ui:Draw}}, pilih item di denah. Pegangan persegi muncul di titik sisipnya dan pegangan bulat di sebelahnya.

- Seret item, atau pegangan perseginya, untuk memindahkannya. Ia menempel seperti alat Dinding (ujung dan muka dinding); {{key:Shift}} menjaganya tetap tegak lurus terhadap posisi semula.
- Seret pegangan bulat untuk memutarnya dalam langkah 15°. Tahan {{key:Shift}} untuk langkah 1°.
- Tekan {{key:R}} untuk memutar 90°.
- Di **Properti** (juga di tampilan 3D), ketik **X**, **Y**, dan **Rotasi (°)**, atau klik **Putar 90°**.

Setiap pemindahan adalah satu langkah urung dan ikut dalam Live TeamWork. Item mempertahankan nomor item, data pustakanya, dan ketinggiannya di atas level. Belum dibuat: menyeretnya di tampilan 3D.

## Yang sebaiknya Anda lihat

- Item di model, dipilih, dengan propertinya di kanan: kotak **Item Pustaka** dengan lisensi dan atribusinya, serta set `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` dan, untuk item dari gambar yang diberi tag, `CadCraft_SourceAttributes`.
- "Ditempatkan: *item* (item *n*)" di daftar perubahan. {{key:Mod+Z}} membatalkannya.
- Baris status: "Ditempatkan *item* sebagai item *n*."

## Hal yang perlu diketahui

- Beberapa item hadir dalam beberapa ukuran atau pilihan: kartunya kemudian memiliki pilihan **Varian**, dan yang Anda pilih adalah yang ditempatkan. Lihat [Tempatkan dan tukar item pustaka yang memiliki varian](topic:library-variants).
- Item tanpa badan 3D (simbol 2D) ditempatkan dengan kotak pengganti; Anda memberikan tingginya saat diminta.
- Lebih banyak yang sama: pilih item yang sudah ditempatkan dan gunakan {{ui:Copy}} dan {{ui:Paste}}, atau {{key:Mod+D}}. Lihat [Salin, tempel, dan duplikat item pustaka](topic:copy-paste).
- Untuk memulai setiap penempatan dengan snap dinding aktif, nyalakan **Mulai dengan snap dinding aktif** di [Pengaturan BimCraft](topic:settings).
- Panjang dikonversi ke satuan model itu sendiri, apa pun satuannya.
- **Entourage** (pohon, semak, orang, mobil) juga ada di Pustaka: cari "tree", "person", atau "car". Ini digambar oleh CadCraft (CC0) dan mempertahankan warnanya saat ditempatkan (batang cokelat, daun hijau, kaca mobil tembus pandang), di BimCraft dan di program BIM lain. Ini tampil di [gambar render](topic:render).
- Di file IFC2X3, badannya ditulis sebagai solid berfaset; di IFC4 sebagai himpunan permukaan segitiga. Keduanya dapat dibuka di alat IFC lain.
- Gambar (DWG atau DXF) tidak dapat disimpan di sini, sehingga item hanya ditempatkan ke dalam model IFC. Gunakan **File ini** pada sebuah gambar untuk melihat apa yang akan menjadi blok-bloknya.

## Item dalam bahasa Anda

Item dapat memuat nama, deskripsi, dan tipenya dalam bahasa lain. Ketika item memilikinya dalam bahasa yang diatur BimCraft (Pengaturan › Umum › Bahasa), halaman item menampilkan itu, dengan nama yang diberikan pabriknya di bawahnya, dan **Tempatkan** menulis nama dalam bahasa Anda ke dalam model, sehingga jadwal {{ui:Equipment}} mencantumkannya dengan cara itu. Item tetap menjadi item yang sama: pemeriksaan pembaruan dan penukaran berjalan berdasarkan item itu sendiri, tidak pernah berdasarkan namanya. Item tanpa terjemahan tetap memakai kata-katanya sendiri.

## Kesalahan umum

- **Tombol tempatkan tidak ada.** Tidak ada model IFC yang terbuka. Buka satu terlebih dahulu.
- **Bayangan tidak mengikuti penunjuk.** Penunjuk berada di luar area model, atau bidang lantai berada di luar pandangan. Klik {{ui:Top}}.
- **{{ui:Wall snap}} mengatakan tidak ada dinding.** Lantai itu tidak memiliki dinding dalam IFC (beberapa ekspor menaruh dinding di lantai lain). Pilih lantai itu, atau ketik X dan Y.
- **Ukuran item sebuah file salah.** File itu tidak memiliki satuan, atau menyatakan satuan yang salah. Di {{ui:Files…}}, pilih satuannya dan baca ulang.

:::tip
Menempatkan item yang sama dua kali memakai satu tipe IFC, sehingga model dengan empat puluh kursi hanya menyimpan kursi itu sekali.
:::
