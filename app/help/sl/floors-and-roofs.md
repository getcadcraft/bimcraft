---
title: Sobe, tla, stropi in strehe
summary: Sobe nastanejo, ko jih zidovi zaprejo; prostoru ali celotni stavbi dodelite tla in strop, na zidove pa položite čopasto ali zabatno streho. Vse se prilagodi, ko se zidovi premaknejo.
keywords: soba, sobe, prostor, površina, obseg, tla, plošča, podtla, strop, streha, čopasta streha, zabatna streha, naklon, previs, napušč, slem, žleb, 6/12
from: 1fb1813c
---

## Kaj boste naredili

Dokončajte lupino stavbe. Sobe nastanejo same iz zidov; tla, stropi in streha zahtevajo po en klik. Ker so določeni iz zidov, se prilagodijo, ko se zidovi premaknejo.

## Sobe

Vsak prostor, ki ga zarisani zidovi zaprejo, je soba. Pojavi se takoj, ko jo zadnji zid zapre, s številko (101, 102 … na prvi etaži, 201 … na naslednji) in imenom (**Soba 1**, **Soba 2** …), na tlorisu pa je v njeni sredini prikazana njena površina.

- Z vklopljenim {{ui:Izberi}} kliknite v sobo, da jo izberete. V **Lastnostih** spremenite njeno **Ime** (na primer `Kitchen`) in **Številko**; prikazani sta njena površina in obseg.
- Če izbrišete zid med dvema sobama, postaneta ena; če čez sobo zarišete zid, postaneta dve. Soba ohrani svoje ime in številko, ko se zidovi okoli nje premikajo.
- Sobe ni mogoče izbrisati samostojno: je prostor, ki ga tvorijo zidovi.

Površine se merijo znotraj lic zidov. Sobe se shranijo kot prostori IFC s svojo talno površino, obsegom, višino in prostornino, zato jih razpredelnice prebirajo (glejte [Seštejte količine, seznamite elemente in sestavite razpredelnice prostorov](topic:quantity-totals)).

## Tla

1. Kliknite {{ui:Tla}}.
2. Izberite **Ta soba** ali **Cela stavba**, **Vrsto** (lesena tla ali betonska plošča) in debelino.
3. Premaknite kazalec v sobo (ali kamorkoli v stavbo). Območje, ki ga bodo tla pokrila, je označeno s svojo površino.
4. Kliknite. Zgornji rob tal je na višini nivoja; tla segajo navzdol za svojo debelino. Tla za celo stavbo segajo do zunanjih lic zidov.

## Stropi

1. Kliknite {{ui:Strop}}.
2. Izberite **Ta soba** ali **Cela stavba** in njihovo **Višino** nad tlemi.
3. Premaknite kazalec v notranjost in kliknite.
4. Če ga želite videti od spodaj, z mrežo in lučmi na njem, preklopite tloris na tloris stropa: glejte [Pogledi, območja pogleda in lastni listi](topic:views-and-sheets).

## Streha

1. Na nivoju, na katerem stojijo zidovi, ki nosijo streho, kliknite {{ui:Streha}}.
2. Vpišite **Naklon** kot dvig na 12 (`6/12`) ali v stopinjah (`30`) ter **Previs**.
3. Izberite **Konce**: **Čopasta streha** (vse strani so nagnjene), **Zabati na krajših stranicah** ali **Zabati na daljših stranicah** (stavba s štirimi stranicami) ali **Enokapna**.
4. Premaknite kazalec v stavbo: napušč in slem se prikažeta na tlorisu. Kliknite.

Streha sedi na vrhu zidov, na nivoju nad njimi, njen spodnji rob pa se stika z zunanjim licem zidov. Zabatne čelne stene zapolni zabatni zid, debel kot zid pod njim. Stavba v obliki črke L, T ali U dobi čopasto streho, katere krila se stikajo v žlebovih.

## Spremenite jih

Izberite tla, strop ali streho (v 3D-pogledu, drevesu modela ali streho tako, da kliknete v njen obris na nivoju nad njo) in jo spremenite v **Lastnostih**: vrsto tal, debelino in za koliko je njihov zgornji rob nad nivojem; pri stropu višino, debelino in **Vzorec** (mrežo, ki jo strop nariše na tlorisu stropa: brez, 600 × 600, 600 × 1200, 2' × 2' ali 2' × 4'); pri strehi naklon, previs, konce in debelino. Vsaka sprememba je en korak razveljavitve.

## Tip s plastmi za tla, strop ali streho

Tla, strop ali streha lahko dobijo **tip**, kot ga dobi zid: poimenovano sestavo plasti, vsaka z materialom in dejansko debelino.

- **Ob postavitvi.** Orodja {{ui:Tla}}, {{ui:Strop}}, {{ui:Streha}} in Risanje tal imajo v svoji vrstici seznam **Tip**. **Brez tipa** jih postavi kot prej, s svojo debelino. Tip jih postavi tako debele, kot so skupaj debele plasti tipa.
- **Pozneje.** Izberite tla, strop ali streho in v **Lastnostih** izberite **Tip**. Element ostane isti element: njegov položaj, prostor in podatki se ohranijo, nič se ne nariše znova. Spremenijo se le njegov tip, debelina in material. Tako skica postane razdelan element: zamenjajte njegov splošni tip s pravim.
- **Uredi tip…** odpre urejevalnik tipov: plasti od **zgoraj** navzdol, jedro, funkcijo vsake plasti in oznako LOD tipa. Shranjevanje spremeni vsak element tega tipa v enem koraku, en {{ui:Razveljavi}} ga povrne. Če spremenite začetni tip, se shrani kopija kot vaš lastni tip.
- Ko ima element tip, njegova **Debelina** pripada tipu in je ni mogoče vpisati. Če jo želite spremeniti, izberite drug tip ali **Brez tipa**.

Začetni tipi so en **splošni** tip za vsakega (ena plast splošnega materiala, označena LOD 200) in dva plastna (označena LOD 300): lesena nosilna tla in betonska tla z estrihom; lesena streha in betonska ravna streha; strop iz mavčno-kartonskih plošč in spuščeni strop iz ploščic. Gre za izhodiščne vrednosti, ne za preizkušene konstrukcije: pred uporabo preverite plasti.

Razpredelnica **Plasti: površina in prostornina** našteje vsako plast vsakega tipa v uporabi; glejte [Razpredelnice, kotiranje in PDF](topic:plan-schedules-and-pdf). Tipi tal, streh in stropov potujejo med projekti v paketu tipov ali kot element knjižnice; glejte [Paketi tipov](topic:type-packs).

## Dobro je vedeti

- Premikanje, dodajanje ali brisanje zidov ponovno ustvari sobe, tla, stropove in streho nad njimi.
- Streha se prilega poljubnemu obrisu. Če želite vsakemu zidu dati svoj naklon, zabat ali enokapni konec, dvignjen venec, čelno letev in oblogo napušča ali če želite narisati eno ravnino strehe, glejte [Strehe: naklon za vsak zid, zabati, enokapi in ravnine streh](topic:roofs).
- {{key:Delete}} izbriše izbrana tla, strop ali streho.
