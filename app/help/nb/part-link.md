---
title: Send et element til PartCraft og ta det tilbake
summary: Velg en støtte, et beslag, et rekkverk eller et stykke utstyr, tegn det som en del i PartCraft med bygningen rundt, og godta den nye formen tilbake i modellen.
keywords: partcraft, del, send, lenke, element, støtte, beslag, gjerde, rekkverk, utstyr, design, rundtur, godta, endret, delelenker
from: 4ce2f449
---

## Oppgave

Tegn ett element i bygningen som en del: send det til PartCraft, endre det der (klipp ut, legg til, bor, endre størrelse), og før den nye formen tilbake inn i modellen.

## Trinn

1. Velg ett element i modellen: et generisk element, utstyr, en søyle, en bjelke, et rekkverk eller møbler.
2. Velg {{ui:Delelenker}} på verktøylinjen, og deretter {{ui:Send til PartCraft}}. PartCraft åpnes i en ny fane med elementet som en del. Elementene innenfor 3 m tegnes i grått ved siden av, slik at delen kan tegnes på plass. De kan ikke endres der.
3. Endre delen i PartCraft. Velg der {{ui:Fil}} › {{ui:Eksporter}} › {{ui:Lagre tilbake til BimCraft}}. Det kan lagres tilbake så ofte som ønskes.
4. Tilbake i BimCraft viser knappen {{ui:Delelenker}} et antall, og kortet lister elementet som {{ui:Endret i PartCraft}}, med størrelses- og volumendringen i ord.
5. Velg {{ui:Vis}} for å se på det, og deretter {{ui:Godta}} for å gi elementet den nye formen, eller {{ui:Behold min}} for å la det være slik det var.

## Resultat

- Godtak er ett steg som kan angres. Elementet beholder plassen, GlobalId, type, materiale og egenskaper. Bare selve geometrien erstattes.
- Elementet får et egenskapssett {{ui:CadCraft_PartLink}} med lenken, statusen og revisjonen.
- {{ui:Send på nytt}} åpner det samme elementet i PartCraft igjen, på samme lenke.

## Greit å vite

- Vegger, dekker, tak, dører, vinduer, trapper, ramper og rom tegnes av bygningsverktøyene fra en kontur og bygges om etter hver endring. En kropp fra et annet program ville blitt overskrevet, så disse avvises med en begrunnelse.
- Formen kommer tilbake som et nett (en IFC-tessellering), ikke som delens funksjoner. Delens historikk blir værende i PartCraft.
- Hvis elementet endret seg i modellen etter at det ble sendt, sier kortet fra om det før du godtar: godtak erstatter disse endringene.
- Ingenting lastes opp. De to programmene er sider på ett nettsted og sender elementet mellom seg i denne nettleseren. Begge må være åpne i samme nettleser.
- Elementet må lukke seg til et volumlegeme i PartCraft. Et element med store åpne hull i formen avvises der, med antallet åpne kanter.
- For å godta må modellen som holder elementet være den aktive.
