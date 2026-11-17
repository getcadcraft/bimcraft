---
title: Berpindah dari program BIM dan lukisan lain
summary: Bagaimana tabiat daripada pengarangan BIM desktop dan paparan DWG dipetakan kepada BimCraft, serta perbezaan yang sering mengelirukan.
keywords: bertukar, berhijrah, biasa, BIM desktop, keluarga, parameter, pelayar projek, palet sifat, view cube, xref, pengurus lapisan, perbezaan, bandingkan
from: 2de629af
---

Jika anda biasa dengan Revit, kebanyakan BimCraft akan terasa biasa dari segi perkataan dan asing dari segi skop. Perbezaan yang paling penting: **binaan ini membaca dan memeriksa model serta menyunting data IFC. Ia belum mengarang seperti Revit.** Anda tidak boleh melukis dinding, meletakkan keluarga, membuat paparan atau helaian, atau menyimpan fail projek. Apa yang boleh anda lakukan ialah membuka hampir mana-mana fail bangunan pada mana-mana komputer dengan pelayar, melihat apa yang ada di dalamnya, menyemak keseluruhan folder projek, dan membetulkan data dalam model IFC.

## Tabiat yang dipetakan

| Jika anda biasa dengan | Dalam BimCraft |
|---|---|
| Membuka `.rvt` dalam Revit untuk melihat model | BimCraft membuka `.rvt` sebagai kad fail: keluaran, maklumat projek, pautan, pratonton. Untuk model 3D, eksport IFC dan buka itu. [Baca fail projek atau keluarga](topic:read-rvt-file) |
| Menyemak keluaran mana fail disimpan sebelum membukanya | Kad menyatakan "disimpan dalam Revit …" di bahagian atas, tanpa menaik taraf atau menyentuh fail |
| The Project Browser | Tiada pelayar paparan dan helaian. Model IFC mempunyai senarai {{ui:Tingkat}} dan {{ui:Elemen}}; lukisan mempunyai tab helaian |
| Palet Properties | Panel {{ui:Sifat}} di sebelah kanan, untuk elemen yang anda klik. Set sifat IFC dan bukannya kumpulan parameter |
| Parameter contoh dan jenis | Set sifat contoh, dan set yang ditanda "(type)". Perubahan jenis digunakan kepada setiap elemen bagi jenis itu, seperti dalam Revit. [Tukar sifat jenis untuk setiap elemen bagi satu jenis](topic:type-vs-instance) |
| Edit Type | Tiada dialog: klik nilai dalam set "(type)" dan taip |
| Memilih banyak elemen, penapis, Select All Instances | Satu elemen pada satu masa. Belum dibina |
| ViewCube dan roda navigasi | ViewCube di sudut kanan bawah, empat butang ({{ui:Muat}}, {{ui:Atas}}, {{ui:Hadapan}}, {{ui:Sisi}}) dan orbit bebas. Tiada roda navigasi |
| Shift dan seret butang tengah untuk orbit, seret butang tengah untuk pan | Seret kiri untuk orbit, seret kanan (atau {{key:Shift}} dan seret) untuk pan, roda tetikus untuk zum. Gaya menu {{ui:BIM ribbon}} bertukar kepada seret butang tengah untuk pan dan {{key:Shift}} dengan butang tengah untuk orbit. [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse) |
| Pelan lantai, keratan, kotak keratan | Satu satah {{ui:Keratan}} pada satu masa ({{key:X}}); tiada kotak keratan atau pelan 2D. [Potong model IFC dengan satah keratan](topic:section-plane) |
| Sembunyi dalam paparan, asingkan, keterlihatan/grafik | {{ui:Tingkat}} dihidupkan dan dimatikan, {{ui:Ruang}} dan {{ui:Tepi}}. Belum ada penyembunyian setiap elemen |
| Bilik | Ruang IFC, disembunyikan pada mulanya. Klik {{ui:Ruang}} |
| Simpan, Simpan Sebagai, segerakkan dengan pusat | {{ui:Simpan sebagai IFC}} memuat turun fail IFC baharu. Fail asal tidak pernah berubah. Tiada pusat, tiada perkongsian kerja |
| Buat asal dengan {{key:Mod+Z}} | Berfungsi pada suntingan IFC sehingga anda menyimpan. [Tukar sifat IFC dan simpan salinan yang disunting](topic:edit-ifc-properties) |
| Urus Pautan | Buka folder projek: setiap pautan disemak dan ditanda **Dalam folder ini**, **Nama sama dijumpai**, **Fail pustaka** atau **Tidak dalam folder ini**. [Buka keseluruhan folder projek](topic:open-project-folder) |
| Audit, atau membuka fail untuk melihat sama ada ia rosak | Laporan folder menyemak setiap salinan dan sandaran sama ada terpotong, dalam beberapa saat. [Semak folder untuk salinan yang rosak](topic:check-folder-health) |
| Memilih fail yang betul daripada folder yang bersepah | Kotak {{ui:Mulakan di sini}} mencadangkan satu, dengan sebabnya |

Jika anda kebanyakannya membuka model untuk menyemaknya, seperti dalam program semakan model atau paparan IFC, pilih gaya menu {{ui:Penonton}}: alat paparan dan semakan datang dahulu, dan alat binaan menunggu dalam satu menu. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).

## Dari melihat fail DWG

Jika anda membuka DWG dalam AutoCAD atau pemapar DWG:

| Jika anda biasa dengan | Dalam BimCraft |
|---|---|
| Tab Model dan layout di bahagian bawah | Tab di atas lukisan: {{ui:Model}} dan satu untuk setiap helaian |
| ZOOM Extents, klik dua kali roda | Klik dua kali, {{key:F}} atau {{ui:Muat}} |
| Pan dengan butang tengah | Seret dengan mana-mana butang |
| Pengurus lapisan | Senarai {{ui:Lapisan}}: tanda untuk tunjuk, nyahtanda untuk sembunyi, {{ui:Hidupkan semua}} dan {{ui:Matikan semua}} |
| Pengurus xref | **Lukisan dirujuk** di sebelah kanan, dengan **Ditunjukkan** atau **Tidak dijumpai**, dan {{ui:Tambah lukisan dirujuk…}} |
| Pratonton plot | {{ui:Paparan cetakan}} atau {{key:P}}: hitam atas putih dengan ketebalan garisan. Ia tidak mencetak |
| Pengekstrakan data atribut blok | Tab {{ui:Peralatan}} untuk lukisan perkhidmatan makanan yang dilabel, dengan {{ui:Muat turun CSV}} |
| Ukur, lukis, sunting, simpan sebagai | Tidak dalam BimCraft. Aplikasi lukisan CadCraft melukis dan menyunting |

## Perbezaan yang sering mengelirukan

- **Ia berjalan dalam pelayar, dan pelayar berhati-hati dengan fail anda.** BimCraft hanya boleh membaca fail dan folder yang anda serahkan kepadanya, dengan memilihnya atau menyeretnya masuk. Ia tidak boleh membuka fail dengan sendirinya, dan ia tidak boleh menimpa fail. Setiap simpanan ialah muat turun.
- **Tiada apa-apa dimuat naik.** Perkataan "muat naik" dalam sesetengah dialog folder pelayar ialah perkataan pelayar itu sendiri. Fail kekal di komputer anda.
- **IFC ialah format model.** Fail projek dibuka sebagai kad kerana kandungan 3D-nya tidak didokumentasikan. Anggap IFC sebagai cara model masuk ke BimCraft.
- **Suntingan ialah salin-semasa-tulis.** Menukar nilai satu elemen tidak pernah menukar jirannya, walaupun pengeksport berkongsi nilai itu antara mereka. Sifat jenis ialah pengecualian yang disengajakan.
- **Tiada projek, tiada paparan.** BimCraft menunjukkan satu fail pada satu masa dan tidak mengingati apa-apa tentangnya selepas anda menutup tab, kecuali nama folder terkini dalam Chrome dan Edge.
- **Kekunci Mac.** Di mana kekunci Windows Revit menggunakan Ctrl, kekunci pintasan BimCraft menggunakan {{key:Mod}}: Command pada Mac.
- **Tabiat tetikus anda.** Orbit ialah butang kiri, bukan Shift dan butang tengah, melainkan anda memilih gaya menu {{ui:BIM ribbon}} atau menetapkan butang sendiri dalam [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).

Lihat [Apa yang belum dibina](topic:not-built-yet) untuk apa yang perlu digunakan sebagai gantinya hari ini.
