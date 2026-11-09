---
title: Začetek dela z BimCraftom
summary: Kaj BimCraft danes počne, kako odprete prvi model, si ga ogledate v 3D, spremenite eno vrednost in shranite kopijo.
keywords: začetek, prvi zagon, odpri, ifc, rvt, dwg, hitri začetek, uvod, pregledovalnik, bim
from: fc2dea19
---

BimCraft je aplikacija za gradbene modele iz družine CadCraft. V tej različici **odpira, bere in pregleduje** datoteke stavb ter **ureja podatke v modelih IFC**. Elementov še ne riše in ne modelira. Razmišljajte o njem kot o pregledovalniku in preverjalniku modelov, ki vam omogoča tudi popravljanje imen, oznak in vrednosti lastnosti v datoteki IFC.

Odpre:

| Datoteka | Kaj dobite |
|---|---|
| IFC (`.ifc`) | Celoten model v 3D: vrtenje, etaže, lastnosti elementov in urejanje imen ter vrednosti lastnosti |
| Datoteke projektov in družin (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartico datoteke: različica, v kateri je bila shranjena, podatke o projektu, predogledno sliko in povezane datoteke. Brez 3D. |
| DWG in DXF | Risbo v 2D: prostor modela in vsak list, sloje, povezane risbe, pogled tiska in razpored opreme za označene risbe gostinske opreme |
| Mapa projekta | Poročilo o vsakem modelu v mapi: varnostne kopije, povezave, poškodovane kopije in predlog, s katero datoteko začeti |

Vse se dogaja v vašem brskalniku, na vašem računalniku. **Nič se ne naloži.** Podrobnosti najdete v [Datoteke, ki jih BimCraft odpre in shrani](topic:files).

## Odprite BimCraft

1. Odprite BimCraft v sodobnem brskalniku. Chrome, Edge, Firefox in Safari vsi delujejo; [Brskalniki, naprave in pomnilnik](topic:platforms) navaja razlike.
2. Počakajte na prazen zaslon, na katerem piše „Odprite model stavbe.“

:::note
BimCraft deluje v brskalniku in na namizju znotraj CadCraft Studia, skupaj z drugimi aplikacijami. Shranjevanje v oblak še ni na voljo: datoteke odprete z računalnika in kopije shranite nazaj nanj.
:::

## Odprite svoj prvi model

Najhitreje vidite, kaj BimCraft počne, z datoteko IFC.

1. Kliknite {{ui:Izberi datoteko}} na sredini zaslona.
2. Izberite datoteko `.ifc` v {{pick:mac=Finder|windows=File Explorer|linux=upravitelju datotek}} in potrdite.
3. Počakajte, medtem ko vrstica stanja na dnu zaslona prikazuje „Zaganjanje pogona IFC…“, nato „Gradnja geometrije“.

Na sredini vidite model v 3D, na levi okence {{ui:Datoteka}} in seznam {{ui:Etaže}}, na desni pa prazno okence {{ui:Lastnosti}}. Vrstica stanja se konča z „Odprto“ in številom elementov.

:::tip
Datoteko lahko tudi povlečete iz {{pick:mac=Finder|windows=File Explorer|linux=upravitelja datotek}} naravnost na stran. Med vlečenjem zaslon prikaže „Spustite za odpiranje“.
:::

:::offline
Pogon IFC se prvič, ko odprete model IFC, naloži s spletnega mesta, razen če je bil BimCraft shranjen za delo brez povezave. Risbe DWG in DXF, datoteke projektov in mape ne potrebujejo ničesar dodatnega: njihovi bralniki so del aplikacije. Če gumb v vrstici aplikacije pravi {{ui:Pripravljeno za delo brez povezave}}, se vse odpre brez povezave. Če ne, modeli IFC ne bodo odprti, dokler znova ne vzpostavite povezave, razen če je bil že odprt v tem zavihku. Glejte [Na spletu in brez povezave](topic:online-offline).
:::

:::online
Greste nekam, kjer ni povezave? V vrstici aplikacije kliknite {{ui:Shrani za delo brez povezave}} in počakajte na {{ui:Pripravljeno za delo brez povezave}}. Shranjena kopija (približno 11 MB) vključuje pogon IFC. Glejte [Delo brez povezave](common:offline).
:::

## Oglejte si model

:::mouse
1. Povlecite z levo tipko miške, da krožite okoli modela.
2. Z kolescem pomikajte za povečavo.
3. Povlecite z desno tipko miške za pomik. Na sledilni ploščici Mac držite {{key:Shift}} in povlecite.
4. Pritisnite {{key:F}} ali kliknite {{ui:Prilagodi}}, da znova vidite ves model.
:::

:::touch
1. Povlecite z enim prstom za kroženje.
2. Stisnite z dvema prstoma za povečavo, premaknite dva prsta skupaj za pomik.
3. Tapnite {{ui:Prilagodi}}, da znova vidite ves model.
:::

## Naredite eno pravo stvar: popravite oznako

1. Kliknite steno, vrata ali kateri koli element v modelu. Obarva se modro, njegove lastnosti pa se prikažejo na desni.
2. V okencu {{ui:Lastnosti}} kliknite vrednost ob **Tag** (Oznaka).
3. Vnesite novo oznako in pritisnite {{key:Enter}}.
4. Oglejte si odsek {{ui:Spremembe}}, ki se je odprl na levi: vaša sprememba je navedena s staro in novo vrednostjo.

## Shranite kopijo

1. Kliknite {{ui:Shrani kot IFC}} v odseku {{ui:Spremembe}} ali pritisnite {{key:Mod+S}}.
2. Novo datoteko poiščite v mapi za prenose. Poimenovana je po izvirniku z dodanim „ (edited)“, na primer `Clinic (edited).ifc`.

Vaša izvirna datoteka se nikoli ne spremeni. [Spreminjanje lastnosti IFC in shranjevanje urejene kopije](topic:edit-ifc-properties) podrobno razlaga urejanje.

## Kam naprej

- [Zaslon BimCraft](topic:workspace): vsako okence po imenu.
- [Prihod iz drugih programov za BIM in risanje](topic:coming-from): kaj se zdi drugače, če ste vajeni Revita.
- [Odpiranje celotne mape projekta](topic:open-project-folder): usmerite BimCraft v mapo projekta in naj razvrsti datoteke.
- [Ogled risbe DWG ali DXF](topic:view-dwg): listi, sloji in pogled tiska.
