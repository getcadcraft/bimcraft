---
title: Kaj je novega v 0.8 in 0.8.1
summary: BimCraft dodaja ljudi, ki hodijo po stavbi, akustiko sob, ki jo lahko slišite, predvajanje poplav, vetra in potresa, pogled življenjskega cikla v petdesetih letih, preverjanja glede na IDS, oznake in razporede, Premakni, Poravnaj in Razporedi, slike pod tlorisom, stene iz posnetka, risbe panelov, sončno energijo, delitvene in VRF sisteme, dimenzioniranje cevi in kablov, preverjanja betona in potresa, poljubno kartografsko projekcijo, izbiro pogona upodobitve in razveljavitev v Studiu; 0.8.1 popravi sivo obarvana orodja postavitve traku.
keywords: kaj je novega, release notes, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, evakuacija, ljudje, čakalne vrste, akustika, reverberacija, impulzni odziv, poplava, veter, potres, nevarnost, življenjski cikel, življenjska doba, ids, oznake, razporedi, premakni, poravnaj, razporedi, slika, ozadje, posnetek v stene, mesto iz civilcraft, risbe panelov, ogrodje, sončna, pv, delitveni, vrf, fan coil, dimenzioniranje cevi, kabelski pladenj, osvetljenost, beton, potres, primerjava posnetka, epsg, projekcija, dokumenti, predloga, ogljik, strošek, pogon upodobitve, odpri v, usd, glb, unreal, razveljavi, dodatki, pcf, simboli, rastline, sled, peresa, trak, brskalnik projektov, postavitev
from: 87b03056
---

To je, kaj se je spremenilo v BimCraftu 0.8 (2026-11-01) in 0.8.1 (2026-11-02), v primerjavi z 0.7. BimCraft zdaj zna odgovoriti na vprašanja o stavbi in jo preizkusiti z ljudmi, zvokom, vodo, vetrom in potresi ter jo risati z več orodji; 0.8.1 je popravljalna izdaja.

## Novo

### Preizkusite stavbo

- **Ljudje v stavbi.** Odsek {{ui:Ljudje v stavbi}} levega okna pelje evakuacijo ali običajen dan prihodov skozi vaše sobe, vrata in stopnišča. Vidite čakalne vrste, kjer se stavba zoži, najdaljšo pot do izhoda iz vsake sobe in koliko časa potrebuje zadnja oseba. Označite {{ui:Zaprto}} pri vratih, da vidite, kaj se spremeni, in označite {{ui:Pokaži ljudi v pogledu 3D}}, da spremljate hodce. Ugotovitve gredo v težave. Grob model množice za projektne odločitve, ne potrdilo o požarni varnosti. Glejte [Peljite ljudi skozi stavbo](topic:people-in-the-building).
- **Akustika sob, in slišite jo.** Odsek {{ui:Akustika prostorov}} navede čas reverberacije vsake sobe po oktavnih pasovih (Sabine in Eyring) iz njene velikosti in izbranih površin, z lastnim ciljem pa pove, koliko absorpcije bi ga dosegel. {{ui:Predvajaj v tem prostoru}} predvaja glas, ploskanje, odščipnjene tone ali vašo zvočno datoteko prek impulznega odziva, izračunanega za sobo. Vrednosti absorpcije so tipične objavljene vrednosti, ki jih lahko zamenjate. Glejte [Akustika prostorov](topic:room-acoustics).
- **Predvajanje poplave, vetra in potresa.** {{ui:Predvajanje nevarnosti}} predvaja vodo, ki se dviga po sobah, pritisk vetra na vsako etažo in potres, ki trese etaže, na tlorisu ali višinskem pogledu z drsnikom časa. Preprosti modeli z njihovimi predpostavkami na okencu; ni preverjanje po predpisih. Glejte [Predvajanje poplave, vetra ali potresa](topic:hazard-playback).
- **Kaj se v petdesetih letih izrabi.** {{ui:Pogled življenjskega cikla}} navede okna, vrata, zaključne obdelave in streho z življenjsko dobo vsakega, leta, ko jih nadomestijo, in ko vpišete strošek na enoto, strošek po letih in njegovo sedanjo vrednost. {{ui:Shrani razpored (CSV)}} ga zapiše. Življenjske dobe so načrtovalne vrednosti. Glejte [Poglejte, kaj se izrabi v petdesetih letih](topic:life-cycle-view).
- **Preverjanja betona in potresa.** Bloka {{ui:Betonski elementi}} in {{ui:Potresne obtežbe}} zavihka {{ui:Analiza}} preverita betonske grede in stebre po ACI 318-19 ter izračunata enakovredne bočne sile po ASCE 7-22 na togih ploščah, s premikom etaže. Za preverjanje inženirju. Glejte [Preverjanje betonskih elementov in izdelava potresnih obtežb](topic:concrete-and-seismic).

### Preverjanje in poročanje

- **Preverjanje glede na IDS.** Naložite datoteko `.ids`, ki vam jo je dal naročnik, in v težavah vidite vsak element, ki ji ne ustreza, preden dostavite IFC. Odprite {{ui:Preverjanje glede na IDS}} pod {{ui:Preverjanja modela}}. Glejte [Preverjanje modela glede na IDS naročnika](topic:check-against-ids).
- **Oznake in razporedi.** Določite svoje oznake, jih nastavite na številnih elementih hkrati in izdelajte razporede, katerih stolpci, filtri in skupine jih berejo; oznake se ohranijo v IFC. Glejte [Oznake in razporedi](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} izpolni predlogo specifikacije iz odprtega IFC in jo shrani kot PDF, dokument Word ali Markdown. Glejte [Dokumenti iz modela](topic:documents-from-the-model).
- **Primerjava posnetka z modelom.** Ko je odprt oblak točk, {{ui:Primerjaj}} oceni vsak element kot zgrajen, delno zgrajen, manjkajoč ali nedosežen, in pokaže odstotek zgrajenega. Glejte [Primerjava posnetka z modelom](topic:compare-scan-with-model).
- **Ogljik in strošek.** Okno Ogljik sešteje vgrajeni ogljik iz tabele faktorjev, ki jo lahko urejate, okno Strošek pa razporedi cene po razporedu 4D. Faktorji, ki so priloženi BimCraftu, so splošni in označeni kot nepreverjeni. Glejte [Vgrajeni ogljik in strošek](topic:embodied-carbon-and-5d-cost).
- **Poljubna kartografska projekcija.** {{ui:Meri}} › {{ui:Koordinatni sistem…}} sprejme številko EPSG, cono UTM, ime ali vašo lastno definicijo projekcije. Glejte [Georeferenciranje s poljubno projekcijo](topic:georeference-any-projection).

### Risanje in urejanje

- **Premakni, Poravnaj in Razporedi.** Pod {{ui:Zgradba}}; {{key:Shift+M}} zažene Premakni (navadni {{key:M}} je še vedno Meri). Premakni med premikanjem kopira s tipko {{key:C}}, vsak korak je en korak razveljavitve, in se prenaša v seji Live TeamWork. Glejte [Premikanje, kopiranje, poravnava in razporejanje](topic:move-align-distribute).
- **Slike pod tlorisom.** {{ui:Zgradba}} › {{ui:Slika}} postavi PNG, JPEG ali WebP pod tloris nivoja ali na navpično ravnino. Merilo nastavite z dvema točkama in sliko premaknete, zasukate, zbledite in zaklenete. Območje, kopirano v MarkupCraft, se prilepi v merilu svojega lista. Glejte [Postavitev slike pod tloris](topic:pictures-as-backgrounds).
- **Stene iz posnetka.** Ko je odprt posnetek, se stene, vrata in sobe pojavijo kot predlogi, ki jih obdržite ali zavrnete posamezno, v enem koraku razveljavitve. Najdejo se le stene v dveh pravokotnih smereh. Glejte [Spreminjanje posnetka v stene](topic:scan-to-walls).
- **Sled, peresa in skica stopnišča.** {{ui:Preriši}} pokaže drug nivo črtkano pod tlorisom, {{ui:Peresa}} da stenam, vratom in oknom lastno debelino črte v enem pogledu, {{ui:Skiciraj stopnišče}} pa spremeni sledeno črto v stopnišče. Odpre se mreža Wavefront OBJ. Glejte [Prerišite nivo, peresa in stopnišče iz skice](topic:trace-pens-stairs-obj).
- **Stavbe okoli naslova.** Stavbe in parcela, ki jih je našlo orodje CivilCraft za pretvorbo naslova v lokacijo, se pojavijo kot predlogi; označite tiste, ki jih želite dodati. Glejte [Začetek z lokacijo iz CivilCraft](topic:site-from-civilcraft).
- **Risbe panelov.** {{ui:Zgradba}} › {{ui:Risbe panelov}} uokviri stene, plošče in strehe v lesu ali lahki jeklena pločevina ter shrani seznam za rezanje kot CSV in delavniške risbe kot PDF. Začetne vrednosti, ne konstrukcijska zasnova. Glejte [Risbe panelov](topic:panel-drawings).
- **Simbolna paleta in rastline.** {{ui:Zgradba}} › {{ui:Paleta simbolov}} po imenu najde električne in vodovodne simbole; vir {{ui:Rastline}} v {{ui:Knjižnica}} navede okoli 400 rastlin s simboli v tlorisu. Glejte [Paleta simbolov](topic:symbol-palette) in [Postavitev rastline](topic:plant-list).

### Cevi, kanali in energija

- **Delitveni, VRF in ventilatorski konvektorji.** Notranje in zunanje enote z njihovimi priključki ter vodila, dimenzionirana iz tabele tipičnih primernih vrednosti, ki jih lahko spremenite. Glejte [Delitveni, VRF in ventilatorski konvektorji](topic:split-vrf-fan-coils).
- **Izračuni.** Okno Izračuni preveri dimenzije napajalnih cevi in kanalov s padcem tlaka, vodi kable skozi pladnje in cevi ter pokaže njihovo zapolnitev, izračuna osvetljenost iz datotek IES ali EULUMDAT. Privzete vrednosti so označene; vnesite vrednosti svojega predpisa. Glejte [Izračuni cevi, kanala, kabla in svetlobe](topic:mep-calculations).
- **Datoteke PCF.** Ukaz **Izvozi PCF** orodja Cev zapiše poteze za programe za napetost cevi in izometrijo, datoteka PCF, prebrana nazaj, pa nariše njeno cev. Glejte [Datoteke komponent cevi](topic:piping-pcf).
- **Sončni PV.** Namestite nize na strehe ali na tla, jih zasenčite iz modela, ocenite letno energijo, preverite vrstice in naredite podatke enočrtnega diagrama. Začetni modul in izgube sta splošna. Glejte [Sončni PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Okno Preverjanje z EnergyPlus zapiše model kot IDF za zagon v vašem EnergyPlus. Zagon v brskalniku potrebuje različico, ki jo gostite sami in vpišete naslov; BimCraft je ne prinaša. Glejte [Preverjanje ogrevanja in hlajenja z EnergyPlus](topic:check-with-energyplus).

### Slike in datoteke

- **Izberite pogon upodobitve.** {{ui:Upodobitev}} ima izbiro {{ui:Pogon}}. Naša dva vgrajena pogona (Hitro in Sledenje poti) ostaneta privzeta. **Odpri v** shrani prizor kot datoteko USD ali glTF, projektno mapo Unreal pa kot .zip; v CadCraft Studiu lahko dodatek doda pogon. Vtičnik Unreal, ki odpre projekt, ni izdan. Glejte [Izberite, kateri program riše sliko](topic:render-engines).
- **Razveljavitev v Studiu.** V CadCraft Studiu BimCraft sporoči Studiu vsak končan korak, da Studio lahko razveljavi vaš zadnji korak v katerem koli oknu, ki ste ga nazadnje uporabili. Glejte [Razveljavitev med aplikacijami](topic:undo-across-apps).
- **Dodatki v vaši datoteki.** IFC beleži, kateri dodatki so vanj pisali, in ob odprtju ponudi tiste, ki jih nimate. Glejte [Dodatki v vaši datoteki](topic:add-ons-in-your-file).

### V vsaki aplikaciji

- **Povežite svojega pomočnika AI.** Vaš lastni pomočnik AI lahko upravlja BimCraft prek povezave Studia in odgovarja na vprašanja o modelu, na primer katere sobe so pod določeno površino. Studio nima lastne AI. Glejte [Naj vaš pomočnik AI dela z modelom](topic:assistants).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja Prelom, 2 vrstici ali 1 vrstico; Prelom ostane privzet.
- **Vhodne naprave.** Nastavitve sledilne ploščice, peresa, 3D miške, krmilnika in MIDI so skupne vsem aplikacijam.
- **Težave in Live.** Okno opozoril in seje Live delujejo kot prej, z novimi preverjanji zgoraj, ki napajajo težave.
- **Jeziki.** 54 jezikov, deset novih. Drugi jeziki kot angleščina so strojni osnutki, ki jih še ni prebral izvorni govorec; teme pomoči so večinoma v angleščini.

## Popravljeno v 0.8.1

- **Postavitev traku + Brskalnik projektov.** Vstavi › Uvozi CAD, Vstavi › Slika in Upravljaj › Enote projekta so pisali „Še ni izdelano v BimCraftu“. Slika zdaj odpre orodje {{ui:Slika}}, Uvozi CAD odpre {{ui:Zgradba}} › {{ui:Iz risbe …}} (DWG, DXF, PDF ali posnetek), Enote projekta pa {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Enote}}. Premakni in Poravnaj zaženeta orodji Premakni in Poravnaj, Nivo odpre {{ui:Dodaj nivoje …}}, Faze odpre razdelek Faze prenove, Materiali pa knjižnico materialov.
- **Razdelek razredov DWG.** Prebran je bil kot napačna vrsta; popravljeno v BimCraftu in drugih aplikacijah, ki berejo DWG.
- **Jezik med delovanjem.** Studio in pakirane izdaje zdaj lahko preklopijo jezik brez ponovnega zagona. To še ni preizkušeno na vseh platformah; sporočite nam, če se jezik ne spremeni.
- **Skript Archicad bundle.** `archicad_bundle.py`, ločen prenos, zdaj najde pot Archicada, spremlja mapo do 20 sekund in poskusi znova ob paketu.

## Še ni v tej različici

- **Varnostna in projektna pomagala.** Ljudje v stavbi nimajo omejitve prehojene razdalje iz predpisa (vi jo vpišete) in niso bili ročno preverjeni na pravem tlorisu. Akustične, življenjskociklične in nevarnostne vrednosti so načrtovalne, ne preverjanje po predpisih.
- **Podnebne prihodnosti in EnergyPlus.** Ni vgrajenih podnebnih prihodnosti: za zagon poplave lahko naložite datoteko scenarija. Zagon EnergyPlus v brskalniku ni del te izdaje.
- **Postavitev traku.** Predizmera materiala ostane „Še ni izdelano“, ker BimCraft nima seznama količin materiala, in 54 drugih sivih orodij traku nima orodja BimCraft.
- **Podpisovanje in platforme.** Namestitveni programi za Windows in datoteka .dmg za macOS nimajo podpisa, zato SmartScreen prikaže {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}, na macOS pa morate z desno tipko kliknuti, nato {{ui:Odprto}}. Različica za iPad in iPhone ni bila znova zgrajena za 0.8.1.
- **Preizkusi na pravih straneh.** Nekateri starejši preizkusi brskalnika BimCraft na naši preizkusni strani še vedno ne uspejo, kot so prej tudi pred 0.8.1.

Vse ostalo je v [Kaj še ni zgrajeno](topic:not-built-yet). Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
