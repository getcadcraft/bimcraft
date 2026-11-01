---
title: Koordinat dalam BimCraft
summary: Di mana anda bekerja: kedudukan penunjuk dalam pelan dan pandangan 3D, aras tempat anda berada, asalan projek dan titik ukur tapak.
keywords: koordinat, di mana saya, kedudukan, penunjuk, bacaan, x y z, aras, tingkat, asalan projek, asalan, titik asas, titik ukur, tapak, koordinat peta, easting, northing, georujukan, unit, lokasi
from: 84df5245
---

## Apa yang anda akan lakukan

Ketahui di mana anda berada dalam model dengan sekali pandang: aras yang sedang anda lukis, sejauh mana penunjuk dari asalan projek, dan di mana titik ukur tapak.

## Di mana nombor dipaparkan

- **Atas pandangan 3D** (bawah kanan, bersebelahan ViewCube): gerakkan penunjuk ke atas model. Kotak itu menunjukkan aras tempat titik itu berada dan ketinggiannya di atas lantai aras tersebut, kemudian **X, Y dan Z**. Di ruang kosong, ia membaca titik pada lantai aras terendah.
- **Pada pelan** (bawah kanan, semasa {{ui:Draw}} dihidupkan): aras yang ditunjukkan oleh pelan dan ketinggian lantainya, serta **X dan Y** penunjuk semasa ia berada di atas pelan.
- Apabila fail mempunyai penukaran peta (ia dieksport dengan koordinat peta), kedua-dua kotak menambah **easting dan northing** pada grid peta, dalam {{ui:Units}} yang anda pilih (sentiasa dengan unit ditulis di sebelahnya; kaki dan inci ditunjukkan sebagai kaki perpuluhan). Lukisan (DWG atau DXF) mengekalkan unitnya sendiri: bacaan penunjuknya menamakan unit itu, dan ia tidak pernah ditukar.

Setiap X, Y dan Z diukur dari **asalan projek**, dalam {{ui:Units}} yang dipilih pada bar alat (kaki dan inci, inci, kaki perpuluhan, milimeter, sentimeter atau meter). Y positif menunjuk ke utara model, yang tidak selalunya utara benar. Easting dan northing peta mengikut pilihan yang sama (kaki dan inci ditunjukkan sebagai kaki perpuluhan); apabila unit sistem peta berbeza daripada unit yang anda pilih, ia dinamakan dalam kurungan selepas nombor, contohnya *(US survey feet)*, supaya juruukur dapat melihat unit yang digunakan oleh sistem itu sendiri.

## Dua penanda

- **Asalan projek** (bulatan merah dengan silang): titik 0, 0, 0 tempat setiap koordinat dalam model diukur.
- **Titik ukur** (bulatan biru dengan segi tiga): titik rujukan tapak, yang latitud, longitud dan ketinggiannya, atau koordinat petanya, diberikan. Dalam pandangan 3D, halakan penunjuk ke arahnya untuk membaca di mana ia berada.

Apabila tapak berada pada asalan projek, seperti dalam bangunan baharu yang dilukis di sini, satu penanda menunjukkan kedua-duanya. Klik butang silang dalam mana-mana kotak untuk menyembunyikan atau menunjukkan penanda; BimCraft mengingati pilihan anda dalam pelayar ini.

## Apa yang sepatutnya anda lihat

- Nombor berubah apabila penunjuk bergerak, dan kotak pelan menamakan aras yang anda pilih dalam senarai aras.
- Penanda kekal di tempatnya semasa anda orbit, pan dan zum.

:::tip
Untuk membaca latitud dan longitud sesuatu titik, gunakan {{ui:Measure}} › {{ui:Location}}: lihat [Ukur jarak, luas muka dan lokasi dalam 3D](topic:measure).
:::

:::touch
Pada skrin sentuh, kotak 3D tidak memaparkan apa-apa sehingga anda menggunakan tetikus atau pen: jari menggerakkan pandangan sebaliknya.
:::
