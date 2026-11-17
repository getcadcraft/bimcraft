---
title: Seinte all olevad vundamendid
summary: Pane hoone alla ühe klõpsuga plaat maapinnale, vundamendiseinad koos plaadiga, madal alusruum või keldrikorrus; vundamendi talad arvutatakse seinte ja korruste arvu järgi ning vundament järgib seinte nihutamist.
keywords: vundament, vundamendi tald, plaat maapinnal, paksendatud serv, monoliitplaat, vundamendisein, madal alusruum, alusruum, keldrikorrus, keldriseinad, külmumine, betoon, talla laius
from: c0e20172
---

## Mida teete

Anna hoonele vundament, mis vastab selle seintele. BimCraft järgib seinte välisserva, arvutab vundamenditalad seinatüübi ja nende peal seisvate korruste arvu järgi ning teeb vundamendi uuesti iga kord, kui seinad muutuvad.

## Lisa vundament

1. Korrusel, mille seinad sellel seisavad (tavaliselt esimesel), ava {{ui:Versioon}} ja vali {{ui:Vundament}}.
2. Vali liik:
   - **Plaat maapinnal**: 4" betoonplaat, mille ülaosa on põrand, seinte all paksendatud servaga.
   - **Vundamendiseinad ja plaat**: vundamendiseinad kuni põrandani vundamenditaladel, seinte sees plaat.
   - **Madal alusruum**: vundamendiseinad, mis lõpevad põrandakonstruktsiooni all, vundamenditaladel, ilma plaadita.
   - **Keldrikorrus**: täiskõrgusega vundamendiseinad vundamenditaladel koos keldriplaadiga, põrandakonstruktsiooni all.
3. Osuta hoone sisse: vundamenditalad kuvatakse katkendjoonena koos oma suurusega. Klõpsa.

Klõpsamine hoonel, millel on juba vundament, valib selle, nii et saad seda muuta, selle asemel et lisada teine.

## Muuda seda

Vali vundament (klõpsa hoone sees tööriistaga {{ui:Vundament}} või klõpsa selle mõnda osa 3D-vaates või mudelipuus) ja muuda seda aknas **Omadused**: liiki, talla laiust ja sügavust, kui sügavale talla alumine külg ulatub, seina paksust, kui kaugel põrandast seinad lõpevad, keldrikõrgust ja plaadi paksust. Iga muudatus on üks tagasivõtmise samm.

Suurused, mis on märgitud **automaatne**, tulenevad seintest: tallad on 12", 15" või 23" laiad ühe, kahe või kolme korruse puhul plaadil või vundamendiseintel, 18", 22" või 27" madalal alusruumil või keldril ning 4" laiemad müüritise- või betoonseinte all. Kirjuta suurus, et määrata oma väärtus; kirjuta `0`, et minna tagasi automaatsele.

:::warning
Automaatsed suurused on märgistatud vaikeväärtused tavalistele kergkarkassmajadele, mitte arvutused. Projekteerija või insener kontrollib talasid, sügavusi ja seinu pinnase, külmumissügavuse ja koormuste järgi.
:::

## Mida salvestatakse

Vundament salvestatakse IFC-elemendi koostuna („Foundation”), mis koosneb vastavalt oma liigile talast (või plaadi paksendatud servast), vundamendiseinast ja plaadist, kõik betoonist, igaüks oma kogustega: pikkused, laiused, kõrgused, pindalad ja ruumalad, valmis kogusteks.

## Hea teada

- Seinte liigutamine, lisamine või kustutamine teeb nende all oleva vundamendi uuesti; kui joonistad seinad ülemisele korrusele, laienevad allpool olevad tallad lisakorruse jaoks.
- {{key:Delete}} eemaldab valitud vundamendi koos kõigi osadega.
- Kui hoone pinnas on mudelis (vt [Krundi maapind, ehitusalus ja kattumine](topic:terrain)), astuvad madalad vundamendiseinad ja alusruumi talad sellega kaasa 8" sammudega.
- Siseseinte all olevaid talasid veel ei looda.
