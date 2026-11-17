---
title: Tukar sifat IFC dan simpan salinan yang telah disunting
summary: Tukar nama, tag, penerangan atau nilai sifat elemen, buat asal, dan muat turun fail IFC baharu sementara fail asal kekal seperti sediakala.
keywords: sunting, tukar, sifat, parameter, tag, nama, namakan semula, tanda, simpan sebagai, muat turun, buat asal, salin, ifc, tulis
from: f8035d62
---

## Apa yang akan anda lakukan

Betulkan data dalam model IFC: namakan semula elemen, betulkan tagnya, tukar nilai sifat. Kemudian simpan fail IFC baharu dengan perubahan anda. Fail yang anda buka tidak pernah disentuh.

## Apa yang boleh anda tukar

| Medan | Boleh disunting |
|---|---|
| Nama, Jenis objek, Tag, Penerangan | Ya |
| Nilai sifat tunggal (teks, nombor, Ya/Tidak) | Ya |
| Sifat jenis (set yang ditanda "(jenis)") | Ya, dan perubahan itu terpakai kepada setiap elemen bagi jenis tersebut |
| Jenis, GlobalId, Baris | Tidak |
| Kuantiti (panjang, luas, isipadu, bilangan) | Tidak |
| Senarai, enumerasi dan nilai berbilang bahagian yang lain | Tidak |
| Geometri, kedudukan, menambah atau memadam elemen | Tidak |

## Langkah

1. Buka model IFC dan klik elemen yang anda mahu tukar.
2. Dalam panel {{ui:Sifat}}, klik nilai yang anda mahu tukar. Ia bertukar menjadi kotak teks. Nilai kosong ditunjukkan sebagai *kosong*.
3. Taip nilai baharu.
4. Tekan {{key:Enter}}, atau klik di tempat lain, untuk menyimpannya. Tekan {{key:Esc}} untuk membatalkan.
5. Lihat nilai itu: kini ia tebal dengan bar biru di sebelahnya, yang menandakan nilai yang disunting.
6. Lihat bahagian {{ui:Perubahan}} di sebelah kiri: perubahan itu disenaraikan sebagai *elemen*: *medan*, nilai lama kepada nilai baharu.
7. Ulangi untuk nilai lain atau elemen lain.
8. Klik {{ui:Simpan sebagai IFC}} (ia menunjukkan berapa banyak perubahan yang menunggu, contohnya "Simpan sebagai IFC (3)"), atau tekan {{key:Mod+S}}.
9. Cari "*nama asal* (edited).ifc" dalam folder muat turun anda.

## Apa yang sepatutnya anda lihat

Baris status menyatakan "*nama* (edited).ifc disimpan dengan *n* perubahan (… bait). Fail asal anda tidak berubah." Senarai {{ui:Perubahan}} dikosongkan, bersedia untuk pusingan seterusnya.

## Jenis nilai

- **Teks**: apa sahaja yang anda taip disimpan seperti sedia ada. Mengosongkan Nama, Jenis objek, Tag atau Penerangan membuang nilai itu.
- **Nombor**: taip nombor biasa, seperti `2.4` atau `1200`, dalam unit fail itu sendiri. Tiada simbol unit. Apa-apa lain menunjukkan "Gunakan nombor."
- **Nombor bulat** (bilangan, integer): "Gunakan nombor bulat." jika anda menaip perpuluhan.
- **Ya/Tidak**: nilai menjadi menu dengan Ya dan Tidak.

Setiap nilai mengekalkan jenis IFCnya, jadi nombor kekal sebagai nombor dan program lain membacanya dengan betul.

## Buat asal

1. Klik {{ui:Buat asal}} dalam bahagian {{ui:Perubahan}}, atau tekan {{key:Mod+Z}} semasa anda tidak menaip dalam medan.
2. Ulang untuk membuat asal lebih banyak. Setiap buat asal membuang perubahan terbaru.

Anda tidak boleh membuat asal melepasi simpanan: selepas menyimpan, senarai bermula semula. Fail yang disimpan mengekalkan semuanya.

## Mengapa sunting anda hanya menukar satu elemen

Pengeksport menjimatkan ruang dengan berkongsi data. Satu set sifat mungkin dikongsi oleh dua puluh pintu, dan satu nilai ("Penarafan api: 60 min") mungkin disenaraikan dalam sembilan puluh set. Jika BimCraft hanya menukar nilai yang dikongsi, setiap elemen yang berkongsinya turut berubah.

Maka BimCraft menyalin sebelum ia menulis:

- Jika set sifat yang anda sunting dikongsi dengan elemen lain, elemen anda mendapat salinannya sendiri bagi set itu, dan hanya salinan itu yang berubah.
- Jika nilai itu dikongsi dengan set lain, set anda mendapat salinan nilai itu sendiri.

Jiran mengekalkan data lama mereka. Ini dipanggil *copy-on-write* (salin apabila ditulis). Ia menambah beberapa entri kecil pada fail, yang setiap program IFC baca seperti biasa.

**Sifat jenis adalah pengecualian dengan sengaja.** Set yang ditanda "(jenis)" tergolong kepada jenis elemen itu, dan dalam IFC setiap elemen bagi jenis itu membacanya dari situ. Menukarnya menukar jenis, jadi setiap elemen bagi jenis itu menunjukkan nilai baharu. Senarai {{ui:Perubahan}} menandakan suntingan sebegini dengan "(jenis)". Lihat [Tukar sifat jenis bagi setiap elemen dalam satu jenis](topic:type-vs-instance).

## Amaran sebelum anda kehilangan kerja

- Membuka fail lain semasa anda ada perubahan yang belum disimpan akan bertanya "Anda ada *n* perubahan yang belum disimpan pada *fail*. Buang perubahan ini?" Klik Batal untuk terus bekerja, kemudian simpan.
- Menutup atau memuat semula tab dengan perubahan yang belum disimpan menyebabkan pelayar bertanya sama ada hendak keluar.

## Kesilapan lazim

- **Menaip unit.** `2400 mm` ditolak. Taip `2400`.
- **Menukar sifat jenis apabila anda maksudkan satu elemen.** Cari nota "(jenis)" sebelum menaip. Jika anda mahu satu elemen berbeza, tukar sifat contoh, atau Tag atau Namanya.
- **Menjangka fail asal berubah.** Menyimpan sentiasa memuat turun fail baharu. Gantikan fail asal sendiri jika itu yang anda mahu, dan simpan salinan.
- **Menekan {{key:Mod+S}} tanpa perubahan.** BimCraft hanya menyimpan apabila ada yang perlu disimpan; jika tidak, "Simpan halaman" pelayar mungkin dibuka. Tutupnya.
- **Menyimpan dua kali dan menjangka dua fail kecil.** Setiap simpanan mengandungi setiap suntingan sejak anda membuka model.
- **Menjangka suntingan kembali ke fail projek.** BimCraft menulis IFC sahaja. Bawa IFC yang telah disunting ke dalam program penciptaan anda sebagaimana anda mengimport mana-mana IFC.
