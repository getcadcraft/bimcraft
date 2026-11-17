---
title: Daudzumu summēšana, elementu saraksts un telpu specifikācija
summary: Saskaitiet elementus un summējiet to garumus, laukumus, tilpumus vai jebkuru skaitlisku rekvizītu, grupētus pēc jebkura rekvizīta; vai saņemiet vienu rindu katram elementam; vai sastādiet telpu specifikāciju ar laukumiem un tilpumiem. Katru var lejupielādēt kā CSV.
keywords: daudzums, daudzumi, apjomu aprēķins, kopsummas, summa, specifikācija, daudzumu saraksts, boq, qto, csv, grupēt pēc, skaits, garums, laukums, tilpums, telpas, telpu specifikācija, laukumu specifikācija, elementu saraksts
from: e2e7210c
---

## Ko jūs darīsiet

Iegūstiet kopsummas no modeļa: sienu garumus pa stāviem, durvju skaitu pēc tipa, plākšņu tilpumu pēc materiāla, katras zonas izmaksas.

## Soļi

1. Atveriet IFC modeli.
2. Kreisajā panelī atveriet {{ui:Daudzumu kopsummas}}.
3. Sadaļā {{ui:Skaits}} izvēlieties {{ui:Visi elementi}} vai tikai atlasītos.
4. Zem {{ui:Grupēt pēc}} izvēlieties rekvizītu, piemēram, {{ui:Klase}}. Noklikšķiniet uz {{ui:Pievienot grupu}}, lai sadalītu tālāk, līdz trim, piemēram, pēc {{ui:Stāvs}}.
5. Zem {{ui:Saskaitīt}} atzīmējiet skaitļus, ko summēt. Modeļa daudzumu kopas sākumā ir atzīmētas.
6. Noklikšķiniet uz {{ui:Lejupielādēt CSV}}, lai atvērtu tabulu izklājlapā.

## Ko jums vajadzētu redzēt

- Rinda katrai grupai ar to, cik elementu tā satur, un katru kopsummu, kā arī kopējā rinda.
- Elementi bez vērtības tiek saskaitīti, bet neko nepievieno. Tad CSV pievieno kolonnu "izlaisti" blakus kopsummai, lai redzētu, cik to ir.
- Skaitļi ir faila vienībās, tādi, kādus tos fails saglabā, bieži milimetros garumiem.

## Viena rinda katram elementam vai telpas

Mainiet {{ui:Rādīt}}:

- **Viena rinda katram elementam**: katrs elements savā rindā ar rekvizītiem zem {{ui:Kolonnas}} un skaitļiem zem {{ui:Saskaitīt}}. CSV sākas ar katra elementa GlobalId. Noklikšķiniet uz pirmās vērtības rindā, lai atlasītu šo elementu.
- **{{ui:Telpas}}**: katra telpa ar tās numuru, nosaukumu, stāvu, laukumu un tilpumu, kā arī to kopsummas. Laukumi un tilpumi nāk no telpas daudzumiem, kā tos fails norāda. Ja failā tādu nav, tie tiek izmērīti no telpas formas m² un m³ un rādīti slīprakstā; CSV norāda, kurš ir kurš.

## Tālāk

- [Atrast elementus pēc klases, nosaukuma vai rekvizīta](topic:find)
- [Krāsot elementus pēc rekvizīta](topic:color-by-property)

## Infrastruktūra (IFC 4.3)

Atlasiet **Infrastruktūra (IFC 4.3)** skatu sarakstā, lai redzētu ceļus, dzelzceļus, tiltus un jūras būves, summētus pa klasēm un tipiem, ar garumu, laukumu un tilpumu, ko fails pats norāda. Daudzumu, ko fails nenorāda, atstāj tukšu, nekad neaprēķina. **Nosūtīt infrastruktūras daudzumus uz TakeoffCraft** saglabā `.quantities.json` failu, ko TakeoffCraft atver kā tipizētus daudzumus.
