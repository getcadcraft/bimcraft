---
title: Postavite sliku ispod tlocrta
summary: Postavite PNG, JPEG ili WebP sliku (skenirani tlocrt, skicu, fotografiju lokacije, zračni snimak) ispod tlocrta razine ili na okomitu ravninu, izmjerite je prema dvije točke, pomičite, zakrećite, prigušite i zaključajte, pogledajte je u 3D i u PDF-u tlocrta te je čuvajte uz model u paketu.
keywords: slika, podloga, PNG, JPEG, WebP, skeniranje, skica, fotografija, zračni snimak, situacija, mjerilo, neprozirnost, zaključaj, podloga za crtanje, ocrtavanje
from: e3c78d1f
---

## Postavite sliku

Uključite {{ui:Crtanje}}, idite na razinu i odaberite {{ui:Slika}} u izborniku {{ui:Izgradnja}}. Zatim {{ui:Umetni sliku…}} i odaberite PNG, JPEG ili WebP datoteku. Čita se u vašem pregledniku i nikad se ne učitava. Pojavljuje se ispod tlocrta, prilagođena prikazu, a alatna traka kaže da još nije izmjerena. Sve što nacrtate nalazi se iznad nje.

## Postavite mjerilo

Odaberite {{ui:Mjerilo}}, kliknite dvije točke na slici čija vam je stvarna udaljenost poznata (dva kraja zida na skeniranom tlocrtu, kota otisnuta na skici), zatim upišite udaljenost i pritisnite {{key:Enter}}. Slika raste ili se smanjuje oko prve točke koju ste kliknuli. {{key:Esc}} otkazuje.

## Lijepljenje kopiranog područja

U MarkupCraftu, {{ui:Kopiraj područje}} kopira dio PDF lista kao sliku. Natrag u BimCraftu, dok je tlocrt razine prikazan, pritisnite {{key:Ctrl+V}} (ili {{ui:Zalijepi}} u izborniku {{ui:Uređivanje}}): područje se postavlja na tlocrt kao slika, centrirano tamo gdje je pokazivač (ili u sredini prikaza). Kad je list imao mjerilo crteža, ulazi u svojoj stvarnoj veličini, pa je zid na njemu jednako dug kao vaši zidovi. Bez njega ulazi u veličini papira i {{ui:Mjerilo}} počinje, pa možete kliknuti dvije točke i upisati njihovu udaljenost. Područje kopirano kao preklop počinje s neprozirnošću kojom je kopirano. To je jedan korak poništavanja i čuva se kao i svaka druga slika.

Lijepljenje uzima ono što ste kopirali posljednje: kopirano područje ili nešto što ste kopirali u BimCraftu. {{key:Ctrl+V}} također lijepi bilo koju drugu PNG, JPEG ili WebP sliku iz međuspremnika, postavljenu kao {{ui:Umetni sliku…}} i još neizmjerenu. Kopirano područje pamti se šest sati.

## Pomaknite, zakrenite, prigušite, zaključajte

{{ui:Pomakni}} uzima baznu točku na slici, zatim mjesto na koje treba ići. {{ui:Zakreni}} uzima kut u stupnjevima, oko središta slike. {{ui:Neprozirnost}} je prigušuje da se vaše linije ističu. {{ui:Zaključaj}} sprječava pomicanje dok crtate; zaključana slika i dalje dopušta mijenjanje neprozirnosti i skrivanje. Svaka je promjena jedan korak poništavanja.

## Više slika, više razina

Slika pripada razini na kojoj je postavljena i prikazuje se na tlocrtu te razine i na stropnom planu. Kliknite sliku da na njoj radite, ili je odaberite na popisu. {{ui:Sakrij}} je isključuje bez uklanjanja; {{ui:Ukloni}} (ili {{key:Delete}}) je izbacuje iz modela.

## Slike u 3D prikazu

Svaka slika također stoji u 3D prikazu kao ravna ploha: slika tlocrta leži na svojoj razini, a slika okomite ravnine stoji iznad svoje linije presjeka. Crta se preko modela, ne skrivajući ga, a model skriva dio slike iza sebe. Preklapajuće slike se slažu po udaljenosti. Neprozirnost, Sakrij, Zaključaj i Ukloni rade isto, a {{ui:Prikaži u 3D}} isključuje sve ravnine samo u 3D prikazu. Razina drži najviše 8 slika, da bi pogledi ostali brzi.

## Slika na okomitoj ravnini

Pod {{ui:Postavi na}} odaberite {{ui:Okomita ravnina (linija presjeka)}}, zatim {{ui:Umetni sliku…}}. Kliknite dva kraja linije na tlocrtu (kraj lica zida se prihvaća) ili odaberite imenovanu liniju presjeka razine pod {{ui:Iznad linije presjeka}}; tada nisu potrebni klikovi. Slika stoji na razini iznad te linije, široka koliko i linija. Postavite joj {{ui:Širina}}, mjesto {{ui:Duž linije}} i {{ui:Visina iznad etaže}} upisivanjem; {{ui:Zakreni}} je okreće u njezinoj vlastitoj ravnini. Okomita slika ne crta se ispod tlocrta; tlocrt prikazuje njezinu liniju dok na njoj radite. BimCraft nema interaktivni 2D prozor presjeka: presjeci i pogledi crtaju se na listovima, a slike se u tim prikazima listova zasad ne ispisuju.

## Ispis

{{ui:Pogled ispisa}} na tlocrtu upisuje slike razine u PDF ispod crteža, u njihovom mjerilu, zakretu i neprozirnosti, obrezane na list; skrivena slika ostaje van. JPEG ulazi kakav jest; ostale slike se prvo spuštaju na 200 dpi na listu.

## Čuva se uz model

Bajtovi slike ne upisuju se u IFC tekst. Model se poziva na svaku sliku po nazivu (IfcDocumentReference, na primjer pictures/<id>.png), a bajtovi putuju u projektnom paketu. Upotrijebite {{ui:Spremi kao paket…}} (ili {{ui:Spremi kao IFC}} i odaberite ga): dobivate jednu .ccbundle datoteku s modelom i njegovim slikama; IFC ostaje mali, a izmjene brze. Otvorite .ccbundle i slike se vraćaju.

Običan .ifc ne može sadržavati sliku bez da postane velik. Kad ga spremite, BimCraft kaže koliko je slika čuvano izvan njega i nudi paket, ili običan IFC koji ugrađuje slike do 512 KB i ostavlja ostale. Običan .ifc otvoren bez svog paketa prikazuje te slike kao nedostajuće, a popis problema ih navodi; otvorite .ccbundle u kojem su spremljene. Datoteke spremljene prvom verzijom, sa slikom unutar IFC-a, i dalje se otvaraju, a spremanje paketa seli njihove slike van. Slika se čuva kakva jest do 6 MB; veća se prvo smanjuje, i to vam se javlja. Drugi programi otvaraju model i ignoriraju slike. Slika koju još niste izmjerili navodi se u popisu problema kao napomena.

## U presječnim i poglednim listovima

Slika na okomitoj ravnini (odaberite {{ui:Okomito}} u panelu slike i kliknite dva kraja linije ili je stavite iznad imenovane linije presjeka) ispisuje se u prikazima listova koji na nju gledaju ravno. Presjek prikazuje sliku koja stoji na svojoj liniji reza ili koja je postavljena nad tom linijom presjeka po nazivu. Pogled prikazuje svaku okomitu sliku čija ravnina gleda prema njemu. Slika se crta ispod linija prikaza, u mjerilu prikaza, obrezana na prikaz, i zadržava svoju neprozirnost. Otvorite {{ui:Listovi…}} da je vidite; PDF lista nosi je kao sliku. Gledano straga slika je zrcaljena, kao u 3D. Skrivene slike se ispuštaju.
