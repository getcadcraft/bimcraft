---
title: Á netinu og án nettengingar
summary: Hvað BimCraft sækir af vefnum, hvernig Vista til notkunar án nettengingar gerir að IFC-líkön og DWG-teikningar opnast án tengingar, og hvers vegna ekkert sem þú opnar er nokkurn tíma hlaðið upp.
keywords: án nettengingar, á netinu, internet, tenging, ekkert net, flugvél, vettvangsheimsókn, vista til notkunar án nettengingar, tilbúið án nettengingar, upphleðsla, persónuvernd, wasm, webassembly, IFC-vél, dwg, ský
from: 39e5c7eb
---

BimCraft les skrárnar þínar inni í vafraflipanum. Opnun, skoðun, breyting og vistun sendir aldrei skrárnar þínar neitt, hvorki á netinu né án þess. [Vinna án nettengingar](common:offline) lýsir afritum án nettengingar í öllum forritum; þessi síða fjallar um það sem er sérstakt við BimCraft.

## Hvað BimCraft sækir af vefnum

| Hluti | Hvenær hann hleðst án afrits án nettengingar | Stærð |
|---|---|---|
| Forritið sjálft, með 3D-skoðaranum og kóða IFC-vélarinnar | Þegar þú opnar BimCraft | Nokkur megabæti |
| WebAssembly-hluti IFC-vélarinnar | Fyrsta IFC-skráin sem þú opnar í flipanum: „Ræsi IFC-vélina…“ | Um 1,6 MB |

DWG- og DXF-teikningar, verkefnaskrár og fjölskylduskrár og möppur þurfa ekkert aukalega: lesararnir þeirra eru hluti af forritinu.

## Vista BimCraft til notkunar án nettengingar

1. Opnaðu BimCraft meðan þú ert á netinu.
2. Smelltu á {{ui:Vista til notkunar án nettengingar}} á forritastikunni efst.
3. Horfðu á hnappinn telja upp: „Vistum 40 af 212“, til dæmis. Afrit BimCraft er um 11 MB, því það inniheldur IFC-vélina.
4. Bíddu eftir {{ui:Tilbúið án nettengingar}}.

Þegar hann segir {{ui:Tilbúið án nettengingar}} opnast IFC-líkön, DWG- og DXF-teikningar, verkefnaskrár, möppur og þessi hjálp án tengingar. Þú þarft ekki að opna IFC- eða DWG-skrá fyrst til að „hita upp“ lesarana.

Til að uppfæra eða fjarlægja afritið smellirðu á {{ui:Tilbúið án nettengingar}} og velur {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}.

## Hvað hnappurinn segir

| Hnappur | Þýðir |
|---|---|
| {{ui:Vista til notkunar án nettengingar}} | Ekkert afrit án nettengingar í þessum vafra ennþá. Smelltu til að vista eitt |
| „Vistum *n* af *m*“ | Verið er að vista; hafðu flipann opinn þar til vistun lýkur |
| {{ui:Tilbúið án nettengingar}} | Vistað. Sveimaðu til að sjá hvenær; smelltu fyrir valmyndina |
| {{ui:Ekki tókst að vista}} | Sumar skrár sóttust ekki. Athugaðu tenginguna og smelltu til að reyna aftur. Síðasta góða afrit, ef eitthvað er, er varðveitt |
| {{ui:Notkun án nettengingar er ekki í boði}} | Þessi gluggi getur ekki geymt afrit án nettengingar (einkagluggi eða stýrð tölva). Sjá [Vinna án nettengingar](common:offline) |

:::offline
Þú ert án nettengingar.

- Ef hnappurinn segir {{ui:Tilbúið án nettengingar}}, opnast allar gerðir skráa eins og venjulega.
- Ef ekki, virkar aðeins það sem þessi flipi hefur þegar hlaðið: lesari sem aldrei hlóðst í þessum flipa getur ekki ræst, og opnun þeirrar tegundar skráa sýnir villu frá vafranum í stöðulínunni. Ekki endurhlaða flipann fyrr en þú ert aftur á netinu.
:::

## Það sem þarf aldrei tengingu

Þegar BimCraft er opið í flipanum virka þessi atriði án tengingar, jafnvel án vistaðs afrits:

- Lesa verkefnaskrár og fjölskylduskrár og athuga möppur.
- Velja hluti, lesa eiginleika og breyta IFC-gildum í líkani sem þegar er opið.
- {{ui:Vista sem IFC}} og {{ui:Sækja CSV}}: hvort tveggja eru niðurhöl gerð í flipanum.

## Það sem er ekki í boði ennþá

- **Skýjavistun.** Skrár eru vistaðar á tölvuna þína eingöngu.

Sjá [Hvert skrárnar þínar fara](common:your-files).
