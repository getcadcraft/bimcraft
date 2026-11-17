---
title: Bangunkan jisim bangunan daripada kajian tapak
summary: Ambil jisim bangunan yang dikaji dalam paparan tapak CivilCraft dan bangunkannya menjadi aras, dinding dan lantai, dengan kedudukan tapak pada peta dikekalkan.
keywords: jisim, jisim bangunan, pemodelan jisim, kajian tapak, bangunkan, CivilCraft, serah, aras, dinding, lantai, jejak, georujukan, IFC
from: 557b94d1
---

Paparan tapak CivilCraft boleh melukis jisim bangunan pada lot dan mengujinya terhadap tanah, had yang anda taip dan cahaya matahari. **Bangunkan dalam BimCraft** di sana membuka BimCraft dalam tab baharu dengan jisim-jisim itu; **Jisim sebagai IFC** menyimpannya sebagai fail yang anda buka di sini dengan cara biasa. Dengan kedua-dua cara, setiap jisim tiba sebagai tapak: sebuah bangunan dengan satu aras bagi setiap tingkat, dan satu blok (jisim itu sendiri) yang membawa nombornya.

## Bangunkan jisim

1. Pilih satu jisim dalam paparan 3D. Sifat memaparkan penggunaannya, bilangan tingkat dan ketinggian tingkat, jejak, luas lantai kasar, cara ia duduk di atas cerun, dan lotnya.
2. Klik **Bangunkan jisim ini**.

Dalam satu langkah buat asal, setiap aras bangunan itu mendapat dinding di sekeliling jejak (jejak ialah muka luar dinding; setiap dinding naik ke aras di atasnya, dan yang paling atas setinggi satu tingkat) dan satu lantai di bawah keseluruhan bangunan. Blok digantikan, dan bangunan mengekalkan nombor kajian dalam set sifat `CadCraft_SiteMass`, ditanda sebagai dibangunkan. Tiada bumbung: bumbung bergantung pada reka bentuk.

## Kedudukan tapak

Fail daripada CivilCraft ditulis dalam unit panjang projek itu sendiri dan, apabila projek CivilCraft mempunyai sistem koordinat, membawanya sebagai penukaran peta projek. Membangunkan jisim tidak mengubahnya, maka bangunan kekal di tempat yang ditunjukkan oleh peta.
