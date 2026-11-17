---
title: Stavite sliku ispod plana
summary: Postavite PNG, JPEG ili WebP sliku (skenirani plan, skicu, fotografiju lokacije, snimak iz zraka) ispod plana nivoa ili na vertikalnu ravan, razmjerite je sa dvije tačke, pomjerajte, okrećite, izbljeđujte i zaključavajte, vidite je u 3D i u PDF-u plana, i čuvajte je uz model u paketu.
keywords: slika, pozadina, PNG, JPEG, WebP, sken, skica, fotografija, snimak iz zraka, situacioni plan, razmjera, neprovidnost, zaključavanje, podloga, prenos
from: e3c78d1f
---

## Postavljanje slike

Uključite {{ui:Crtanje}}, idite na nivo, i odaberite {{ui:Slika}} u meniju {{ui:Verzija}}. Zatim {{ui:Umetni sliku…}} i odaberite PNG, JPEG ili WebP datoteku. Čita se u vašem pregledaču i nikada se ne otprema. Pojavljuje se ispod plana, prilagođena pogledu, a traka alata kaže da još nije razmjerena. Sve što nacrtate nalazi se iznad nje.

## Postavljanje razmjere

Odaberite {{ui:Razmjera}}, kliknite dvije tačke na slici čije realno rastojanje znate (dva kraja zida na skeniranom planu, kota ispisana na skici), zatim upišite rastojanje i pritisnite {{key:Enter}}. Slika se povećava ili smanjuje oko prve tačke koju ste kliknuli. {{key:Esc}} otkazuje.

## Lijepljenje kopiranog područja

U MarkupCraft-u, {{ui:Kopiraj područje}} kopira dio PDF lista kao sliku. Vratite se u BimCraft, dok je plan nivoa prikazan, pritisnite {{key:Ctrl+V}} (ili {{ui:Zalijepi}} u meniju {{ui:Uredi}}): područje se pojavljuje na planu kao slika, centrirano tamo gdje je pokazivač (ili u sredini prikaza). Kada je list imao razmjeru crteža, dolazi u svojoj stvarnoj veličini, pa je zid na njemu jednako dug kao vaši zidovi. Bez nje dolazi u veličini papira i {{ui:Razmjera}} počinje, pa možete kliknuti dvije tačke i upisati njihovo rastojanje. Područje kopirano kao preklop počinje sa neprovidnošću sa kojom je kopirano. To je jedan korak poništavanja i čuva se kao svaka druga slika.

Zalijepi uzima ono što ste posljednje kopirali: kopirano područje ili nešto što ste kopirali u BimCraft-u. {{key:Ctrl+V}} takođe lijepi bilo koju drugu PNG, JPEG ili WebP sliku sa vaše klipborde, postavljenu kao {{ui:Umetni sliku…}} i još nerazmjerenu. Kopirano područje pamti se šest sati.

## Pomjeranje, okretanje, izbljeđivanje, zaključavanje

{{ui:Pomjeri}} uzima osnovnu tačku na slici, pa mjesto gdje treba da ide. {{ui:Okreni}} uzima ugao u stepenima, oko centra slike. {{ui:Neprovidnost}} je izbljeđuje da se vaše linije istaknu. {{ui:Zaključaj}} sprječava da se pomjera dok crtate; zaključana slika i dalje dozvoljava da mijenjate neprovidnost i sakrijete je. Svaka promjena je jedan korak poništavanja.

## Više slika, više nivoa

Slika pripada nivou na kojem je postavljena i prikazuje se na planu tog nivoa i na plafonskom planu. Kliknite sliku da radite na njoj, ili je odaberite na listi. {{ui:Sakrij}} je isključuje bez uklanjanja; {{ui:Ukloni}} (ili {{key:Delete}}) je izbacuje iz modela.

## Slike u 3D prikazu

Svaka slika se takođe pojavljuje u 3D prikazu kao ravna ploha: slika na planu leži na svom nivou, a slika na vertikalnoj ravni stoji iznad svoje linije presjeka. Crta se preko modela, bez skrivanja, a model skriva dio slike koji je iza njega. Preklapajuće slike se sortiraju po udaljenosti. Neprovidnost, Sakrij, Zaključaj i Ukloni rade isto, a {{ui:Prikaži u 3D}} isključuje sve ploče samo u 3D prikazu. Nivo drži najviše 8 slika, da bi pogledi ostali brzi.

## Slika na vertikalnoj ravni

Pod {{ui:Postavi na}} odaberite {{ui:Vertikalna ravan (linija presjeka)}}, pa {{ui:Umetni sliku…}}. Kliknite dva kraja linije na planu (kraj lica zida se hvata), ili odaberite imenovanu liniju presjeka nivoa u {{ui:Iznad linije presjeka}} i nisu potrebni klikovi. Slika stoji na nivou iznad te linije, široka koliko i linija. Postavite joj {{ui:Širina}}, mjesto {{ui:Duž linije}} i {{ui:Visina iznad nivoa}} upisivanjem; {{ui:Okreni}} je okreće u njenoj ravni. Vertikalna slika se ne crta ispod plana; plan prikazuje njenu liniju dok na njoj radite. BimCraft nema interaktivni 2D prozor presjeka: presjeci i izgledi se crtaju na listovima, a slike se još ne štampaju u tim prikazima listova.

## Štampanje

{{ui:Prikaz za štampu}} na planu upisuje slike nivoa u PDF ispod crteža, u njihovoj razmjeri, okretanju i neprovidnosti, odsječene na list; sakrivena slika ostaje van. JPEG ulazi kakav jeste; ostale slike se prvo smanjuju na 200 dpi na listu.

## Čuvanje uz model

Bajtovi slike se ne upisuju u IFC tekst. Model se poziva na svaku po nazivu (IfcDocumentReference kao pictures/<id>.png) a bajtovi putuju u paketu projekta. Koristite {{ui:Spasi kao paket…}} (ili {{ui:Spasi kao IFC}} i odaberite ga): dobijate jedan .ccbundle sa modelom i njegovim slikama, IFC ostaje mali, a izmjene brze. Otvorite .ccbundle i slike se vraćaju.

Običan .ifc ne može sadržati sliku bez da postane velik. Kada ga snimite, BimCraft kaže koliko je slika sačuvano van njega i nudi paket, ili običan IFC koji ugrađuje slike do 512 KB i ostavlja ostale. Običan .ifc otvoren bez svog paketa prikazuje te slike kao nedostajuće, a Problemi ih navodi; otvorite .ccbundle u kojem su sačuvane. Datoteke sačuvane prvom verzijom, sa slikom unutar IFC-a, i dalje se otvaraju, a snimanje paketa premješta njihove slike van. Slika se čuva kakva jeste do 6 MB; veća se prvo smanjuje, i to vam se kaže. Druge aplikacije otvaraju model i ignorišu slike. Slika koju još niste razmjerili navodi se u Problemima kao napomena.

## Na listovima presjeka i izgleda

Slika na vertikalnoj ravni (odaberite {{ui:Vertikalno}} u panelu slike i kliknite dva kraja linije, ili je postavite iznad imenovane linije presjeka) štampa se u prikazima listova koji gledaju pravo na nju. Presjek prikazuje sliku koja stoji na svojoj liniji reza, ili koja je postavljena iznad te linije presjeka po nazivu. Izgled prikazuje svaku vertikalnu sliku čija ravan gleda prema njemu. Slika se crta ispod linija prikaza, u razmjeri prikaza, odsječena na prikaz, i zadržava svoju neprovidnost. Otvorite {{ui:Listovi…}} da je vidite; PDF lista je nosi kao sliku. Gledano sa zadnje strane, slika je ogledalski preslikana, kao u 3D. Skrivene slike se izostavljaju.
