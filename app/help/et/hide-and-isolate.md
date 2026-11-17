---
title: Elementide peitmine, isoleerimine ja läbipaistvaks muutmine
summary: Valige mitu elementi, peitke need, näidake ainult neid või näidake neid koos kõige muuga läbipaistvana, seejärel tooge kõik tagasi.
keywords: peida, isoleeri, läbipaistev, läbipaistvus, varjuline, röntgen, näita kõiki, peitmise tühistamine, mitme valimine, Ctrl klõps, Shift klõps, nähtavus
from: 97e98b8c
---

## Mida teete

Puhastage vaade selleni, mida vaatate: peitke elemendid, mis on teel, näidake ainult neid, mille valisite, või hoidke kõik ülejäänud ekraanil õrna piirjoonena, et teaksite endiselt, kus olete.

## Sammud

1. Avage IFC-mudel. Vt [Avage IFC-mudel ja vaadake 3D-vaates ringi](topic:open-ifc-model).
2. Klõpsake elemendil, et see valida. Mitme valimiseks hoidke all {{key:Mod}} või {{key:Shift}} ja klõpsake igal elemendil. Valitud elemendil sel viisil klõpsates see valikust eemaldub.
3. Avage tööriistaribal {{ui:Näita}} ja valige, mida teha, või vajutage selle klahvi:
   - {{ui:Peida}} ({{key:H}}) peidab valitud elemendid.
   - {{ui:Isoleeri}} ({{key:I}}) näitab ainult valitud elemente.
   - {{ui:Läbipaistev}} ({{key:T}}) näitab valitud elemente nagu nad on ning kõike muud läbipaistvana.
4. Klõpsake samas menüüs {{ui:Näita kõiki}} või vajutage {{key:Shift+H}}, et näidata kõiki elemente uuesti.
5. Et lõigata ära kõik valitud elementide ümbrus, klõpsake samas menüüs {{ui:Lõikekast valiku ümber}} või vajutage {{key:Shift+X}}. Vt [Lõigake IFC-mudel lõiketasandiga](topic:section-plane).

## Mida peaksite nägema

- Kui on valitud mitu elementi, ütleb {{ui:Omadused}}, kui palju ja loetleb need klasside järgi. Klõpsake ühel eraldi, et näha selle omadusi.
- Peidetud elemente ei saa valida: klõps tabab seda, mis on nende taga.
- Läbipaistvaid elemente ei saa samuti valida, nii et saate klõpsata läbi seinte isoleeritud elemendini.
- Servad peituvad koos elemendiga ning muutuvad koos sellega õrnaks.
- Peitmine, isoleerimine ja läbipaistvus jäävad samaks, kui te muudate, paigutate teegi üksusi või lõikate mudelit lõiketasandiga. Teise mudeli avamine näitab kõike uuesti.

## Levinud vead

- **Menüüelemendid on hallid.** Midagi ei ole valitud. Klõpsake esmalt elemendil; hoidke hiirt elemendil, et lugeda, miks see ei saa toimida.
- **Isoleeritud seina, mille olin peitnud.** Isoleerimine näitab täpselt seda, mille valisite, peidetud või mitte.
- **Terve korrus on puudu.** See on loend {{ui:Korrused}}, mitte {{ui:Näita kõiki}}: märkige korrus uuesti.

## Järgmised

- [Näita ja peida korruseid, ruume ja servi](topic:storeys-and-spaces)
- [Lõigake IFC-mudel lõiketasandiga](topic:section-plane)
