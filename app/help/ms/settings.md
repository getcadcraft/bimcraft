---
title: Tetapan BimCraft
summary: Pilih sama ada bilik dan ruang dipaparkan, sama ada tepi dilukis dan paparan mana model dibuka, dan mula meletakkan dengan lekap dinding dihidupkan.
keywords: tetapan, keutamaan, pilihan, ruang, bilik, ifcspace, tepi, garisan, prestasi, model besar, paparan pembukaan, kamera, paparan atas, lekap dinding, snap
from: 4416e64f
---

Buka {{ui:Tetapan}} dengan ikon gear dalam bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:BimCraft}}, memegang tetapan yang tergolong dalam aplikasi ini; {{ui:Umum}} memegang tetapan yang dikongsi oleh setiap aplikasi CadCraft (tema, bar alat, panel). Tetapan BimCraft hanya wujud dalam aplikasi: anda menukarnya di sini, dan pelayar ini mengingatinya. {{ui:Reset BimCraft settings}} di bahagian bawah kotak dialog mengembalikannya, serta tetapan yang dikongsi, kepada permulaan.

## Menu, kekunci dan tetikus

Gaya menu (bar alat BimCraft sendiri, bar menu reka bentuk rumah, reben BIM atau baris arahan lukisan), kekunci dan menu anda sendiri, serta fungsi roda dan butang tetikus. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).

## Apabila model dibuka

- **Tunjuk bilik dan ruang** (dimatikan pada permulaan): bilik dan ruang ialah kotak lut sinar yang boleh menyembunyikan dinding di belakangnya, jadi ia bermula tersembunyi. Butang {{ui:Ruang}} di atas model masih menghidupkan dan mematikannya untuk model yang dibuka.
- **Tepi**: {{ui:Tepi hidup}} (permulaan) melukis garisan tepi yang memberikan rupa lukisan. {{ui:Model kecil sahaja}} melukisnya hanya untuk model di bawah 300,000 segi tiga, yang menjadikan model besar lebih pantas untuk diputar. {{ui:Tepi mati}} memulakan setiap model tanpa tepi. Butang {{ui:Tepi}} masih menukarnya untuk model yang dibuka. Melebihi 1.5 juta segi tiga, tepi sentiasa dimatikan.

## Lukisan dibuka dalam

Cara lukisan DWG atau DXF mula-mula dipaparkan: {{ui:3D (paling pantas)}} (permulaan) melukis walaupun lukisan besar dengan pantas, atau {{ui:Model (2D)}} membuka paparan ruang model rata. Tab di atas lukisan menukar antara {{ui:Model}}, helaian dan {{ui:3D}} pada bila-bila masa. Lukisan tanpa apa-apa dalam ruang model, atau pelayar yang tidak dapat memaparkan 3D, sentiasa dibuka dalam 2D.

## Paparan pembukaan

Kamera yang digunakan apabila model dibuka: {{ui:Muat}} (permulaan, seluruh model dari satu sudut), {{ui:Atas}}, {{ui:Hadapan}} atau {{ui:Sisi}}. Butang di atas model menukar paparan pada bila-bila masa.

**Bangunan yang diputar dalam tapaknya**: banyak model tiba dengan bangunan pada sudut kepada paksi fail (pada koordinat ukur atau dikongsi). {{ui:Segi dengan bangunan}} (permulaan) memaparkan bangunan sedemikian segi: {{ui:Muat}}, {{ui:Atas}}, {{ui:Hadapan}}, {{ui:Sisi}}, muka kiub pandangan dan setiap keratan baharu mengikut dindingnya, dan kompas kiub pandangan masih menunjuk ke utara model. {{ui:Seperti yang diletakkan dalam tapak}} mengekalkan paksi fail. Bangunan yang dindingnya berjalan sepanjang paksi kelihatan sama dalam kedua-dua keadaan.

## Meletakkan item pustaka

**Mulakan dengan {{ui:Lekap dinding}} dihidupkan** (dimatikan pada permulaan): apabila meletakkan atau menampal item pustaka bermula, bahagian belakangnya melekap pada dinding terdekat, menghadap bilik. {{key:Tab}} atau {{ui:Lekap dinding}} dalam bar peletakan mematikannya buat seketika. Tingkat tanpa dinding bermula tanpanya.

## Kotak keratan

{{ui:Ruang di sekeliling pilihan}} ialah jumlah ruang yang ditinggalkan {{ui:Kotak keratan di sekeliling pilihan}} di setiap sisi elemen yang dipilih, dalam milimeter: 300 pada permulaan, sehingga 5000. Lihat [Potong model IFC dengan satah keratan](topic:section-plane).

## Lokasi

{{ui:Latitud dan longitud dalam}} memilih sistem yang {{ui:Ukur}} › {{ui:Lokasi}} berikan latitud dan longitud: WGS 84 (EPSG:4326, permulaan, seperti yang digunakan GPS dan peta web), {{ui:Datum fail itu sendiri}}, atau salah satu daripada ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 dan CGCS2000. Sistem peta dan datum fail itu sendiri sentiasa turut dipaparkan. Lihat [Ukur jarak, luas muka dan lokasi dalam 3D](topic:measure).

## Penunjuk sudut

Apa yang terletak di sudut kanan bawah paparan 3D (model IFC, dan lukisan yang ditukar kepada 3D): {{ui:Kiub pandangan}} (permulaan), {{ui:Ikon paksi}} (X, Y dan Z kecil) atau {{ui:Tiada}}. Ia berubah serta-merta. Paparan lukisan 2D tidak pernah menunjukkannya.

Pada kiub pandangan, klik muka, tepi atau bucu untuk melihat dari sisi itu, seret kiub untuk mengorbit, seret gelang untuk berpusing, dan klik ikon rumah untuk paparan permulaan.

## Nama anda pada isu

Apabila log masuk, isu membawa nama akaun anda dan BimCraft tidak meminta apa-apa: bahagian ini memaparkan {{ui:Daripada akaun anda (<name>)}}. {{ui:Guna nama lain}} membuka kotak untuk nama yang berbeza, yang diutamakan sehingga anda memilih {{ui:Guna nama akaun saya}}. Apabila log keluar, borang isu meminta nama seperti sebelum ini. Lihat [Isu dan fail BCF](topic:issues-bcf).

## Pembantu

**Benarkan pembantu AI dan skrip menggunakan BimCraft** (dimatikan pada permulaan) membenarkan pembantu di komputer anda mencapai model yang dibuka melalui CadCraft Studio: **Baca** mencari elemen dan membaca sifatnya, **Tukar paparan** mengasingkan, menyembunyikan dan memaparkannya. **Aktiviti** menyenaraikan panggilannya. Lihat [Benarkan pembantu AI bekerja dengan model anda](topic:assistants).

:::note
Tetapan lain terpakai apabila model dibuka atau peletakan bermula. Model yang sudah dibuka mengekalkan rupanya sehingga anda menggunakan butang bar alat atau membukanya semula.
:::

## Berkaitan

- [Salin, tampal dan pendua item pustaka](topic:copy-paste)
- [Letakkan peralatan dan perabot dari pustaka](topic:place-from-library)
- [Skrin BimCraft](topic:workspace)
- [Benarkan pembantu AI bekerja dengan model anda](topic:assistants)
