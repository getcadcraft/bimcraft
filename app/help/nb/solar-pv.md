---
title: Solcellefelt, skygge og energiutbytte
summary: Plasser solcellefelt på tak eller bakken, skyggelegg dem fra modellen, beregn årlig energi, dimensjoner strenger og lag enlinjedata. Alle inndata vises, og startmodulen og tapene er generiske.
keywords: sol, solceller, pv, fotovoltaisk, felt, modul, tak, skygge, utbytte, kwh, kwp, dimensjonering av strenger, omformer, enlinjeskjema, enkel linje, helning, asimut, radavstand
from: adf4aaf3
---

## Hva du gjør

Åpne **Solar PV**-panelet. Velg en takflate (helning og retning leses fra modellen), eller legg ut et bakkefelt med helning og retning. Modulene plasseres inni med tilbakeføringer og telles, og gir DC-effekten i kWp. Når feltet plasseres, skrives det inn i modellen som solenheter, som ett steg i Angre.

## Skygge, utbytte og strenger

- **Skygge** sender en stråle fra hver modul mot sola for typiske dager i hver måned, mot modellens egen geometri. Nabobygninger, parapeter og radene foran teller dermed med. Bare direkte sollys reduseres, og et delvis skygget felt taper effekt i samsvar med det.
- **Utbytte** gir kWh per måned og år, kWh per kWp og ytelsesforholdet. Solinnstrålingen kommer fra dine egne månedssummer på en horisontal flate hvis du skriver dem inn. Uten dem bruker panelet en øvre grense for klar himmel, og sier fra om det. **Hent klimadata fra NASA POWER** med en knapp på fanen Utbytte: den sender bare stedets breddegrad og lengdegrad, én gang, og beholder svaret på denne datamaskinen (kontrollert fra nettleseren 30. oktober 2026). PVGIS lar ikke en nettside lese svaret, så fanen gir en lenke som åpner PVGIS sine månedsdata for stedet i en ny fane. Lim inn det som vises i boksen, så fylles de tolv månedene inn.
- **Strenger** kontrollerer moduler per streng mot omformerens spenningsvindu på den kaldeste og varmeste dagen, og de parallelle strengene mot strømmen.
- **Enlinjeskjema** lager diagramdataene (felt, kombinerboks, frakobler, omformer, tavle, nett) med ledning- og sikringsdimensjoner fra faktorene du skriver inn. Det er data og en SVG. Electrical-tillegget i CadCraft kan plassere det som symboler.

Modul-, omformer-, tap- og ledningsfaktorene som følger med BimCraft, er generiske eksempler, merket i alle resultater. Skriv inn produsentens data og de normverdiene du prosjekterer etter, og la den som er ansvarlig for prosjektet, gå gjennom prosjekteringen.
