---
title: Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje
summary: Crtajte zidove kao pravokutnik, poligon, luk, na odabranim linijama ili oko obrisa; dijelite ih, uklanjate im dio, pomičete, rastežete kutijom, poravnavate i zaključavate jedan uz drugi, uz kotu ili liniju mreže. Svaka promjena zadržava spojene zidove i jedan je korak poništavanja.
keywords: zamijeni tip, promijeni tip, preraspodjela tipa, što se pomaknulo, razina, razina razvoja, lod, stil spoja, pokos, sučeono, ravno odsijeci, spojevi zidova, sljedeći, prolazi kroz, zabrani spoj, dopusti spoj, prioritet sloja, jezgra, prioritet, spoj, pravokutnik, zakrenuti pravokutnik, poligon, upisani, opisani, luk, središte, tangentni luk, odabir linija, tab, ucrtavanje, obris, čarobni štapić, dijeljenje, dijeljenje s razmakom, razmak, izbriši dionicu, ponovno spoji, odmak, kopija, rastezanje kutijom, okvir, rastezanje, poravnaj, zaključaj, katanac, ograničenje, kota zaključavanja, uredi kotu, mreža, zaključaj na mrežu, pomak linije mreže, pomak položaja, nespojeni, samostojeći, raste od, mjeri od, središnja linija, unutarnja ploha, vanjska ploha, odvoji, alt
from: 5b7d2f75
---

## Što ćete učiniti

Izrađujte i mijenjajte zidove pomoću recepata alata za zid. Svaki završava isto kao crtanje zida po njegovim kutovima: kutovi se spajaju sami, spojevi se spremaju u datoteku, a cijela promjena je jedan korak u **Promjene** koji {{ui:Poništi}} vraća. Zidovi zadržavaju svoj identitet: zid koji dijelite, odmičete ili rastežete i dalje je isti zid, s vratima, prozorima i kotama.

## Crtanje pravokutnika, poligona ili luka

Uz uključeno {{ui:Crtanje}}, otvorite {{ui:Oblici}} u grupi Crtanje (ili odaberite oblik u popisu **Oblik** u retku Zid). Redak Zid prikazuje vrstu zida, referencu crteža, vanjsku stranu i vrh, kao i za alat {{ui:Zid}}. Zatim kliknite ili upišite točke (x,y · @dx,dy · @duljina<kut · duljina duž pokazivača):

- **Pravokutnik**: dva suprotna kuta. Četiri zida, četiri spojena kuta, jedan korak.
- **Zakrenuti pravokutnik**: gdje prva stranica počinje i završava (to postavlja njezin smjer i duljinu), zatim treći klik za drugu stranu.
- **Poligon**: središte, zatim kut (**Upisani**) ili sredina stranice (**Opisani**). Prvo postavite **Stranice** (3 do 64).
- **Luk, središte**: središte, početak (to postavlja radijus), kraj. **Smjer**: kraći put, suprotno od kazaljke ili u smjeru kazaljke na satu. Zaokret preko tri četvrtine kruga crta se kao dva zida.
- **Tangentni luk**: kliknite kraj zida, zatim gdje luk završava. Luk polazi s kraja zida u smjeru samog zida.

Zatvoreni oblik dobiva vanjsku stranu prema van. Nacrtan na **Vanjskoj plohi** ili **Unutarnjoj plohi**: ploha na koju kliknete ostaje na mjestu.

## Zidovi na linijama koje već imate

- **Odaberi linije**: kliknite liniju i zid se postavlja na nju. Pritisnite {{key:Tab}} (ili držite {{key:Shift}} dok klikate) da uzmete cijeli lanac linija spojenih od kraja do kraja. Linije su pomoćne linije ovog prikaza, referenca ucrtavanja i linije mreže.
- **Ucrtaj obris**: kliknite unutar područja zatvorenog tim linijama ili zidovima. Zidovi idu oko najmanjeg područja oko klika.

## Postavite prije crtanja: odmak i spajanje

Redak Zid ima još dva polja, za alat {{ui:Zid}} i oblike:

- **Odmak**: zidovi se crtaju ovoliko daleko od linije na koju kliknete: + lijevo od nje, − desno, gledano onako kako crtate.
- **Spajanje**: odznačite da biste crtali samostojeće zidove. Njihovi krajevi dobivaju **Zabrani spajanje** i ostaju slobodni gdje god idu (vidi [Promijenite zid](topic:change-a-wall-or-door)).

## Dijelite, uklonite dio, ponovno spojite

Otvorite {{ui:Zidovi}} u grupi Uređivanje.

- **Podijeli**: kliknite zid gdje ga treba presjeći, ili upišite udaljenost od njegova početka. Blizu zida koji ga presijeca, rez se hvata za mjesto gdje se susreću. Dva dijela imaju istu vrstu i ostaju spojena kraj do kraja. **Razmak** ostavlja prazninu te duljine središnje postavljenu oko reza. **Slobodni krajevi** daje rezanim krajevima Zabrani spajanje (Postavke › BimCraft › Zidovi › **Kad se zid dijeli** određuje koja je oznaka prvotno uključena). Vrata ili prozor idu s dijelom u kojem stoje; rez kroz njih se odbija.
- **Izbriši dionicu**: kliknite gdje dio počinje i gdje završava. Vrata u dijelu idu s njim.
- **Spoji ponovo**: kliknite dva dijela jednog zida (u liniji, iste vrste). Opet postaju jedan zid, prvi koji ste kliknuli, s vratima oba.

## Stil spoja, zabrana spajanja, prioritet sloja

Otvorite {{ui:Zidovi}} u grupi Uređivanje.

- **Stil spoja**: kliknite kut gdje se dva ravna zida završavaju. Svaki klik prelazi na sljedeći stil: **Pokos** (oba kraja se režu na liniji od unutarnjeg prema vanjskom kutu, s čime svaki kut počinje), **Sučeono** (jedan zid prolazi do vanjske plohe drugoga, koji staje uz njegovu stranu) i **Ravno odsijeci** (kao sučeono, a zid koji prolazi završava ravno; pod pravim kutom izgleda kao sučeono). **Sljedeći**, ili {{key:Tab}}, čini drugi zid onim koji prolazi. Popis **Stil** u traci pokazuje kut koji ste kliknuli posljednji. Isti dva izbora su u **Svojstvima** jednog zida: **Stil spoja na početku / na kraju** i **Prolazi kroz**. Svaka promjena je jedan korak u **Promjene**. Tlocrt, 3D tijelo, prostorije i količine slijede.
- Na T-spoju zid čija se strana dotiče uvijek prolazi. Gdje se dva zida križaju, klik (ili **Kontinuirano na presjeku** u Svojstvima) kaže koji je od njih kontinuiran; to odlučuje čiji se slojevi crtaju kroz presjek.
- Stil pripada spoju: ostaje kad se zidovi pomaknu i nestaje samo kad spoj nestane (zid se izbriše, podijeli na tom kraju, ili kraj dobije Zabrani spajanje). Kut sa zakrivljenim zidom, ili gdje se sastaju tri ili više zidova, zadržava pokos. Kut oštriji od otprilike 30 stupnjeva, ili tupiji od otprilike 150, također se vraća na pokos.
- **Zabrani spajanje**: kliknite blizu kraja zida. Taj kraj se oslobađa: ništa se ne spaja s njim, gdje god zid išao, dok ga ponovno ne kliknete. Slobodni krajevi se označavaju križićem dok je alat uključen. Isti prekidač je **Spoji na početku / Spoji na kraju** u Svojstvima.
- **Prioritet sloja**: gdje se sastaju zidovi sa slojevima, jači sloj reže slabiji, pa se jezgre spajaju s jezgrama, a završni sloj staje uz jači sloj. Svaki sloj ima prioritet od 0 do 999; prema zadanome dolazi iz funkcije sloja (konstrukcija 800, podloga 600, izolacija 400, membrana 300, završni sloj 200, šupljina 100). {{ui:Prioritet sloja}} otvara sklop zida, gdje stupac **Prioritet** postavlja vlastiti broj sloja. Slojevi istog prioriteta zaustavljaju jedan drugoga, a linija se crta samo između različitih materijala. To vidite na tlocrtima s razinom detalja **Srednja** ili **Fina**, na kutovima, T-spojevima i križanjima dvaju ravnih zidova; Postavke › BimCraft › Zidovi › **Očisti slojeve zidova na spojevima** to isključuje. Mijenja samo ono što se crta unutar zidova: obrisi zidova i količine ostaju kakvi ih daje stil spoja.

## Zamijenite vrstu mnogim zidovima

Prijelaz s tlocrta skice na radne crteže uglavnom je promjena vrste: generički zid postaje specifična konstrukcija. Ništa se ne crta ponovno.

1. Odaberite zidove (jedan, ili više uz {{key:Ctrl}} ili {{key:Shift}}).
2. U **Svojstvima** pritisnite **Zamijeni tip…** pod Vrsta zida (ili otvorite {{ui:Zidovi}} u grupi Uređivanje i odaberite {{ui:Zamijeni tip}}, koji otvara isti popis). Popis se otvara unutar **Svojstava**, u bloku odabranih zidova. Nije dijaloški okvir i ništa ne prekriva: tlocrt, 3D prikaz i odabir rade dok je otvoren, i prati zidove koje birate.
3. Popis prikazuje svaku vrstu zida s njezinom debljinom i oznakom LOD, primjerice „Zid 230 generički, LOD 200“ i „230 opeka, žbukano s obje strane, LOD 300“. Vrste koje odabrani zidovi sada imaju označene su. Upišite u **Traži** da ga suzite: naziv, debljinu ili `lod 300`.
4. Kliknite vrstu. Svaki odabrani zid mijenja se u jednom koraku, pa jedno {{ui:Poništi}} vraća cijelu zamjenu. Mali x zatvara popis.

Svaki zid zadržava svoju liniju položaja. Zid na svojoj središnjoj liniji raste na obje strane; zid čija je linija položaja ploha zadržava tu plohu i raste na drugu stranu, a zidovi spojeni s njim slijede na kutovima. Zidovi zaključani za zamijenjeni zid također ga slijede. Vrata i prozori ostaju u svojim zidovima i ponovno se režu za novu debljinu.

Nakon zamjene popis prikazuje **Što se pomaknulo**: koliko je zidova promijenjeno i u što, debljinu i LOD prije i poslije, zidove koji su se pomaknuli postrance da zadrže svoju liniju položaja, pridružene zidove koji su slijedili, vrata i prozore koji su ponovno ugrađeni, te svaku prostoriju čija se površina promijenila, s površinom prije i poslije. Statusna traka kaže isto u jednom retku. Izvještaj samo obavještava; nikad ne zaustavlja zamjenu. Odabir vrste u **Svojstva › Vrsta zida** radi istu zamjenu i daje isti izvještaj.

Dvije stvari zaustavljaju zamjenu, i tada se ništa ne mijenja: vrata ili prozor koji više ne bi stali u svoj zid (zid se skraćuje tamo gdje kut slijedi; prvo smanjite vrata ili ih pomaknite dalje od kuta), i zaključavanje koje bi zamjena prekinula (zid zaključan za liniju mreže svojom središnjom linijom dok mu je linija položaja ploha; otključajte ga ili vratite liniju položaja na središnju liniju).

Asistent povezan s BimCraftom može obaviti istu zamjenu (alati `wall_types_list` i `walls_swap_type`) i dobiva isti izvještaj.

Oznaka LOD vrste postavlja se u uređivaču sklopova zida: vidi [Sklopovi zida](topic:wall-assemblies).

## Odmak i rastezanje kutijom

- **Odmak**: kliknite zid, zatim stranu na koju ga pomičete, ili upišite udaljenost. Zid se pomiče okomito na sebe, a zidovi spojeni s njim se rastežu. Označite **Kopiraj** za paralelnu kopiju (nije spojena s izvornikom).
- **Rastezanje okvirom**: kliknite dva kuta okvira, zatim točku s koje se pomiče i točku na koju se pomiče. Svaki kraj zida unutar okvira se pomiče; zid potpuno unutar okvira se pomiče, a zidovi koji se u njega nadovezuju dolaze s njim; zidovi koji sijeku okvir se rastežu.

## Uredite kotu i zaključajte je

Odaberite referentnu kotu (Anotiraj › {{ui:Referentna kota}}) i upišite njezinu vrijednost u **Svojstvima**: zid njezine druge reference pomiče se okomito na sebe, prva referenca ostaje, a spojeni zidovi slijede. Označite **Zaključaj ovu kotu** da zadržite vrijednost: kad se kasnije pomakne bilo koji od zidova, drugi slijedi. Zaključana vrijednost se ne može prepisati dok je ne odznačite.

## Poravnajte i zaključajte

**Poravnaj i zaključaj**: kliknite plohu zida (ili središnju liniju, blizu sredine zida) ili liniju mreže, zatim plohu zida koju treba dovesti na tu liniju. Zid se okomito pomakne na nju. Označite **Zaključaj** prvo da ostanu poravnati: na tlocrtu se pokazuje katanac, a kad se jedan zid pomakne, drugi slijedi. **Svojstva** zida navode njegova **Zaključavanja**, svako s **Otključaj**.

## Zaključajte zidove za linije mreže

Odaberite zid koji ide uz liniju mreže, ili čiji kraj leži na njoj, i odaberite liniju mreže u **Svojstva** › **Zaključaj na mrežu**. Zatim odaberite liniju mreže alatom {{ui:Mreža osi}} i upišite udaljenost u {{ui:Pomakni za}}: linija se okomito pomiče na sebe, a zidovi zaključani za nju slijede, s njihovim spojenim zidovima, u jednom koraku. Zid zaključan za liniju mreže ne može se sam pomaknuti s nje (pomaknite liniju ili otključajte zid); linija mreže zakrenuta tako da zaključani zid ne može ostati okomit na nju se odbija. Preimenovanje linije zadržava zaključavanje; brisanje ga uklanja.

## Duljina: koja strana drži i što mjeri

- **Raste od** (Svojstva jednog zida): **Početak drži** (kraj se pomiče), **Kraj drži** (početak se pomiče) ili **Središte drži** (oba kraja se pomiču za polovicu). Dok upisujete Duljinu, tlocrt označava točku koja drži. Zid spojen na kraj koji se pomiče pomiče se okomito na sebe i zadržava svoj kut.
- **Mjeri od** (pored **Kote** na tlocrtu, u Svojstvima i u Postavke › BimCraft › Zidovi): središnja linija, unutarnja ploha ili vanjska ploha. Polje Duljina i kote zidova na tlocrtu čitaju istu, pa se slažu. Počinje na središnjoj liniji.
- Da biste zid pomaknuli bez njegovih spojeva (oni pucaju, a zid zadržava identitet), držite {{key:Alt}} dok povlačite njegovu srednju ručku.

## Dobro je znati

- Ovi recepti su iz specifikacije alata za zid (stranice 4 do 9). Stil spoja i prioritet sloja izrađeni su za ravne zidove; prioritet sloja prikazuje se samo na tlocrtu (ne u presjecima, pročeljima ili 3D, gdje je zid jedno tijelo), ne u čvorovima triju ili više zidova, a membrane se ne prenose.
- Stil spoja sprema se u njegov zapis u IFC datoteci (naziv `IfcRelConnectsPathElements`, primjerice `CadCraft join L butt 1`), pa drugi programi i dalje čitaju spoj, a stariji datoteka se otvara s pokosima.
- Zaključavanja i spojevi spremaju se u IFC datoteku (zaključavanja kao `CadCraft_WallHolds` na projektu, spojevi kao `IfcRelConnectsPathElements`), pa su tu kad ponovno otvorite datoteku.
- Zakrivljeni zidovi mogu se dijeliti, ponovno spajati i uklanjati im se dio; ne odmiču se niti zaključavaju.
- Vidi također [Crtanje zidova](topic:draw-walls), [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door) i [Oblikovanje zida](topic:wall-shape).
