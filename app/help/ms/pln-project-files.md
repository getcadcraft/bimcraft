---
title: Buka fail projek .pln dan .pla
summary: Apa yang BimCraft lakukan dengan fail .pln, .pla, .tpl dan .bpn hari ini, dan cara mengeksport IFC dan DWG daripadanya supaya model dan lukisan dibuka di sini.
keywords: pln, pla, tpl, bpn, fail projek, arkib, templat, sandaran, eksport ifc, eksport dwg, penterjemah, zon, layout
from: 41fb921d
---

## Apa yang anda akan lakukan

Dapatkan projek yang disimpan sebagai `.pln` (projek), `.pla` (arkib dengan pustakanya), `.tpl` (templat) atau `.bpn` (sandaran) ke dalam BimCraft. Ini ialah fail Archicad sendiri.

## Apa yang dibuka hari ini

- **Fail projek itu sendiri belum dapat dibuka.** Formatnya tidak diterbitkan, dan BimCraft belum membacanya. Apabila anda membuka salah satu daripadanya, BimCraft memaklumkan perkara ini dan merujuk anda ke sini.
- **BimCraft menyemak beberapa bait pertama fail.** Projek Archicad dari versi 17 ke atas bermula dengan tanda pengenal pendek yang sama, jadi BimCraft boleh memastikan dengan tepat bahawa sesuatu fail ialah projek Archicad. Fail yang bernama seperti fail Archicad tetapi tidak bermula dengan tanda itu mungkin telah dinamakan semula, rosak atau datang daripada versi yang lebih lama. Tanda pengenal itu tidak dapat membezakan projek, arkib dan templat.
- **Eksport IFC dibuka sepenuhnya**: model dalam 3D, tingkat, zon sebagai ruang, data elemen, set sifat dan pengelasan, dengan setiap alat BimCraft.
- **Eksport DWG dibuka** dalam paparan 2D, dengan lapisan dan layoutnya, dan dalam {{ui:3D}}. Untuk menyunting, gunakan {{ui:Sunting dalam CadCraft}}.

Atau bawa keseluruhan projek sebagai satu zip, dengan paparan, layout dan kumpulan sifatnya: lihat [Buka bungkusan projek](topic:open-project-bundle).

## Eksport IFC (model)

1. Buka projek dalam Archicad.
2. Pilih **File > Save As**, dan pilih **IFC** sebagai jenis fail.
3. Pilih penterjemah IFC (nama Archicad untuk satu set tetapan eksport IFC). Satu yang untuk **IFC4 Reference View** atau **IFC2X3 Coordination View 2.0** sesuai dengan BimCraft. IFC4X3 juga dibuka.
4. Pilih apa yang hendak dieksport: keseluruhan projek, atau hanya elemen yang kelihatan pada tingkat yang anda lihat.
5. Simpan, kemudian klik {{ui:Pilih fail}} dalam BimCraft dan pilih fail `.ifc`.

Semak perkara ini dalam tetapan penterjemah sebelum anda mengeksport:

- **Zon**: eksportkannya, supaya bilik tiba sebagai ruang. Klik {{ui:Ruang}} dalam BimCraft untuk melihatnya.
- **Sifat dan pengelasan**: eksportkannya, supaya ia dipaparkan dalam {{ui:Sifat}} dan boleh digunakan dalam {{ui:Cari}}, {{ui:Warna}} dan {{ui:Jumlah kuantiti}}.
- **`.ifc` biasa**, bukan `.ifczip` atau `.ifcxml`. BimCraft hanya membuka `.ifc` biasa.

## Eksport DWG (lukisan)

1. Buka pelan, keratan atau layout yang anda mahu.
2. Pilih **File > Save As**, dan pilih **DWG** sebagai jenis fail.
3. Pilih penterjemah DXF-DWG, dan simpan.
4. Untuk satu set helaian lengkap, simpan layout daripada Layout Book, atau terbitkannya sebagai DWG.
5. Buka `.dwg` dalam BimCraft. Lukisan yang dipautkan oleh eksport dibuka bersamanya apabila ia berada dalam folder yang sama; lihat [Lukisan dan gambar yang dipautkan](topic:dwg-linked-files).

## Penyelesaian masalah

- **"… ialah projek Archicad: bait pertamanya menunjukkannya."** Eksport IFC atau DWG seperti di atas, dan buka fail itu.
- **"… dinamakan seperti fail Archicad tetapi tidak bermula seperti satu."** Semak dari mana fail itu datang: ia mungkin jenis fail lain dengan nama baharu (cuba buka di bawah sambungan sebenarnya), salinan yang tidak selesai, atau projek daripada versi sebelum 17. Buka dalam Archicad jika boleh, kemudian eksport IFC atau DWG.
- **Model dibuka tanpa bilik.** Zon tidak dieksport. Hidupkannya dalam penterjemah IFC dan eksport semula.
- **Bukaan tidak dipotong.** BimCraft memaklumkan perkara ini di bawah **Belum dilukis lagi** dalam panel {{ui:File}}. Eksport semula; jika ia kekal, buka model dalam program yang menghasilkannya dan semak bukaan di sana.
- **Teks pada DWG kelihatan berbeza.** Eksport mungkin mengekalkan fon yang tidak dimiliki BimCraft; BimCraft melukis teks dalam fon sans-serif biasa.

Lihat juga [Dapatkan fail projek ke dalam 3D melalui IFC](topic:rvt-to-ifc) dan [Apa yang BimCraft baca daripada setiap format](topic:file-formats).
