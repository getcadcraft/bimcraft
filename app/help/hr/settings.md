---
title: Postavke BimCraft
summary: Odaberite hoće li se sobe i prostori prikazivati, hoće li se crtati bridovi i u kojem se pogledu model otvara te započnite postavljanje s uključenim hvatanjem za zid.
keywords: postavke, preferencije, opcije, prostori, prostorije, ifcspace, bridovi, linije, performanse, velik model, pogled pri otvaranju, kamera, pogled odozgo, hvatanje za zid, hvatanje
from: 4416e64f
---

Otvorite {{ui:Postavke}} pomoću zupčanika na alatnoj traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:BimCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opće}} sadrži postavke koje dijele sve aplikacije CadCraft (tema, alatna traka, ploče). Postavke BimCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati zadane postavke BimCraft}} na dnu dijaloškog okvira vraća njih, i zajedničke postavke, na početne vrijednosti.

## Izbornici, tipke i miš

Stil izbornika (vlastita alatna traka BimCraft, izbornik u stilu projektiranja zgrade, BIM vrpca ili naredbeni redak za crtanje), vaše tipke i izbornici te što rade kotačić i tipke miša. Pogledajte [Izbornici, tipke i miš](topic:menus-keys-and-mouse).

## Kad se model otvori

- **Prikaži sobe i prostore** (isključeno na početku): sobe i prostori su prozirni kvadri koji mogu sakriti zidove iza njih, pa su na početku skriveni. Gumb {{ui:Prostori}} iznad modela i dalje ih uključuje i isključuje za otvoreni model.
- **Bridovi**: {{ui:Bridovi uključeni}} (početno) crta linije bridova koje daju izgled nacrta. {{ui:Samo mali modeli}} crta ih samo za modele s manje od 300.000 trokuta, što velike modele čini bržima pri okretanju. {{ui:Bridovi isključeni}} pokreće svaki model bez njih. Gumb {{ui:Bridovi}} i dalje ih uključuje za otvoreni model. Iznad 1,5 milijuna trokuta bridovi su uvijek isključeni.

## Crteži se otvaraju u

Kako se DWG ili DXF crtež prvo prikazuje: {{ui:3D (najbrže)}} (početno) crta i velik crtež brzo, ili {{ui:Model (2D)}} otvara ravni prikaz prostora modela. Kartice iznad crteža prebacuju između {{ui:Model}}, listova i {{ui:3D}} u bilo kojem trenutku. Crtež bez ičega u prostoru modela ili preglednik koji ne može prikazati 3D uvijek se otvara u 2D.

## Pogled pri otvaranju

Kamera s kojom se model otvara: {{ui:Prilagodi}} (početno, cijeli model iz kuta), {{ui:Gore}}, {{ui:Naprijed}} ili {{ui:Bočno}}. Gumbi iznad modela mijenjaju pogled u bilo kojem trenutku.

**Zgrada zakrenuta na lokaciji**: mnogi modeli dolaze sa zgradom pod kutom u odnosu na osi datoteke (na geodetskim ili zajedničkim koordinatama). {{ui:Okomito na zgradu}} (početno) prikazuje takvu zgradu okomito: {{ui:Prilagodi}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Bočno}}, plohe ViewCubea i svaki novi presjek slijede njezine zidove, a kompas ViewCubea i dalje pokazuje prema sjeveru modela. {{ui:Kako je postavljena na lokaciji}} zadržava osi datoteke. Zgrada čiji zidovi idu duž osi izgleda isto u oba slučaja.

## Postavljanje stavki iz knjižnice

**Započnite s uključenim hvatanjem za zid** (isključeno na početku): kad počne postavljanje ili lijepljenje stavke iz knjižnice, njezina se stražnja strana hvata za najbliži zid, okrenuta prema prostoriji. {{key:Tab}} ili {{ui:Hvatanje za zid}} u traci za postavljanje isključuje ga za taj trenutak. Etaža bez zidova počinje bez njega.

## Presječna kutija

{{ui:Rezerva oko odabira}} je koliko prostora {{ui:Kutija presjeka oko odabira}} ostavlja sa svake strane odabranih elemenata, u milimetrima: na početku 300, do 5000. Pogledajte [Presijecanje IFC modela ravninom presjeka](topic:section-plane).

## Lokacija

{{ui:Geografska širina i dužina u}} odabire sustav u kojem {{ui:Mjeri}} › {{ui:Lokacija}} prikazuje geografske širine i dužine: WGS 84 (EPSG:4326, početno, kako koriste GPS i web karte), {{ui:Vlastiti datum datoteke}} ili jedan od ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 i CGCS2000. Kartografski sustav i datum same datoteke uvijek se također prikazuju. Pogledajte [Mjerenje udaljenosti, površina ploha i lokacija u 3D](topic:measure).

## Indikator u kutu

Što stoji u donjem desnom kutu 3D prikaza (IFC model i crtež prebačen u 3D): {{ui:ViewCube}} (početno), {{ui:Ikona osi}} (mali X, Y i Z) ili {{ui:Nema}}. Promjena je odmah vidljiva. Prikaz 2D crteža nikad ga ne prikazuje.

Na ViewCubeu kliknite plohu, brid ili kut da gledate s te strane, povucite kocku za kruženje, povucite prsten za okretanje i kliknite kućicu za početni pogled.

## Vaše ime na problemima

Kad ste prijavljeni, problemi nose ime vašeg računa i BimCraft ne traži ništa: ovaj dio prikazuje {{ui:Iz vašeg računa (<name>)}}. {{ui:Koristi drugo ime}} otvara okvir za drugo ime, koje vrijedi dok ne odaberete {{ui:Koristi ime mog računa}}. Odjavljeni, obrazac za problem traži ime kao i prije. Pogledajte [Problemi i BCF datoteke](topic:issues-bcf).

## Pomoćnici

**Dopustite AI pomoćnicima i skriptama da koriste BimCraft** (isključeno na početku) omogućuje pomoćniku na vašem računalu da dođe do otvorenog modela putem CadCraft Studija: **Čitaj** pronalazi elemente i čita njihova svojstva, **Promijeni pogled** ih izolira, sakriva i prikazuje. **Aktivnost** popisuje njegove pozive. Pogledajte [Dopustite AI pomoćniku rad s vašim modelom](topic:assistants).

:::note
Ostale postavke primjenjuju se kad se model otvori ili kad počne postavljanje. Model koji je već otvoren zadržava svoj izgled dok ne upotrijebite gumbe na alatnoj traci ili ga ponovno ne otvorite.
:::

## Povezano

- [Kopiranje, lijepljenje i dupliciranje stavki iz knjižnice](topic:copy-paste)
- [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library)
- [Zaslon BimCraft](topic:workspace)
- [Dopustite AI pomoćniku rad s vašim modelom](topic:assistants)
