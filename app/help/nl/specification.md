---
title: Het bestek schrijven vanuit het model
summary: Eén bestekonderdeel voor elk wand-, deur-, raam-, vloer- en afwerkingstype dat in gebruik is, met de feiten uit het model en uw eigen tekst, als PDF- of Word-document.
keywords: bestek, specificatie, werktekeningen, fase 5, bouwtekeningen, onderdeel, wandtype, deurtype, raamtype, afwerking, classificatie, uniclass, omniclass, masterformat, document, pdf, word, docx, staten
from: a6acc6d4
---

## Wat u gaat doen

Krijg een bestek dat het model volgt: een onderdeel voor elk type dat echt in het gebouw zit, elk met zijn opbouw en hoeveelheden uit het model, en de tekst die u ervoor schrijft.

## Stappen

1. Zet {{ui:Tekenen}} aan, open **Staten** in het linkerpaneel en klik op **Bestek**.
2. Het dialoogvenster toont één onderdeel voor elk wandtype, deurtype, raamtype, vloer en ruimteafwerking in gebruik. Onder elke kop staan de **feiten**, uit het model gelezen: dikte, de lagen één voor één, het ontwikkelingsniveau, afmetingen, hoeveel en hoeveel. Een onderdeel waarvan de elementen een classificatiecode dragen, toont de code in zijn kop.
3. Schrijf uw bestekstekst in het vak onder een onderdeel. **Zijn elementen selecteren** toont waar het onderdeel over gaat.
4. Klik op **Opslaan**. Dat is één stap in Ongedaan maken, en de tekst wordt bewaard in het gebouwbestand.
5. Open **Documenten uit het model**, kies de sjabloon **Bestek** en klik op **Voorbeeld**, en sla het dan op als PDF, Word of Markdown. Zie [Documenten uit het model](topic:documents-from-the-model).

## De werktekeningstaten als document

De sjabloon **Werktekeningstaten** drukt de deur-, raam- en afwerkingstaten rechtstreeks uit het model af, in uw eigen kantoorindeling. Schrijf in uw eigen sjabloon `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, of de naam van een bewaarde instelling, bijvoorbeeld `{{schedule Door schedule by floor}}`. `{{specification}}` drukt het bestek af.

## Goed om te weten

- De feiten komen uit het model. Ze veranderen als het model verandert; uw tekst niet.
- BimCraft schrijft geen clausule van een norm en geen tekst van een fabrikant. Een onderdeel zonder tekst drukt "Nog geen bestekstekst geschreven." af.
- Tekst die is geschreven voor een type dat niet meer in het model staat, wordt bewaard en vermeld onder "Tekst voor typen die niet meer in het model staan".
- Om een generiek type te wijzigen naar een specifieke opbouw, zie [Wandgereedschap](topic:wall-tools) (Type wisselen).
