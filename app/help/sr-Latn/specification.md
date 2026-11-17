---
title: Napiši specifikaciju iz modela
summary: Jedan odeljak specifikacije za svaki tip zida, vrata, prozora, poda i završne obrade u upotrebi, sa činjenicama pročitanim iz modela i tvojim tekstom, napravljen kao PDF ili Word dokument.
keywords: specifikacija, spec, radionički crteži, faza 5, građevinska dokumentacija, odeljak, tip zida, tip vrata, tip prozora, završna obrada, klasifikacija, uniclass, omniclass, masterformat, dokument, pdf, word, docx, specifikacije
from: a6acc6d4
---

## Šta ćeš raditi

Dobij specifikaciju koja prati model: odeljak za svaki tip koji je zaista u zgradi, svaki sa svojim sastavom i količinama pročitanim iz modela, i tekst koji ti napišeš za njega.

## Koraci

1. Uključi {{ui:Crtanje}}, otvori **Specifikacije** u levom panelu i klikni **Specifikacija**.
2. Dijalog navodi po jedan odeljak za svaki tip zida, tip vrata, tip prozora, pod i završnu obradu prostorije u upotrebi. Ispod svakog naslova su njegove **činjenice**, pročitane iz modela: debljina, slojevi jedan po jedan, nivo razrade, dimenzije, koliko komada i koliko ukupno. Odeljak čiji elementi nose klasifikacionu šifru prikazuje šifru u naslovu.
3. Napiši tekst specifikacije u polju ispod odeljka. **Izaberi njegove elemente** pokazuje o čemu odeljak govori.
4. Klikni **Sačuvaj**. To je jedan korak opozivanja, a tekst se čuva u datoteci zgrade.
5. Otvori **Dokumenti iz modela**, izaberi šablon **Specifikacija** i klikni **Pregled**, pa ga sačuvaj kao PDF, Word ili Markdown. Vidi [Dokumenti iz modela](topic:documents-from-the-model).

## Specifikacije radioničkih crteža kao dokument

Šablon **Specifikacije radioničkih crteža** štampa tabele vrata, prozora i završnih obrada direktno iz modela, u rasporedu tvoje kancelarije. U svom šablonu napiši `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ili ime sačuvanog podešavanja, na primer `{{schedule Door schedule by floor}}`. `{{specification}}` štampa specifikaciju.

## Dobro je znati

- Činjenice su modelove. Menjaju se kad se model promeni; tvoj tekst se ne menja.
- BimCraft ne piše nijednu klauzulu nijednog standarda ni tekst proizvođača. Odeljak bez teksta štampa „Tekst specifikacije još nije napisan.”
- Tekst napisan za tip koji više nije u modelu se čuva i navodi pod „Tekst za tipove koji više nisu u modelu”.
- Da promeniš opšti tip za konkretan sastav, pogledaj [Alati za zidove](topic:wall-tools) (Zameni tip).
