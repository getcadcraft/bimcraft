---
title: Skriv beskrivelsen fra modellen
summary: Én beskrivelsesseksjon for hver vegg-, dør-, vindu-, dekke- og overflatetype i bruk, med opplysningene lest fra modellen og din egen tekst, laget til en PDF eller et Word-dokument.
keywords: beskrivelse, spesifikasjon, arbeidstegninger, fase 5, byggeplan, seksjon, veggtype, dørtype, vindustype, overflate, klassifisering, uniclass, omniclass, masterformat, dokument, pdf, word, docx, tabeller
from: a6acc6d4
---

## Hva du gjør

Få en beskrivelse som følger modellen: en seksjon for hver type som faktisk finnes i bygningen, hver med oppbygning og mengder lest fra modellen, og teksten du skriver til den.

## Trinn

1. Slå på {{ui:Tegn}}, åpne **Tabeller** i venstre panel og klikk **Beskrivelse**.
2. Dialogen lister én seksjon for hver veggtype, dørtype, vindustype, dekke og romoverflate i bruk. Under hver overskrift står **opplysningene** sine, lest fra modellen: tykkelse, lagene ett for ett, utviklingsnivået, størrelser, hvor mange og hvor mye. En seksjon der elementene har en klassifiseringskode, viser koden i overskriften.
3. Skriv beskrivelsesteksten i boksen under en seksjon. **Velg elementene** viser hva seksjonen handler om.
4. Klikk **Lagre**. Det er ett steg i Angre, og teksten lagres i bygningsfilen.
5. Åpne **Dokumenter fra modellen**, velg malen **Beskrivelse** og klikk **Forhåndsvis**, og lagre den som PDF, Word eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).

## Tabellene for arbeidstegninger som dokument

Malen **Tabeller for arbeidstegninger** skriver ut dør-, vindu- og overflatetabellene rett fra modellen, i ditt eget kontoroppsett. I din egen mal skriver du `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, eller navnet på et lagret oppsett, for eksempel `{{schedule Door schedule by floor}}`. `{{specification}}` skriver ut beskrivelsen.

## Greit å vite

- Opplysningene er modellens. De endres når modellen endres. Teksten din gjør ikke det.
- BimCraft skriver ingen klausul fra noen standard og ingen produsenttekst. En seksjon uten tekst skrives ut med «Ingen beskrivelsestekst er skrevet ennå.»
- Tekst skrevet for en type som ikke lenger er i modellen, beholdes og listes under «Tekst for typer som ikke lenger finnes i modellen».
- For å endre en generisk type til et bestemt oppbygg, se [Veggverktøy](topic:wall-tools) (Bytt type).
