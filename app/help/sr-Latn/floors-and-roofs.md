---
title: Prostorije, podovi, plafoni i krovovi
summary: Prostorije se pojavljuju čim ih zidovi zatvore; dajte prostoriji ili celoj zgradi pod i plafon, a na zidove postavite četvorovodni ili dvovodni krov. Sve to prati zidove kad se oni pomere.
keywords: prostorija, prostorije, prostor, površina, obim, pod, ploča, podna konstrukcija, plafon, krov, četvorovodni krov, dvovodni krov, nagib, previs, strešni venac, sleme, ulučak, 6/12
from: 1fb1813c
---

## Šta ćete uraditi

Završite ljusku zgrade. Prostorije nastaju same od zidova; podovi, plafoni i krov zahtevaju po jedan klik. Pošto se izvode iz zidova, prate ih kad se zidovi pomere.

## Prostorije

Svaki prostor zatvoren nacrtanim zidovima jeste prostorija. Pojavljuje se čim je poslednji zid zatvori, sa brojem (101, 102 … na prvom nivou, 201 … na sledećem) i nazivom (**Prostorija 1**, **Prostorija 2** …), a njena površina prikazuje se u sredini na planu.

- Uz uključeno {{ui:Izaberi}}, kliknite unutar prostorije da je izaberete. U **Svojstvima** promenite njen **Naziv** (na primer `Kuhinja`) i **Broj**; prikazani su njena površina i obim.
- Obrišite zid između dve prostorije i one postaju jedna; nacrtajte zid preko prostorije i ona postaje dve. Prostorija zadržava naziv i broj dok se zidovi oko nje pomeraju.
- Prostorija se ne može obrisati sama: ona je prostor koji stvaraju zidovi.

Površine se mere unutar lica zidova. Prostorije se čuvaju kao IFC prostori sa površinom poda, obimom, visinom i zapreminom, pa ih specifikacije čitaju (videti [Zbirovi količina, popisi elemenata i specifikacije prostora](topic:quantity-totals)).

## Podovi

1. Kliknite {{ui:Pod}}.
2. Izaberite **Ova prostorija** ili **Cela zgrada**, **Vrstu** (drveni pod ili betonska ploča) i njegovu debljinu.
3. Pokažite unutar prostorije (ili bilo gde unutar zgrade). Ono što bi pod pokrio biva istaknuto, sa svojom površinom.
4. Kliknite. Gornja površina poda je na nivou poda; pod se spušta za svoju debljinu. Pod za celu zgradu seže do spoljnih lica zidova.

## Plafoni

1. Kliknite {{ui:Plafon}}.
2. Izaberite **Ova prostorija** ili **Cela zgrada**, i njegovu **Visinu** iznad poda.
3. Pokažite unutar i kliknite.
4. Da biste ga videli odozdo, sa njegovom mrežom i svetiljkama na njemu, prebacite plan u plan plafona: videti [Pogledi, opsezi pogleda i vaši sopstveni listovi](topic:views-and-sheets).

## Krov

1. Na nivou čiji zidovi nose krov kliknite {{ui:Krov}}.
2. Upišite **Nagib** kao porast preko 12 (`6/12`) ili u stepenima (`30`), i **Previs**.
3. Izaberite **Krajeve**: **Četvorovodni krov** (sve strane su kose), **Zabati na kratkim stranama** ili **Zabati na dugim stranama** (zgrada sa četiri strane), ili **Jednovodni**.
4. Pokažite unutar zgrade: strešni venac i sleme se prikazuju na planu. Kliknite.

Krov leži na vrhu zidova, na nivou iznad njih, a njegova donja strana spaja se sa spoljnim licem zidova. Zabatni krajevi popunjavaju se zabatnim zidom debljine kao zid ispod. Zgrada u obliku slova L, T ili U dobija četvorovodni krov čija se krila sastaju u ulucima.

## Promena

Izaberite pod, plafon ili krov (u 3D prikazu, u stablu modela, ili krov klikom unutar njegovog obrisa na nivou iznad) i promenite ga u **Svojstvima**: vrstu poda, debljinu i koliko je gornja površina iznad nivoa; visinu, debljinu plafona i **Raster** (mrežu koju plan plafona crta na njemu: nijedan, 600 × 600, 600 × 1200, 2' × 2' ili 2' × 4'); nagib, previs, krajeve i debljinu krova. Svaka promena je jedan korak poništavanja.

## Dajte podu, plafonu ili krovu tip sa slojevima

Pod, plafon i krov mogu dobiti **tip**, kao i zid: imenovan sastav slojeva, svaki sa svojim materijalom i stvarnom debljinom.

- **Kad ga postavljate.** Alati Pod, Plafon, Krov i Crtanje poda imaju listu **Tip** u svom redu. **Bez tipa** postavlja ga kao i ranije, sa sopstvenom debljinom. Tip ga postavlja onoliko debelog koliko su slojevi tipa zajedno.
- **Kasnije.** Izaberite pod, plafon ili krov i izaberite **Tip** u Svojstvima. Element ostaje isti element: njegovo mesto, prostorija i podaci se čuvaju i ništa se ne crta ponovo. Menjaju se samo njegov tip, debljina i materijal. Tako element iz faze skice postaje razrađen: zamenite njegov generički tip pravim.
- **Uredi tip…** otvara uređivač tipa za taj tip: slojeve od **vrha** nadole, jezgro, funkciju svakog sloja i oznaku LOD tipa. Čuvanje menja svaki element tog tipa u jednom koraku, a jedno Opozovi to vraća. Promena početnog tipa čuva kopiju kao vaš tip.
- Dok element ima tip, njegova **Debljina** je tipova i ne može se unositi ručno. Izaberite drugi tip ili **Bez tipa** da je promenite.

Početni tipovi su jedan **generički** tip za svaki (jedan sloj generičkog materijala, označen LOD 200) i dva slojevita (označena LOD 300): drveni pod na gredama i betonski pod sa estrihom; drveni krov i betonski ravni krov; plafon od gips-ploča i viseći plafon sa pločicama. To su polazne vrednosti, a ne provereni sklopovi: proverite slojeve pre nego što se na njih oslonite.

Specifikacija **Slojevi: površina i zapremina** navodi svaki sloj svakog tipa u upotrebi; videti [Specifikacije, dimenzije i PDF](topic:plan-schedules-and-pdf). Tipovi podova, krovova i plafona putuju između projekata u paketu tipova ili kao stavka Biblioteke; videti [Paketi tipova](topic:type-packs).

## Dobro je znati

- Pomeranje, dodavanje ili brisanje zidova ponovo pravi prostorije, podove, plafone i krov iznad njih.
- Krov staje na bilo koji obris. Da biste svakom zidu dali sopstveni nagib, zabat ili jednovodni kraj, podignut venac, čeonu dasku i podgled, ili da nacrtate jednu ravan krova, videti [Krovovi: nagib za svaki zid, zabati, jednovodni krovovi i ravni krova](topic:roofs).
- {{key:Delete}} briše izabrani pod, plafon ili krov.
