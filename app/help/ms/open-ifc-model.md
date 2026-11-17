---
title: Buka model IFC dan lihat sekeliling dalam 3D
summary: Buka fail IFC, orbit, pan dan zum, dan gunakan Muat, Atas, Hadapan dan Sisi untuk mendapatkan kedudukan anda.
keywords: ifc, 3d, orbit, pan, zum, muat, pandangan atas, pandangan hadapan, pandangan sisi, navigasi, viewcube, kamera
from: 68b460dd
---

## Apa yang anda akan lakukan

Buka model IFC, bergerak di sekelilingnya dalam 3D dan lompat ke pandangan piawai. Kira-kira lima minit.

Anda memerlukan fail `.ifc`. Kebanyakan program BIM mengeksportnya; dalam Revit ia ialah **File > Export > IFC**. Lihat [Dapatkan fail projek ke dalam 3D melalui IFC](topic:rvt-to-ifc).

## Langkah

1. Klik {{ui:Choose a file}} (atau kawasan lepas di penjuru kiri atas).
2. Pilih fail `.ifc` anda dan sahkan.
3. Tunggu baris status selesai. Ia menunjukkan "Memulakan enjin IFC…" kali pertama, kemudian "Membaca model…" dan "Membina geometri: … daripada … elemen".
4. Lihat model: ia dibuka dalam pandangan tiga suku, dimuatkan ke skrin.
5. Klik {{ui:Top}} pada bar alat di atas model untuk melihat terus ke bawah.
6. Klik {{ui:Front}} untuk melihat hadapan, kemudian {{ui:Side}} untuk melihat dari sisi.
7. Klik {{ui:Fit}}, atau tekan {{key:F}}, untuk kembali ke pandangan tiga suku bagi keseluruhan model.

## Apa yang sepatutnya anda lihat

- Model di tengah, dengan tepi gelap nipis untuk rupa seperti lukisan.
- Panel {{ui:File}} di sebelah kiri: nama fail, saiz, skema IFC (contohnya IFC2X3 atau IFC4), nama projek, fasa, program ia dieksport daripadanya, pengarang, tarikh eksport, dan kiraan elemen serta segi tiga.
- Senarai {{ui:Storeys}} dan {{ui:Elements}} di bawahnya.
- Baris status: "Dibuka *nama fail*: *n* elemen dalam *s* s".

## Bergerak di sekeliling

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan butang kiri |
| Pan | Seret dengan butang kanan, atau tahan {{key:Shift}} (atau {{key:Mod}}) dan seret dengan butang kiri |
| Zum | Skrol roda, atau seret dengan butang tengah |
| Lihat semua | Tekan {{key:F}} atau klik {{ui:Fit}} |
:::

:::mac mouse
Pada pad jejak: seret dengan satu jari yang ditekan untuk orbit; tahan {{key:Shift}} atau {{key:Mod}} dan seret untuk pan; skrol dengan dua jari atau cubit untuk zum. Klik dua jari ialah klik kanan, dan anda boleh seret dengan itu untuk pan, tetapi {{key:Shift}} dan seret lebih mudah.
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan satu jari |
| Zum | Cubit dengan dua jari |
| Pan | Gerakkan dua jari bersama |
| Lihat semua | Ketik {{ui:Fit}} |
:::

Orbit sentiasa berpusing di sekitar titik di tengah model. Pan menggerakkan titik itu, jadi selepas pan yang panjang orbit mungkin terasa tidak berpusat: klik {{ui:Fit}} untuk menetapkannya semula.

## Teduh, tepi atau rangka dawai

Tiga butang kecil betul-betul di atas ViewCube memilih cara model dilukis: {{ui:Shaded}}, {{ui:Shaded with edges}} (lalai) dan {{ui:Wireframe}}. Ia juga arahan (dalam {{ui:View}} pada menu dan senarai Sesuaikan), jadi ia boleh mempunyai kekunci sendiri. {{ui:Plan}}, {{ui:Split}} dan {{ui:3D}} terdapat dalam baris {{ui:View}} bar alat.

## Kesilapan biasa

- **Menjangka pandangan bernama.** BimCraft mempunyai empat pandangan tetap ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), ViewCube di penjuru kanan bawah dan orbit bebas. Ia tidak menyimpan pandangan.
- **Mencari pelan dan keratan.** Tiada pelan 2D atau kotak keratan dalam binaan ini. Potong model dengan satu satah {{ui:Section}} ([Potong model IFC dengan satah keratan](topic:section-plane)), atau matikan tingkat: [Tunjuk dan sembunyikan tingkat, ruang dan tepi](topic:storeys-and-spaces).
- **Membuka fail projek dan menjangka 3D.** Fail projek dibuka sebagai kad fail. Eksport IFC dahulu.
- **Membuka `.ifczip`.** Nyahzipkannya, atau eksport `.ifc` biasa.
- **Model yang sangat besar menjadikan tab perlahan atau ranap.** Lihat [Pelayar, peranti dan memori](topic:platforms).

## Seterusnya

[Pilih elemen dan baca sifatnya](topic:inspect-element).
