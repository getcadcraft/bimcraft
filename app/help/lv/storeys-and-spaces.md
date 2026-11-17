---
title: Stāvu, telpu un malu rādīšana un paslēpšana
summary: Izslēdziet stāvus, lai redzētu ēkas iekšpusi, parādiet istabas un telpas un ieslēdziet vai izslēdziet malu līnijas.
keywords: stāvi, līmeņi, grīdas, paslēpt, izolēt, istabas, telpas, ifcspace, malas, redzamība, griezums
from: b838dcc0
---

## Ko jūs darīsiet

Apskatiet IFC modeļa iekšpusi, izslēdzot stāvus virs tā, kas jūs interesē. Pēc tam parādiet istabas un telpas un izslēdziet malu līnijas, lai izskats būtu tīrāks.

## Soļi: apskatiet vienu stāvu

1. Atveriet IFC modeli. Skatiet [Atvērt IFC modeli un apskatīt 3D](topic:open-ifc-model).
2. Atrodiet kreisajā pusē sarakstu {{ui:Stāvi}}. Augšējais stāvs ir pirmais, tāpat kā lasot griezumu no jumta uz leju.
3. Noņemiet atzīmi no jumta un visiem stāviem virs stāva, kuru vēlaties.
4. Noklikšķiniet uz {{ui:Augša}}, lai skatītu uz leju uz šo stāvu.
5. Atzīmējiet stāvus vēlreiz, lai tie atgrieztos.

## Ko vajadzētu redzēt

Katrs stāvs, no kura noņemat atzīmi, tūlīt pazūd kopā ar visu, kas tajā ir. Sarakstā ir tikai stāvi, kuros ir kaut kas redzams. Elementi, kas nav piešķirti nevienam stāvam, ir grupēti kā **Nav stāvā** saraksta apakšā; zemes elementi un daži mēbeļu gabali bieži nonāk tur.

## Soļi: parādiet istabas un telpas

1. Noklikšķiniet uz {{ui:Telpas}} rīkjoslā virs modeļa. Poga paliek nospiesta.
2. Apskatiet modeli: istabas un telpas parādās kā gaiši, caurspīdīgi tilpumi.
3. Noklikšķiniet uz telpas, lai labajā pusē izlasītu tās rekvizītus, piemēram, nosaukumu, numuru un laukumu.
4. Noklikšķiniet uz {{ui:Telpas}} vēlreiz, lai tās paslēptu.

Telpas, atverot modeli, tiek paslēptas, jo citādi tās pārklātu sienas un grīdas.

## Soļi: malas

1. Noklikšķiniet uz {{ui:Malas}}, lai izslēgtu plānās malu līnijas.
2. Noklikšķiniet vēlreiz, lai tās atkal ieslēgtu.

Ļoti lieliem modeļiem (vairāk nekā 1,5 miljoni trijstūru) poga ir pelēka ar norādījumu "Malas ir izslēgtas ļoti lieliem modeļiem". Tas ietaupa atmiņu.

## Biežākās kļūdas

- **Noņemot atzīmi no stāva, joprojām redzat daļas no tā.** Elements pieder tam stāvam, kuram to piešķīra eksportējošā programma. Augsta siena vai kāpnes bieži pieder tikai savam pamata stāvam, tāpēc tās paliek redzamas, kad augšējais stāvs ir paslēpts, vai pazūd kopā ar apakšējo stāvu.
- **Stāvu paslēpšana, lai redzētu iekšpusi.** Griezuma kaste bieži ir ātrāk: skatiet [IFC modeļa griešana ar griezuma plakni](topic:section-plane#a-section-box). Varat arī noņemt atzīmes {{ui:Modeļa koks}} rindās (skatiet [Orientēšanās modeļa kokā](topic:model-tree)).
- **Telpas noklikšķināšana caur sienu.** Klikšķis izvēlas tuvāko redzamo virsmu. Paslēpiet stāvu virs tā vai pārslēdzieties uz {{ui:Augša}} un tad noklikšķiniet.
- **Stāvu nosaukumi izskatās dīvaini.** BimCraft rāda faila saglabātos stāvu nosaukumus. Ja tajos ir "Līmenis 1" vai skaitlis, tas ir tas, ko eksportētājs ierakstīja.
