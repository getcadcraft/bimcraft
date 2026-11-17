---
title: Mahuvariandid kõrvuti
summary: Hoia mitut mahuvarianti samas mudelis, määra üks praegiseks, kontrolli seda koha ehitusjoonte ja servituutide vastu, too mahud ModelCraftist ja arenda valitud variant seinteks ja põrandateks.
keywords: mahud, mass, variant, variandid, variantide komplekt, skeem, kontseptsioon, kontseptsiooni disain, 2. etapp, alternatiivid, variantide võrdlus, praegune variant, hoone maht, lükka tõmba, modelcraft, civilcraft, brutopind, jalajälg, maht, arenda mahtu, servituut, kasutusõigus, ehitusjoon, tagasiaste
from: 69a01459
---

## Mida sa teed

Hoia kontseptsiooni mahuvariante ühes mudelis, mitte eraldi failides: mitu hoone mahtu kõrvuti, neist üks on **praegune variant**, teised hoitud võrdluseks.

Mahuvariant on hoone maht: ääris tõstetud kõrguseni koos mitme korrusega. See ei ole veel seinad. Võid hoida nii palju, kui tahad, grupeerituna **variantide komplektidesse** (ühe komplekti variandid on üksteise alternatiivid).

## Hoia variant

1. Ava {{ui:Ruumiprogramm mahtmudeliks}}, sisesta ruumiprogramm ja äärisjoon ning vali {{ui:Otsi variante}}.
2. Vali üks loetletud variantidest.
3. Jaotises {{ui:Mahuvariandid mudelis}} sisesta {{ui:Variantide komplekt}} nimi, kui soovid, ja vali {{ui:Hoia valitud variant}}.

Variant ilmub mudelisse hoone mahuna ja loendisse, koos oma korruste, jalajälje, brutopinna ja mahuga. Midagi ei ehitata. Hoia teine samamoodi.

Komplekti esimene variant on tema praegune variant. Iga samm on üks tagasivõtmise samm.

## Praegune variant

Iga komplekti üks variant on praegune. See tähendab kahte asja:

- **Selle korrused loevad hoone korrusepindadena.** Praegusel variandil on korruse kohta üks ruum, mis kannab selle korruse brutopinda, nii et kõik, mis loeb korruste pindu, näeb jõus olevat varianti ja mitte ühtegi teist.
- **Seda kontrollitakse koha vastu.** Kui see jääb krundipiirist välja, ehitusjoone kohale või servituudile, ilmub {{ui:Probleemid}}-sse hoiatus, mis seda nimetab. See on ainult hoiatus: midagi ei keelata. Mitte-praegused variandid ei ole kontrollitud.

Muuda praegust varianti, valides teisel variandil {{ui:Määra praegiseks}}.

{{ui:Peida mitte-praegused variandid}} peidab teised 3D-vaates. See kehtib ainult selle brauseri kohta ega salvestata faili.

## Mahud ModelCraftist

ModelCraftis {{ui:Ekspordi}} › {{ui:Mahud BimCraftile…}} saadab iga grupi või komponendi ühe variantina. BimCraft avab faili variantidega loetletuna.

Et need tuua juba avatud mudelisse, vali {{ui:Lisa mahuvariandid failist}} ja vali `.ifc`-fail. Selle mahud tulevad sisse variantidena ühes komplektis, ühe tagasivõtmise sammuga, ja seisavad seal, kus need modelleeriti. CivilCraftist pärit hoonemahtude fail töötab samamoodi.

Variant, mis on märgitud "(kuju lihtsustatud)", ei olnud ModelCraftis lihtne püstine plokk (ta astub tagasi, kaldub või ei ole suletud). Selle mass siin on tema aluse äär, tõstetud oma kõrgusele; selle korruste pindala ja maht on mõõdetud tahkest endast.

## Arenda valitud variant

Vali variandil {{ui:Arenda}}. See muutub tasanditeks (lisatud kuni tema korruste arvuni), seinteks tema äärise ümber igal korrusel ja põrandaplaadiks igal korrusel, ühes tagasivõtmise sammus. Variant lahkub loendist; teised variandid jäävad nagu olid. Katust veel ei ole.

{{ui:Nimeta ümber}} muudab variandi nime, {{ui:Eemalda}} võtab selle mudelist välja. Praeguse variandi eemaldamine teeb komplekti esimesest teisest variandist praeguse.

## Mida peaksid nägema

- Iga hoitud variant plokina 3D-vaates ja real loendis.
- "(praegune)" ühe variandi kõrval igast komplektist.
- Hoiatus {{ui:Probleemid}}-s, kui praegune variant ületab krundipiiri, ehitusjoone või servituudi.

## Hea teada

- IFC-failis on variant hoone elemendi proxy, mille omadusrühm `CadCraft_SiteMass` (selle variantide komplekt, variandi nimi ja see, kas see on praegune, on selles rühmas). Praeguse variandi korrused on tüüpi `MassingFloor` ruumid. Teised programmid loevad proxy'd üldise elemendina.
- Variandi hoidmine ei lisa kunagi tasandeid; selle arendamine lisab.
- Assistent saab loetleda hoitud variante, hoida ühe, määrata ühe praeguseks, nimetada ümber, arendada või eemaldada.
