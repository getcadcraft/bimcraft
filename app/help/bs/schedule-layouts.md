---
title: Raspored, čuvanje i izvoz specifikacije
summary: Grupišite specifikaciju, dajte joj međuzbirove i ukupne vrijednosti, dodajte kolonu koja se čita iz svojstva, sačuvajte je kao postavku u datoteci i izvezite kao radnu tabelu (.xlsx), kao tekst za lijepljenje u online tabelu ili kao CSV. Standard kancelarije popunjava ono što specifikacija ne navodi.
keywords: raspored specifikacije, grupiši po, međuzbir, ukupno, naslovi, standard kancelarije, podrazumijevana pravila, postavka, specifikacija vrata po spratu, vatrootpornost, okov, xlsx, radna tabela, online tabela, zalijepi, csv, izvoz, tabela, elementi, odaberi iz specifikacije, brojka
from: 95dfd801
---

## Šta ćete uraditi

Pretvorite običnu specifikaciju u onu koju vaša kancelarija izdaje: grupisanu po nivou, tipu ili prostoriji, s međuzbirovima i ukupnom vrijednošću, s kolonama koje su vam potrebne, pod sopstvenim nazivom. Zatim je pošaljite u tabelu. Svaki red i svaka brojka i dalje znaju elemente iz kojih potiču.

## Koraci

1. Uključite {{ui:Crtanje}} i otvorite **Specifikacije** u lijevom panelu. Odaberite specifikaciju, na primjer **Vrata**.
2. Iznad tabele odaberite **Grupiši po** (kolonu specifikacije, kao što je Nivo ili Tip, ili **Bez grupisanja**) i **Ukupne vrijednosti** (**Bez ukupnih vrijednosti**, **Jedna ukupna vrijednost** ili **Međuzbirovi i ukupna vrijednost**). **Kako je postavljeno** ostavlja izbor sačuvanoj postavci ili standardu kancelarije.
3. Da dodate kolonu koja se čita iz elemenata, upišite naziv svojstva ili oznake ispod tabele (na primjer `FireRating`, `Pset_DoorCommon.FireRating` ili naziv oznake kao `Ironmongery`) i kliknite **Dodaj kolonu**. BimCraft prvo čita sopstvene skupove svojstava elementa, pa zatim svog tipa. Kad nijedan element još nema vrijednost, to kaže; kolona se sama popuni čim se vrijednost postavi.
4. Upišite naziv (na primjer „Specifikacija vrata po spratu”) i kliknite **Spasi kao postavku**. Postavka se čuva u datoteci zgrade i pridružuje se listi Specifikacija pod svojim nazivom. Prati svaku promjenu modela. **Ukloni ovu postavku** je uklanja. Oba su jedan korak u poništavanju.

## Kliknite na brojku da odaberete šta ju je dalo

Kliknite bilo koji red ili bilo koju pojedinačnu brojku da odaberete elemente iza nje u planu i u 3D:

- red odabire elemente tog reda;
- međuzbir ili ukupno odabire sve što zbraja; naslov grupe odabire svoju grupu;
- brojka sa sopstvenim elementima odabire njih: **Odbici** tipa zida odabiru njegova vrata i prozore, a površina zidova prostorije njene zidove.

Isto važi i za dokument napravljen iz modela: u pregledu kliknite brojku specifikacije.

## Izvoz

- **Preuzmi Excel** čuva .xlsx radnu tabelu. Dužine, površine, zapremine i brojevi su pravi brojevi u jedinici koju kolona prikazuje (stope i inči ostaju tekst). Drugi list, **Elementi**, navodi za svaki red GlobalId elemenata iza njega.
- **Kopiraj za Google Sheets** stavlja specifikaciju na vaš međuspremnik kao tekst odvojen tabulatorima. U Google tabeli kliknite ćeliju A1 i zalijepite. **Otvori novu Google Sheets tabelu** otvara `sheets.new`, Googleovu vlastitu adresu za praznu tabelu, u vašem vlastitom Google računu. BimCraft se ne prijavljuje na Google i ništa ne šalje tamo: lijepljenje je vaše.
- **Preuzmi CSV** čuva tabelu onako kako je raspoređena na ekranu.

## Standard kancelarije

Kancelarija može jednom reći kako su njene specifikacije raspoređene. Uključite dodatak **Podrazumijevana pravila** ([Podrazumijevana pravila](topic:default-policies)) i postavite, u **Postavke › Globalno › Podrazumijevana pravila › Raspored specifikacije (standard kancelarije)**:

| Pravilo | Šta radi |
|---|---|
| Grupiši specifikacije po | Nivo, Tip, Prostorija ili bez grupisanja, za svaku specifikaciju koja ima takvu kolonu |
| Ukupne vrijednosti u specifikacijama | Bez ukupne vrijednosti, jedna ukupna na kraju, ili međuzbir ispod svake grupe i ukupna vrijednost |
| Naslov specifikacije | Obrazac, na primjer `{project}: {schedule}` |
| Naslovi kolona | Kako su napisani, VELIKIM SLOVIMA ili Sa Velikim Slovima |

Standard se primjenjuje na svaku specifikaciju, ko god je postavio: obične specifikacije u panelu, sačuvanu postavku, specifikaciju koju postavi pomoćnik, izvoze i specifikacije u dokumentu. Postavka koja navodi sopstveno grupisanje, ukupne vrijednosti ili naslov zadržava ih; standard popunjava ostalo. Panel kaže koje dijelove je postavio standard kancelarije. Pravila putuju u datoteci Podrazumijevana pravila zajedno s ostalima.

## Dobro je znati

- Postavka imenuje svoju izvornu specifikaciju i svoje kolone; ne sadrži brojke. Brojke se čitaju iz modela svaki put.
- Liste koje nisu redovi elemenata (sklopovi zidova i legenda materijala) nemaju raspored i izvoz ovdje.
- Pomoćnik može sve ovo uraditi umjesto vas: vidi [Dozvolite AI pomoćniku da radi s vašim modelom](topic:assistants).
