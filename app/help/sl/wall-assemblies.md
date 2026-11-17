---
title: Sestave zidov in referenčne kote
summary: Sami sestavite tipe zidov plast za plastjo, z jasno določenim jedrom, v projektu hranite knjižnico materialov in kotirajte do lic in osrednjih črt, ki ostanejo pritrjene, ko se zid spremeni.
keywords: lod, stopnja razvitosti, lod 200, lod 300, splošen, sestava zidu, tip zidu, plasti, jedro, lice jedra, osrednja črta jedra, zračna reža, votlina, membrana, zaščitna folija, knjižnica materialov, materiali, debelina, referenčna kota, kota, asociativno, črta lokacije, fasadna obloga, stojka, mavčne plošče
from: 4ea8fbf5
---

## Kaj boste naredili

Naredite tip zidu, ki ustreza zidu, ki ga boste zgradili: fasadno oblogo, zaščitno oblogo, jedro iz 5½-palčnih stojk in mavčnih plošč ali opeko, zračno režo in leseno steno. Označite, katere plasti so jedro, da lahko kota ali črta lokacije drži jedro, medtem ko se obloge okoli njega spreminjajo. Nato kotirajte zidove do lic in osrednjih črt, ki jih mislite.

## Naredite tip zidu

1. Začnite stavbo ali odprite model IFC, vklopite {{ui:Risanje}} in nato izberite orodje {{ui:Zid}}.
2. V {{ui:Vrsta zidu}} izberite začetni tip in odprite {{ui:Sestave zidov…}}. Začetni tip se odpre kot kopija; novemu tipu dajte ime.
3. Plasti tečejo od zunanje strani na vrhu seznama do notranje na dnu. Izberite material vsake plasti, vpišite njeno debelino (enote projekta ali določene, na primer `12.7 mm` ali `1/2"`), izberite njeno vlogo (obloga, podlaga, konstrukcija, toplotna izolacija, membrana) in označite plasti **Jedro**. Jedro mora biti ena neprekinjena skupina.
4. {{ui:Dodaj sloj}} doda plast, {{ui:Dodaj režo}} doda zračno režo z njenim prezračevanjem (nedoločeno, neprezračeno, prezračevano), {{ui:Dodaj membrano}} pa doda plast brez nazivne debeline, na primer zaščitno folijo. Puščici premakneta plast navzven ali navznoter.
5. Predogled nariše plasti v merilu, z jedrom podčrtanim in oštevilčenim kot vrstice, ter zapiše kote za vsako plast, za jedro in za skupno debelino. {{ui:Shrani tip}}.

Novi tip je na seznamu tipov v orodju Zid in v **Lastnostih** izbranega zidu. Shranjevanje tipa, ki ga urejate, spremeni vsak zid, ki ga uporablja; {{ui:Podvoji tip}} naredi ločenega in ga dodeli samo zidovom, ki ste jih izbrali. Vsako shranjevanje je en korak razveljavitve, skupaj z zidovi, ki jih premakne, vrati in okni v njih ter kotami, ki so od njih odvisne.

Zračna reža doda širino. Membrana ne doda nič: ostane v tipu, da jo lahko razpredelnica kasneje najde, in se ne šteje v debelino zidu ali jedra. Zračna reža ali membrana se nikoli ne šteje kot polna snov. V datoteki, shranjeni kot IFC2X3, membrana ostane v zapisu tipa, a je izpuščena iz njegovih fizičnih plasti materiala.

## Označite tip s stopnjo razvitosti (LOD)

Tip lahko pove, kako razvit je. V urejevalniku **Stopnja razvitosti (LOD)** ponuja fiksno lestvico 100, 200, 300, 350, 400 in 500 ali **Ni nastavljeno**. Splošen zid („Splošen zid 230“) je LOD 100 ali 200; natančna sestava z dejanskimi plastmi („230 glinena opeka, ometana z obeh strani“) je LOD 300 ali več. Oznako nastavite sami: BimCraft je ne izračuna, začetni tipi pa je nimajo.

Oznaka je prikazana poleg imena tipa na seznamu tipov v orodju Zid, v **Lastnostih** zidu in na seznamu [Zamenjaj tip](topic:wall-tools). Poročilo po zamenjavi pove, ali se je nivo zvišal ali znižal. Da jo vidite v razpredelnici **Zidovi po tipu** in v njeni datoteki CSV, v Nastavitve › BimCraft › Zidovi označite **Pokaži LOD vsakega tipa zidu v razpredelnici zidov**: doda se zadnji stolpec LOD. Oznaka se shrani v datoteko IFC skupaj s tipom (v naboru lastnosti tipa `CadCraft_WallType`, kot lastnost `LOD` in v zapisu tipa), zato je tam, ko datoteko znova odprete. Oznaka je za zdaj samo na tipih zidov, ne na posameznih elementih ali drugih vrstah elementov.

## Splošni zidovi za fazo skic

Seznam tipov v orodju Zid se začne z dvema **splošnima** zidovoma: **Splošen zid 200 mm (zunanji)** in **Splošen zid 100 mm (notranji)**. Vsak je ena plast splošnega materiala, označena z LOD 200. Uporabite ju, ko veste, kje so zidovi, še ne pa, iz česa so.

Zid, katerega tip je označen z LOD 100 ali LOD 200, je v vsakem tlorisu narisan kot **en črtkan pas** na vsaki stopnji podrobnosti: brez plasti in brez črt plasti. Tako je pri splošnih zidovih in pri vsakem tipu, ki ga sami označite z LOD 100 ali 200. Sam zid je popoln: ima debelino, vrata in okna, prostore in količine.

Da ga razvijete, zamenjajte njegov tip (Uredi › Zidovi › **Zamenjaj tip** ali Tip v **Lastnostih**). Zid se nikoli ne nariše znova: isti zid dobi novi tip, poročilo pa pove, kaj se je premaknilo. Tip, označen z LOD 300 ali višje, se nariše s svojimi plastmi kot prej.

Če želite vsak zid risati po plasteh, ne glede na oznako: Nastavitve › BimCraft › Zidovi, odznačite **Riši zidove tipa LOD 100 ali LOD 200 kot en črtkan pas**.

Začetna vrata in okna so prav tako splošne vrste (velikost in način odpiranja, ne izdelek). Če je vklopljena možnost **Pokaži LOD vsakega tipa zidu v razpredelnici zidov**, razpredelnici Vrata in Okna zanje prikažeta LOD 200.

## Dodelite tipu podatke za predizmere

V urejevalniku tipa zidu **Podatki za predizmere** zapišete, kar mora kalkulant vedeti o zidu, enkrat za tip: **enoto**, iz katere je zgrajen (opeka ali blok: ime, dolžina, višina in širina), **malto** (ime in debelina sljubnice) ter **enotno ceno** s kodo valute (tri črke, na primer USD, EUR ali ZAR) in tem, na kaj se nanaša: na kvadratni meter ali kvadratni čevelj neto površine zidu, na meter ali čevelj dolžine zidu ali na vsak zid. Vse to je neobvezno.

Shrani se s tipom v datoteko. Vsak zid tipa ga nato poroča: {{ui:Razpredelnice}} › **Vrste zidov: podatki za predizmere** navaja enoto, malto, enotno ceno in enotno ceno pomnoženo z izmerjeno količino; predizmera, poslana v TakeoffCraft, pa to nosi na postavki tega tipa zidu. Spremenite ga v tipu in vsak zid mu sledi.

Tri polja so še namenjena štetju opek ali blokov in malte:

- **Odpadek enot, %** se prišteje številu enot. Pustite prazno, če želite uporabiti vrednost merilne metode projekta, ali brez odpadka, če je metoda nima. Vnesite 0, da odpadka ni, ne glede na to, kaj pravi metoda.
- **Dodatna malta, %** je za vdolbine ali perforacije, ki vzamejo malto. Prišteje se prostornini malte. Pustite prazno, če je ni.
- **Plasti iz te enote**: označite vsako plast, ki je lupina te opeke ali bloka. Zid z votlino jih ima dve. Če nobena ni označena, se štejejo plasti jedra.

Enotna cena je lahko tudi na enoto za naročilo, na 1000 enot za naročilo ali na m³ malte. Kjer ima enota dolžino in višino, **Vrste zidov: podatki za predizmere** prikaže enote na m² (ali ft²) ene lupine, enote za naročilo in prostornino malte; formule so v [Opeke, bloki in malta](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tip ima eno enoto: dveh lupin z različnima enotama (zunanja lupina iz opek in notranja iz blokov) na enem tipu zaenkrat ni mogoče šteti.

## Zadržite jedro na mestu

V **Lastnostih** nastavite **Črto lokacije** zidu na lice jedra ali osrednjo črto jedra. Ko pozneje dodate ali zadebelite obloge, ta črta ostane na mestu, zid pa raste okoli nje. Zidovi, ki se stikajo z njim v kotu, mu sledijo, zato ravni koti ostanejo zaprti.

## Materiali projekta

{{ui:Knjižnica materialov…}} našteje materiale projekta: ime, kategorijo, debelino, s katero plast začne, barvo prikaza, vzorec šrafure preseka in opombe. Knjižnica se shrani v IFC skupaj s projektom. Ko za plast izberete material, plast dobi privzeto debelino materiala, ki jo lahko nato spremenite; spreminjanje knjižnice pozneje nikoli ne spremeni velikosti zidov, ki ste jih že narisali. Material lahko naredite tudi iz seznama materialov plasti z {{ui:+ Nov material…}}.

## Referenčne kote

{{ui:Opombe}} › {{ui:Referenčna kota}}: izberite vodoravno, navpično ali poravnano ter referenco: zunanje ali notranje lice obloge, zunanje ali notranje lice jedra, osrednjo črto zidu ali osrednjo črto jedra. Izberite prvi zid, po želji spremenite referenco, izberite drugi zid in nato kliknite, kam gre kotna črta. Dve referenci na enem zidu izmerita njegovo skupno debelino ali debelino jedra. {{ui:Referenčne kote…}} našteje kote pogleda, tudi tiste, ki so izgubile zid, z možnostmi Lastnosti, Ponovno poveži reference in Izbriši.

### Kotiranje celotnega tlorisa po pravilih

{{ui:Opombe}} › {{ui:Okvirno kotiraj tloris…}} zakoti zunanjost tlorisa etaže, ki si jo ogledujete: celotno velikost v obeh smereh, vrsto kot ob vsakem zunanjem robu (konci zidov, zidovi, ki se stikajo z robom, ter vrata in okna v njem), pri čemer so vrste postavljene zunaj stavbe. Označite, kar želite, preberite število in nato kliknite {{ui:Dodaj kote}}. To so običajne referenčne kote, zato sledijo zidovom, ko se ti premaknejo, in katerokoli lahko izberete, premaknete ali izbrišete; celoten nabor je en korak razveljavitve, ponovni zagon pa jih ne podvoji.

Kotira samo zunanjost: prostori v stavbi, ukrivljeni zidovi in zidovi, ki niso pravokotni na tloris, ostanejo za ročna orodja, osi mreže pa niso zidovi, zato se kote med osmi tu ne naredijo. Vaš povezani pomočnik lahko naredi isto s `plan_dimension`.

Kota je pritrjena na zidove, ne na mesto na zaslonu: ko se zid premakne ali se spremeni njegov tip, se vrednost posodobi. Če je zid izbrisan, kota pove, da ni razrešena, in ne kaže številke, dokler je ne ponovno povežete ali ne razveljavite. Polje za dolžino sprejme tudi koordinate tlorisa, na primer `10',12'`, za kotno črto na natančnem mestu.

Kote so za zidove, ki jih je BimCraft narisal, v tlorisnih pogledih. Še ni izdelano: kote v prerezih in pogledih, kote do vrat, oken in drugih sestavnih delov ter plasti sestav, narisane v tlorisu in prerezu; glejte [Kaj še ni izdelano](topic:not-built-yet).

## Glejte tudi

[Narišite zidove](topic:draw-walls), [Spremenite zid, vrata ali okno](topic:change-a-wall-or-door), [Lastnosti](topic:properties-panel).
