---
title: Linganisa amabanga, izindawo zobuso nezindawo ku-3D
summary: Linganisa phakathi kwamaphoyinti amabili emodelini ye-IFC ngokubamba izikhonwa nemiphetho, funda umehluko ngo-X, Y no-Z, futhi ulinganise indawo yobuso obuqondile.
keywords: linganisa, ukulinganisa, ibanga, ubude, isilinganiso, indawo, indawo yobuso, ukubamba, isikhonwa, umphetho, ithephu, umbusi, ukukhululeka, indawo, ukuphakama, ilongithudi, ilathithudi, lat long, ukuhlangana, ukuguqulwa kwemephu, EPSG, ukuhlola umhlaba, eastings, northings, WGS 84, idatamu
from: 5f430bba
---

## Okuzokwenza

Hlola ukukhululeka, ubude bodonga noma usayizi wobuso ngqo kusuka emodelini, ngaphandle kokuvula uhlelo lokuhlela.

## Izinyathelo

1. Vula imodeli ye-IFC.
2. Chofoza {{ui:Linganisa}} ethuluzini, noma cindezela {{key:M}}. Ibha ivuleka ngaphansi kombono.
3. **Ibanga:** uma {{ui:Ibanga}} likhethiwe, chofoza iphoyinti lokuqala, bese lesibili. Eduze nesikhonwa isikhombi siyasibamba, eduze nomphetho siyawubamba; ilebula elincane esikhombisini liyakusho okubanjwe. Ukuchofoza okubili ngakunye kwenza isilinganiso esisodwa.
4. **Indawo yobuso:** khetha {{ui:Indawo yobuso}} bese uchofoza ubuso. Ubuso bonke obuqondile buyakhanya, futhi indawo yabo iyabonakala.
5. **Imigqa eqondile:** bamba {{key:Shift}} ngenkathi ukhetha iphoyinti lesibili, noma chofoza {{ui:Ngqo}} ebheni ukuze uyigcine. Umugqa ngalesi sikhathi uhamba ngalowo eksini isikhombi esiseduze kakhulu nawo (kwi-top view, ngo-X noma Y wepulani; ezinye izibuko ngo-X, Y noma Z), futhi ilebula lesikhombi lithi "straight along an axis". {{key:M}} isaqala futhi imise ukulinganisa.
6. Chofoza {{ui:Sula}} ukususa izilinganiso, noma {{ui:Kuqediwe}} (noma {{key:Esc}}) ukuze uyeke ukulinganisa.

## Okufanele ukubone

- Umugqa phakathi kwamaphoyinti amabili nobude bawo phezu kwawo, nasebhalwe ngalo ukuthi uhamba kangakanani ngo-X, Y no-Z (emaxhezini emodeli, u-Z uphakama), konke ngaphansi kwe-{{ui:Amayunithi}} okhethe ethuluzini.
- Indawo yobuso ngamamitha ayisikwele, ebusweni nasebhalweni ebheni.
- Amalebula ahlala kuzilinganiso zawo lapho uzungeza, uhambisa futhi usondeze.
- Lapho ulinganisa, ukuchofoza akukhethi izinto. Isigaba esinqunyiwe noma ibhokisi liyasahlukanisa imodeli, futhi ungalinganisa lokho okubonisayo, kubandakanya nobuso obusikiwe.

## Lapho iphoyinti likhona emhlabeni

Chofoza {{ui:Indawo}} ebheni lokulinganisa, bese uchofoza iphoyinti emodelini (libamba izikhonwa nemiphetho njengamabanga). Ibha iyabonisa:

- **ubude nobubanzi bendawo** (ilathithudi nelongithudi), ngamadigri ahlukaniswe ngamadesimali nangamadigri, amaminithi nemizuzwana, ku-WGS 84 okokuqala;
- **izindawo zemephu** (ama-eastings nama-northings, abhalwe ngo-{{ui:Amayunithi}} akhethwe ethuluzini) ohlelweni lwemephu lwemodeli, njenge-`EPSG:28356`;
- **ukuphakama** nedatamu eliphakeme elifayela elilibiza, nedatamu **layo** lefayela (njenge-GDA94).

{{ui:Kopisha}} ifaka konke ebhodini lokukopisha ngomugqa owodwa. Shintsha uhlelo lobude nobubanzi esikusebenzisayo ku-{{ui:Izilungiselelo}} › BimCraft › {{ui:Indawo}}: WGS 84 (njengoba kwenziwa yi-GPS namamephu awebhu), idatamu layo lefayela, noma enye ejwayelekile njenge-ETRS89 noma i-NAD83.

Lokhu kudinga imodeli enendawo yomhlaba: eyathunyelwa ngezindawo zemephu (ukuguqulwa kwemephu kuhlelo oluhlelekile olunekhodi ye-EPSG). Imodeli enobude nobubanzi besayithi kuphela ithola indawo esondelene, eyenziwe kusukela ephoyinteni lesayithi nasenyakatho yayo yangempela, futhi ibha iyakusho lokho. Lapho kuvulwe amamodeli amaningi, iphoyinti ngalinye lisebenzisa indawo yomhlaba yemodeli yalo.

:::note
Ukushintsha phakathi kwamadatamu (njengo-GDA94 kuya ku-WGS 84) kwenziwa ngaphandle kwamafayela egridi, ngakho kulungile ngamamitha ambalwa; umugqa wesimo uyakusho ukuthi kulungile kangakanani. Izindawo zemephu ngokwazo zinembile.
:::

## Amaphutha ajwayelekile

- **"…ayinayo indawo yomhlaba".** Ifayela alinaso ukuguqulwa kwemephu futhi alinaso ubude nobubanzi besayithi. Lithumele futhi ngohlelo lwalo lokuhlela olusethiwe (izindawo ezabelwanayo / iphoyinti lokuhlola ethuluzini lokwakha).
- **Izindawo zemephu kodwa azikho ubude nobubanzi.** Ifayela libiza uhlelo lwalo lwemephu ngaphandle kwekhodi ye-EPSG, noma ngekhodi engekho ohlwini; umugqa wesimo uyakusho ukuthi yiphi.

- **Iphoyinti lifika ebusweni, hhayi esikhonweni.** Ukubamba kubheka into ephansi kwesikhombi. Sondela esikhonweni, noma sondeza.
- **Indawo incane kunalokho obekulindelwe.** Izimbobo ziyasuswa, futhi ubuso obugobile buyizinhlangothi eziningi: chofoza ngayinye.
- **{{key:Esc}} imise ukulinganisa.** Ukucindezela kokuqala kususa ibanga elingaphelele; okwesibili kuyayeka.

## Okulandelayo

- [Sika imodeli ye-IFC ngendiza esinqunyiwe](topic:section-plane)
- [Fihla, hlukanisa nokubona ngaphakathi kwezinto](topic:hide-and-isolate)
