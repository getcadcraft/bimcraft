---
title: Marsruudi kanalid, kanalisatsioon, vesi- ja külmaine torud automaatselt
summary: Põrkumiskontrollis leiab BimCraft avatud mudeli ümber tee kanalitele, gravitatsioonilisele kanalisatsioonile, külma ja sooja veele ning jagatud või mitmejagatud külmaainetorudele ning joonistab trassid koos liitmikega ühe tagasivõtmise sammuga. Projekteerimisabivahend: mõõtmed, kalded ja kontrollid tulevad programmi tabelitest ja sinu sisestatud arvudest; siin ei väideta, et projekt vastab normile.
keywords: automaatmarsruut, marsruudi kanalid, marsruudi torud, kanalisatsioon, sanitaar, gravitatsioon, stakk, ventilatsioon, sifoon, vesi, sooja vesi, tagasivoolutsükkel, ringlus, külmaaine, jagatud, mitmejagatud, VRF, ekvivalentpikkus, harukomplekt, Y-tükk
from: 5841d513
---

## Mida sa teed

Lase BimCraftil koostada trasside võrk ühenduspunktide vahel, mis juba asuvad mudelis, mööda seinu ja talasid, ning kontrolli seda arvude järgi, mida näed.

## Sammud

1. Ava mudel ja põrkumiskontroll. Jaotises **Marsruudi kanalid automaatselt** vali õhuküttelüliti ja selle terminalid või jaotises **Marsruudi muud süsteemid automaatselt** vali süsteem.
2. **Sanitaarkanalisatsioon gravitatsioonist.** Sisesta väljavoolu asukoht ja kui sul need on, siis stakkide asukohad. Märgi **Marsruudi iga korrus ühe korraga**, et võtta kõik korrused, kus on sanitaarseadmeid: iga korruse kanalisatsioon ühineb stakiga oma tasandil ja stakk kulgeb kõrgeimast kraanist allapoole kuni jalani. Vajuta {{ui:Marsruudi}}.
3. **Sifoonist ventilatsioonini.** Paneel loetleb iga sifooni kauguse selle ventilatsioonini. Sisesta **Suurim kaugus sifoonist ventilatsioonini** sellest, mida sinu norm lubab; iga seade, mis ületab selle, loetakse tegemata, koos millimeetrites ületatud väärtusega. Märgi **Ventileeri läbi stakki**, kui seadmetel pole oma ventilatsiooniharu: kaugus mõõdetakse siis stakini. BimCraft ei sisalda selle kohta normitabelit: number tuleb sisestada sina.
4. **Külm ja sooja vesi.** Vali allikas, sisesta rõhk allikas ja rõhk, mida vajad seadmel. Märgi **Sooja vesi**, vali küttekeha sooja ühendus ja märgi **Tagasivoolutsükkel**, et lõpetada tagasivoolutoru küttekeha **sooja tagasivoolu** ühenduses või mõnes muus valitud ühenduses (see lõpeb 150 mm lühemalt, lahtisena, et sa saaksid ühendada).
5. **Split, mitmejagatud ja VRF.** Vali välisseade, märgi sisesed seadmed ja sisesta iga seadme võimsus. Sisesta piirangud tootja andmetest. Sisesta kurvi ja harukomplekti **ekvivalentpikkus** (tootja väärtused) ning pikimat ja kogupikkust kontrollitakse ekvivalentpikkuste järgi.
6. Vajuta {{ui:Marsruudi}}. Paneel ütleb, mitu trassi joonistati, ja mida ei saanud teha ning miks. {{ui:Võta tagasi}} võtab kõik ühe sammuga tagasi.

## Mida peaksid nägema

Torud koos põlvede, T-tükkide ja redutseerijatega; kanalisatsioon, mis langeb vähemalt väikseima oma suuruse kaldega; ventilatsiooniharud seadmetel; külmaainejooned vedeliku- ja gaasipaarina, mis pöörab igal nurgal samamoodi, harukomplekt märgitud kohas, kus haru väljub põhitrassist.

## Hea teada

- Kui kanalisatsioon ühineb teise kanalisatsiooniga, joonistab mudel T-tüki. Plaanil nimetatakse need kohad 45-kraadisteks Y-ühendusteks, et saaksid liitmikku muuta.
- Sooja vesi kasutab seadme enda sooja ühendust, kui selle perekonnal see on, ja külma ühendusest 100 mm kõrvale jäävat ühendust, kui ei ole.
- Külmaainejooned algavad iga seadme kahe ava vahelt. Kui seadme kaks ava on põlve jaoks liiga lähedal, jääb paar nende vahele keskele.
- Veevõrk kasutab arvutuste paneelil näidatud nõudluskõverat ja hõõrdearve; asenda need oma normi omadega, enne kui rõhkudele toetud.
- Suured majad võivad võtta pool minutit või rohkem, peamiselt sooja vee võrk.
- See on projekteerimisabivahend. Kvalifitseeritud isik kontrollib mõõtmeid, kaldeid, ventilatsiooni ja rõhke kohaldatava normi vastu.

## Järgmiseks

[Kontrolli põrkumisi](topic:clash-check) · [Kontrolli torusid ja kanaleid konstruktsiooni suhtes](topic:mep-against-structure) · [Ühendused torude ja seadmete vahel](topic:mep-connections)
