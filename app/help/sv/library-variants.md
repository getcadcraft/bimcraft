---
title: Placera och byt ett biblioteksobjekt som har varianter
summary: Vissa biblioteksobjekt finns i flera storlekar eller alternativ. Välj varianten innan du placerar den, se vilken variant ett placerat objekt är, byt till en annan variant med ett klick, och behåll den när objektet uppdateras.
keywords: variant, varianter, storlekar, alternativ, konfiguration, bibliotek, librarycraft, placera, byt, konfigurator, familj, typ, uppdatering, portar
from: c05f0af3
---

## Vad du gör

Placera ett biblioteksobjekt i den storlek eller det alternativ du behöver, och ändra dig senare utan att placera det igen. Ett objekt med varianter är ett objekt i biblioteket (ett namn, en licens, en version) med en tabell över de varianter det finns i: till exempel en monteringsplatta i Small, Medium och Large, eller samma platta utan hål.

## Välj varianten och placera den

1. Öppna fliken {{ui:Bibliotek}} och klicka på objektets kort.
2. Under namnet listar valet {{ui:Variant}} alla varianter med sin storlek. Objektets standard väljs först.
3. Välj en. Planen, storleken och 3D-kroppen följer ditt val.
4. Klicka på {{ui:Placera i plan}} (eller {{ui:Placera i modell}} i 3D-vyn) och placera det som vilket objekt som helst: se [Placera utrustning och möbler från biblioteket](topic:place-from-library).

Det placerade elementet får namn efter objektet och varianten, till exempel *Monteringsplatta — Large*, så att förteckningen {{ui:Utrustning}} och trädet kan skilja dem åt. Varje variant är en egen IFC-typ: att placera samma variant två gånger delar en typ, en annan variant får en egen.

## Se vilken variant ett placerat objekt är

Markera elementet. Under {{ui:Egenskaper}} har rutan **Biblioteksobjekt** en rad **Variant**. IFC:n sparar den i `CadCraft_LibraryItem`: `Variant` (variantens id), `VariantName` och `VariantValues` (alternativvärdena, som text), så att andra program kan läsa den.

## Byt till en annan variant

1. Markera det placerade objektet och klicka på {{ui:Byt objekt…}} i rutan **Biblioteksobjekt**. Fliken {{ui:Bibliotek}} öppnas.
2. Överst listar **Andra varianter av** *objektet* alla varianter med sin storlek. Den placerade är markerad och kan inte väljas.
3. Klicka på {{ui:Byt till …}} vid den variant du vill ha.

Elementet behåller sin plats, vridning, våningsplan, artikelnummer, antal och anteckningar; dess typ, form och data ändras till den andra varianten. {{key:Mod+Z}} tar tillbaka den första. Du kan fortfarande välja något annat objekt från listan nedanför i stället, som tidigare: se [Byt ut ett placerat objekt och uppdatera objekt från biblioteket](topic:swap-and-update-library-items).

## Kopiera, klistra in och uppdateringar

- En kopia av en placerad variant är samma variant: i den här modellen, och i en annan modell som öppnats i samma webbläsarflik, via Kopiera och Klistra in.
- **Uppdateringar** behåller varianten: om den nyare versionen av objektet fortfarande har den blir placeringen den varianten i den nya versionen. Om den nya versionen inte längre har den tar placeringen objektets standardvariant i stället.

## Bra att veta

- Bara vissa biblioteksobjekt har varianter. Korten säger inte det; du ser valet {{ui:Variant}} när du öppnar ett.
- Ett objekt kan lista **portar** (anslutningspunkter för rör och kanaler) per variant. Fliken Bibliotek visar hur många en variant har. De skrivs **inte** in i IFC när du placerar objektet från fliken Bibliotek ännu.
- En variant utan 3D-kropp placeras med en ersättningslåda, som varje 2D-symbol.
- Storlekarna i valet är i millimeter, som biblioteket skriver dem.
