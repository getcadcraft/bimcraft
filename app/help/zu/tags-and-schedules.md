---
title: Phawula izinto bese wenza uhlu ngamathegi
summary: Chaza amathegi akho (igama, uhlobo, amanani avunyelwe, namakilasi ahlobene nawo), phawula izinto eziningi ngesikhathi esisodwa, bese wenza amauhlu amakholomu, izihlungi nezinhlobo zifunda amathegi. Amathegi agcinwa ku-IFC.
keywords: amathegi, ithegi, ukuphawula, izici zakho, ama-parameter, izici ezabelanwa, isethi yezakhiwo, pset, uhlu, ihlungi, hlanganisa ngo, ukuqedela, izinga lomlilo, ukuhlela okuningi, csv
from: 9cc7c90d
---

## Okuzokwenza

Ithegi yisici sakho, njengo-*Ukuqedela* noma *Izinga lomlilo*. Uyichaza kanye kuphrojekthi, uyisete ezintweni eziningi ngesikhathi esisodwa, futhi wonke amauhlu ku-BimCraft angayifunda: uhlu lwamathegi lapha, {{ui:Amanani}}, Thola, Umbala ngesici kanye [Amadokhumenti kusukela kumodeli](topic:documents-from-the-model).

## Izinyathelo

1. Vula imodeli ye-IFC, noma qala isakhiwo esisha.
2. Ngakwesobunxele, ngaphansi kwe-{{ui:Amanani}}, vula {{ui:Amathegi}}.
3. Chofoza {{ui:Engeza ithegi}}. Liniki igama, khetha uhlobo lwalo, uma uthanda bhala amanani avunyelwe (ngamakhoma) namakilasi ayo (`IfcDoor`, `IfcWall` …). Chofoza {{ui:Engeza ithegi}}.
4. Khetha izinto emodelini (Thola iyasiza: khetha yonke imisamo ngesikhathi esisodwa).
5. Ngaphansi kwe-{{ui:Thegisa okukhethiwe}}, khetha noma uthayiphe inani ngalinye ithegi ofuna ukulisetha, ushiye amanye njengoba ayunjalo, bese uchofoza {{ui:Sebenzisa ku-… izinto ezikhethiwe}}.
6. Ngaphansi kwe-{{ui:Uhlu lwamathegi}}, thikha amakholomu, engeza izihlungi, khetha {{ui:Hlanganisa ngo}}, bese {{ui:Landa i-CSV}}.

## Okufanele ukubone

- Isinyathelo ohlwini lwezinguquko ngasinye sochaza elilondoloziwe nasinye sokuphawula; {{ui:Hlehlisa}} iyasibuyisa.
- Izinto zohlobo ithegi engelona lawo ziyeqiwa kuleyo thegi, futhi umugqa wesimo uyatshela ukuthi zingaki.
- Uhlu lwamathegi lubala umugqa owodwa ngento ngayinye, luqoqwe ngensimu okhethe ngayo; chofoza iseli lokuqala lomugqa ukukhetha leyo nto.
- {{ui:Amanani}} ibala amathegi ngaphansi kwe-`CadCraft_Tags`, ukuze ufake izindawo noma izinani ngokuthi ithegi lalo.

## Izinhlobo

Izinhlobo zifana nohlu lwama-parameter omndeni: Length (millimeters), Angle (degrees), Number, Whole number, Yes / No, Pen (1–16), Text, Material kanye Fill. Inani elingafaneli uhlobo lwalo, noma elingelona elivunyelwe, liyenqatshwa ngomyalezo, futhi akukho okushintsha.

## Okufanele wazi

- Konke kuyi-IFC evamile, ngakho ezinye izinhlelo zifunda amanani: izincazelo zisesethini yezakhiwo i-`CadCraft_TagDefs` kuprojekthi, namanani asesethini i-`CadCraft_Tags` kuyo yonke into (isici esisodwa ngethegi ngayinye). Ubude bubhalwa ngeyunithi yobude yefayela.
- `IfcWall` kumakilasi wethegi ibuye ifake odonga abajwayelekile nodonga abahlukaniswe.
- Ukuqamba kabusha ithegi kuqamba kabusha namanani ayo kuzo zonke izinto esinyathelweni esisodwa. Ukususa ithegi kususa kuphela incazelo yalo: amanani asevele asetwe ezintweni agcina njengezici ezijwayelekile. Wacishe uwasule kuqala (khetha {{ui:Sula}}) ukuze uwasuse.
- Amathegi ohlelweni lokuhlanganisa elibhalwe ngu-CadCraft (izinsimbi zebhulokhi) awakwakhiwe okwamanje.
