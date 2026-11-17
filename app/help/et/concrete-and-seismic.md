---
title: Betoonelementide kontroll ja seismiliste koormuste arvutamine
summary: Seadista avatud mudeli betoontalade ja -postide armatuur, kontrolli neid standardi ACI 318-19 järgi, arvuta jäigadel põrandatel ekvivalentsed horisontaaljõud standardi ASCE 7-22 järgi ja vaata korruse nihet. Abivahend insenerile kontrollimiseks.
keywords: betoon, raudbetoon, ACI 318, ACI 318-19, armatuur, tala, post, nihe, seismiline, maavärin, ekvivalentne horisontaaljõud, ELF, ASCE 7-22, korruse nihe, põrandad, jäik diafragma, korruse kaal, kasutusaste, konstruktsiooniline, insener, analüüs
from: 2f342e72
---

Plokid {{ui:Betoonelemendid}} ja {{ui:Seismilised koormused}} sakis {{ui:Analüüs}} kontrollivad avatud IFC raudbetoontalasid ja -poste ning arvutavad maavärina külgjõud raami põrandatel. Need on samad plokid, mis DetailCrafti omad; need käivitatakse pärast sakki {{ui:Analüüs}} analüüsi ja salvestatakse IFC-sse koos teiste analüüsi seadetega.

:::warning
Tulemused on **insenerile kontrollimiseks**: abivahend, kuni insener on selle üle vaadanud. Betoonikontrollid kasutavad esimest järku jõude (mittenihkuva raami post arvutatakse suurendatud momendi järgi), ilma nihke suurendamiseta, ilma väändearvutuseta, ilma seismilise detailideta (ACI 18. peatükk) ja ilma sidemete detailideta. Seismilised koormused jätavad välja redundantsuse teguri, vertikaalse seismilise mõju, väändevõimendi ja P-delta mõjud. **Tuulekoormusi ei ole loodud**: standardi tuulepeatükid ei ole projekti viitelehekülgedel.
:::

## Mida BimCraft loeb

Analüüs loeb mudeli talasid, poste ja diagonaale nende profiilidega (vaata [Konstruktsioonilise raami analüüs](topic:frame-analysis)). Plokk {{ui:Betoonelemendid}} loetleb kõik kasutatud lõiked. Vajuta {{ui:Seadista betoonina…}} lõigul, mis on betoon: BimCraft võtab profiili pindalast ja jäikusest ristküliku (laius b ja kõrgus h, mida saad siis muuta), nii et lõik, mis pole ristkülikule lähedal (valtsitud terasprofiil), annab mõõtme, mida tuleb parandada, või jäetakse puutumata.

Betoonina seadistatud lõik ja iga element, mille materjali nimi on betoon, analüüsitakse betoonina: E = 4700 √f′c, 2400 kg/m³ ja vaikimisi **pragunenud ristlõigetena** (postid 0,70 Ig, talad 0,35 Ig; ACI 318-19 tabel 6.6.3.1.1(a)). Vali {{ui:Brutoristlõiked}}, et see välja lülitada. Ilma nende seadeteta analüüsitakse mudelit täpselt nagu varem.

## Armatuur, kombinatsioonid, kontroll

Anna iga lõigu katte, ülemiste, alumiste ja külgmiste varraste (või postikorvi) ning sidemete andmed, sea f′c, fy, fyt, K ja nihkuv või mittenihkuv raam. Määra koormusjuhtumitele nende liik, vajuta {{ui:Koosta kombinatsioonid}} (ASCE 7 §5.3.1) ja seejärel {{ui:Kontrolli betooni}}: iga element saab kasutusastme, mis värvitakse mudelil. Üle piiri olevad elemendid ja korruse nihe, mis ületab piiri, on loetletud {{ui:Probleemid}} all koos oma punktiga; klõpsa ühel neist, et element valida.

## Põrandad ja seismilised koormused

Plokis {{ui:Seismilised koormused}} võtab {{ui:Leia põrandad}} tasandid, kus kohtuvad kaks või rohkem talaga; igast saab jäik diafragma. {{ui:Võta kaalud juhtumitest}} loeb iga põranda seismilise kaalu juhtumitest, millele oled andnud teguri. Täida SDS, SD1, S1, R, Ie, Cd, TL, süsteem ja riskikategooria, seejärel {{ui:Koosta seismilised juhtumid}} (ASCE 7-22 12.8: periood, baaslõikejõud, jaotus korrustele üles ja 5 % juhuslik väänne). Korruse jõud ja nihkekontroll (12.12) ilmuvad pärast käivitamist. Sama periood ja korruse jäikus annavad sisendi maavärinale jaotises [Esita üleujutus, tuul või maavärin](topic:hazard-playback), kui valid allikaks analüüsiraami.

Plaadid ja betoonseinad muutuvad analüüsis plaatideks ning plokk {{ui:Plaadi armatuur}} arvutab nende vajaliku terase meetri kohta. Iga kontrolli üksikasjad on DetailCrafti samanimelises teemas.
