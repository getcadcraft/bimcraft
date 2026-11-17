---
title: Oblikuj, sačuvaj i izvezi specifikaciju
summary: Grupiši specifikaciju, dodaj joj međuzbirove i zbirove, dodaj kolonu koja se čita iz svojstva, sačuvaj je kao podešavanje u datoteci i izvezi je kao radnu svesku tabele (.xlsx), kao tekst za lepljenje u online tabelu ili kao CSV. Kancelarijski standard popunjava ono što specifikacija ne kaže.
keywords: raspored specifikacije, grupiši po, međuzbir, zbir, zaglavlja, kancelarijski standard, podrazumevane politike, podešavanje, specifikacija vrata po spratu, otpornost na vatru, okovi, xlsx, radna sveska, online tabela, lepljenje, csv, izvoz, tabela, elementi, izbor iz specifikacije, brojka
from: 95dfd801
---

## Šta ćeš uraditi

Pretvori običnu specifikaciju u onu koju vaša kancelarija izdaje: grupisanu po nivou, tipu ili prostoriji, sa međuzbirovima i zbirom, sa kolonama koje su vam potrebne, pod sopstvenim nazivom. Zatim je pošalji u tabelu. Svaki red i svaka brojka i dalje znaju elemente od kojih potiču.

## Koraci

1. Uključi {{ui:Crtanje}} i otvori **Specifikacije** u levom panelu. Izaberi specifikaciju, na primer **Vrata**.
2. Iznad tabele izaberi **Grupiši po** (kolonu specifikacije, kao Nivo ili Tip, ili **Bez grupisanja**) i **Zbirovi** (**Bez zbirova**, **Jedan zbir** ili **Međuzbirovi i zbir**). **Kako je podešeno** ostavlja izbor sačuvanom podešavanju ili kancelarijskom standardu.
3. Da dodaš kolonu koja se čita iz elemenata, upiši ispod tabele naziv svojstva ili oznake (na primer `FireRating`, `Pset_DoorCommon.FireRating` ili naziv oznake kao `Ironmongery`) i klikni **Dodaj kolonu**. BimCraft prvo čita skupove svojstava samog elementa, pa onda njegovog tipa. Kada element još nema vrednost, to kaže; kolona se popuni sama čim se vrednost postavi.
4. Upiši naziv (na primer „Specifikacija vrata po spratu“) i klikni **Sačuvaj kao podešavanje**. Podešavanje se čuva u datoteci zgrade i pridružuje se listi Specifikacija pod svojim nazivom. Prati svaku izmenu modela. **Ukloni ovo podešavanje** ga uklanja. Oba su jedan korak za {{ui:Opozovi}}.

## Klikni na brojku da izabereš ono odakle potiče

Klikni bilo koji red ili bilo koju pojedinačnu brojku da izabereš elemente iza nje u planu i u 3D:

- red bira elemente tog reda;
- međuzbir ili zbir bira sve što zbraja, a naslov grupe bira svoju grupu;
- brojka sa sopstvenim elementima bira njih: **Odbici** tipa zida biraju njegova vrata i prozore, a površina zidova prostorije njene zidove.

Isto važi i za dokument napravljen od modela: u pregledu klikni brojku specifikacije.

## Izvoz

- **Preuzmi Excel** čuva .xlsx radnu svesku. Dužine, površine, zapremine i brojevi su pravi brojevi u jedinici koju kolona prikazuje (stope i inči ostaju tekst). Drugi list, **Elements**, navodi za svaki red GlobalId-jeve elemenata iza njega.
- **Kopiraj za Google Sheets** stavlja specifikaciju u clipboard kao tekst odvojen tabulatorima. U Google tabeli klikni ćeliju A1 i nalepi. **Otvori novu Google tabelu** otvara `sheets.new`, Googleovu adresu za praznu tabelu, u tvom Google nalogu. BimCraft se ne prijavljuje u Google i ništa ne šalje tamo: lepljenje je tvoje.
- **Preuzmi CSV** čuva tabelu onako kako je raspoređena na ekranu.

## Kancelarijski standard

Kancelarija može jednom reći kako su njene specifikacije raspoređene. Uključi dodatak **Podrazumevane politike** ([Podrazumevane politike](topic:default-policies)) i postavi, u **Podešavanja › Opšte › Podrazumevane politike › Raspored specifikacije (kancelarijski standard)**:

| Politika | Šta radi |
|---|---|
| Group schedules by | Nivo, Tip, Prostorija ili bez grupisanja, za svaku specifikaciju koja ima takvu kolonu |
| Totals in schedules | Bez zbirova, jedan zbir na kraju, ili međuzbir ispod svake grupe i zbir |
| Schedule title | Obrazac, na primer `{project}: {schedule}` |
| Column headings | Kako je napisano, VELIKIM SLOVIMA ili Sa Velikim Slovima |

Standard važi za svaku specifikaciju, ko god da ju je postavio: obične specifikacije u panelu, sačuvano podešavanje, specifikaciju koju je postavio pomoćnik, izvoze i specifikacije u dokumentu. Podešavanje koje navodi sopstveno grupisanje, zbirove ili naslov ih zadržava; standard popunjava ostalo. Panel kaže koje delove je postavio kancelarijski standard. Politike putuju u datoteci Podrazumevane politike zajedno sa ostalima.

## Dobro je znati

- Podešavanje navodi svoju izvornu specifikaciju i svoje kolone; ne sadrži brojeve. Brojevi se svaki put čitaju iz modela.
- Spiskovi koji nisu redovi elemenata (sklopovi zidova i legenda materijala) nemaju raspored ni izvoz ovde.
- Pomoćnik može sve ovo uraditi umesto tebe: pogledaj [Neka AI pomoćnik radi sa vašim modelom](topic:assistants).
