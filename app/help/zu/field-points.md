---
title: Amaphoyinti okumaka nokuhlola okwakhiwe
summary: Nombolela izindawo ibhodi elimisa kuzo kusuka kumodeli: amaphakathi wezinsika, izinhlangothi zezindonga, izikulufo ezibambayo, izimbobo, noma yinoma iyiphi into oyikhethayo, bese uzibhala ukuze i-total station, bese ufunda amaphoyinti okwakhiwe ibhodi elawabuyisela bese ubona okuphambukile.
keywords: amaphoyinti okumaka, ukumisa, ukumaka, isiteshi esiphelele, total station, ukuhlola, ifayela lamaphoyinti, csv, txt, pnezd, penzd, xyz, northing, easting, ukuphakama, njengokwakhiwe, hlola, ukubekezelela, ukuphambuka, izikulufo ezibambayo, amaphakathi wezinsika, izinhlangothi zezindonga, izimbobo, izixhumanisi zokuhlola, ukuguqulwa kwemephu
from: acea9606
---

I-{{ui:Points}} ithebhu esohlangothini lwesokudla yenza amaphoyinti ibhodi limisa esiza kusuka kumodeli evulekile, futhi ihlola amaphoyinti ibhodi elawalinganisa ngemva kwalokho.

## Yenza amaphoyinti

1. Vula imodeli ye-IFC kanye ne-{{ui:Points}} ithebhu.
2. Khetha okuzomiswa: **column centres** (inyawo lomugqa wamaphakathi wensika ngayinye), **wall ends** (zombili izinhlangothi zomugqa wodonga ngayinye, esisekelweni), **anchor bolts**, **sleeves** (izinto ezinegama noma uhlobo olubonisa i-sleeve), kanye **picked elements** (ngayinye endaweni yokumisa kwayo — uzikhethe ebukweni kuqala).
3. Khetha inombolo yokuqala nesiqalo, izixhumanisi, amayunithi, izinsika nefayela:
   - **Model**: izixhumanisi zefayela ngokwalo. **Survey grid**: igridi yemephu yokuphindwa kwemodeli (ikhombisa kuphela uma i-IFC inokuguqulwa kwemephu), ngamamitha noma iyunithi oyikhethile.
   - Amakholomu **PNEZD** (iphoyinti, northing, easting, ukuphakama, incazelo), **PENZD** noma **XYZ**; **CSV** (amakhoma) noma **TXT** (ama-tab).
4. Cindezela {{ui:Make points}}: uhlu lubonisa wona, futhi ukubuka kuwamaka ngombala oluhlaza okwesibhakabhaka. {{ui:Download the points}} ibhala ifayela.

Amaphoyinti ahlelwa ngokulandelana okungaguquki — ngohlobo, bese ngemigqa kupulani — ngakho ukuwenza kabusha kusuka kumodeli efanayo kunika izinombolo ezifanayo. Ifayela yileli i-CivilCraft ilivulayo, nalo i-EXPORTPOINTS ye-CadCraft iyabhala: iphoyinti elilodwa ngomugqa ngamunye, izingxenye ezintathu zamadesimali, nencazelo phakathi kwamagwiyane uma iqukethe ikhoma.

## Hlola amaphoyinti njengokwakhiwe

Lapho ibhodi lithumela okulinganisiwe, khetha **tolerance** ngamamilimitha nendlela yokuhlanganisa amaphoyinti — nge-**point number** (agcina izinombolo zakho) noma **nearest shot** — bese ucindezela {{ui:Read as-built points…}}. Funda ifayela ngamayunithi nezixhumanisi ofake kuzo.

Ngemva kwalokho iphoyinti ngalinye lokuklama liba **within** ukubekezelela, **outside** kukho, **not measured**, kanti noma iyiphi intshaya engabizwanga iba **extra**. Ithebhu inikeza umehluko ngeyunithi oyikhethayo kwithuluzi, amafidi abonakala njengamadesimali amaholo (njengokwakhiwe ukuhlola kokuklama: empumalanga, enyakatho, ukuphakama, nebanga kupulani). Ibuka ibhala ngalinye liphawulwe luhlaza noma lubomvu nomugqa oya kulokho okuthathwe, nagolwe uma lingalinganiswanga. {{ui:Report (CSV)}} ibhala ukuqhathanisa konke.

Akukho lapha okushintsha imodeli. Akusayenziwa: ukumisa kusuka emaphethelweni wephlothi, izimbobo zegridi noma izimbobo ezenziwe ngokuzenzakalelayo, nokuthumela amaphoyinti ngqo kwisixhumi — sebenzisa ifayela.
