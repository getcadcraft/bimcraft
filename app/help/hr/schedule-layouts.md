---
title: Oblikovanje, spremanje i izvoz specifikacije
summary: Grupirajte specifikaciju, dodajte joj međuzbrojeve i ukupne iznose, dodajte stupac očitan iz svojstva, spremite je kao postavku u datoteci i izvezite kao radnu knjigu tablice (.xlsx), kao tekst za lijepljenje u online tablicu ili kao CSV. Standard ureda popunjava ono što specifikacija ne navodi.
keywords: raspored specifikacije, grupiraj po, međuzbroj, ukupno, zaglavlja, standard ureda, zadana pravila, postavka, specifikacija vrata po etaži, vatrootpornost, okov, xlsx, radna knjiga, online tablica, zalijepi, csv, izvoz, tablični proračun, elementi, odabir iz specifikacije, brojka
from: 95dfd801
---

## Što ćete učiniti

Pretvorite običnu specifikaciju u onu koju vaš ured izdaje: grupiranu po etaži, tipu ili prostoriji, s međuzbrojevima i ukupnim iznosom, sa stupcima koji su vam potrebni, pod vlastitim nazivom. Zatim je pošaljite u tablični proračun. Svaki redak i svaka brojka i dalje znaju od kojih su elemenata došli.

## Koraci

1. Uključite {{ui:Crtanje}} i otvorite **Specifikacije** u lijevoj ploči. Odaberite specifikaciju, na primjer **Vrata**.
2. Iznad tablice odaberite **Grupiraj po** (stupac specifikacije, kao što su Razina ili Tip, ili **Bez grupiranja**) i **Ukupno** (**Bez ukupnih iznosa**, **Jedan ukupni iznos** ili **Međuzbrojevi i ukupni iznos**). **Kako je postavljeno** prepušta izbor spremljenoj postavci ili standardu ureda.
3. Da dodate stupac koji se čita iz elemenata, upišite ispod tablice naziv svojstva ili oznake (na primjer `FireRating`, `Pset_DoorCommon.FireRating` ili naziv oznake kao `Ironmongery`) i kliknite **Dodaj stupac**. BimCraft najprije čita vlastite skupove svojstava elementa, pa zatim njegova tipa. Kad nijedan element još nema vrijednost, to kaže; stupac se popunjava sam čim se vrijednost postavi.
4. Upišite naziv (na primjer „Specifikacija vrata po etažama“) i kliknite **Spremi kao postavku**. Postavka se čuva u datoteci zgrade i pridružuje se popisu specifikacija pod svojim nazivom. Prati svaku promjenu modela. **Ukloni ovu postavku** je uklanja. Oboje je jedan korak u poništavanju.

## Kliknite brojku da odaberete od čega dolazi

Kliknite bilo koji redak ili bilo koju pojedinu brojku da odaberete elemente iza nje u tlocrtu i u 3D-u:

- redak odabire elemente tog retka;
- međuzbroj ili ukupni iznos odabire sve što zbraja, a naslov grupe svoju grupu;
- brojka koja ima vlastite elemente odabire njih: **Odbici** tipa zida odabiru njegova vrata i prozore, a površina zida prostorije njezine zidove.

Isto vrijedi i u dokumentu izrađenom iz modela: u pregledu kliknite brojku specifikacije.

## Izvoz

- **Preuzmi Excel** sprema .xlsx radnu knjigu. Duljine, površine, volumeni i brojevi su stvarni brojevi u jedinici koju stupac prikazuje (stope i palci ostaju tekst). Drugi list, **Elements**, navodi za svaki redak GlobalId elemenata iza njega.
- **Kopiraj za Google Sheets** stavlja specifikaciju na međuspremnik kao tekst odvojen tabulatorima. U Google Sheetu kliknite ćeliju A1 i zalijepite. **Otvori novi Google Sheet** otvara `sheets.new`, Googleovu vlastitu adresu za prazan list, u vašem Google računu. BimCraft se ne prijavljuje na Google i ništa ne šalje tamo: lijepljenje je vaše.
- **Preuzmi CSV** sprema tablicu kako je postavljena na zaslonu.

## Standard ureda

Ured može jednom reći kako su njegove specifikacije raspoređene. Uključite dodatak **Default Policies** ([Default Policies](topic:default-policies)) i postavite, u **Postavke › Globalne › Default Policies › Raspored specifikacije (standard ureda)**:

| Pravilo | Što radi |
|---|---|
| Grupiraj specifikacije po | Etaži, tipu, prostoriji ili bez grupiranja, za svaku specifikaciju koja ima takav stupac |
| Ukupno u specifikacijama | Bez ukupnih iznosa, jedan ukupni iznos na kraju ili međuzbroj ispod svake grupe i ukupni iznos |
| Naslov specifikacije | Uzorak, na primjer `{project}: {schedule}` |
| Naslovi stupaca | Kako je napisano, VELIKIM SLOVIMA ili Velikim Početnim Slovima |

Standard vrijedi za svaku specifikaciju, bez obzira tko je postavlja: obične specifikacije na ploči, spremljenu postavku, specifikaciju koju postavi pomoćnik, izvoze i specifikacije u dokumentu. Postavka koja sama navodi svoje grupiranje, ukupne iznose ili naslov zadržava ih; standard popunjava ostalo. Ploča kaže koje je dijelove postavio standard ureda. Pravila putuju u datoteci Default Policies zajedno s ostalima.

## Dobro je znati

- Postavka navodi svoju izvornu specifikaciju i svoje stupce; ne sadrži brojeve. Brojke se svaki put čitaju iz modela.
- Popisi koji nisu reci elemenata (sklopovi zidova i legenda materijala) nemaju ovdje raspored ni izvoz.
- Pomoćnik može sve ovo učiniti umjesto vas: vidi [Neka AI pomoćnik radi s vašim modelom](topic:assistants).
