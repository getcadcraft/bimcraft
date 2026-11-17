---
title: Tipke in miška
summary: Vsako dejanje s tipkovnico, miško, sledilno ploščico in dotikom v BimCraft, razvrščeno po tem, kar gledate.
keywords: tipkovnica, bližnjice, tipke za hitri dostop, tipke, miška, sledilna ploščica, dotik, orbita, pomik, povečava, skrij, izoliraj, prosojno, razveljavi, uveljavi, kopiraj, prilepi, podvoji, shrani, prilagodi, natisni pogled, Esc, nastavitve, risanje, stena, vrata, okno, tloris
from: 5c6eedce
---

BimCraft ima malo bližnjic. Večino dela opravite z miško in podoknimi. Bližnjice, zapisane z {{key:Mod}}, uporabljajo Command na Macu in Ctrl drugje. Glejte [Tipke, miške in sledilne ploščice](common:keys), kako so tipke zapisane v tej pomoči.

## Povsod

| Tipka | Kaj naredi |
|---|---|
| {{key:Ctrl+Shift+F}} | Preklaplja med načini zaslona: normalni, celozaslonski, celozaslonski z skritimi vrsticami. Ctrl na vseh platformah, tudi na Macu |
| {{key:Esc}} | Zapusti celozaslonski način |
| {{key:Mod+,}} | Odpre {{ui:Nastavitve}}. Glejte [Nastavitve BimCraft](topic:settings) |
| {{key:Tab}} | Premakne med gumbi, potrditvenimi polji in vrednostmi. Do vsake kontrole lahko pridete s tipkovnico |

## 3D pogled (modeli IFC)

| Tipka ali dejanje | Kaj naredi |
|---|---|
| {{key:F}} | Prilagodi celoten model, tričetrtinski pogled (enako kot {{ui:Prilagodi}}) |
| {{key:Esc}} | Počisti izbor ali preneha postavljati ali prilepljati |
| Klik | Izbere element pod kazalcem; klik na prazno ozadje počisti izbor |
| {{key:Mod}}+klik ali {{key:Shift}}+klik | Doda element izboru ali ga iz njega odstrani |
| {{key:H}} | Skrije izbrane elemente. Glejte [Skrijte, izolirajte in prikažite prosojno elemente](topic:hide-and-isolate) |
| {{key:I}} | Prikaže samo izbrane elemente (izolacija) |
| {{key:T}} | Prikaže izbrane elemente, vse drugo pa prosojno |
| {{key:Shift+H}} | Znova prikaže vse elemente |
| {{ui:Sprehod}} | Nato {{key:W}} {{key:A}} {{key:S}} {{key:D}} ali puščice za hojo, {{key:Shift}} za tek, vlečenje za ogledovanje okoli, {{key:Esc}} ustavi. Glejte [Sprehod po modelu](topic:walk) |
| {{key:M}} | Meri razdalje in površine ploskev. Glejte [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure) |
| Vlečenje z levim gumbom | Orbita |
| Vlečenje z desnim gumbom | Pomik |
| {{key:Shift}} ali {{key:Mod}} in vlečenje z levim gumbom | Pomik (priročno na sledilni ploščici) |
| Drsenje kolesca ali vlečenje s srednjim gumbom | Povečava |
| Drsenje z dvema prstoma ali stiskanje na sledilni ploščici | Povečava |
| En prst (dotik) | Orbita; tap izbere |
| Dva prsta (dotik) | Stiskanje za povečavo, skupno premikanje za pomik |

| {{key:X}} | Ravnina prereza vklop in izklop. Glejte [Prerežite model IFC z ravnino prereza](topic:section-plane) |
| {{key:Shift+X}} | Kvader prereza okoli izbranih elementov, s prostorom, nastavljenim v Nastavitvah |

Za {{ui:Zgoraj}}, {{ui:Spredaj}} in {{ui:Bok}} ni tipk; uporabite gumbe.

## Uredi

Enaki ukazi so na orodni vrstici: {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}} in meni {{ui:Več}}, ki prikazuje vsako tipko. Delujejo v 3D pogledu modela IFC, ne pa medtem ko vpisujete v polje. Glejte [Kopiranje, prilepljanje in podvajanje elementov knjižnice](topic:copy-paste).

| Tipka | Kaj naredi |
|---|---|
| {{key:Mod+Z}} | Razveljavi zadnjo spremembo |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi, kar je Razveljavi vzelo nazaj |
| {{key:Mod+C}} | Kopira izbrane elemente (njihova imena in lastnosti gredo tudi na odložišče kot besedilo) |
| {{key:Mod+X}} | Izreže izbrane elemente: kopira jih in nato izbriše |
| {{key:Mod+V}} | Prilepi, kar ste kopirali: sledi kazalcu, kliknite, kamor naj gre |
| {{key:Mod+Shift+V}} | Prilepi na isto mesto: tja, od koder je bilo izrezano, ali poleg originalov po kopiranju |
| {{key:Mod+D}} | Podvoji: kopira izbrane elemente in začne prilepljanje |
| {{key:Delete}} | Izbriše izbrane elemente z njihovimi deli in odprtinami. Glejte [Brisanje, rezanje, kopiranje in lepljenje gradbenih elementov](topic:edit-elements) |
| {{key:Mod+A}} | Izbere vse prikazane elemente |
| {{key:Esc}} | Prekliče izbor |

Pri izbiri besedila na strani {{key:Mod+C}} kopira to besedilo kot običajno.

## Tloris (Risanje)

Te bližnjice delujejo, medtem ko je {{ui:Risanje}} vklopljeno in ne vpisujete v polje. Glejte [Risanje sten](topic:draw-walls) in [Vrata in okna](topic:doors-and-windows).

| Tipka ali dejanje | Kaj naredi |
|---|---|
| {{key:V}} | {{ui:Izberi}} |
| {{key:W}} | {{ui:Zid}} |
| {{key:D}} | {{ui:Vrata}} |
| {{key:N}} | {{ui:Okno}} |
| {{key:H}} | Z {{ui:Vrata}} ali {{ui:Okno}}: tečaji na drugem koncu |
| {{key:Shift}} med risanjem stene | Ohrani jo pod 0°, 90°, 180° ali 270° |
| Številke ter oznake za čevlje in palce (`'` in `"`) | Začne vpisovanje dolžine v polje {{ui:Dolžina}}; {{key:Enter}} jo uporabi |
| {{key:Enter}}, {{key:Esc}}, desni klik ali dvojni klik | Konča steno, ki jo rišete; {{key:Esc}} še enkrat vrne na {{ui:Izberi}} |
| {{key:Delete}} | Izbriše izbrane stene, vrata in okna; preostale stene se znova povežejo |
| {{key:F}} z kazalcem nad tlorisom | Prilagodi tloris |
| Drsenje kolesca | Povečava okoli kazalca |
| Vlečenje s srednjim ali desnim gumbom ali {{key:Space}} in vlečenje | Pomik; z vklopljenim {{ui:Izberi}} tudi navadno vlečenje pomakne pogled |
| Vlečenje vrat ali okna z {{ui:Izberi}} | Premakne ga vzdolž stene ali na drugo steno |
| Dva prsta (dotik) | Stiskanje za povečavo, skupno premikanje za pomik |

## Vstavljanje in lepljenje elementov knjižnice

| Tipka | Kaj naredi |
|---|---|
| {{key:R}} | Zasuče element za 90° |
| {{key:Tab}} | Lovljenje ob steni vklop in izklop: hrbet elementa se prisloni k najbližji steni |
| {{key:Enter}} v **X, Y (mm)** | Vstavi na vpisani položaj |
| {{key:Esc}} | Prekliče vstavljanje ali lepljenje |

## Urejanje vrednosti IFC

| Tipka | Kaj naredi |
|---|---|
| {{key:Enter}} | Obdrži vpisano vrednost |
| {{key:Esc}} | Prekliče in vrne staro vrednost |
| Klik drugje | Obdrži vpisano vrednost |
| {{key:Mod+Z}} | Razveljavi zadnjo spremembo. Samo dokler imate neshranjene spremembe in ne vpisujete v polje |
| {{key:Mod+Y}} | Uveljavi, kar je Razveljavi vzelo nazaj |
| {{key:Mod+S}} | Shrani kot IFC. Samo, če imate neshranjene spremembe; sicer se odpre lastni ukaz za shranjevanje brskalnika |

Za urejanje samo s tipkovnico: pritisnite {{key:Tab}}, dokler vrednost ni označena, nato pritisnite {{key:Enter}}, da začnete vpisovati.

## 2D risbe (DWG in DXF)

| Tipka ali dejanje | Kaj naredi |
|---|---|
| {{key:F}} | Prilagodi risbo ali list |
| {{key:P}} | Pogled za tisk vklop in izklop |
| Dvojni klik | Prilagodi |
| Vlečenje s katerim koli gumbom | Pomik |
| Drsenje kolesca | Povečava pri kazalcu |
| Drsenje z dvema prstoma ali stiskanje na sledilni ploščici | Povečava pri kazalcu. Drsenje z dvema prstoma ne pomakne pogleda |
| En prst (dotik) | Pomik. Stiskanje za povečavo risb še ni izdelano |

## Risbe v 3D

| Tipka ali dejanje | Kaj naredi |
|---|---|
| {{key:3}} | 3D vklop in izklop (tudi na 2D pogledu) |
| {{key:F}} | Obseg: cela risba |
| Vlečenje s srednjim ali levim gumbom | Orbita |
| Vlečenje z desnim gumbom ali {{key:Shift}} in vlečenje | Pomik |
| Drsenje kolesca | Povečava proti temu, kar je pod kazalcem |
| Drsenje z dvema prstoma na sledilni ploščici | Orbita; z {{key:Shift}} pomik |
| Stiskanje na sledilni ploščici | Povečava |
| En prst (dotik) | Orbita |
| Dva prsta (dotik) | Stiskanje za povečavo, skupno premikanje za pomik |

{{key:F}}, {{key:P}} in {{key:3}} ne delujejo, medtem ko vpisujete v polje, medtem ko je prikazana razpredelnica opreme ali ko držite {{key:Mod}} ali {{key:Alt}}.

## Datoteke

| Dejanje | Kaj naredi |
|---|---|
| Povlecite datoteko na stran | Odpre jo |
| Povlecite mapo na stran | Odpre jo kot mapo projekta brez poziva za dovoljenje |
