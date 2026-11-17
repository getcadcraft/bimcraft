---
title: Napišite specifikaciju iz modela
summary: Jedan odjeljak specifikacije za svaki tip zida, vrata, prozora, poda i obrade u uporabi, sa svojim činjenicama očitanim iz modela i vašim vlastitim tekstom, izrađen kao PDF ili Word dokument.
keywords: specifikacija, spec, radionički crteži, faza 5, građevinska dokumentacija, odjeljak, tip zida, tip vrata, tip prozora, obrada, klasifikacija, uniclass, omniclass, masterformat, dokument, pdf, word, docx, tablice
from: a6acc6d4
---

## Što ćete napraviti

Dobijte specifikaciju koja prati model: odjeljak za svaki tip koji je stvarno u zgradi, svaki sa svojim sastavom i količinama očitanim iz modela, te tekstom koji napišete za njega.

## Koraci

1. Uključite {{ui:Crtanje}}, u lijevoj ploči otvorite **Specifikacije** i kliknite **Specifikacija**.
2. Dijaloški okvir navodi jedan odjeljak za svaki tip zida, tip vrata, tip prozora, pod i završnu obradu prostorije u uporabi. Ispod svakog naslova su njegove **činjenice**, očitane iz modela: debljina, slojevi jedan po jedan, razina razrade, dimenzije, koliko komada i koliko. Odjeljak čiji elementi nose klasifikacijsku oznaku prikazuje tu oznaku u naslovu.
3. Napišite tekst specifikacije u okvir ispod odjeljka. **Odaberi njegove elemente** pokazuje o čemu odjeljak govori.
4. Kliknite **Spremi**. To je jedan korak u poništavanju, a tekst se čuva u datoteci zgrade.
5. Otvorite **Dokumenti iz modela**, odaberite predložak **Specifikacija** i kliknite **Pregled**, zatim je spremite kao PDF, Word ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).

## Tablice radioničkih crteža kao dokument

Predložak **Specifikacije radioničkih crteža** ispisuje tablice vrata, prozora i obrada izravno iz modela, u vašem uredskom rasporedu. U vlastitom predlošku upišite `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ili naziv spremljene postavke, npr. `{{schedule Door schedule by floor}}`. `{{specification}}` ispisuje specifikaciju.

## Dobro je znati

- Činjenice su modelove. Mijenjaju se kad se model promijeni; vaš tekst ne.
- BimCraft ne piše nijednu klauzulu nijednog standarda niti tekst proizvođača. Odjeljak bez teksta ispisuje „Tekst specifikacije još nije napisan.“
- Tekst napisan za tip koji više nije u modelu čuva se i navodi se pod „Tekst za tipove koji više nisu u modelu“.
- Da promijenite opći tip za određeni sastav, pogledajte [Alati za zidove](topic:wall-tools) (Zamijeni tip).
