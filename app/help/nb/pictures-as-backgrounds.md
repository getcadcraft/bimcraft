---
title: Legg et bilde under planen
summary: Plasser et PNG-, JPEG- eller WebP-bilde (en skannet plan, en skisse, et situasjonsfoto, et flyfoto) under et nivås plan eller på et vertikalt plan. Skaler det med to punkter, flytt, roter, dim og lås det, se det i 3D og i plan-PDF-en, og behold det sammen med modellen i en pakke.
keywords: bilde, illustrasjon, bakgrunn, PNG, JPEG, WebP, skanning, skisse, foto, flyfoto, situasjonsplan, målestokk, dekkevne, lås, underlag, spore
from: e3c78d1f
---

## Plasser et bilde

Slå på {{ui:Tegn}}, gå til nivået, og velg {{ui:Bilde}} i menyen {{ui:Bygg}}. Velg deretter {{ui:Sett inn bilde…}} og velg en PNG-, JPEG- eller WebP-fil. Den leses i nettleseren din og lastes aldri opp. Den vises under planen, tilpasset visningen, og verktøylinjen sier at den ikke er skalert ennå. Alt du tegner ligger oppå den.

## Sett målestokken

Velg {{ui:Målestokk}}, klikk to punkter på bildet der du kjenner den virkelige avstanden (to ender av en vegg på en skannet plan, et mål trykt på en skisse), skriv deretter inn avstanden og trykk {{key:Enter}}. Bildet vokser eller krymper rundt det første punktet du klikket. {{key:Esc}} avbryter.

## Lim inn et kopiert område

I MarkupCraft kopierer {{ui:Kopier område}} en del av et PDF-ark som et bilde. Tilbake i BimCraft, med et nivås plan synlig, trykk {{key:Ctrl+V}} (eller {{ui:Lim inn}} i menyen {{ui:Rediger}}): området havner på planen som et bilde, sentrert der pekeren er (eller midt i visningen). Når arket hadde en tegningsmålestokk, kommer det inn i sin virkelige størrelse, så en vegg på det er like lang som veggene dine. Uten en kommer det inn i papirstørrelse, og {{ui:Målestokk}} starter, slik at du kan klikke to punkter og skrive inn avstanden deres. Et område kopiert som et overlegg starter med den dekkevnen det ble kopiert med. Det er ett angrertrinn og lagres som ethvert annet bilde.

Lim inn tar det du kopierte sist: et kopiert område, eller noe du kopierte i BimCraft. {{key:Ctrl+V}} limer også inn ethvert annet PNG-, JPEG- eller WebP-bilde på utklippstavlen din, plassert som {{ui:Sett inn bilde…}} og ikke skalert ennå. Et kopiert område huskes i seks timer.

## Flytt, roter, dim, lås

{{ui:Flytt}} tar et basispunkt på bildet og deretter stedet det skal gå. {{ui:Roter}} tar en vinkel i grader, om bildets sentrum. {{ui:Dekkevne}} dimmer det slik at linjene dine skiller seg ut. {{ui:Lås}} hindrer at det flyttes mens du tegner; et låst bilde lar deg fortsatt endre dekkevnen og skjule det. Hver endring er ett angrertrinn.

## Flere bilder, flere nivåer

Et bilde hører til nivået det ble plassert på, og vises på det nivåets plan og takplan. Klikk på et bilde for å arbeide med det, eller velg det i listen. {{ui:Skjul}} slår det av uten å fjerne det; {{ui:Fjern}} (eller {{key:Delete}}) tar det ut av modellen.

## Bilder i 3D-visningen

Hvert bilde står også i 3D-visningen som et flatt plan: et planbilde ligger på sitt nivå, og et bilde på vertikalt plan står over sin snittlinje. Det tegnes over modellen uten å skjule den, og modellen skjuler den delen av bildet som er bak den. Overlappende bilder sorteres etter avstand. {{ui:Dekkevne}}, {{ui:Skjul}}, {{ui:Lås}} og {{ui:Fjern}} virker likt, og {{ui:Vis i 3D}} slår av alle planene bare i 3D-visningen. Et nivå har høyst 8 bilder, for å holde visningene raske.

## Et bilde på et vertikalt plan

Under {{ui:Plasser på}} velger du {{ui:Et vertikalt plan (snittlinje)}}, og deretter {{ui:Sett inn bilde…}}. Klikk to ender av en linje på planen (en veggflates ende fester seg), eller velg en navngitt snittlinje for nivået i {{ui:Over en snittlinje}}, og ingen klikk trengs. Bildet står på nivået over den linjen, like bredt som linjen. Sett {{ui:Bredde}}, plassering {{ui:Langs linjen}} og {{ui:Høyde over nivå}} ved å skrive inn tall; {{ui:Roter}} snur det i sitt eget plan. Et vertikalt bilde tegnes ikke under planen; planen viser linjen mens du arbeider med den. BimCraft har ingen interaktiv 2D-snittvisning: snitt og fasader tegnes på arkene, og bilder skrives ikke ut i disse arkvisningene ennå.

## Utskrift

{{ui:Utskriftsvisning}} på en plan skriver nivåets bilder inn i PDF-en under tegningen, i sin målestokk, rotasjon og dekkevne, klippet til arket; et skjult bilde holdes utenfor. En JPEG legges inn slik den er; andre bilder reduseres først til 200 dpi på arket.

## Lagres sammen med modellen

Bildets bytes skrives ikke inn i IFC-teksten. Modellen refererer til hvert av dem med navn (en IfcDocumentReference, for eksempel `pictures/<id>.png`), og bytene reiser i en prosjektpakke. Bruk {{ui:Lagre som pakke…}} (eller {{ui:Lagre som IFC}} og velg den): du får én .ccbundle-fil med modellen og dens bilder; IFC-en forblir liten og endringer går raskt. Åpner du .ccbundle-filen, er bildene tilbake.

En ren .ifc kan ikke inneholde et bilde uten å bli stor. Når du lagrer en, sier BimCraft hvor mange bilder som holdes utenfor den, og tilbyr en pakke, eller en ren IFC som innebygger bildene opptil 512 KB og utelater de andre. En ren .ifc som åpnes uten sin pakke, viser disse bildene som manglende, og {{ui:Problemer}} lister dem; åpne .ccbundle-filen de ble lagret i. Filer lagret av første versjon, med bildet inne i IFC-en, åpnes fortsatt, og en pakkelagring flytter bildene deres ut. Et bilde beholdes slik det er opptil 6 MB; et større reduseres i størrelse først, og du får beskjed. Andre programmer åpner modellen og ignorerer bildene. Et bilde du ikke har skalert ennå, listes under {{ui:Problemer}} som en merknad.

## I snitt- og fasadearkene

Et bilde på et vertikalt plan (velg {{ui:Vertikal}} i bildepanelet og klikk to ender av en linje, eller legg det over en navngitt snittlinje) skrives ut i arkvisningene som ser rett på det. Et snitt viser et bilde som står på sin snittlinje, eller som ble lagt over den snittlinjen med navn. En fasade viser hvert vertikalt bilde hvis plan vender mot den. Bildet tegnes under visningens linjer, i visningens målestokk, klippet til visningen, og beholder sin dekkevne. Åpne {{ui:Ark…}} for å se det; ark-PDF-en bærer det som et bilde. Sett bakfra speiles et bilde, slik det gjøres i 3D. Skjulte bilder utelates.
