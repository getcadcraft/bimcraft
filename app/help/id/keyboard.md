---
title: Tombol dan mouse
summary: Setiap aksi tombol, mouse, trackpad, dan sentuh di BimCraft, dikelompokkan berdasarkan apa yang sedang Anda lihat.
keywords: keyboard, pintasan, tombol pintas, tombol, mouse, trackpad, sentuh, orbit, geser, zoom, sembunyikan, isolasi, tembus pandang, urungkan, ulangi, salin, tempel, duplikat, simpan, paskan, tampilan cetak, escape, pengaturan, gambar, dinding, pintu, jendela, denah
from: 5c6eedce
---

BimCraft memiliki sedikit pintasan. Sebagian besar pekerjaan dilakukan dengan mouse dan panel. Pintasan yang ditulis dengan {{key:Mod}} menggunakan Command di Mac dan Ctrl di tempat lain. Lihat [Tombol, mouse, dan trackpad](common:keys) untuk cara tombol ditulis dalam bantuan ini.

## Di mana saja

| Tombol | Fungsinya |
|---|---|
| {{key:Ctrl+Shift+F}} | Ganti mode layar: normal, layar penuh, dan layar penuh dengan bilah tersembunyi. Ctrl di semua platform, termasuk Mac |
| {{key:Esc}} | Keluar dari layar penuh |
| {{key:Mod+,}} | Buka {{ui:Pengaturan}}. Lihat [Pengaturan BimCraft](topic:settings) |
| {{key:Tab}} | Pindah antara tombol, kotak centang, dan nilai. Setiap kontrol dapat dijangkau dari keyboard |

## Tampilan 3D (model IFC)

| Tombol atau aksi | Fungsinya |
|---|---|
| {{key:F}} | Paskan seluruh model, tampilan tiga perempat (sama dengan {{ui:Paskan}}) |
| {{key:Esc}} | Hapus pilihan, atau berhenti menempatkan atau menempel |
| Klik | Pilih elemen di bawah penunjuk; klik latar kosong untuk menghapus pilihan |
| {{key:Mod}}+klik atau {{key:Shift}}+klik | Tambahkan elemen ke pilihan, atau keluarkan darinya |
| {{key:H}} | Sembunyikan elemen yang dipilih. Lihat [Sembunyikan, isolasi, dan tembus pandang elemen](topic:hide-and-isolate) |
| {{key:I}} | Tampilkan hanya elemen yang dipilih (isolasi) |
| {{key:T}} | Tampilkan elemen yang dipilih, yang lain tembus pandang |
| {{key:Shift+H}} | Tampilkan lagi setiap elemen |
| {{ui:Jalan}} | Lalu {{key:W}} {{key:A}} {{key:S}} {{key:D}} atau panah untuk berjalan, {{key:Shift}} untuk berlari, seret untuk melihat sekeliling, {{key:Esc}} untuk berhenti. Lihat [Jalan-jalan di dalam model](topic:walk) |
| {{key:M}} | Ukur jarak dan luas muka. Lihat [Ukur jarak, luas muka, dan lokasi dalam 3D](topic:measure) |
| Seret dengan tombol kiri | Orbit |
| Seret dengan tombol kanan | Geser |
| {{key:Shift}} atau {{key:Mod}} dan seret dengan tombol kiri | Geser (berguna di trackpad) |
| Gulir roda, atau seret dengan tombol tengah | Zoom |
| Gulir dua jari atau cubit di trackpad | Zoom |
| Satu jari (sentuh) | Orbit; ketuk untuk memilih |
| Dua jari (sentuh) | Cubit untuk zoom, gerakkan bersama untuk menggeser |

| {{key:X}} | Bidang potongan aktif dan nonaktif. Lihat [Potong model IFC dengan bidang potongan](topic:section-plane) |
| {{key:Shift+X}} | Kotak potongan di sekitar elemen yang dipilih, dengan ruang yang diatur di Pengaturan |

Tidak ada tombol untuk {{ui:Atas}}, {{ui:Depan}}, dan {{ui:Samping}}; gunakan tombolnya.

## Edit

Perintah yang sama ada di bilah alat: {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, dan menu {{ui:Lainnya}}, yang menampilkan setiap tombol. Perintah ini bekerja di tampilan 3D model IFC, bukan saat Anda mengetik di kolom. Lihat [Salin, tempel, dan duplikat item pustaka](topic:copy-paste).

| Tombol | Fungsinya |
|---|---|
| {{key:Mod+Z}} | Urungkan perubahan terakhir |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Ulangi apa yang diambil kembali oleh Urungkan |
| {{key:Mod+C}} | Salin elemen yang dipilih (nama dan propertinya juga masuk ke clipboard sebagai teks) |
| {{key:Mod+X}} | Potong elemen yang dipilih: salin, lalu hapus |
| {{key:Mod+V}} | Tempel apa yang Anda salin: mengikuti penunjuk, klik di tempat tujuannya |
| {{key:Mod+Shift+V}} | Tempel di tempat yang sama: di tempat asal potongan, atau di sebelah aslinya setelah salin |
| {{key:Mod+D}} | Duplikat: salin elemen yang dipilih dan mulai menempelkannya |
| {{key:Delete}} | Hapus elemen yang dipilih, beserta bagian dan bukaannya. Lihat [Hapus, potong, salin, dan tempel elemen bangunan](topic:edit-elements) |
| {{key:Mod+A}} | Pilih setiap elemen yang ditampilkan |
| {{key:Esc}} | Batalkan pilihan |

Saat teks dipilih di halaman, {{key:Mod+C}} menyalin teks itu seperti biasa.

## Tampilan denah (Gambar)

Ini bekerja saat {{ui:Gambar}} aktif dan Anda tidak sedang mengetik di kolom. Lihat [Gambar dinding](topic:draw-walls) dan [Pintu dan jendela](topic:doors-and-windows).

| Tombol atau aksi | Fungsinya |
|---|---|
| {{key:V}} | {{ui:Pilih}} |
| {{key:W}} | {{ui:Dinding}} |
| {{key:D}} | {{ui:Pintu}} |
| {{key:N}} | {{ui:Jendela}} |
| {{key:H}} | Dengan {{ui:Pintu}} atau {{ui:Jendela}}: engsel di ujung lainnya |
| {{key:Shift}} saat menggambar dinding | Pertahankan pada 0°, 90°, 180°, atau 270° |
| Angka serta tanda kaki dan inci (`'` dan `"`) | Mulai mengetik panjang ke kotak {{ui:Panjang}}; {{key:Enter}} menggunakannya |
| {{key:Enter}}, {{key:Esc}}, klik kanan, atau klik dua kali | Akhiri dinding yang sedang Anda gambar; {{key:Esc}} sekali lagi kembali ke {{ui:Pilih}} |
| {{key:Delete}} | Hapus dinding, pintu, dan jendela yang dipilih; dinding yang tersisa tersambung kembali |
| {{key:F}} dengan penunjuk di atas denah | Paskan denah |
| Gulir roda | Zoom di sekitar penunjuk |
| Seret dengan tombol tengah atau kanan, atau {{key:Space}} dan seret | Geser; dengan {{ui:Pilih}} aktif, seret biasa juga menggeser |
| Seret pintu atau jendela dengan {{ui:Pilih}} | Pindahkan di sepanjang dindingnya, atau ke dinding lain |
| Dua jari (sentuh) | Cubit untuk zoom, gerakkan bersama untuk menggeser |

## Menempatkan dan menempel item pustaka

| Tombol | Fungsinya |
|---|---|
| {{key:R}} | Putar item 90° |
| {{key:Tab}} | Snap dinding aktif dan nonaktif: bagian belakang item menempel ke dinding terdekat |
| {{key:Enter}} di **X, Y (mm)** | Tempatkan di posisi yang diketik |
| {{key:Esc}} | Berhenti menempatkan atau menempel |

## Mengedit nilai IFC

| Tombol | Fungsinya |
|---|---|
| {{key:Enter}} | Simpan nilai yang Anda ketik |
| {{key:Esc}} | Batalkan dan kembalikan nilai lama |
| Klik di tempat lain | Simpan nilai yang Anda ketik |
| {{key:Mod+Z}} | Urungkan perubahan terakhir. Hanya saat ada perubahan yang belum disimpan dan Anda tidak sedang mengetik di kolom |
| {{key:Mod+Y}} | Ulangi apa yang diambil kembali oleh Urungkan |
| {{key:Mod+S}} | Simpan sebagai IFC. Hanya saat ada perubahan yang belum disimpan; jika tidak, perintah simpan bawaan browser yang terbuka |

Untuk mengedit hanya dengan keyboard: tekan {{key:Tab}} sampai sebuah nilai disorot, lalu tekan {{key:Enter}} untuk mulai mengetik.

## Gambar 2D (DWG dan DXF)

| Tombol atau aksi | Fungsinya |
|---|---|
| {{key:F}} | Paskan gambar atau lembar |
| {{key:P}} | Tampilan cetak aktif dan nonaktif |
| Klik dua kali | Paskan |
| Seret dengan tombol apa pun | Geser |
| Gulir roda | Zoom di penunjuk |
| Gulir dua jari atau cubit di trackpad | Zoom di penunjuk. Gulir dua jari tidak menggeser |
| Satu jari (sentuh) | Geser. Zoom cubit untuk gambar belum dibuat |

## Gambar dalam 3D

| Tombol atau aksi | Fungsinya |
|---|---|
| {{key:3}} | 3D aktif dan nonaktif (juga di tampilan 2D) |
| {{key:F}} | Batas: seluruh gambar |
| Seret dengan tombol tengah atau kiri | Orbit |
| Seret dengan tombol kanan, atau {{key:Shift}} dan seret | Geser |
| Gulir roda | Zoom ke arah apa pun yang ada di bawah penunjuk |
| Gesek dua jari di trackpad | Orbit; dengan {{key:Shift}}, geser |
| Cubit di trackpad | Zoom |
| Satu jari (sentuh) | Orbit |
| Dua jari (sentuh) | Cubit untuk zoom, gerakkan bersama untuk menggeser |

{{key:F}}, {{key:P}}, dan {{key:3}} tidak melakukan apa-apa saat Anda mengetik di kolom, saat jadwal peralatan ditampilkan, atau saat Anda menahan {{key:Mod}} atau {{key:Alt}}.

## File

| Aksi | Fungsinya |
|---|---|
| Seret file ke halaman | Buka file |
| Seret folder ke halaman | Buka sebagai folder proyek, tanpa permintaan izin |
