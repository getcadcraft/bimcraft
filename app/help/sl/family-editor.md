---
title: Uredi družino
summary: Spremenite parametre, formule in telesa družine, prikažite dele s parametrom Da / Ne, režite in združujte telesa, dodajte priključke za cevi in kanale ter si oglejte rezultat, narisan iz IFC, ki ga bo shranil.
keywords: urejevalnik družin, uredi družino, parameter, parametri, formula, formule, vidnost, da ne, telo, telesa, kvader, iztisnina, iztisni, zavrti, potegni po poti, profil, lok, boolove operacije, odreži, združi, razlika, unija, ročaj, ročaji, delovna ravnina, skica, nova družina, priključek, priključki, vrata, odtok, vodovod, zračni kanal
from: 1ab31c10
---

## Odprite urejevalnik

Odprite družino (skupina **Družine** v brskalniku projekta ali {{ui:Zgradba}} › {{ui:Družine…}}) in kliknite {{ui:Uredi družino}}. Za začetek iz nič kliknite {{ui:Nova družina}}: dajte ji ime, povejte, kaj je (vrata, okno, pohištvo, armatura ali kaj drugega), za vrata ali okno pa, od katerega začetnega predloga naj prihajata simbol v tlorisu in ročaj. Urejevalnik se odpre na družini z nekaj parametri in enim telesom.

Urejanje začetne družine ohrani vaše spremembe samo v tem modelu. Drugi modeli ohranijo začetno družino takšno, kakršna je.

V modelu se nič ne spremeni, dokler ne kliknete {{ui:Shrani družino}}. Urejevalnik ima svoj razveljavi in uveljavi (puščična gumba ob imenu ali {{key:Mod+Z}} in {{key:Mod+Y}}); shranjevanje je en korak v razveljavitvi modela.

## Parametri

Zavihek {{ui:Parametri}} našteje parametre družine: ime, vrsto in privzeto vrednost. Vrste so: **Dolžina** (milimetri), **Kot** (stopinje), **Število**, **Celo število**, **Da / Ne**, **Pero** (1–16) in tri, ki držijo besede namesto števil: **Besedilo**, **Material** (eden izmed materialov projekta) in **Polnilo** (polnilo v tlorisu). Besede se ne uporabljajo v formulah; obarvajo telo (njegov **Material**), napolnijo del simbola ali se izpišejo kot `{Name}` v besedilu simbola. Polje **Za vsak element** naredi parameter, ki ga vsak postavljeni element nastavi zase, namesto za svojo velikost.

- **Formula** naredi parameter, ki sledi drugim, na primer `Width / 30` ali `if(Width > 1200, 2, 1)`. Dolžine v formulah so v milimetrih ali zapišete enoto: `3'`, `6in`, `50cm`.
- Preimenovanje parametra ga preimenuje v vsaki formuli in polju, ki ga uporablja. Parametra, ki je še v uporabi, ni mogoče odstraniti.
- **Material** telesa vzame barvo materiala projekta (ali parametra Material), **Prikazano pri** ga skrije pri grobejših stopnjah podrobnosti, **Ponovi** pa naredi kopije: število (številka ali parameter celega števila, od 1 do 200) in korak med njimi v x, y in z. Ponovljeno telo je vrsta desk, letev ali lukenj; pri rezu se kopije režejo skupaj.
- Vrata ali okno dobita iz svoje stene še dve imeni: `WallThickness` in `Face` (1 ali −1, stran, v katero se vrata odpirajo).

## Telesa

Zavihek {{ui:Telesa}} našteje telesa. Dodajte kvader, iztisnino, zavrtitev ali potegnitev po poti:

| Telo | Kaj nastavite |
|---|---|
| Kvader | njegova dva vogala: x0 do x1, y0 do y1, z0 do z1 |
| Iztisnina | profil na delovni ravnini (tloris, pogled spredaj ali z strani), kje je ravnina in globina |
| Zavrtitev | profil, os na ravnini in kot do 360° |
| Potegni po poti | pot točk in polmer (palica ali tirnica) |

Vsako število je lahko vpisano ali izraz parametrov. Vsako telo ima barvo in **Prikazano, ko**: pustite prazno, da je vedno prikazano, ali navedite parameter Da / Ne (ali primerjavo, kot je `Shelves >= 3`), da se prikaže samo takrat. To je parameter vidnosti.

### Narišite profil

Profil iztisnine ali zavrtitve se riše na njeni delovni ravnini pod predogledom:

- Kliknite na papir, da dodate točko za zadnjo izbrano.
- Povlecite točko, da jo premaknete. Točke se prilepijo na mrežo; držite {{key:Shift}}, da jih postavite prosto.
- Kliknite majhen kvadratek na odseku, da tam dodate točko. {{key:Shift}}+klik nanj naredi ta odsek lok (še enkrat kliknite za drugo smer, nato ravno).
- Dvokliknite točko, da jo odstranite.

Votle točke nastavijo parametri: spremenite jih v tabeli, ne z vlečenjem.

## Boolove operacije

Zavihek {{ui:Boolove operacije}} izreže drugo telo iz prvega ali ju združi. Rezultat Boolove operacije se lahko spet izreže ali združi. Telo, uporabljeno v Boolovi operaciji, je narisano samo kot njen del.

Ko drugo telo skrije njegov parameter Da / Ne, ostane prvo, kot je; ko je skrito prvo, je skrit tudi rezultat.

## Simbol v tlorisu

Zavihek {{ui:Simbol v tlorisu}} nariše, kar tloris prikaže za to družino namesto reza njenih teles: črte, pravokotnike, krožnice, loke, mnogokotnike in besedilo v lastnih oseh družine. Vsak del ima **pero** (1–16, izraz ali parameter Pero), **polnilo** (brez, polno, diagonalno, križno, beton, izolacija, zemlja ali parameter Polnilo), izraz **Prikazano pri**, **območje reza** v milimetrih nad svojo osnovo (del je narisan polno, če je rez v tlorisu znotraj njega, tanko pod njim in črtkano nad njim: omarica nad rezom je prikazana črtkano), stopnjo podrobnosti in ponovitev. Besedilo lahko navaja parametre kot `{Name}`. Možnost **Tloris prikaže: Rez teles** ohrani, da tloris še vedno reže telesa, medtem ko simbol ostane v družini. Drugi programi berejo simbol kot tloris družine (črte in oblike; besedilo se ohrani samo v programu BimCraft).

## Družine znotraj

Zavihek {{ui:Družine znotraj}} postavi drugo družino v to: nogo v mizo, ročaj na vratih. Izberite družino, nato kam gre (x, y, z), za koliko je zasukana (samo četrtinski zasuki: 0, 90, 180, 270), kdaj je prikazana in vrednosti, ki jih dobi, vsako v svoji vrstici kot `Height = Height - 40`. Shranjevanje notranje družine nariše to znova. Družine, ki jo drži druga, ni mogoče izbrisati; družina ne more vsebovati same sebe, niti prek druge, gnezdenje pa se ustavi pri štirih ravneh.

## Vroče točke

Vroča točka je točka ali rob, ki ga povlečete, da spremenite parameter. Na zavihku {{ui:Vroče točke}} dodajte eno, izberite os, po kateri vleče, in številski parameter, ki ga spremeni, njen položaj pa zapišite z istimi izrazi kot telesa. V predogledu izberite **Vroče točke** pod ročaji, da jih vlečete. Na postavljenem elementu v tlorisu (izberite ga z {{ui:Izberi}}) vroči točki x in y prikažeta prijemala: povlecite enega in element dobi velikost, ki postavi vročo točko tam, prek vseh formul med njima; en korak razveljavitve ga vrne nazaj. Vroča točka ne more spremeniti vodenega parametra, parametra Da / Ne ali besede.

V 3D pogledu se iste vroče točke prikažejo kot prijemala na izbranem elementu, navzgor in navzdol (os z) pa tudi tam, česar tloris ne more narisati. Izberite element, povlecite prijemalo vzdolž njegove osi in spustite: element dobi velikost, ki postavi vročo točko tam, kot en korak razveljavitve. Prijemala so skrita, ko je vključen prerezni kvader, ker uporablja ista prijemala.

## Priključki

Družine, postavljene na tla (pohištvo, armature in drugo), imajo zavihek {{ui:Priključki}}: točke, kjer se cev ali kanal priključi na element, kot pri pipi in odtoku umivalnika. Kliknite {{ui:Dodaj priključek}} in nastavite:

- **Vrsta**: cev ali kanal in njegov **Sistem** (hladna voda, sanitarni odtok, dovod zraka …).
- **x**, **y** in **z**: kje je, v lastnih oseh družine. Kot števila telesa je lahko vsako od njih število ali formula parametrov, tako se priključek premakne z velikostjo.
- **Smer iz**: smer, v kateri cev ali kanal izstopa, vzdolž ene od osi družine (odtok pod umivalnikom gre **Navzdol**).
- **Velikost (mm)**: nazivna velikost cevi (DN) ali premer okroglega kanala.
- **Pretok**: **In** za priključek, ki se napaja (pipa), **Out** za tistega, ki odvaja.

Predogled nariše vsak priključek kot obroč s puščico v smeri izstopa. Vrata in okna nimajo priključkov.

Za vodovodno armaturo izberite, katera je, pod **Vodovodna armatura** (straniščna školjka, umivalnik, kuhinjski sudoper, tuš, pralno korito). Začetne armature to že povedo.

Vsak element, postavljen iz družine, dobi svoje priključke kot priključna mesta v datoteki IFC, ta pa se naredijo znova, ko se element spremeni po velikosti ali ko se družina shrani. Programi, ki berejo sisteme IFC, vidijo, kam sodi vsaka cev ali kanal.

## Predogled in njegovi ročaji

Predogled je družina, zapisana kot IFC, z isto kodo, ki jo shrani v model, in narisana nazaj. Kar vidite, dobijo tudi drugi programi. Pod njim **Prikazana velikost** nastavi vrednosti parametrov, ki jih predogled uporablja.

**Ročaji** so pike na predogledu: **Velikost** prikaže ročaje za širino, globino in višino; **Izbrano telo** pokaže enega na vsaki ploskvi telesa, ki ste ga izbrali. Povlecite ročaj:

- na ploskvi, ki jo določa parameter, se prikazana velikost spremeni (formule družine ostanejo);
- na ploskvi, ki jo določa vpisano število, se število spremeni.

## Shranjevanje

{{ui:Shrani družino}} preveri družino, nato nariše vsako njeno velikost znova in vsak njen element naredi znova, kot en korak razveljavitve. Če velikosti ni mogoče narisati s spremembo (na primer telo ne bi imelo širine pri tisti velikosti), se nič ne shrani in urejevalnik pove, katera velikost je to.

Če je nekdo drug shranil isto družino, medtem ko je bil vaš urejevalnik odprt (v seji Live TeamWork ali v drugem oknu), {{ui:Shrani družino}} zavrne in to pove, namesto da bi njihovo spremembo nadomestil z vašo. Zaprite urejevalnik, odprite družino znova, da vidite njihovo spremembo, in naredite svojo znova.

:::note
Geometrija je shranjena kot lastna telesa IFC: iztisnine, zavrtitve, potegnjeni diski in rezultati Boolovih operacij. Nič se ne spremeni v seznam trikotnikov, zato so datoteke majhne in drugi programi lahko berejo oblike kot oblike. Profili z loki se shranijo z loki v IFC4; IFC2X3 nima segmentov lokov v profilu, zato se tam loki shranijo kot kratki ravni kosi.
:::

Glejte tudi [Družine in njihove velikosti](topic:families).
