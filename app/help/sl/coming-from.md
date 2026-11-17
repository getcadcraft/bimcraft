---
title: Prihod iz drugih programov za BIM in risanje
summary: Kako navade iz namiznih programov za BIM in ogledovanja DWG ustrezajo BimCraftu ter razlike, ki ljudi zmotijo.
keywords: preklapljanje, selitev, poznano, namizni BIM, družina, parametri, brskalnik projekta, paleta lastnosti, kocka pogleda, zunanji sklic (Xref), upravitelj slojev, razlike, primerjava
from: 2de629af
---

Če poznate Revit, bo večina BimCraft-a po besedah domača, po obsegu pa tuja. Najpomembnejša razlika: **ta različica bere in pregleduje modele ter ureja podatke IFC. Še ne ustvarja modelov kot Revit.** Ne morete risati sten, postavljati družin, ustvarjati pogledov ali listov ali shranjevati datoteke projekta. Lahko pa odprete skoraj vsako datoteko stavbe na katerem koli računalniku z brskalnikom, pogledate, kaj vsebuje, preverite celotno mapo projekta in popravite podatke v modelu IFC.

## Navade in ustrezniki

| Če ste vajeni | V BimCraftu |
|---|---|
| Odpiranje `.rvt` v Revitu za ogled modela | BimCraft odpre `.rvt` kot kartico datoteke: različica, podatki o projektu, povezave, predogled. Za 3D model izvozite IFC in ga odprite. [Preberite datoteko projekta ali družine](topic:read-rvt-file) |
| Preverjanje, v kateri različici je bila datoteka shranjena, preden jo odprete | Kartica na vrhu piše „shranjeno v Revitu …“, brez nadgradnje ali spreminjanja datoteke |
| Brskalnik projekta | Brez brskalnika pogledov in listov. Model IFC ima seznama {{ui:Etaže}} in {{ui:Elementi}}; risba ima zavihke listov |
| Paleta lastnosti | Podokno {{ui:Lastnosti}} na desni, za element, ki ste ga kliknili. Namesto skupin parametrov so nabori lastnosti IFC |
| Parametri primerka in tipa | Nabori lastnosti primerka in nabori, označeni z „(tip)“. Sprememba tipa velja za vsak element tipa, kot v Revitu. [Spremenite lastnost tipa za vse elemente tipa](topic:type-vs-instance) |
| Edit Type | Brez pogovornega okna: kliknite vrednost v naboru „(tip)“ in vtipkajte |
| Izbiranje več elementov, filtri, Select All Instances | En element naenkrat. Še ni izdelano |
| Kocka pogleda in krmilni kolut | Kocka pogleda v spodnjem desnem kotu, štirje gumbi ({{ui:Prilagodi}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Bok}}) in prosto vrtenje. Brez krmilnega koluta |
| Vrtenje s Shift in srednjim gumbom, pomik s srednjim gumbom | Vlečenje z levim gumbom vrti, vlečenje z desnim (ali {{key:Shift}} in vlečenje) premika, kolešček povečuje. Slog menija {{ui:Trak BIM}} preklopi na pomik s srednjim gumbom in vrtenje s {{key:Shift}} in srednjim gumbom. [Meniji, tipke in miška](topic:menus-keys-and-mouse) |
| Tlorisi, prerezi, prerezni kvadri | En {{ui:Prerez}} naenkrat, ravnina ({{key:X}}); brez prereznega kvadra ali 2D tlorisov. [Prerežite model IFC z ravnino prereza](topic:section-plane) |
| Skrivanje v pogledu, izolacija, vidnost in grafika | {{ui:Etaže}} vklopljene in izklopljene, {{ui:Prostori}} in {{ui:Robovi}}. Še ni skrivanja posameznih elementov |
| Sobe | Prostori IFC, sprva skriti. Kliknite {{ui:Prostori}} |
| Shrani, Shrani kot, sinhroniziraj s centralnim modelom | {{ui:Shrani kot IFC}} prenese novo datoteko IFC. Izvirnik se nikoli ne spremeni. Brez centralnega modela, brez skupnega dela |
| Razveljavi s {{key:Mod+Z}} | Deluje za urejanja IFC do shranjevanja. [Spremenite lastnosti IFC in shranite urejeno kopijo](topic:edit-ifc-properties) |
| Upravljanje povezav | Odprite mapo projekta: vsaka povezava je preverjena in označena z **V tej mapi**, **Najdeno z istim imenom**, **Datoteka knjižnice** ali **Ni v tej mapi**. [Odprite celotno mapo projekta](topic:open-project-folder) |
| Revizija ali odpiranje datoteke, da vidite, ali je pokvarjena | Poročilo mape preveri vsako kopijo in varnostno kopijo, ali je odrezana, v nekaj sekundah. [Preverite mapo glede poškodovanih kopij](topic:check-folder-health) |
| Izbira prave datoteke v neurejeni mapi | Polje {{ui:Začnite tukaj}} predlaga eno, z razlogi |

Če modele večinoma odpirate za pregled, kot v programu za pregled modelov IFC, izberite slog menija {{ui:Pregledovalnik}}: orodja za ogled in pregled so na vrhu, orodja za gradnjo pa so v enem meniju. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).

## Iz ogleda datotek DWG

Če odpirate DWG v AutoCADu ali ogledovalniku DWG:

| Če ste vajeni | V BimCraftu |
|---|---|
| Zavihka Model in postavitev spodaj | Zavihki nad risbo: {{ui:Model}} in po en za vsak list |
| ZOOM Extents, dvojni klik na kolešček | Dvojni klik, {{key:F}} ali {{ui:Prilagodi}} |
| Pomik s srednjim gumbom | Vlecite s katerim koli gumbom |
| Upravitelj slojev | Seznam {{ui:Sloji}}: označite za prikaz, odznačite za skritje, {{ui:Vsi vklopljeni}} in {{ui:Vsi izklopljeni}} |
| Upravitelj zunanjih sklicev | **Povezane risbe** na desni, s **Prikazano** ali **Ni najdeno**, in {{ui:Dodaj povezane risbe …}} |
| Predogled tiska | {{ui:Pogled tiska}} ali {{key:P}}: črno na belem z debelinami črt. Ne natisne se |
| Izvoz podatkov atributov blokov | Zavihek {{ui:Oprema}} za označene risbe gostinske opreme, z {{ui:Prenesi CSV}} |
| Merjenje, risanje, urejanje, shrani kot | Ni v BimCraftu. Risanje in urejanje opravlja aplikacija za risanje CadCraft |

## Razlike, ki ljudi zmotijo

- **Teče v brskalniku in brskalnik skrbno ravna z vašimi datotekami.** BimCraft lahko bere le datoteke in mape, ki mu jih date z izbiro ali povleko. Datoteke ne more odpreti sam in ne more prepisati nobene. Vsako shranjevanje je prenos.
- **Nič se ne naloži.** Beseda „naloži“ v nekaterih pogovornih oknih brskalnika za mape je njegovo lastno besedilo. Datoteke ostanejo v vašem računalniku.
- **IFC je format modela.** Datoteka projekta se odpre kot kartica, ker je njena 3D vsebina nedokumentirana. Modele v BimCraft prinesite kot IFC.
- **Urejanja so kopiraj-ob-pisanju.** Sprememba vrednosti enega elementa nikoli ne spremeni sosedov, tudi če jo je izvoznik delil med njimi. Lastnosti tipa so namerna izjema.
- **Brez projekta, brez pogledov.** BimCraft prikaže eno datoteko naenkrat in si po zaprtju zavihka o njej ničesar ne zapomni, razen imen nedavnih map v Chrome in Edge.
- **Tipke na Macu.** Kjer bližnjice Revita v Windows uporabljajo Ctrl, bližnjice BimCrafta uporabljajo {{key:Mod}}: na Macu Command.
- **Navade z miško.** Vrtenje je z levim gumbom, ne s Shift in srednjim gumbom, razen če izberete slog menija {{ui:Trak BIM}} ali sami nastavite gumbe v [Meniji, tipke in miška](topic:menus-keys-and-mouse).

Glejte [Kaj še ni izdelano](topic:not-built-yet), kaj uporabiti namesto tega.
