---
title: Projektcsomag megnyitása
summary: A projektcsomag egyetlen zip-fájl egy modellel, a nézeteivel, elrendezéseivel és tulajdonságcsoportjaival. Nyissa meg, jelenítsen meg egy nézetet a szintjével és rétegeivel, nyisson meg egy elrendezést, és tekintse meg a tulajdonságokat a projekt saját csoportjaiban.
keywords: csomag, projektcsomag, ccbundle, zip, nézetek, nézettérkép, elrendezések, elrendezéskönyv, rétegkombináció, tulajdonságcsoportok, szabványok, pln, sablon
from: b5b86e8f
---

## Mit fog tenni

Nyisson meg egy **projektcsomagot** (`.ccbundle.zip`), és dolgozzon a projekttel úgy, ahogy szervezve volt: a nézeteivel, elrendezéseivel és tulajdonságcsoportjaival a modell fölött.

A csomag tartalma:

- a modell IFC-ként,
- az elrendezések PDF- és DWG-formátumban,
- lista arról, amit az IFC nem tartalmaz: a nézetek (mindegyik a szintjével, rétegkombinációjával és méretarányával), az elrendezések és az azokon elhelyezett rajzok, a tulajdonságdefiníciók a csoportjaikban, az osztályozások, valamint a szabványok, például a rétegek, tollkészletek, vonaltípusok, kitöltések, felületek és összetett elemek.

A csomagokat egy nyílt forráskódú szkript készíti, amely az Archicadben fut, és magától az Archicadtől kéri ezeket a listákat. A BimCraft soha nem olvassa közvetlenül a `.pln` vagy `.tpl` fájlokat; lásd: [.pln és .pla projektfájlok megnyitása](topic:pln-project-files).

## Csomag készítése

A szkript előzetes verzió: még nem próbálták ki minden Archicad-verzión. Szerezze be innen: [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Archicad 24 vagy újabb verzióra és Python 3.8 vagy újabb verzióra van szükség; más telepítendő nincs.

1. Mentse az `archicad_bundle.py` fájlt egy mappába, például a `C:\cc-bundle` mappába.
2. Az Archicadben nyissa meg a projektet, és hozzon létre egy pontosan **CadCraft bundle** nevű kiadókészletet: a 3D-nézet IFC-ként, minden elrendezés PDF-ként, és minden elrendezés még egyszer DWG-ként, egy lapos mappába, fájlokként a lemezre közzétéve.
3. A projekt megnyitása mellett futtassa egyszer a `python archicad_bundle.py --probe --out .` parancsot. Ez csak olvas, és a `probe.json` fájlt írja.
4. Futtassa a `python archicad_bundle.py --out . --translator "IFC4 Reference View"` parancsot, a kiválasztott IFC-fordítót használva. Az Archicad közzéteszi a készletet, a szkript pedig megírja a `<project>.ccbundle.zip` fájlt.

Ha a közzététel a szkripten keresztül nem sikerül, tegye közzé a készletet kézzel, és futtassa a `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` parancsot. A tároló README-je tartalmazza az összes kapcsolót. Ha valami hiányzik a csomagból, nyisson hibajegyet ott, és csatolja a `probe.json` fájlt.

## Csomag megnyitása

1. Kattintson a {{ui:Fájl kiválasztása}} gombra, vagy húzza a `.ccbundle.zip` fájlt a BimCraftra. Ha a {{ui:Mappa megnyitása}} gombbal megnyitott mappában van, a csomagok a **Projektcsomagok** alatt jelennek meg; kattintson a nevére.
2. A modell úgy nyílik meg, mint bármely IFC-fájl, és a bal oldalon, a fájl adatai alatt megjelenik a **Projektcsomag** szakasz.

Semmi sem töltődik fel: a csomag a számítógépén olvasódik, egyszerre egy fájlt, így a nagy modell nem másolódik kétszer.

## Nézet megjelenítése

A **Nézetek** alatt a nézetek a projektben lévő mappáik szerint vannak csoportosítva. Kattintson a nézet nevére:

- **Alaprajz** csak a saját szintjét mutatja, felülnézetből.
- **A rétegkombinációja** elrejti azokat az elemeket, amelyeket az adott kombináció elrejt. Az állapotsor megmondja, hány elemet rejtett el.
- **A méretaránya** a név mellett és az állapotsorban látható.
- **3D-nézet** minden szintet megmutat.

Az összes újbóli megjelenítéséhez használja a {{ui:Megjelenítés}} részben az {{ui:Összes megjelenítése}} gombot, és jelöljön be minden szintet.

:::note
A BimCraft a rétegeket az IFC-fájl rétegkiosztásain keresztül találja meg. Ha az IFC-t ezek nélkül exportálták, egy rétegkombináció nem rejt el semmit, és az állapotsor 0 elem elrejtését mutatja.
:::

## Elrendezés megnyitása

Az **Elrendezések** alatt minden elrendezés megmutatja a sorszámát, nevét, papírméretét és a rajta elhelyezett nézeteket.

- **PDF** elmenti az elrendezés PDF-jét a csomagból.
- **DWG** megnyitja az elrendezés rajzát a 2D nézetben. Bármely nézetre kattintva visszajut a modellhez.
- **Megnyitás itt: …** elküldi az elrendezés fájlját az azon dolgozó alkalmazásnak, új lapon: a PDF-et a MarkupCraftnak, a DWG-t a CadCraftnak. Csak akkor jelenik meg, ha az az alkalmazás a BimCraft mellett nyitva van. A fájl a lap betöltése közben olvasódik ki a csomagból, és semmi sem töltődik fel.

Ha egyik sincs, a **Nincs fájl a csomagban** felirat jelenik meg.

## Tulajdonságok megtekintése a projekt csoportjaiban

Válasszon ki egy elemet. A **Tulajdonságcsoportok** a projekt által meghatározott csoportok alatt mutatja a tulajdonságait. Az IFC-hez a definíció által megadott tulajdonságkészlet és név alapján párosítja őket, egyébként a nevük alapján. A többi a szokásos módon a {{ui:Tulajdonságok}} alatt marad. A **Tulajdonságdefiníciók** felsorolja az összes definíciót a csoportjukkal, típusukkal és IFC-nevükkel.

## Szabványok és megjegyzések

- A **Szabványok** megszámolja a csomagban lévő rétegeket, rétegkombinációkat, tollkészleteket, vonaltípusokat, kitöltéseket, felületeket, összetett elemeket és anyagokat.
- A **Megjegyzések** felsorolja azt, amit a szkript nem tudott lekérni az Archicad adott verziójából, minden olyan mezőt, amelyet a BimCraft nem tudott olvasni, és minden olyan fájlt, amelyet a csomag megnevez, de nem tartalmaz.

## Hibaelhárítás

- **„… zip-fájl, de nem projektcsomag.”** A zipben nincs `manifest.json`. Csomagolja ki, és nyissa meg benne az `.ifc` fájlt.
- **„… újabb projektcsomag, mint amit ez a BimCraft olvas.”** Frissítse a BimCraftot.
- **„… nem tartalmazza a modellt, amelyet a manifestje megnevez.”** A zip csonka lett, vagy szerkesztették. Készítse el újra a csomagot.
- **Egy nézet minden szintet mutat.** A szintje nincs benne a modell IFC-fájljában (az állapotsor ezt írja). Ellenőrizze, hogy az IFC-export tartalmazta-e azt a szintet.

Lásd még: [Kapcsolódás két BIM-program között](topic:two-bim-programs) és [A BimCraft mit olvas az egyes formátumokból](topic:file-formats).
