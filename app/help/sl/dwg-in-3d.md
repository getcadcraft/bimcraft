---
title: Oglejte si risbo DWG ali DXF v 3D
summary: Preklopite model risbe na 3D, da vidite kote, debelino, 3D ploskve, mreže in bloke, se vrtite okoli njih, kliknete predmet in si ogledate njegove lastnosti ter vidite, kaj še ni narisano.
keywords: 3d, dwg, dxf, risba, prostor modela, vrtenje, prerez, rez, odrezovanje, izbor, izberi, lastnosti, atributi, ročaj, kota, debelina, iztiskanje, 3dface, polyface, mreža, 3d polilinija, bloki, pogledi, perspektiva, vzporedno, obseg, acis, telesa
from: a0c6cd17
---

## Kaj boste naredili

Oglejte si model risbe v 3D. Črte in polilinije so na svojih pravih višinah, predmeti z debelino stojijo kot stene, 3D ploskve, mreže in 3D bloki pa so prikazani kot površine, okoli katerih se lahko vrtite. Listi ostanejo 2D.

## Koraki

1. Odprite DWG ali DXF. Glejte [Ogled risbe DWG ali DXF](topic:view-dwg). Odpre se v 3D, razen če {{ui:Nastavitve}} › {{ui:BimCraft}} › **Risbe se odprejo v** pravi {{ui:Model (2D)}}.
2. Iz 2D kliknite {{ui:3D}} v vrstici nad risbo ali pritisnite {{key:3}}.
3. Prvič počakajte trenutek: vrstica stanja pove »Gradnja risbe v 3D …«, nato pa, koliko črt in ploskev prikazuje.
4. Vrtite, pomikajte in povečujte (glejte spodnjo tabelo).
5. Kliknite pogled v drugi vrstici: {{ui:Iso}}, {{ui:Zgoraj}}, {{ui:Spodaj}}, {{ui:Spredaj}}, {{ui:Zadaj}}, {{ui:Levo}} ali {{ui:Desno}}.
6. Kliknite {{ui:Perspektiva}}, da preklopite med perspektivnim in vzporednim pogledom.
7. Kliknite {{ui:Obseg}} ali pritisnite {{key:F}}, da znova vidite celotno risbo.
8. Ponovno kliknite {{ui:3D}}, pritisnite {{key:3}} ali kliknite {{ui:Model}} ali zavihek lista, da se vrnete v 2D.

## Kaj bi morali videti

- Prostor modela v 3D, Z navzgor, v barvah same risbe. Ploskve so za odtenek svetlejše od svojih robov.
- Sloji, ki jih izklopite v {{ui:Sloji}}, izginejo tudi iz pogleda 3D.
- Na desni: število črt in ploskev, velikost risbe v X, Y in Z ter **Samo v 2D pogledu** in **Še ni narisano**.

## Odrežite z ravnino prereza

Kliknite {{ui:Prerez}} na vrstici 3D ali pritisnite {{key:X}}. Vrstica pod njo deluje enako kot pri modelih IFC (glejte [Odrezovanje modela IFC z ravnino prereza](topic:section-plane)): odrežite od {{ui:Zgoraj}}, {{ui:Spredaj}} ali {{ui:Bok}}, povlecite ali vpišite odmik – tu v enotah same risbe – in {{ui:Obrni}}, da obdržite drugo stran. Kar ravnina odreže, ni mogoče izbrati. Vrnitev v 2D odstrani rez.

## Oglejte si lastnosti predmeta

Kliknite predmet v pogledu 3D. Dobi barvo izbora, {{ui:Lastnosti}} pa prikažejo, kaj datoteka o njem pove: njegov tip, sloj, barvo, tip črte in ročaj, nato njegove lastne podatke, kot so začetek, konec in dolžina črte, središče in polmer kroga, oglišča 3D ploskve ali blok sklica, njegov blok, vstavitvena točka, merilo, zasuk in vrednosti atributov.

- Sklic na blok se izbere kot celota, vključno z blokoma, vgnezdenima vanj.
- Klik nekaj slikovnih točk od črte izbere črto.
- Držite {{key:Mod}} in kliknite, da izberete več predmetov ali enega odstranite iz izbora; {{ui:Lastnosti}} jih nato štejejo po tipu.
- {{key:Esc}} ali klik na prazen prostor počisti izbor.
- Predmetov na slojih, ki ste jih izklopili, ni mogoče izbrati.

## Premikanje

:::mouse
| Za | Naredite tako |
|---|---|
| Vrtenje | Povlecite s srednjim gumbom ali z levim gumbom |
| Pomik | Povlecite z desnim gumbom ali držite {{key:Shift}} in povlecite |
| Povečava | Pomikajte kolesce; povečuje proti tistemu, kar je pod kazalcem |
| Poglejte vse | {{ui:Obseg}} ali {{key:F}} |
| Pogled z ene strani | Kliknite ploskev, rob ali oglišče kocke pogleda v spodnjem desnem kotu |
:::

Kocko pogleda je mogoče v {{ui:Nastavitve}} zamenjati z ikono osi ali skriti. Glejte [Nastavitve BimCraft](topic:settings).

:::mac mouse
Na sledilni ploščici se vrtite z dvema prstoma, pomikajte tako, da držite {{key:Shift}} in podrsate, povečujte pa s stiskanjem.
:::

:::touch
Z enim prstom se vrtite. Z dvema prstoma stisnite za povečavo, premaknite ju skupaj za pomik.
:::

## Kaj je narisano v 3D

| V risbi | V 3D |
|---|---|
| Črte, 3D polilinije | Na svojih pravih višinah |
| Polilinije, krogi, loki, elipse | V svoji ravnini, na svoji koti, nagnjene, kadar jih risba nagne |
| Debelina na črtah, polilinijah, krogih in lokih | Stene te višine; krogi so zaprti zgoraj in spodaj |
| 3D ploskve, poligonske mreže, mreže mnogokotnikov | Senčene površine z vidnimi robovi |
| Bloki | Postavljeni, zasukani in spremenjeni v merilu v 3D, tudi vgnezdeni bloki |
| Šrafure | Njihovi obrisi |
| Navadne 2D linije | Ploske, tam, kjer so bile narisane |

## Samo v 2D pogledu

Besedilo, večvrstično besedilo in vidni atributi blokov so narisani v 3D, v svoji ravnini in na svoji višini, klik nanje pa jih izbere. Široke polilinije prikažejo svojo širino kot ravni pas. Večkratne vodilke, slike in vzorci šrafur se štejejo pod **Samo v 2D pogledu**: oglejte si jih na zavihku {{ui:Model}} ali na listih.

## Še ni narisano

Telesa in površine, shranjene kot telesa ACIS (3D telesa, telesa, področja in površine), ter mreže s podrazdelitvijo so navedene pod **Še ni narisano** s številom. Preskočijo se, ne ugibajo se.

## Pogoste napake

- **Vse je videti ravno.** Risba je 2D: njene črte nimajo višine. Kliknite {{ui:Spredaj}}, da preverite; ravna risba se prikaže kot črta.
- **Model z telesi ne prikaže ničesar.** Telesa, ustvarjena z modelirnikom teles, so telesa ACIS in so navedena pod **Še ni narisano**. Izvozite model kot IFC ali kot 3D ploskve iz programa, ki ga je ustvaril.
- **Risba je majhna gruča na sredini.** Nekaj daleč v prostoru modela, na primer stara kopija tlorisa, poveča obseg. Z kolescem povečajte tam, kjer želite pogledati.

## Naprej

- [Delo s sloji in listi](topic:dwg-layers-sheets)
- [Odrezovanje modela IFC z ravnino prereza](topic:section-plane)
