---
title: BimCraft podešavanja
summary: Izaberi da li se sobe i prostori prikazuju, da li se crtaju ivice i u kom pogledu se model otvara, i počni postavljanje sa uključenim prikačinjanjem za zid.
keywords: podešavanja, preferencije, opcije, prostori, sobe, ifcspace, ivice, linije, performanse, veliki model, pogled pri otvaranju, kamera, pogled odozgo, prikači za zid, prikačinjanje
from: 4416e64f
---

Otvori {{ui:Podešavanja}} zupčanikom u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:BimCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, traka sa alatkama, paneli). Podešavanja BimCraft-a važe samo u aplikaciji: menjaš ih ovde, a ovaj pregledač ih pamti. {{ui:Vrati podešavanja BimCraft-a}} na dnu dijaloga vraća njih, i zajednička, na početne vrednosti.

## Meni, tasteri i miš

Stil menija (sopstvena traka alata BimCraft-a, meni za kućni dizajn, BIM traka ili komandna linija za crtanje), tvoji sopstveni tasteri i meniji, i šta točkić i tasteri miša rade. Vidi [Meni, tasteri i miš](topic:menus-keys-and-mouse).

## Kada se model otvori

- **Prikaži sobe i prostore** (na početku isključeno): sobe i prostori su providne kutije koje mogu sakriti zidove iza sebe, pa su na početku sakriveni. Dugme {{ui:Prostori}} iznad modela i dalje ih uključuje i isključuje za otvoreni model.
- **Ivice**: {{ui:Ivice uključene}} (početno) crta linije ivica koje daju izgled crteža. {{ui:Samo mali modeli}} crta ih samo za modele sa manje od 300,000 trouglova, što čuva brže okretanje velikih modela. {{ui:Ivice isključene}} počinje svaki model bez njih. Dugme {{ui:Ivice}} i dalje ih menja za otvoreni model. Iznad 1.5 miliona trouglova ivice su uvek isključene.

## Crteži se otvaraju u

Kako se DWG ili DXF crtež prvi put prikazuje: {{ui:3D (najbrže)}} (početno) crta i veliki crtež brzo, ili {{ui:Model (2D)}} otvara ravni prikaz modelskog prostora. Kartice iznad crteža prebacuju između {{ui:Model}}, listova i {{ui:3D}} u bilo kom trenutku. Crtež bez ičega u modelskom prostoru, ili pregledač koji ne može da prikaže 3D, uvek se otvara u 2D.

## Pogled pri otvaranju

Kamera sa kojom se model otvara: {{ui:Uklopi}} (početno, ceo model iz ugla), {{ui:Gore}}, {{ui:Napred}} ili {{ui:Sa strane}}. Dugmad iznad modela menjaju pogled u bilo kom trenutku.

**Zgrada okrenuta na svojoj lokaciji**: mnogi modeli stižu sa zgradom pod uglom u odnosu na ose datoteke (kod geodetskih ili zajedničkih koordinata). {{ui:Upravno na zgradu}} (početno) prikazuje takvu zgradu upravno: {{ui:Uklopi}}, {{ui:Gore}}, {{ui:Napred}}, {{ui:Sa strane}}, strane kocke pogleda i svaki novi presek prate njene zidove, a kompas kocke pogleda i dalje pokazuje sever modela. {{ui:Kako je postavljena na lokaciji}} zadržava ose datoteke. Zgrada čiji zidovi idu duž osa izgleda isto na oba načina.

## Postavljanje stavki iz biblioteke

**Počni sa uključenim prikačinjanjem za zid** (na početku isključeno): kada počne postavljanje ili lepljenje stavke iz biblioteke, njena pozadina se prikači za najbliži zid, okrenuta prema prostoriji. {{key:Tab}} ili {{ui:Prikači za zid}} u traci za postavljanje isključuje ga za taj trenutak. Sprat bez zidova počinje bez njega.

## Presečna kutija

{{ui:Prostor oko izbora}} je koliko prostora {{ui:Kutija preseka oko izbora}} ostavlja sa svake strane izabranih elemenata, u milimetrima: 300 na početku, do 5000. Vidi [Presecanje IFC modela ravninom preseka](topic:section-plane).

## Lokacija

{{ui:Geografska širina i dužina u:}} bira sistem u kome {{ui:Izmeri}} › {{ui:Lokacija}} daje geografske širine i dužine: WGS 84 (EPSG:4326, početno, kako koriste GPS i mape na vebu), {{ui:Sopstveni datum datoteke}}, ili jedan od ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 i CGCS2000. Sistem karte i datum same datoteke uvek se takođe prikazuju. Vidi [Merenje rastojanja, površina lica i lokacija u 3D](topic:measure).

## Indikator ugla

Šta stoji u donjem desnom uglu 3D prikaza (IFC model i crtež prebačen na 3D): {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali X, Y i Z) ili {{ui:Ništa}}. Menja se odmah. Prikaz 2D crteža nikad ne pokazuje ništa.

Na kocki pogleda klikni stranu, ivicu ili ugao da gledaš sa te strane, prevuci kocku da je okrećeš, prevuci prsten da se okreneš, a klikni kućicu za početni pogled.

## Tvoje ime na problemima

Kada si prijavljen, problemi nose ime tvog naloga i BimCraft ništa ne traži: ovaj deo prikazuje {{ui:Sa tvog naloga (<name>)}}. {{ui:Koristi drugo ime}} otvara polje za drugo ime, koje važi dok ne izabereš {{ui:Koristi ime mog naloga}}. Kada nisi prijavljen, obrazac za problem i dalje traži ime kao ranije. Vidi [Problemi i BCF datoteke](topic:issues-bcf).

## Asistenti

**Dozvoli AI asistentima i skriptama da koriste BimCraft** (na početku isključeno) omogućava asistentu na tvom računaru da dođe do otvorenog modela preko CadCraft Studija: **Čitaj** pronalazi elemente i čita njihova svojstva, **Promeni pogled** ih izoluje, sakriva i prikazuje. **Aktivnost** navodi njegove pozive. Vidi [Dozvoli AI asistentu da radi sa tvojim modelom](topic:assistants).

:::note
Ostala podešavanja važe kada se model otvori ili kada počne postavljanje. Model koji je već otvoren zadržava svoj izgled dok ne koristiš dugmad na traci alata ili ga ponovo ne otvoriš.
:::

## Povezano

- [Kopiraj, nalepi i dupliraj stavke iz biblioteke](topic:copy-paste)
- [Postavi opremu i nameštaj iz biblioteke](topic:place-from-library)
- [BimCraft ekran](topic:workspace)
- [Dozvoli AI asistentu da radi sa tvojim modelom](topic:assistants)
