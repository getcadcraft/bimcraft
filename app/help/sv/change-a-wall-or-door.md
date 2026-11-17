---
title: Ändra en vägg, dörr eller ett fönster
summary: Klicka på en ritad vägg, dörr eller ett fönster och ändra dess typ, storlek, höjd eller plats i Egenskaper, eller dra det i planen; varje ändring är ett steg som du kan ångra.
keywords: rätvinkla, rätvinklig, 90, rät vinkel, sned, vinkel, ortogonal, rumsstorlek, insida, utsida, mät från, flyttavstånd, angivet avstånd, krökt, båge, bågens höjd, radie, placeringslinje, justering, ändra, redigera, egenskaper, väggtyp, tjocklek, längd, höjd, sockelhöjd, topp, nivå, vänd, dörrstorlek, fönsterstorlek, fönsterbänk, avstånd, flytta, handtag, dra, ändra typ, flera
from: 63052d5d
---

## Vad du gör

Ändra det du ritade: välj en vägg, dörr eller ett fönster, skriv ett nytt tal i **Egenskaper** eller dra det i planen. Planen och 3D-vyn följer med, hörnen sammanfogas igen, och dörrar och fönster står kvar i sina väggar.

## Ändra en vägg

1. Med {{ui:Draw}} på och {{ui:Select}} på, klicka på väggen i planen (eller i 3D-vyn).
2. **Egenskaper** visar en ruta med väggens tal. Ändra ett och tryck på {{key:Enter}}:
   - **Väggtyp**: en annan av startertyperna. Tjockleken och skikten ändras med den.
   - **Tjocklek**: valfri tjocklek. Typen behåller sina övriga skikt och dess huvudskikt (reglarna eller blocket) tar skillnaden, till exempel "Exterior 2×6, 200 mm".
   - **Mät från**: **Mittlinje**, **Insida** eller **Utsida**. **Längd** och **Rumsstorlek** läses och anges från den. Utsida är vad planens mått visar.
   - **Längd**: väggens ände flyttar sig längs sin linje. Väggen som är sammanfogad i den änden flyttar sig vinkelrätt mot sig själv och behåller sin vinkel.
   - **Rumsstorlek** (när det finns en parallell vägg tvärs över rummet): skriv den storlek du vill ha. Denna vägg flyttar sig vinkelrätt och de sammanfogade väggarna sträcks för att följa med.
   - **Flytta vinkelrätt**: skriv hur långt väggen ska flyttas vinkelrätt mot sig själv: ett vanligt tal flyttar den ut, ett negativt tal in.
   - **Vinkel mot sammanfogad vägg**: vinkeln mot väggen som är sammanfogad vid dess start. Skriv 90 för att ställa den rätvinklig. En vägg som inte är sammanfogad med något visar **Riktning**, i grader från öst.
   - {{ui:Square up}}: vrider de väggar som är kopplade till denna tillbaka till räta vinklar, längs den riktning de flesta av deras längder går i. Det fungerar på hela det sammanhängande rummet eller layouten, oavsett vilken av dess väggar du väljer. En vägg som är mer än 10 grader från en rät vinkel står kvar, så en som satts till 45 grader är säker. Ett {{ui:Undo}} tar tillbaka allt.
   - **Vägghöjd**: **Upp till våningen ovanför** följer den nivån, **Upp till Nivå 3** (och valfri nivå längre upp) gör en vägg som går genom nivåerna mellan; att skriva en höjd anger då hur långt under eller över den nivån toppen ligger. **Fast höjd** behåller talet du skriver. **Går igenom** listar nivåerna en sådan vägg passerar: den ritas ljusare i deras plan, rum där stänger mot den, och dörrar och fönster kan placeras i den från dessa planer. Den flyttas och formas på nivån där den börjar.
   - **Sockelhöjd**: hur långt över nivån väggen börjar. Dess topp står kvar där den var.
   - **Utsida**: {{ui:Flip}} lägger utsidans skikt på den andra sidan.
   - **Placeringslinje**: **Mittlinje**, **Utsida**, **Insida**, **Vänster sida** eller **Höger sida**. Att ändra den flyttar ingenting. Senare, när väggen blir tjockare (genom typ eller **Tjocklek**) eller dess utsida vänds, står placeringslinjen kvar och väggen växer eller vänds runt den. En rak vägg som möter den i ett hörn följer med, så att hörnet fortfarande sluts. Den valda väggens placeringslinje ritas streckad i planen. Välj flera väggar för att ange den för alla.
   - **Bågens höjd** (krökta väggar): hur långt mitten böjer sig från en rak linje. 0 gör den rak; ett negativt värde böjer den åt andra hållet. Radien visas bredvid.
3. Varje ändring är ett steg i **Ändringar**; {{ui:Undo}} tar tillbaka den.

## Dra en vägg i planen

När en vägg är vald visar den tre handtag: en kvadrat i varje ände och en cirkel i mitten.

- Dra en ände för att göra väggen längre, kortare eller vrida den. Den fångar som verktyget Vägg, och fäster vinkelrätt mot väggen som är sammanfogad i dess andra ände när du är inom 3 grader; {{key:Shift}} håller den på planens axlar.
- Väggarna som är sammanfogade i änden du drar behåller sin vinkel: deras ändar glider längs sina egna linjer för att möta väggens nya linje, så inget blir lutande. Håll {{key:Mod}} för en fri dragning (den sammanfogade väggens ände följer med din, och den väggen vrids), eller {{key:Alt}} för att bryta sammanfogningarna vid denna vägg.
- Dra mitten för att flytta hela väggen vinkelrätt mot sig själv, oavsett åt vilket håll du drar. Dess hörn glider längs de sammanfogade väggarna, så att de väggarna behåller sin vinkel.
- Håll {{key:Mod}} medan du drar mitten för en fri flyttning, när du verkligen vill bryta vinkeln. {{ui:Square up}} för tillbaka den.
- Medan ett handtag hålls, skriv ett avstånd och tryck på {{key:Enter}} (eller släpp): väggen går exakt så långt, på det sätt du drog. {{key:Esc}} avbryter flytten.
- En vald krökt vägg visar handtag i sina ändar och ett runt handtag mitt i bågen. Dra det runda handtaget för att böja den.
- Dörrar och fönster står kvar i väggen. En vägg som är för kort för det den håller avvisas med "Den ryms inte i den väggen."

## Ändra en dörr eller ett fönster

1. Klicka på dörren eller fönstret i planen.
2. I **Egenskaper**: **Typ** (en annan dörr eller ett annat fönster av samma slag), **Bredd**, **Höjd**, **Fönsterbänk** (fönster), **Från start** och **Från slut** (avståndet från varje ände av väggytan till dess kant), **Gångjärn** {{ui:Flip}} (dörrar med ett blad och fönster med vridfönster; skjut-, fick-, lada- och vikdörrar visar **Öppnas mot** i stället; fasta, hängda och bildfönster samt dubbeldörrar har inga), och **Slår upp mot** (dörrar) eller **Karmsida** (fönster) {{ui:Flip}}.
3. Eller dra det längs sin vägg, eller till en annan vägg: se [Dörrar och fönster](topic:doors-and-windows).

## Ändra flera samtidigt

Välj flera väggar (eller flera dörrar, eller flera fönster) med {{key:Shift}}+klick eller {{key:Mod}}+klick. **Egenskaper** erbjuder det de har gemensamt: **Ändra typ…**, höjden, storleken. En ändring sätter alla, och ett {{ui:Undo}} tar tillbaka allt.

## Bra att veta

- Talen visas i de {{ui:Units}} som valts i verktygsfältet.
- Väggar, dörrar och fönster från andra program visar sina IFC-data i **Egenskaper** som förut, utan den här rutan.
