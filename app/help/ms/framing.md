---
title: Rangka dinding, lantai dan bumbung
summary: Jana stud, plat, header, gelegar, kasau atau kekuda daripada model dan simpan bersamanya; ia dibuat semula apabila dinding, bukaan, lantai atau bumbung berubah, dan jadual Lumber ialah senarai potongan.
keywords: TJI, I-joist, jadual rentang gelegar, muat naik jadual, rangka, stud, plat, plat atas, header, stud raja, stud jack, trimmer, cripple, ambang, pengisi, sudut, sudut California, tee, gelegar, gelegar rim, gelegar band, kasau, kasau pinggul, kasau lembah, kasau jack, papan rabung, gelegar siling, tali leher, kekuda, lumber, senarai potongan, papan kaki, 2x4, 2x6, jarak, mengikut pusat
from: 76d0ffb5
---

## Apa yang anda akan lakukan

Rangkakan bangunan daripada apa yang anda lukis. BimCraft menyusun stud, plat dan header dalam dinding, gelegar dalam lantai dan kasau (atau kekuda) dalam bumbung, menentukan saiznya daripada jadual lalai berlabel, menyimpannya bersama model dan membuatnya semula setiap kali apa yang dirangkanya berubah. Jadual **Lumber** ialah senarai potongan.

## Rangkakan

1. Pada satu tingkat, buka {{ui:Binaan}} dan pilih {{ui:Rangka}}.
2. Pilih **jarak** (16" atau 24" mengikut pusat; 400 atau 600 mm), **sudut** (tiga stud atau California), **Kasau** atau **Kekuda** untuk bumbung, dan sama ada dinding mendapat satu baris **pengisi** pada separuh ketinggian. Bagi lantai pilih **Kayu gergaji** atau **TJI (awal)** dan tetapkan arah gelegar kepada automatik, paksi pelan X atau paksi pelan Y.
3. Klik **Rangka setiap dinding**, atau klik satu dinding, lantai atau bumbung (pada tingkat tempat bumbung berada) untuk merangkakannya sahaja.

Matikan **Tunjuk rangka** untuk menyembunyikan setiap keping rangka, seperti lapisan; **Lut sinar** menyembunyikan dinding, lantai dan bumbung yang dirangka supaya anda boleh melihat rangka sahaja.

## Apa yang anda dapat

- **Dinding**: plat bawah (dipotong di pintu), plat atas berganda, stud pada susun atur dari permulaan dinding, stud raja dan stud jack serta header di setiap pintu dan tingkap, cripple di atas header dan di bawah tingkap, ambang kasar di bawah tingkap, sudut di tempat dinding bertemu (dinding yang melalui mengambil stud sudut), dua stud sokongan di tempat dinding lain bertemu secara T, dan pengisi di antara stud.
- **Lantai**: gelegar merentasi arah pendek lantai secara lalai, atau sepanjang paksi pelan yang anda pilih; gelegar rim di sekeliling tepi, dan trimmer serta header berganda di sekeliling tangga, dengan gelegar yang melaluinya dipotong pendek (gelegar ekor). Mod TJI memilih siri dan kedalaman tersenarai terkecil yang mencapai rentang bersih yang diukur pada jarak yang dipilih.
- **Bumbung**: kasau biasa bersudut tepat dengan setiap tepi bumbung, kasau jack di tempat pinggul dan lembah memotongnya, kasau pinggul dan lembah, papan rabung, gelegar siling di atas plat dan tali leher — atau kekuda ringkas pada jarak, satu keping setiap satu.

## Tukar

Pilih mana-mana keping rangka dalam paparan 3D atau pokok model. **Sifat** menunjukkan rangkanya: tukar jarak, jenis dan arah gelegar lantai, sudut, pengisi atau rangka bumbung. Memindahkan dinding, pintu dan tingkap, atau menukar lantai atau bumbung, membuat rangka semula dengan sendirinya.

Untuk mengekalkan keping yang anda letakkan dengan sengaja apabila rangka dibuat semula, pilih keping itu dan pilih **Kekalkan keping ini apabila rangka dibuat semula**. Keping yang dikekalkan kekal di tempatnya; apabila rangka di sekelilingnya berubah, ia ditandakan supaya anda boleh menyemaknya.

## Lantai TJI daripada jadual yang anda muatkan

BimCraft tidak membawa jadual rentang pengeluar gelegar (ia milik pengeluar, dan berubah dengan setiap edisi). Pilih rangka lantai, tetapkan **Gelegar lantai** kepada **TJI (awal)** dan pilih **Muat naik jadual…** dalam **Sifat**: fail dalam format `cadcraft-tji-table`, JSON atau CSV, yang anda buat daripada jadual rentang semasa pengeluar. Ia menamakan pengeluar, produk dan edisi, dan dari mana nombor itu diperoleh, serta menyenaraikan bagi setiap kes beban (beban hidup, beban mati, had pesongan, panjang galas) rentang bersih terbesar bagi setiap siri dan kedalaman pada setiap jarak.

- BimCraft mengambil **rentang bersih** lantai, memilih kedalaman paling cetek, dan dalam kedalaman itu siri yang rentang tersenaraikannya mencapainya untuk jarak dan kes beban yang anda pilih, dan merangka lantai dengannya. Jika rentang atau jarak berada di luar jadual, ia menyatakannya dan tidak mengubah apa-apa.
- Beban, had pesongan, panjang galas, jadual dan ayat "Panduan susun atur awal; pemilihan akhir memerlukan jadual pengeluar dan beban projek" dicetak pada jadual Lumber, ditulis ke dalam model bersama rangka dan disenaraikan dalam panel **Masalah** sebagai nota. Jadual yang ditandakan sebagai contoh menyatakannya dalam amaran.
- Dengan add-on **Peraturan bangunan** dihidupkan, peraturan gelegar lantainya turut membaca jadual yang dimuatkan; tanpa jadual, gelegar TJI ditinggalkan daripada semakan itu, seperti sebelum ini.
- Jadual kekal dalam pelayar ini sehingga anda mengosongkannya atau memuatkan yang lain. Fail: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inci, kaki, psf; atau `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) dan `rows` (`series`, `depth`, `spans`: bagi setiap id kes, jarak dan rentang bersih terbesar, seperti `"16": "15-6"`). Dalam CSV, fakta yang sama ialah baris `# key = value`, kemudian `series,depth,case,spacing,span`.
- Tanpa jadual dimuatkan, susun atur TJI ditolak dan tiada apa berubah: **Muat naik jadual TJI: jadual pengeluar adalah milik mereka dan tidak dibina dalam.** Model yang dirangka dengan jadual TJI terbina dalam yang lama (sebelum perubahan ini) mengekalkan setiap gelegar yang ada; Sifat dan Masalah menyatakan jadual itu diperlukan, dan lantai boleh dirangka semula apabila anda memuatkan satu. Gelegar kayu gergaji pejal berfungsi seperti sebelum ini.

Ini ialah panduan susun atur. Pemilihan gelegar akhir memerlukan jadual pengeluar, beban projek dan jurutera.

## Senarai potongan

Dalam panel Jadual pilih **Lumber**: setiap keping rangka dikumpulkan mengikut saiz dan panjang stok yang anda akan beli (panjang 2' penuh dari 8'; langkah 600 mm dari 2400 jika dalam milimeter), dengan bilangan keping dan board feet. **CSV** memuat turun fail itu.

:::warning
Saiz header, gelegar, kasau dan gelegar siling datang daripada jadual lalai berlabel untuk rumah biasa satu atau dua tingkat, bukan kejuruteraan. **Sifat** menyatakan bila rentang atau bukaan melebihi jadualnya. Seorang pereka atau jurutera menyemak rentang, beban dan sambungan.

Susun atur TJI hanya menggunakan jadual yang anda muatkan, yang anda buat daripada jadual rentang semasa pengeluar; BimCraft tidak menyediakan apa-apa. Cadangan ini tidak menyemak galas, beban titik, kantilever, lubang, header tangga atau sambungan, dan bentuk I model ialah skematik.
:::

## Apa yang disimpan

Setiap dinding, lantai atau bumbung yang dirangka ialah himpunan elemen IFC ("Framing") bagi anggota IFC (stud, plat, kasau, tali leher, pengisi, kekuda) dan rasuk (header, gelegar, rim, papan rabung), setiap satu dengan saiz, panjang dan board feet.
