---
title: Torude spetsifikatsioonid, ventiilid, klapid ja tootjate perekonnad
summary: Koosta enda torude spetsifikatsioonid (mõõdutabelid materjali, ühenduse ja karedusega), mis jäävad mudelifaili; paiguta liinidele ventiilid, filter ja klapid ning too tootja ventiili- või seadmemudel perekonnana koos ühendusportidega.
keywords: torude spetsifikatsioon, torude spetsifikatsioonid, torustiku spetsifikatsioon, torustiku klass, oma toru, mõõdutabel, toru, hügieeniline toru, roostevaba teras, loend, välisläbimõõt, seinapaksus, sisemine läbimõõt, karedus, survetase, csv, json, import, eksport, tabelarvutus, standard, bpe, din, en 10357, en 10255, ventiil, ventiilid, liblikventiil, tasakaalustusventiil, reguleerventiil, filter, klapp, mahuklapp, tuletõkkeklapp, oem, tootja, valmistaja, perekond, perekonnad, pordid, ühendus, step, obj, gltf, ifc, radiaator, konvektor, paneelküttekeha, õhutöötlusseade, õhujaotur, õhuava
from: bc2f7c4e
---

## Mida sa teed

Joonista torustikku oma spetsifikatsiooni järgi sisseehitatud terase, vase ja plasti tabelite asemel, paiguta liinidele ventiilid ja klapid ning too tootja mudel koos ühendusportidega, millega torud ühenduvad.

:::note
Joonistamise ja koordineerimise abivahend. Torude spetsifikatsioon sisaldab arve, mille sa sisestad või impordid: kontrolli iga tabelit oma projekti standardi järgi. Sisseehitatud ventiilid, filtrid ja klapid on skemaatilised kujud, mille suurus tuleneb liinist, mitte tootja ega ventiilistandardi pikkusest.
:::

## Seadista torude spetsifikatsioon

1. Lülita sisse {{ui:Joonista}}, ava {{ui:Versioon}} ja vali {{ui:Torude spetsifikatsioonid}}. Sama nupp on ka torutööriista ribal.
2. Vali {{ui:Uus}} või alusta failist, kleepimisest või algspetsifikatsioonist (allpool).
3. Sisesta selle nimi, standard või viide, mida see järgib, materjal ning otsa- või ühendustüüp.
4. Sisesta üks rida suuruse kohta: suuruse nimi, välisläbimõõt ja seinapaksus millimeetrites. Kui sul on seinapaksuse asemel sisemine läbimõõt, sisesta see: teine täidetakse automaatselt. DN, survetase ja kaal on valikulised.
5. Valikuline: karedus millimeetrites (rõhulanguse arvutus kasutab seda), soojustuse paksus, millega uued liinid algavad, põlve raadius välisläbimõõdu teguritena, kas spetsifikatsioonis on T-liitmikud ja reduktorid ning 3D-vaates oma värv.
6. Märgi ära teenused, mille uued liinid peaksid algama selles spetsifikatsioonis, näiteks jahutusvesi.
7. Vali {{ui:Salvesta mudelisse}}.

Spetsifikatsioonid salvestatakse mudelifaili. Igaüks, kes faili avab, saab need kätte ja {{ui:Võta tagasi}} võtab muudatuse tagasi.

Spetsifikatsiooni või selle ühte suurust ei saa kustutada, kui selles on joonistatud liin. Suuruse arvude muutmine joonistab liinid selles suuruses uuesti.

## Kasuta spetsifikatsiooni teises mudelis

- {{ui:Ekspordi .json}} salvestab valitud spetsifikatsiooni väikese failina; {{ui:Ekspordi kõik}} salvestab mudeli kõik spetsifikatsioonid. {{ui:Impordi fail}} loeb need tagasi.
- {{ui:Ekspordi .csv}} salvestab suuruste tabeli tabelarvutusse. {{ui:Impordi fail}} loeb ka `.csv`-faili.
- {{ui:Kleebi read}} võtab tabelarvutusest kopeeritud tabeli. Esimene rida nimetab veerud: `Size`, `OD` ja `Wall` (või `ID`), valikuliselt `DN`, `Pressure`, `Weight`. Üks rida suuruse kohta. Arvud on millimeetrites, kui sa ei vali tolli või kui lahter ei kirjuta oma ühikut (`0.065 in`).

## Algspetsifikatsioonid

{{ui:Lisa algspetsifikatsioon}} lisab mudelisse ühe neist koopiana, mida saad muuta:

| Algspetsifikatsioon | Suurused |
|---|---|
| ASME BPE toru | 1/4" kuni 6" |
| EN 10357 seeria A toru (DIN 11850 rida 2) | DN10 kuni DN200 |
| EN 10255 terastoru, keskmine seeria | DN15 kuni DN150 |
| EN 10255 terastoru, raske seeria | DN15 kuni DN125 |

Need tabelid on välisläbimõõdud ja seinapaksused, mida kaks või enam avaldatud tarnijate lehte standardi kohta esitavad ja mis on omavahel kooskõlas. Need ei ole võetud otse standarditest endist. Suurused, mille esitas ainult üks leht, on välja jäetud. Iga algspetsifikatsioon näitab oma allikalehti ja on märgitud „kontrolli oma projekti standardi järgi“. Karedust, survetaset ega kaalu ei ole antud.

## Joonista liin spetsifikatsioonis

1. Vali {{ui:Toru}}. Spetsifikatsioonis märgitud teenus algab selles spetsifikatsioonis. Mis tahes muu liini puhul vali materjalide loendist spetsifikatsioon: spetsifikatsioonid on loetletud sisseehitatud materjalide järel kui „Spetsifikatsioon: nimi“.
2. Suuruste loend sisaldab nüüd ainult selle spetsifikatsiooni suurusi. Vali üks ja joonista liin.

Liini teisaldamiseks spetsifikatsiooni hiljem vali see ja muuda **Materjal** omadustes. Selle suuruseks saab spetsifikatsiooni lähim suurus välisläbimõõdu järgi.

IFC-failis kannab toru spetsifikatsiooni nime, standardit, materjali, ühendust ja mõõtmeid (`CadCraft_PipeSpec` ja `Pset_PipeSegmentTypeCommon`, torul ja selle tüübil).

Suuruse ja rõhulanguse arvutused loevad spetsifikatsiooni sisemist läbimõõtu. Kui spetsifikatsioonil on karedus, arvutatakse liini hõõrdumine selle järgi (Darcy-Weisbach); ilma selleta kasutatakse arvutuse tavapärast vaikeväärtust.

## Ventiilid, filter ja klapid

1. Vali {{ui:Ventiil}} ja tüüp ribalt: sulg-, kuul-, liblik-, kera-, tagasilöögi-, tasakaalustus- või reguleerventiil või filter torudele; mahuklapp või tuletõkkeklapp kanalitele.
2. Klõpsa liinil, kuhu see läheb. Liin lõigatakse selle ümber ja mõlemad pooled jäävad ühendatuks. Ventiil võtab liini suuruse ja liigub koos liiniga.

Liini omadustes on igaüks loetletud koos nupuga {{ui:Eemalda}}; liin sulgub jälle.

Rõhulanguse arvutus arvestab liitmiku kadu ainult sulg-, kuul-, kera- ja tagasilöögiventiilide puhul. Teised tüübid, klapid ja tootjate perekonnad seal kadu ei lisa: arvesta neid oma kontrollis. Need arvestatakse tabelis **Liitmikud ja ventiilid** ja kogustes ning kirjutatakse IFC-faili ventiilidena, filtrina ja klappidena, millel on kaks ühendatud porti.

## Tootja mudel perekonnana

1. Ava {{ui:Versioon}} ja vali {{ui:Perekonnad}}, seejärel {{ui:Impordi mudel}}. Loetakse IFC, STEP, OBJ, STL, glTF ja teegi üksuse failid. OBJ ja STL puhul määra enne faili ühikud ja ülessuunatud telg.
2. Portide dialoogis sisesta nimi, tootja ja mudeli number.
3. Vali, kas see on **Liinil** (ventiil, filter või klapp) või **Seadmed**, ja kuidas see kirjutatakse.
4. Anna sellele pordid. Igal pordil on nimi, toru või kanal, teenus, suurus millimeetrites (toru välisläbimõõt), nimisuurus sellisena, nagu sinu spetsifikatsioon seda nimetab, otsatüüp, asukoht ja suund, kuhu see on pööratud. {{ui:Tahul}} paneb pordi mudeli karbi tahu keskele. Väike pealtvaade näitab porte.
5. Vali {{ui:Salvesta perekond mudelisse}}.

Liinile minev perekond vajab täpselt kahte porti, mis on suunatud üksteisest eemale ühel joonel. Vali see ventiilitööriista loendist ja klõpsa liinil: see paigutatakse oma pikkusega ja torud ühenduvad selle portidega.

Perekonda ei venitata kunagi. Kui selle pordid ei vasta liini suurusele, teatatakse sulle paigutamisel ja {{ui:Kontrolli ühendusi}} loetleb selle.

Seadmete perekond paigutatakse {{ui:Seadmed}} abil, tüüp **Tootja perekond**. Torud ja kanalid kinnituvad selle portidele.

{{ui:Laadi alla teegi üksusena}} salvestab perekonna portidega failina, mille võid esitada teeki.

## Radiaatorid ja konvektorid

{{ui:Seadmed}} sisaldab ka **Radiaator** ja **Konvektor / paneelküttekeha**: üldised kehad vooluga ja tagasivooluga ühendusega küttevee jaoks. Vaata [MEP-seadmed portidega](topic:mep-equipment).
