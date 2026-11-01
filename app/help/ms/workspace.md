---
title: Skrin BimCraft
summary: Lawatan setiap bar, panel dan butang, mengikut nama pada skrin, dan cara skrin berubah untuk setiap jenis fail.
keywords: skrin, susun atur, panel, bar alat, antara muka, ui, lawatan, panel sifat, pelayar, bar aplikasi
from: 2eb01ec2
---

Skrin BimCraft mempunyai bar merentasi bahagian atas dan tiga kawasan di bawahnya: panel di sebelah kiri, pentas di tengah dan panel {{ui:Properties}} di sebelah kanan. Apa yang muncul dalam setiap kawasan bergantung pada apa yang anda buka: model IFC, fail projek atau keluarga, lukisan atau folder.

## Bar aplikasi

Bar nipis merentasi bahagian atas tergolong dalam tapak CadCraft, bukan BimCraft itu sendiri. Dari kiri ke kanan:

- Tanda CadCraft: pergi ke halaman utama CadCraft.
- Nama aplikasi dan menu versi. Dalam binaan kakitangan ia menunjukkan binaan yang sedang anda jalankan dan membolehkan anda bertukar ke versi yang dikeluarkan.
- {{ui:About BimCraft}}: halaman aplikasi di tapak.
- {{ui:Settings}}: tetapan BimCraft sendiri dan tetapan yang dikongsi oleh setiap aplikasi. Lihat [Tetapan BimCraft](topic:settings).
- {{ui:Full screen}}: beralih antara mod skrin. Lihat [Mod skrin](topic:workspace#screen-modes) di bawah.
- {{ui:Paper}} dan {{ui:Model}}: tema cerah dan gelap. Pandangan 3D dan lukisan 2D mengikut tema yang anda pilih.

## Panel kiri

Panel kiri sentiasa bermula dengan **Buka fail atau folder**:

- Kawasan lepasan, {{ui:Choose a file, or drop a file or folder here}}. Klik untuk memilih satu fail, atau lepaskan fail atau folder padanya (atau di mana-mana sahaja pada halaman).
- {{ui:Open a folder}}: pilih keseluruhan folder projek. Lihat [Buka keseluruhan folder projek](topic:open-project-folder).
- {{ui:Recent folders}}: muncul dalam Chrome dan Edge selepas anda membuka folder dengan pemilih folder atau dengan melepaskannya. Klik {{ui:Reopen}} dan nama folder untuk membukanya semula, atau × kecil untuk melupakannya.

Di bawahnya, bahagian muncul mengikut keadaan yang berkenaan:

| Bahagian | Bila ia muncul | Apa yang ada di dalamnya |
|---|---|---|
| {{ui:Changes}} | Model IFC dibuka | Suntingan anda yang belum disimpan, yang terbaru di atas, dengan {{ui:Undo}} dan {{ui:Save as IFC}} |
| {{ui:File}} | Model atau kad fail dibuka | Fakta tentang fail: saiz, skema atau keluaran, projek, pengarang, bilangan elemen |
| {{ui:Drawing}} | DWG atau DXF dibuka | Format, unit, bilangan entiti dan lapisan, helaian, lukisan berpaut, peralatan |
| {{ui:Folder}} | Folder dibuka | Bilangan fail dan model, saiz, masalah yang dijumpai |
| {{ui:Back to the folder}} | Anda membuka fail dari folder | Kembali ke laporan folder |
| {{ui:Layers}} | Lukisan dibuka | Kotak semak bagi setiap lapisan, dengan {{ui:All on}} dan {{ui:All off}} |
| {{ui:Storeys}} | Model IFC dibuka | Kotak semak bagi setiap tingkat, tingkat teratas dahulu |
| {{ui:Elements}} | Model IFC dibuka | Bilangan elemen bagi setiap jenis yang dimiliki model (30 yang paling biasa) |

## Pentas

Bahagian tengah skrin memaparkan fail yang dibuka.

- **Kosong**: "Buka model bangunan." dengan {{ui:Choose a file}} dan {{ui:Open a folder}}, serta penerangan ringkas bagi setiap format.
- **Model IFC**: pandangan 3D dengan bar alat merentasi bahagian atasnya, dalam kumpulan bernama seperti aplikasi lukisan CadCraft, dengan ikon setiap alat di atas namanya: {{ui:View}} ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Spaces}}); {{ui:Edit}} ({{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} dan {{ui:More}}, lihat [Salin, tampal dan duplikasi item pustaka](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} dan {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Show}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; lihat [Potong model IFC dengan satah keratan](topic:section-plane)); dan {{ui:Output}} (render, paparan langsung, VR, eksport, cat dan pandangan tersimpan). Dengan {{ui:Draw}} dihidupkan, bar Lukis di bawahnya mempunyai rupa yang sama: {{ui:View}} (aras dan jenis pelan), {{ui:Draw}}, {{ui:Edit}} dan {{ui:Library}}. ViewCube terletak di sudut kanan bawah. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model). {{ui:Settings}}, {{ui:General}} memilih sama ada ikon, label atau kedua-duanya pada butang ini, menunjuk atau menyembunyikan nama kumpulan, dan klik kanan bar alat untuk menyusun alat dan kumpulannya. Dalam tetingkap pendek, bar alat menggugurkan nama di bawah ikonnya.
- **Fail projek atau keluarga**: kad fail, dengan gambar pratonton, maklumat projek dan fail berpaut. Lihat [Baca fail projek atau keluarga](topic:read-rvt-file).
- **DWG atau DXF**: satu baris tab ({{ui:Model}}, kemudian satu untuk setiap helaian, kemudian {{ui:Equipment}} apabila lukisan mempunyai peralatan bertag, {{ui:3D}}, {{ui:Fit}} dan {{ui:Print view}}), lukisan itu, dan koordinat X dan Y langsung di satu sudut. Lihat [Lihat lukisan DWG atau DXF](topic:view-dwg) dan [Lihat lukisan DWG atau DXF dalam 3D](topic:dwg-in-3d).
- **Folder**: laporan folder, dengan kotak {{ui:Start here}} dan jadual model, pautan, model IFC dan lukisan. Lihat [Buka keseluruhan folder projek](topic:open-project-folder).

**Bar status** di bahagian bawah pentas memberitahu anda apa yang BimCraft lakukan ("Membaca model…", "Membina geometri: 1200 daripada 5400 elemen") dan apa yang salah, dalam warna merah, apabila sesuatu gagal. Mesej kejayaan pudar selepas beberapa saat.

## Panel Properties

Panel kanan memaparkan:

- Untuk model IFC: elemen yang anda klik, dengan namanya, jenisnya, tagnya, GlobalId dan setiap set sifat. Nilai yang boleh anda tukar kelihatan seperti butang. Lihat [Medan panel Properties](topic:properties-panel).
- Untuk lukisan: cara bergerak di sekelilingnya, lukisan dan imej berpaut serta sama ada setiap satu ditemui, dan senarai apa yang **Belum dilukis lagi**.
- Untuk kad fail atau folder: nota ringkas tentang apa yang perlu dibuka seterusnya.

## Pada skrin kecil

Apabila tetingkap lebih sempit daripada skrin komputer riba, BimCraft menyusun kawasannya secara bertindih: pentas di atas, kemudian panel di bawahnya. Tatal halaman untuk sampai ke panel. Pada telefon ia membentuk satu lajur; pada tablet, dua.

## Mod skrin

Butang {{ui:Full screen}} pada bar aplikasi, atau {{key:Ctrl+Shift+F}} pada setiap platform, beralih antara tiga mod:

1. Normal.
2. Skrin penuh, dengan bar masih kelihatan.
3. Skrin penuh dengan bar aplikasi disembunyikan. Gerakkan penunjuk ke tepi atas, atau ketik di situ, untuk memunculkannya semula.

Tekan {{key:Esc}} untuk kembali ke normal. Pelayar yang tidak menyokong skrin penuh (seperti pada iPhone) hanya beralih antara normal dan bar tersembunyi.

## Berkaitan

- [Kekunci dan tetikus](topic:keyboard)
- [Fail yang dibuka dan disimpan oleh BimCraft](topic:files)
