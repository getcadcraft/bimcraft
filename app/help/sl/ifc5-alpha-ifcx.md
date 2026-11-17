---
title: Odpiranje in izvoz IFC5 alfa (datoteke IFCX)
summary: Laboratorijska možnost za format datotek IFC5 alfa (.ifcx): odprite datoteko z njenimi sloji, glejte, kaj branje ni moglo preveriti, in izvozite odprte modele. Format se še spreminja, zato najprej preberite.
keywords: ifc5, ifcx, alfa, buildingsmart, json, sloji, shema, laboratorij, količine, qto, izvoz, uvoz
from: cffe1669
---

IFC5 alfa (datoteka s končnico {{ui:.ifcx}}) je format datoteke, ki ga buildingSMART še oblikuje. Ni dokončen: datoteke in naše branje se lahko spremenijo. Zato je to laboratorijska možnost in zato branje pride najprej.

## Vklopite

1. Izberite {{ui:Settings}}, nato razdelek {{ui:IFC5 alpha (IFCX)}} v zavihku BimCraft.
2. Označite {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

Privzeto je izklopljeno. Dokler je izklopljeno, je datoteka .ifcx zavrnjena s stavkom, ki napotuje sem. {{ui:Open IFC5 alpha (.ifcx)…}} in gumb za izvoz {{ui:IFC5 alpha}} se prikažeta, ko je vklopljeno.

## Odpiranje

- Izberite datoteko .ifcx z {{ui:Open a file or folder}} (nadomesti odprti model, po običajnem vprašanju o urejanju), ali
- izberite {{ui:Open IFC5 alpha (.ifcx)…}} in izberite več datotek hkrati: datoteko, njene sloje in datoteke sheme, ki jih uvaža. Če je model že odprt, se datoteka **doda zraven**; x v seznamu modelov jo spet odstrani; to je razveljavitev.

Datoteka IFCX našteje vozlišča (pot, njihove podrejene, kar podedujejo, njihove atribute). Več datotek lahko opiše isto vozlišče: kasnejša datoteka (sloj) prepiše atribute prejšnje, ničelni podrejeni vnos pa odstrani podrejeni element. BimCraft jih sestavi in nariše rezultat kot majhen model IFC4: projekt, teren, stavbo, etaže in elemente z imeni, razredi, lastnostmi, količinami, barvami in mrežami.

Iz omrežja se ne prenese ničesar. Datoteke sheme, ki jih datoteka uvaža (na primer `ifc@v5a.ifcx`), se uporabijo le, če ste jih izbrali skupaj z datoteko; sicer poročilo to pove in atributi se preberejo brez preverjanja tipa.

### Poročilo

Po odpiranju poročilo našteje, kaj je branje našlo: podatke, ki se ne ujemajo s svojo shemo, datoteke sheme, ki niso bile podane, atribute, ki tukaj nimajo pomena IFC. Atributi brez preslikave se **ohranijo** v modelu, ne izpustijo, in se ob izvozu zapišejo nazaj.

## Kaj postane kaj

| V datoteki IFCX | V BimCraft |
|---|---|
| Vozlišče z razredom IFC (projekt, teren, stavba, etaža, stena …) | Ustrezen element IFC4; razred, ki ga to branje ne pozna, postane proxy elementa stavbe |
| Ime, ki ga vozlišče ima pod svojim staršem | Ime elementa |
| Atributi z vrsto količine (Length, Area, Volume, Mass …) | Nabor količin IFC4 z imenom `Qto_IFCX` (količinski nabori IFC4 ostanejo nabori IFC4 `Qto_*`) |
| Drugi atributi lastnosti | Nabor lastnosti z imenom `Pset_IFCX` |
| Atributi mreže in preobrazbe | Trikotniki in postavitev elementa; nevidne mreže se ne rišejo |
| Barva, neprosojnost, material, klasifikacija | Slog površine, material in klasifikacija elementa |

Enote se jemljejo kot metri, z osjo Z navzgor: alfa pravi, da bodo enote kasneje dokumentirane.

## Izvoz

Izberite {{ui:IFC5 alpha}} v orodni vrstici, preberite opombo, nato {{ui:Export .ifcx}}. Datoteka ima našo glavo (avtor CadCraft, različica ifcx_alpha) in sama pove, da je v formatu alfa. Vsak model se zapiše v lastnih koordinatah datoteke, v metrih, z imeni, razredi, nabori lastnosti, količinami (kot atributi z njihovo vrsto), barvami in trikotniki. Sloji in dedovanje se zapišejo sploščeno. Datoteko preverite v programu, ki mu jo pošljete.

## Omejitve

- Ukrivljena geometrija (krivulje, ploskve) se ne bere: samo trikotniške mreže.
- Vrata in okna, vgrajena v steno, so postavljena na etažo; stena, iz katere prihajajo, ni povezana.
- Imena naborov `Qto_*` IFC4 se ohranijo kot skupine atributov naše (`cadcraft::qto::…`); standardna shema alfa ima le nekaj imen količin.
- Format se lahko spremeni pod nami; datoteka, narejena danes, jutri morda ne bo brana.
