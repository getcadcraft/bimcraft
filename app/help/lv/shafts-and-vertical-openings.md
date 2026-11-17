---
title: Šahtas un atveres caur grīdām
summary: Šahta ir viena kontūra, kas griež katru grīdu, griestus un jumtu starp diviem līmeņiem. Vertikāla atvere griež vienu no tiem. Sienas atvere griež sienu.
keywords: šahta, lifta šahta, liftu šahta, kāpņu atvere, stāvvads, vertikāla atvere, grīdas atvere, griestu atvere, jumta atvere, jumta logs, caurums grīdā, sienas atvere, IfcOpeningElement, atskaitījums, neto laukums
from: 8e9e1641
---

## Ko jūs darīsiet

Izgriezt liftu šahtu caur ēku ar vienu skici, izgriezt caurumu vienā grīdā un nolasīt, cik no laukumiem tika atņemts.

## Kur atrodas rīki

- Lentes izkārtojumi: {{ui:Arhitektūra}} › **Atvere** › {{ui:Šahta}}, {{ui:Vertikālā atvere}} un {{ui:Sienas atvere}}.
- Klasiskais izkārtojums: Zīmēšanas josla › izvēlne {{ui:Telpas}} (Šahta, Vertikāla atvere) un › izvēlne {{ui:Sienas}} (Sienas atvere).

## Šahta

1. Atveriet to līmeņa stāvplānu, kurā šahta sākas. Izvēlieties {{ui:Šahta}}.
2. Rindā izvēlieties {{ui:Pamata līmenis}} un {{ui:Augšējais līmenis}}, kā arī nobīdes, ja tā sākas vai beidzas virs vai zem tiem.
3. Noklikšķiniet uz kontūras stūriem. Noklikšķiniet uz pirmā stūra vēlreiz, veiciet dubultklikšķi vai nospiediet {{key:Enter}}, lai pabeigtu.
4. Katra grīda, griesti un jumts starp abiem augstumiem tiek izgriezti. Statusa rindā parādīts, cik.

Šahta ir viens objekts. Atlasiet tās kontūru jebkurā līmenī, ko tā šķērso: Īpašībās ir tās nosaukums, līmeņi un nobīdes, ko tā griež, un izgrieztais laukums. Mainiet to, un katra atvere seko. Dzēsiet to, un katra atvere pazūd. Katrs ir viens atsaukšanas solis.

Tā turpina griezt: grīda, kas vēlāk izveidota starp tās līmeņiem, tiek izgriezta bez pieprasījuma, un grīda, ko jūs dzēšat, tiek atbrīvota no tās.

Grīda, uz kuras stāv šahta, netiek izgriezta (tās augša ir pamats). Lai griezt arī to, dodiet pamatam negatīvu nobīdi. Lai šahta izietu caur jumtu, dodiet augšai pozitīvu nobīdi.

## Vertikāla atvere

1. Izvēlieties {{ui:Vertikālā atvere}}. Rindā izvēlieties, ko griezt: grīdu, griestus vai jumtu.
2. Noklikšķiniet uz kontūras stūriem un pabeidziet kā iepriekš.
3. Šī līmeņa grīda, griesti vai jumts zem kontūras tiek izgriezts. Tas pieder tikai vienam elementam: dzēšot grīdu, atvere iet kopā ar to.

## Sienas atvere

{{ui:Sienas atvere}} ir rīks no [Veidot sienu](topic:wall-shape): noklikšķiniet uz sienas plānā vai uz diviem stūriem tās virsmā 3D.

## Daudzumi

Pēc grīdu mērīšanas noteikuma elementa neto laukums ir tā bruto laukums mīnus tas, kas no tā izgriezts. Šahta vai vertikāla atvere ir atskaitījums katrai grīdai un griestiem, ko tā griež; grīdu un apdares tabulas un IFC daudzumi rāda tos pašus skaitļus. Uz jumta atskaitījums ir jumta virsmas laukums: plānā laukums, dalīts ar slīpuma kosinusu.

Kontūra, kas karājas pāri malai, atskaita tikai to daļu, kas atrodas uz elementa.

## Ja nekas netiek griezts

Šahta, kurai nekas nestāv ceļā, joprojām tiek izveidota, un par to tiek paziņots: tā griezīs to, kas tur tiks uzbūvēts vēlāk. Vertikālai atverei vajag kaut ko zem sevis; ja nekā nav, statusa rindā par to tiek paziņots un nekas netiek izveidots.

## IFC failā

Katrs griezums ir IfcOpeningElement ar IfcRelVoidsElement līdz elementam, ko tas griež, tāpēc jebkura IFC programma parāda caurumu. Jumts tiek griezts pa katru virsmu. Pati šahta ir IfcGroup no tās atverēm.

## Vēl nav izveidots

- Izliektas kontūras.
- Šahtas sienas: zīmējiet tās ar Sienas rīku.
- Kontūras rediģēšana, velkot tās stūrus (mainiet to Īpašībās vai dzēsiet un skicējiet vēlreiz).
- Uzzīmētas grīdas paša Īpašības rāda tikai tās laukumu, atskaitot tās pašas atveres; tabulas un IFC daudzumi ietver arī šahtas.

Skatiet arī [Telpas un telpu nošķirtāji](topic:rooms-and-separators).
