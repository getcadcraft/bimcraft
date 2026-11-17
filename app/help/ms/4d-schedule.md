---
title: Main jadual pembinaan pada model
summary: Buka senarai tugasan sebagai CSV, pautkan setiap tugasan kepada elemen mengikut sifat, dan bergerak melalui tarikh untuk melihat apa yang telah dibina, sedang dibina dan belum dimulakan.
keywords: 4d, jadual, urutan pembinaan, garis masa, fasing, program, gantt, tugasan, tarikh, simulasi, kemajuan, dibina, csv, peringkat, fasa, pakej kerja, wbs, kumpulan
from: 1b985a64
---

## Apa yang anda akan lakukan

Lihat bangunan naik: setiap tugasan dalam jadual anda dipautkan kepada elemen yang dibinanya, dipaparkan hari demi hari.

## Langkah

1. Buka model IFC dan buka {{ui:Jadual 4D}} dalam panel kiri.
2. Klik {{ui:Muat turun templat}} untuk senarai tugasan dengan satu minggu bagi setiap tingkat, dan ubahnya dalam hamparan. Atau tulis sendiri.
3. Klik {{ui:Buka senarai tugasan…}} dan pilih CSV.
4. Seret gelangsar tarikh, atau klik {{ui:Main}}.

## Senarai tugasan

Fail CSV dengan baris pengepala dan lajur **Task**, **Start**, **Finish**, **Field** dan **Value**. Koma atau titik koma kedua-duanya berfungsi.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Tulis tarikh sebagai YYYY-MM-DD.
- Satu baris memautkan tugasan kepada setiap elemen yang **Field**-nya mempunyai **Value** yang tepat sama. Medan ialah sifat seperti Storey, Class, Name, Type, Material, Tag atau GlobalId, atau mana-mana sifat yang ditulis sebagai nama set dan namanya: `Pset_WallCommon.FireRating`.
- Ulang tugasan pada lebih banyak baris, dengan tarikh yang sama, untuk memautkan lebih banyak elemen kepadanya.

## Peringkat dan pakej kerja

Tambah lajur **Stage**, lajur **Package**, atau kedua-duanya, untuk mengumpulkan tugasan ke dalam peringkat dan pakej kerja. Phase dan WBS juga berfungsi sebagai nama lajur.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Satu tugasan tergolong dalam satu peringkat dan satu pakej. Jika baris kemudian bagi tugasan yang sama menamakan yang lain, baris itu disenaraikan dengan nombor barisnya dan ditinggalkan.
- Nama pakej yang sama dalam dua peringkat ialah dua pakej.

Apabila senarai mempunyai kumpulan, senarai {{ui:Tunjuk}} muncul di atas tarikh. Pilih peringkat atau pakej dan ia dimainkan sebagai satu:

- gelangsar dan {{ui:Main}} berjalan dari permulaan pertama kumpulan hingga penamatan terakhirnya,
- hanya tugasan kumpulan disenaraikan dan diwarnakan, dan segala yang di luar kumpulan adalah lut sinar,
- baris di bawah senarai menyatakan berapa banyak tugasannya yang telah siap, sedang dijalankan dan belum tiba pada tarikh itu,
- {{ui:Pilih elemennya}} memilih setiap elemen kumpulan, untuk {{ui:Tunjuk}}, {{ui:Keratan}} atau jadual.

Pilih **Setiap tugasan** untuk melihat semula keseluruhan jadual.

## Apa yang anda patut lihat

- **Dibina**: elemen yang semua tugasannya telah siap, dalam warnanya sendiri.
- **Sedang dijalankan**: elemen dengan tugasan yang sedang berjalan pada hari itu, dalam warna ochre. Tugasan sedang berjalan dari tarikh mula hingga tarikh siap.
- **Belum dimulakan**: lut sinar.
- Elemen dalam tiada tugasan kekal seperti sediakala. Senarai menunjukkan berapa elemen setiap tugasan jumpa. Baris yang tidak dapat dibaca, atau tidak menjumpai apa-apa, disenaraikan dengan nombor barisnya.

## Pautan, carta Gantt dan MS Project

- Buka fail XML Microsoft Project (`.xml`) atau CSV yang mempunyai lajur `Predecessors`. Pautan boleh jadi tamat ke mula, mula ke mula, tamat ke tamat atau mula ke tamat, setiap satu dengan lead atau lag dalam hari.
- Di bawah senarai tugasan, carta Gantt melukis setiap tugasan sebagai bar dengan anak panah untuk pautan. Tugasan pada laluan kritikal berwarna merah. Gelung pautan atau predecessor yang tidak wujud disenaraikan dalam panel.
- {{ui:Simpan sebagai XML MS Project}} dan {{ui:Simpan CSV dengan pautan}} menulis semula jadual bersama pautannya.

## Seterusnya

- [Cari elemen mengikut kelas, nama atau sifat](topic:find)
- [Warnakan elemen mengikut sifat](topic:color-by-property)
