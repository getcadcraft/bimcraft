---
title: Qiyaas masaafooyinka, aagagga bannaanka iyo meelaha 3D
summary: Qiyaas inta u dhexaysa laba dhibcood oo moodel IFC ah oo lagu xidho geesaha iyo xagalka, akhri farqiga dhinaca X, Y iyo Z, oo qiyaas aagga wejiga siman.
keywords: qiyaas, qiyaasid, masaafo, dherer, cabbir, aagga, aagga wejiga, xidh, geesta, xagal, qiyaasle, xadka, booska, latitude, longitude, lat long, isku-dhafka, georeference, beddelka khariidadda, EPSG, sahan, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Waxa aad samayn doontid

Hubi xadhigga, dherer derbi ama cabbirka wejiga si toos ah moodelka, adigoo aan furin barnaamijka dhismaha.

## Tallaabooyinka

1. Fur moodel IFC.
2. Guji {{ui:Qiyaas}} qalabka sare, ama riix {{key:M}}. Bar ayaa furmaa hoosta aragga.
3. **Masaafo:** marka {{ui:Masaafo}} la doorto, guji dhibcaha koowaad, kadibna kan labaad. Geesta u dhow, dhibcuhu waxay ku xidhmaan; xagalka u dhow, waxay ku xidhmaan geesta. Calaamadda yar ee u dhow mu'arrifka ayaa sheegta waxa ay tahay. Lamaanaha kasta oo guji ah wuxuu samaysaa hal qiyaas.
4. **Aagga wejiga:** dooro {{ui:Bannaanka wejiga}} oo guji wejiga. Wejiga siman oo dhan ayaa iftiimaya, aaggiisana wuu muuqdaa.
5. **Khadadka toosan:** hoos u hay {{key:Shift}} markaad dooranayso dhibcaha labaad, ama riix {{ui:Toosan}} barta si aad u hayso. Khadku wuxuu u socdaa hal dhidib oo ugu dhow mu'arrifka (aragga sare, X ama Y ee qorshaha; aragyada kale X, Y ama Z), calaamadda mu'arrifka waxay leedahay "toosan oo ku socda dhidib". {{key:M}} wali wuxuu bilaabaa/joojiyaa Qiyaas.
6. Guji {{ui:Nadiifi}} si aad u tirtirto qiyaasaha, ama {{ui:Dhammaystay}} (ama {{key:Esc}}) si aad u joojiso qiyaasta.

## Waxa aad arki doontid

- Khad u dhexeeya laba dhibcood oo dhererkiisa lagu qoray, iyo bar ku jira dhererka iyo intee uu u socdo X, Y iyo Z (dhidibyada moodelka, Z sare u kac), dhammaantoodna waxay ku jiraan {{ui:Cutubyada}} laga doortay qalabka sare.
- Aagga wejiga oo ah mitir laba jibbaaran, wejiga iyo barka.
- Qiyaasaha waxay ku sii jiraan markaad wareejiso, jiidato ama weyneyso.
- Intaad qiyaasayso, gujinta ma doortaan elementiyada. Diyaarada ama sanduuqa gooyinta ayaa wali gooya moodelka, waxaadna qiyaasi kartaa waxa ay muujinayso, oo ay ku jiraan wejiyada la gooyay.

## Halka dhibcu ku yaal dhulka

Guji {{ui:Booska}} barta qiyaasta, kadibna guji dhibic moodelka (wuu ku xidhmaa geesaha iyo xagalka sida masaafooyinka). Bar ayaa muujinaya:

- **latitude iyo longitude**, degree-yada tobanaqaad iyo degree, daqiiqad iyo ilbiriqsi, WGS 84 marka hore;
- **isku-dhafka khariidadda** (eastings iyo northings, oo lagu qoray {{ui:Cutubyada}} laga doortay qalabka sare) nidaamka khariidadda ee moodelka, tusaale ahaan `EPSG:28356`;
- **dhererka** iyo datum-ka dhererka ee faylku sheegay, iyo **datum-ka faylka** (tusaale ahaan GDA94).

{{ui:Koobiyee}} wuxuu dhigaa xogta oo dhan clipboard-ka hal saf. Beddel nidaamka latitude iyo longitude-ka ku jira hoos {{ui:Dejinta}} › {{ui:BimCraft}} › {{ui:Booska}}: WGS 84 (sida GPS iyo khariidadaha webka), datum-ka faylka, ama mid kale oo caadi ah sida ETRS89 ama NAD83.

Tani waxay u baahan tahay moodel leh meel dhab ah (georeference): mid lagu dhoofiyay isku-dhafka khariidadda (beddel khariidad oo nidaam mashruuc ah oo leh koodka EPSG). Moodel kaliya oo leh latitude iyo longitude goobta ah ayaa heesha qiyaas dhow, oo laga qaaday dhibcaha goobta iyo waqooyiga run-ka, bar-kuna wuu sheegaa. Marka moodelo dhowr ah la furay, dhibic kasta wuxuu isticmaalaa georeference-ka moodelkiisa.

:::note
Wareejinta datum-yada (tusaale ahaan GDA94 ilaa WGS 84) waxaa lagu sameeyaa iyada oo aan lahayn faylal grid, sidaas darteed waa saxan tahay dhowr mitir; khadka xaaladda wuxuu sheegaa sida saxda ah. Isku-dhafka khariidadda laftiisa waa saxan.
:::

## Khaladaadka caadiga ah

- **"…has no georeference".** Faylka ma leh beddel khariidad iyo latitude iyo longitude goobta. Dib u dhoofi isagoo nidaamka isku-dhafka la dejiyay (isku-dhafka la wadaago / barta sahanka ee qalabka dhismaha).
- **Isku-dhafka khariidadda laakiin latitude iyo longitude ma jiraan.** Faylku magaca nidaamka khariidadda ma lahan koodka EPSG, ama koodkiisu ma ku jiro liiska; khadka xaaladda wuxuu sheegaa kan.
- **Dhibcuhu wuxuu ku dhacaa wejiga, ma aha geesta.** Xidhiidhku wuxuu eegaa elementiga hoos mu'arrifka. U soo dhow geesta, ama weyneey.
- **Aagga way ka yar yahay sidii la filayay.** Furaha waa laga tagay, wejiga foorarsan waa dhowr wejiga: guji kasta.
- **{{key:Esc}} ayaa joojiyay qiyaasta.** {{key:Esc}} kowaad wuxuu tirtiraa masaafada aan dhammaystirnayn; kan labaad wuu joojiyaa.

## Xiga

- [Gooy moodel IFC diyaarad gooyin](topic:section-plane)
- [Qari, kala saar oo ka arag elementiyada](topic:hide-and-isolate)
