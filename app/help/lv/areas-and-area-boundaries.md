---
title: Laukumi un laukumu robežas
summary: Izmēriet bruto ēkas platību vai nomājamo platību robežlīniju iekšienē, ko zīmējat vai ņemat no sienām, un uzskaitiet laukumus specifikācijā.
keywords: laukums, laukumi, laukuma robeža, laukuma shēma, bruto ēkas platība, bruto stāvu platība, GFA, nomājamā, laukumu plāns, laukumu specifikācija, sienu atlase, nav noslēgts
from: c79f96d2
---

## Ko jūs darīsiet

Zīmējiet laukumu shēmas robežas, izvietojiet laukumus tajās un nolasiet kopsummas.

## Kur atrodas rīki

- Lentes izkārtojumi: {{ui:Arhitektūra}} › **Telpa un laukums** › {{ui:Laukums}} un {{ui:Laukuma robeža}}.
- Klasiskais izkārtojums: rīkjosla {{ui:Zīmēšana}} › izvēlne {{ui:Telpas}}.

## Soļi

1. Izvēlieties {{ui:Laukuma robeža}}. Rindā izvēlieties {{ui:Shēma}}: Bruto ēka vai Nomājamā. Katrai shēmai ir savas robežas.
2. Izvēlieties, kā veidot līnijas laukā {{ui:Izveidot ar}}:
   - **Zīmēt**: noklikšķiniet punktu pēc punkta.
   - **Atlasīt sienas: centra līnija**: noklikšķiniet uz sienas, un tās centra līnija ir robeža.
   - **Atlasīt sienas: noklikšķinātā virsma**: noklikšķiniet uz sienas tajā pusē, kuru vēlaties; šī virsma ir robeža. Bruto ēkas platībai noklikšķiniet uz ārējo sienu ārpuses.
3. Izvēlieties {{ui:Laukums}}. Izvēlieties to pašu shēmu, ierakstiet nosaukumu, numuru vai tipu, ja vēlaties, un noklikšķiniet robežu iekšpusē.
4. Laukums tiek izmērīts uzreiz. Atlasiet to, lai rekvizītos mainītu tā nosaukumu, numuru vai tipu.

## Kas seko kam

- Robeža, kas veidota, atlasot sienu, seko šai sienai: pārvietojot sienu, laukums tiek izmērīts atkārtoti tajā pašā solī.
- Robeža, ko jūs uzzīmējāt, paliek tur, kur to zīmējāt.
- Sienu virsmas, kas saskaras stūrī, arī tur saskaras, tāpēc četras atlasītas sienas noslēdz laukumu bez spraugām.
- Laukumu robežas rādās plānā, kamēr rokā ir telpas vai laukuma rīks, tāpēc tās citādi neaizgrūž plānu.

## Ja robežas neaizveras

Laukums tik un tā tiek novietots. Tam rakstīts **Nav noslēgts**, un tas neko neizmēra, kamēr robežas ap to neaizveras. Tas ir ieteikums: nekas netiek noraidīts.

## Specifikācija

Kreisais panelis › {{ui:Specifikācijas}} › **Laukumi**: shēma, numurs, nosaukums, tips, līmenis, laukums un perimetrs, ar kopsummu. Klikšķis uz rindas atlasa laukumu. {{ui:Lejupielādēt CSV}} dod to pašu tabulu.

## IFC

Laukums ir IfcSpace bez ķermeņa: PredefinedType GFA bruto ēkas shēmai, USERDEFINED ar ObjectType Rentable nomājamai. Tam ir GrossFloorArea un GrossPerimeter, bet nav neto platības, tāpēc to nesajauc ar telpu. Robeža ir IfcVirtualElement.

## Vēl nav izveidots

- Savas shēmas (tikai Bruto ēka un Nomājamā).
- Krāsu aizpildījumi pēc laukuma tipa.
- Noteikumi, kas novieto robežu jūsu vietā, piemēram, "līdz stikla līnijai".

Skatiet arī [Telpas un telpu atdalītāji](topic:rooms-and-separators), [Telpu un laukumu marķējumi](topic:room-and-area-tags).
