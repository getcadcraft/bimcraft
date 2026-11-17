---
title: Cevi in kanali
summary: Cevne in kanalske vode v tlorisu rišite po njihovih osrednjih črtah; kolena, T-kosi, redukcije in prehodi se naredijo samodejno, vodi pa pripadajo sistemom s povezanimi priključki v datoteki IFC ter se prikažejo v tlorisih, razpredelnicah in predizmerah.
keywords: cev, cevi, cevovod, vodovod, kanal, kanali, kanalski razvod, hvac, mep, strojništvo, koleno, T-kos, redukcija, prehod, fiting, fitingi, ventil, ventili, zasunski ventil, kroglični ventil, sedežni ventil, protipovratni ventil, dvižni vod, naklon, odtok, sanitarni, meteorni, prezračevanje, hladna voda, topla voda, ohlajena voda, ogrevanje, plin, gasilska zaščita, dovod zraka, povratni zrak, odvod zraka, sistem, sistemi, priključno mesto, priključna mesta, priključek, priključki, oprema, sanitarna oprema, umivalnik, sudomivalnik, WC, tuš, pralna kad, enote naprav, UHC, DFU, dimenzioniranje odtokov, odcep, zbiralnik, pretok zraka, cfm, trenje, enakomerno trenje, dimenzioniranje, razpredelnica, predizmere, NBR, NBR 5648, NBR 5688, NBR 8160, PVC, PVC soldável, kanalizacija, DN
from: 85140bc5
---

## Kaj boste naredili

Cevi in kanale stavbe rišete tako kot stene: kliknete vogale osrednje črte voda na višini, ki jo nastavite. BimCraft naredi fitinge, vsak del uvrsti v njegov sistem in ga poveže, tako da drugi programi vod berejo kot en povezan sistem.

## Narišite cev

1. Vklopite {{ui:Risanje}}, odprite {{ui:Zgradba}} in izberite {{ui:Cev}}.
2. V vrstici izberite **sistem** (hladna voda, topla voda, sanitarni odtok, plin ...). Ta nastavi običajen material: baker za vodo, PVC za odtoke in prezračevanje, jeklo za ogrevanje, ohlajeno vodo, plin in gasilsko zaščito. Če potrebujete, spremenite **material**, **razred** in **dimenzijo**. Dimenzije in stene prihajajo iz javnih standardov: jeklena cev ASME B36.10M, bakrena cev ASTM B88, PVC ASTM D1785 in PEX ASTM F876. Brazilski projekti lahko uporabijo **PVC vodovodno cev (NBR 5648)**, PVC z lepljenim spojem za hladno vodo, in **PVC odtočno cev (NBR 5688)**, serija normal ali ojačana, za odtoke in prezračevanje: njihove dimenzije so poimenovane z DN (DN 25, DN 100). Ko izberete eno od njih, izbira drugega sistema ostane pri brazilskih ceveh (PVC odtočna cev za sanitarni odtok, potem ko je izbrana PVC vodovodna cev).
3. Nastavite **Na višini**: višino osrednje črte cevi nad nivojem.
4. Kliknite, kjer se cev začne, nato na vsak vogal. Na zadnji točki dvakrat kliknite ali pritisnite {{key:Enter}}. {{key:Backspace}} vzame nazaj zadnji vogal; {{key:Esc}} opusti vod.

Cev se pripenja kot stene in tudi na druge vode: začnite na koncu cevi, da nadaljujete iz nje, ali končajte na črti cevi, da se odcepite. Nov vod prevzame višino cevi, na katero se pripne.

Vod, ki se začne ali konča na priključnem mestu opreme, prevzame njeno dimenzijo in sistem ter ostane pritrjen nanj: glejte [Oprema MEP s priključki](topic:mep-equipment) in [Povežite cevi in kanale z opremo](topic:mep-connections).

## Nastavite vodovodni standard projekta

Prvi seznam v vrstici za cev je **vodovodni standard** modela: **ZDA (IPC, palci)** ali **Brazilija (ABNT, DN)**. Shranjen je v modelu, zato vsak, ki odpre datoteko, začne vode na enak način. Pri **ZDA** se nov vod začne v bakru (voda) ali PVC Schedule 40 (odtoki), v palcih, z naklonom International Plumbing Code. Pri **Brazilija** se hladna voda začne kot PVC soldável DN 25, sanitarni in meteorni odtoki ter prezračevanje kot PVC esgoto DN 100 z naklonom NBR 8160, topla voda pa v bakru. Velja tudi za vod, začet na priključku naprave ali na priključnem mestu opreme. Že narisane cevi obdržijo svoj material in lastne tabele; seznam materialov ostane odprt, zato lahko v modelu ZDA namenoma narišete en brazilski vod. Datoteka brez izbire se obnaša kot prej: nov vod sledi materialu, ki je v uporabi.

## Narišite kanal

1. Izberite {{ui:Zračni kanal}}. Izberite sistem (dovod, povratni zrak, odvod ali zunanji zrak) in obliko: okroglo, pravokotno ali ploščato oválno.
2. Vpišite širino in višino (pri okroglem kanalu je širina njegov premer) ter **Na višini** za višino osrednje črte.
3. Za dimenzioniranje glede na pretok zraka vpišite **Pretok zraka** in stopnjo **Trenje** ter kliknite {{ui:Dimenzioniraj}}. Kanal se dimenzionira z enakomernim trenjem, metodo iz poglavja o načrtovanju kanalov v ASHRAE Handbook, in zaokroži na zalogo dimenzijo, tako da je trenje enako ali manjše od vpisane stopnje. Brez vpisane stopnje se uporabi 0.08 in. vodnega stolpca na 100 ft (0.8 Pa/m). Pravokotni kanal ohrani višino, ki ste jo vpisali, in dobi širino; BimCraft to pove, kadar sta stranici več kot 4 proti 1.
4. Kliknite vogale kot pri cevi.

## Sanitarne naprave

{{ui:Zgradba}} › {{ui:Vstavi družino}} ponuja pet naprav za začetek, vsako z odtokom in priključkom za hladno vodo: **WC školjko**, **Umivalnik**, **Kuhinjski sudomivalnik**, **Tuš kad** in **Pralno kad**. Njihova sprednja stran je obrnjena proti vam, ko jih postavljate, zadnja stran pa je ob steni. Njihovi odtoki so pri najmanjšem odtoku naprave po NBR 8160 (DN 100 za WC, DN 50 za kuhinjski sudomivalnik, DN 40 za druge); voda je DN 20. Spremenite njihove dimenzije ali jih uredite kot katerokoli družino: glejte [Družine in njihove dimenzije](topic:families).

Družina pove, katera naprava je, pod {{ui:Sanitarna oprema}} na zavihku {{ui:Priključki}} urejevalnika družin. Njen odtok se nato šteje v enotah naprav: 6 UHC za WC, 1 za umivalnik, 3 za kuhinjski sudomivalnik ali pralno kad, 2 za tuš (NBR 8160), ali odtočne enote naprav iz IPC Table 709.1.

## Iz priključka naprave

Elementi, postavljeni iz družine s priključki (odtok in pipa umivalnika, vrat zračnega priključka: glejte [Uredite družino](topic:family-editor)), prikazujejo proste priključke kot točke, medtem ko sta {{ui:Cev}} ali {{ui:Zračni kanal}} vklopljena, in kazalec se nanje pripenja.

- **Začnite na priključku**: vod prevzame sistem in dimenzijo (cev materiala iz vrstice pri dimenziji priključka ali tik nad njo; okrogel kanal njegovega premera). Kadar priključek kaže navzdol ali navzgor, kot odtok pod umivalnikom, vod najprej gre naravnost navzdol ali navzgor do višine v **Na višini**, nato dalje po vaših klikih.
- **Končajte na priključku**: vod gre navzdol ali navzgor na priključek in se tam konča.

Vod je v datoteki IFC povezan z elementom, zato drugi programi vidijo napravo kot del njenega sistema. Element, postavljen pozneje s priključkom na koncu voda, je nanj prav tako povezan. Vod, premaknjen stran od priključka, ni več nanj povezan.

## Fitingi, ki jih naredi BimCraft

| Kje | Kaj naredi BimCraft |
|---|---|
| Vod se zavije | Koleno. Jeklena cev po dolgem polmeru ASME B16.9 (1.5 × dimenzija), druga cev pri enem zunanjem premeru, okrogel kanal pri 1.5 premera, pravokotni kanal pri eni širini (ali eni višini za zavoj navzgor ali navzdol) |
| Vod konča na črti drugega voda | T-kos; drugi vod se tam prereže |
| Dva voda se stakneta čelo ob čelu pri različnih dimenzijah | Redukcija (cevi) ali prehod (kanali) |
| Dva voda iste dimenzije se stakneta čelo ob čelu pod kotom | Koleno |

Ko spremenite, premaknete ali izbrišete vod, se vsak fiting na tej etaži naredi znova. Če je krak prekratek za fitinge na svojih koncih, BimCraft to pove in ničesar ne spremeni: premaknite vogal dlje.

:::note
Fitingi in ventili so splošni: narisani so iz dimenzije cevi ali kanala, ne iz kataloga proizvajalca. Nasadni, stisnjeni in žlebasti fitingi, telesa ventilov in oprema imajo dimenzije proizvajalcev; preverite jih pri dobavitelju, preden naročite.
:::

## Navpični vodi

Med risanjem vpišite novo višino v **Na višini** in pritisnite {{key:Enter}}: vod gre naravnost navzgor ali navzdol na zadnjem vogalu, z kolenom na vsakem koncu. Navpični vod lahko gre navzgor v etažo nad njim. Vsaka etaža prikazuje dele voda, ki jih doseže njen obseg pogleda, z **UP** ali **DN** pri navpičnem vodu.

## Odtoki in njihov naklon

Sanitarni in meteorni odtoki se začnejo pri najmanjšem naklonu, ki ga dovoljuje International Plumbing Code za njihovo dimenzijo: 1/4 in. na ft do 2-1/2 in., 1/8 in. na ft od 3 do 6 in., 1/16 in. na ft od 8 in. Brazilska PVC odtočna cev se začne pri naklonu NBR 8160: 2 % do DN 75, 1 % od DN 100. Drug naklon vpišite v vrstici ali v Lastnostih: `1/4"/ft`, `2 %` ali `1:50`. Vod pada od svoje prve točke, zato odtoke rišite v smeri, v kateri tečejo. Tloris prikazuje padec in puščico. Lastnosti opozorijo, kadar je odtok bolj raven od najmanjšega naklona predpisa.

## Dimenzioniranje odtokov po enotah naprav

Izberite sanitarni odtok: **Enote naprav** v Lastnostih pove, koliko jih nosi, in najmanjšo dimenzijo, ki jo potrebuje. Šteje se vsaka sanitarna naprava, katere priključek za odtok je na vodu, in tudi vsak odtok, ki se steka vanj: odtoke rišite v smeri, v kateri tečejo, vsak se konča na odtoku, v katerega se steka.

- Odtoki iz brazilske PVC odtočne cevi štejejo **UHC** in sledijo NBR 8160; drugi štejejo **DFU** in sledijo International Plumbing Code.
- **Odtok**: **Odcep** se dimenzionira po tabeli predpisa za odcepe naprav; **Glavni odtok stavbe** po svoji tabeli glede na naklon, zato je pomemben njegov **Naklon**.
- Odtok ni nikoli manjši od odtokov naprav, ki jih oskrbuje (WC potrebuje DN 100 ali 3 in.), niti od odtoka, ki se steka vanj. Po NBR 8160 je glavni odtok stavbe vsaj DN 100.

{{ui:Dimenzioniraj odtoke}} naredi vsak sanitarni odtok v modelu, ki je premajhen za svoje enote naprav, v dimenzijo, ki jo potrebuje, kot en korak, ki ga lahko razveljavite. Odtok, narisan večji od potrebnega, ostane tak, kot je. Kadar odtok nosi več, kot največja dimenzija njegove cevi zmore pri svojem naklonu, BimCraft to pove: dajte mu strmejši naklon ali drugo cev.

:::note
Tabele veljajo za vodoravne odtoke. Stoki, prezračevanja in meteorni odtoki tukaj niso dimenzionirani: preverite jih in celotno zasnovo glede na predpis, ki velja za projekt.
:::

## Ventili

1. Izberite {{ui:Ventil}} in vrsto: zasunski, kroglični, sedežni ali protipovratni.
2. Kliknite na cev, kjer naj bo. Cev se prereže okoli njega, ventil pa se priključi na obe strani.

Lastnosti voda navajajo njegove ventile, vsakega z {{ui:Odstrani}}.

Več vrst ventilov, filter, zračne lopute na kanalih, lastne specifikacije cevi in družine proizvajalcev: glejte [Specifikacije cevi, ventili, zračne lopute in družine proizvajalcev](topic:pipe-specs).

## Spremenite vod

Izberite kateri koli del voda v tlorisu ali 3D pogledu. V Lastnostih:

- **Sistem**, **Material**, **Razred** in **Dimenzija** (cevi) ali **Oblika**, **Širina**, **Višina** (kanali).
- **Višina nad nivojem** premakne celoten vod navzgor ali navzdol.
- **Izolacija**: njena debelina se ohrani za preverjanje odmikov in seznam odprtin (zanjo se ne riše nič): glejte [Preverite cevi in kanale glede na konstrukcijo](topic:mep-against-structure).
- Jeklena cev: **Razreži na odseke**: glejte [Jekleni cevni odseki in listi odsekov](topic:pipe-spools).
- **Naklon** (cevi).
- **Pretok** z {{ui:Dimenzioniraj}}: za vodo najmanjša dimenzija, ki drži vodo pri 8 ft/s (2.4 m/s) ali 5 ft/s (1.5 m/s) za toplo vodo; pri 3 m/s za brazilsko PVC vodovodno cev (NBR 5626). Za kanale hitrost in stopnjo trenja kanala, kot je narisan. Sanitarne odtoke se namesto tega dimenzionira po enotah naprav: glejte zgoraj **Dimenzioniranje odtokov po enotah naprav**.

Vsaka sprememba je en korak {{ui:Razveljavi}}. {{key:Delete}} odstrani celoten vod.

## Tlorisi

- Cevi, manjše od 150 mm (približno 6 in.), so narisane kot ena črta na njihovi osrednji črti, večje cevi in vsi kanali pa kot dve črti pri svoji širini.
- Vsak sistem ima svojo barvo; PDF tlorisa jih natisne v črni barvi.
- Vsak vod je označen z dimenzijo in sistemom (na primer `2" CW` ali `16×10 SA`).
- Obseg pogleda tlorisa določa, katere vode prikazuje, {{ui:Prikazano v tem tlorisu}} pa lahko izpusti **Cevi** ali **Kanale**: glejte [Pogledi, obsegi pogledov in vaši lastni listi](topic:views-and-sheets).

## Razpredelnice in predizmere

Plošča {{ui:Razpredelnice}} doda **Cevi** (po sistemu, materialu in dimenziji, z njihovimi dolžinami), **Kanale** (po sistemu, obliki in dimenziji, z dolžinami in zunanjo površino) ter **Fitingi in ventili** (po vrsti in dimenziji, prešteto). Kliknite vrstico, da izberete, kaj prikazuje; {{ui:Prenesi CSV}} jo prenese.

{{ui:Predizmere}} prenese vode v TakeoffCraft: cevi in kanale po dimenziji kot vode, narisane v tlorisu (odtoki z naklonom so izmerjeni vzdolž naklona), fitinge in ventile pa prešteto tam, kjer so: glejte [Pošljite količine modela v TakeoffCraft](topic:takeoff). Navpični vodi so iz tega lista izpuščeni, ker jih tloris ne more izmeriti; razpredelnica Cevi ima njihovo dolžino.

## V datoteki IFC

Vsak vod je sklop, ki vsebuje svoje dele: odseke cevi in kanala, fitinge in ventile, vsakega z njegovim tipom, materialom, barvo za svoj sistem in priključnimi mesti. Dotikajoča se priključna mesta so povezana, vsak del pa pripada svojemu distribucijskemu sistemu (datoteke IFC2X3 dobijo enako kot pretočne odseke, fitinge in krmilnike v sistemu). Drugi programi, ki berejo sisteme IFC, vidijo en povezan vod na sistem. Definicija voda je shranjena z njim, zato ga BimCraft ob spremembi naredi znova na enak način.
