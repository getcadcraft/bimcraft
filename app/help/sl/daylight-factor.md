---
title: Ocena dnevne svetlobe v vsaki sobi
summary: Povprečni faktor dnevne svetlobe vsakega prostora iz njegovih oken, njegovih notranjih površin in neba, ki ga vsako okno vidi, s kotom neba, izmerjenim v modelu. Zgodnja ocena zasnove, ne simulacija in ne preverjanje skladnosti.
keywords: dnevna svetloba, faktor dnevne svetlobe, povprečni faktor dnevne svetlobe, adf, navpična komponenta neba, vsc, sončni dobiček, sonce, g-vrednost, mreža, razcepljeni tok, komponenta neba, notranje odbita komponenta, naravna svetloba, okno, zasteklitev, kot neba, zakritje, senčenje, balkon, napušč, odbojnost, prepustnost, zgodnja zasnova, analiza, sobe, prostori
from: 5f300a78
---

Zavihek {{ui:Dnevna svetloba}} v desnem podoknu izračuna **povprečni faktor dnevne svetlobe** vsake sobe: kolikšen delež svetlobe oblačnega neba zunaj doseže sobo, v povprečju, v odstotkih. Bere sobe (prostore) in okna odprtega modela IFC. Model se ne spremeni in ničesar se ne naloži.

:::warning
Vse v tem zavihku je **pripomoček za zasnovo, ne izračun skladnosti**: zgodnje ocene po objavljenih metodah, **ne simulacija** in **ne preverjanje glede na gradbeni predpis ali standard**. BS EN 17037, LEED, BREEAM in energetski predpisi zahtevajo simulacijo dnevne svetlobe s podnebjem kraja; za te uporabite program za simulacijo dnevne svetlobe.
:::

## Izračun

1. Odprite model IFC, ki ima sobe (prostore) in okna. Modeli, narisani tukaj, imajo sobo v vsakem zaprtem nizu sten.
2. Odprite zavihek {{ui:Dnevna svetloba}} in kliknite {{ui:Izračunaj}}.
3. Vsaka soba prikaže svoj faktor dnevne svetlobe in pas: pod 2 %, 2–5 %, 5 % ali več. Kliknite sobo, da vidite njene površine ter površino in kot neba vsakega okna; soba in njena okna se izberejo v modelu.

Spremenite vhod in števila se takoj prilagodijo; po spremembi modela kliknite {{ui:Izračunaj znova}}. {{ui:CSV}} shrani vsako sobo s svojimi števili in uporabljenimi vhodi.

## Formula

Povprečni faktor dnevne svetlobe (%) = T × Ag × θ × M ÷ (A × (1 − R²)), seštet po oknih sobe (Littlefairjeva formula, uporabljena v BRE 209, BS 8206-2 in CIBSE LG10):

- **T**, prepustnost svetlobe stekla (0.7 za začetek: uporabite podatek proizvajalca).
- **Ag**, zasteklena površina: površina vsakega okna (njegova celotna širina × višina, sicer njegova velikost v modelu) × **delež zasteklitve** (0.75 za začetek: preostalo je okvir).
- **θ**, kot neba, ki ga okno vidi, v stopinjah (spodaj).
- **M**, faktor vzdrževanja za umazanijo na steklu (1 za začetek).
- **A**, vsaka notranja površina sobe: tla, stene, strop in okna, vzeta iz lastne oblike sobe.
- **R**, njihova srednja odbojnost, utežena s površino: tla 0.2, stene 0.5, strop 0.7 za začetek; steklo šteje 0.1.

## Kako se meri kot neba

Za vsako okno BimCraft prereže model z navpično ravnino, pravokotno na okno, od zunanje strani stekla, in pogleda od obzorja naravnost navzgor: vse, kar prerez zadene pred oknom (stavba nasproti, balkon ali napušč nad njim, strešni rob), zakrije del tistih 90°. θ je to, kar ostane. Samo okno in stena, v kateri sedi, sta izpuščena. To naredi na petih mestih po širini okna in vzame povprečje, tako da tanek steber pred sredino vzame svoj delež, ne celega neba.

Stavba 8.5 m nad središčem okna in 9.9 m stran zakrije 40.65° (kot, katerega tangens je 8.5 ÷ 9.9), tako da ostane θ = 49.35°.

## Navpična komponenta neba za vsako okno

{{ui:Izračunaj}} izmeri tudi, za vsako okno, kolikšen del celotnega neba vidi: isti navpični prerez, obrnjen v vsako smer čez čelo okna (vsaka 2°, od ene strani do druge), tako da stavba na strani, lamela ali globok zamik vzame svoj delež. Iz tega BimCraft izračuna **navpično komponento neba (VSC)**: kolikšen del svetlobe oblačnega neba doseže steklo, kot delež tistega, kar bi dobila odprta ravna streha. Okno brez ničesar pred njim dobi **39.6 %**, največ, kar navpično okno lahko; dolga stavba, ki se dvigne 25° nad oknom, pusti približno **27 %**, število, ki ga britanske smernice (BRE 209) uporabljajo kot praktično pravilo. Vsako okno v podrobnostih sobe prikaže svoj VSC in svoj **kot zakritja** (kako visoko se stvari dvigajo naravnost pred njim).

Nebo je standardno oblačno nebo CIE, ki je naravnost navzgor trikrat svetlejše kot ob obzorju, prerez pa je natančen: ničesar se ne vzorči.

## Sonce skozi okna na izbrani datum

Odprite {{ui:Sonce skozi okna na izbrani datum}} in izberite datum. BimCraft sledi soncu tisti dan v četrturnih korakih in za vsako okno sešteje toploto, ki jo sonce prinese skozi steklo:

- **neposredno sonce**, kadar je pred oknom in ga nič v modelu ne zakriva (isti natančni prerez, obrnjen proti soncu: balkon, ki senči visoko poletno sonce opoldne, spusti nizko zimsko sonce noter);
- **svetlobo neba** na steklu, manj tisto, kar okno ne vidi;
- svetlobo **z tal** (njihova odbojnost: 0.2 za začetek);
- vse skozi **g-vrednost** stekla (delež sončne energije, ki jo prepusti: 0.6 za začetek; uporabite podatek proizvajalca) in njegov delež zasteklitve.

Vsaka soba prikaže dnevno skupno vrednost v kWh in svoj vrh v vatih s časom; podrobnosti sobe narišejo dan kot graf. Nebo je jasno po Hottelovem modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), z poletnimi ali zimskimi vrednostmi za kraj in letni čas ter višino lokacije; sončni položaj je po NOAA. Zemljepisna širina in dolžina lokacije prideta iz lokacije IFC, sever pa iz pravega severa modela; če model nima lokacije, vpišite zemljepisno širino in dolžino. Časi so standardni (brez poletnega časa) v časovnem pasu, ki ga vpišete, sicer v pasu, ki ga nakazuje dolžina.

Izpušča: oblake (dan je jasen), steklo, ki pri nizkih kotih prepusti manj, okvirje, ki senčijo steklo, senčila in to, kar vzamejo stene in streha. Ocena hlajenja v istem zavihku uporablja vrh.

## Faktor dnevne svetlobe na mreži

Odprite {{ui:Faktor dnevne svetlobe po mreži}} in {{ui:Izračunaj mrežo}}: BimCraft položi mrežo čez tla vsake sobe na višini delovne ravnine (za začetek 0.85 m), pol metra od sten, in izračuna faktor dnevne svetlobe v vsaki točki po **metodi razcepljenega toka BRE**:

- **komponenta neba**: oblačno nebo, vidno iz točke skozi odprtino vsakega okna, manj okvirji;
- **zunanja odbita komponenta**: kar točka vidi od stavb zunaj skozi okno, ki sijejo z desetino neba za njimi (spremenite svetlost zakritja, če so precej svetlejše ali temnejše);
- **notranja odbita komponenta**: svetloba, ki se odbija po sobi, od površin sobe in njihovih odbojnosti, površine oken in tega, koliko je zunaj njih (formula BRE, s prepustnostjo stekla namesto čistega stekla, ki ga je predpostavljala).

Vsaka soba prikaže svojo srednjo vrednost, svojo najnižjo točko in koliko je ima 2 % ali več; podrobnosti sobe narišejo njen tloris z vsako točko, obarvano po njenem faktorju dnevne svetlobe, in okna rdeče. Da bi bilo hitro na vsakem računalniku, soba dobi največ **400 točk**: v veliki sobi se razmik poveča, da se prilagodi (vpišite razmik, če želite svojega).

## Kaj izpušča

- Strešna okna (steklo, ki leži ravno ali je nagnjeno) so navedena, a se ne štejejo: formule tukaj veljajo za okna v stenah.
- Okna brez sobe za seboj (na primer hodnik brez prostora) so navedena ločeno.
- Zamiki okenskih odprtin (odprtina se vzame na zunanji ploskvi), bleščanje, sončne ure in dnevna svetloba glede na podnebje. Za BS EN 17037, LEED ali BREEAM uporabite program za simulacijo dnevne svetlobe.
- Pasovi so iz starejših britanskih smernic (BS 8206-2), prikazani kot vodilo, nikoli kot uspeh ali neuspeh.
