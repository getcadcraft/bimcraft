---
title: Amaspuli epayipi lensimbi namashidi amaspuli
summary: Sika umugqa wepayipi lensimbi lebutt-weld ube amaspuli ngobude obuphezulu kakhulu nasemashidini okushisela endaweni ofaka, uwanombolo, bese ulanda ishidi ngalinye lespuli (ukubuka kwe-3D, ubude bokusika, izixhumi, ukushisela, uhlu lwezinto) njenge-PDF ne-CSV; amapayipi omoya athola uhlu lokusika lwezingxenye ezithe xaxa.
keywords: ispuli, amaspuli, ishidi lespuli, isometric, ukwenza ngaphambili, ukwakha ngaphambili, ukushisela endaweni, ukushisela esitolo, butt weld, ubude bokusika, uhlu lokusika, bill of materials, bom, ipayipi lensimbi, ishejuli 40, inombolo yomugqa, uhlu lokusika kwepayipi lomoya, izingxenye zepayipi lomoya
from: 539f51de
---

## Okuzokwenza

Shintsha umugqa wepayipi lensimbi ube yizingxenye ezinikezwa umsebenzi wesitolo ozoxhuma futhi umfakeli azifake: amaspuli angadluli ubude obukhethwa nawe, ahlukaniswe lapho ubeka khona ukushisela endaweni, ngamunye uneshidi lawo.

Kuphela **ipayipi lensimbi lebutt-weld** lisikwa libe ngamaspuli (usayizi wamapayipi ASME B36.10M, ama-elbow ku-ASME B16.9 long radius). Amapayipi ethusi, PVC kanye ne-PEX awanazo izixhumi zebutt-weld, ngakho imigqa yawo ayinawo amaspuli.

## Sika umugqa ube amaspuli

1. Khetha umugqa wepayipi lensimbi. Ku-Properties, thikha **Sika ibe amaspuli**.
2. **Ispuli elide kakhulu**: ubude obukhulu bomugqa wesikhungo ispuli elilodwa elingaba nabo (6 m, cishe 20 ft, okokuqala).
3. **Inombolo yomugqa**: ingxenye yenombolo yawo wonke amaspuli. Umugqa oyispuli omusha uthola inombolo engakasetshenziswa yesistimu yawo elandelayo.

Amaspuli anikezwa izinombolo ngokulandelana komugqa kusukela kuphoyinti lawo lokuqala: `CHW-12-S01`, `CHW-12-S02` … (isistimu, inombolo yomugqa, ispuli). Ispuli likhula ingxenye ngengxenye; ingxenye eyenza libe lide kakhulu iqala elilandelayo, futhi ubude obuqondile obudlula ispuli busikwa lapho ispuli ligcwele khona.

## Faka ukushisela endaweni

1. Vula {{ui:Ukwakhiwa}} bese ukhetha {{ui:Ukushisela endaweni}}.
2. Chofoza epayipini elinamaspuli lapho ukushisela endaweni kuya khona. Phakathi komugqa oqondile, ipayipi liyasikwa lapho; phakathi kwe-fitting noma ivalvu, ukushisela kuyanyakaza kuye kokuxhuma okusondele kakhulu.

Ezicini kubhalwe imigqa yokushisela endaweni yomugqa, ngayinye nge-{{ui:Susa}}. Ushintsho ngalunye lungesinyathelo esisodwa se-{{ui:Hlehlisa}}.

## Amashidi amaspuli

Ku-Properties womugqa onamaspuli:

- {{ui:Amashidi amaspuli (PDF)}}: ikhasi elilodwa ngelilodwa lespuli. Ngakwesobunxele, ispuli ku-isometric view ka-30°: izingxenye zalo ezinde zibalwe, ukushisela kwesitolo kukhonjiswa njengamachashazi, ukushisela endaweni kumakwe ngokuthi FW, nonyakatho wepulani. Ngakwesokudla, inombolo yespuli, usayizi, ishejuli kanye nobude, bese kulandela **ubude bokusika**, **izixhumi**, **ukushisela** (ukushisela kwesitolo kwe-butt kuyo yonke ukuxhuma phakathi kwespuli, nokushisela endaweni lapho lihlangana khona nespuli elilandelayo) kanye **nohlu lwezinto** nesisindo sepayipi (isisindo se-ASME B36.10M plain-end).
- {{ui:Uhlu lwamaspuli (CSV)}}: okufanayo, ibhlokhi elilodwa ngelilodwa lespuli.

:::note
Ubude bokusika bulinganiswa ukusuka ekugcineni kuya ekugcineni njengoba kudwetshwe: ayikho igebe lempande noma indawo yokushisela ethathwayo. Ama-elbow ayi-B16.9 long radius; ama-tee, ama-reducer kanye namavalvu ajwayelekile, ahlolwa ngokwepayipi, hhayi ngokwe-B16.9 noma komkhiqizi, futhi ishidi liyasho lokho. Izisindo zezixhumi aziniki. Isisekelo sokudweba nokuhlanganisa, esilinganiswa yinjiniyela.
:::

## Ku-faela ye-IFC

Yonke ingxenye yomugqa onamaspuli inayo **CadCraft_Spool** enSpoolId yayo, umugqa, inombolo yespuli emgqeni, kanye nokuthi iqala kuphi futhi iphele kuphi ngokuhamba komugqa. Umugqa ugcina izimiso zawo (ispuli elide kakhulu, ukushisela endaweni, inombolo yomugqa) kusethi yawo, ukuze amaspuli abuye efana uma ifayela livulwa futhi.

## Amapayipi omoya: uhlu lokusika

Vula {{ui:Ukwakhiwa}} bese uchofoza {{ui:Uhlu lokusika imibhobho}}: i-CSV yezingxenye zepayipi lomoya ezithe xaxa ngesistimu, ngesimo nangosayizi, ngomugqa oqondile ngamunye usikwe ube yizingxenye ze-**Ubude besiqephu** kwibha ye-Duct (1500 mm, cishe 5 ft, okokuqala) nalokho okusele. Ubude kuphela: akukho ama-seam, amageji noma izixhumi.
