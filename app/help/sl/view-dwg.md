---
title: Ogled risbe DWG ali DXF
summary: Odprite DWG ali DXF, se premikajte po prostoru modela in listih, berite koordinate in vidite, kaj še ni narisano.
keywords: dinamični bloki, stanja vidnosti, dwg, dxf, cad, risba, 2d, ogled, pregledovalnik, pomik, povečava, prostor modela, papirni prostor, postavitev, koordinate, odpri dwg
from: 4db3122a
---

## Kaj boste naredili

Odprite risbo CAD, si jo oglejte v 3D ali 2D, se premikajte po njej, preklapljajte med prostorom modela in njenimi listi ter berite koordinate. BimCraft prikazuje risbe DWG in DXF; ne ureja jih in ne shranjuje. Če jo želite spremeniti, kliknite {{ui:Uredi v CadCraft}} in risba se odpre v risalnem programu CadCraft na novem zavihku.

## Koraki

1. Kliknite {{ui:Izberi datoteko}} ali spustite risbo na stran.
2. Izberite datoteko `.dwg` ali `.dxf`.
3. Počakajte, dokler vrstica stanja ne pokaže „Berem risbo…“. Velike risbe potrebujejo nekaj sekund. Nato pokaže, koliko časa je trajalo branje, „upodabljam…“ med risanjem prve slike in koliko časa je to trajalo.
4. Risba se odpre v 3D, najhitrejšem načinu za prikaz velike risbe (glejte [Ogled risbe DWG ali DXF v 3D](topic:dwg-in-3d)). Kliknite {{ui:Model}} za ploski 2D pogled. Če želite risbe vedno odpirati v 2D, nastavite {{ui:Nastavitve}} › {{ui:BimCraft}} › **Risbe se odprejo v** na {{ui:Model (2D)}}. Risba brez česa v prostoru modela ali brskalnik, ki ne more prikazati 3D, se odpre v 2D.
5. Poglejte zavihke nad risbo: najprej {{ui:Model}}, nato po en zavihek za vsak list v vrstnem redu risbe.
6. Kliknite zavihek lista, da vidite ta list: papir z modelom, prikazanim prek njegovih poglednih oken.
7. Kliknite {{ui:Model}}, da se vrnete v prostor modela.
8. Premaknite kazalec nad risbo in v kotu preberite koordinati X in Y.

## Kaj morate videti

- Risba, prilagojena oknu. Barve sledijo risbi; bele črte (barva 7) se narišejo v barvi črnila teme, bledе barve pa na svetli temi potemnijo, da ostanejo berljive.
- Plošča {{ui:Risba}} na levi: datoteka, velikost, oblika (na primer „AutoCAD 2018 (AC1032)“), enote, števila elementov in plasti, število listov ter povezane risbe in oprema, če jih je.
- Seznam {{ui:Sloji}} na levi.
- Na desni: kako se premikati, povezane risbe in slike ter **Še ni narisano**.

## Premikanje

:::mouse
| Za | Naredite tako |
|---|---|
| Pomik | Povlecite s katerim koli gumbom miške |
| Povečava | Pomaknite kolesce; točka pod kazalcem ostane na mestu |
| Prilagodi | Dvokliknite, pritisnite {{key:F}} ali kliknite {{ui:Prilagodi}} |
:::

:::mac mouse
Na sledilni ploščici pomikanje z dvema prstoma **povečuje**, ne premika. Stiskanje prav tako povečuje. Za pomik kliknite in povlecite.
:::

:::touch
Povlecite z enim prstom za pomik. Povečava s stiskanjem za risbe še ni izdelana: tapnite {{ui:Prilagodi}}, da vidite celoten list, za povečavo pa uporabite miško ali sledilno ploščico.
:::

## Dinamični bloki

Dinamični blok je narisan tako, kot ga prikazuje risba: vsak postavljen blok v stanju vidnosti, v katerem je bila risba shranjena („Tloris“ ali „Pogled spredaj“, „Ena školjka“ ali „Dvojna školjka“). Na desni **Dinamični bloki** našteje vsakega, postavljenega v prostoru modela: koliko jih je postavljenih, stanja, ki jih kažejo, in vsako stanje, ki ga blok ima. V {{ui:3D}} kliknite postavljen blok, da v Lastnostih vidite **Dinamični blok**, **Prikazano stanje** in **Druga stanja**. BimCraft stanj ne preklaplja.

## Še ni narisano

Nekateri deli risbe v tej različici še niso narisani. Štejejo se pod **Še ni narisano** na desni („Ti deli risbe se zaenkrat preskočijo in niso ugibani.“), da veste, da nekaj manjka. Črte, polilinije, loki, krožnice, elipse, zlepki, šrafure in polna polnila, besedilo in večvrstično besedilo, bloki z atributi, kote, vodilke in večkratne vodilke, tabele, slike ter pogledna okna so narisani. Ploskve 3D, polimrežaste mreže in poligonske mreže so narisane kot njihovi robovi, gledani od zgoraj; preklopite na {{ui:3D}}, da jih vidite kot površine.

Binarna DXF se ne odpre: BimCraft to pove. Shranite jo znova kot ASCII DXF ali kot DWG iz programa, ki jo je ustvaril.

## Pogoste napake

- **Risba se zdi prazna.** Nekateri sloji so v sami risbi lahko izklopljeni ali zamrznjeni; v {{ui:Sloji}} so na začetku odkljukani. Kliknite {{ui:Vsi vklopljeni}}. Če stanje pravi „*ime* je prazna risba: ne vsebuje črt, besedila ali blokov.“, v njej ni ničesar.
- **List kaže prazen okvir.** List se morda zanaša na povezane risbe. Glejte [Najdite povezane risbe in slike](topic:dwg-linked-files).
- **Besedilo izgleda malo drugače.** BimCraft riše besedilo v ozkem brezserifnem tipu pisave, ne v pisavah risbe, zato je besedilo lahko malo širše ali ožje kot v programu, ki jo je ustvaril.
- **„*ime* ni mogoče prebrati. Morda je poškodovana ali shranjena v obliki, ki je bralnik še ne obravnava.“** Oklepaj na koncu navaja kodo oblike datoteke. Shranite jo iz programa, ki jo je ustvaril, kot starejšo DWG ali kot DXF, in poskusite znova.
- **Pričakujete merjenje, risanje ali urejanje.** BimCraft samo prikazuje risbe. Kliknite {{ui:Uredi v CadCraft}}, da odprete isto datoteko v risalnem programu CadCraft, ki jo ureja in shrani kopijo kot DWG ali DXF. Vaša izvirna datoteka se ne spremeni, povezane risbe pa ostanejo v BimCraft. Gumb se prikaže le tam, kjer je CadCraft odprt za vas.

## Naslednje

- [Ogled risbe DWG ali DXF v 3D](topic:dwg-in-3d)
- [Delo s sloji in listi](topic:dwg-layers-sheets)
- [Preverite risbo v pogledu za tisk](topic:print-view)
