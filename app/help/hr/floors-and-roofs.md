---
title: Sobe, podovi, stropovi i krovovi
summary: Sobe se pojavljuju kako ih zidovi zatvaraju; dajte sobi ili cijeloj zgradi pod i strop te postavite četverostrešni ili dvostrešni krov na zidove. Svi se prate kada se zidovi pomaknu.
keywords: soba, sobe, prostor, površina, opseg, pod, ploča, podna konstrukcija, strop, krov, četverostrešni krov, dvostrešni krov, nagib, previs, streha, sljeme, ljevak, 6/12
from: 1fb1813c
---

## Što ćete učiniti

Dovršite ljusku zgrade. Sobe nastaju same od zidova; podovi, stropovi i krov traže po jedan klik. Budući da se pronalaze iz zidova, prate se kada se zidovi pomaknu.

## Sobe

Svaki prostor zatvoren nacrtanim zidovima je soba. Pojavljuje se čim posljednji zid zatvori, s brojem (101, 102 … na prvoj razini, 201 … na sljedećoj) i nazivom (**Soba 1**, **Soba 2** …), a njezina se površina prikazuje u sredini na tlocrtu.

- Uz uključen {{ui:Odaberi}}, kliknite unutar sobe da je odaberete. U **Svojstva** promijenite **Naziv** (na primjer `Kuhinja`) i **Broj**; prikazuju se njezina površina i opseg.
- Izbrišite zid između dviju soba i one postaju jedna; nacrtajte zid preko sobe i ona postaje dvije. Soba zadržava naziv i broj dok se zidovi oko nje pomiču.
- Sobu nije moguće izbrisati samostalno: ona je prostor koji zidovi tvore.

Površine se mjere unutar ploha zidova. Sobe se spremaju kao IFC prostori s površinom poda, opsegom, visinom i volumenom, pa ih tablice čitaju (vidi [Zbrajanje količina, popisi elemenata i tablice prostora](topic:quantity-totals)).

## Podovi

1. Kliknite {{ui:Pod}}.
2. Odaberite **Ova soba** ili **Cijela zgrada**, **Vrstu** (drveni pod ili betonska ploča) i debljinu.
3. Pokažite unutar sobe (ili bilo gdje unutar zgrade). Ono što bi pod pokrivao bit će istaknuto s površinom.
4. Kliknite. Gornja strana poda je razina poda razine; pod se spušta za svoju debljinu. Pod za cijelu zgradu seže do vanjskih ploha zidova.

## Stropovi

1. Kliknite {{ui:Strop}}.
2. Odaberite **Ova soba** ili **Cijela zgrada** te njegovu **Visinu** iznad poda.
3. Pokažite unutar i kliknite.
4. Da biste ga vidjeli odozdo, s njegovom mrežom i svjetiljkama na njemu, prebacite tlocrt na tlocrt stropa: vidi [Prikazi, rasponi pogleda i vaši vlastiti listovi](topic:views-and-sheets).

## Krov

1. Na razini čiji zidovi nose krov kliknite {{ui:Krov}}.
2. Upišite **Nagib** kao porast preko 12 (`6/12`) ili u stupnjevima (`30`), te **Previs**.
3. Odaberite **Završetke**: **Četverostrešni krov** (sve strane su nagnute), **Zabati na kratkim stranama** ili **Zabati na dugim stranama** (zgrada s četiri strane), ili **Jednostrešni**.
4. Pokažite unutar zgrade: streha i sljeme prikazuju se na tlocrtu. Kliknite.

Krov leži na vrhu zidova, na razini iznad njih, a njegova donja strana spaja se s vanjskom plohom zidova. Zabatni završeci ispunjeni su zabatnim zidom jednako debelim kao zid ispod. Zgrada u obliku slova L, T ili U dobiva četverostrešni krov čija se krila spajaju u ljevcima.

## Promjena

Odaberite pod, strop ili krov (u 3D prikazu, stablu modela ili krov klikom unutar njegova obrisa na razini iznad) i promijenite ga u **Svojstva**: vrstu poda, debljinu i koliko je njegova gornja strana iznad razine; visinu stropa, debljinu i **Uzorak** (mrežu koju tlocrt stropa crta na njemu: nijedna, 600 × 600, 600 × 1200, 2' × 2' ili 2' × 4'); nagib krova, previs, završetke i debljinu. Svaka promjena je jedan korak poništavanja.

## Dodijelite podu, stropu ili krovu tip sa slojevima

Pod, strop i krov mogu dobiti **tip**, kao i zid: imenovanu građu od slojeva, svaki s materijalom i stvarnom debljinom.

- **Kada ga postavljate.** Alati Pod, Strop, Krov i Crtanje poda imaju popis **Tip** u svojem retku. **Bez tipa** postavlja ga kao i prije, sa svojom debljinom. Tip ga postavlja jednako debelog kao što su slojevi tipa zajedno.
- **Kasnije.** Odaberite pod, strop ili krov i izaberite **Tip** u Svojstvima. Element ostaje isti element: njegovo mjesto, soba i podaci se zadržavaju i ništa se ne crta ponovno. Mijenjaju se samo njegov tip, debljina i materijal. Tako element iz faze skice postaje razrađen: zamijenite njegov generički tip pravim.
- **Uredi tip…** otvara uređivač tipa za taj tip: slojevi od **vrha** prema dolje, jezgra, funkcija svakog sloja i LOD oznaka tipa. Spremanje mijenja svaki element tipa u jednom koraku, a jedan Poništi ga vraća. Promjena početnog tipa sprema kopiju kao vaš vlastiti tip.
- Dok element ima tip, njegova **Debljina** je tipova i ne može se upisati. Odaberite drugi tip ili **Bez tipa** da je promijenite.

Početni tipovi su jedan **generički** tip za svaki (jedan sloj generičkog materijala, označen LOD 200) i dva slojevita (označena LOD 300): drveni podni nosači i betonski pod s estrihom; drveni krov i betonski ravni krov; strop od gipsanih ploča i spušteni strop od pločica. Oni su polazne vrijednosti, a ne provjerene konstrukcije: provjerite slojeve prije nego se oslonite na njih.

Popis **Slojevi: površina i volumen** navodi svaki sloj svakog tipa u upotrebi; vidi [Tablice, dimenzije i PDF](topic:plan-schedules-and-pdf). Tipovi podova, krovova i stropova putuju između projekata u paketu tipova ili kao stavka knjižnice; vidi [Paketi tipova](topic:type-packs).

## Dobro je znati

- Pomicanje, dodavanje ili brisanje zidova ponovno izrađuje sobe, podove, stropove i krov nad njima.
- Krov pristaje na bilo koji oblik. Da biste svakom zidu dali vlastiti nagib, zabat ili jednostrešni završetak, uzdignutu vjenčanicu, čeonu dasku i podhodnik ili da biste nacrtali jednu ravninu krova, vidi [Krovovi: nagib za svaki zid, zabati, jednostrešni krovovi i ravnine krova](topic:roofs).
- {{key:Delete}} briše odabrani pod, strop ili krov.
