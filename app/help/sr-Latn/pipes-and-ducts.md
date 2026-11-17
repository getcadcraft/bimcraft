---
title: Cevi i kanali
summary: Crtajte deonice cevi i kanala na planu po njihovim središnjim linijama; kolena, T-komadi, redukcije i prelazi prave se za vas, deonice pripadaju sistemima s povezanim priključcima u IFC datoteci, i prikazuju se u planovima, specifikacijama i predmeru.
keywords: cev, cevi, cevovodi, vodovod, kanal, kanali, kanalska mreža, hvac, mep, mehanički, koleno, T-komad, redukcija, prelaz, fiting, fitinzi, ventil, ventili, zasunski ventil, kuglasti ventil, sedežni ventil, nepovratni ventil, uspon, nagib, odvod, kanalizacija, atmosferska, hladna voda, topla voda, rashladna voda, grejanje, gas, protivpožarna zaštita, ubacni vazduh, povratni vazduh, izduvni vazduh, sistem, sistemi, priključak, priključci, armatura, sanitarna armatura, umivaonik, sudopera, WC šolja, lavabo, kuhinjska sudopera, tuš-kada, sudopera za veš, jedinice opterećenja, UHC, DFU, dimenzionisanje odvoda, glavni odvod, ogranak, glavni vod, protok vazduha, cfm, trenje, jednako trenje, dimenzionisanje, specifikacija, predmer, NBR 5648, NBR 5688, NBR 8160, PVC za lepljenje, DN
from: 85140bc5
---

## Šta ćete uraditi

Crtajte cevi i kanale zgrade kao što crtate zidove: kliknite uglove središnje linije deonice na visini koju postavite. BimCraft pravi fitinge, stavlja svaki deo u njegov sistem i povezuje ih, tako da drugi programi čitaju deonicu kao jedan povezan sistem.

## Nacrtajte cev

1. Uključite {{ui:Draw}}, otvorite {{ui:Build}} i izaberite {{ui:Pipe}}.
2. U traci izaberite **sistem** (hladna voda, topla voda, sanitarni odvod, gas…). On postavlja uobičajeni materijal: bakar za vodu, PVC za odvode i ventilacione vodove, čelik za grejanje, rashladnu vodu, gas i protivpožarnu zaštitu. Promenite **materijal**, **klasu** i **dimenziju** ako je potrebno. Dimenzije i zidovi dolaze iz javnih standarda: čelična cev ASME B36.10M, bakarna cevčica ASTM B88, PVC ASTM D1785 i PEX ASTM F876. Za brazilske projekte mogu se koristiti **PVC vodovodna cev (NBR 5648)**, PVC za lepljenje za hladnu vodu, i **PVC cev za odvod (NBR 5688)**, serija normalna ili ojačana, za odvode i ventilaciju: njihove dimenzije imenovane su po DN (DN 25, DN 100). Kada izaberete jednu od njih, izbor drugog sistema ostaje na brazilskim cevima (PVC cev za odvod za sanitarni odvod posle PVC vodovodne cevi).
3. Postavite **Na visini**: visinu središnje linije cevi iznad nivoa.
4. Kliknite gde cev počinje, pa svaki ugao. Dvaput kliknite ili pritisnite {{key:Enter}} na poslednjoj tački. {{key:Backspace}} vraća poslednji ugao; {{key:Esc}} odbacuje deonicu.

Cev se privlači kao zidovi, i za druge deonice: počnite na kraju cevi da nastavite od nje, ili završite na liniji cevi da se odvojite od nje. Nova deonica preuzima visinu cevi za koju se privlači.

Deonica koja počinje ili se završava na priključnoj tački opreme preuzima njenu dimenziju i sistem i ostaje vezana za nju: pogledajte [Oprema za MEP s priključnim tačkama](topic:mep-equipment) i [Povežite cevi i kanale s opremom](topic:mep-connections).

## Podesite standard vodovoda projekta

Prva lista u traci cevi je **standard vodovoda** modela: **US (IPC, inči)** ili **Brazil (ABNT, DN)**. Čuva se u modelu, pa svako ko otvori datoteku počinje deonice na isti način. Pod **US**, nova deonica počinje u bakru (voda) ili u PVC Schedule 40 (odvodi), u inčima, s nagibom International Plumbing Code. Pod **Brazil**, hladna voda počinje kao PVC za lepljenje DN 25, sanitarni i kišni odvodi i ventilacija kao PVC cev za odvod DN 100 s nagibom iz NBR 8160, a topla voda u bakru. Važi i za deonicu započetu na priključku armature ili na priključku opreme. Već nacrtane cevi zadržavaju svoj materijal i svoje tabele; lista materijala ostaje otvorena, pa i dalje možete namerno nacrtati jednu brazilsku deonicu u US modelu. Datoteka bez izbora ponaša se kao ranije: nova deonica prati materijal koji je u upotrebi.

## Nacrtajte kanal

1. Izaberite {{ui:Duct}}. Izaberite sistem (ubacni, povratni, izduvni ili spoljni vazduh) i oblik: okrugao, pravougaoni ili spljošten ovalni.
2. Unesite širinu i visinu (širina okruglog kanala je njegov prečnik), i **Na visini** za visinu središnje linije.
3. Da biste ga dimenzionisali prema protoku vazduha, unesite **Airflow** i stopu **Friction** i kliknite {{ui:Size it}}. Kanal se dimenzioniše po jednakom trenju, metodom iz poglavlja o kanalskim sistemima u ASHRAE Handbook, i zaokružuje na najbližu dimenziju iz zaliha, tako da trenje ispadne jednako ili manje od stope koju ste uneli. Bez unete stope koristi 0.08 in. vodenog stuba na 100 ft (0.8 Pa/m). Pravougaoni kanal zadržava visinu koju ste uneli i dobija širinu; BimCraft to kaže kada su mu stranice odnos veći od 4 prema 1.
4. Kliknite uglove kao za cev.

## Sanitarna armatura

{{ui:Build}} › {{ui:Place family}} nudi pet armatura za početak, svaka s odvodom i priključkom hladne vode: **WC šolja**, **Lavabo**, **Kuhinjska sudopera**, **Tuš-kada** i **Sudopera za veš**. Njihova prednja strana gleda vas dok ih postavljate, a zadnja naslanja na zid. Njihovi odvodi su na najmanjoj dimenziji odvoda armature iz NBR 8160 (DN 100 za WC šolju, DN 50 za kuhinjsku sudoperu, DN 40 za ostale); voda je DN 20. Promenite njihove dimenzije ili ih uređujte kao i svaku porodicu: pogledajte [Porodice i njihove dimenzije](topic:families).

Porodica kaže koja je armatura pod {{ui:Plumbing fixture}} na kartici {{ui:Connectors}} uređivača porodice. Njen odvod se tada broji u jedinicama opterećenja: 6 UHC za WC šolju, 1 za lavabo, 3 za kuhinjsku sudoperu ili sudoperu za veš, 2 za tuš-kadu (NBR 8160), ili jedinice odvoda iz IPC Table 709.1.

## Od priključka armature

Elementi postavljeni iz porodice s priključcima (odvod i slavina umivaonika, grlo vazdušnog terminala: pogledajte [Uređivanje porodice](topic:family-editor)) pokazuju svoje slobodne priključke kao tačke dok je {{ui:Pipe}} ili {{ui:Duct}} uključen, a pokazivač se privlači za njih.

- **Počnite na priključku**: deonica preuzima sistem i dimenziju (cev materijala iz trake na dimenziji priključka ili odmah iznad nje; okrugli kanal njegovog prečnika). Kada priključak gleda nadole ili nagore, kao odvod ispod umivaonika, deonica prvo ide pravo nadole ili nagore do visine u **Na visini**, pa dalje prema vašim klikovima.
- **Završite na priključku**: deonica ide nadole ili nagore na njega i tu se završava.

Deonica je povezana s elementom u IFC datoteci, pa drugi programi vide armaturu kao deo njenog sistema. Element postavljen kasnije s priključkom na kraju deonice takođe se povezuje s njom. Deonica premeštena s priključka više nije povezana s njim.

## Fitinzi koje pravimo za vas

| Gde | Šta BimCraft pravi |
|---|---|
| Deonica skreće | Koleno. Čelična cev po dugom radijusu ASME B16.9 (1.5 × dimenzija), druga cev na jedan spoljašnji prečnik, okrugli kanal na 1.5 prečnika, pravougaoni kanal na jednu širinu (ili jednu visinu za skretanje nagore ili nadole) |
| Deonica se završava na liniji druge deonice | T-komad; druga deonica se tu deli |
| Dve deonice se spajaju kraj na kraj različitih dimenzija | Redukcija (cevi) ili prelaz (kanali) |
| Dve deonice iste dimenzije se spajaju kraj na kraj pod uglom | Koleno |

Kada menjate, pomerate ili brišete deonicu, svaki fiting na tom nivou se pravi ponovo. Ako je krak prekratak za fitinge na svojim krajevima, BimCraft to kaže i ništa ne menja: pomerite ugao dalje.

:::note
Fitinzi i ventili su opšti: izvedeni iz dimenzije cevi ili kanala, a ne iz kataloga proizvođača. Naglavni, presovani i žljebljeni fitinzi, tela ventila i oprema imaju sopstvene dimenzije proizvođača: proverite ih kod dobavljača pre naručivanja.
:::

## Usponi

Dok crtate, unesite novu visinu u **Na visini** i pritisnite {{key:Enter}}: deonica ide pravo nagore ili nadole na poslednjem uglu, s kolenom na svakom kraju. Uspon može da ide nagore do sprata iznad. Svaki nivo prikazuje delove deonice koje dosegne njegov opseg pregleda, s **UP** ili **DN** na usponu.

## Odvodi i njihov nagib

Sanitarni i kišni odvodi počinju s najmanjim nagibom koji International Plumbing Code dozvoljava za njihovu dimenziju: 1/4 in. po stopi do 2-1/2 in., 1/8 in. po stopi od 3 do 6 in., 1/16 in. po stopi od 8 in. Brazilska PVC cev za odvod počinje s nagibom iz NBR 8160: 2 % do DN 75, 1 % od DN 100. Upišite drugi nagib u traku ili u Svojstva: `1/4"/ft`, `2 %` ili `1:50`. Deonica pada od svoje prve tačke, pa crtajte odvode u smeru u kojem teku. Plan prikazuje pad i strelicu. Svojstva upozoravaju kada je odvod ravniji od minimuma propisa.

## Dimenzionisanje odvoda po jedinicama opterećenja

Izaberite sanitarni odvod: **Jedinice opterećenja** u Svojstvima kaže koliko jedinica nosi i koju najmanju dimenziju zahteva. Svaka sanitarna armatura čiji je priključak odvoda na deonici se broji, kao i svaki odvod koji u nju utiče: crtajte odvode u smeru u kojem teku, svaki završen na odvodu u koji utiče.

- Odvodi u brazilskoj PVC cevi za odvod broje se **UHC** i prate NBR 8160; ostali se broje **DFU** i prate International Plumbing Code.
- **Odvod**: **Ogranak** se dimenzioniše prema tabeli propisa za ogranke armature; **Glavni odvod** prema svojoj tabeli po nagibu, pa mu je **Nagib** važan.
- Odvod nikada nije manji od odvoda armatura koje opslužuje (WC šolja treba DN 100, ili 3 in.), ni od odvoda koji u njega utiče. Prema NBR 8160 glavni odvod je najmanje DN 100.

{{ui:Dimenzioniši odvode}} napravi svaki sanitarni odvod modela koji je premali za svoje jedinice opterećenja dimenzijom koja mu treba, kao jedan korak koji možete poništiti. Odvod nacrtan većim nego što treba ostaje kakav jeste. Kada odvod nosi više nego što najveća dimenzija njegove cevi može pri svom nagibu, BimCraft to kaže: dajte mu strmiji nagib ili drugu cev.

:::note
Tabele su za horizontalne odvode. Vertikale, ventilacija i kišni odvodi ovde se ne dimenzionišu: proverite ih, i ceo projekat, prema propisu koji važi za projekat.
:::

## Ventili

1. Izaberite {{ui:Valve}} i vrstu: zasunski, kuglasti, sedežni ili nepovratni.
2. Kliknite na cev gde ide. Cev se seče oko njega i ventil je povezan s obe strane.

Svojstva deonice navode njene ventile, svaki sa {{ui:Remove}}.

Više vrsta ventila, filter, prigušivači na kanalima, sopstvene specifikacije cevi i porodice proizvođača: pogledajte [Specifikacije cevi, ventili, prigušivači i porodice proizvođača](topic:pipe-specs).

## Promena deonice

Izaberite bilo koji deo deonice, u planu ili u 3D prikazu. U Svojstvima:

- **Sistem**, **Materijal**, **Klasa** i **Dimenzija** (cevi), ili **Oblik**, **Širina**, **Visina** (kanali).
- **Height above the level** pomera celu deonicu nagore ili nadole.
- **Insulation**: njena debljina, zadržana za proveru prostora i spisak otvora (ništa se ne crta za nju): pogledajte [Proverite cevi i kanale prema konstrukciji](topic:mep-against-structure).
- Čelična cev: **Seci na spulove**: pogledajte [Spulovi čeličnih cevi i listovi spulova](topic:pipe-spools).
- **Slope** (cevi).
- **Flow** s {{ui:Size it}}: za vodu, najmanja dimenzija koja drži vodu na 8 ft/s (2.4 m/s), ili 5 ft/s (1.5 m/s) za toplu vodu; na 3 m/s za brazilsku PVC vodovodnu cev (NBR 5626). Za kanale, brzina i stopa trenja kanala kako je nacrtan. Sanitarni odvodi se dimenzionišu prema svojim jedinicama opterećenja: pogledajte **Dimenzioniši odvode prema jedinicama opterećenja** iznad.

Svaka promena je jedan korak {{ui:Undo}}. {{key:Delete}} uklanja celu deonicu.

## Planovi

- Cevi manje od 150 mm (otprilike 6 in.) crtaju se kao jedna linija na središnjoj liniji, veće cevi i svi kanali kao dve linije na svojoj širini.
- Svaki sistem ima svoju boju; PDF plana ih štampa crno.
- Svaka deonica je označena svojom dimenzijom i sistemom (na primer `2" CW` ili `16×10 SA`).
- Opseg pregleda plana određuje koje deonice prikazuje, a {{ui:Shown in this plan}} može izostaviti **Cevi** ili **Kanale**: pogledajte [Pogledi, opsezi pregleda i sopstveni listovi](topic:views-and-sheets).

## Specifikacije i predmer

Panel {{ui:Schedules}} dodaje **Cevi** (po sistemu, materijalu i dimenziji, s njihovim dužinama), **Kanale** (po sistemu, obliku i dimenziji, s dužinama i spoljašnjom površinom) i **Fitinge i ventile** (po vrsti i dimenziji, prebrojano). Kliknite na red da izaberete šta on navodi; {{ui:Download CSV}} ga preuzima.

{{ui:Takeoff}} šalje deonice u TakeoffCraft: cev i kanal po dimenziji kao deonice nacrtane na planu (kanalizacija sa nagibom meri se duž nagiba), fitinzi i ventili prebrojani tamo gde se nalaze: pogledajte [Pošaljite količine modela u TakeoffCraft](topic:takeoff). Vertikale se ne uključuju u taj list, jer plan ne može da ih izmeri; spisak Cevi ima njihovu dužinu.

## U IFC datoteci

Svaka deonica je sklop koji drži svoje delove: segmente cevi i kanala, fitinge i ventile, svaki s tipom, materijalom, bojom za svoj sistem i priključnim tačkama. Dodirnute priključne tačke su povezane, a svaki deo pripada svom distributivnom sistemu (datoteke IFC2X3 dobijaju isto kao segmente protoka, fitinge i kontrolere u sistemu). Drugi programi koji čitaju IFC sisteme vide jednu povezanu deonicu po sistemu. Sopstvena definicija deonice čuva se uz nju, pa je BimCraft ponovo pravi na isti način kada je menjate.
