---
title: Tvary stien, rozdelenie, odsadenie, natiahnutie a zamknutie
summary: Kreslite steny ako obdĺžnik, mnohouholník, oblúk, na vybraných čiarach alebo okolo obrysu; rozdeľujte ich, odoberajte kus, odsadzujte, natiahnite rámčekom, zarovnávajte a zamykajte ich navzájom, ku kóte alebo k osi. Každá zmena zachová spojené steny a je jeden krok späť.
keywords: vymeniť typ, zmeniť typ, prepriradiť, čo sa presunulo, lod, úroveň rozpracovanosti, štýl spojenia, zrezanie, na tupo, na pravý uhol, spoje stien, ďalší, prechádza, zakázať spojenie, povoliť spojenie, priorita vrstvy, jadro, priorita, spoj, obdĺžnik, pootočený obdĺžnik, mnohouholník, vpísaný, opísaný, oblúk, stred, dotyčnicový oblúk, vybrať čiary, Tab, obkresliť, obrys, rozdeliť, medzera, zmazať úsek, znova spojiť, odsadenie, kópia, natiahnutie rámčekom, výber rámčekom, natiahnuť, zarovnať, zamknúť, visiaci zámok, väzba, zamknúť kótu, upraviť kótu, os, zamknúť na os, posunúť osu, odsadenie umiestnenia, spojenie vypnuté, voľne stojaci, narastať od, merať od, os, vnútorný líc, vonkajší líc, rozpojiť, Alt
from: 5b7d2f75
---

## Čo urobíte

Vytvárate a meníte steny receptami nástroja Stena. Každý recept sa končí rovnako ako kreslenie steny podľa rohov: rohy sa spoja samy, spojenia sa uložia do súboru a celá zmena je jeden krok v **Zmenách**, ktorý {{ui:Späť}} vráti späť. Steny si zachovávajú svoju identitu: stena, ktorú rozdelíte, odsadíte alebo natiahnete, je stále tou istou stenou, s dverami, oknami a kótami.

## Nakreslenie obdĺžnika, mnohouholníka alebo oblúka

So zapnutým {{ui:Kresliť}} otvorte {{ui:Tvary}} v skupine Kresliť (alebo vyberte tvar v zozname **Tvar** v riadku Stena). Riadok Stena zobrazuje typ steny, referenciu kreslenia, vonkajšiu stranu a vrch, ako pri nástroji {{ui:Stena}}. Potom kliknite alebo napíšte body (x,y · @dx,dy · @dĺžka<uhol · dĺžka v smere ukazovateľa):

- **Obdĺžnik**: dva protiľahlé rohy. Štyri steny, štyri spojenia rohov, jeden krok.
- **Pootočený obdĺžnik**: kde prvá strana začína a končí (to určí jej otočenie a dĺžku), potom tretie kliknutie pre druhú stranu.
- **Mnohouholník**: stred, potom roh (**Vpísaný**) alebo stred strany (**Opísaný**). Najprv nastavte **Strany** (3 až 64).
- **Oblúk, stred**: stred, začiatok (ten určí polomer), koniec. **Smer**: kratšou cestou, proti smeru hodinových ručičiek alebo v smere hodinových ručičiek. Oblúk cez tri štvrtiny kružnice sa kreslí ako dve steny.
- **Dotyčnicový oblúk**: kliknite na koniec steny, potom na miesto, kde oblúk končí. Oblúk vychádza z konca steny v jej vlastnom smere.

Uzavretý tvar dostane vonkajšok smerom von. Ak je nakreslený na **Vonkajšom líci** alebo **Vnútornom líci**, líc, na ktorý kliknete, je ten, ktorý zostane na mieste.

## Steny na čiarach, ktoré už máte

- **Vybrať čiary**: kliknite na čiaru a stena sa na ňu umiestni. Stlačte {{key:Tab}} (alebo podržte {{key:Shift}} pri kliknutí), aby sa vzal celý reťazec čiar spojených koniec na koniec. Čiary sú kresliace čiary tohto pohľadu, referencia obkresu a osi.
- **Obkresliť obrys**: kliknite vnútri oblasti uzavretej týmito čiarami alebo stenami. Steny obkreslia najmenšiu oblasť okolo kliknutia.

## Nastavte pred kreslením: odsadenie a spojenie

Riadok Stena má ešte dve polia, ktoré používa nástroj {{ui:Stena}} a tvary:

- **Odsadenie**: steny sa nakreslia vo vzdialenosti od čiary, na ktorú kliknete: + vľavo, − vpravo, pohľadom ako pri kreslení.
- **Spojenie**: zrušte zaškrtnutie, ak chcete kresliť voľne stojace steny. Ich konce dostanú **Zakázať spojenie** a zostanú voľné, kamkoľvek sa presunú (pozri [Zmena steny](topic:change-a-wall-or-door)).

## Rozdelenie, odobratie kusu, znovu spojenie

Otvorte {{ui:Múry}} v skupine Upraviť.

- **Rozdeliť**: kliknite na stenu, kde sa má prerezať, alebo napíšte vzdialenosť od jej začiatku. Pri stene, ktorá ju kríži, sa rez prichytí k miestu ich stretnutia. Dve časti majú rovnaký typ a zostávajú spojené koniec na koniec. **Medzera** nechá priestor danej dĺžky vycentrovaný na reze. **Voľné konce** namiesto toho dajú koncom rezu **Zakázať spojenie** (Nastavenia › BimCraft › Múry › **Keď sa stena rozdeľuje** určí, ktorá je zaškrtnutá na začiatku). Dvere alebo okno idú s tou časťou, v ktorej stoja; rez cez ne sa odmietne.
- **Zmazať úsek**: kliknite na miesto, kde kus začína, a na miesto, kde končí. Dvere v ňom idú s ním.
- **Znova spojiť**: kliknite na dve časti jednej steny (v priamke, rovnaký typ). Opäť sa stanú jednou stenou, prvou, na ktorú ste klikli, s dverami oboch.

## Štýl spojenia, Zakázať spojenie, priorita vrstvy

Otvorte {{ui:Múry}} v skupine Upraviť.

- **Štýl spojenia**: kliknite na roh, kde sa končia dve priame steny. Každé kliknutie prejde na ďalší štýl: **Zrezanie** (obe konce sú rezané na čiare od vnútorného k vonkajšiemu rohu, takto začína každý roh), **Na tupo** (jedna stena prechádza až k vonkajšiemu líci druhej, ktorá sa o jej bok zastaví) a **Na pravý uhol** (ako na tupo, a stena, ktorá prechádza, končí kolmo; pri pravom uhle vyzerá ako na tupo). **Ďalší** alebo {{key:Tab}} urobí druhú stenu tou, ktorá prechádza. Zoznam **Štýl** v lište ukazuje roh, na ktorý ste klikli naposledy. Tie isté dve voľby sú vo **Vlastnostiach** jednej steny: **Štýl spojenia na začiatku / na konci** a **Prechádza**. Každá zmena je jeden krok v **Zmenách**. Pôdorys, 3D teleso, miestnosti a množstvá nasledujú.
- Na T vždy prechádza stena, ktorej strana je dotknutá. Tam, kde sa dve steny krížia, kliknutie (alebo **Súvislá v križovatke** vo Vlastnostiach) určí, ktorá z dvoch je súvislá; to rozhoduje, ktoré vrstvy steny sa kreslia cez križovatku.
- Štýl patrí spoju: zostáva, keď sa steny presúvajú, a zanikne, len keď zanikne spojenie (stena sa zmaže, rozdelí na tom konci alebo na konci dostane Zakázať spojenie). Roh so zakrivenou stenou alebo tam, kde sa stretnú tri alebo viac stien, si zachová zrezanie. Roh ostrejší ako asi 30 stupňov alebo plochejší ako asi 150 sa tiež vráti na zrezanie.
- **Zakázať spojenie**: kliknite blízko konca steny. Ten koniec sa uvoľní: nič ho nespája, kamkoľvek sa stena presunie, kým naň znova neklikne. Voľné konce sú počas zapnutého nástroja označené krížikom. Ten istý prepínač je **Spojenie na začiatku / Spojenie na konci** vo Vlastnostiach.
- **{{ui:Priorita hladín}}**: kde sa stretnú steny s vrstvami, silnejšia vrstva prereže slabšiu, takže jadrá sa spájajú s jadrami a povrch sa zastaví o silnejšiu vrstvu. Každá vrstva má prioritu od 0 do 999; štandardne sa berie z funkcie vrstvy (konštrukcia 800, podklad 600, izolácia 400, fólia 300, povrchová úprava 200, dutina 100). Otvorí sa skladba steny, kde stĺpec **Priorita** nastavuje vlastné číslo vrstvy. Vrstvy s rovnakou prioritou sa zastavujú navzájom a čiara sa kreslí len medzi rôznymi materiálmi. Vidíte to na pôdoryse s detailom **Stredný** alebo **Jemný**, v rohoch, T spojoch a križovaniach dvoch priamych stien; Nastavenia › BimCraft › Múry › **Čistiť vrstvy stien tam, kde sa steny stretajú** to vypne. Mení to len to, čo sa kreslí vnútri stien: obrysy stien a množstvá zostávajú také, aké dáva štýl spojenia.

## Výmena typu mnohých stien

Prechod od náčrtových pôdorysov k pracovným výkresom je väčšinou zmena typu: všeobecná stena sa stane konkrétnou skladbou. Nič sa nekreslí nanovo.

1. Vyberte steny (jednu alebo viac s {{key:Ctrl}} alebo {{key:Shift}}).
2. Vo **Vlastnostiach** stlačte **Vymeniť typ…** pod **Typ steny** (alebo otvorte {{ui:Múry}} v skupine Upraviť a zvoľte {{ui:Vymeniť typ}}, čím sa otvorí ten istý zoznam). Zoznam sa otvorí vo Vlastnostiach, v bloku vybraných stien. Nie je to dialóg a nič nezakrýva: pôdorys, 3D pohľad a výber zostávajú funkčné, kým je otvorený, a sleduje steny, ktoré vyberiete.
3. Zoznam ukazuje každý typ steny s jeho hrúbkou a značkou LOD, napríklad „Stena 230 všeobecná, LOD 200“ a „230 pálené tehly, omietnuté z oboch strán, LOD 300“. Typy, ktoré majú vybrané steny teraz, sú označené. Napíšte do **Hľadať**, aby ste ho zúžili: názov, hrúbku alebo `lod 300`.
4. Kliknite na typ. Každá vybraná stena sa zmení naň v jednom kroku, takže jedno {{ui:Späť}} vráti celú výmenu. Malé x zavrie zoznam.

Každá stena si zachová svoju referenčnú čiaru. Stena na svojej osi narastie na obe strany; stena, ktorej referenčná čiara je líc, si zachová tento líc a narastie opačným smerom, a steny spojené s ňou nasledujú v rohoch. Steny zamknuté na vymenenú stenu ju tiež nasledujú. Dvere a okná zostávajú vo svojich stenách a sú znova vyrezané pre novú hrúbku.

Po výmene zoznam ukazuje **Čo sa presunulo**: koľko stien sa zmenilo a na čo, hrúbku a LOD pred a po, steny, ktoré sa posunuli bokom, aby si zachovali referenčnú čiaru, spojené steny, ktoré nasledovali, dvere a okná znova umiestnené v stenách a každú miestnosť, ktorej plocha sa zmenila, s jej plochou pred a po. Stavový riadok hovorí to isté v jednom riadku. Hlásenie len informuje; výmenu nikdy nezastaví. Výber typu v **Vlastnosti › Typ steny** urobí tú istú výmenu a dá to isté hlásenie.

Dve veci výmenu zastavia, a potom sa nezmení vôbec nič: dvere alebo okno, ktoré by už nepasovali do svojej steny (stena sa skráti tam, kde nasleduje roh; najprv zúžte dvere alebo ich odsuňte od rohu), a zámok, ktorý by výmena porušila (stena zamknutá na os svojou osou, kým jej referenčná čiara je líc; odomknite ju alebo vráťte referenčnú čiaru na os).

Pripojený asistent k BimCraft môže urobiť tú istú výmenu (nástroje `wall_types_list` a `walls_swap_type`) a dostane späť to isté hlásenie.

Označenie LOD typu sa nastavuje v editore skladby steny: pozri [Skladby stien](topic:wall-assemblies).

## Odsadenie a natiahnutie rámčekom

- **Odsadenie**: kliknite na stenu, potom na stranu, na ktorú ju chcete presunúť, alebo napíšte vzdialenosť. Stena sa presunie kolmo na seba a steny spojené s ňou sa natiahnu. Zaškrtnite **Kopírovať** pre rovnobežnú kópiu (tá nie je spojená s pôvodnou).
- **Natiahnutie rámčekom**: kliknite na dva rohy rámčeka, potom na bod, z ktorého sa presúva, a na bod, kam sa presúva. Každý koniec steny vnútri rámčeka sa presunie; stena celá vnútri sa presunie a prídu aj steny, ktoré do nej narážajú; steny, ktoré rámček križuje, sa natiahnu.

## Úprava kóty a jej zamknutie

Vyberte referenčnú kótu ({{ui:Anotovať}} › {{ui:Referenčná kóta}}) a napíšte jej hodnotu vo **Vlastnostiach**: stena druhej referencie sa presunie kolmo na seba, prvá referencia zostane a spojené steny nasledujú. Zaškrtnite **Zamknúť túto kótu**, aby ste hodnotu zachovali: keď sa neskôr pohne ktorákoľvek stena, druhá nasleduje. Zamknutú hodnotu nemožno prepísať, kým nezrušíte jej zaškrtnutie.

## Zarovnanie a zamknutie

**Zarovnať a zamknúť**: kliknite na líc steny (alebo na os, blízko stredu steny) alebo na osovú čiaru, potom na líc steny, ktorý sa má priviesť na túto čiaru. Stena sa kolmo presunie na ňu. Najprv zaškrtnite **Zamknúť**, aby ostali zarovnané: na pôdoryse sa zobrazí visiaci zámok a keď sa jedna stena pohne, druhá nasleduje. **Vlastnosti** steny vypisujú jej **Zámky**, každý s **Odomknúť**.

## Zamknutie stien na osiach

Vyberte stenu, ktorá beží pozdĺž osi, alebo ktorej koniec na nej sedí, a vyberte os vo **Vlastnostiach** › **Zamknúť na os**. Potom vyberte osovú čiaru nástrojom {{ui:Os}} a napíšte vzdialenosť do {{ui:Posunúť o}}: čiara sa kolmo presunie a steny zamknuté na ňu nasledujú, spolu so spojenými stenami, v jednom kroku. Stena zamknutá na os sa sama z nej nedá presunúť (presuňte os alebo odomknite stenu); otočenie osi tak, že zamknutá stena na nej nemôže zostať kolmá, sa odmietne. Premenovanie osi zámok zachová; zmazanie ho odstráni.

## Dĺžka: ktorý koniec drží a čo sa meria

- **Narastať od** (Vlastnosti jednej steny): **Začiatok drží** (presunie sa koniec), **Koniec drží** (presunie sa začiatok) alebo **Stred drží** (oba konce sa presunú o polovicu). Keď píšete dĺžku, pôdorys označí bod, ktorý drží. Stena spojená na konci, ktorý sa presúva, sa kolmo presunie na seba a zachová svoj uhol.
- **Merať od** (vedľa {{ui:Kóty}} na pôdoryse, vo Vlastnostiach a v Nastavenia › BimCraft › Múry): os, vnútorný líc alebo vonkajší líc. Pole Dĺžka a kóty stien na pôdoryse čítajú to isté, takže sa zhodujú. Začína sa na osi.
- Ak chcete presunúť stenu bez jej spojení (rozpadnú sa, stena si zachová identitu), podržte {{key:Alt}} pri ťahaní jej stredového úchytu.

## Dobré vedieť

- Tieto recepty pochádzajú zo špecifikácie nástroja Stena (strany 4 až 9). Štýl spojenia a priorita vrstiev sú navrhnuté pre rovné steny; priorita vrstiev sa zobrazuje len v pôdoryse (nie v rezoch, pohľadoch alebo 3D, kde je stena jedným telesom), nie v uzloch troch a viacerých stien, a fólie sa cez spoje nepreberajú.
- Štýl spojenia sa ukladá v jeho zázname v súbore IFC (názov `IfcRelConnectsPathElements`, napríklad `CadCraft join L butt 1`), takže iné programy spojenie stále čítajú a starší súbor sa otvorí so zrezaniami.
- Zámky a spojenia sa ukladajú v súbore IFC (zámky ako `CadCraft_WallHolds` na projekte, spojenia ako `IfcRelConnectsPathElements`), takže sú tam, keď súbor znova otvoríte.
- Zakrivené steny možno rozdeliť, znova spojiť a odobrať z nich kus; nedajú sa odsadzovať ani zamykať.
- Pozri tiež [Kreslenie stien](topic:draw-walls), [Zmena steny, dverí alebo okna](topic:change-a-wall-or-door) a [Tvar steny](topic:wall-shape).
