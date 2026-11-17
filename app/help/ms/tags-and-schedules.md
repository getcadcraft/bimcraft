---
title: Tag elemen dan jadual mengikut tag
summary: Tentukan tag anda sendiri (nama, jenis, nilai yang dibenarkan, kelas yang mana), beri tag kepada banyak elemen sekaligus, dan buat jadual yang lajur, penapis dan kumpulannya membaca tag. Tag disimpan dalam IFC.
keywords: tag, menandakan, sifat tersuai, parameter, parameter kongsi, set sifat, pset, jadual, penapis, kumpulkan mengikut, kemasan, penarafan api, sunting berkelompok, csv
from: 9cc7c90d
---

## Apa yang anda akan lakukan

Tag ialah sifat anda sendiri, seperti *Kemasan* atau *Penarafan api*. Anda mentakrifkannya sekali untuk projek, menetapkannya pada banyak elemen sekaligus, dan setiap jadual dalam BimCraft boleh membacanya: jadual tag di sini, {{ui:Kuantiti}}, Cari, Warna mengikut sifat dan [Dokumen daripada model](topic:documents-from-the-model).

## Langkah

1. Buka model IFC, atau mulakan bangunan baharu.
2. Dalam panel kiri, di bawah {{ui:Kuantiti}}, buka {{ui:Tag}}.
3. Klik {{ui:Tambah tag}}. Beri nama, pilih jenisnya, dan jika mahu senaraikan nilai yang dibenarkan (dengan koma) serta kelas yang ia untuk (`IfcDoor`, `IfcWall` …). Klik {{ui:Tambah tag}}.
4. Pilih elemen dalam model (Cari membantu: pilih setiap pintu sekaligus).
5. Di bawah {{ui:Tag pilihan}}, pilih atau taip nilai untuk setiap tag yang anda mahu tetapkan, biarkan yang lain seperti sedia ada, dan klik {{ui:Guna pada … elemen yang dipilih}}.
6. Di bawah {{ui:Jadual tag}}, tanda lajur, tambah penapis, pilih {{ui:Kumpulkan mengikut}}, kemudian {{ui:Muat turun CSV}}.

## Apa yang sepatutnya anda lihat

- Satu langkah dalam senarai perubahan bagi setiap definisi yang disimpan dan setiap penandaan; {{ui:Buat asal}} membatalkannya.
- Elemen daripada kelas yang tidak dimaksudkan untuk sesuatu tag ditinggalkan daripada tag itu, dan baris status menyatakan berapa banyak.
- Jadual tag menyenaraikan satu baris bagi setiap elemen, dikumpulkan mengikut medan yang anda pilih; klik sel pertama baris untuk memilih elemen itu.
- {{ui:Kuantiti}} menyenaraikan tag di bawah `CadCraft_Tags`, supaya anda boleh menjumlahkan luas atau kiraan mengikut tag di sana.

## Jenis

Jenisnya ialah senarai yang sama dengan parameter keluarga: Panjang (milimeter), Sudut (darjah), Nombor, Nombor bulat, Ya / Tidak, Pen (1–16), Teks, Bahan dan Isi. Nilai yang tidak sesuai dengan jenisnya, atau tidak termasuk dalam nilai yang dibenarkan, ditolak dengan mesej, dan tiada apa berubah.

## Perkara yang perlu diketahui

- Semuanya ialah IFC biasa, supaya program lain boleh membaca nilainya: definisi terdapat dalam set sifat `CadCraft_TagDefs` pada projek, nilai dalam set sifat `CadCraft_Tags` pada setiap elemen (satu sifat bagi setiap tag). Panjang ditulis dalam unit panjang fail.
- `IfcWall` dalam kelas sesuatu tag turut merangkumi dinding kes piawai dan dinding berelemen.
- Menamakan semula tag menamakan semula nilainya pada setiap elemen dalam langkah yang sama. Mengalih keluar tag hanya mengalih keluar definisinya: nilai yang telah ditetapkan kekal pada elemen sebagai sifat biasa. Kosongkannya dahulu (pilih {{ui:Kosongkan}}) untuk membuangnya.
- Tag dalam aplikasi lukisan CadCraft (atribut blok) belum dibina.
