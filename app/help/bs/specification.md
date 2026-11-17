---
title: Napišite specifikaciju iz modela
summary: Jedan odjeljak specifikacije za svaki tip zida, vrata, prozora, poda i završne obrade u upotrebi, s činjenicama očitanim iz modela i vašim tekstom, izrađen kao PDF ili Word dokument.
keywords: specifikacija, spec, izvedbeni crteži, faza 5, građevinska dokumentacija, odjeljak, tip zida, tip vrata, tip prozora, završna obrada, klasifikacija, uniclass, omniclass, masterformat, dokument, pdf, word, docx, specifikacije
from: a6acc6d4
---

## Šta ćete uraditi

Dobiti specifikaciju koja prati model: odjeljak za svaki tip koji je zaista u zgradi, svaki sa svojim sastavom i količinama očitanim iz modela, te tekst koji napišete za njega.

## Koraci

1. Uključite {{ui:Crtanje}}, otvorite **Specifikacije** u lijevom panelu i kliknite **Specifikacija**.
2. Dijalog navodi jedan odjeljak za svaki tip zida, tip vrata, tip prozora, pod i završnu obradu prostorije u upotrebi. Ispod svakog naslova su njegove **činjenice**, očitane iz modela: debljina, slojevi jedan po jedan, nivo razvijenosti, dimenzije, koliko komada i koliko materijala. Odjeljak čiji elementi nose klasifikacijsku šifru pokazuje šifru u svom naslovu.
3. Upišite tekst specifikacije u polje ispod odjeljka. **Odaberi njegove elemente** pokazuje čime se odjeljak bavi.
4. Kliknite **Spasi**. To je jedan korak u poništavanju, a tekst se čuva u datoteci zgrade.
5. Otvorite **Dokumenti iz modela**, odaberite šablon **Specifikacija** i kliknite **Pregled**, pa ga spasite kao PDF, Word ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).

## Tabele izvedbenih crteža kao dokument

Šablon **Specifikacije izvedbenih crteža** štampa tabele vrata, prozora i završnih obrada direktno iz modela, u vašem uredskom rasporedu. U svom šablonu napišite `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ili naziv sačuvanog podešavanja, na primjer `{{schedule Door schedule by floor}}`. `{{specification}}` štampa specifikaciju.

## Dobro je znati

- Činjenice su modelove. Mijenjaju se kada se model promijeni; vaš tekst ne.
- BimCraft ne piše nijednu klauzulu nijednog standarda niti tekst proizvođača. Odjeljak bez teksta štampa: "Tekst specifikacije još nije napisan."
- Tekst napisan za tip koji više nije u modelu se čuva i navodi pod "Tekst za tipove koji više nisu u modelu".
- Da promijenite generički tip u specifičan sastav, pogledajte [Alati za zidove](topic:wall-tools) (Zamijeni tip).
