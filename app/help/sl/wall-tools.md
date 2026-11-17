---
title: Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje
summary: Narišite zidove kot pravokotnik, mnogokotnik, lok, na izbrane črte ali okoli oboda; razdelite jih, vzemite kos, odmaknite, raztegnite z okvirjem, poravnajte in zaklenite med seboj, na kotno črto ali na os mreže. Vsaka sprememba ohrani zidove povezane in je en korak razveljavitve.
keywords: zamenjava tipa, spremeni tip, kaj se je premaknilo, lod, stopnja razvitosti, slog spoja, poševno, na stik, ravno, spoji zidov, naslednji, teče skozi, prepoved spoja, dovoli spoj, prednost sloja, jedro, prednost, stik, pravokotnik, zasukan pravokotnik, mnogokotnik, včrtan, očrtan, lok, središče, tangentni lok, izbira črt, tabulator, sled, obris, čarobna palica, razdeli, razdeli z režo, reža, izbriši odsek, ponovno združi, odmik, kopiraj, raztegni z okvirjem, raztegni, poravnaj, zakleni, zaklep, omejitev, zakleni na mrežo, premakni os mreže, odmik postavitve, odklopi, samostojen, rast od, meri od, osrednja črta, notranje lice, zunanje lice, alt
from: 5b7d2f75
---

## Kaj boste naredili

Zidove naredite in spremenite z recepti orodja Zid. Vsak se konča enako kot risanje zidu po njegovih vogalih: vogali se sami povežejo, spoji se shranijo v datoteko, celotna sprememba pa je en korak v **Spremembah**, ki ga {{ui:Razveljavi}} povrne. Zidovi ohranijo svojo identiteto: zid, ki ste ga razdelili, odmaknili ali raztegnili, je še vedno isti zid, z vrati, okni in kotami.

## Narišite pravokotnik, mnogokotnik ali lok

Z vklopljenim {{ui:Risanje}} odprite {{ui:Oblike}} v skupini Risanje (ali izberite obliko v seznamu **Oblika** v vrstici Zid). Vrstica Zid prikaže tip zidu, referenco risbe, zunanjo stran in vrh, kot pri orodju {{ui:Zid}}. Nato kliknite ali vpišite točke (x,y · @dx,dy · @dolžina<kot · dolžina vzdolž kazalca):

- **Pravokotnik**: dva nasprotna vogala. Štirje zidovi, štirje spojeni vogali, en korak.
- **Zasukan pravokotnik**: kjer se začne in konča prva stranica (s tem se določi njen zasuk in dolžina), nato tretji klik za drugo stranico.
- **Mnogokotnik**: središče, nato vogal (**Včrtan**) ali sredina stranice (**Očrtan**). Najprej nastavite **Stranice** (3 do 64).
- **Lok, središče**: središče, začetek (ki določi polmer), konec. **Smer**: krajša pot, v nasprotni smeri urnega kazalca ali v smeri urnega kazalca. Obhod za tri četrtine kroga je narisan kot dva zidova.
- **Tangentni lok**: kliknite konec zidu, nato, kje se lok konča. Lok se iz konca zidu odcepi v smeri samega zidu.

Zaprta oblika dobi zunanjo stran navzven. Narisana na **Zunanjem licu** ali **Notranjem licu** je lice, ki ga kliknete, tisto, ki ostane na mestu.

## Zidovi na obstoječih črtah

- **Izberi črte**: kliknite črto in na njej bo zid. Pritisnite {{key:Tab}} (ali držite {{key:Shift}} med klikom), da vzamete celotno verigo črt, ki so med seboj spojene od konca do konca. Črte so risalne črte tega pogleda, referenca sledenja in osi mreže.
- **Sledi obris**: kliknite znotraj območja, ki ga zaprejo te črte ali zidovi. Zidovi obkrožijo najmanjše območje okoli klika.

## Pred risanjem: odmik in spoj

Vrstica Zid ima še dve polji, ki ju uporabljata orodje {{ui:Zid}} in oblike:

- **Odmik**: zidovi so narisani toliko stran od kliknjene črte: + na njeni levi, − na desni, gledano tako, kot risete.
- **Spoj**: odznačite, da narišete samostojne zidove. Njihovi konci dobijo **Prepovej spoj** in ostanejo prosti, kamor koli gredo (glejte [Spremenite zid](topic:change-a-wall-or-door)).

## Razdelitev, odstranitev kosa, ponovna združitev

Odprite {{ui:Zidovi}} v skupini Uredi.

- **Razdeli**: kliknite zid, kjer naj se prereže, ali vpišite razdaljo od njegovega začetka. V bližini zida, ki ga križa, se rez prilepi tam, kjer se srečata. Oba dela imata isti tip in ostaneta spojena od konca do konca. **Reža** pusti prostor te dolžine, središčen na rezu. **Prosti konci** namesto tega dasta končnim rezom **Prepovej spoj** (Nastavitve › BimCraft › Zidovi › **Ko je zid razdeljen** določa, katera možnost je najprej označena). Vrata ali okno gresta s kosom, v katerem stojita; rez skozi njih je zavrnjen.
- **Izbriši odsek**: kliknite, kje se kos začne in kje konča. Vrata v kosu gredo z njim.
- **Ponovno združi**: kliknite dva dela enega zidu (v isti črti, istega tipa). Spet postaneta en zid, prvi, na katerega ste kliknili, z vrati obeh.

## Slog spoja, prepoved spoja, prednost sloja

Odprite {{ui:Zidovi}} v skupini Uredi.

- **Slog spoja**: kliknite vogal, kjer se končata dva ravna zidu. Vsak klik gre na naslednji slog: **Poševno** (oba konca sta odrezana na črti od notranjega do zunanjega vogala; to je začetni slog vsakega vogala), **Na stik** (en zid teče skozi do zunanjega lica drugega, ki se ustavi ob njegovi strani) in **Ravno** (kot na stik, zid, ki teče skozi, pa se konča ravno; pod pravim kotom je videti kot na stik). **Naslednji** ali {{key:Tab}} naredi drugi zid tistega, ki teče skozi. Seznam **Slog** v vrstici kaže vogal, na katerega ste nazadnje kliknili. Enaki izbiri sta v **Lastnostih** enega zidu: **Slog spoja na začetku / na koncu** in **Teče skozi**. Vsaka sprememba je en korak v **Spremembah**. Tloris, 3D telo, prostori in količine sledijo.
- Pri T je zid, ob katerega se stakne, vedno tisti, ki teče skozi. Kjer se dva zidova križata, klik (ali **Neprekinjen pri križanju** v Lastnostih) pove, kateri od obeh je neprekinjen; to določa, katere plasti zidu so narisane skozi križanje.
- Slog pripada spoju: ostane, ko se zidovi premaknejo, in izgine samo, ko spoj izgine (zid je izbrisan, razdeljen na tem koncu ali konec dobi Prepovej spoj). Vogal z ukrivljenim zidom ali tam, kjer se srečajo trije ali več zidov, ohrani poševni spoj. Vogal, ostrejši od približno 30 stopinj, ali bolj raven od približno 150, se prav tako vrne na poševni spoj.
- **Prepovej spoj**: kliknite blizu konca zidu. Ta konec je sproščen: ne spaja ničesar, kamor koli gre zid, dokler ga znova ne kliknete. Prosti konci so med aktivnim orodjem označeni s križcem. Enako stikalo je **Spoj na začetku / Spoj na koncu** v Lastnostih.
- **Prednost sloja**: kjer se srečajo zidovi s plastmi, močnejša plast reže šibkejšo, zato se jedra stikajo z jedri, obloga pa se ustavi ob močnejši plasti. Vsaka plast ima prednost od 0 do 999; privzeta izhaja iz vloge plasti (konstrukcija 800, podlaga 600, toplotna izolacija 400, membrana 300, obloga 200, votlina 100). {{ui:Prednost sloja}} odpre sestavo zidu, kjer stolpec **Prioriteta** nastavi lastno številko plasti. Plasti enake prednosti se ustavijo druga ob drugi, črta pa je narisana samo med različnimi materiali. To vidite v tlorisih s srednjo ali fino podrobnostjo, na vogalih, T spojih in križanjih dveh ravnih zidov; Nastavitve › BimCraft › Zidovi › **Počisti plasti zidov, kjer se srečajo** to izklopi. Vpliva samo na to, kar je narisano znotraj zidov: obrisi in količine zidov ostanejo takšni, kot jih da slog spoja.

## Zamenjava tipa več zidov

Prehod od skic do delovnih risb je večinoma sprememba tipa: splošen zid postane natančna sestava. Ničesar ne rišete znova.

1. Izberite zidove (enega ali več s {{key:Ctrl}} ali {{key:Shift}}).
2. V **Lastnostih** pritisnite **Zamenjaj tip…** pod Vrsta zidu (ali odprite {{ui:Zidovi}} v skupini Uredi in izberite {{ui:Zamenjaj tip}}, ki odpre isti seznam). Seznam se odpre v **Lastnostih**, v bloku izbranih zidov. Ni pogovorno okno in ničesar ne prekrije: tloris, 3D pogled in izbira delujejo naprej, medtem ko je odprt, in sledi zidovom, ki jih izberete.
3. Seznam prikaže vsak tip zidu z njegovo debelino in oznako LOD, na primer »Splošen zid 230, LOD 200« in »230 glinena opeka, ometana z obeh strani, LOD 300«. Tipi, ki jih imajo izbrani zidovi zdaj, so označeni. V **Najdi** vpišite, da zožite: ime, debelino ali `lod 300`.
4. Kliknite tip. Vsak izbrani zid se spremeni vanj v enem koraku, zato en {{ui:Razveljavi}} povrne celotno zamenjavo. Majhen x zapre seznam.

Vsak zid ohrani svojo črto lokacije. Zid na svoji osrednji črti raste na obe strani; zid, katerega črta lokacije je lice, ohrani to lice in raste na drugo stran, zidovi, pridruženi nanj, pa mu sledijo na vogalih. Zidovi, zaklenjeni na zamenjani zid, mu prav tako sledijo. Vrata in okna ostanejo v svojih zidovih in se znova izrežejo za novo debelino.

Po zamenjavi seznam prikaže **Kaj se je premaknilo**: koliko zidov se je spremenilo in v kaj, debelino in LOD pred in po, zidove, ki so se premaknili vstran, da ohranijo svojo črto lokacije, pridružene zidove, ki so sledili, vrata in okna, ki so znova vdelana, ter vsak prostor, katerega površina se je spremenila, z njegovo površino pred in po. Vrstica stanja pove isto v eni vrstici. Poročilo samo sporoči; nikoli ne ustavi zamenjave. Izbira tipa v **Lastnosti › Vrsta zidu** naredi isto zamenjavo in da isto poročilo.

Dve stvari zamenjavo ustavita, takrat pa se sploh nič ne spremeni: vrata ali okno, ki ne bi več sodilo v svoj zid (zid se skrajša tam, kjer sledi vogal; najprej zožite vrata ali jih premaknite stran od vogala), in zaklep, ki bi ga zamenjava pokvarila (zid, zaklenjen na os mreže s svojo osrednjo črto, medtem ko je njegova črta lokacije lice; odklenite ga ali vrnite črto lokacije na osrednjo črto).

Pomočnik, povezan z BimCraft, lahko naredi isto zamenjavo (orodji `wall_types_list` in `walls_swap_type`) in dobi isto poročilo nazaj.

Oznako LOD tipa nastavite v urejevalniku sestav zidov: glejte [Sestave zidov](topic:wall-assemblies).

## Odmik in raztezanje z okvirjem

- **Odmik**: kliknite zid, nato stran, na katero ga želite premakniti, ali vpišite razdaljo. Zid se premakne pravokotno na samega sebe, zidovi, ki so nanj spojeni, pa se raztegnejo. Označite **Kopiraj** za vzporedno kopijo (ta ni spojena z izvirnikom).
- **Raztezanje z okvirjem**: kliknite dva vogala okvirja, nato točko, od koder premaknete, in točko, kamor premaknete. Vsak konec zidu znotraj okvirja se premakne; zid, ki je v celoti znotraj, se premakne, zidovi, ki se vanj zaletavajo, pa grejo z njim; zidovi, ki okvir križajo, se raztegnejo.

## Uredite koto in jo zaklenite

Izberite referenčno koto (Opombe › {{ui:Referenčna kota}}) in vpišite njeno vrednost v **Lastnostih**: zid njene druge reference se premakne pravokotno na samega sebe, prva referenca ostane, spojeni zidovi pa sledijo. Označite **Zakleni to koto**, da ohranite vrednost: ko se pozneje premakne kateri koli od zidov, drugi sledi. Zaklenjene vrednosti ni mogoče prepisati, dokler je ne odznačite.

## Poravnava in zaklep

**{{ui:Poravnaj in zakleni}}**: kliknite lice zidu (ali osrednjo črto, blizu sredine zidu) ali os mreže, nato lice zidu, ki ga želite pripeljati na to črto. Zid se pravokotno premakne nanjo. Najprej označite **Zakleni**, da ostanejo poravnani: na tlorisu se prikaže ključavnica, in ko se en zid premakne, mu drugi sledi. **Lastnosti** zidu našteje njegove **Zaklepe**, vsak z **Odkleni**.

## Zaklepanje zidov na osi mreže

Izberite zid, ki teče ob osi mreže ali katerega konec leži na njej, in izberite os mreže v **Lastnostih** › **Zakleni na mrežo**. Nato izberite os mreže z orodjem {{ui:Mreža}} in vpišite razdaljo v {{ui:Premakni za}}: črta se premakne pravokotno na samo sebe, zidovi, zaklenjeni nanjo, pa ji sledijo skupaj s svojimi spojenimi zidovi, v enem koraku. Zida, zaklenjenega na os mreže, sam ne morete premakniti z nje (premaknite os ali odklenite zid); os mreže, obrnjena tako, da zaklenjeni zid ne more ostati pravokotno nanjo, je zavrnjena. Preimenovanje osi ohrani zaklep; njeno brisanje ga odstrani.

## Dolžina: katera stran ostane in kaj meri

- **Rast od** (Lastnosti enega zidu): **Začetek drži** (konec se premakne), **Konec drži** (začetek se premakne) ali **Središče drži** (oba konca se premakneta za polovico). Medtem ko vpisujete dolžino, tloris označi točko, ki drži. Zid, pridružen koncu, ki se premakne, se pravokotno premakne na samega sebe in ohrani svoj kot.
- **Meri od** (poleg Kote v tlorisu, v Lastnostih in v Nastavitve › BimCraft › Zidovi): osrednja črta, notranje lice ali zunanje lice. Polje Dolžina in kote zidov v tlorisu berejo isto, zato se ujemajo. Privzeto je osrednja črta.
- Da zid premaknete brez njegovih spojev (ti se prekinejo, zid ohrani svojo identiteto), držite {{key:Alt}} med vlečenjem njegove srednje ročice.

## Dobro je vedeti

- Ti recepti so specifikacija orodja za zid (strani 4 do 9). Slog spoja in prednost sloja sta narejena za ravne zidove; prednost sloja se prikaže samo v tlorisu (ne v prerezih, pogledih ali 3D, kjer je zid eno telo), ne pri vozliščih treh ali več zidov, membrane pa niso prenesene.
- Slog spoja je shranjen v njegovem zapisu v datoteki IFC (ime `IfcRelConnectsPathElements`, na primer `CadCraft join L butt 1`), zato ga drugi programi še vedno berejo, starejša datoteka pa se odpre s poševnimi spoji.
- Zaklepi in spoji so shranjeni v datoteki IFC (zaklepi kot `CadCraft_WallHolds` na projektu, spoji kot `IfcRelConnectsPathElements`), zato so tam, ko datoteko znova odprete.
- Ukrivljene zidove je mogoče razdeliti, ponovno združiti in jim vzeti kos; ne odmikajo se in ne zaklepajo se.
- Glejte tudi [Narišite zidove](topic:draw-walls), [Spremenite zid, vrata ali okno](topic:change-a-wall-or-door) in [Oblikovanje zidu](topic:wall-shape).
