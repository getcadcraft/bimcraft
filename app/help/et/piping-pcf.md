---
title: Saada toru pingeanalüüsi või isomeetria programmi ja loe tagasi (PCF)
summary: Kirjuta mudeli torulinad PCF-torukomponentide failina või loe PCF-fail pingeanalüüsi või isomeetria programmist ja joonista selle toru liinidena.
keywords: pcf, torukomponentide fail, torustiku pinge, pingeanalüüs, isomeetria, isomeetriad, eksport, import, torustik, terastoru, töö teisaldamine, muu tarkvara
from: 24f91355
---

## Mida sa teed

PCF on lihttekstifail, mida pingeanalüüsi ja isomeetria programmid loevad ja kirjutavad. See loetleb iga torujuhtme komponendid nende otspunktide ja nimiläbimõõtudega.

## Eksport

1. Vali torutööriist. Valikute rida näitab **Ekspordi PCF**.
2. Klõpsa sellel. Kirjutatakse kõik mudeli torulinad: sirge toru, põlved (90-kraadine pööre, muidu kõver), T-liitmikud koos harupunktiga, reduktorid ja ventiilid.
3. Fail kasutab millimeetreid. Nimiläbimõõdud on millimeetrites. Põlve keskpunkt on tema nurk, kus kaks haru kohtuvad.

PCF kirjutatakse terastoru otskeevisega torude jaoks. Teist materjali olev liin kirjutatakse samuti, terasest komponentide võtmetega, ja märgitakse Probleemide paneelil.

## Import

1. Vali torutööriist ja klõpsa **Impordi PCF…**, seejärel vali fail.
2. Sirgest torust kuni põlvede, kõverate, ventiilide ja flantsideni saab üheks liiniks praegusel tasandil. Suuruse muutus alustab uut liini. T-liitmiku haru saab omaks liiniks, mis algab T-liitmiku keskpunktist.
3. Mudel paneb oma liitmikud ise. Reduktoreid ja T-liitmikke ei kopeerita: need ilmuvad seal, kus kohtuvad erinevate suurustega liinid või haru.

:::note
Failis olevad kõrgused loetakse kõrgustena praeguse tasandi kohal. Koormused, toed ja pingeanalüüs ise ei ole PCF-failis ega tule kaasa.
:::

## Kontrolli, mis tuli kaasa

- Pikkus kokku torujuhtme kohta peaks vastama lähtefailile.
- Probleemide paneel loetleb iga asja ühe korra: põlve, mille keskpunkt ei ole mõlemast otsast võrdselt kaugel, toru ilma pikkuseta ja ava, mis ei ole standardsuurus.

## IFC-failis juba olev torustik

Kui IFC-fail on avatud, kirjutab **Ekspordi PCF** ka oma torusegmendid, liitmikud ja ventiilid sinu joonistatud liinide kõrvale. Segment saab oma otsad oma portidelt või oma keha otstelt. Liitmik ilma portideta jäetakse välja ja Probleemide paneel ütleb seda. Saad eksportida ainult IFC-st, kui mudelis ei ole joonistatud liine.

Impordil ei joonistata faili toesid, harujuhtmeliitmikke (olets), flantse, tihendeid ega korke. Probleemide paneel loetleb, mitu neist jäeti välja, nii et midagi ei kao vaikselt.
