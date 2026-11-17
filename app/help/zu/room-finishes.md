---
title: Ukuqedwa kwamagumbi nohlu lokuqedwa
summary: Chaza okumboza iphansi, izindonga nesilingi sengumbi ngalinye, engeza izingxenye ezikhethekile njengebhodi lamathayili esendongeni, bese uthola uhlu lokuqedwa ngamagumbi, ngezindonga nangezindawo, nezinani zamathayili kuhlanganise nokusikwa kanye namavolumu esisekelo.
keywords: ukuqedwa, ukuqedwa kwamagumbi, uhlu lokuqedwa, ukuqedwa kwephansi, ukuqedwa kodonga, ukuqedwa kwesilingi, ibhodi lokuzungeza, ithayili, amathayili, amathayili asikiwe, inani lamathayili, ukulahlekelwa, isisekelo, i-screed, ibhodi lokusekela, ipulasta, indawo ezungezayo, ingxenye yodonga, indawo emanzi, ukuqedwa kwangaphakathi, amanani
from: 8c30498c
---

## Okuzokwenziwa

Tshela i-BimCraft kanye ukuthi igumbi ngalinye lichithwe ngani. Uhlu lokuqedwa lunika izindawo, amathayili okuwaoda kanye namavolumu esisekelo, futhi lushintsha ngemodeli.

## Izinyathelo

1. Vula {{ui:Draw}}, vula **Schedules** esiqeshini sangakwesobunxele bese uchofoza **Ukuqedwa kwamagumbi**.
2. Ngaphansi kwe-**Finish types**, chofoza **Add a finish type**. Yinike igama, uhlobo (Ithayili, Ishidi, Ungqimba noma Ibhodi) nobukhulu. Ithayili linikeze ubude nobubanzi balo, ukuhlangana kwalo nephesenti lokulahlekelwa. Uma kukhona okungaphansi kokuqedwa (i-screed, ibhodi lokusekela, ungqimba lwepulasta), liqambe ngaphansi kwe-**Substrate** unikeze ubukhulu balo.
3. Ngaphansi kwe-**Rooms**, khetha ukuqedwa kwephansi, kodonga nesilingi kwegumbi ngalinye. Thayipha igama lebhodi lokuzungeza nobude balo uma igumbi linalo.
4. Ngaphansi kwe-**Zones**, chofoza **Add a zone** kwingxenye yegumbi edinga ukuqedwa okuhlukile:
   - Indawo **yodonga** ingxenye ephakathi kwamazinga amabili ngaphezu kwephansi (ibhodi elithayiliwe kusuka ku-0 kuya ku-1200, ingxenye yodonga). Itholakala kuzo zonke izindonga zalelo gumbi, noma khetha izindonga zalelo gumbi emodelini bese uchofoza inkinobho ye-**On** ukuze uyigcine kuzona kuphela;
   - Indawo **yephansi** noma **yesilingi** iyindawo oyithayipha. Iyasuswa kokuqedwa komgumbi wayo.
5. Chofoza **Save**. Yisinyathelo esisodwa ku-Undo. Ubude buthayipha ngamayunithi wephrojekthi.

## Uhlu

Kungeza izingenisi ezine kuhlu lwe-Schedules:

- **Finishes by room**: igumbi ngalinye nokuqedwa kwalo kwephansi, kodonga nesilingi, izindawo zawo, nebhodi lokuzungeza nobude balo.
- **Finishes by wall**: ingxenye ngayinye yodonga ohlangothini lwegumbi nengxenye yalo okumbozwe ukuqedwa, nobude balo, indawo ephelele, ukukhishwa, indawo yangempela nokwamathayili, amathayili aphelele, amathayili asikiwe namathayili okuwaoda.
- **Finishes by zone**: indawo ngayinye nokuqedwa kwayo, indawo yangempela, amathayili nevolumu yesisekelo.
- **Finish quantities**: umugqa owodwa ngokuqedwa ngakunye: indawo yangempela, amathayili aphelele nasikiwe, amathayili okuwaoda, isisekelo nevolumu yaso, nevolumu yokuqedwa ngokwakho.

Hlanganisa, unikeze isamba, uqophe futhi uthumele njengalo naliphi uhlu: bheka [Hlela, londoloza uthumele uhlu](topic:schedule-layouts). Chofoza inani ukukhetha lapho livela khona: ukukhishwa kwezindonga kukhetha iminyango nemawindi alo.

## Ukubalwa kokuqedwa

- **Izindonga**: ingxenye ngayinye yodonga ohlangothini lwegumbi, ubude bayo ngokuhambisana negumbi kuphindaphindwe ngokuphakama okumbozwa ukuqedwa, kukhishwe ingxenye yomnyango nowindi ngaphakathi kwalokho kuphakama. Udonga ophansi kunegumbi uqedwa kuze kufike phezulu kwawo. Umgomo wokulinganisa wephrojekthi unquma ukuthi yimaphi amasango amancane kakhulu ukuthi angakhishwa ([Uhlu](topic:plan-schedules-and-pdf)).
- **Amaphansi nezilingi**: igumbi ngaphakathi kwezindonga zalo, kukhishwe izihlahla ezingaphakathi kwalo.
- **Ibhodi lokuzungeza**: ubude bodonga legumbi kukhishwe ububanzi bemiyango yalo.
- **Amathayili**: ahlelwe njengegridi ukusuka kwelinye ikhona lendawo, nokuhlangana kukodwa phakathi kwamathayili. Ithayili eliphelele endaweni liyithayili elipheleleyo; ithayili elingxenye yalo kuyo (emphethelweni, lizungeze isimo) liyithayili elisikiwe. Amathayili okuwaoda ayaphelele plus asikiwe, plus indawo yokulahlekelwa, ajikijelwe phezulu. Ithayili ngalinye elisikiwe libalwa njengethayili elisha: izingcezu ezisele azisetshenziswa futhi.
- **Ivolumu yesisekelo**: indawo yangempela iphindaphindwe ngobukhulu besisekelo.
- Inani elimakwe ngo-**≈** libalwa ngendawo kunokuba lihlelwe ithayili ngethayili: indawo enendawo ethile yesikhathi esikhishiwe kuyo, noma enkulu kakhulu.

## Okuhle ukwazi

- Ukuqedwa kugcinwa efayeleni lesakhiwo (isethi yezakhiwo `CadCraft_Finishes` ephrojekthini). Igumbi ngalinye elinokuqedwa lithola futhi isethi esemgangathweni yezakhiwo ye-IFC `Pset_SpaceCoveringRequirements`, ukuze ezinye izinhlelo zifunde amagama.
- Ukuhlelwa kwamathayili kuqala ekhoneni. Ukuhlelwa okuphakathi kwegumbi, iphethini (i-herringbone, i-brick bond) nokusetshenziswa kabusha kwezingcezu azibalwa.
- Udonga oluyigobe, nomkhawulo wegumbi ongewona udonga (isihlukanisi segumbi), kuhlu njenge-**Other boundary** nobude balo, ngaphandle kwemigodi.
- Ingenisi ye-**Finishes** eyayikhona ngaphambili ihlu izingqimba zokuqedwa zezinhlobo zezindonga; i-**Layers: area and volume** ihlu yonke ingqimba yazo zonke izinhlobo ezinezingqimba. Ukuqedwa kwamagumbi lapha yikho okusetshenziswa egumbini ngaphezu kwalezo zingqimba.
- Umsizi ungakwenzela ukusetha ukuqedwa nge-`finishes_set`: bheka [Vumela umsizi we-AI asebenze nemodeli yakho](topic:assistants).
