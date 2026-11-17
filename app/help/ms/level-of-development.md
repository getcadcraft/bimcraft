---
title: Tahap pembangunan (LOD) dan semakan tonggak
summary: Beri elemen tahap pembangunan, lihat dari mana ia datang, semak model berbanding LOD yang diminta oleh tonggak, dan betulkan tag yang hilang serta bilik tanpa nama. Setiap semakan hanya memberi nasihat; tiada apa yang disekat.
keywords: lod, tahap pembangunan, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, tonggak, jadual tonggak, semakan model, tag yang hilang, bilik tanpa nama, generik awal, kelas ifc, pengelasan
from: 2091c79b
---

## Apa yang akan anda lakukan

Nyatakan sejauh mana setiap elemen dibangunkan, kemudian semak keseluruhan model berbanding apa yang diminta oleh tonggak projek.

## Langkah

1. Pilih satu elemen (atau beberapa elemen) dan buka {{ui:Sifat}}. Cari {{ui:Tahap pembangunan}}.
2. Pilih satu tahap daripada senarai. Setiap tahap dinamakan mengikut maksudnya, dan setiap tahap merangkumi tahap di bawahnya. Satu langkah buat asal meliputi keseluruhan pilihan.
3. Baca dari mana tahap itu datang: elemen ini, jenisnya, atau tanda yang disahkan di tapak.
4. Untuk menyemak model, buka {{ui:Semakan model}} di sebelah kiri, kemudian {{ui:Tonggak LOD}}. Pilih tonggak dan jadual (jadual permulaan, atau fail CSV atau JSON anda sendiri dengan {{ui:Beban}}).
5. Klik {{ui:Semak model}}. Jumlah dan satu baris bagi setiap baris jadual menunjukkan apa yang telah mencapai tahapnya dan apa yang belum; penemuan juga dipaparkan dalam senarai masalah.
6. Di bawah {{ui:Tag yang hilang dan bilik tanpa nama}}, klik {{ui:Cari}}, sunting cadangan jika mahu, dan klik {{ui:Guna}}.

## Apa yang anda patut lihat

- Tahap yang anda pilih pada elemen, dengan kelas IFC dan kod pengelasannya di sebelahnya.
- Jumlah dan baris untuk tonggak. Jadual tidak sekali-kali menukar maksud sesuatu tahap: skalanya tetap, dan jadual hanya menyatakan tahap yang diperlukan oleh tonggak.
- "Kekal generik pada awal": nasihat untuk mengekalkan elemen generik pada tonggak awal. Ia hanya nasihat.

## Perkara yang perlu diketahui

- Tiada apa di sini menyekat anda. Model yang berada di bawah tahap yang diminta oleh tonggak disenaraikan, bukan ditolak.
- Tiga bahagian sesuatu tahap (geometri, maklumat, dokumentasi) boleh ditetapkan masing-masing; tanda menunjukkan dipenuhi, di bawah, atau tidak dinyatakan.
