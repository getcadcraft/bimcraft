---
title: Simpan data aset dan rekod penyelenggaraan dalam model
summary: Gunakan model IFC yang diserahkan untuk mengurus bangunan: pengeluar, model, nombor siri, jaminan dan jangka hayat perkhidmatan untuk peralatan dan lekapan, serta rekod kerja penyelenggaraan yang dilakukan, semuanya ditulis ke dalam IFC.
keywords: serahan, sijil siap, sijil pendudukan, seperti dibina, pakej serahan, aset, daftar aset, pengurusan kemudahan, fm, operasi, penyelenggaraan, servis, jaminan, nombor siri, kod bar, pengeluar, model, jangka hayat, serahan, cobie, kembar digital, lewat tarikh, tamat tempoh, perintah kerja
from: b84ac492
---

Tab {{ui:Aset}} dalam panel kanan menukar model IFC yang dibuka kepada rekod peralatan bangunan. Semuanya ditulis ke dalam IFC itu sendiri, dalam set sifat dan tugasan IFC sendiri, supaya program seterusnya yang membuka fail itu turut membacanya. Tiada apa yang dimuat naik dan tiada pelayan diperlukan: simpan IFC untuk menyimpannya.

## Apa yang disenaraikan

- Peralatan dan lekapan: perabot, lekapan sanitari, lekapan lampu, peralatan, terminal udara, injap, pam, kipas, dandang, tangki, outlet, papan suis, lif dan elemen lain yang serupa, serta item pustaka dengan data peralatan.
- Mana-mana elemen lain yang anda **jejak**: pilihnya dalam model (pintu, dinding, pam yang dilukis sebagai objek biasa) dan klik {{ui:Jejak yang dipilih}}.
- Apa-apa yang sudah mempunyai data aset atau tugasan penyelenggaraan, ditulis di sini atau oleh program lain.

Apa yang lewat tarikh datang dahulu, kemudian apa yang tamat dalam tempoh 30 hari. Tapis mengikut nama, tag, pengeluar, model atau nombor siri, mengikut aras, atau tandakan {{ui:Hanya yang lewat tarikh atau tamat dalam tempoh 30 hari}}.

## Data aset

Klik aset dalam senarai (atau pilihnya dalam model) untuk membuka datanya: pengeluar, model, rujukan model, nombor siri, kod bar, hari ia dipasang, nombor jaminan dan permulaan serta tamatnya, dan jangka hayat perkhidmatannya dalam tahun. {{ui:Simpan data}} menulisnya dalam satu langkah ({{key:Mod+Z}} untuk buat asal). Biarkan kotak kosong untuk mengalih keluar nilai itu.

## Dokumen

Di bawah data, {{ui:Documents}} menyenaraikan manual, jaminan, foto, sijil dan lukisan yang dipautkan kepada aset. Pilih jenisnya, beri tajuk (atau biarkan kosong: nama fail digunakan) dan taip di mana ia berada:

- **alamat web** (`https://…`): ia mendapat pautan Buka, yang dibuka dalam tab baharu;
- atau **nama fail atau laluan** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, perkongsian rangkaian): simpan fail di sebelah IFC, dalam folder yang sama atau di bawahnya, supaya nama-nama itu masih berfungsi apabila anda menyerahkan folder. BimCraft menunjukkan nama; buka fail daripada folder.

Fail itu sendiri tidak pernah dimuat naik atau disalin ke dalam IFC: hanya pautan yang ditulis. Alamat web yang mengandungi kata laluan, dan mana-mana pautan yang bukan alamat web atau fail (seperti `javascript:`), ditolak. {{ui:Alih keluar}} mengambil dokumen daripada aset (satu langkah; {{key:Mod+Z}} untuk buat asal).

Dokumen yang program lain letakkan pada elemen turut disenaraikan. Dokumen pada **jenis** elemen muncul pada setiap elemen daripada jenis itu dan menyatakannya; ubah dokumen itu di tempat jenis itu dibuat.

Dalam IFC setiap dokumen ialah rujukan dokumen IFC yang dipautkan kepada elemen, dengan jenisnya disimpan pada pautan itu, dalam IFC4 dan IFC2X3 sama.

## Rekod penyelenggaraan

Di bawah dokumen, {{ui:Rekod kerja yang dilakukan}}: hari ia dilakukan, kerjanya, siapa yang melakukannya, bila ia perlu seterusnya dan nota. Setiap catatan ialah satu langkah; {{ui:Sunting}} dan {{ui:Padam}} menukarnya kemudian. Tarikh perlu seterusnya bagi catatan terbaru menentukan sama ada aset itu lewat tarikh atau akan tamat tidak lama lagi.

## Cara ia disimpan dalam IFC

- Pengeluar dan model dalam `Pset_ManufacturerTypeInformation`, nombor siri, kod bar dan hari dipasang dalam `Pset_ManufacturerOccurrence`, jaminan dalam `Pset_Warranty`, jangka hayat dalam `Pset_ServiceLife`, pada elemen itu sendiri. Apabila jenis elemen sudah membawa pengeluar atau model, ia dipaparkan sehingga anda menaip milik anda sendiri.
- Setiap catatan penyelenggaraan ialah **tugasan** IFC jenis penyelenggaraan, dipautkan kepada elemen, dengan tarikhnya (dalam IFC4 juga sebagai masa tugasan itu sendiri) dan set `CadCraft_Maintenance` dengan hari, siapa yang melakukannya dan hari perlu seterusnya.
- Nilai yang dikongsi oleh elemen lain disalin dahulu: menukar satu aset tidak pernah menukar jirannya.
- Dalam fail IFC2X3 yang lebih lama, tarikh ditulis sebagai teks (YYYY-MM-DD); versi itu mahukan rekod tarikh berasingan di sana, yang BimCraft tidak tulis.

## Bacaan penderia

Buka {{ui:Nilai penderia}} dan {{ui:Buka bacaan (CSV)…}} untuk membawa masuk bacaan yang dieksport daripada sistem pengurusan bangunan, pengelog data atau hamparan:

- **Lajur pertama ialah masa**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` atau saat Unix. Masa tanpa zon dibaca dalam zon masa komputer anda sendiri. Tarikh hari-dahulu seperti `23/10/2026` tidak dibaca (ia samar-samar); eksport tarikh ISO.
- **Setiap lajur lain ialah satu penderia**, pengepalanya ialah **tag**, **nama** atau **GlobalId** aset itu. Pengepala yang tidak sepadan dengan mana-mana aset, atau sepadan dengan lebih daripada satu, disenaraikan dan ditinggalkan. Koma, titik koma atau tab memisahkan lajur; dengan titik koma atau tab, koma perpuluhan (`21,5`) turut dibaca.
- Masa atau nilai yang tidak dapat dibaca (perkataan, unit yang ditaip dalam sel) dikira dan ditinggalkan, tidak pernah diteka.

Bacaan terkini dipaparkan dalam lajur {{ui:Bacaan}} senarai dan dalam blok {{ui:Penderia}} aset, dengan **carta** bagi setiap bacaan (pada telefon, carta menunggu sehingga anda ketik {{ui:Tunjukkan carta}}). Tetapkan **had rendah dan had tinggi** serta unit pada aset dan klik {{ui:Simpan had}}: bacaan di luar had menandakan aset itu. Tandakan {{ui:Tunjuk pada model}} untuk mewarnakan setiap aset mengikut bacaannya: biru di bawah had rendahnya, hijau dalam had, merah di atas had tingginya, dan, untuk aset tanpa had, satu skala biru tunggal dari bacaan terendah ke tertinggi, dengan bacaannya sebagai label (sehingga 60 label, yang ditandakan dahulu).

**Bacaan kekal dalam tab pelayar ini**: ia tidak disimpan dalam IFC dan tidak dihantar ke mana-mana; buka CSV semula pada kali seterusnya. **Had disimpan dalam IFC** (set `CadCraft_Sensor` pada elemen: Low, High, Unit), supaya orang seterusnya yang membuka fail itu melihat bendera yang sama.

## Bacaan langsung

{{ui:Suapan langsung}} membaca nilai semasa ia berlaku, **terus dari pelayar ini ke sistem anda sendiri**. Tiada apa yang melalui pelayan kami dan tiada apa disimpan di mana-mana selain tab pelayar anda. Tiada sambungan dibuat apabila fail dibuka: hanya {{ui:Sambung}} yang melakukannya.

- **MQTT melalui WebSockets**: alamat pendengar WebSocket broker anda (`wss://broker.example.com:8884/mqtt`), dan satu atau lebih topik dengan `{tag}` di tempat tag aset itu pergi, contohnya `site/{tag}/temperature` (BimCraft melanggan `site/+/temperature` dan membaca tag daripada topik setiap mesej). Topik tanpa `{tag}` menamakan penderia itu sendiri. Mesej ialah sama ada nombor biasa (`21.5`) atau JSON seperti `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (tetapkan {{ui:Medan nilai dalam JSON}} jika milik anda dinamakan lain).
- **Minta alamat (HTTP)**: alamat web yang dijawab oleh sistem pengurusan bangunan anda atau skrip kecil anda, diminta setiap beberapa saat (sekurang-kurangnya 5). Ia mungkin menjawab dengan JSON dikunci mengikut tag (`{"AHU-1": 21.5}`), senarai JSON (`[{"tag": "AHU-1", "value": 21.5}]`), atau CSV bacaan seperti di atas. Jika ia tidak menjawab, BimCraft menunggu dua kali lebih lama sebelum meminta semula, sehingga lima minit.

Setiap bacaan pergi ke aset yang tag, nama atau GlobalId-nya sebut, sama seperti lajur CSV; nama yang tidak sepadan dengan mana-mana aset disenaraikan. Bacaan itu menyertai {{ui:Nilai penderia}}: senarai, carta, had dan warna pada model berfungsi sama.

**Kata laluan atau token anda** ditaip untuk satu sambungan: ia diserahkan kepada sambungan dan kotak dikosongkan; ia tidak pernah disimpan dalam pelayar ini atau dalam IFC. Token dihantar sebagai pengepala `Authorization: Bearer` standard, dan tiada kuki dihantar.

{{ui:Kekalkan tetapan ini dalam IFC}} menulis alamat, topik, medan nilai dan kekerapan permintaan ke dalam model (set `CadCraft_Feed` pada projek; tiada medan untuk kata laluan), supaya orang seterusnya yang membuka fail itu hanya menaip log masuk mereka sendiri dan klik {{ui:Sambung}}. Jangan letakkan kata laluan atau kunci dalam alamat itu sendiri: alamat yang mengandungi nama pengguna dan kata laluan ditolak.

:::note
**Apa yang broker atau alamat anda perlukan.** Halaman pelayar hanya boleh bercakap dengan pelayan yang membenarkannya:
- Halaman itu selamat (https), jadi pelayar hanya menyambung ke alamat `wss://` dan `https://` — kecuali pada komputer anda sendiri (`localhost`), di mana `ws://` dan `http://` berfungsi untuk ujian.
- Alamat HTTP mesti membenarkan permintaan daripada halaman ini (CORS: pengepala `Access-Control-Allow-Origin`, dan `Authorization` antara pengepala yang dibenarkan jika anda menggunakan token).
- Kebanyakan broker (Mosquitto, EMQX, HiveMQ dan lain-lain) menawarkan pendengar WebSocket; ia selalunya dimatikan sehingga dihidupkan. BimCraft bercakap MQTT 3.1.1.
:::

Tiada **amaran** apabila BimCraft ditutup: had menandakan aset semasa model dibuka dengan suapan disambungkan. Memantau bangunan sepanjang masa memerlukan pelayan, yang BimCraft tidak jalankan.

## Hamparan COBie

**COBie** ialah hamparan serahan yang ramai pemilik dan pasukan kemudahan minta (diterbitkan oleh National BIM Standard di AS; BS 1192-4 di UK). Buka {{ui:Hamparan COBie}} dalam tab:

- {{ui:Simpan sebagai COBie (.xlsx)}} menulis helaian COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document dan Attribute — daripada model dan data aset: bangunan, aras dan biliknya (luas daripada kuantiti model), setiap aset sebagai komponen dengan nombor sirinya, hari dipasang, tarikh mula jaminan, tag dan kod bar, jenisnya dengan pengeluar, model, jangka hayat dan panjang jaminan, sistem yang dimilikinya, rekod penyelenggaraan sebagai kerja dan dokumen yang dipautkan. Setiap komponen membawa GlobalId IFC elemen itu. Taip alamat e-mel anda untuk lajur "created by" COBie, atau biarkan kosong (ia kemudian menyatakan n/a). Nilai yang tiada dalam model menyatakan **n/a**; lajur kategori membawa kelas IFC, bukan kod OmniClass.
- {{ui:Baca hamparan COBie…}} membacanya semula, daripada BimCraft atau program lain, dan **menyenaraikan setiap perubahan dahulu**: aset mana, nilai mana, daripada apa kepada apa, dan dokumen baharu. {{ui:Guna}} menulis kesemuanya dalam satu langkah ({{key:Mod+Z}} untuk buat asal). Baris dipadankan mengikut GlobalId, kemudian mengikut nama komponen. Baris yang tidak sepadan dengan apa-apa dalam model disenaraikan, tidak ditambah.

Hamparan dianggap tidak dipercayai: formula tidak pernah dibaca atau dijalankan (hanya nilai terakhir yang disimpan dalam sel), nilai yang menjadikan jaminan tamat sebelum ia bermula dan pautan dokumen yang bukan alamat web atau nama fail ditinggalkan dan dikira, dan buku kerja yang sangat besar ditolak. Kerja COBie ialah kerja yang dirancang untuk jenis, jadi ia ditulis keluar tetapi tidak dibaca semula. Dalam hamparan yang BimCraft tulis, teks yang boleh disangka formula oleh hamparan (bermula dengan `=`, `+`, `-` atau `@`) ditandakan sebagai teks.

Buku kerja ini diperiksa dalam ujian kami terhadap pembaca hamparan bebas; ia belum melalui pengesah COBie. Jika pasukan penerima menjalankannya, beritahu kami apa yang dikatakannya.

## Dokumen serahan

Kertas yang diserahkan kepada pemilik dengan bangunan siap tergolong pada projek, bukan pada satu aset. Pada tab {{ui:Aset}}, buka {{ui:Dokumen serahan}}:

1. {{ui:Tambah dokumen}}, pilih jenisnya (sijil siap, sijil pendudukan, jaminan, manual, lukisan seperti dibina, lain-lain), dan taip tajuknya, tarikh keluaran, siapa yang mengeluarkannya dan nombor rujukannya.
2. Nyatakan di mana ia berada: alamat web, nama fail yang disimpan di sebelah IFC, atau {{ui:Lampirkan fail}}.
3. {{ui:Tambah ke senarai}}. {{ui:Sunting}} dan {{ui:Alih keluar}} menukar senarai; setiap satu ialah satu langkah yang boleh anda buat asal.

{{ui:Bina pakej serahan}} memuat turun satu zip: halaman penutup yang menyenaraikan setiap dokumen, senarai yang sama seperti hamparan, buku kerja COBie (dokumen berada pada helaian Document, sebagai baris tentang Facility), model, dan setiap fail yang dilampirkan. Sijil siap atau pendudukan yang belum ada dalam senarai dinamakan pada halaman penutup; pakej tetap dibina.

Model dalam pakej ialah **model seperti dibina**: ia menyatakan elemen mana yang diukur di tapak. Bersamanya, dalam folder `as-built`: penyataan, senarai setiap elemen dengan keadaan pengesahannya, set lukisan seperti sekarang sebagai satu PDF (lukisan seperti dibina), dan log perubahan lukisan apabila model telah mengeluarkan set. Lihat [Tandakan elemen sebagai disemak atau disahkan di tapak](topic:verification).

- Dalam fail IFC setiap dokumen ialah IfcDocumentInformation yang dipautkan kepada projek (IfcRelAssociatesDocument), dengan tajuk, rujukan, tarikh, pengeluar dan tempatnya, supaya program lain menyenaraikannya.
- Fail yang dilampirkan direkodkan mengikut nama, saiz dan SHA-256. Untuk menyimpan fail itu sendiri bersama projek, gunakan {{ui:Simpan projek sebagai bundle}} (.ccbundle memegang model dan fail yang dilampirkan; membukanya memulihkannya, setiap satu disemak terhadap rekodnya). Simpan biasa bertanya yang mana anda mahu.
- Fail .ifc biasa menyimpan rekod, bukan fail itu: selepas membukanya, gunakan {{ui:Lampirkan semula fail}}. Fail yang sama dikenali; fail yang berbeza menggantikan rekod.

## CSV

{{ui:CSV}} menyimpan setiap aset dengan datanya, setiap catatan penyelenggaraan dan setiap dokumen, satu baris setiap satu, untuk hamparan atau program penyelenggaraan lain.

:::note
Belum dibina: perkhidmatan dihoskan yang menyimpan bacaan dan menghantar amaran semasa BimCraft ditutup, dan membaca semula kerja COBie. Lihat [Belum dibina](topic:not-built-yet).
:::
