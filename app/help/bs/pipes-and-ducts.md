---
title: Cijevi i kanali
summary: Crtajte dionice cijevi i kanala na planu po njihovim središnjim linijama; koljena, T-komadi, redukcije i prelazi se prave za vas, dionice pripadaju sistemima s povezanim priključnim tačkama u IFC datoteci, i prikazuju se u planovima, specifikacijama i predmjeru.
keywords: cijev, cijevi, cjevovod, vodoinstalacije, kanal, kanali, kanalska mreža, hvac, mep, mehanika, koljeno, T-komad, redukcija, prelaz, fiting, fitinzi, ventil, ventili, zasunski ventil, kuglasti ventil, globe ventil, nepovratni ventil, vertikala, nagib, odvod, kanalizacija, oborinski, odzračnik, hladna voda, topla voda, rashladna voda, grijanje, plin, protivpožarna zaštita, ulazni zrak, povratni zrak, izduvni zrak, sistem, sistemi, priključna tačka, priključne tačke, priključak, priključci, uređaj, uređaji, sanitarni uređaj, umivaonik, sudoper, WC, kada, tuš, kada za veš, jedinice uređaja, uhc, dfu, dimenzioniranje odvoda, proračun odvoda, glavni odvod, ogranak, sabirni odvod, protok zraka, cfm, trenje, jednako trenje, dimenzioniranje, specifikacija, predmjer, nbr, nbr 5648, nbr 5688, nbr 8160, PVC lijepljivi, dn
from: 85140bc5
---

## Šta ćete raditi

Crtajte cijevi i kanale zgrade kao što crtate zidove: kliknite uglove središnje linije dionice na visini koju postavite. BimCraft pravi fitinge, stavlja svaki dio u njegov sistem i povezuje ih, pa drugi programi čitaju dionicu kao jedan povezani sistem.

## Crtanje cijevi

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Verzija}} i izaberite {{ui:Cijev}}.
2. Na traci odaberite **sistem** (hladna voda, topla voda, sanitarni odvod, plin…). On postavlja uobičajeni materijal: bakar za vodu, PVC za odvode i odzračnike, čelik za grijanje, rashladnu vodu, plin i protivpožarnu zaštitu. Promijenite **materijal**, **klasu** i **dimenziju** ako treba. Dimenzije i debljine stijenki dolaze iz javnih standarda: čelična cijev ASME B36.10M, bakarna cijev ASTM B88, PVC ASTM D1785 i PEX ASTM F876. Brazilski projekti mogu koristiti **PVC vodovodnu cijev (NBR 5648)**, PVC lijepljivu cijev za hladnu vodu, i **PVC kanalizacijsku cijev (NBR 5688)**, normalna ili ojačana serija, za odvode i odzračnike: dimenzije su im imenovane prema DN (DN 25, DN 100). Kad jednu od njih izaberete, izbor drugog sistema ostaje na brazilskim cijevima (PVC kanalizacijska cijev za sanitarni odvod nakon PVC vodovodne cijevi).
3. Postavite **Na**: visinu središnje linije cijevi iznad nivoa.
4. Kliknite gdje cijev počinje, zatim svaki ugao. Dvaput kliknite, ili pritisnite {{key:Enter}}, na posljednjoj tački. {{key:Backspace}} poništava posljednji ugao; {{key:Esc}} odbacuje dionicu.

Cijev se privlači kao zidovi, i na druge dionice: započnite na kraju cijevi da nastavite od nje, ili završite na liniji cijevi da odvojite ogranak. Nova dionica preuzima visinu cijevi na koju se privlači.

Dionica započeta ili završena na priključnoj tački opreme preuzima njenu dimenziju i sistem i ostaje vezana za nju: pogledajte [MEP oprema s priključnim tačkama](topic:mep-equipment) i [Povezivanje cijevi i kanala s opremom](topic:mep-connections).

## Postavljanje standarda vodoinstalacija projekta

Prva lista na traci za cijevi je **standard vodoinstalacija** modela: **SAD (IPC, inči)** ili **Brazil (ABNT, DN)**. Sprema se u model, pa svi koji otvore datoteku počinju dionice na isti način. Pod **SAD**, nova dionica počinje u bakru (voda) ili PVC Schedule 40 (odvodi), u inčima, s nagibom Međunarodnog vodoinstalaterskog kodeksa. Pod **Brazil**, hladna voda počinje kao PVC lijepljivi DN 25, sanitarni i oborinski odvodi te odzračnici kao PVC kanalizacijski DN 100 s nagibom NBR 8160, a topla voda u bakru. Važi i za dionicu započetu na priključku uređaja ili na priključnoj tački opreme. Cijevi koje su već nacrtane zadržavaju svoj materijal i vlastite tabele; lista materijala ostaje otvorena, pa i dalje možete namjerno nacrtati jednu brazilsku dionicu u modelu za SAD. Datoteka bez izbora ponaša se kao ranije: nova dionica prati materijal koji je u upotrebi.

## Crtanje kanala

1. Izaberite {{ui:Zračni kanal}}. Izaberite sistem (dovod, povrat, izduh ili vanjski zrak) i oblik: okrugao, pravougaoni ili ravni ovalni.
2. Upišite širinu i visinu (širina okruglog kanala je njegov prečnik), i **Na** za visinu središnje linije.
3. Da ga dimenzionišete prema protoku zraka, upišite **Protok zraka** i stopu **Trenje** i kliknite {{ui:Odredi dimenziju}}. Kanal se dimenzioniše metodom jednakog trenja, iz poglavlja o projektovanju kanala u ASHRAE Handbook, i zaokružuje na najbližu dostupnu dimenziju, tako da trenje bude jednako ili manje od stope koju ste upisali. Bez upisane stope koristi se 0.08 in. vodenog stupca na 100 ft (0.8 Pa/m). Pravougaoni kanal zadržava visinu koju ste upisali i dobija širinu; BimCraft to navodi kad su mu strane veće od 4 prema 1.
4. Kliknite uglove kao kod cijevi.

## Sanitarni uređaji

{{ui:Verzija}} › {{ui:Postavi porodicu}} nudi pet uređaja za početak, svaki s odvodom i priključkom hladne vode: **WC školjka**, **Umivaonik**, **Kuhinjski sudoper**, **Tuš kada** i **Kada za veš**. Njihova prednja strana gleda vas dok ih postavljate, a zadnja naslanja na zid. Njihovi odvodi su na najmanjem odvodu uređaja prema NBR 8160 (DN 100 za WC, DN 50 za kuhinjski sudoper, DN 40 za ostale); voda je DN 20. Promijenite im dimenzije ili ih uredite, kao svaku familiju: pogledajte [Familije i njihove dimenzije](topic:families).

Familija kaže koji je uređaj pod {{ui:Sanitarni uređaj}} na kartici {{ui:Priključci}} uređivača familija. Njen odvod se tada broji u jedinicama uređaja: 6 UHC za WC, 1 za umivaonik, 3 za kuhinjski sudoper ili kadu za veš, 2 za tuš (NBR 8160), ili odvodne jedinice uređaja iz IPC tabele 709.1.

## Iz priključka uređaja

Elementi postavljeni iz familije s priključcima (odvod i slavina umivaonika, grlo zračnog ventila: pogledajte [Uređivanje familije](topic:family-editor)) prikazuju svoje slobodne priključke kao tačke dok je {{ui:Cijev}} ili {{ui:Zračni kanal}} uključen, a pokazivač se privlači na njih.

- **Početak na priključku**: dionica preuzima svoj sistem i dimenziju (cijev materijala s trake, na priključku ili odmah iznad njegove dimenzije; okrugli kanal njegovog prečnika). Kad priključak gleda dolje ili gore, kao odvod ispod umivaonika, dionica prvo ide ravno dolje ili gore do visine u **Na**, zatim dalje prema vašim klikovima.
- **Kraj na priključku**: dionica ide dolje ili gore na njega i tu završava.

Dionica je povezana s elementom u IFC datoteci, pa drugi programi vide uređaj kao dio njegovog sistema. Element postavljen kasnije s priključkom na kraju dionice također je povezan s njom. Dionica pomjerena s priključka više nije povezana s njim.

## Fitinzi koje za vas pravimo

| Gdje | Šta BimCraft pravi |
|---|---|
| Dionica skreće | Koljeno. Čelična cijev u dugom radijusu ASME B16.9 (1.5 × dimenzija), ostale cijevi na jedan vanjski prečnik, okrugli kanal na 1.5 prečnika, pravougaoni kanal na jednu širinu (ili jednu visinu za skretanje gore ili dolje) |
| Dionica završava na liniji druge dionice | T-komad; druga dionica se tu presijeca |
| Dvije dionice se spajaju kraj na kraj, različitih dimenzija | Redukcija (cijevi) ili prelaz (kanali) |
| Dvije dionice iste dimenzije spajaju se kraj na kraj pod uglom | Koljeno |

Kad promijenite, pomjerite ili obrišete dionicu, svaki fiting na tom nivou se ponovo pravi. Ako je krak prekratak za fitinge na svojim krajevima, BimCraft to navodi i ništa ne mijenja: pomjerite ugao dalje.

:::note
Fitinzi i ventili su opšti: izvedeni iz dimenzije cijevi ili kanala, a ne iz kataloga proizvođača. Fitinzi za spajanje na utičnicu, presovani i žlijebljeni fitinzi, tijela ventila i oprema imaju vlastite dimenzije proizvođača; provjerite ih s dobavljačem prije narudžbe.
:::

## Vertikale

Dok crtate, upišite novu visinu u **Na** i pritisnite {{key:Enter}}: dionica ide ravno gore ili dolje na posljednjem uglu, s koljenom na svakom kraju. Vertikala može ići gore, u nivo iznad. Svaki nivo prikazuje dijelove dionice koje dosegne njegov raspon prikaza, s **UP** ili **DN** na vertikali.

## Odvodi i njihov nagib

Sanitarni i oborinski odvodi počinju s najmanjim nagibom koji Međunarodni vodoinstalaterski kodeks dozvoljava za njihovu dimenziju: 1/4 in. po stopi do 2-1/2 in., 1/8 in. po stopi od 3 do 6 in., 1/16 in. po stopi od 8 in. Brazilski PVC kanalizacijski odvod počinje s nagibom NBR 8160: 2 % do DN 75, 1 % od DN 100. Upišite drugi nagib na traci ili u Svojstvima: `1/4"/ft`, `2 %` ili `1:50`. Dionica pada od svoje prve tačke, pa crtajte odvode u smjeru u kojem teku. Plan prikazuje pad i strelicu. Svojstva upozoravaju kad je odvod ravniji od minimuma propisa.

## Dimenzionisanje odvoda prema jedinicama uređaja

Izaberite sanitarni odvod: **Jedinice uređaja** u Svojstvima kaže koliko nosi i najmanju dimenziju koja mu treba. Svaki sanitarni uređaj čiji je priključak odvoda na dionici se broji, kao i svaki odvod koji u nju ulazi: crtajte odvode u smjeru u kojem teku, svaki završava na odvodu u koji teče.

- Odvodi od brazilske PVC kanalizacijske cijevi broje se u **UHC** i prate NBR 8160; ostali se broje u **DFU** i prate Međunarodni vodoinstalaterski kodeks.
- **Odvod**: **Ogranak** se dimenzioniše iz tabele kodeksa za ogranke uređaja; **Glavni odvod** iz svoje tabele prema nagibu, pa je njegov **Nagib** važan.
- Odvod nikad nije manji od odvoda uređaja koje služi (WC treba DN 100, ili 3 in.), niti od odvoda koji u njega ulazi. Pod NBR 8160 glavni odvod je najmanje DN 100.

{{ui:Dimenzioniši odvode}} čini da svaki sanitarni odvod u modelu koji je premali za svoje jedinice uređaja dobije dimenziju koju mu treba, kao jedan korak koji možete poništiti. Odvod nacrtan većim nego što treba ostaje takav. Kad odvod nosi više nego što najveća dimenzija njegove cijevi može pri svom nagibu, BimCraft to navodi: dajte mu strmiji nagib ili drugu cijev.

:::note
Tabele su za horizontalne odvode. Vertikale, odzračnici i oborinski odvodi ovdje nisu dimenzionisani: provjerite ih, kao i cijelu instalaciju, prema propisu koji važi za projekt.
:::

## Ventili

1. Izaberite {{ui:Ventil}} i vrstu: zasunski, kuglasti, globe ili nepovratni.
2. Kliknite na cijev gdje ide. Cijev se presijeca oko njega i ventil je povezan s obje strane.

Svojstva dionice navode njene ventile, svaki uz {{ui:Ukloni}}.

Više vrsta ventila, filter, zaklopke na kanalima, vlastite specifikacije cijevi i familije proizvođača: pogledajte [Specifikacije cijevi, ventili, zaklopke i familije proizvođača](topic:pipe-specs).

## Promjena dionice

Izaberite bilo koji dio dionice, u planu ili 3D prikazu. U Svojstvima:

- **Sistem**, **Materijal**, **Klasa** i **Dimenzija** (cijevi), ili **Oblik**, **Širina**, **Visina** (kanali).
- **Visina iznad nivoa** pomjera cijelu dionicu gore ili dolje.
- **Izolacija**: njena debljina, zadržana za provjeru razmaka i listu otvora (ništa se za nju ne crta): pogledajte [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure).
- Čelična cijev: **Razreži na spulove**: pogledajte [Čelični spulovi cijevi i listovi spulova](topic:pipe-spools).
- **Nagib** (cijevi).
- **Protok** uz {{ui:Odredi dimenziju}}: za vodu, najmanja dimenzija koja drži vodu na 8 ft/s (2.4 m/s), ili 5 ft/s (1.5 m/s) za toplu vodu; na 3 m/s za brazilsku PVC vodovodnu cijev (NBR 5626). Za kanale, brzina i stopa trenja kanala kako je nacrtan. Sanitarni odvodi se dimenzionišu prema svojim jedinicama uređaja: pogledajte dolje **Dimenzioniranje odvoda prema jedinicama uređaja**.

Svaka promjena je jedan korak {{ui:Poništi}}. {{key:Delete}} uklanja cijelu dionicu.

## Planovi

- Cijevi manje od 150 mm (oko 6 in.) crtaju se kao jedna linija na svojoj središnjoj liniji; veće cijevi i svi kanali kao dvije linije na svojoj širini.
- Svaki sistem ima vlastitu boju; PDF plana ih štampa u crnoj.
- Svaka dionica je označena svojom dimenzijom i sistemom (na primjer `2" CW` ili `16×10 SA`).
- Raspon prikaza plana određuje koje dionice prikazuje, a {{ui:Prikazano u ovoj osnovi}} može izostaviti **Cijevi** ili **Kanale**: pogledajte [Prikazi, rasponi prikaza i vlastiti listovi](topic:views-and-sheets).

## Specifikacije i predmjer

Panel {{ui:Specifikacije}} dodaje **Cijevi** (po sistemu, materijalu i dimenziji, s dužinama), **Kanale** (po sistemu, obliku i dimenziji, s dužinama i vanjskom površinom) i **Fitinzi i ventili** (po vrsti i dimenziji, prebrojano). Kliknite red da odaberete šta on navodi; {{ui:Preuzmi CSV}} ga preuzima.

{{ui:Predmjer}} prenosi dionice u TakeoffCraft: cijevi i kanali po dimenziji kao dionice nacrtane na planu (odvodi s nagibom mjere se duž nagiba), fitinzi i ventili prebrojani tamo gdje se nalaze: pogledajte [Pošaljite količine modela u TakeoffCraft](topic:takeoff). Vertikale su izostavljene iz tog lista, jer ih plan ne može izmjeriti; specifikacija Cijevi ima njihovu dužinu.

## U IFC datoteci

Svaka dionica je sklop koji sadrži svoje dijelove: segmente cijevi i kanala, fitinge i ventile, svaki sa svojim tipom, materijalom, bojom za svoj sistem i svojim priključnim tačkama. Dodirujuće priključne tačke su povezane, a svaki dio pripada svom distributivnom sistemu (IFC2X3 datoteke dobijaju isto kao segmente toka, fitinge i kontrolere u sistemu). Drugi programi koji čitaju IFC sisteme vide jednu povezanu dionicu po sistemu. Definicija dionice ostaje uz nju, pa je BimCraft ponovo pravi na isti način kad je promijenite.
