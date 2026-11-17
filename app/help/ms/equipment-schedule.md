---
title: Bina jadual peralatan dan eksport CSV
summary: Tukar tag item dalam lukisan perkhidmatan makanan kepada jadual peralatan, tapis, lompat ke setiap item pada helaiannya, dan muat turunnya sebagai CSV.
keywords: peralatan, jadual, perkhidmatan makanan, dapur, tag item, kcl, atribut, bom, senarai bahan, csv, hamparan, eksport, pengekstrakan data
from: e3faa1c8
---

## Apa yang anda akan lakukan

Baca senarai peralatan daripada lukisan dapur atau perkhidmatan makanan, semak, cari setiap item pada pelan, dan muat turunnya sebagai fail hamparan.

Ini berfungsi pada lukisan yang tag peralatannya membawa datanya sebagai atribut blok, seperti perpustakaan reka bentuk dapur seperti KCL: setiap tag memegang nombor item (`KCL-ITEM`), kuantiti, kategori, pengilang, model, data elektrik dan paip, serta catatan. Lukisan lain tidak mempunyai tab {{ui:Equipment}}.

## Langkah

1. Buka lukisan, sebaiknya dari folder projeknya supaya lukisan yang dipautkan turut dimuatkan.
2. Klik tab {{ui:Equipment}} di atas lukisan. Labelnya menunjukkan berapa banyak item berada pada helaian, contohnya "Peralatan (88)".
3. Baca jadual: **Item**, **Kuantiti**, **Peralatan**, **Pengilang**, **Model**, **Elektrik**, **Paip** dan **Lokasi**.
4. Pilih apa yang hendak disenaraikan dalam menu di atas jadual: **Setiap helaian**, satu helaian, **Tiada pada mana-mana helaian**, atau **Semua yang ditag dalam lukisan**. Setiap pilihan menunjukkan kiraannya.
5. Taip dalam kotak penapis ("Tapis: kategori, pengilang, model…") untuk mempersempit senarai, contohnya `refrigerator` atau `208`.
6. Klik nama helaian item dalam lajur **Lokasi**.
7. Lihat lukisan: BimCraft beralih ke helaian itu, zum pada item dan melukis cincin mengelilinginya. Baris status menyatakan "Item *n*, *kategori* dikelilingi cincin pada *helaian*."
8. Klik {{ui:Equipment}} untuk kembali ke jadual.
9. Klik {{ui:Download CSV}}.

## Apa yang sepatutnya anda lihat

- Fail bernama "*nama lukisan* equipment.csv" (dengan nama helaian dalam kurung apabila anda menyenaraikan satu helaian) dalam folder muat turun anda. Ia dibuka dalam Excel, Numbers, LibreOffice atau Google Sheets.
- Baris status: "Dimuat turun *nama fail* (*n* item)."

CSV mempunyai lajur berikut: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (berapa tag). Ia memuat turun tepat baris yang dipaparkan jadual, selepas menu dan penapis.

## Cara jadual dibina

- Ia dibaca daripada **tag itu sendiri**, bukan daripada jadual peralatan yang dilukis pada helaian. Nota di atas jadual menyatakan berapa tag yang dibaca.
- Satu baris ialah satu nombor item dengan satu set data. Kuantitinya ialah **jumlah** tagnya, mengikut cara jadual bercetak mengirakannya: rak yang ditag "5" di satu tempat dan "3" di tempat lain ialah 8, ditunjukkan sebagai "5 + 3".
- **Lokasi** menyenaraikan helaian yang menunjukkan setiap item, dikira daripada apa yang ditunjukkan oleh viewport setiap helaian, iaitu apa yang dicetak. "Model sahaja" bermakna tiada helaian menunjukkannya.
- **Nombor digunakan dua kali** menandakan satu nombor item pada dua peralatan yang berbeza. Baris itu mempunyai tanda amber.
- Tag yang tidak ditunjukkan oleh mana-mana helaian disimpan berasingan di bawah **Tiada pada mana-mana helaian**. Selalunya ia tinggal daripada pelan terdahulu atau kerja lain, dan tidak pernah dicampur ke dalam **Setiap helaian**.
- **Elektrik** menunjukkan amp, kW, HP, volt, fasa, sambungan dan palam seperti yang ditag. **Paip** menunjukkan saiz sambungan: CW (air sejuk), HW (air panas), DD (saliran terus), ID (saliran tidak langsung), dan gas. Medan tag lain belum ditunjukkan lagi.

## Kesilapan biasa

- **Tiada tab {{ui:Equipment}}.** Lukisan tidak mempunyai tag `KCL-ITEM`, atau peralatannya dilukis tanpa data. Tiada apa untuk dibaca.
- **Kiraan berbeza daripada jadual bercetak.** Jadual bercetak mungkin menyenaraikan nombor simpanan atau menggunakan nama yang lebih pendek daripada tag. Percayai tag untuk apa yang diletakkan; semak perbezaan dengan pereka.
- **Membuka CSV menunjukkan aksara pelik.** Fail ialah UTF-8. Bukanya dengan arahan import hamparan anda dan pilih UTF-8 jika program bertanya.
- **Sel bermula dengan tanda petik tunggal.** Nilai yang bermula dengan `=`, `+`, `-` atau `@` diberi `'` di hadapan supaya hamparan tidak menjalankannya sebagai formula.
- **{{key:F}} dan {{key:P}} tidak berbuat apa-apa.** Ia berfungsi pada lukisan, bukan pada jadual. Klik tab helaian dahulu.
