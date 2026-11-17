---
title: Cijevi i kanali
summary: Crtajte dionice cijevi i kanala u tlocrtu prema njihovim središnjim linijama; koljena, T-komadi, redukcije i prijelazi izrađuju se za vas, dionice pripadaju sustavima s povezanim priključcima u IFC datoteci, a prikazuju se u tlocrtima, tablicama i predmjeru.
keywords: cijev, cijevi, cjevovod, vodoinstalacija, kanal, kanali, ventilacijski kanali, hvac, mep, strojarstvo, koljeno, T-komad, redukcija, prijelaz, fiting, fitinzi, ventil, ventili, zasunski ventil, kuglasti ventil, navojni ventil, nepovratni ventil, vertikala, nagib, odvod, sanitarni, oborinski, ventilacija, hladna voda, topla voda, hlađena voda, grijanje, plin, zaštita od požara, dovod zraka, povratni zrak, odsis, sustav, sustavi, priključak, priključci, konektor, konektori, uređaj, uređaji, sanitarni uređaj, umivaonik, sudoper, WC, tuš, perilica, jedinice uređaja, uhc, dfu, dimenzioniranje odvoda, odvodna grana, glavni odvod, grana, ogranak, kolektor, protok zraka, cfm, trenje, jednako trenje, dimenzioniranje, tablica, predmjer, nbr, nbr 5648, nbr 5688, nbr 8160, PVC za lijepljenje, kanalizacija, dn
from: 85140bc5
---

## Što ćete raditi

Cijevi i kanale zgrade crtate kao što crtate zidove: kliknete uglove središnje linije dionice na visini koju postavite. BimCraft izrađuje armature, smješta svaki dio u njegov sustav i spaja ih, pa druge programe čitaju dionicu kao jedan povezani sustav.

## Crtanje cijevi

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Izgradnja}} i odaberite {{ui:Cijev}}.
2. U traci odaberite **sustav** (hladna voda, topla voda, sanitarni odvod, plin…). On postavlja uobičajeni materijal: bakar za vodu, PVC za odvode i ventilaciju, čelik za grijanje, hlađenu vodu, plin i zaštitu od požara. Promijenite **materijal**, **klasu** i **dimenziju** ako trebate. Dimenzije i stijenke dolaze iz javnih normi: čelična cijev ASME B36.10M, bakrena cijev ASTM B88, PVC ASTM D1785 i PEX ASTM F876. Brazilski projekti mogu koristiti **PVC vodovodnu cijev (NBR 5648)**, PVC za lijepljenje za hladnu vodu, i **PVC odvodnu cijev (NBR 5688)**, normalnu ili ojačanu seriju, za odvode i ventilaciju: njihove dimenzije imenuju se prema DN (DN 25, DN 100). Kad odaberete jednu od njih, odabir drugog sustava zadržava se na brazilskim cijevima (PVC odvodna cijev za sanitarni odvod nakon PVC vodovodne cijevi).
3. Postavite **Na visini**: visinu središnje linije cijevi iznad razine.
4. Kliknite mjesto gdje cijev počinje, pa svaki ugao. Dvaput kliknite ili pritisnite {{key:Enter}} na zadnjoj točki. {{key:Backspace}} vraća zadnji ugao; {{key:Esc}} odbacuje dionicu.

Cijev se hvata kao i zidovi, te za druge dionice: započnite na kraju cijevi da nastavite od nje, ili završite na liniji cijevi da odvojite granu. Nova dionica preuzima visinu cijevi za koju se hvata.

Dionica započeta ili završena na priključku opreme preuzima njezinu dimenziju i sustav i ostaje vezana za nju: pogledajte [Oprema MEP-a s priključcima](topic:mep-equipment) i [Spajanje cijevi i kanala na opremu](topic:mep-connections).

## Postavljanje vodoinstalacijskog standarda projekta

Prvi popis u traci cijevi je **vodoinstalacijski standard** modela: **US (IPC, palci)** ili **Brazil (ABNT, DN)**. Sprema se u modelu, pa svi koji otvore datoteku počinju dionice na isti način. Pod **US** nova dionica počinje u bakru (voda) ili PVC Schedule 40 (odvodi), u palcima, s nagibom prema International Plumbing Code. Pod **Brazil** hladna voda počinje kao PVC za lijepljenje DN 25, sanitarni i oborinski odvodi te ventilacija kao PVC kanalizacijska cijev DN 100 s nagibom prema NBR 8160, a topla voda u bakru. Primjenjuje se i na dionicu započetu na priključku sanitarnog uređaja ili na priključku opreme. Već nacrtane cijevi zadržavaju svoj materijal i vlastite tablice; popis materijala ostaje otvoren, pa još uvijek možete namjerno nacrtati jednu brazilsku dionicu u US modelu. Datoteka bez izbora ponaša se kao prije: nova dionica slijedi materijal koji je u uporabi.

## Crtanje kanala

1. Odaberite {{ui:Zračni kanal}}. Odaberite sustav (dovod, povrat, odsis ili vanjski zrak) i oblik: okrugao, pravokutni ili spljošteni ovalni.
2. Upišite širinu i visinu (širina okruglog kanala je njegov promjer), te **Na visini** za visinu središnje linije.
3. Za dimenzioniranje prema protoku upišite **Protok zraka** i **Trenje**, pa kliknite {{ui:Dimenzioniraj}}. Kanal se dimenzionira jednakim trenjem, metodom iz poglavlja o projektiranju kanala u ASHRAE Handbook, i zaokružuje na standardnu dimenziju, pa je trenje jednako ili manje od upisane stope. Bez upisane stope koristi se 0.08 in. vodenog stupca na 100 ft (0.8 Pa/m). Pravokutni kanal zadržava visinu koju ste upisali i dobiva širinu; BimCraft to navodi kad su mu stranice više od 4 prema 1.
4. Kliknite uglove kao kod cijevi.

## Sanitarni uređaji

{{ui:Izgradnja}} › {{ui:Postavi obitelj}} nudi pet uređaja za početak, svaki s odvodom i priključkom hladne vode: **WC školjka**, **Umivaonik**, **Kuhinjski sudoper**, **Tuš-kada** i **Korito za rublje**. Njihova prednja strana gleda vas pri postavljanju, a stražnja ide uz zid. Odvodi su na najmanjem odvodu sanitarnog uređaja prema NBR 8160 (DN 100 za WC, DN 50 za kuhinjski sudoper, DN 40 za ostale); voda je DN 20. Promijenite im dimenzije ili ih uređujte kao bilo koju obitelj: pogledajte [Obitelji i njihove dimenzije](topic:families).

Obitelj kaže koji je sanitarni uređaj pod {{ui:Sanitarni uređaj}} na kartici {{ui:Priključci}} urednika obitelji. Njezin odvod tada se broji u jedinicama sanitarnog uređaja: 6 UHC za WC, 1 za umivaonik, 3 za kuhinjski sudoper ili korito za rublje, 2 za tuš (NBR 8160), ili odvodne jedinice uređaja iz IPC Table 709.1.

## Iz priključka uređaja

Elementi postavljeni iz obitelji s priključcima (odvod i slavina umivaonika, grlo zračnog priključka: pogledajte [Uređivanje obitelji](topic:family-editor)) pokazuju svoje slobodne priključke kao točke dok je {{ui:Cijev}} ili {{ui:Zračni kanal}} uključen, a pokazivač se hvata za njih.

- **Počnite na priključku**: dionica preuzima sustav i dimenziju (cijev materijala iz trake na dimenziji priključka ili odmah iznad nje; okrugli kanal njegova promjera). Kad priključak gleda prema dolje ili prema gore, kao odvod ispod umivaonika, dionica prvo ide ravno dolje ili gore do visine u **Na visini**, pa dalje prema vašim klikovima.
- **Završite na priključku**: dionica ide dolje ili gore na njega i tu završava.

Dionica je u IFC datoteci spojena s elementom, pa drugi programi vide uređaj kao dio njegova sustava. Element postavljen kasnije s priključkom na kraju dionice također je spojen na nju. Dionica pomaknuta s priključka više nije s njim spojena.

## Fitinzi, izrađeni za vas

| Gdje | Što BimCraft izrađuje |
|---|---|
| Dionica skreće | Koljeno. Čelična cijev na dugom radijusu ASME B16.9 (1.5 × dimenzija), ostale cijevi na jednom vanjskom promjeru, okrugli kanal na 1.5 promjera, pravokutni kanal na jednoj širini (ili jednoj visini za skretanje gore ili dolje) |
| Dionica završava na liniji druge dionice | T-komad; druga dionica se tu presijeca |
| Dvije dionice spajaju se od kraja do kraja različitih dimenzija | Redukcija (cijevi) ili prijelaz (kanali) |
| Dvije dionice iste dimenzije spajaju se od kraja do kraja pod kutom | Koljeno |

Kad promijenite, pomaknete ili izbrišete dionicu, svaki fiting na toj razini ponovno se izrađuje. Ako je krak prekratak za armature na svojim krajevima, BimCraft to kaže i ništa ne mijenja: pomaknite ugao dalje.

:::note
Fitinzi i ventili su opći: izrađeni prema dimenziji cijevi ili kanala, a ne prema katalogu proizvođača. Nasadni, prešani i žlijebljeni fitinzi, tijela ventila i oprema imaju vlastite dimenzije proizvođača; provjerite ih kod dobavljača prije narudžbe.
:::

## Vertikale

Dok crtate, upišite novu visinu u **Na visini** i pritisnite {{key:Enter}}: dionica ide ravno gore ili dolje na zadnjem uglu, s koljenom na svakom kraju. Vertikala može ići gore u razinu iznad. Svaka razina prikazuje dijelove dionice koje njezin raspon pogleda obuhvaća, s **UP** ili **DN** na vertikali.

## Odvodi i njihov nagib

Sanitarni i oborinski odvodi počinju s najmanjim nagibom koji International Plumbing Code dopušta za njihovu dimenziju: 1/4 in. po stopi do 2-1/2 in., 1/8 in. po stopi od 3 do 6 in., 1/16 in. po stopi od 8 in. Brazilska PVC odvodna cijev počinje s nagibom prema NBR 8160: 2 % do DN 75, 1 % od DN 100. Upišite drugi nagib u traci ili u **Svojstvima**: `1/4"/ft`, `2 %` ili `1:50`. Dionica pada od svoje prve točke, pa crtajte odvode u smjeru kojim teku. Tlocrt prikazuje pad i strelicu. **Svojstva** upozoravaju kad je odvod ravniji od najmanjeg propisanog nagiba.

## Dimenzioniranje odvoda prema jedinicama sanitarnih uređaja

Odaberite sanitarni odvod: **Jedinice uređaja** u **Svojstvima** kažu koliko ih nosi i koju najmanju dimenziju treba. Broji se svaki sanitarni uređaj čiji je priključak odvoda na dionici, kao i svaki odvod koji u nju utječe: crtajte odvode u smjeru kojim teku, svaki završava na odvodu u koji utječe.

- Odvodi u brazilskoj PVC odvodnoj cijevi broje **UHC** i slijede NBR 8160; ostali broje **DFU** i slijede International Plumbing Code.
- **Odvod**: **Grana** se dimenzionira prema tablici norme za grane uređaja; **Glavni odvod zgrade** prema njezinoj tablici po nagibu, pa je važan njezin **Nagib**.
- Odvod nikad nije manji od odvoda sanitarnih uređaja kojima služi (WC treba DN 100, odnosno 3 in.), niti od odvoda koji u njega utječe. Prema NBR 8160 glavni odvod zgrade je najmanje DN 100.

{{ui:Dimenzioniraj odvode}} čini svaki sanitarni odvod modela koji je premalen za svoje jedinice uređaja dimenzijom koju treba, kao jedan korak koji se može poništiti. Odvod nacrtan većim nego što treba ostaje kakav jest. Kad odvod nosi više nego što najveća dimenzija njegove cijevi može pri svom nagibu, BimCraft to navodi: dajte mu strmiji nagib ili drugu cijev.

:::note
Tablice su za vodoravne odvode. Vertikale, ventilacija i oborinski odvodi ovdje se ne dimenzioniraju: provjerite ih, kao i cijeli projekt, prema normi koja vrijedi za projekt.
:::

## Ventili

1. Odaberite {{ui:Ventil}} i vrstu: zasunski, kuglasti, navojni ili nepovratni.
2. Kliknite na cijev gdje ide. Cijev se prereže oko njega i ventil se spaja na obje strane.

**Svojstva** dionice navode njezine ventile, svaki s {{ui:Ukloni}}.

Više vrsta ventila, filtar, zaklopke na kanalima, vlastite specifikacije cijevi i obitelji proizvođača: pogledajte [Specifikacije cijevi, ventili, zaklopke i obitelji proizvođača](topic:pipe-specs).

## Promjena dionice

Odaberite bilo koji dio dionice, u tlocrtu ili 3D prikazu. U **Svojstvima**:

- **Sustav**, **Materijal**, **Klasa** i **Dimenzija** (cijevi), ili **Oblik**, **Širina**, **Visina** (kanali).
- **Visina iznad razine** pomiče cijelu dionicu gore ili dolje.
- **Izolacija**: njezina debljina, zadržana za provjeru razmaka i popis otvora (za nju se ništa ne crta): pogledajte [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure).
- Čelična cijev: **Razreži na spoolove**: pogledajte [Spoolovi čeličnih cijevi i listovi spoolova](topic:pipe-spools).
- **Nagib** (cijevi).
- **Protok** s {{ui:Dimenzioniraj}}: za vodu, najmanja dimenzija koja drži vodu na 8 ft/s (2.4 m/s), odnosno 5 ft/s (1.5 m/s) za toplu vodu; na 3 m/s za brazilsku PVC vodovodnu cijev (NBR 5626). Za kanale brzina i stopa trenja kanala kako je nacrtan. Sanitarni odvodi dimenzioniraju se prema svojim jedinicama uređaja: pogledajte **Dimenzioniranje odvoda prema jedinicama sanitarnih uređaja** iznad.

Svaka promjena je jedan korak {{ui:Poništi}}. {{key:Delete}} uklanja cijelu dionicu.

## Tlocrti

- Cijevi manje od 150 mm (otprilike 6 in.) crtaju se kao jedna linija na središnjoj liniji, veće cijevi i svi kanali kao dvije linije na svojoj širini.
- Svaki sustav ima vlastitu boju; PDF tlocrta ih ispisuje crno.
- Svaka dionica označena je svojom dimenzijom i sustavom (na primjer `2" CW` ili `16×10 SA`).
- Raspon pogleda tlocrta određuje koje dionice prikazuje, a {{ui:Prikazano u ovom tlocrtu}} može izostaviti **Cijevi** ili **Kanale**: pogledajte [Prikazi, rasponi pogleda i vlastiti listovi](topic:views-and-sheets).

## Tablice i predmjer

Ploča {{ui:Specifikacije}} dodaje **Cijevi** (po sustavu, materijalu i dimenziji, s njihovim duljinama), **Kanale** (po sustavu, obliku i dimenziji, s duljinama i vanjskom površinom plašta) i **Fitinge i ventile** (po vrsti i dimenziji, prebrojano). Kliknite na redak da odaberete što popis obuhvaća; {{ui:Preuzmi CSV}} ga preuzima.

{{ui:Predmjer}} prenosi dionice u TakeoffCraft: cijev i kanal po dimenziji kao dionice nacrtane u tlocrtu (nagnuti odvodi mjere se duž nagiba), fitinzi i ventili prebrojani su tamo gdje se nalaze: pogledajte [Slanje količina modela u TakeoffCraft](topic:takeoff). Vertikale nisu u tom listu, jer ih tlocrt ne može izmjeriti; tablica Cijevi ima njihovu duljinu.

## U IFC datoteci

Svaka dionica je sklop koji drži svoje dijelove: segmente cijevi i kanala, fitinge i ventile, svaki sa svojim tipom, materijalom, bojom za svoj sustav i svojim priključcima. Dodirujući priključci su spojeni, a svaki dio pripada svom distribucijskom sustavu (datoteke IFC2X3 dobivaju isto kao segmenti protoka, fitinzi i upravljači u sustavu). Drugi programi koji čitaju IFC sustave vide jednu povezanu dionicu po sustavu. Definicija dionice spremljena je uz nju, pa je BimCraft izrađuje na isti način kad je promijenite.
