---
title: Tulis spesifikasi daripada model
summary: Satu seksyen spesifikasi bagi setiap jenis dinding, pintu, tingkap, lantai dan kemasan yang digunakan, dengan faktanya dibaca daripada model dan teks anda sendiri, dihasilkan sebagai dokumen PDF atau Word.
keywords: spesifikasi, spec, lukisan kerja, peringkat 5, dokumen binaan, seksyen, jenis dinding, jenis pintu, jenis tingkap, kemasan, klasifikasi, uniclass, omniclass, masterformat, dokumen, pdf, word, docx, jadual
from: a6acc6d4
---

## Apa yang akan anda lakukan

Dapatkan spesifikasi yang mengikut model: satu seksyen bagi setiap jenis yang benar-benar ada dalam bangunan, setiap satunya dengan susunan lapisan dan kuantitinya dibaca daripada model, serta teks yang anda tulis untuknya.

## Langkah

1. Hidupkan {{ui:Lukis}}, buka **Jadual** dalam panel kiri dan klik **Spesifikasi**.
2. Kotak dialog menyenaraikan satu seksyen bagi setiap jenis dinding, jenis pintu, jenis tingkap, lantai dan kemasan bilik yang digunakan. Di bawah setiap tajuk ialah **fakta-faktanya**, dibaca daripada model: ketebalan, lapisan satu demi satu, tahap pembangunan, saiz, berapa banyak dan berapa jumlahnya. Seksyen yang elemennya membawa kod klasifikasi menunjukkan kod itu dalam tajuknya.
3. Tulis teks spesifikasi anda dalam kotak di bawah seksyen. **Pilih elemennya** menunjukkan perkara yang diliputi seksyen itu.
4. Klik **Simpan**. Ia ialah satu langkah dalam Buat asal, dan teks itu disimpan dalam fail bangunan.
5. Buka **Dokumen daripada model**, pilih templat **Spesifikasi** dan klik **Pratonton**, kemudian simpan sebagai PDF, Word atau Markdown. Lihat [Dokumen daripada model](topic:documents-from-the-model).

## Jadual lukisan kerja sebagai dokumen

Templat **Jadual lukisan kerja** mencetak jadual pintu, tingkap dan kemasan terus daripada model, dalam susun atur pejabat anda. Dalam templat anda sendiri tulis `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, atau nama persediaan yang disimpan, contohnya `{{schedule Door schedule by floor}}`. `{{specification}}` mencetak spesifikasi.

## Perkara yang perlu diketahui

- Fakta ialah milik model. Ia berubah apabila model berubah; teks anda tidak.
- BimCraft tidak menulis sebarang klausa mana-mana piawaian dan tiada teks pengilang. Seksyen tanpa teks mencetak "Tiada teks spesifikasi ditulis lagi."
- Teks yang ditulis untuk jenis yang tiada lagi dalam model disimpan dan disenaraikan di bawah "Teks untuk jenis yang tiada lagi dalam model".
- Untuk menukar jenis generik kepada susunan lapisan tertentu, lihat [Alat dinding](topic:wall-tools) (Tukar jenis).
