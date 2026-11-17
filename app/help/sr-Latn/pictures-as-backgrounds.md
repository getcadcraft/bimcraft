---
title: Postavljanje slike ispod plana
summary: Postavite PNG, JPEG ili WebP sliku (skenirani plan, skicu, fotografiju lokacije, aero snimak) ispod plana nivoa ili na vertikalnoj ravni, razmerite je sa dve tačke, pomerajte, okrećite, stišavajte i zaključavajte, pogledajte je u 3D i u PDF-u plana, i čuvajte je uz model u paketu.
keywords: slika, pozadina, PNG, JPEG, WebP, skeniranje, skica, fotografija, aero snimak, situacioni plan, razmera, neprovidnost, zaključavanje, podloga, precrtavanje
from: e3c78d1f
---

## Postavljanje slike

Uključite {{ui:Crtanje}}, idite na nivo i izaberite {{ui:Slika}} u meniju {{ui:Verzija}}. Zatim {{ui:Umetni sliku…}} i izaberite PNG, JPEG ili WebP datoteku. Čita se u vašem pregledaču i nikada se ne otprema. Pojavljuje se ispod plana, prilagođena prikazu, a traka sa alatkama kaže da još nije razmerena. Sve što crtate nalazi se iznad nje.

## Podešavanje razmere

Izaberite {{ui:Razmera}}, kliknite dve tačke na slici čije stvarno rastojanje znate (dva kraja zida na skeniranom planu, kota otštampana na skici), pa ukucajte rastojanje i pritisnite {{key:Enter}}. Slika raste ili se smanjuje oko prve tačke koju ste kliknuli. {{key:Esc}} otkazuje.

## Lepljenje kopirane oblasti

U MarkupCraft-u, {{ui:Kopiraj oblast}} kopira deo PDF lista kao sliku. Nazad u BimCraft-u, sa prikazanim planom nivoa, pritisnite {{key:Ctrl+V}} (ili {{ui:Nalepi}} u meniju {{ui:Uređivanje}}): oblast se postavlja na plan kao slika, centrirana tamo gde je pokazivač (ili u sredini prikaza). Kada je list imao razmeru crteža, dolazi u svojoj stvarnoj veličini, pa je zid na njemu jednake dužine kao vaši zidovi. Bez nje dolazi u veličini papira i počinje {{ui:Razmera}}, pa možete kliknuti dve tačke i ukucati njihovo rastojanje. Oblast kopirana kao preklop počinje sa neprovidnošću sa kojom je kopirana. To je jedan korak poništavanja i čuva se kao svaka druga slika.

Lepljenje uzima poslednje kopirano: kopiranu oblast ili nešto što ste kopirali u BimCraft-u. {{key:Ctrl+V}} takođe lepi bilo koju drugu PNG, JPEG ili WebP sliku sa vašeg klipborda, postavljenu kao {{ui:Umetni sliku…}} i još nerazmerenu. Kopirana oblast pamti se šest sati.

## Pomeranje, okretanje, stišavanje, zaključavanje

{{ui:Pomeri}} uzima osnovnu tačku na slici, pa mesto na koje treba da ide. {{ui:Okreni}} uzima ugao u stepenima, oko centra slike. {{ui:Neprovidnost}} je stišava da se vaše linije istaknu. {{ui:Zaključaj}} sprečava da se pomera dok crtate; zaključana slika i dalje dozvoljava da menjate neprovidnost i da je sakrijete. Svaka promena je jedan korak poništavanja.

## Više slika, više nivoa

Slika pripada nivou na kome je postavljena i prikazuje se na planu tog nivoa i na plafonskom planu. Kliknite sliku da radite na njoj, ili je izaberite na listi. {{ui:Sakrij}} je isključuje bez uklanjanja; {{ui:Ukloni}} (ili {{key:Delete}}) je izbacuje iz modela.

## Slike u 3D prikazu

Svaka slika takođe stoji u 3D prikazu kao ravan: slika plana leži na svom nivou, a slika na vertikalnoj ravni stoji iznad svoje linije preseka. Crta se preko modela bez skrivanja, a model sakriva deo slike iza sebe. Preklapajuće slike se poređaju po udaljenosti. Neprovidnost, Sakrij, Zaključaj i Ukloni rade isto, a {{ui:Prikaži u 3D}} isključuje sve ravni samo u 3D prikazu. Nivo drži najviše 8 slika, da bi prikazi ostali brzi.

## Slika na vertikalnoj ravni

Pod {{ui:Postavi na}} izaberite {{ui:Vertikalna ravan (linija preseka)}}, pa {{ui:Umetni sliku…}}. Kliknite dva kraja linije na planu (kraj lica zida se hvata), ili izaberite imenovanu liniju preseka nivoa u {{ui:Iznad linije preseka}} i nijedan klik nije potreban. Slika stoji na nivou iznad te linije, široka koliko i linija. Postavite njenu {{ui:Širinu}}, njen položaj {{ui:Duž linije}} i njenu {{ui:Visinu iznad nivoa}} ukucavanjem; {{ui:Okreni}} je okreće u njenoj sopstvenoj ravni. Vertikalna slika se ne crta ispod plana; plan pokazuje njenu liniju dok na njoj radite. BimCraft nema interaktivni 2D prozor preseka: preseci i izgledi se crtaju na listovima, a slike se još ne štampaju u tim prikazima listova.

## Štampanje

{{ui:Prikaz za štampu}} na planu upisuje slike nivoa u PDF ispod crteža, u njihovoj razmeri, okretanju i neprovidnosti, odsečene na list; sakrivena slika ostaje van. JPEG ide kakav jeste; ostale slike se prvo spuštaju na 200 dpi na listu.

## Čuvanje uz model

Bajtovi slike se ne upisuju u IFC tekst. Model se poziva na svaku sliku po imenu (IfcDocumentReference kao pictures/<id>.png), a bajtovi putuju u paketu projekta. Koristite {{ui:Sačuvaj kao paket…}} (ili {{ui:Sačuvaj kao IFC}} i izaberite ga): dobijate jednu .ccbundle datoteku sa modelom i njegovim slikama, IFC ostaje mali, a izmene brze. Otvorite .ccbundle i slike se vraćaju.

Obični .ifc ne može da sadrži sliku bez da postane velik. Kada ga sačuvate, BimCraft kaže koliko slika je sačuvano van njega i nudi paket, ili običan IFC koji ugrađuje slike do 512 KB i ostavlja ostale van. Obični .ifc otvoren bez svog paketa prikazuje te slike kao nedostajuće, a Problemi ih navode; otvorite .ccbundle u kome su sačuvane. Datoteke sačuvane prvom verzijom, sa slikom unutar IFC-a, i dalje se otvaraju, a čuvanje paketa izdvaja njihove slike. Slika se čuva kakva jeste do 6 MB; veća se prvo smanjuje, i o tome ste obavešteni. Druge aplikacije otvaraju model i ignorišu slike. Slika koju još niste razmerili navodi se u Problemima kao napomena.

## U listovima preseka i izgleda

Slika na vertikalnoj ravni (izaberite {{ui:Vertikalno}} u panelu slike i kliknite dva kraja linije, ili je postavite iznad imenovane linije preseka) štampa se u prikazima listova koji gledaju pravo u nju. Presek prikazuje sliku koja stoji na svojoj liniji reza, ili koja je postavljena iznad te linije preseka po imenu. Izgled prikazuje svaku vertikalnu sliku čija ravan gleda ka njemu. Slika se crta ispod linija prikaza, u razmeri prikaza, odsečena na prikaz, i zadržava svoju neprovidnost. Otvorite {{ui:Listovi…}} da je vidite; PDF lista je nosi kao sliku. Gledana sa zadnje strane, slika je ogledalski preslikana, kao i u 3D. Sakrivene slike se izostavljaju.
