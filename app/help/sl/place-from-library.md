---
title: Vstavite opremo in pohištvo iz knjižnice
summary: Poiščite element v Knjižnici, datoteki ali odprti risbi, ga postavite na etažo modela IFC s predogledom duha, ga zasukajte, pripnite na steno in shranite.
keywords: premakni, zasukaj, povleci, knjižnica, librarycraft, vstavi, oprema, pohištvo, blok, družina, element, katalog, vsebina, kcl, csv, gltf, obj, rfa, dwg, vrsta IFC
from: 3dad5d4b
---

## Kaj boste naredili

V model IFC vstavite element knjižnice: umivalnik, delovno mizo, stol. BimCraft ga zapiše kot pravi element IFC s tipom, zato si vsi izvodi istega elementa delijo en nabor geometrije, njegovi podatki, številka elementa in licenca pa potujejo z njim.

## Koraki

1. Odprite model IFC.
2. Kliknite zavihek {{ui:Knjižnica}} ob {{ui:Lastnosti}} na desni ali {{ui:Knjižnica}} v orodni vrstici nad modelom.
3. Izberite vir:
   - **Vgrajeni simboli**: splošni simboli za načrte vodovoda, ki jih BimCraft vključuje pod Apache-2.0 in so na voljo brez povezave. Pred gradnjo preverite njihove dimenzije. Za električne simbole v tlorisu in električne naprave IFC uporabite **{{ui:Zgradba}} › Elektrika**.
   - **Knjižnica**: knjižnica CadCraft na tem spletnem mestu. Javni elementi ne zahtevajo prijave.
   - **Ta datoteka**: bloki odprte risbe DWG ali DXF. Dinamični blok z stanji vidnosti se ponudi enkrat za vsako stanje, poimenovan „Sudomivalnik: dvojna školjka“, vsak pa se nariše samo s predmeti tega stanja.
   - **Datoteke …**: datoteka DWG, DXF, IFC, glTF/GLB, OBJ, RFA ali CSV na vašem računalniku. Prebere se v tem zavihku; nič se ne naloži.
   - **Drugi viri**: druga knjižnica, ki govori isti format vira. Njen naslov dodajte enkrat; shranjen je v tem brskalniku.
4. Poiščite ali izberite kategorijo, nato kliknite kartico. Kartica prikazuje predogled tlorisa, ime, proizvajalca in model, licenco ter različico.
5. Kliknite {{ui:Vstavi v tloris}} (v pogledu Tloris) ali {{ui:Vstavi v model}} (v 3D pogledu). V {{ui:Razdeli}}, kjer se prikazujeta tloris in 3D pogled, je gumb razdeljen: glavno dejanje je {{ui:Vstavi v tloris}}, puščica na njegovem desnem koncu pa odpre meni z {{ui:Vstavi v model}}. Ali povlecite kartico ali sliko v podrobnostih elementa na tloris ali 3D pogled: element se postavi tam, kjer ga spustite. S peresom ali prstom pritisnite in za trenutek držite kartico, nato povlecite.
6. Izberite etažo v vrstici za postavljanje. V 3D pogledu so etaže nad njo med postavljanjem skrite in pogled se obrne na vrh; v tlorisu tloris že prikazuje to etažo. Če izberete {{ui:Vstavi v model}} samo iz tlorisa, se poleg njega prikaže 3D pogled.
7. Premaknite kazalec nad model: prosojna škatla kaže, kam gre element.
8. Pritisnite {{key:R}}, da ga zasukate za 90°. Pritisnite {{key:Tab}} (ali {{ui:Lovljenje zidu}}), da njegov hrbet prisloni na najbližjo steno, obrnjen proti sobi.
9. Kliknite, da ga postavite. Ali vpišite položaj v **X, Y (mm)**, na primer `1200, 3400`, in pritisnite {{key:Enter}}.

Svetilko ali karkoli obešenega od zgoraj: nastavite **Namestitev** na **Ob stropu**. Vrh elementa je nato na spodnji strani stropa nad mestom (ali na višini etaže, kjer stropa ni). Ob načrtu stropa v pogledu tlorisa se **Namestitev** začne pri **Ob stropu**.

10. Odgovorite na eno vprašanje: **številko elementa** (naslednja prosta številka je vpisana samodejno), količino in opombo. Pritisnite {{key:Enter}}.
11. Postavite še, ali pritisnite {{key:Esc}}, da končate.
12. Kliknite {{ui:Shrani kot IFC}}, da prenesete urejeno kopijo.

## Tloris ali model

Gumb za vstavljanje v Knjižnici sledi pogledu, v katerem ste, in se spremeni takoj, ko spremenite pogled (gumbi {{ui:Tloris}}, {{ui:Razdeli}} in {{ui:3D}}, tipkovnica, odpiranje datoteke). Tloris prikazuje en gumb, {{ui:Vstavi v tloris}}; 3D prikazuje en gumb, {{ui:Vstavi v model}}; Razdeli prikazuje razdeljen gumb, z {{ui:Vstavi v tloris}} kot glavnim dejanjem in {{ui:Vstavi v model}} v meniju. Oba načina uporabljata isto vrstico za postavljanje in zapišeta isti element IFC: kazalec za enega deluje v tlorisu, za drugega pa v 3D pogledu. Kadar koli pritisnite {{key:Esc}}, da ustavite.

Povlek kartice nima lastne tipke: razdeljen gumb ali navadni gumb naredi enako s tipkovnico.

## Premaknite ali zasukajte postavljen element

V {{ui:Risanje}} izberite element v tlorisu. Na njegovi vstavitveni točki se prikaže kvadratni ročaj, ob njem pa okrogel ročaj.

- Povlecite element ali njegov kvadratni ročaj, da ga premaknete. Prilepi se kot orodje Stena (konci in ploskve sten); {{key:Shift}} ga ohrani pravokotnega glede na prvotni položaj.
- Povlecite okrogel ročaj, da ga zasukate v korakih po 15°. Za korake po 1° držite {{key:Shift}}.
- Pritisnite {{key:R}}, da ga zasukate za 90°.
- V **Lastnostih** (tudi v 3D pogledu) vpišite **X**, **Y** in **Vrtenje (°)** ali kliknite **Zasukaj za 90°**.

Vsak premik je en korak razveljavitve in se prenese v Live TeamWork. Element ohrani svojo številko elementa, svoje podatke iz knjižnice in višino nad etažo. Še ni izdelano: povlečenje v 3D pogledu.

## Kaj boste videli

- Element v modelu, izbran, z lastnostmi na desni: polje **Element knjižnice** z licenco in navedbo avtorja ter nabori `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` in, za elemente iz označenih risb, `CadCraft_SourceAttributes`.
- „Vstavljeno: *element* (element *n*)“ v seznamu sprememb. {{key:Mod+Z}} razveljavi.
- Statusna vrstica: „Vstavljeno: *element* kot element *n*.“

## Dobro je vedeti

- Nekateri elementi so na voljo v več dimenzijah ali možnostih: kartica ima nato izbiro **Različica**, vstavi pa se tista, ki jo izberete. Glejte [Vstavite in zamenjajte element knjižnice, ki ima različice](topic:library-variants).
- Element brez 3D telesa (2D simbol) se postavi z nadomestno škatlo; ob vprašanju podate njegovo višino.
- Še kopij istega: izberite postavljen element in uporabite {{ui:Kopiraj}} in {{ui:Prilepi}} ali {{key:Mod+D}}. Glejte [Kopirajte, prilepite in podvojite elemente knjižnice](topic:copy-paste).
- Če želite, da se vsako postavljanje začne z vklopljenim lovljenjem na steno, vklopite **Začni z vklopljenim lovljenjem na steno** v [nastavitvah BimCraft](topic:settings).
- Dolžine se pretvorijo v lastne enote modela, kakršnekoli že so.
- **Entourage** (drevesa, grmovnice, ljudje, avtomobili) je prav tako v knjižnici: poiščite „tree“, „person“ ali „car“. Te riše CadCraft (CC0) in ob postavitvi ohranijo svoje barve (deblo rjavo, listje zeleno, okna avtomobila prosojna), v BimCraft in v drugih programih BIM. Prikazani so v [upodobljenih slikah](topic:render).
- V datoteki IFC2X3 je telo zapisano kot ploskovno telo; v IFC4 kot triangulirana množica ploskev. Oboje se odpre v drugih orodjih IFC.
- Risbe (DWG ali DXF) tukaj ni mogoče shraniti, zato se elementi vstavljajo samo v modele IFC. Na risbi uporabite **Ta datoteka**, da vidite, kaj bi postali njeni bloki.

## Elementi v vašem jeziku

Element lahko nosi svoje ime, opis in tip tudi v drugih jezikih. Kadar jih ima v jeziku, na katerega je nastavljen BimCraft (Nastavitve › Splošno › Jezik), njegova stran prikaže te, pod njimi pa ime, ki mu ga je dal proizvajalec. **Vstavi** zapiše ime v vašem jeziku v model, zato ga razpredelnica {{ui:Oprema}} tako prikaže. Element ostane isti element: preverjanje posodobitev in zamenjava potekata po samem elementu, nikoli po imenu. Elementi brez prevoda ohranijo svoje besede.

## Pogoste napake

- **Gumb za vstavljanje manjka.** Model IFC ni odprt. Najprej ga odprite.
- **Duh ne sledi kazalcu.** Kazalec je zunaj območja modela ali pa je ravnina etaže zunaj pogleda. Kliknite {{ui:Zgoraj}}.
- **{{ui:Lovljenje zidu}} pravi, da ni sten.** Etaža nima sten v IFC (nekateri izvozi postavijo stene na drugo etažo). Izberite to etažo ali vpišite X in Y.
- **Elementi iz datoteke so napačne velikosti.** Datoteka nima enot ali ima napačne. V {{ui:Datoteke …}} izberite enote in jo preberite znova.

:::tip
Vstavljanje istega elementa dvakrat deli en tip IFC, zato model s štiridesetimi stoli shrani stol samo enkrat.
:::
