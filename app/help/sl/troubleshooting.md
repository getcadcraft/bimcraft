---
title: Odpravljanje težav
summary: Sporočila, ki jih prikaže BimCraft, njihovi vzroki in kaj storiti pri odpiranju datotek in map, 3D modelov, risb ter urejanju.
keywords: težava, napaka, ne deluje, ni mogoče odpreti, ni uspelo, nepopolno, poškodovano, počasno, zrušitev, prazno, manjka, sporočilo, pomoč
from: 1e5a79fc
---

Sporočila se prikažejo v vrstici stanja na dnu delovne površine, ob napaki pa so rdeča. Poiščite sporočilo spodaj.

## Odpiranje datotek

**„*name* ni datoteka IFC, RVT, RFA, DWG ali DXF.“**
BimCraft datoteke ni prepoznal. Preverite končnico in ali datoteka ni prazna. Datoteke PDF, slike in pisarniške datoteke se ne odprejo.

**„.ifczip še ni podprt. Model shranite ali izvozite kot navadno datoteko .ifc.“** (velja tudi za `.ifcxml`)
Razpakirajte `.ifczip` (je navaden zip z datoteko `.ifc`) ali izvozite navaden IFC.

**„… je projektna datoteka, ki je BimCraft še ne bere.“**
Datoteka `.pln`, `.pla`, `.tpl` ali `.bpn`. Iz nje izvozite IFC ali DWG in ju odprite: glejte [Odpiranje projektnih datotek .pln in .pla](topic:pln-project-files).

**„Te datoteke IFC ni mogoče prebrati.“**
Datoteka IFC je poškodovana ali pravzaprav ni IFC. Odprite jo v urejevalniku besedila: prava datoteka IFC se začne z `ISO-10303-21;`. Izvozite jo znova.

**„Datoteka je nepopolna: velika je … MB, njeno lastno kazalo pa kaže na podatke vsaj do … MB. …“**
Projektna datoteka ali datoteka družine je bila med kopiranjem, nalaganjem ali sinhronizacijo odrezana. Datoteka v oblačnem pogonu, ki je »samo na spletu«, izgleda enako. Datoteka, odprta sama zase, se še vedno odpre z opozorilom na vrhu kartice in sporočilom „Prikazano je, kar je bilo obnovljeno; za celoten model znova kopirajte izvirnik.“ Kartica prikaže samo dele, katerih vsak bajt je v datoteki, ostalo pa navede pod **Ni v datoteki**. Datoteko nastavite za delo brez povezave v oblačnem pogonu ali znova kopirajte izvirnik in ga ponovno odprite. V mapi BimCraft namesto tega prikaže najnovejšo popolno varnostno kopijo.

**„… Tudi seznam vsebine datoteke je v manjkajočem delu, zato iz nje ni mogoče odpreti ničesar.“**
Datoteka je bila odrezana tako zgodaj, da seznama vsebine sploh ni. Iz te kopije ni mogoče obnoviti ničesar. Znova kopirajte izvirnik in ga ponovno odprite.

**„Ta sestavljena datoteka nima toka BasicFileInfo, zato ni datoteka Revit.“**
Datoteka je sestavljena datoteka druge vrste (stari pisarniški dokumenti uporabljajo isti zabojnik). Preverite, ali ste izbrali pravo datoteko.

**„Še vedno obdelujem prejšnjo …“**
BimCraft je še vedno zaposlen s prejšnjo datoteko ali mapo. Počakajte, da vrstica stanja konča, nato poskusite znova.

**Izbirnik datotek mojo datoteko zatemni.**
Izbirnik ponuja samo `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` in `.dxf`. Druge datoteke raje povlecite na stran, BimCraft pa vam bo povedal, ali jih lahko prebere.

## Odpiranje map

**„Ta mapa ima več kot 20,000 datotek. Izberite manjšo mapo, na primer eno projektno mapo.“**
Izbrali ste previsoko mapo, na primer cel pogon. Izberite eno projektno mapo.

**„Brskalnik ni dal dostopa do *name*. Izberite jo znova z Odpri mapo.“**
Kliknili ste {{ui:Ponovno odpri}} pri nedavni mapi, dovoljenje brskalnika pa je bilo zavrnjeno ali je poteklo. Izberite mapo znova ali jo povlecite vanj.

**Brskalnik pravi, da bo datoteke „naložil“.**
To je brskalnikova lastna beseda za predajo datotek strani. BimCraft datotek nikamor ne pošilja. Da se izognete vprašanju, mapo povlecite vanj.

**Na telefonu ali tabličnem računalniku se ne zgodi nič.**
Številni mobilni brskalniki ne morejo izbrati map. Odprite posamezne datoteke ali uporabite računalnik.

## Motor IFC se prvič naloži

**Vrstica stanja ostane pri „Zaganjam motor IFC …“ ali pokaže napako, na primer „Failed to fetch“.**
Motorja IFC ni bilo mogoče prenesti. Morda ste brez povezave ali pa ga ovira požarni zid ali blokirnik vsebine.

:::offline
Brez povezave ste. Če gumb v orodni vrstici aplikacije ne piše {{ui:Pripravljeno za delo brez povezave}}, motor IFC v tem brskalniku nikoli ni bil shranjen. Ponovno vzpostavite povezavo, znova odprite datoteko, nato kliknite {{ui:Shrani za delo brez povezave}}, da bo naslednjič deloval tudi brez povezave. Glejte [Na spletu in brez povezave](topic:online-offline).
:::

:::online
Ponovno naložite stran in poskusite znova. V službenem omrežju prosite svojo IT-ekipo, naj dovoli datoteke `.wasm` s tega spletnega mesta.
:::

## Shranjevanje za delo brez povezave

**Gumb piše {{ui:Shranjevanje ni uspelo}}.**
Nekatere datoteke se niso prenesle, največkrat zato, ker je povezava padla. Preverite povezavo in znova kliknite gumb. Morebitna prejšnja kopija za delo brez povezave ostane, dokler nova ni popolna.

**Gumb piše {{ui:Delo brez povezave ni na voljo}}.**
To okno ne more hraniti kopije za delo brez povezave, na primer zasebno okno ali upravljani službeni računalnik. Glejte [Delo brez povezave](common:offline).

**Gumb nekaj časa ostane pri „Shranjujem *n* od *m*“.**
Kopija BimCraft je velika okoli 11 MB, večina je motor IFC. Zavihek pustite odprt, dokler ne piše {{ui:Pripravljeno za delo brez povezave}}.

**BimCraft se je odprl brez povezave, vendar izgleda zastarel.**
Vaša shranjena kopija je iz prejšnjega obiska. Ko ste na spletu, kliknite {{ui:Pripravljeno za delo brez povezave}} in izberite {{ui:Shrani znova (pridobi najnovejšo različico)}}.

## Pogled 3D

**Model ni tam, kjer sem pričakoval, ali je majhen.**
Pritisnite {{key:F}} ali kliknite {{ui:Prilagodi}}. Prilagodi vedno zajame vse v modelu, vključno z etažami, ki ste jih odznačili, in zalutalimi elementi daleč od stavbe, zato je stavba lahko videti majhna. Od tam povečajte.

**Klik ničesar ne izbere.**
Med klikom miško držite pri miru: majhen povlek vrti pogled. Elementov na odznačenih etažah ni mogoče izbrati. Ko je {{ui:Prostori}} vklopljeno, se prosojni prostori izberejo pred tem, kar je v njih.

**Gumb {{ui:Robovi}} je zatemnjen: „Robovi so za zelo velike modele izklopljeni“.**
Model ima več kot 1.5 milijona trikotnikov. Robovi so izklopljeni, da se prihrani pomnilnik.

**Zavihek se upočasni, zbeli ali pokaže brskalnikovo stran o zrušitvi.**
Model je prevelik za pomnilnik, ki ga brskalnik dodeli zavihku. Zaprite druge zavihke in ponovno naložite stran. Izvozite manjšo datoteko IFC: eno stavbo, eno stroko ali manj etaž. Glejte [Brskalniki, naprave in pomnilnik](topic:platforms).

**Pogled 3D ostane prazen.**
WebGL je morda izklopljen ali blokiran. V nastavitvah brskalnika vklopite strojni pospeševalnik (ali grafični pospeševalnik) in znova zaženite brskalnik.

## Urejanje IFC

**„Vnesite število.“** Vrednost je številska. Vnesite navadno število brez enot, na primer `2.4`.

**„Vnesite celo število.“** Vrednost je število kosov ali celo število. Odstranite decimalna mesta.

**„Urejate lahko le lastnosti z eno vrednostjo.“** Seznami, naštevanja in količine so samo za branje.

**{{key:Mod+S}} odpre brskalnikovo okno „Shrani stran“.** Neshranjenih sprememb ni, zato je BimCraft tipko prepustil brskalniku. Zaprite okno.

**{{key:Mod+Z}} ne naredi ničesar.** Deluje samo, ko imate neshranjene spremembe in ne vnašate besedila v polje. Po shranjevanju ni ničesar več za razveljavitev.

**Seznam {{ui:Spremembe}} še vedno prikazuje urejanja, čeprav ste jih zavrgli in odprli risbo ali mapo.** Ko na vprašanje „Zavržem jih?“ odgovorite z {{ui:V redu}} in nato odprete kaj drugega kot model IFC, se stara urejanja ohranijo v pomnilniku, {{ui:Shrani kot IFC}} pa bi jih še vedno shranil. Za res nov začetek ponovno odprite izvirno datoteko IFC ali ponovno naložite stran.

**Moja sprememba je spremenila več elementov, kot sem izbral.** Spremenili ste lastnost v naboru, označenem z „(type)“. Lastnosti tipa veljajo za vsak element tipa. Kliknite {{ui:Razveljavi}}. Glejte [Spremenite lastnost tipa za vsak element tipa](topic:type-vs-instance).

## Risbe

**„*name* ni mogoče prebrati. Morda je poškodovana ali shranjena v obliki, ki je bralnik še ne obravnava (…).“**
Risbo shranite iz programa, ki jo je ustvaril, kot starejšo datoteko DWG (2018 ali starejšo) ali kot DXF, in poskusite znova.

**„Ta risba nima ničesar za prikaz.“** ali **„*name* je prazna risba: ne vsebuje črt, besedila ali blokov.“**
Risba je prazna ali vsebuje samo stvari, ki jih BimCraft še ne riše (glejte **Še ni narisano** na desni).

**„Ta risba je zelo velika; prikazan je samo del.“**
BimCraft je prenehal risati, da ostane odziven. Izklopite sloje, ki jih ne potrebujete, ali odprite liste, ki jih potrebujete, iz manjše risbe.

**Deli lista manjkajo.**
Povezane risbe morda manjkajo: poglejte pod **Povezane risbe** na desni. Glejte [Poiščite povezane risbe in slike](topic:dwg-linked-files). Sloji so morda tudi izklopljeni: kliknite {{ui:Vsi vklopljeni}}.

**Slika se prikaže kot prazen okvir.**
Njene datoteke ni bilo mogoče najti ali pa je TIFF („TIFF ni mogoče prikazati v brskalniku“). Dodajte kopijo v obliki PNG ali JPEG z {{ui:Dodaj slike …}}.

**Drsenje po sledilni ploščici povečuje namesto premikanja risbe.**
Tako risbe delujejo v BimCraft. Za pomik kliknite in povlecite.

## Še vedno ne gre

Preberite [Kaj še ni izdelano](topic:not-built-yet): iskana stvar morda v tej različici ne obstaja.
