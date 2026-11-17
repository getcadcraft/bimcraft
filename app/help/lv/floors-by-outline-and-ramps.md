---
title: Grīdas jebkurā formā, atvērumi un rampas
summary: Zīmējiet grīdu vai pārsegumu pēc tā kontūras (balkons, konsole, laukums), izgrieziet tajā atvērumus un zīmējiet rampas ar to laukumiem.
keywords: grīda, pārsegums, kontūra, balkons, konsole, laukums, terase, grīdas atvērums, caurums, šahta, tukšums, rampa, nogāze, pieejama rampa, ratiņkrēslu rampa, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ko jūs darīsiet

Veidojiet grīdas, kas neseko telpām, piemēram, balkonu aiz sienām, un zīmējiet rampas starp līmeņiem.

## Zīmējiet grīdu pēc kontūras

1. Ieslēdziet {{ui:Zīmēšana}}, izvēlieties līmeni, tad {{ui:Būvējums}} › {{ui:Grīda pēc kontūra}}.
2. Rīku rindā izvēlieties veidu (betona pārsegums vai koka grīda), tās lietojumu (grīda vai laukums), biezumu un to, cik augstu tās augša atrodas virs līmeņa (0 = līmenī ar stāva grīdu; negatīva vērtība nozīmē zemāk).
3. Noklikšķiniet uz stūriem. Rīks piesaistās sienām, režģa līnijām un to krustpunktiem; turiet {{key:Shift}}, lai mala būtu taisnleņķa. Katras malas garums un laukums tiek rādīti, kamēr zīmējat. {{key:Backspace}} atceļ pēdējo stūri.
4. Lai pabeigtu, noklikšķiniet uz pirmā stūra vēlreiz, veiciet dubultklikšķi vai nospiediet {{key:Enter}}.

## Izgrieziet atvērumu

Noklikšķiniet uz grīdas (3D skatā vai uz tās kontūras plānā), tad sadaļā {{ui:Rekvizīti}} noklikšķiniet uz {{ui:Pievienot atvērumu}} un noklikšķiniet uz atvēruma stūriem grīdas iekšpusē, pabeidzot kā iepriekš. Grīdas {{ui:Rekvizīti}} uzskaita tās atvērumus, katru ar {{ui:Dzēst}}, un tās laukumu bez tiem.

## Zīmējiet rampu

1. Izvēlieties {{ui:Būvējums}} › {{ui:Rampa}}. Iestatiet tās platumu un to, vai tā ved **uz augšējo līmeni** vai **augšup par pacēlumu**, ko ierakstāt.
2. Izvēlieties, kā tā tiek iestatīta: **pēc slīpuma** (sākumā 1:12; rampa ir tik gara, cik pacēlums prasa) vai **pēc garuma** (otrais klikšķis nosaka garumu, un slīpums seko).
3. Noklikšķiniet uz rampas pamatnes (tās apakšējās malas vidus), tad noklikšķiniet virzienā uz augšu. Priekšskatījumā redzams tās garums, posmi un slīpums.

Pacēlums virs 30 inches (760 mm) tiek sadalīts posmos ar 5-foot (1525 mm) laukumu starp tiem. Šīs ir parastas plānošanas vērtības, nevis jūsu normatīvs: pārbaudiet noteikumus būvniecības vietā. Rampa, kas stāvāka par 1:12, ir atzīmēta savos {{ui:Rekvizītos}}.

## Ko jums vajadzētu redzēt

- Katra grīda, atvērums un rampa ir viens solis: {{key:Mod+Z}} to atsauc.
- Plānā zīmētas grīdas kontūra (atvērums ir šķērsots) un rampas kontūra, posmi, laukumi un bultiņa uz augšu ar tās slīpumu.
- Zīmētas grīdas {{ui:Rekvizīti}} (veids, lietojums, biezums, augša, laukums, atvērumi) un rampas (platums, augša, pacēlums, slīpums vai garums); {{key:Delete}} noņem jebko no tiem.
- Rampa uz augšējo līmeni seko tam līmenim, kad mainās tā augstums.
- IFC failā: zīmēta grīda ir pārsegums (IfcSlab, grīda vai laukums) ar izgrieztiem atvērumiem (IfcOpeningElement); rampa ir IfcRamp, kas sastāv no slīpiem posmiem (IfcRampFlight) un laukumu pārsegumiem, ar savu slīpumu un platumu.

:::note
Grīdas, kas zīmētas šādi, paliek tur, kur tās zīmējāt. Grīdas, kas veidotas ar {{ui:Grīda}}, seko telpām, kad sienas pārvietojas: skatiet [Telpas, grīdas, griesti un jumti](topic:floors-and-roofs).
:::
