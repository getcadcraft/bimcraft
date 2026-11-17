---
title: Oblici zidova, podela, pomeranje, istezanje i zaključavanje
summary: Crtajte zidove kao pravougaonik, poligon, luk, na izabranim linijama ili oko obrisa; delite ih, vadite deo, pomerajte, istežite okvirom, poravnavajte i zaključavajte ih jedne za druge, za kotu ili za liniju rešetke. Svaka izmena drži zidove spojenim i jedan je korak za opoziv.
keywords: zameni tip, promeni tip, šta se pomerilo, lod, nivo razvoja, vrsta spoja, pokos, na kraj, pravo odsecanje, spojevi zidova, sledeći, prolazi kroz, zabrani spoj, dozvoli spoj, prioritet sloja, jezgro, prioritet, spoj, pravougaonik, zarotirani pravougaonik, poligon, upisan, opisan, luk, centar, tangentni luk, izabrane linije, tabulator, obris, čarobni štapić, podela, podela sa razmakom, razmak, obriši deo, ponovo spoji, pomeranje, kopija, istezanje okvirom, obuhvat, istezanje, poravnanje, zaključavanje, katanac, ograničenje, zaključaj kotu, uredi kotu, rešetka, zaključaj za mrežu, pomeri liniju rešetke, pomeraj položaja, slobodan spoj, slobodnostojeći, rast od, meri od, osna linija, unutrašnje lice, spoljašnje lice, prekini spoj, alt
from: 5b7d2f75
---

## Šta ćete uraditi

Pravite i menjate zidove pomoću postupaka alata za zidove. Svaki se završava kao crtanje zida po uglovima: uglovi se spajaju sami, spojevi se čuvaju u datoteci, a cela izmena je jedan korak u **Promenama** koji {{ui:Opozovi}} vraća. Zidovi zadržavaju svoj identitet: zid koji ste podelili, pomerili ili istegli i dalje je isti zid, sa svojim vratima, prozorima i kotama.

## Nacrtajte pravougaonik, poligon ili luk

Uz uključen {{ui:Crtanje}}, otvorite {{ui:Oblici}} u grupi Crtanje (ili izaberite oblik u listi **Oblik** u redu za zid). Red za zid prikazuje tip zida, referencu crtanja, spoljašnju stranu i vrh, kao za alat {{ui:Zid}}. Zatim kliknite ili upišite tačke (x,y · @dx,dy · @dužina<ugao · dužinu duž pokazivača):

- **Pravougaonik**: dva suprotna ugla. Četiri zida, četiri spojena ugla, jedan korak.
- **Zarotirani pravougaonik**: gde prva strana počinje i završava se (to određuje njen pravac i dužinu), pa treći klik za drugu stranu.
- **Poligon**: centar, pa ugao (**Upisan**) ili sredina strane (**Opisan**). Prvo postavite **Strane** (od 3 do 64).
- **Luk, centar**: centar, početak (to određuje poluprečnik), kraj. **Smer**: kraći put, u smeru kazaljke ili suprotno. Obilazak preko tri četvrtine kruga crta se kao dva zida.
- **Tangentni luk**: kliknite kraj zida, pa gde se luk završava. Luk izlazi iz kraja zida u njegovom sopstvenom pravcu.

Zatvoren oblik dobija spoljašnju stranu okrenutu napolje. Kad se crta na **Spoljašnjem licu** ili **Unutrašnjem licu**, lice na koje kliknete je lice koje ostaje na mestu.

## Zidovi na linijama koje već imate

- **Izabrane linije**: kliknite liniju i zid ide na nju. Pritisnite {{key:Tab}} (ili držite {{key:Shift}} dok kliknete) da uzmete ceo lanac linija spojenih kraj do kraja. Linije su crtačke linije ovog pogleda, referentni trag i linije rešetke.
- **Obris traga**: kliknite unutar površine zatvorene tim linijama ili zidovima. Zidovi idu oko najmanje površine oko klika.

## Podesite pre crtanja: pomeraj i spajanje

Red za zid ima još dva polja, koja koriste alat {{ui:Zid}} i oblici:

- **{{ui:Pomeraj}}**: zidovi se crtaju ovoliko daleko od linije na koju kliknete: + levo od nje, − desno, gledano onako kako crtate.
- **{{ui:Spajanje}}**: isključite da biste crtali slobodnostojeće zidove. Njihovi krajevi dobijaju **Zabrani spoj** i ostaju slobodni gde god da idu (videti [Promenite zid](topic:change-a-wall-or-door)).

## Podela, vađenje dela, ponovno spajanje

Otvorite {{ui:Zidovi}} u grupi Izmena.

- **{{ui:Podeli}}**: kliknite zid tamo gde treba da se preseče, ili ukucajte rastojanje od njegovog početka. Blizu zida koji ga seče, rez se hvata za mesto gde se sastaju. Dva dela imaju isti tip i ostaju spojena kraj do kraja. **{{ui:Razmak}}** ostavlja prazninu te dužine, centriranu na rez. **{{ui:Slobodni krajevi}}** daje krajevima reza Zabrani spoj (Podešavanja › BimCraft › Zidovi › **Kad se zid podeli** određuje koje je unapred štiklirano). Vrata ili prozor idu uz deo u kom stoje; rez kroz njih se odbija.
- **{{ui:Izbriši deo}}**: kliknite mesto gde deo počinje i gde se završava. Vrata u delu idu s njim.
- **{{ui:Spoji ponovo}}**: kliknite dva dela jednog zida (u pravcu, istog tipa). Ponovo postaju jedan zid, onaj koji ste prvi kliknuli, sa vratima oba.

## Vrsta spoja, zabrana spoja, prioritet sloja

Otvorite {{ui:Zidovi}} u grupi Izmena.

- **Vrsta spoja**: kliknite ugao gde se dva prava zida završavaju. Svaki klik prelazi na sledeću vrstu: **Pokos** (oba kraja se seku po liniji od unutrašnjeg do spoljašnjeg ugla, što je početno stanje svakog ugla), **Na kraj** (jedan zid prolazi do spoljašnjeg lica drugog, koje se zaustavlja o njegovu stranu) i **Pravo odsecanje** (kao na kraj, a zid koji prolazi se završava pravo; pod pravim uglom izgleda kao na kraj). **Sledeći**, ili {{key:Tab}}, čini da drugi zid bude onaj koji prolazi. Lista **Stil** u traci pokazuje ugao koji ste poslednji put kliknuli. Iste dve mogućnosti su u **Svojstvima** jednog zida: **Vrsta spoja na početku / na kraju** i **Prolazi kroz**. Svaka promena je jedan korak u **Promenama**. Osnova, 3D telo, prostorije i količine prate.
- Kod T-spoja, zid kome se pridružuje strana uvek prolazi. Gde se dva zida seku, klik (ili **Neprekidan na preseku** u Svojstvima) kaže koji je od dva neprekidan; to odlučuje koji se slojevi zida crtaju kroz presek.
- Stil pripada spoju: ostaje kad se zidovi pomeraju, a nestaje tek kad spoj nestane (zid je izbrisan, podeljen na tom kraju, ili kraj dobija Zabrani spoj). Ugao sa zakrivljenim zidom, ili gde se sastaju tri ili više zidova, zadržava pokos. Ugao oštriji od oko 30 stepeni, ili položeniji od oko 150, takođe se vraća na pokos.
- **Zabrani spoj**: kliknite blizu kraja zida. Taj kraj se oslobađa: ne spaja se ni sa čim, gde god zid ide, dok ponovo ne kliknete na njega. Slobodni krajevi su obeleženi krstom dok je alat uključen. Isti prekidač je **Spoj na početku / Spoj na kraju** u Svojstvima.
- **{{ui:Prioritet sloja}}**: gde se sretnu zidovi sa slojevima, jači sloj seče slabiji, pa se jezgra spajaju s jezgrima, a završni sloj se zaustavlja o jači sloj. Svaki sloj ima prioritet od 0 do 999; podrazumevano ga određuje funkcija sloja (konstrukcija 800, podloga 600, izolacija 400, membrana 300, završni 200, vazdušni sloj 100). {{ui:Prioritet sloja}} otvara sklop zida, gde kolona **Prioritet** postavlja sopstveni broj sloja. Slojevi jednakog prioriteta zaustavljaju se jedan o drugi, a linija se crta samo između različitih materijala. Vidi se na osnovama sa srednjim ili finim detaljima, na uglovima, T-spojevima i presecima dva prava zida; Podešavanja › BimCraft › Zidovi › **Očisti slojeve zidova na spoju** ga isključuje. Menja samo ono što se crta unutar zidova: obrisi zidova i količine ostaju kakvi ih daje vrsta spoja.

## Promenite tip mnogim zidovima

Prelazak sa skica osnova na radne crteže je uglavnom promena tipa: generički zid postaje konkretna konstrukcija. Ništa se ne crta ponovo.

1. Izaberite zidove (jedan, ili više uz {{key:Ctrl}} ili {{key:Shift}}).
2. U **Svojstvima** pritisnite **{{ui:Zameni tip}}…** pod Tip zida (ili otvorite {{ui:Zidovi}} u grupi Izmena i izaberite {{ui:Zameni tip}}, što otvara istu listu). Lista se otvara unutar **Svojstava**, u bloku izabranih zidova. Nije dijalog i ništa ne pokriva: osnova, 3D prikaz i izbor rade dok je otvorena, i prati zidove koje birate.
3. Lista prikazuje svaki tip zida sa njegovom debljinom i oznakom LOD, na primer „Zid 230 generički, LOD 200” i „230 glinena cigla, malterisana sa obe strane, LOD 300”. Tipovi koje izabrani zidovi sad imaju su označeni. Ukucajte u **Traži** da suzite: ime, debljinu ili `lod 300`.
4. Kliknite tip. Svaki izabrani zid se menja u njega u jednom koraku, pa jedno {{ui:Opozovi}} vraća celu zamenu. Mali x zatvara listu.

Svaki zid zadržava svoju liniju položaja. Zid na svojoj osi raste na obe strane; zid čija je linija položaja lice zadržava to lice i raste na drugu stranu, a zidovi spojeni s njim prate u uglovima. Zidovi zaključani za zamenjeni zid prate i njega. Vrata i prozori ostaju u svojim zidovima i ponovo se seku za novu debljinu.

Posle zamene, lista prikazuje **Šta se pomerilo**: koliko je zidova promenjeno i u šta, debljinu i LOD pre i posle, zidove koji su se pomerili u stranu da bi zadržali svoju liniju položaja, spojene zidove koji su pratili, vrata i prozore ponovo ugrađene, i svaku prostoriju čija se površina promenila, sa njenom površinom pre i posle. Statusna traka kaže isto u jednom redu. Izveštaj samo obaveštava; nikad ne zaustavlja zamenu. Izbor tipa u **Svojstva › Tip zida** radi istu zamenu i daje isti izveštaj.

Dve stvari zaustavljaju zamenu, i tada se ništa ne menja: vrata ili prozor koji u svom zidu više ne bi stali (zid se skrati tamo gde ga prati ugao; prvo učinite vrata uža ili ih pomerite dalje od ugla), i zaključavanje koje bi zamena pokvarila (zid zaključan za liniju rešetke svojom osom dok mu je linija položaja lice; otključajte ga ili vratite liniju položaja na osu).

Pomoćnik povezan s BimCraft-om može isto to uraditi (alati `wall_types_list` i `walls_swap_type`) i dobija isti izveštaj.

LOD oznaku tipa postavljate u uređivaču sklopa zida: videti [Sklopovi zidova](topic:wall-assemblies).

## Pomeranje i istezanje okvirom

- **{{ui:Pomeraj}}**: kliknite zid, pa stranu na koju ga pomerate, ili ukucajte rastojanje. Zid se pomera upravno na sebe, a zidovi spojeni s njim se rastežu. Štiklirajte **Kopiraj** za paralelnu kopiju umesto toga (nije spojena s originalom).
- **{{ui:Istegni okvirom}}**: kliknite dva ugla okvira, pa tačku sa koje se pomera i tačku na koju se pomera. Svaki kraj zida unutar okvira se pomera; zid koji je potpuno unutra se pomera, a zidovi koji se u njega naslanjaju idu s njim; zidovi koji seku okvir se rastežu.

## Izmenite kotu i zaključajte je

Izaberite referentnu kotu ({{ui:Napomene}} › {{ui:Referentna kota}}) i ukucajte njenu vrednost u **Svojstvima**: zid njene druge reference se pomera upravno na sebe, prva referenca ostaje, a spojeni zidovi prate. Štiklirajte **Zaključaj ovu kotu** da zadržite vrednost: kad se neki od dva zida kasnije pomeri, drugi prati. Zaključana vrednost se ne može prepisati dok je ne otštiklirate.

## Poravnaj i zaključaj

**{{ui:Poravnaj i zaključaj}}**: kliknite lice zida (ili osnu liniju, blizu sredine zida) ili liniju rešetke, pa lice zida koje treba dovesti na tu liniju. Zid se pomera upravno na nju. Najpre štiklirajte **Zaključaj** da ostanu poravnati: katanac se prikazuje u osnovi, a kad se jedan zid pomeri, drugi prati. **Svojstva** zida navode njegova **Zaključavanja**, svako sa **Otključaj**.

## Zaključajte zidove za linije rešetke

Izaberite zid koji ide uz liniju rešetke, ili čiji se kraj nalazi na njoj, i izaberite liniju rešetke u **Svojstvima** › **Zaključaj za mrežu**. Zatim izaberite liniju rešetke alatom {{ui:Mreža}} i ukucajte rastojanje u **{{ui:Pomeri za}}**: linija se pomera upravno na sebe, a zidovi zaključani za nju prate, zajedno sa svojim spojenim zidovima, u jednom koraku. Zid zaključan za liniju rešetke ne može sam da se pomeri s nje (pomerite liniju ili otključajte zid); linija rešetke okrenuta tako da zaključani zid ne može ostati upravno na nju se odbija. Preimenovanje linije zadržava zaključavanje; brisanje je uklanja.

## Dužina: koja strana drži i šta meri

- **{{ui:Rast od}}** (Svojstva jednog zida): **Početak drži** (pomera se kraj), **Kraj drži** (pomera se početak) ili **Centar drži** (oba kraja se pomeraju za polovinu). Dok upisujete Dužinu, osnova obeležava tačku koja drži. Zid spojen na kraju koji se pomera pomera se upravno na sebe i zadržava svoj ugao.
- **{{ui:Meri od}}** (pored Kota na osnovi, u Svojstvima i u Podešavanja › BimCraft › Zidovi): osna linija, unutrašnje lice ili spoljašnje lice. Polje Dužina i kote zidova na osnovi čitaju isto, pa se slažu. Počinje na osnoj liniji.
- Da biste pomerili zid slobodan od spojeva (oni se prekidaju, a zid zadržava svoj identitet), držite {{key:Alt}} dok prevlačite njegov srednji hvatač.

## Dobro je znati

- Ovi postupci su iz specifikacije alata za zidove (strane 4 do 9). Vrsta spoja i prioritet sloja su pravljeni za prave zidove; prioritet sloja se vidi samo u osnovi (ne u presecima, izgledima ili 3D, gde je zid jedno telo), ne u čvorovima sa tri zida ili više, a membrane se ne prenose.
- Vrsta spoja se čuva u njegovom zapisu u IFC datoteci (ime `IfcRelConnectsPathElements`, na primer `CadCraft join L butt 1`), pa drugi programi i dalje čitaju spoj, a stariju datoteku otvarate s pokosima.
- Zaključavanja i spojevi se čuvaju u IFC datoteci (zaključavanja kao `CadCraft_WallHolds` na projektu, spojevi kao `IfcRelConnectsPathElements`), pa su tu kad ponovo otvorite datoteku.
- Zakrivljeni zidovi se mogu deliti, ponovo spajati i vaditi im deo; ne mogu se pomerati ni zaključavati.
- Videti i [Crtanje zidova](topic:draw-walls), [Promenite zid, vrata ili prozor](topic:change-a-wall-or-door) i [Oblikovanje zida](topic:wall-shape).
