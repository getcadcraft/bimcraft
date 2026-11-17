---
title: Pemecahan masalah
summary: Pesan yang ditampilkan BimCraft, penyebabnya, dan apa yang harus dilakukan, untuk membuka file, folder, model 3D, gambar, dan pengeditan.
keywords: masalah, kesalahan, tidak berfungsi, tidak dapat dibuka, gagal, tidak lengkap, rusak, lambat, crash, kosong, hilang, pesan, bantuan
from: 1e5a79fc
---

Pesan muncul di baris status di bagian bawah area kerja, berwarna merah saat ada yang gagal. Cari pesannya di bawah ini.

## Membuka file

**"*name* bukan file IFC, RVT, RFA, DWG, atau DXF."**
BimCraft tidak mengenali file ini. Periksa ekstensinya dan pastikan file tidak kosong. PDF, gambar, dan file perkantoran tidak dapat dibuka.

**".ifczip belum didukung. Simpan atau ekspor model sebagai file .ifc biasa."** (juga untuk `.ifcxml`)
Ekstrak `.ifczip` (berupa zip biasa yang berisi `.ifc`) atau ekspor IFC biasa.

**"… adalah file proyek yang belum dibaca BimCraft."**
File `.pln`, `.pla`, `.tpl`, atau `.bpn`. Ekspor IFC atau DWG darinya, lalu buka itu: lihat [Buka file proyek .pln dan .pla](topic:pln-project-files).

**"File IFC ini tidak dapat dibaca."**
File IFC rusak atau bukan IFC sungguhan. Buka dengan penyunting teks: file IFC asli dimulai dengan `ISO-10303-21;`. Ekspor ulang.

**"File ini tidak lengkap: ukurannya … MB, tetapi indeks miliknya menunjuk ke data setidaknya sampai … MB. …"**
File proyek atau famili terpotong saat disalin, diunggah, atau disinkronkan. File drive cloud yang berstatus "online saja" tampak sama. File yang dibuka sendiri tetap terbuka, dengan pesan ini di bagian atas kartu dan "Menampilkan yang berhasil dipulihkan; salin ulang file asli untuk model lengkap.": kartu hanya menampilkan bagian yang seluruh byte-nya ada dalam file dan mendaftar sisanya di bawah **Tidak ada dalam file**. Jadikan file tersedia offline di drive cloud Anda, atau salin ulang file asli, lalu buka kembali. Di dalam folder, BimCraft justru menampilkan cadangan lengkap terbaru.

**"… Daftar isi file juga berada di bagian yang hilang, sehingga tidak ada yang dapat dibuka."**
File terpotong sangat awal sehingga daftar isinya pun tidak ada. Tidak ada yang dapat dipulihkan dari salinan ini. Salin ulang file asli dan buka kembali.

**"File compound ini tidak memiliki aliran BasicFileInfo, sehingga bukan file Revit."**
File ini berjenis compound lain (dokumen kantor lama memakai wadah yang sama). Periksa apakah Anda memilih file yang benar.

**"Masih mengerjakan yang terakhir…"**
BimCraft masih sibuk dengan file atau folder sebelumnya. Tunggu baris status selesai, lalu coba lagi.

**Pemilih file menonaktifkan file saya.**
Pemilih hanya menawarkan `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg`, dan `.dxf`. Seret file lain ke halaman sebagai gantinya, dan BimCraft akan memberi tahu apakah file itu dapat dibaca.

## Membuka folder

**"Folder ini memiliki lebih dari 20,000 file. Pilih folder yang lebih kecil, misalnya satu proyek."**
Anda memilih folder yang terlalu tinggi, seperti seluruh drive. Pilih satu folder proyek.

**"Peramban tidak memberi akses ke *name*. Pilih lagi dengan Buka folder."**
Anda mengklik {{ui:Buka kembali}} pada folder terbaru, dan izin peramban ditolak atau sudah kedaluwarsa. Pilih folder lagi, atau seret ke sini.

**Peramban mengatakan akan "mengunggah" file.**
Itu istilah peramban sendiri untuk menyerahkan file ke halaman. BimCraft tidak mengirimkannya ke mana pun. Seret folder ke sini untuk menghindari pertanyaan itu.

**Tidak terjadi apa-apa di ponsel atau tablet.**
Banyak peramban seluler tidak dapat memilih folder. Buka file tunggal, atau gunakan komputer.

## Mesin IFC dimuat pertama kali

**Baris status tetap pada "Memulai mesin IFC…", atau menampilkan kesalahan seperti "Failed to fetch".**
Mesin IFC tidak dapat diunduh. Anda mungkin sedang offline, atau firewall atau pemblokir konten menghentikannya.

:::offline
Anda sedang offline. Jika tombol di bilah aplikasi tidak bertuliskan {{ui:Siap offline}}, mesin IFC belum pernah disimpan di peramban ini. Sambungkan kembali, buka file lagi, lalu klik {{ui:Simpan untuk offline}} agar berfungsi offline lain kali. Lihat [Online dan offline](topic:online-offline).
:::

:::online
Muat ulang halaman dan coba lagi. Pada jaringan kerja, minta tim TI Anda untuk mengizinkan file `.wasm` situs ini.
:::

## Menyimpan untuk penggunaan offline

**Tombol bertuliskan {{ui:Tidak dapat menyimpan}}.**
Beberapa file tidak terunduh, biasanya karena koneksi terputus. Periksa koneksi Anda dan klik tombol lagi. Salinan offline sebelumnya tetap disimpan sampai yang baru selesai.

**Tombol bertuliskan {{ui:Offline tidak tersedia}}.**
Jendela ini tidak dapat menyimpan salinan offline, misalnya jendela privat atau komputer kerja yang dikelola. Lihat [Bekerja offline](common:offline).

**Tombol tetap pada "Menyimpan *n* dari *m*" untuk beberapa saat.**
Salinan BimCraft sekitar 11 MB, sebagian besarnya adalah mesin IFC. Biarkan tab terbuka sampai bertuliskan {{ui:Siap offline}}.

**BimCraft terbuka secara offline tetapi tampak usang.**
Salinan tersimpan Anda berasal dari kunjungan sebelumnya. Saat online, klik {{ui:Siap offline}} dan pilih {{ui:Simpan lagi (ambil versi terbaru)}}.

## Tampilan 3D

**Model tidak berada di tempat yang saya harapkan, atau sangat kecil.**
Tekan {{key:F}} atau klik {{ui:Paskan}}. Paskan selalu membingkai semua yang ada di model, termasuk lantai yang sudah Anda hapus centangnya dan elemen liar yang jauh dari bangunan, sehingga bangunan bisa tampak kecil. Zoom masuk dari situ.

**Mengklik tidak memilih apa pun.**
Tahan mouse tetap diam saat mengklik: seretan kecil akan melakukan orbit. Elemen pada lantai yang tidak dicentang tidak dapat dipilih. Saat {{ui:Ruang}} aktif, ruang tembus pandang dipilih sebelum apa pun di dalamnya.

**Tombol {{ui:Tepi}} berwarna abu-abu: "Tepi dimatikan untuk model yang sangat besar".**
Model memiliki lebih dari 1.5 juta segitiga. Tepi dimatikan untuk menghemat memori.

**Tab menjadi lambat, putih, atau menampilkan halaman crash peramban.**
Model terlalu besar untuk memori yang diberikan peramban ke tab. Tutup tab lain dan muat ulang. Ekspor IFC yang lebih kecil: satu bangunan, satu disiplin, atau lebih sedikit lantai. Lihat [Peramban, perangkat, dan memori](topic:platforms).

**Tampilan 3D tetap kosong.**
WebGL mungkin dimatikan atau diblokir. Di pengaturan peramban, nyalakan akselerasi perangkat keras (atau akselerasi grafis) dan mulai ulang peramban.

## Mengedit IFC

**"Gunakan angka."** Nilainya berupa numerik. Ketik angka biasa tanpa satuan, seperti `2.4`.

**"Gunakan bilangan bulat."** Nilainya berupa jumlah atau bilangan bulat. Hapus desimalnya.

**"Hanya properti nilai tunggal yang dapat diedit."** Daftar, enumerasi, dan kuantitas hanya dapat dibaca.

**{{key:Mod+S}} membuka jendela "Simpan halaman" milik peramban.**
Tidak ada perubahan yang belum disimpan, jadi BimCraft membiarkan tombol itu untuk peramban. Tutup jendela.

**{{key:Mod+Z}} tidak melakukan apa pun.**
Tombol ini hanya berfungsi saat ada perubahan yang belum disimpan dan Anda tidak sedang mengetik di kolom isian. Setelah disimpan, tidak ada lagi yang dapat diurungkan.

**Daftar {{ui:Perubahan}} masih menampilkan suntingan setelah saya membuangnya dan membuka gambar atau folder.**
Saat Anda menjawab pertanyaan "Buang?" dengan OK lalu membuka sesuatu selain model IFC, suntingan lama tetap tersimpan di memori dan {{ui:Simpan sebagai IFC}} tetap akan menyimpannya. Untuk benar-benar mulai dari awal, buka kembali IFC asli, atau muat ulang halaman.

**Suntingan saya mengubah lebih banyak elemen daripada yang saya pilih.**
Anda mengubah properti dalam set yang bertanda "(type)". Properti tipe berlaku untuk setiap elemen dari tipe tersebut. Klik {{ui:Urungkan}}. Lihat [Ubah properti tipe untuk setiap elemen dari sebuah tipe](topic:type-vs-instance).

## Gambar

**"*name* tidak dapat dibaca. Mungkin rusak, atau disimpan dalam format yang belum ditangani pembaca (…)."**
Simpan gambar dari program pembuatnya sebagai DWG versi lama (2018 atau sebelumnya) atau sebagai DXF, lalu coba lagi.

**"Gambar ini tidak memiliki apa pun untuk ditampilkan."** atau **"*name* adalah gambar kosong: tidak berisi garis, teks, atau blok."**
Gambar kosong, atau hanya berisi hal-hal yang belum digambar BimCraft (lihat **Belum digambar** di sebelah kanan).

**"Gambar ini sangat besar; hanya sebagian yang ditampilkan."**
BimCraft berhenti menggambar agar tetap responsif. Matikan layer yang tidak Anda butuhkan, atau buka lembar yang Anda perlukan dari gambar yang lebih kecil.

**Sebagian lembar hilang.**
Gambar tertaut mungkin hilang: lihat di bawah **Gambar tertaut** di sebelah kanan. Lihat [Temukan gambar tertaut dan gambar](topic:dwg-linked-files). Layer mungkin juga dimatikan: klik {{ui:Semua nyala}}.

**Gambar raster tampil sebagai bingkai kosong.**
File-nya tidak ditemukan, atau berupa TIFF ("TIFF tidak dapat ditampilkan di peramban"). Tambahkan salinan PNG atau JPEG dengan {{ui:Tambahkan gambar…}}.

**Menggulir pada trackpad saya melakukan zoom, bukan menggeser gambar.**
Begitulah cara gambar bekerja di BimCraft. Klik dan seret untuk menggeser.

## Masih bermasalah

Baca [Yang belum dibuat](topic:not-built-yet): hal yang Anda cari mungkin belum ada di build ini.
