---
title: Kép elhelyezése az alaprajz alatt
summary: Helyezzen el PNG-, JPEG- vagy WebP-képet (szkennelt alaprajz, vázlat, helyszíni fénykép, légifotó) egy szint alaprajza alatt vagy függőleges síkon, méretezze két pont alapján, mozgassa, forgassa, halványítsa és zárolja, nézze meg 3D-ben és az alaprajz PDF-ben, és tartsa a modell mellett egy csomagban.
keywords: kép, képfájl, háttér, PNG, JPEG, WebP, szkennelés, vázlat, fénykép, légifotó, helyszínrajz, méretarány, átlátszatlanság, zárolás, alátét, nyomkövetés
from: e3c78d1f
---

## Kép elhelyezése

Kapcsolja be a {{ui:Rajzolás}} lehetőséget, lépjen a szintre, és a {{ui:Build}} menüben válassza a {{ui:Kép}} lehetőséget. Ezután a {{ui:Kép beszúrása…}} gombbal válasszon egy PNG-, JPEG- vagy WebP-fájlt. A fájl a böngészőben olvasódik be, és soha nem töltődik fel. Megjelenik az alaprajz alatt, a nézethez igazítva, az eszköztár pedig jelzi, hogy még nincs méretezve. Minden, amit rajzol, a kép fölé kerül.

## Méretarány beállítása

Válassza a {{ui:Méretarány}} lehetőséget, kattintson a képen két pontra, amelyek valós távolságát ismeri (egy fal két vége egy szkennelt alaprajzon, egy méret a vázlaton nyomtatva), majd írja be a távolságot, és nyomja meg az {{key:Enter}} gombot. A kép az első kattintott pont körül nő vagy zsugorodik. Az {{key:Esc}} megszakítja.

## Másolt terület beillesztése

A MarkupCraftban a {{ui:Terület másolása}} a PDF-lap egy részét képként másolja. Visszatérve a BimCraftba, miközben a szint alaprajza látszik, nyomja meg a {{key:Ctrl+V}} billentyűkombinációt (vagy a {{ui:Szerkesztés}} menü {{ui:Beillesztés}} lehetőségét): a terület képként kerül az alaprajzra, középre, ahol a mutató van (vagy a nézet közepén). Ha a lapnak volt rajzléptéke, valós méretében érkezik, így a rajta lévő fal ugyanolyan hosszú lesz, mint a falai. Enélkül papírméretben érkezik, és a {{ui:Méretarány}} elindul, így két pontra kattinthat, és beírhatja a távolságukat. Átlátszatlansága az lesz, amellyel rátétként másolták. Egy visszavonási lépés, és megmarad, mint bármely más kép.

A {{ui:Beillesztés}} azt illeszti be, amit utoljára másolt: egy másolt területet vagy valamit, amit a BimCraftban másolt. A {{key:Ctrl+V}} a vágólapon lévő más PNG-, JPEG- vagy WebP-képet is beilleszt, a {{ui:Kép beszúrása…}} gombnál megszokott módon, és még nincs méretezve. A másolt terület hat órán át marad megjegyezve.

## Mozgatás, forgatás, elhalványítás, zárolás

A {{ui:Mozgatás}} a képen egy alappontot, majd azt a helyet kéri, ahová mozdulnia kell. A {{ui:Forgatás}} fokban megadott szöget vesz fel, a kép közepe körül. Az {{ui:Átlátszatlanság}} elhalványítja, hogy a vonalai jobban kiemelkedjenek. A {{ui:Zárolás}} megakadályozza, hogy a kép rajzolás közben mozogjon; a zárolt kép továbbra is engedi az átlátszatlanság megváltoztatását és az elrejtést. Minden változtatás egy visszavonási lépés.

## Több kép, több szint

A kép ahhoz a szinthez tartozik, amelyre elhelyezték, és ennek a szintnek az alaprajzán és mennyezetterven látszik. Kattintson egy képre a szerkesztéséhez, vagy válassza ki a listából. Az {{ui:Elrejtés}} kikapcsolja anélkül, hogy eltávolítaná; az {{ui:Eltávolítás}} (vagy a {{key:Delete}}) kiveszi a modellből.

## Képek a 3D-nézetben

Minden kép a 3D-nézetben is lapos síkként áll: egy alaprajzi kép a szintjén fekszik, egy függőleges síkú kép a metszővonala fölött áll. A modell fölé rajzolódik úgy, hogy nem takarja el, a modell viszont elrejti a mögötte lévő részét. Az átfedő képek távolság szerint rendeződnek. Az Átlátszatlanság, az Elrejtés, a Zárolás és az Eltávolítás ugyanúgy működik, a {{ui:Megjelenítés 3D-ben}} pedig csak a 3D-nézetben kapcsolja ki az összes síkot. Egy szinten legfeljebb 8 kép lehet, hogy a nézetek gyorsak maradjanak.

## Kép függőleges síkon

A {{ui:Elhelyezés ide}} alatt válassza a {{ui:Függőleges sík (metszővonal)}} lehetőséget, majd a {{ui:Kép beszúrása…}} gombot. Kattintson az alaprajz egy vonalának két végére (a fal síkjának vége magától rögzül), vagy válasszon a {{ui:Metszővonal fölött}} részben egy elnevezett metszővonalat a szinten, és nem kell kattintania. A kép a szinten a vonal fölött áll, a vonal szélességében. A {{ui:Szélesség}}et, a {{ui:A vonal mentén}} helyzetét és a {{ui:Magasság a szint fölött}} értéket beírással állítsa be; a {{ui:Forgatás}} a saját síkjában forgatja. A függőleges kép nem rajzolódik az alaprajz alá; az alaprajz a munka közben mutatja a vonalát. A BimCraftban nincs interaktív 2D-s metszetablak: a metszetek és homlokzatok a rajzlapokon készülnek, és a képek ezekben a lapnézetekben még nem nyomtatódnak ki.

## Nyomtatás

Az alaprajzon a {{ui:Nyomtatási nézet}} a szint képeit a PDF-be írja a rajz alá, méretarányukban, forgatásukkal és átlátszatlanságukkal, a lapra vágva; az elrejtett kép kimarad. A JPEG változatlanul kerül be; a többi képet előbb 200 dpi-re csökkenti a lapon.

## A modell mellett tartva

A kép bájtjai nem íródnak bele az IFC szövegébe. A modell minden képre névvel hivatkozik (például `pictures/<id>.png` alakú IfcDocumentReference), a bájtok pedig a projektcsomagban utaznak. Használja a {{ui:Mentés csomagként…}} lehetőséget (vagy a {{ui:Mentés IFC-ként}} gombot, és azt választva): egyetlen .ccbundle fájlt kap a modellel és a képeivel; az IFC kicsi marad, a szerkesztés gyors. Ha megnyitja a .ccbundle fájlt, a képek visszakerülnek.

Egy sima .ifc fájl nem tud képet tartalmazni anélkül, hogy nagyra nőne. Mentéskor a BimCraft közli, hány kép marad kívüle, és csomagot kínál, vagy egy sima IFC-t, amely a 512 KB-ig terjedő képeket beágyazza, a többit pedig kihagyja. Csomag nélkül megnyitott sima .ifc fájlnál ezek a képek hiányzónak látszanak, és a Problémák felsorolja őket; nyissa meg azt a .ccbundle fájlt, amelybe mentették. Az első verzióval mentett fájlok, amelyekben a kép az IFC-ben volt, továbbra is megnyílnak, és a csomagos mentés kiviszi a képeiket. Hat MB-ig a kép változatlanul marad; a nagyobbat előbb kisebbre méretezi, és erről tájékoztatást kap. Más programok megnyitják a modellt, és figyelmen kívül hagyják a képeket. Egy még nem méretezett képet a Problémák megjegyzésként sorol fel.

## Metszet- és homlokzatlapokon

Függőleges síkon lévő kép (válassza a {{ui:Függőleges}} lehetőséget a képpanelen, és kattintson egy vonal két végére, vagy helyezze el egy elnevezett metszővonal fölé) azokon a lapnézeteken nyomtatódik ki, amelyek egyenesen rá néznek. A metszet azt a képet mutatja, amely a metszővonalán áll, vagy amelyet név szerint a metszővonal fölé helyeztek. A homlokzat minden olyan függőleges képet mutat, amelynek síkja felé néz. A kép a nézet vonalai alatt rajzolódik, a nézet léptékében, a nézetre vágva, és megtartja átlátszatlanságát. A megtekintéséhez nyissa meg a {{ui:Rajzlapok…}} gombot; a rajzlap PDF-je képként tartalmazza. Hátulról nézve a kép tükörképként jelenik meg, ahogy 3D-ben is. Az elrejtett képek kimaradnak.
