---
title: Endre en typeegenskap for alle elementer av en type
summary: Skill typeegenskaper fra forekomstegenskaper, endre en verdi på typen slik at alle elementene følger, og kontroller at ett elements egen redigering forblir dens egen.
keywords: type, forekomst, typeegenskaper, familietype, delt, kopi ved skriving, alle elementer, masseredigering, produsent, modell
from: bffd8789
---

## Hva du skal gjøre

Sett produsenten på en dørtype slik at hver dør av den typen viser den, og gi deretter én dør sin egen brannklasse uten å røre de andre. Dette viser forskjellen mellom type- og forekomstegenskaper i BimCraft.

## Type eller forekomst?

- En **forekomstegenskap** hører til ett element: merket, markeringen, rommet, dens egen brannklasse.
- En **typeegenskap** hører til typen som mange elementer deler: produsent, modell, bredde på en dørtype.

I panelet {{ui:Egenskaper}} har sett som kommer fra typen " (type)" etter navnet, og linjen "Typeegenskap: en endring her gjelder for alle elementer av denne typen." Alle andre sett hører til elementet selv. **Type** i den første blokken viser typens navn.

## Steg: endre typen

1. Åpne en IFC-modell og klikk på en dør.
2. Noter dens **Type** i den første blokken i panelet {{ui:Egenskaper}}, for eksempel "Single-Flush 900 x 2100".
3. Scroll til et sett hvis navn slutter med "(type)".
4. Klikk på verdien du vil endre, for eksempel **Produsent**.
5. Skriv den nye verdien og trykk {{key:Enter}}.
6. Se på listen {{ui:Endringer}}: oppføringen slutter med "(type)".
7. Klikk på en annen dør av samme type.
8. Kontroller samme verdi: den viser også den nye verdien.

## Steg: endre bare ett element

1. Klikk på én dør.
2. Åpne et sett uten "(type)" i navnet, for eksempel `Pset_DoorCommon`.
3. Klikk på en verdi, som **FireRating**, skriv en ny verdi og trykk {{key:Enter}}.
4. Klikk på døren ved siden av, av samme type.
5. Kontroller samme verdi: den viser fortsatt den gamle verdien.

Selv om eksportøren delte egenskapssettet mellom begge dørene, ga BimCraft den første døren sin egen kopi før den endret den. Se [Hvorfor redigeringen din bare endrer ett element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Lagre

1. Klikk {{ui:Lagre som IFC}} eller trykk {{key:Mod+S}}.
2. Åpne den lagrede kopien i BimCraft, eller i en IFC-visning, for å kontrollere begge endringene.

## Vanlige feil

- **Ikke alle modeller har typer.** Noen eksportører skriver ingen typeobjekter, eller legger alt på forekomsten. Da finnes det ingen "(type)"-sett, og hvert element må endres for seg.
- **Samme verdi finnes i et typesett og et forekomstsett.** Noen eksportører skriver en parameter begge steder. Andre programmer kan lese den ene eller den andre; endre begge hvis du trenger at de stemmer overens.
- **Å forvente å velge "alle dører av denne typen" og redigere dem sammen.** Det finnes ingen flervalg i denne versjonen. En typeegenskap er måten å endre mange elementer samtidig på.
