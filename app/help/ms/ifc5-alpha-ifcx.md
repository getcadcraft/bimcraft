---
title: Buka dan eksport fail IFC5 alpha (IFCX)
summary: Pilihan makmal untuk format fail IFC5 alpha (.ifcx): buka fail dengan lapisannya, lihat apa yang tidak dapat disemak oleh pembacaan, dan eksport model yang dibuka. Format ini masih berubah, jadi baca dahulu.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lapisan, skema, makmal, kuantiti, qto, eksport, import
from: cffe1669
---

IFC5 alpha (fail berakhir dengan {{ui:.ifcx}}) ialah format fail yang masih direka oleh buildingSMART. Ia belum muktamad: fail, dan tafsiran kami terhadapnya, boleh berubah. Sebab itulah ini ialah pilihan makmal dan mengapa pembacaan perlu didahulukan.

## Hidupkannya

1. Pilih {{ui:Tetapan}}, kemudian bahagian {{ui:IFC5 alpha (IFCX)}} dalam tab BimCraft.
2. Tandakan {{ui:IFC5 alpha (IFCX) - format ini masih berubah; baca dahulu}}.

Ia dimatikan secara lalai. Semasa ia dimatikan, fail .ifcx ditolak dengan ayat yang menunjuk ke sini. {{ui:Buka IFC5 alpha (.ifcx)…}} dan butang eksport {{ui:IFC5 alpha}} muncul apabila ia dihidupkan.

## Buka

- Pilih fail .ifcx dengan {{ui:Buka fail atau folder}} (ia menggantikan model yang terbuka, selepas soalan biasa tentang suntingan), atau
- pilih {{ui:Buka IFC5 alpha (.ifcx)…}} dan pilih beberapa fail sekaligus: fail itu, lapisannya, dan fail skema yang diimportnya. Dengan model yang sudah terbuka, fail itu **ditambah di sebelahnya**; tanda x dalam senarai model membuangnya semula, iaitu buat asal.

Fail IFCX menyenaraikan nod (laluan, anak-anaknya, apa yang diwarisinya, atributnya). Beberapa fail boleh menerangkan nod yang sama: fail yang lebih lewat (lapisan) menimpa atribut fail yang lebih awal, dan anak nul mengeluarkan anak. BimCraft menggabungkannya, kemudian melukis hasilnya sebagai model IFC4 kecil: projek, tapak, bangunan, tingkat dan elemen dengan nama, kelas, sifat, kuantiti, warna dan jejaring.

Tiada apa yang diambil dari rangkaian. Fail skema yang diimport oleh sesebuah fail (contohnya `ifc@v5a.ifcx`) hanya digunakan jika anda memilihnya bersama fail itu; jika tidak, laporan menyatakannya dan atribut dibaca tanpa semakan jenis.

### Laporan

Selepas dibuka, laporan menyenaraikan apa yang ditemui oleh pembacaan: data yang tidak sepadan dengan skemanya, fail skema yang tidak diberikan, atribut yang tiada makna IFC di sini. Atribut tanpa pemetaan **dikekalkan** dalam model, tidak digugurkan, dan ditulis semula semasa eksport.

## Apa yang menjadi apa

| Dalam fail IFCX | Dalam BimCraft |
|---|---|
| Nod dengan kelas IFC (projek, tapak, bangunan, tingkat, dinding …) | Elemen IFC4 yang sepadan; kelas yang tidak diketahui oleh pembacaan ini menjadi proksi elemen bangunan |
| Nama yang dimiliki nod di bawah induknya | Nama elemen |
| Atribut dengan jenis kuantiti (Length, Area, Volume, Mass …) | Set kuantiti IFC4 bernama `Qto_IFCX` (set kuantiti IFC4 kekal sebagai set `Qto_*` IFC4) |
| Atribut sifat lain | Set sifat bernama `Pset_IFCX` |
| Atribut mesh dan transformasi | Segi tiga dan kedudukan elemen; mesh yang tidak kelihatan tidak dilukis |
| Warna, kelegapan, bahan, pengelasan | Gaya permukaan, bahan dan pengelasan elemen |

Unit diambil sebagai meter, dengan Z ke atas: alfa menyatakan unit akan didokumentasikan kemudian.

## Eksport

Pilih {{ui:IFC5 alpha}} pada bar alat, baca nota, kemudian {{ui:Eksport .ifcx}}. Fail itu mempunyai pengepala kami sendiri (pengarang CadCraft, versi ifcx_alpha) dan menyatakan sendiri bahawa ia format alfa. Setiap model ditulis dalam koordinat fail tersendiri, dalam meter, dengan nama, kelas, set sifat, kuantiti (sebagai atribut dengan jenisnya), warna dan segi tiga. Lapisan dan pewarisan ditulis secara rata. Semak fail itu dalam program yang anda hantarkannya.

## Had

- Geometri melengkung (lengkung, permukaan) tidak dibaca: hanya jejaring segi tiga.
- Pintu dan tingkap yang tersarang dalam dinding diletakkan pada tingkat; dinding asalnya tidak dipautkan.
- Nama set `Qto_*` IFC4 dikekalkan sebagai kumpulan atribut kami sendiri (`cadcraft::qto::…`); skema alfa piawai hanya mempunyai beberapa nama kuantiti.
- Format itu mungkin berubah; fail yang dibuat hari ini mungkin tidak boleh dibaca esok.
