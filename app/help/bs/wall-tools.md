---
title: Oblici zidova, podjela, pomak, rastezanje i zaključavanje
summary: Crtajte zidove kao pravougaonik, poligon ili luk, na izabranim linijama ili oko konture; dijelite ih, vadite dio, pomjerajte, rastežite okvirom, poravnavajte i zaključavajte jedan za drugi, za kotu ili za liniju mreže. Svaka izmjena drži zidove spojene i jedan je korak poništavanja.
keywords: zamijeni tip, promijeni tip, ponovno tipiziranje, šta se pomjerilo, lod, nivo razvijenosti, stil spoja, pokos, čeoni spoj, ravni kraj, spojevi zidova, sljedeći, prolazi kroz, zabrani spoj, dozvoli spoj, prioritet sloja, jezgro, prioritet, spoj, pravougaonik, zakrenuti pravougaonik, poligon, upisan, opisan, luk, centar, tangentni luk, izbor linija, tab, trasiranje, kontura, čarobni štapić, podijeli, podijeli s razmakom, razmak, obriši segment, ponovo spoji, pomak, kopija, rastezanje okvirom, okvir, rastezanje, poravnaj, zaključaj, katanac, ograničenje, zaključaj kotu, uredi kotu, mreža, zaključaj za mrežu, pomjeri liniju mreže, pomak postavljanja, isključi spoj, slobodnostojeći, raste od, mjeri od, osna linija, unutrašnje lice, vanjsko lice, razdvoji, alt
from: 5b7d2f75
---

## Šta ćete uraditi

Pravite i mijenjate zidove pomoću recepata alata za zid. Svaki se završava isto kao crtanje zida po uglovima: uglovi se spajaju sami, spojevi se čuvaju u datoteci, a cijela izmjena je jedan korak u **Promjenama** koji {{ui:Poništi}} vraća. Zidovi zadržavaju identitet: zid koji ste podijelili, pomjerili ili rastegnuli i dalje je isti zid, sa svojim vratima, prozorima i kotama.

## Nacrtajte pravougaonik, poligon ili luk

Uz uključeno {{ui:Crtanje}}, otvorite {{ui:Oblici}} u grupi Crtanje (ili izaberite oblik u listi **Oblik** u redu Zid). Red Zid prikazuje tip zida, referencu crteža, vanjsku stranu i vrh, kao i za alat {{ui:Zid}}. Zatim kliknite, ili upišite tačke (x,y · @dx,dy · @dužina<ugao · dužina duž pokazivača):

- **Pravougaonik**: dva suprotna ugla. Četiri zida, četiri spojena ugla, jedan korak.
- **Zakrenuti pravougaonik**: gdje prva stranica počinje i završava (to određuje njen smjer i dužinu), zatim treći klik za drugu stranicu.
- **Poligon**: centar, zatim ugao (**Upisan**) ili sredina stranice (**Opisan**). Prvo postavite **Stranice** (3 do 64).
- **Luk, centar**: centar, početak (to određuje poluprečnik), kraj. **Smjer**: kraći put, u smjeru kazaljke ili obrnuto. Luk preko tri četvrtine kruga crta se kao dva zida.
- **Tangentni luk**: kliknite kraj zida, zatim mjesto gdje luk završava. Luk polazi s kraja zida u smjeru samog zida.

Zatvoreni oblik dobija vanjsku stranu prema van. Nacrtan na **Vanjskom licu** ili **Unutrašnjem licu**, lice na koje kliknete je ono koje ostaje na mjestu.

## Zidovi na linijama koje već imate

- **Izaberi linije**: kliknite liniju i zid ide na nju. Pritisnite {{key:Tab}} (ili držite {{key:Shift}} dok kliknete) da uzmete cijeli lanac linija spojenih od kraja do kraja. Linije su pomoćne linije ovog pogleda, referenca trasiranja i linije mreže.
- **Trasiraj konturu**: kliknite unutar površine zatvorene tim linijama ili zidovima. Zidovi idu oko najmanje površine oko klika.

## Postavite prije crtanja: pomak i spoj

Red Zid ima još dva polja, koja koriste alat {{ui:Zid}} i oblici:

- **{{ui:Pomak}}**: zidovi se crtaju ovoliko daleko od linije na koju kliknete: + ulijevo od nje, − udesno, gledano u smjeru crtanja.
- **{{ui:Spoj}}**: isključite ga da nacrtate slobodnostojeće zidove. Njihovi krajevi dobijaju **Zabrani spoj** i ostaju slobodni gdje god idu (vidi [Promijenite zid](topic:change-a-wall-or-door)).

## Podijelite, izvadite dio, ponovo spojite

Otvorite {{ui:Zidovi}} u grupi Uredi.

- **{{ui:Podijeli}}**: kliknite zid mjesto gdje ga treba presjeći, ili upišite udaljenost od njegovog početka. Blizu zida koji ga siječe, rez se hvata na mjestu gdje se sijeku. Dva dijela imaju isti tip i ostaju spojena od kraja do kraja. **{{ui:Razmak}}** ostavlja prazninu te dužine centriranu na rezu. **{{ui:Slobodni krajevi}}** daje krajevima reza Zabrani spoj umjesto toga (Postavke › BimCraft › Zidovi › **Kad se zid dijeli** određuje koje je prvo označeno). Vrata ili prozor idu s dijelom u kojem stoje; rez kroz njih se odbija.
- **{{ui:Obriši segment}}**: kliknite gdje dio počinje i gdje završava. Vrata u tom dijelu idu s njim.
- **{{ui:Spoji ponovo}}**: kliknite dva dijela jednog zida (u liniji, istog tipa). Ponovo postaju jedan zid, prvi koji ste kliknuli, s vratima oba.

## Stil spoja, zabrana spoja, prioritet sloja

Otvorite {{ui:Zidovi}} u grupi Uredi.

- **{{ui:Stil spoja}}**: kliknite ugao gdje se dva ravna zida završavaju. Svaki klik prelazi na sljedeći stil: **Pokos** (oba kraja se režu po liniji od unutrašnjeg do vanjskog ugla, što je početno stanje svakog ugla), **Čeoni** (jedan zid prolazi do vanjskog lica drugog, koji se zaustavlja uz njegovu stranu) i **Ravni kraj** (kao čeoni, ali zid koji prolazi ima ravan kraj; pod pravim uglom izgleda kao čeoni). **Sljedeći**, ili {{key:Tab}}, čini da drugi zid bude onaj koji prolazi. Lista **Stil** u traci pokazuje ugao koji ste zadnji kliknuli. Iste dvije mogućnosti su u **Svojstvima** jednog zida: **Stil spoja na početku / na kraju** i **Prolazi kroz**. Svaka izmjena je jedan korak u **Promjenama**. Osnova, 3D tijelo, prostorije i količine slijede.
- Na T-spoju zid čija se strana dodiruje uvijek prolazi kroz. Gdje se dva zida sijeku, klik (ili **Kontinuirano na mjestu presijecanja** u Svojstvima) kaže koji je od dva kontinuiran; to određuje čiji se slojevi crtaju kroz presjek.
- Stil pripada spoju: ostaje kad se zidovi pomjere i nestaje samo kad spoj nestane (zid je izbrisan, podijeljen na tom kraju, ili kraj dobija Zabrani spoj). Ugao sa zakrivljenim zidom, ili gdje se sastaje tri ili više zidova, zadržava pokos. Oštriji ugao od oko 30 stepeni ili tupiji od oko 150 također se vraća na pokos.
- **Zabrani spoj**: kliknite blizu kraja zida. Taj kraj se oslobađa: ne spaja se ni s čim, gdje god zid ide, dok ga ponovo ne kliknete. Slobodni krajevi su označeni krstićem dok je alat uključen. Isti prekidač je **Spoji na početku / Spoji na kraju** u Svojstvima.
- **Prioritet sloja**: gdje se sretnu zidovi sa slojevima, jači sloj siječe slabiji, pa se jezgra spajaju s jezgrama, a obloga se zaustavlja uz jači sloj. Svaki sloj ima prioritet od 0 do 999; podrazumijevano dolazi iz funkcije sloja (konstrukcija 800, podloga 600, izolacija 400, membrana 300, obloga 200, zračni sloj 100). {{ui:Prioritet sloja}} otvara sklop zida, gdje kolona **Prioritet** postavlja vlastiti broj sloja. Slojevi istog prioriteta se zaustavljaju jedan uz drugi, a linija se crta samo između različitih materijala. Vidi se na osnovama s detaljem **Srednji** ili **Fini**, na uglovima, T-spojevima i presjecima dva ravna zida; Postavke › BimCraft › Zidovi › **Očisti slojeve zidova gdje se zidovi sastaju** ga isključuje. Mijenja samo ono što se crta unutar zidova: konture zidova i količine ostaju onakve kakve ih daje stil spoja.

## Zamijenite tip mnogim zidovima

Prelazak sa skica na radne nacrte je uglavnom promjena tipa: generički zid postaje konkretna konstrukcija. Ništa ne crtate ponovo.

1. Izaberite zidove (jedan, ili više uz {{key:Ctrl}} ili {{key:Shift}}).
2. U Svojstvima pritisnite **Zamijeni tip…** pod Tip zida (ili otvorite {{ui:Zidovi}} u grupi Uredi i izaberite {{ui:Zamijeni tip}}, što otvara istu listu). Lista se otvara unutar Svojstava, u bloku izabranih zidova. Nije dijalog i ništa ne prekriva: osnova, 3D prikaz i izbor rade dok je otvorena, i prati zidove koje birate.
3. Lista prikazuje svaki tip zida s njegovom debljinom i oznakom LOD, na primjer „Generički zid 230, LOD 200“ i „230 cigla, malterisana s obje strane, LOD 300“. Tipovi koje izabrani zidovi sad imaju su označeni. Upišite u **Traži** da suzite: naziv, debljinu ili `lod 300`.
4. Kliknite tip. Svaki izabrani zid prelazi na njega u jednom koraku, pa jedno {{ui:Poništi}} vraća cijelu zamjenu. Mali x zatvara listu.

Svaki zid zadržava svoju liniju položaja. Zid na osnoj liniji raste na obje strane; zid čija je linija položaja lice zadržava to lice i raste na drugu stranu, a zidovi spojeni s njim slijede u uglovima. Zidovi zaključani za zamijenjeni zid slijede i njega. Vrata i prozori ostaju u svojim zidovima i ponovo se sijeku za novu debljinu.

Nakon zamjene, lista prikazuje **Šta se pomjerilo**: koliko je zidova promijenjeno i u šta, debljinu i LOD prije i poslije, zidove koji su se pomjerili u stranu da zadrže svoju liniju položaja, spojene zidove koji su slijedili, vrata i prozore koji su ponovo ugrađeni, i svaku prostoriju čija se površina promijenila, s njenom površinom prije i poslije. Traka stanja kaže isto u jednom redu. Izvještaj samo obavještava; nikad ne zaustavlja zamjenu. Izbor tipa u **Svojstva › Tip zida** radi istu zamjenu i daje isti izvještaj.

Dvije stvari zaustavljaju zamjenu, i tada se ništa ne mijenja: vrata ili prozor koji više ne bi stali u svoj zid (zid postaje kraći gdje ga prati ugao; prvo suzite vrata ili ih pomjerite dalje od ugla), i zaključavanje koje bi zamjena prekinula (zid zaključan za liniju mreže svojom osnovnom linijom dok mu je linija položaja lice; otključajte ga ili vratite liniju položaja na osnovnu liniju).

Pomoćnik povezan s BimCraft-om može isto uraditi zamjenu (alati `wall_types_list` i `walls_swap_type`) i dobija isti izvještaj.

LOD oznaka tipa postavlja se u uređivaču sklopa zida: vidi [Sklopovi zidova](topic:wall-assemblies).

## Pomak i rastezanje okvirom

- **{{ui:Pomak}}**: kliknite zid, zatim stranu na koju ga pomjeruje, ili upišite udaljenost. Zid se pomjera pod pravim uglom prema sebi, a zidovi spojeni s njim se rastežu. Označite **Kopiraj** za paralelnu kopiju umjesto toga (nije spojena s originalom).
- **{{ui:Rastezanje okvirom}}**: kliknite dva ugla okvira, zatim tačku s koje se pomjera i tačku na koju se pomjera. Svaki kraj zida unutar okvira se pomjera; zid potpuno unutra se pomjera, a zidovi koji se u njega naslanjaju dolaze s njim; zidovi koji sijeku okvir se rastežu.

## Uredite kotu i zaključajte je

Izaberite referentnu kotu (Anotiraj › {{ui:Referentna kota}}) i upišite njenu vrijednost u **Svojstvima**: zid njene druge reference se pomjera pod pravim uglom prema sebi, prva referenca ostaje, a spojeni zidovi slijede. Označite **Zaključaj ovu kotu** da zadržite vrijednost: kad se bilo koji zid kasnije pomjeri, drugi slijedi. Zaključana vrijednost se ne može prepisati dok je ne otključate.

## Poravnajte i zaključajte

**{{ui:Poravnaj i zaključaj}}**: kliknite lice zida (ili osnovnu liniju, blizu sredine zida) ili liniju mreže, zatim lice zida koje treba dovesti na tu liniju. Zid se pomjera pod pravim uglom na nju. Označite **Zaključaj** prvo da ostanu poravnati: katanac se prikazuje na osnovi, i kad se jedan zid pomjeri, drugi slijedi. **Svojstva** zida navode njegova **Zaključavanja**, svako s **Otključaj**.

## Zaključajte zidove za linije mreže

Izaberite zid koji ide uz liniju mreže, ili čiji kraj leži na njoj, i izaberite liniju mreže u **Svojstvima** › **{{ui:Zaključaj za mrežu}}**. Zatim izaberite liniju mreže alatom {{ui:Mreža}} i upišite udaljenost u **{{ui:Pomjeri za}}**: linija se pomjera pod pravim uglom prema sebi, a zidovi zaključani za nju slijede, zajedno sa svojim spojenim zidovima, u jednom koraku. Zid zaključan za liniju mreže ne može sam otići s nje (pomjerite liniju ili otključajte zid); linija mreže okrenuta tako da zaključani zid ne može ostati pod pravim uglom na njoj se odbija. Preimenovanje linije čuva zaključavanje; brisanje je uklanja.

## Dužina: koja strana drži i šta se mjeri

- **{{ui:Raste od}}** (Svojstva jednog zida): **Početak drži** (kraj se pomjera), **Kraj drži** (početak se pomjera) ili **Centar drži** (oba kraja se pomjeraju za polovinu). Dok upisujete Dužinu, osnova označava tačku koja drži. Zid spojen na kraju koji se pomjera pomjera se pod pravim uglom prema sebi i zadržava svoj ugao.
- **{{ui:Mjeri od}}** (pored Kota na osnovi, u Svojstvima i u Postavke › BimCraft › Zidovi): osna linija, unutrašnje lice ili vanjsko lice. Polje Dužina i kote zidova na osnovi čitaju isto, pa se slažu. Podrazumijevano je osna linija.
- Da pomjerite zid bez njegovih spojeva (oni se prekidaju, zid zadržava svoj identitet), držite {{key:Alt}} dok vučete njegovu sredinu.

## Dobro je znati

- Ovi recepti su iz specifikacije alata za zid (strane 4 do 9). Stil spoja i prioritet sloja su napravljeni za ravne zidove; prioritet sloja se vidi samo na osnovi (ne u presjecima, izgledima ili 3D, gdje je zid jedno tijelo), ne u čvorovima triju ili više zidova, a membrane se ne prenose.
- Stil spoja se čuva u njegovom zapisu u IFC datoteci (naziv `IfcRelConnectsPathElements`, na primjer `CadCraft join L butt 1`), pa drugi programi i dalje čitaju spoj, a stariji fajl se otvara s pokosima.
- Zaključavanja i spojevi se čuvaju u IFC datoteci (zaključavanja kao `CadCraft_WallHolds` na projektu, spojevi kao `IfcRelConnectsPathElements`), pa su tu kad ponovo otvorite datoteku.
- Zakrivljeni zidovi se mogu dijeliti, ponovo spajati i vaditi im dio; ne pomjeraju se pomakom niti zaključavaju.
- Vidi također [Nacrtajte zidove](topic:draw-walls), [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door) i [Oblikovanje zida](topic:wall-shape).
