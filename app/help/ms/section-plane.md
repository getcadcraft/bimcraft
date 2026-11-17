---
title: Potong model IFC dengan satah keratan
summary: Hiris model 3D dari atas, depan atau sisi, atau simpan hanya apa yang berada dalam kotak keratan atau isipadu beberapa kotak dengan muka condong, untuk melihat ke dalam; alihkan potongan dengan menyeret atau menaip, balikkannya, dan pilih apa yang ditunjukkan oleh potongan.
keywords: keratan, satah keratan, kotak keratan, grip, seret, margin, kotak pilihan, kotak klip, potong, pemotongan, hiris, potongan pelan, pelan lantai, dongakan, dalam, bahagian dalam, balik, ofset, isipadu keratan, keratan bertangga, berbentuk L, condong, potongan condong, satah serong, satah tambahan
from: 6315e71a
---

## Apa yang akan anda lakukan

Potong model IFC dengan satu satah untuk melihat ke dalamnya: dari atas untuk pelan, atau dari depan atau sisi untuk keratan melalui bangunan.

## Langkah

1. Buka model IFC. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model).
2. Klik {{ui:Keratan}} pada bar alat, atau tekan {{key:X}}. Model dipotong separuh ke atas, dan satu bar muncul di bawah bar alat.
3. Pilih dari mana untuk memotong: {{ui:Atas}}, {{ui:Hadapan}} atau {{ui:Sisi}}. Hadapan dan Sisi juga memutar paparan untuk melihat potongan.
4. Alihkan potongan: seret peluncur **{{ui:Ofset}}**, atau taip jarak dalam meter dalam kotak dan tekan {{key:Enter}}. Anda juga boleh menaip milimeter, contohnya `1200 mm`.
5. Klik {{ui:Balik}} untuk menyimpan sisi lain potongan.
6. Klik elemen pada potongan untuk melihat sifatnya.
7. Klik {{ui:Mati}}, klik {{ui:Keratan}} semula, atau tekan {{key:X}} untuk mengeluarkan potongan.

## Kotak keratan

Klik {{ui:Kotak}} dalam bar yang sama untuk menyimpan hanya apa yang berada dalam kotak. Setiap {{ui:X}}, {{ui:Y}} dan {{ui:Z}} mempunyai dua peluncur: di mana kotak bermula dan di mana ia berakhir, dalam meter dari tepi model. Nilainya dipaparkan di sebelahnya.

- {{ui:Kotak di sekeliling pilihan}} memuatkan kotak di sekeliling elemen yang anda pilih dan zum kepadanya. Ia meninggalkan 300 mm ruang di setiap sisi; tukarkannya dalam {{ui:Tetapan}} › BimCraft › {{ui:Ruang di sekeliling pilihan}}.
- Dengan elemen dipilih, {{ui:Tunjuk}} › {{ui:Kotak keratan di sekeliling pilihan}} atau {{key:Shift+X}} melakukan perkara yang sama dalam satu langkah, walaupun tiada potongan dihidupkan.
- **Grip** pada kotak menggerakkannya dengan penuding: seret segi empat sama di tengah muka untuk menggerakkan muka itu, di tengah tepi untuk menggerakkan dua muka yang bertemu di situ, atau di bucu untuk menggerakkan ketiga-tiga muka. Peluncur mengikutinya. Dalam {{ui:Atas}}, bucu menggerakkan kotak dalam pelan; dalam {{ui:Hadapan}} atau {{ui:Sisi}}, dalam dongakan.
- {{ui:Keseluruhan model}} membuka kotak kepada keseluruhan model semula.
- {{ui:Atas}}, {{ui:Hadapan}} atau {{ui:Sisi}} kembali kepada satu satah.

## Isipadu beberapa kotak, muka condong dan satah tambahan

Kotak tidak selalu bentuk yang anda perlukan: keratan bertangga, sayap berbentuk L, atau potongan sepanjang dinding yang tidak tegak dengan grid.

1. Dalam {{ui:Kotak}}, klik {{ui:Tambah kotak}}. Potongan kini menyimpan apa yang berada dalam **mana-mana** kotak, jadi dua kotak membentuk isipadu bertangga atau berbentuk L. Senarai di sebelahnya menyatakan kotak mana yang diubah oleh peluncur ({{ui:Kotak 1}}, {{ui:Kotak 2}}…); {{ui:Keluarkan kotak ini}} mengeluarkan kotak yang dipilih. Isipadu menyimpan sehingga 8 kotak.
2. Buka {{ui:Condong dan satah}} untuk membentuk kotak yang dipilih:
   - Pilih {{ui:Muka}} dan taip sejauh mana ia condong ke setiap arah, dalam darjah (sehingga 80). Muka berpusing tentang tengahnya; muka lain kekal di tempat peluncur meletakkannya. {{ui:Tegak}} mengembalikannya.
   - {{ui:Tambah satah}} memotong kotak dengan satu lagi satah. {{ui:Muka}} ialah arah sisi yang dipotong menghadap, dalam darjah dari X ke arah Y; {{ui:Kecerunan}} ialah sejauh mana ia berpaling ke atas (0 untuk satah tegak, 90 untuk satah mendatar); {{ui:Ofset}} ialah jarak satah dari tengah kotak, dalam meter. × mengeluarkannya. Satu kotak menyimpan sehingga 6 satah tambahan.
3. Di mana isipadu memotong pepejal, muka potongan diisi seperti sebelum ini, termasuk di tempat dua kotak bertemu dalam satu bertangga.

:::tip
Jika garis luar hilang dan tiada apa yang tinggal, condongan atau satah itu tidak meninggalkan apa-apa di dalam kotak itu; bar memberitahu. Condongkan muka ke belakang atau tukar ofset satah.
:::

## Bangunan yang dipusingkan di tapaknya

Banyak model meletakkan bangunan pada sudut berbanding paksi fail (utara benar, koordinat dikongsi). Apabila dinding berada pada sudut, potongan baharu bermula tegak dengan bangunan: {{ui:Hadapan}}, {{ui:Sisi}} dan kotak berjalan sepanjang dindingnya sendiri, dan {{ui:Segi dengan bangunan}} dalam bar keratan dihidupkan. Klik untuknya bagi paksi model, dan sekali lagi untuk kembali (baris status menyatakan berapa banyak bangunan itu dipusingkan). Dengan **Tetapan › BimCraft › Bangunan yang dipusingkan di tapaknya › Seperti diletakkan di tapak**, keratan dan paparan bermula pada paksi model sebaliknya. Lihat [Tetapan](topic:settings).

## Apa yang anda patut lihat

- **Atas** menyimpan apa yang berada di bawah potongan, jadi anda melihat ke bawah ke dalam bilik. Ofset diukur ke atas dari bahagian bawah model.
- **Hadapan** menyimpan apa yang berada di belakang potongan, dilihat dari depan; **Sisi** menyimpan apa yang berada di sebaliknya, dilihat dari sisi. Ofset diukur dari depan atau sisi model.
- Garis luar nipis berwarna menunjukkan di mana satah itu berada.
- Di mana satah memotong dinding, lantai atau pepejal lain, muka potongan diisi dengan warna gelap, seperti keratan yang dilukis. {{ui:Isian}} dalam bar menghidupkan dan mematikan ini.
- ViewCube di sudut kanan bawah memutar model untuk melihat potongan dari mana-mana sisi.
- Klik memilih apa yang anda boleh lihat: apa-apa yang dipotong tidak boleh dipilih.

## Kesilapan biasa

- **Tiada yang berubah.** Potongan mungkin berada di atas bumbung atau di luar model. Seret peluncur, atau taip ofset yang lebih kecil.
- **Ofset kembali semula.** Jarak melebihi model dialihkan ke hujungnya, dan baris status memberitahu.
- **Isu menunjukkan sebahagian isipadu saya.** Isu (BCF) menyimpan satu kotak dengan muka dan satah condongnya: kotak pertama isipadu. Baris status memberitahu apabila anda membuat isu.
- **Potongan berongga.** {{ui:Isian}} dalam bar dimatikan: klik untuk mengisi muka potongan dinding, lantai dan pepejal lain.
- **Potongan yang diisi kelihatan berbintik atau tertinggal sekeping.** Pengisian memerlukan pepejal tertutup; elemen yang bentuknya dalam fail tidak tertutup (satu helai, dedaun pokok) dibiarkan tidak diisi dan bukannya dicat. Elemen yang terdiri daripada bahagian berwarna berbeza (bingkai dan kacanya) diisi apabila bahagiannya bercantum rapat.
- **Di manakah bar keratan?** Ia berada di bahagian atas paparan 3D yang dipotongnya: pada separuh 3D dalam {{ui:Pisah}}, dan di bawah bar lukisan dalam {{ui:Pelan}} sahaja. Dalam paparan pendek ia boleh diskrol.

## Seterusnya

- [Tunjuk dan sembunyi tingkat, ruang dan tepi](topic:storeys-and-spaces)
- [Lihat lukisan DWG atau DXF dalam 3D](topic:dwg-in-3d) — lukisan dalam 3D mempunyai satah keratan yang sama
