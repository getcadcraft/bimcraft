---
title: Spesifikasi paip, injap, damper dan keluarga pengilang
summary: Sediakan spesifikasi paip anda sendiri (jadual saiz dengan bahan, sambungan dan kekasaran), disimpan dalam fail model; letakkan injap, penapis dan damper pada laluan; dan import model injap atau peralatan pengilang sebagai keluarga dengan port sambungan.
keywords: spesifikasi paip, spesifikasi paip, spesifikasi perpaipan, kelas paip, paip tersuai, jadual saiz, tiub, tiub higienik, keluli tahan karat, jadual, diameter luar, ketebalan dinding, diameter dalam, kekasaran, kadaran tekanan, csv, json, import, eksport, hamparan, piawaian, bpe, din, en 10357, en 10255, injap, injap, injap rama-rama, injap pengimbang, injap kawalan, penapis, damper, damper isipadu, damper api, oem, pengilang, pembuat, keluarga, keluarga, port, sambungan, step, obj, gltf, ifc, radiator, konvektor, pemanas panel, pengendali udara, penyebar, gril
from: bc2f7c4e
---

## Apa yang anda akan lakukan

Lukis paip mengikut spesifikasi anda sendiri dan bukannya jadual keluli, kuprum dan plastik terbina dalam, letakkan injap dan damper pada laluan, dan letakkan model pengilang dengan port yang disambungkan oleh paip.

:::note
Alat bantu lukisan dan penyelarasan. Spesifikasi paip menyimpan nombor yang anda taip atau import: semak setiap jadual dengan standard projek anda. Injap, penapis dan damper terbina dalam ialah bentuk skematik yang bersaiz mengikut laluan, bukan panjang pengilang atau piawaian injap.
:::

## Sediakan spesifikasi paip

1. Hidupkan {{ui:Lukis}}, buka {{ui:Binaan}} dan pilih {{ui:Spesifikasi paip}}. Butang yang sama terdapat pada bar alat alat Paip.
2. Pilih {{ui:Baharu}}, atau mulakan daripada fail, tampalan atau spesifikasi permulaan (di bawah).
3. Taip namanya, standard atau rujukan yang diikutinya, bahan dan jenis hujung atau sambungan.
4. Taip satu baris untuk setiap saiz: nama saiz, diameter luar dan dindingnya, dalam milimeter. Taip diameter dalam dan bukannya dinding jika itu yang anda ada: yang satu lagi akan diisi secara automatik. DN, kadaran tekanan dan berat adalah pilihan.
5. Pilihan: kekasaran dalam milimeter (pengiraan kejatuhan tekanan menggunakannya), ketebalan penebat yang laluan baharu bermula dengannya, jejari siku sebagai faktor diameter luar, sama ada spesifikasi mempunyai tee dan pengecil, dan warna sendiri dalam 3D.
6. Tandakan perkhidmatan yang laluan baharunya patut bermula dalam spesifikasi ini, contohnya air sejuk.
7. Pilih {{ui:Simpan dalam model}}.

Spesifikasi disimpan dalam fail model. Sesiapa yang membuka fail itu akan mempunyainya, dan {{ui:Buat asal}} membatalkan satu perubahan.

Spesifikasi, atau salah satu saiznya, tidak boleh dipadam semasa laluan dilukis dalamnya. Menukar nombor saiz akan melukis semula laluan dalam saiz itu.

## Guna semula spesifikasi dalam model lain

- {{ui:Eksport .json}} menyimpan spesifikasi yang dipilih sebagai fail kecil; {{ui:Eksport semua}} menyimpan setiap spesifikasi model. {{ui:Import fail}} membacanya semula.
- {{ui:Eksport .csv}} menyimpan jadual saiz untuk hamparan. {{ui:Import fail}} juga membaca `.csv`.
- {{ui:Tampal baris}} mengambil jadual yang disalin daripada hamparan. Baris pertama menamakan lajur: `Size`, `OD` dan `Wall` (atau `ID`), dan secara pilihan `DN`, `Pressure`, `Weight`. Satu baris untuk setiap saiz. Nombor ialah milimeter melainkan anda memilih inci atau sel menulis unitnya (`0.065 in`).

## Spesifikasi permulaan

{{ui:Tambah spesifikasi permulaan}} menambah salah satu daripada ini ke model anda sebagai salinan yang boleh anda sunting:

| Permulaan | Saiz |
|---|---|
| ASME BPE tube | 1/4" hingga 6" |
| EN 10357 siri A tube (DIN 11850 baris 2) | DN10 hingga DN200 |
| EN 10255 tiub keluli, siri sederhana | DN15 hingga DN150 |
| EN 10255 tiub keluli, siri berat | DN15 hingga DN125 |

Jadual ini ialah diameter luar dan dinding yang dicetak oleh dua atau lebih halaman pembekal yang diterbitkan untuk standard tersebut dan bersetuju. Ia tidak diambil daripada standard itu sendiri. Saiz yang hanya diberikan oleh satu halaman dibuang. Setiap permulaan menunjukkan halaman sumbernya dan ditanda "check against your project standard" (semak dengan standard projek anda). Tiada kekasaran, kadaran tekanan atau berat diberikan.

## Lukis laluan dalam spesifikasi

1. Pilih {{ui:Paip}}. Perkhidmatan yang anda tandakan dalam spesifikasi akan bermula dalam spesifikasi itu. Untuk laluan lain, pilih spesifikasi dalam senarai bahan: spesifikasi disenaraikan selepas bahan terbina dalam sebagai "Spec: nama".
2. Senarai saiz kini hanya memegang saiz spesifikasi itu. Pilih satu dan lukis laluan.

Untuk memindahkan laluan ke dalam spesifikasi kemudian, pilih laluan itu dan tukar **Bahan** dalam {{ui:Sifat}}. Saizanya menjadi saiz spesifikasi yang paling hampir mengikut diameter luar.

Dalam fail IFC, paip membawa nama, standard, bahan, sambungan dan dimensi spesifikasi (`CadCraft_PipeSpec` dan `Pset_PipeSegmentTypeCommon`, pada paip dan pada jenisnya).

Pengiraan saiz dan kejatuhan tekanan membaca diameter dalam spesifikasi. Apabila spesifikasi mempunyai kekasaran, geseran laluan dikira menggunakannya (Darcy-Weisbach); tanpa kekasaran, nilai lalai biasa pengiraan digunakan.

## Injap, penapis dan damper

1. Pilih {{ui:Injap}} dan pilih jenisnya dalam bar: injap pintu, bola, rama-rama, globe, semak, pengimbang atau kawalan, atau penapis, untuk paip; damper isipadu atau damper api untuk saluran.
2. Klik pada laluan tempat ia pergi. Laluan dipotong di sekelilingnya dan kedua-dua belah kekal disambungkan. Ia mengambil saiz laluan dan bergerak bersama laluan.

Sifat laluan menyenaraikan setiap satu dengan {{ui:Alih keluar}}; laluan itu tertutup semula.

Pengiraan kejatuhan tekanan hanya mengira kehilangan sambungan untuk injap pintu, bola, globe dan semak. Jenis lain, damper dan keluarga pengilang tidak menambah kehilangan di situ: peruntukkan untuk mereka dalam semakan anda sendiri. Ia dikira dalam jadual **Sambungan dan injap** dan dalam pengukuran kuantiti, dan ditulis ke IFC sebagai injap, penapis (penapis) dan damper dengan dua port bersambung.

## Model pengilang sebagai keluarga

1. Buka {{ui:Binaan}} dan pilih {{ui:Keluarga}}, kemudian {{ui:Import model}}. Fail IFC, STEP, OBJ, STL, glTF dan item Pustaka dibaca. Untuk OBJ dan STL, tetapkan unit fail dan paksi atas dahulu.
2. Dalam kotak dialog port, taip nama, pengilang dan nombor model.
3. Pilih sama ada ia pergi **Pada laluan** (injap, penapis atau damper) atau ialah **{{ui:Peralatan}}**, dan ditulis sebagai apa.
4. Berikan port-port ia. Setiap satu ada nama, paip atau saluran, perkhidmatan, saiz dalam milimeter (diameter luar paip), saiz nominal seperti yang dinamakan spesifikasi anda, jenis hujung, kedudukannya dan cara ia menghadap. {{ui:Pada muka}} meletakkan port di tengah muka kotak model. Pandangan atas kecil menunjukkan port.
5. Pilih {{ui:Simpan keluarga dalam model}}.

Keluarga yang pergi pada laluan memerlukan tepat dua port yang menghadap ke arah bertentangan pada satu garisan. Pilih dalam senarai alat Injap dan klik pada laluan: ia diletakkan pada panjangnya sendiri dan paip disambungkan ke portnya.

Keluarga tidak pernah diregangkan. Jika portnya bukan saiz laluan, anda akan diberitahu apabila anda meletakkannya, dan {{ui:Semak sambungan}} menyenaraikannya.

Keluarga peralatan diletakkan dengan {{ui:Peralatan}}, jenis **Keluarga pengilang**. Paip dan saluran melekap pada portnya.

{{ui:Muat turun sebagai item Pustaka}} menyimpan keluarga dengan portnya sebagai fail yang boleh anda hantar ke Pustaka.

## Radiator dan konvektor

{{ui:Peralatan}} juga mempunyai **Radiator** dan **Konvektor / pemanas panel**: badan generik dengan sambungan aliran dan pulangan untuk air pemanasan. Lihat [peralatan MEP dengan port](topic:mep-equipment).
