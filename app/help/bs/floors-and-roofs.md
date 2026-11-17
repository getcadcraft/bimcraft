---
title: Prostorije, podovi, plafoni i krovovi
summary: Prostorije se pojavljuju kad ih zidovi zatvore; prostoriji ili cijeloj zgradi dodijelite pod i plafon, a na zidove postavite četverovodni ili zabatni krov. Sve to prati zidove kad se oni pomjere.
keywords: prostorija, prostorije, prostor, površina, obim, pod, ploča, podna podloga, plafon, krov, četverovodni krov, zabatni krov, nagib, previs, streha, sljeme, dolina, 6/12
from: 1fb1813c
---

## Šta ćete uraditi

Završite ljusku zgrade. Prostorije nastaju same od zidova; pod, plafon i krov dodaju se jednim klikom svaki. Pošto se nalaze na osnovu zidova, prate ih kad se zidovi pomjere.

## Prostorije

Svaki prostor zatvoren nacrtanim zidovima je prostorija. Pojavljuje se čim posljednji zid zatvori prostor, s brojem (101, 102 … na prvom nivou, 201 … na sljedećem) i nazivom (**Prostorija 1**, **Prostorija 2** …), a njena površina prikazuje se u sredini na planu.

- Uz uključeno {{ui:Odaberi}}, kliknite unutar prostorije da je odaberete. U **Svojstvima** promijenite **Naziv** (na primjer `Kuhinja`) i **Broj**; prikazani su njena površina i obim.
- Obrišite zid između dvije prostorije i one postaju jedna; nacrtajte zid preko prostorije i ona postaje dvije. Prostorija zadržava naziv i broj dok se zidovi oko nje pomjeraju.
- Prostorija se ne može obrisati sama: ona je prostor koji stvaraju zidovi.

Površine se mjere unutar lica zidova. Prostorije se čuvaju u IFC-u kao prostori sa svojom površinom poda, obimom, visinom i zapreminom, pa ih specifikacije čitaju (pogledajte [Zbrajanje količina, popis elemenata i specifikacija prostora](topic:quantity-totals)).

## Podovi

1. Kliknite {{ui:Pod}}.
2. Izaberite **Ova prostorija** ili **Cijela zgrada**, **Vrstu** (drveni pod ili betonska ploča) i njenu debljinu.
3. Pokažite unutar prostorije (ili bilo gdje unutar zgrade). Ono što bi pod pokrio ističe se s površinom.
4. Kliknite. Gornja strana poda je na nivou poda; pod ide dolje za svoju debljinu. Pod za cijelu zgradu seže do vanjskih lica zidova.

## Plafoni

1. Kliknite {{ui:Plafon}}.
2. Izaberite **Ova prostorija** ili **Cijela zgrada**, i njegovu **Visinu** iznad poda.
3. Pokažite unutar i kliknite.
4. Da ga vidite odozdo, s mrežom i svjetlima na njemu, prebacite plan na plan plafona: pogledajte [Pogledi, opsezi pogleda i vaši listovi](topic:views-and-sheets).

## Krov

1. Na nivou čiji zidovi nose krov kliknite {{ui:Krov}}.
2. Upišite **Nagib** kao porast na 12 (`6/12`) ili u stepenima (`30`), i **Previs**.
3. Izaberite **Završetke**: **Četverovodni krov** (sve strane su nagnute), **Zabati na kraćim stranama** ili **Zabati na dužim stranama** (zgrada s četiri strane), ili **Jednovodni**.
4. Pokažite unutar zgrade: streha i sljeme prikazuju se na planu. Kliknite.

Krov leži na zidovima, na nivou iznad njih, a njegova donja strana dodiruje vanjsko lice zidova. Zabatni završeci popunjavaju se zabatnim zidom debljine kao zid ispod. Zgrada u obliku L, T ili U dobija četverovodni krov čija se krila sastaju u dolinama.

## Promjena

Odaberite pod, plafon ili krov (u 3D prikazu, u stablu modela, ili krov tako što kliknete unutar njegove konture na nivou iznad) i promijenite ga u **Svojstvima**: vrstu poda, debljinu i koliko je njegova gornja strana iznad nivoa; visinu, debljinu i **Uzorak** plafona (mrežu koju plan plafona crta na njemu: nema, 600 × 600, 600 × 1200, 2' × 2' ili 2' × 4'); nagib, previs, završetke i debljinu krova. Svaka promjena je jedan korak poništavanja.

## Dajte podu, plafonu ili krovu tip sa slojevima

Pod, plafon i krov mogu dobiti **tip**, kao što ga dobija zid: imenovani sastav slojeva, svaki s materijalom i stvarnom debljinom.

- **Kad ga postavljate.** Alati Pod, Plafon, Krov i Nacrtaj pod imaju listu **Tip** u svom redu. **Bez tipa** postavlja ga kao i do sada, sa sopstvenom debljinom. Tip ga postavlja onoliko debelog koliko iznose zajedno slojevi tipa.
- **Kasnije.** Odaberite pod, plafon ili krov i izaberite **Tip** u Svojstvima. Element ostaje isti element: njegovo mjesto, prostorija i podaci se čuvaju i ništa se ne crta iznova. Mijenjaju se samo njegov tip, debljina i materijal. Tako element iz faze skice postaje razrađen: zamijenite njegov generički tip pravim.
- **Uredi tip…** otvara uređivač tipa za taj tip: slojevi od **vrha** prema dolje, jezgro, funkcija svakog sloja i LOD oznaka tipa. Snimanje mijenja svaki element tog tipa u jednom koraku, a jedno Poništi to vraća. Promjena početnog tipa snima kopiju kao vaš vlastiti tip.
- Dok element ima tip, njegova **Debljina** pripada tipu i ne može se unijeti. Izaberite drugi tip ili **Bez tipa** da je promijenite.

Početni tipovi su jedan **generički** tip za svaki (jedan sloj generičkog materijala, označen LOD 200) i dva slojevita (označena LOD 300): drveni pod na gredama i betonski pod s estrihom; drveni krov i betonski ravni krov; plafon od gips-kartona i viseći plafon od ploča. To su polazne vrijednosti, a ne provjerene konstrukcije: provjerite slojeve prije nego im se oslonite.

Specifikacija **Slojevi: površina i zapremina** navodi svaki sloj svakog tipa u upotrebi; pogledajte [Specifikacije, dimenzije i PDF](topic:plan-schedules-and-pdf). Tipovi poda, krova i plafona prenose se između projekata u paketu tipova ili kao stavka biblioteke; pogledajte [Paketi tipova](topic:type-packs).

## Dobro je znati

- Pomjeranje, dodavanje ili brisanje zidova ponovo pravi prostorije, podove, plafone i krov iznad njih.
- Krov staje na bilo koju konturu. Da svaki zid dobije svoj nagib, zabat ili jednovodni završetak, podignutu rozetu, vijenac i podgled, ili da nacrtate pojedinačnu ravan krova, pogledajte [Krovovi: nagib za svaki zid, zabati, jednovodni krovovi i ravni krova](topic:roofs).
- {{key:Delete}} briše odabrani pod, plafon ili krov.
