---
title: Postavite višino in odprite njen pogled
summary: Postavite oznako višine na tloris, obrnite jo v smeri, v kateri želite gledati, nato poiščite njeno risbo v brskalniku projekta, jo uredite in postavite na list. Koraki za razporeditve s trakom in za klasično razporeditev.
keywords: višina, pogled višine, oznaka višine, oznaka pogleda, postavi višino, nova višina, ustvari višino, zunanja višina, stranski pogled, čelni pogled, pogled z točke, kje je moja višina, odpri višino, višina na listu, obrni višino, preimenuj višino, severna višina, razporedi poglede, razdeli pogled, tloris in 3D drug ob drugem
from: a7cfd2b9
---

## Kaj boste naredili

Ustvarite lastno višino: risbo stavbe, gledano z izbrane točke, v smeri, ki jo izberete. Za to potrebujete dva klika na tloris. Risba se nato prikaže med drugimi višinami stavbe.

:::note
Štiri strani so že na voljo. Vsaka stavba ima v {{ui:Brskalnik projekta}} pod {{ui:Pogledi}} severno, vzhodno, južno in zahodno višino, ne da bi kaj postavljali. Svojo postavite, kadar želite pogled z drugega mesta: pravokotno na zamaknjeno krilo, iz notranjega dvorišča ali na eno steno znotraj sobe.
:::

## Kje je orodje

- Razporeditve s trakom: {{ui:Pogled}} › **Ustvari** › {{ui:Višina}}.
- Klasična razporeditev: vklopite {{ui:Risanje}}, nato {{ui:Zgradba}} › {{ui:Višina}}.
- Kateri koli slog menija: ukaz se imenuje Višina; paleta ukazov ga najde, ukazna vrstica pa sprejme ELEVATION.

## Koraki

1. Izberite {{ui:Višina}}. Višina se postavi na tloris, zato BimCraft, če ste bili v 3D pogledu, prikaže tloris etaže, na kateri ste bili. Kazalec pokaže **Kliknite, kjer višina stoji**.
2. Kliknite, od kod je pogled. Za zunanjo višino kliknite zunaj stavbe, malo stran od stene, ki jo želite videti.
3. Kazalec zdaj pokaže **Kliknite, kako izgleda**. Premaknite se proti stavbi: puščica kaže smer, kratka črta čez prvi klik pa je rob, s katerega gledate. Kliknite.
4. Na tlorisu se prikaže krog s številko in kazalcem. To je oznaka višine. Prva je 1, naslednja 2.
5. Za konec pritisnite Esc ali nadaljujte in postavite še eno.

Postavitev oznake je en korak: {{key:Mod+Z}} jo razveljavi.

## Odprite risbo

Tloris ostane pred vami tudi po drugem kliku. Risba je v {{ui:Brskalnik projekta}}:

1. Odprite {{ui:Pogledi}}. Vaša je na seznamu za štirimi stranmi kot **Višina 1**.
2. Kliknite gumb s svinčnikom {{ui:Uredi v tem pogledu}} v njeni vrstici, da si ogledate risbo in v njej delate: premikate stene, vrata, okna in etaže, dodajate opombe in kote. Glejte [Urejanje v višinah in prerezih](topic:edit-in-elevations).
3. Kliknite samo vrstico, da odprete komplet risb, ali dodajte pogled na svoj list. Glejte [Pogledi in listi](topic:views-and-sheets).

V klasični razporeditvi je brskalnik projekta v levem podoknu, medtem ko je {{ui:Risanje}} vklopljeno. V razporeditvah s trakom je to zavihek {{ui:Brskalnik projekta}} pod Lastnosti.

## Kaj pogled prikazuje

- Vse pred oznako, kolikor sega stavba. Nič za njo.
- Etaže z njihovimi imeni in višinami.
- Če oznaka stoji znotraj stavbe, je tisto, kjer stoji, prerezano, kot bi ga prerezal prerez. Za čist zunanji pogled stojte zunaj.

## Spremenite jo

Izberite oznako na tlorisu (kliknite njen krog z {{ui:Izberi}}). Lastnosti ima:

- {{ui:Oznaka}}: njeno številko ali lastno ime, do 8 znakov.
- {{ui:Obrni pogled}}: pogled v nasprotno smer z istega mesta.
- {{ui:Glej do}}: kako daleč pred oznako sega pogled. 0 pokaže vse.

Pritisnite Delete, da odstranite oznako in njeno risbo. Razveljavi ju povrne.

:::tip
Za hkraten ogled tlorisa in 3D pogleda med delom uporabite {{ui:Pogled}} › **Okna** › {{ui:Razporedi poglede}} v razporeditvah s trakom ali {{ui:Razdeli}} v klasični razporeditvi. Klik na zavihek pogleda vas vrne na en pogled.
:::

## Omejitve

- Oznake na tlorisu še ni mogoče povleči ali zavrteti. Izbrišite jo in jo postavite znova ali uporabite {{ui:Obrni pogled}}.
- Na seznamu pogledov, ki jih lahko dodate listu, je lastna višina navedena med prerezi.
- Oznake vrat in oken so narisane na štirih stranskih višinah, ne na tisti, ki ste jo postavili.

## V IFC

Oznaka je v datoteki shranjena kot IfcAnnotation z imenom "Elevation 1" in vrsto objekta "Elevation marker", v etaži, na kateri je bila postavljena. Drugi program jo prikaže kot oznako; samo risbo pa BimCraft vsakič izdela iz modela.
