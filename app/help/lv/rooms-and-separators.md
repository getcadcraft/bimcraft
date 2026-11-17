---
title: Telpas un telpu atdalītāji
summary: Izvēlieties telpu, lai to nosauktu un numurētu, un nolasiet tās laukumu, perimetru un tilpumu. Zīmējiet telpu atdalītāju tur, kur divas telpas saskaras bez sienas starp tām.
keywords: telpa, telpas, telpas atdalītājs, atdalīšanas līnija, IfcSpace, nosaukums, numurs, laukums, perimetrs, tilpums, atvērts plāns, sadalīt telpu, virtuve un dzīvojamā istaba, nav norobežots
from: d4c1d66b
---

## Ko jūs darīsiet

Nosauciet telpas, ko veido sienas, un sadaliet atvērtu telpu divās bez sienas.

## Kur atrodas rīki

- Lentes izkārtojumi: {{ui:Arhitektūra}} › **Telpa un laukums** › {{ui:Telpa}} un {{ui:Telpas atdalītājs}}.
- Klasiskais izkārtojums: zīmēšanas josla › izvēlne {{ui:Telpas}}.
- Jebkurš izvēlnes stils: komandas ir nosauktas Telpa un Telpas atdalītājs; komandu palete tās atrod.

## Soļi

1. Zīmējiet sienas. Katra slēgta sienu cilpa jau ir telpa: BimCraft to izveido, numurē un piešķir tai laukumu, kamēr jūs zīmējat.
2. Izvēlieties {{ui:Telpa}}. Pārvietojiet kursoru pa plānu: telpa zem kursora iezīmējas ar savu laukumu, perimetru un tilpumu.
3. Lai ātri nosauktu telpas, rindā vispirms ierakstiet {{ui:Nosaukums}} un {{ui:Numurs}}, tad noklikšķiniet telpā. Numurs nākamajai telpai palielinās par vienu (101, 102; A-09, A-10).
4. Vai vienkārši noklikšķiniet uz telpas: tā tiek atlasīta, un Rekvizīti rāda tās nosaukumu, numuru, laukumu, perimetru, tilpumu un atzīmi.
5. Lai sadalītu atvērtu telpu, izvēlieties {{ui:Telpas atdalītājs}} un noklikšķiniet divos punktos: no sienas līdz sienai vai no sienas līdz citam atdalītājam. Turpiniet klikšķināt ķēdei; {{key:Enter}}, {{key:Esc}} vai dubultklikšķis to beidz.

## Ko dara atdalītājs

- Tas norobežo telpas kā sienu bez biezuma. Abu telpu laukumi precīzi saskaitās līdz sākotnējai telpai.
- Telpa, kurā ir vecās telpas vidus, saglabā savu nosaukumu un numuru. Otra ir jauna.
- Atdalītājs, kas apstājas atklātā vietā un vienā galā neskar neko, neko nedala. Pagariniet to, un tas darbosies.
- Atdalītāja daļa, kas atrodas sienā, tiek ignorēta, tāpēc varat piesaistīties sienu centra līnijām.
- Atlasiet atdalītāju un nospiediet {{key:Delete}}, lai to noņemtu: abas telpas atkal kļūst par vienu. Atsaukšana to atjauno.

## Ja vietā, kur noklikšķiniet, nav telpas

Statusa rindā tas tiek norādīts: sienas tur nesaslēdzas. Aizveriet spraugu vai uzzīmējiet atdalītāju pāri tai. Nekas netiek noraidīts; vienkārši vēl nav slēgtas telpas.

## IFC

Telpa ir IfcSpace ar tās numuru (Name), nosaukumu (LongName) un Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Tilpums ir laukums, reizināts ar augstumu līdz līmenim virs tā.

Telpas atdalītājs ir IfcVirtualElement — IFC entītija robežai, kas nav uzbūvēta. Tam ir līnija un nav ķermeņa, tāpēc cita programma nelasa sienu un neskaita neko tā dēļ.

## Vēl nav izveidots

- Izliektie atdalītāji.
- Telpa, kas seko slīpiem griestiem: tilpums vienmēr ir laukums, reizināts ar līmeņa augstumu.
- Telpas robežu attiecības (IfcRelSpaceBoundary) netiek rakstītas ne sienām, ne atdalītājiem.

Skatiet arī [Telpu un laukumu atzīmes](topic:room-and-area-tags), [Laukumi un laukumu robežas](topic:areas-and-area-boundaries).
