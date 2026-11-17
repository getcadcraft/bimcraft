---
title: Spremenite steno, vrata ali okno
summary: Kliknite narisano steno, vrata ali okno in spremenite njen tip, velikost, višino ali mesto v **Lastnosti** ali ga povlecite v tlorisu; vsaka sprememba je en korak razveljavitve.
keywords: poravnaj pravokotno, kvadrat, 90, pravi kot, poševno, kot, ortogonalno, velikost prostora, notranja stran, zunanja stran, meri od, razdalja premika, vnesena razdalja, ukrivljeno, lok, višina loka, polmer, linija lokacije, poravnava, spremeni, uredi, lastnosti, tip stene, debelina, dolžina, višina, odmik od osnove, vrh, etaža, obrni, zunaj, velikost vrat, velikost okna, parapet, razdalja, premakni, ročica, povleci, spremeni tip, več
from: 63052d5d
---

## Kaj boste naredili

Spremenite, kar ste narisali: izberite steno, vrata ali okno, nato vnesite novo število v **Lastnosti** ali ga povlecite v tlorisu. Tloris in 3D pogled sledita, stiki se spet povežejo, vrata in okna pa ostanejo v svojih stenah.

## Spremenite steno

1. Ko sta {{ui:Draw}} in {{ui:Select}} vklopljena, kliknite steno v tlorisu (ali v 3D pogledu).
2. **Lastnosti** prikažejo polje s številkami stene. Spremenite eno in pritisnite {{key:Enter}}:
   - **Tip stene**: drug od začetnih tipov. Debelina in plasti se spremenijo z njim.
   - **Debelina**: poljubna debelina. Tip ohrani svoje druge plasti, njegova glavna plast (lege ali blok) pa prevzame razliko, na primer „Zunanja 2×6, 200 mm“.
   - **Meri od**: **Središčnica**, **Notranja stran** ali **Zunanja stran**. **Dolžina** in **Velikost prostora** se preberejo in nastavijo od tu. Zunanja stran je tisto, kar kažejo kote tlorisa.
   - **Dolžina**: konec stene se premakne vzdolž svoje črte. Stena, pridružena na tem koncu, se premakne pravokotno na samo sebe in ohrani svoj kot.
   - **Velikost prostora** (kadar je preko prostora vzporedna stena): vnesite želeno velikost. Ta stena se premakne pravokotno, pridružene stene se raztegnejo, da sledijo.
   - **Premakni pravokotno**: vnesite, za koliko naj se stena premakne pravokotno na samo sebe: navadno število jo premakne navzven, število z minusom navznoter.
   - **Kot do pridružene stene**: kot do stene, pridružene na njenem začetku. Vnesite 90, da jo nastavite pravokotno. Stena, pridružena nikomur, prikaže **Smer** v stopinjah od vzhoda.
   - {{ui:Square up}}: obrne stene, povezane s to, nazaj v pravi kot, vzdolž smeri, v kateri teče večina njihove dolžine. Deluje na celotnem povezanem prostoru ali postavitvi, ne glede na to, katero steno izberete. Stena, ki je več kot 10 stopinj izven pravega kota, ostane kakršna je, zato je stena pod 45 stopinj varna. Ena {{ui:Undo}} vse povrne.
   - **Višina stene**: **Do etaže nad njo** sledi tej etaži, **Do etaže 3** (in katere koli višje etaže) naredi steno, ki teče skozi vmesne etaže; vnos višine nato nastavi, kako daleč pod ali nad to etažo je vrh. **Fiksna višina** ohrani število, ki ga vnesete. **Teče skozi** našteje etaže, skozi katere taka stena gre: v njihovih tlorisih je narisana svetleje, prostori tam se stikajo ob njej, vrata in okna pa je mogoče vanjo postaviti iz teh tlorisov. Premakne se in preoblikuje se na etaži, na kateri se začne.
   - **Odmik od osnove**: kako visoko nad etažo se stena začne. Njen vrh ostane, kjer je bil.
   - **Zunaj**: {{ui:Flip}} postavi zunanje plasti na drugo stran.
   - **Linija lokacije**: **Središčnica**, **Zunanja stran**, **Notranja stran**, **Leva stran** ali **Desna stran**. Sprememba ničesar ne premakne. Kasneje, ko stena postane debelejša (po tipu ali **Debelina**) ali se njena zunanjost obrne, linija lokacije ostane na mestu in stena raste ali se obrne okoli nje. Ravna stena, ki se ob njej stika v kotu, sledi, tako da se kot še vedno zapre. Linija lokacije izbrane stene je v tlorisu narisana črtkano. Izberite več sten, da jo nastavite za vse.
   - **Višina loka** (ukrivljene stene): kako daleč se sredina upogne od ravne črte. 0 naredi ravno steno; negativna vrednost jo upogne na drugo stran. Polmer se prikaže poleg nje.
3. Vsaka sprememba je en korak v **Spremembe**; {{ui:Undo}} jo povrne.

## Povlecite steno v tlorisu

Ko je izbrana ena stena, prikaže tri ročice: kvadrat na vsakem koncu in krog na sredini.

- Povlecite konec, da stena postane daljša, krajša ali se zavrti. Pripenja se kot orodje Stena in se pravokotno pritrdi na steno, pridruženo na njenem drugem koncu, ko ste znotraj 3 stopinj; {{key:Shift}} jo drži na osi tlorisa.
- Stene, pridružene na konec, ki ga vlečete, ohranijo svoj kot: njihovi konci drsijo vzdolž svojih črt, dokler se ne srečajo z novo črto stene, zato nič ni nagnjeno. Držite {{key:Mod}} za prosto vlečenje (konec pridružene stene sledi vašemu in ta stena se zavrti) ali {{key:Alt}}, da na tej steni prekinete stike.
- Povlecite sredino, da celotno steno premaknete pravokotno na samo sebe, ne glede na smer vlečenja. Njeni vogali drsijo vzdolž pridruženih sten, zato te ohranijo svoj kot.
- Med vlečenjem sredine držite {{key:Mod}} za prosto premikanje, kadar res želite prekiniti kot. {{ui:Square up}} ga povrne.
- Medtem ko je ročica držana, vnesite razdaljo in pritisnite {{key:Enter}} (ali spustite): stena gre točno toliko, na način, kot ste vlekli. {{key:Esc}} premik opusti.
- Izbrana ukrivljena stena prikaže ročice na koncih in okroglo ročico na sredini loka. Povlecite okroglo ročico, da jo upognete.
- Vrata in okna ostanejo v steni. Stena, ki je prekratka za to, kar drži, je zavrnjena s sporočilom „Ne prilega se v to steno.“

## Spremenite vrata ali okno

1. Kliknite vrata ali okno v tlorisu.
2. V **Lastnosti**: **Tip** (druga vrata ali okno iste vrste), **Širina**, **Višina**, **Parapet** (okna), **Od začetka** in **Od konca** (razdalja od vsakega konca lica stene do njegovega roba), **Tečaji** {{ui:Flip}} (vrata z enim krilom in okna z odpiranjem na krilo; drsna, žepna, hlevska in harmonika vrata namesto tega pišejo **Odpira se v**; fiksna, obešena in slikovna okna ter dvokrilna vrata jih nimajo), in **Smer odpiranja** (vrata) ali **Stran okvirja** (okna) {{ui:Flip}}.
3. Ali jih povlecite vzdolž njihove stene ali na drugo steno: glejte [Vrata in okna](topic:doors-and-windows).

## Spremenite več naenkrat

Izberite več sten (ali več vrat ali oken) s {{key:Shift}}+klikom ali {{key:Mod}}+klikom. **Lastnosti** ponudijo, kar imajo skupnega: **Spremeni tip…**, višino, velikost. Ena sprememba nastavi vse, en korak {{ui:Undo}} pa povrne vse.

## Dobro je vedeti

- Števila se prikažejo v {{ui:Units}}, izbranih na orodni vrstici.
- Stene, vrata in okna iz drugih programov prikazujejo svoje podatke IFC v **Lastnosti** kot prej, brez tega polja.
