---
title: Skriv specifikationen ud fra modellen
summary: Ét specifikationsafsnit for hver væg-, dør-, vindues-, gulv- og overfladetype i brug, med dets fakta læst fra modellen og din egen tekst, lavet til en PDF eller et Word-dokument.
keywords: specifikation, spec, arbejdstegninger, fase 5, byggetegninger, afsnit, vægtype, dørtype, vinduestype, overflade, klassifikation, uniclass, omniclass, masterformat, dokument, pdf, word, docx, lister
from: a6acc6d4
---

## Hvad du skal gøre

Få en specifikation, der følger modellen: et afsnit for hver type, der virkelig findes i bygningen, hver med sin opbygning og sine mængder læst fra modellen, og den tekst, du skriver til den.

## Trin

1. Slå {{ui:Tegn}} til, åbn **Lister** i venstre panel, og klik på **Specifikation**.
2. Dialogen lister et afsnit for hver vægtype, dørtype, vinduestype, gulv og rumoverflade i brug. Under hver overskrift står dens **fakta**, læst fra modellen: tykkelse, lagene et for et, udviklingsniveauet, mål, hvor mange og hvor meget. Et afsnit, hvis elementer har en klassifikationskode, viser koden i sin overskrift.
3. Skriv din specifikationstekst i feltet under et afsnit. **Vælg dens elementer** viser, hvad afsnittet handler om.
4. Klik på **Gem**. Det er ét trin i Fortryd, og teksten gemmes i bygningsfilen.
5. Åbn **Dokumenter fra modellen**, vælg skabelonen **Specifikation**, klik på **Forhåndsvisning**, og gem den derefter som PDF, Word eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).

## Arbejdstegningslister som et dokument

Skabelonen **Arbejdstegningslister** udskriver dør-, vindues- og overfladelisterne direkte fra modellen, i dit kontors layout. I din egen skabelon skriver du `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` eller navnet på en gemt opsætning, fx `{{schedule Dørliste efter etage}}`. `{{specification}}` udskriver specifikationen.

## Godt at vide

- Fakta er modellens. De ændres, når modellen ændres; din tekst gør ikke.
- BimCraft skriver ikke noget paragraf fra en standard og ingen producenttekst. Et afsnit uden tekst udskrives som "No specification text written yet." (Ingen specifikationstekst skrevet endnu.)
- Tekst skrevet til en type, der ikke længere er i modellen, gemmes og listes under "Tekst til typer, der ikke længere er i modellen".
- For at ændre en generisk type til en specifik opbygning, se [Værktøjer til vægge](topic:wall-tools) (Skift type).
