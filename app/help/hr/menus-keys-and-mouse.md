---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara načinu na koji već radite, dodijelite bilo kojoj naredbi vlastitu tipku, premjestite naredbe između izbornika te postavite što rade kotačić i svaka tipka miša.
keywords: stil izbornika, izbornici, traka izbornika, vrpca, naredbeni redak, prečaci tipkovnice, prečaci, tipke, prilagodba, preraspodjela prečaca, miš, kotačić, obrni smjer, srednja tipka, pomicanje prikaza, orbitiranje, dvoslovne tipke, izvoz, uvoz, prebacivanje, poznato
from: a424e836
---

Naredbe BimCraft-a su iste bez obzira kako do njih dođete. **Stil izbornika** samo određuje gdje se naredbe nalaze na zaslonu, kako se zovu i kojim tipkama se pokreću, pa možete zadržati navike koje imate. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah vidljiva, a ovaj preglednik je pamti.

## Pet stilova

| Stil | Što dobivate |
|---|---|
| {{ui:CadCraft}} | Vlastita alatna traka i tipke BimCraft-a ({{key:W}} zid, {{key:D}} vrata, {{key:N}} prozor, {{key:X}} presjek, {{key:F}} prilagodi). Početna točka. |
| {{ui:Home design}} | Traka izbornika (Datoteka, Uređivanje, Izgradnja, Knjižnica, 3D, CAD, Alati, Pogled) iznad reda alata za zgradu, kako ih raspoređuju programi za projektiranje stambenih zgrada. Iste jednoslovne tipke, uz {{key:Mod+L}} za knjižnicu, {{key:F9}} za 3D prikaz, {{key:F10}} za tlocrt i {{key:F11}} za oboje. |
| {{ui:BIM ribbon}} | Kartice s velikim gumbima (Arhitektura, Umetanje, Anotacije, Izmjena, Pogled, Izlaz) s izbornikom Datoteka i brzim gumbima s desne strane. Dvoslovne tipke: {{key:W}} pa {{key:A}} za zid, {{key:D}} {{key:R}} vrata, {{key:W}} {{key:N}} prozor, {{key:S}} {{key:C}} presjek, {{key:Z}} {{key:F}} prilagodi. Srednja tipka pomiče prikaz; {{key:Shift}} i srednja tipka orbitiraju. |
| {{ui:Drafting classic}} | Mala vrpca i naredbeni redak, za one koji upisuju naredbe: WALL, DOOR, WINDOW, ROOF, U (poništi), ZOOM, SECTION, PLOT, INSERT, HELP. Počnite tipkati bilo gdje i slova idu u naredbeni redak; {{key:Enter}} pokreće, {{key:Enter}} na praznom unosu ponavlja posljednju naredbu, {{key:Esc}} ga briše. |
| {{ui:Viewer}} | Za otvaranje i provjeru modela, a ne za crtanje: izbornici {{ui:File}}, {{ui:View}}, {{ui:Show}}, {{ui:Check}} i {{ui:Edit}} iznad reda alata za pregled (prilagodi, gore, naprijed, strana, presjek, mjeri, sakrij, izoliraj, prozirno, prikaži sve, šetnja). Alati za zgradu čekaju u izborniku {{ui:Model}} na kraju. Iste tipke kao u vlastitom stilu BimCraft-a. |

Izbornici i vrpce prikazuju se kad je model otvoren ili kad započnete novu zgradu; prije toga ploča lijevo otvara datoteke i pokreće zgrade.

:::tip
Tipka koja pripada rasporedu BimCraft-a, ali ne stilu koji ste odabrali, ne radi ništa, a redak statusa kaže kamo je njezina naredba otišla („U BIM vrpci, Presjek je SC“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, a alat koji radi zadržava svoje tipke: {{key:R}} i {{key:Tab}} dok postavljate, {{key:W}} {{key:A}} {{key:S}} {{key:D}} dok hodate, {{key:H}} s alatima za vrata i prozor, brojevi dok upisujete duljinu.
:::

## Prilagodite po svojoj mjeri

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (pomaže okvir za pretraživanje). Kliknite {{ui:Dodaj tipku}} i pritisnite tipku ili dvije tipke zaredom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. Uz traku izbornika ili vrpcu, {{ui:Gdje se nalazi}} premješta naredbu u drugi izbornik ili ploču ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić, tipke koje pomiču tlocrt i što svaka tipka radi u 3D prikazima.
5. Dajte mu naziv i kliknite {{ui:Spremi}}.

Spremanje ugrađenog stila stvara vašu kopiju („Projektiranje doma (moja kopija)“); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama ili ona koja bi se izvršila prije nego što se može upisati dvoslovna tipka prikazana je crveno i mora se popraviti prije spremanja.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početno) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Štipanje na touchpadu uvijek zumira u smjeru kretanja prstiju.
- **Pomicanje tlocrta i crteža**: bilo kojom od lijeve, srednje i desne tipke. {{key:Space}} i povlačenje također pomiču; povlačenje lijevom tipkom pomiče samo tamo gdje klik ne bi ništa odabrao ni nacrtao.
- **Povlačenje u 3D prikazima**: {{ui:Zasebno za svaki pogled}} zadržava gumbe BimCraft-a (lijevi orbitira, desni pomiče). Ili postavite svaki gumb na orbitiranje, pomicanje, zumiranje ili ništa; {{key:Shift}} uz gumb mijenja orbitiranje i pomicanje. Klik bez povlačenja i dalje nešto odabire.

## Ponesite ih sa sobom

{{ui:Izvezi}} sprema stil u uporabi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može upućivati samo na naredbe BimCraft-a: sve ostalo u njoj (naredba koju ova verzija nema, tipka koja ovdje ne radi) se izostavlja i broji u retku statusa. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (vlastita alatna traka, traka izbornika, vrpca ili {{ui:Klasično crtanje}}; {{ui:Preglednik}} je samo BimCraft-ov i nema odgovarajućeg stila drugdje), uz promjene koje ste napravili u svakoj aplikaciji. Aplikacija bez odgovarajućeg stila zadržava svoj. Odabir drugog stila u jednoj aplikaciji mijenja samo nju.
:::

Povezano: [Tipkovnica i miš](topic:keyboard) · [Postavke BimCraft-a](topic:settings) · [Dolazak iz drugih BIM i programa za crtanje](topic:coming-from)
