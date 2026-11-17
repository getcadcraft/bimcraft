---
title: BimCraft postavke
summary: Odaberite hoće li se prostorije i prostori prikazivati, hoće li se crtati ivice i u kojem pogledu se model otvara, te počnite postavljanje s uključenim prislanjanjem na zid.
keywords: postavke, preference, opcije, prostori, prostorije, ifcspace, ivice, linije, performanse, veliki model, pogled pri otvaranju, kamera, pogled odozgo, prislanjanje na zid, prislanjanje
from: 4416e64f
---

Otvorite {{ui:Postavke}} zupčanikom u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:BimCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži postavke koje dijele sve CadCraft aplikacije (tema, traka s alatima, paneli). Postavke BimCraft-a postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati BimCraft postavke na početne}} na dnu dijaloga vraća njih, i zajedničke, na početne vrijednosti.

## Meniji, tipke i miš

Stil menija (vlastita traka alata BimCraft-a, traka menija za projektovanje kuća, BIM traka ili naredbena linija za crtanje), vaše tipke i meniji, te šta rade točkić i tipke miša. Pogledajte [Meniji, tipke i miš](topic:menus-keys-and-mouse).

## Kada se model otvori

- **Prikaži prostorije i prostore** (na početku isključeno): prostorije i prostori su prozirne kutije koje mogu sakriti zidove iza sebe, pa su na početku skriveni. Dugme {{ui:Prostorije}} iznad modela i dalje ih uključuje i isključuje za otvoreni model.
- **Ivice**: {{ui:Ivice uključene}} (početno) crta linije ivica koje daju izgled crteža. {{ui:Samo mali modeli}} crta ih samo za modele s manje od 300,000 trouglova, što drži velike modele bržim za okretanje. {{ui:Ivice isključene}} pokreće svaki model bez njih. Dugme {{ui:Ivice}} i dalje ih prebacuje za otvoreni model. Iznad 1.5 miliona trouglova ivice su uvijek isključene.

## Crteži se otvaraju u

Kako se DWG ili DXF crtež prvi put prikazuje: {{ui:3D (najbrže)}} (početno) crta i veliki crtež brzo, ili {{ui:Model (2D)}} otvara ravni prikaz prostora modela. Kartice iznad crteža prebacuju između {{ui:Model}}, listova i {{ui:3D}} u bilo kom trenutku. Crtež bez ičega u prostoru modela, ili pregledač koji ne može prikazati 3D, uvijek se otvara u 2D.

## Pogled pri otvaranju

Kamera s kojom se model otvara: {{ui:Uklopi}} (početno, cijeli model iz ugla), {{ui:Gore}}, {{ui:Sprijeda}} ili {{ui:Strana}}. Dugmad iznad modela mijenjaju pogled u bilo kom trenutku.

**Zgrada zakrenuta na lokaciji**: mnogi modeli stignu sa zgradom pod uglom u odnosu na ose datoteke (na geodetskim ili zajedničkim koordinatama). {{ui:Pravo u odnosu na zgradu}} (početno) prikazuje takvu zgradu pravo: {{ui:Uklopi}}, {{ui:Gore}}, {{ui:Sprijeda}}, {{ui:Strana}}, strane kocke pogleda i svaki novi presjek prate njene zidove, a kompas kocke pogleda i dalje pokazuje sjever modela. {{ui:Kako je postavljena na lokaciji}} zadržava ose datoteke. Zgrada čiji zidovi idu uz ose izgleda isto na oba načina.

## Postavljanje stavki iz biblioteke

**Počnite s uključenim prislanjanjem na zid** (na početku isključeno): kada počne postavljanje ili lijepljenje stavke iz biblioteke, njena leđa se prislanjaju na najbliži zid, okrenuta prema prostoriji. {{key:Tab}} ili {{ui:Prislanjanje na zid}} u traci za postavljanje isključuju ga za taj trenutak. Sprat bez zidova počinje bez njega.

## Presječna kutija

{{ui:Rezerva oko odabira}} je koliko prostora {{ui:Presječna kutija oko odabira}} ostavlja sa svake strane odabranih elemenata, u milimetrima: na početku 300, do najviše 5000. Pogledajte [Presijecanje IFC modela ravninom presjeka](topic:section-plane).

## Lokacija

{{ui:Geografska širina i dužina u}} bira sistem u kojem {{ui:Mjeri}} › {{ui:Lokacija}} daje geografske širine i dužine: WGS 84 (EPSG:4326, početno, kako koriste GPS i web karte), {{ui:Vlastiti datum datoteke}} ili jedan od ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 i CGCS2000. Sistem karte i datum same datoteke uvijek se također prikazuju. Pogledajte [Mjerenje udaljenosti, površina ploha i lokacija u 3D](topic:measure).

## Indikator ugla

Šta se nalazi u donjem desnom uglu 3D prikaza (IFC model i crtež prebačen u 3D): {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali X, Y i Z) ili {{ui:Nijedan}}. Mijenja se odmah. Prikaz 2D crteža nikad ne pokazuje nijedno.

Na kocki pogleda kliknite stranu, ivicu ili ugao da pogledate s te strane, prevucite kocku za orbitiranje, prevucite prsten za okretanje, a kliknite kuću za početni pogled.

## Vaše ime na problemima

Kada ste prijavljeni, problemi nose ime vašeg računa i BimCraft ne traži ništa: ovaj dio prikazuje {{ui:Iz vašeg računa (<name>)}}. {{ui:Koristi drugo ime}} otvara polje za drugo ime, koje vrijedi dok ne odaberete {{ui:Koristi ime mog računa}}. Kada niste prijavljeni, obrazac za problem traži ime kao i prije. Pogledajte [Problemi i BCF datoteke](topic:issues-bcf).

## Asistenti

**Dozvoli AI asistentima i skriptama da koriste BimCraft** (na početku isključeno) omogućava asistentu na vašem računaru da pristupi otvorenom modelu preko CadCraft Studija: **Čitaj** pronalazi elemente i čita njihova svojstva, **Promijeni pogled** izolira, sakriva i prikazuje ih. **Aktivnost** nabraja njegove pozive. Pogledajte [Dozvoli AI asistentu da radi s vašim modelom](topic:assistants).

:::note
Ostale postavke primjenjuju se kada se model otvori ili kada počne postavljanje. Model koji je već otvoren zadržava svoj izgled dok ne upotrijebite dugmad na traci alata ili ga ponovo ne otvorite.
:::

## Povezano

- [Kopiranje, lijepljenje i dupliciranje stavki iz biblioteke](topic:copy-paste)
- [Postavljanje opreme i namještaja iz biblioteke](topic:place-from-library)
- [Ekran BimCraft-a](topic:workspace)
- [Dozvoli AI asistentu da radi s vašim modelom](topic:assistants)
