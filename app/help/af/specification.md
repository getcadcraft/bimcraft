---
title: Skryf die spesifikasie uit die model
summary: Een spesifikasie-afdeling vir elke muur-, deur-, venster-, vloer- en afwerkingstipe in gebruik, met sy feite wat uit die model gelees word en jou eie teks, gemaak as 'n PDF- of Word-dokument.
keywords: spesifikasie, spec, werkstekeninge, fase 5, konstruksiedokumente, afdeling, muurtipe, deurtipe, vensertipe, afwerking, klassifikasie, uniclass, omniclass, masterformat, dokument, pdf, word, docx, skedules
from: a6acc6d4
---

## Wat jy gaan doen

Kry 'n spesifikasie wat die model volg: 'n afdeling vir elke tipe wat werklik in die gebou is, elk met sy opbou en hoeveelhede wat uit die model gelees word, en die teks wat jy daarvoor skryf.

## Stappe

1. Skakel {{ui:Teken}} aan, maak **Skedules** in die linkerpaneel oop en klik **Spesifikasie**.
2. Die dialoog lys een afdeling vir elke muurtipe, deurtipe, vensertipe, vloer en vertrekafwerking in gebruik. Onder elke opskrif is sy **feite**, uit die model gelees: dikte, die lae een vir een, die ontwikkelingsvlak, groottes, hoeveel en hoeveel. 'n Afdeling waarvan die elemente 'n klassifikasiekode dra, wys die kode in sy opskrif.
3. Skryf jou spesifikasieteks in die blokkie onder 'n afdeling. **Kies sy elemente** wys waaroor die afdeling gaan.
4. Klik **Stoor**. Dit is een stap in Ontdoen, en die teks word in die gebou se lêer bewaar.
5. Maak **Dokumente uit die model** oop, kies die **Spesifikasie**-sjabloon en klik **Voorskou**, en stoor dit dan as PDF, Word of Markdown. Sien [Dokumente uit die model](topic:documents-from-the-model).

## Die werkstekening-skedules as 'n dokument

Die **Werkstekening-skedules**-sjabloon druk die deur-, venster- en afwerkingskedules reguit uit die model, in jou kantoorindeling. In jou eie sjabloon skryf `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, of die naam van 'n gestoorde opstelling, byvoorbeeld `{{schedule Deuryskedule volgens verdieping}}`. `{{specification}}` druk die spesifikasie.

## Goed om te weet

- Die feite is die model s'n. Hulle verander wanneer die model verander; jou teks nie.
- BimCraft skryf geen klousule van enige standaard en geen vervaardiger se teks nie. 'n Afdeling sonder teks druk "Nog geen spesifikasieteks geskryf nie."
- Teks wat geskryf is vir 'n tipe wat nie meer in die model is nie, word bewaar en onder "Teks vir tipes wat nie meer in die model is nie" gelys.
- Om 'n generiese tipe vir 'n spesifieke opbou te verander, sien [Muurgereedskap](topic:wall-tools) (Ruil tipe).
