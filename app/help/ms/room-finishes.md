---
title: Kemasan bilik dan jadual kemasan
summary: Nyatakan apa yang menutupi lantai, dinding dan siling setiap bilik, tambah zon seperti papan percik berjubin, dan dapatkan jadual kemasan mengikut bilik, dinding dan zon dengan luas, kiraan jubin termasuk potongan, serta isipadu substrat.
keywords: kemasan, jadual kemasan, kemasan bilik, kemasan lantai, kemasan dinding, kemasan siling, papan kaki, jubin, jubin dipotong, kiraan jubin, buangan, substrat, skrid, papan sokongan, plaster, zon, papan percik, dado, kawasan basah, dalaman, kuantiti
from: 8c30498c
---

## Apa yang akan anda lakukan

Beritahu BimCraft sekali sahaja apa yang menjadi kemasan setiap bilik. Jadual kemasan kemudian memberikan luas, jubin untuk dipesan dan isipadu substrat, dan berubah mengikut model.

## Langkah

1. Hidupkan {{ui:Lukis}}, buka **Jadual** dalam panel kiri dan klik **Kemasan bilik**.
2. Di bawah **Jenis kemasan**, klik **Tambah jenis kemasan**. Berikan namanya, jenisnya (Jubin, Lembaran, Salutan atau Papan) dan ketebalannya. Bagi jubin, berikan panjang dan lebar jubin, sambungan dan elaun buangan dalam peratus. Jika ada sesuatu di bawah kemasan (skrid, papan sokongan, lapisan plaster), namakannya di bawah **Substrat** dan berikan ketebalannya.
3. Di bawah **Bilik**, pilih kemasan lantai, dinding dan siling bagi setiap bilik. Taip nama papan kaki dan ketinggiannya jika bilik itu ada satu.
4. Di bawah **Zon**, klik **Tambah zon** untuk sebahagian bilik yang menerima kemasan lain:
   - zon **dinding** ialah jalur antara dua ketinggian di atas lantai (papan percik berjubin dari 0 hingga 1200, dado). Ia berada di setiap dinding bilik itu, atau pilih dinding bilik itu dalam model dan klik butang **Hidup** untuk mengehadkannya kepada dinding tersebut;
   - zon **lantai** atau **siling** ialah kawasan yang anda taip. Ia diambil daripada kemasan bilik itu sendiri.
5. Klik **Simpan**. Ia ialah satu langkah dalam Buat asal. Panjang ditaip dalam unit projek.

## Jadual

Empat entri menyertai senarai Jadual:

- **Kemasan mengikut bilik**: setiap bilik dengan kemasan lantai, dinding dan siling, luasnya, serta papan kaki dengan panjangnya.
- **Kemasan mengikut dinding**: setiap bahagian dinding di sisi bilik dan jalur yang dilitupi kemasan, dengan panjangnya, luas kasar, potongan, luas bersih dan, bagi jubin, jubin penuh, jubin dipotong serta jubin untuk dipesan.
- **Kemasan mengikut zon**: setiap zon dengan kemasannya, luas bersih, jubin dan isipadu substrat.
- **Kuantiti kemasan**: satu baris bagi setiap kemasan: luas bersih, jubin penuh dan dipotong, jubin untuk dipesan, substrat dan isipadunya, serta isipadu kemasan itu sendiri.

Kumpulkan, jumlahkan, simpan dan eksport jadual ini seperti mana-mana jadual: lihat [Atur letak, simpan dan eksport jadual](topic:schedule-layouts). Klik sesuatu angka untuk memilih apa yang menjadi asalnya: potongan bagi sesuatu dinding memilih pintu dan tingkapnya.

## Cara kemasan diukur

- **Dinding**: setiap bahagian dinding di sisi bilik, panjangnya sepanjang bilik didarab dengan ketinggian yang dilitupi kemasan, ditolak bahagian setiap pintu dan tingkap dalam ketinggian itu. Dinding yang lebih rendah daripada bilik dikemaskan hingga bahagian atasnya sendiri. Kaedah ukuran projek menentukan bukaan mana yang terlalu kecil untuk ditolak ([Jadual](topic:plan-schedules-and-pdf)).
- **Lantai dan siling**: bilik di dalam muka dinding, ditolak pulau di dalamnya.
- **Papan kaki**: panjang dinding bilik ditolak lebar pintunya.
- **Jubin**: diletakkan sebagai grid dari satu bucu permukaan, dengan satu sambungan antara jubin. Jubin yang sepenuhnya berada di atas permukaan ialah jubin penuh; jubin yang sebahagiannya berada di atasnya (di tepi, mengelilingi bukaan) ialah jubin dipotong. Jubin untuk dipesan ialah jubin penuh tambah jubin dipotong, tambah elaun buangan, dibundarkan ke atas. Setiap jubin dipotong dikira sebagai jubin baharu: serpihan tidak diguna semula.
- **Isipadu substrat**: luas bersih didarab dengan ketebalan substrat.
- Kiraan yang ditandakan **≈** dikira daripada luas dan bukan disusun jubin demi jubin: permukaan dengan zon yang ditaip dikeluarkan daripadanya, atau permukaan yang sangat besar.

## Perkara yang perlu diketahui

- Kemasan disimpan dalam fail bangunan (set sifat `CadCraft_Finishes` pada projek). Setiap bilik yang mempunyai kemasan turut mendapat set sifat IFC piawai `Pset_SpaceCoveringRequirements`, supaya program lain membaca namanya.
- Susun atur jubin bermula di bucu. Susun atur yang dipusatkan pada bilik, corak (herringbone, brick bond) dan penggunaan semula serpihan tidak dikira.
- Dinding melengkung, dan sempadan bilik yang bukan dinding (pemisah bilik), disenaraikan sebagai **Sempadan lain** dengan panjangnya dan tanpa bukaan.
- Entri **Finishes** yang sedia ada menyenaraikan lapisan kemasan jenis dinding; **Layers: area and volume** menyenaraikan setiap lapisan bagi setiap jenis berlapis. Kemasan bilik di sini ialah yang digunakan pada bilik, di atas lapisan tersebut.
- Pembantu boleh menetapkan kemasan untuk anda dengan `finishes_set`: lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
