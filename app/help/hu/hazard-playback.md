---
title: Árvíz, szél vagy földrengés lejátszása az épületen
summary: Vízemelkedés a helyiségekben, szélnyomás minden szinten, vagy földrengés, amely rázza a szinteket, idősávos csúszkával lejátszva alaprajzon vagy homlokzaton. Egyszerű modellek, a feltételezéseik felsorolva; nem szabványos ellenőrzés és nem szerkezeti tervezés.
keywords: veszély, árvíz, szél, földrengés, szeizmikus, szintenkénti elmozdulás (drift), kilengés (sway), alapnyíróerő, vízszint, éghajlat, forgatókönyv, tengerszint-emelkedés, lejátszás, szint, lengésidő
from: ff0d34d1
---

A {{ui:Veszélyhelyzet lejátszása}} szakasz a bal oldali panelen a megnyitott IFC-modellen játssza le a veszélyt. A modell semmilyen eleme nem változik.

:::warning
Ezek **egyszerű modellek, amelyekkel azt láthatja, mit tesz a veszély ezzel az elrendezéssel**, nem árvízi tanulmány, nem szélszabvány-ellenőrzés és nem szerkezeti tervezés. Minden eredmény felsorolja a feltételezéseit.
:::

## Árvíz

Adja meg a legmagasabb vízszintet a legalacsonyabb padló fölött, valamint azt, hány perc alatt emelkedjen, maradjon és apadjon. A víz azon nyíláson át jut be egy helyiségbe, amelynek küszöbét elérte; a víz szintje alatti nyílásokkal vizes helyiségekhez csatlakozó helyiségek ugyanazon a szinten állnak (kvázi-statikus). A táblázat megadja, mikor és milyen mélyen ázik el az egyes helyiségek először; az alaprajz lejátssza. Írja be, mennyi vizet bír el egy helyiség, és a fölötte lévő helyiségek figyelmeztetést kapnak. **Éghajlati jövő:** töltsön be saját forgatókönyv-fájlt (JSON vagy CSV, évszámmal, tengerszint-emelkedéssel és árvízi tényezővel), és válasszon egy évet. Vagy kapcsolja be az Éghajlati jövő bővítményt, válasszon forgatókönyvet és évet: az árvíz kétszer fut le, a jelenlegi és a jövőbeli egymás mellett (lásd: „Éghajlati jövő: 2050-es és 2080-as árvíz, hőség és erdőtűz”). Az Erdőtűz-kitettség és a Hő: jövőbeli időjárási fájl típusok ugyanebben a listában érhetők el.

## Szél

A nyomás a ½ρV² képlet szerint alakul, a sebesség a magassággal nő. Egy szintre ható erő ez a nyomás, szorozva a lökésfaktorral, a két nyomástényezővel, a szélességgel és a szint magasságával. Megkapja a nyíróerőt, a felborulási nyomatékot és a kilengést.

## Földrengés

Nyírási épület: szintenként egy tömeg (alapterület × kilogramm négyzetméterenként, amelyet Ön ad meg), minden szintben azonos merevség, amelyet az Ön által megadott első lengésidőhöz illesztenek (ha üresen hagyja, szintenként tized másodperc, és ezt ki is írja), csillapítás, valamint egy modellezett talajmozgás (impulzus vagy szűrt zaj) a választott csúcsgyorsulással. Az eredmény szintenkénti elmozdulás (drift), a szintek gyorsulása és az alapnyíróerő; a homlokzat a kilengést játssza le, a valóságosnál nagyobban ábrázolva. Adjon meg egy megengedett elmozdulási arányt: az e fölötti szintek figyelmeztetést kapnak. A számítás rugalmas: semmi sem folyik meg és nem repedezik.

## Szintmerevség az Analysis-keretből

Földrengés vagy szélkilengés esetén a merevség forrásaként válassza az **Analysis-keretet** a lengésidő megadása helyett. Minden szintet sorban oldalirányban kitolnak, a keret (gerendák, oszlopok, merevítések, födémek) megoldódik, és a szintek együttes merevsége hajtja a futást. A tömeg az elemek saját tömege plusz az egyes szintek alaprajzi dobozában megadott, négyzetméterenkénti padlóterhelés. A valódi első lengésidő látszik. A számítás rugalmas: semmi sem folyik meg, és a csavarodás nincs modellezve. Szélnél a szintenkénti erők továbbra is a fent feltételezettek (hatványfüggvényű profil, az Ön lökésfaktora és a rögzített nyomástényezők, nem szélszabvány); csak a kilengést adja a keret, a keret teljes merevségi mátrixát megoldva ezekre az erőkre. A modellhez olyan IFC szükséges, amelyben van az Analysis lap által olvasható keret.

## Mértékegységek

A vízmélységek, a szintenkénti kilengés és elmozdulás, a távolságok és a területek az Ön által választott {{ui:Mértékegységek}} szerint jelennek meg. Az erők (kN), az idők és a gyorsulások a saját mértékegységükön maradnak, a méterben feliratozott mezőbe írt érték pedig méterben marad. Ugyanez vonatkozik a kiürítés, a természetes fény, a fűtés és hűtés, valamint a berendezési eredményekre: a hosszúságok, területek és térfogatok az Ön választását követik; a nyomás, az áramlás, a hőmérséklet, az energia és a teljesítmény soha nem váltódik át.
