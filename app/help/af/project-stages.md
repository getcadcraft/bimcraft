---
title: Projekfases, van die opdrag tot werfinstruksies
summary: Begin met 'n opdrag met teikenoppervlaktes en sien voldoen of kort soos jy teken, vergelyk konseptopsies daarteen, koppel spesifikasies en detail aan tipes, hersien werkstekeninge en teken werfinstruksies teen elemente aan.
keywords: opdrag, vertrekskedule, teikenoppervlakte, voldoen, kort, vertrekke, konseptopsies, opsies, massa, begroting, spesifikasie, spesifikasie, detail, konstruksiedetail, tipe, werkstekening, hersien, goedkeur, weer indien, werfinstruksie, hersiening, oorsaak, veld, fase
from: 0a49b852
---

## Wat jy sal doen

Werk deur 'n projek se fases in een paneel: skryf die kliënt se opdrag as vertrekke met teikenoppervlaktes, vergelyk konseptopsies daarteen, hou die spesifikasie en konstruksiedetail by die tipes waaraan hulle behoort, hersien werkstekeninge soos die werkers dit terugstuur, en teken werfinstruksies aan teen die elemente wat hulle verander.

## Stappe

1. Open in die linkerpaneel **Projekfases**, en dan **Opdrag**.
2. Plak die vertrekke in, een per lyn: `Living; 1; 30` beteken een vertrek van 30 m². Die telling kan weggelaat word. Kies **Voeg die vertrekke by**. Vul die kliënt, terrein, begroting, toleransie en program in, en kies dan **Stoor die opdrag**.
3. Teken mure. Elke vertrek wat die mure maak en wat die naam van die opdragvertrek het ('n nommer daarna, soos "Slaapkamer 2", word geïgnoreer), word getel. Die **Vertrekskedule** wys **Voldoen**, **Kort**, **Oor** of **Nie getekend**, met die verskil in m².
4. Om 'n nuwe projek op hierdie manier te begin, kies **Begin 'n nuwe projek uit 'n opdrag**. Dit open 'n nuwe model, uit een van jou gestoorde sjablone as jy een kies, en plaas die opdrag as die eerste stap daarin.
5. Open **Opsies teen die opdrag**. Elke massa-opsie wat in die model bewaar word, word op een skaal geteken met sy bruto oppervlakte, wat die opdrag vra, en hoeveel van die opdrag se vertrekke pas. **Stapel die opdrag hier** plaas die vertrekke in die opsie se verdiepings, die laagste eerste, en sê wat nie pas nie. Koste kom slegs uit die projek se prystabel; sonder 'n ooreenstemmende ry sê dit "Geen tarief".
6. Open **Tipes, spesifikasies en detail**. Elke muur-, deur-, venster- en vloertipe wys of dit spesifikasieteks het, die detail wat daaraan gekoppel is, en waar die spesifikasie, die skedules en die blaaie verskil. **Skakel 'n detail** voeg 'n DetailCraft- of CadCraft-lêer, 'n adres, of 'n blad van hierdie model by.
7. Open **Werkstekeninge**. Kies die elemente wat 'n werkstekening in die model dek, en kies dan **Ontvang dit**. Gebruik **Keur goed**, **Soos aangeteken** of **Hersien** met die hersiener se naam en notas. **Weer ingedien** maak die volgende hersiening van dieselfde rekord en behou die hersieningsgeskiedenis. Die status word ook op elke element geskryf.
8. Open **Werfinstruksies**. Kies die elemente, gee die oorsaak en wat dit in jou eie woorde aan koste en tyd doen, en kies **Teken dit aan**. Nadat 'n uitgawe aangeteken is, sê **Verduidelik die veranderinge sedert hierdie uitgawe** watter veranderde elemente 'n instruksie dek en watter elemente verander het sonder dat iets aangeteken is.

## Goed om te weet

- Elke stap is een Ontdoen. Niks word geweier nie: 'n opdrag wat nie voldoen word nie, 'n tipe wat nie met sy teks ooreenstem nie, of 'n agterstallige werkstekening is 'n waarskuwing of 'n nota in Probleme.
- Die opdragvertrekke is ruimtes sonder mure. Hulle dra 'n teiken, nie 'n getekende oppervlakte nie, sodat vertrekskedules en COBie hulle nooit as getekende vertrekke tel nie.
- 'n Uitleg plaas vertrekke net volgens oppervlakte in verdiepings. Dit teken geen mure nie.
- Die spesifikasieteks word in Dokumente vanuit die model geskryf. Hier word dit net vergelyk met die model se eie afmetings: geen standaard se klousule word ooit vir jou geskryf nie.
- Werkstekeninge en werfinstruksies is rekords in dieselfde geskiedenis as die Uitgawes en hersienings-paneel, so albei panele wys hulle.
- Die status van 'n werkstekening is 'n eienskap van elke element (`CadCraft_ShopDrawing`), en 'n werfinstruksie is `CadCraft_SiteInstruction`, so Soek en Kleur volgens eienskap kan hulle gebruik.
- Veldgeverifieerde merke (Fase 7) is in Eienskappe onder Verifikasie.
