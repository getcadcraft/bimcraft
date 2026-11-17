---
title: Apa yang dirender oleh mesin anda
summary: Tetapan › Rendering memaparkan grafik, teras pemproses dan memori yang dibenarkan oleh pelayar ini untuk aplikasi, serta aras yang menetapkan di mana rendering bermula.
keywords: mesin anda, kad grafik, gpu, webgpu, webgl, pemproses, cpu, teras, benang, memori, ram, memori dikongsi, pengasingan, peringkat, aras, kelajuan, perlahan, kelajuan rendering, komputer riba
from: 360f2375
---

Buka {{ui:Tetapan}} ({{key:Mod+,}}), kekal pada tab aplikasi ini sendiri dan tatal ke {{ui:Rendering}}. {{ui:Mesin anda}} menyenaraikan apa yang dibenarkan oleh pelayar ini untuk aplikasi bagi rendering. Tiada apa-apa di dalamnya meninggalkan komputer anda.

| Baris | Maksudnya |
|---|---|
| {{ui:Grafik}} | Kad grafik yang dilaporkan oleh pelayar. "WebGPU" bermaksud ia boleh melakukan kerja rendering; "WebGL 2 sahaja" bermaksud tiada WebGPU: paparan langsung dan gambar berkualiti tinggi menggunakan kad grafik melalui WebGL 2 (gambar dengan laluan penjejak WebGL yang lebih lama, tanpa ciri tambahan yang memerlukan WebGPU); pengganti perisian bermaksud semuanya berjalan pada pemproses |
| {{ui:Pemproses}} | Berapa banyak teras pemproses yang dilaporkan oleh pelayar |
| {{ui:Memori}} | Anggaran jumlah memori komputer, apabila pelayar melaporkannya. Ada pelayar yang tidak melaporkannya |
| {{ui:Memori dikongsi}} | Sama ada halaman dibenarkan berkongsi memori antara pekerjanya. Jika dihidupkan, setiap teras boleh bekerja pada satu salinan adegan; jika dimatikan, setiap satu memerlukan salinannya sendiri, jadi adegan besar muat pada lebih sedikit teras serentak |
| {{ui:Kod pemproses pantas}} | Sama ada pelayar menjalankan kod WebAssembly yang lebih pantas. Tanpanya, cara ganti yang lebih perlahan digunakan |
| {{ui:Aras}} | {{ui:Kad grafik, tinggi}}, {{ui:Kad grafik, asas}} atau {{ui:Pemproses sahaja}}, dengan sebabnya di bawahnya |

## Aras

Aras ialah tempat rendering bermula, supaya komputer riba dengan cip grafik terbina dalam atau tanpa kad grafik langsung kekal responsif. Cip grafik terbina dalam atau telefon, atau memori 4 GB atau kurang, tidak sekali-kali mendapat {{ui:Kad grafik, tinggi}}.

:::note
Pelayar berbeza. Komputer yang sama boleh memaparkan WebGPU dalam satu pelayar dan "WebGL 2 sahaja" dalam pelayar lain. Pada Linux, kebanyakan pelayar belum mempunyai WebGPU.
:::
