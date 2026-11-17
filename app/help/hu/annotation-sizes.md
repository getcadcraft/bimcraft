---
title: Rajzolás valódi méretben, jelölés léptékkel
summary: Az épület mindig valódi méretben rajzolódik. A szöveg, a méretek, a címkék, a helyiségnevek, a rácsjelölők és a szimbólumok a papíron, a nyomtatott milliméterekben méreteződnek, és ezt a méretet megtartják, amikor a rajz léptéke 1:100-ról 1:50-re változik.
keywords: jelölés léptéke, jelölés, szöveg mérete, szövegmagasság, papírmagasság, méretszöveg mérete, címke mérete, helyiségnév mérete, rácsjelölő, szimbólum mérete, rajz léptéke, 1:50, 1:100, irodai szabvány, felirat, rajzolás 1:1, valódi méret, rajzlap szövege
from: 94118788
---

## Mit fog csinálni

Állítsa be, milyen magas a rajzai felirata papíron, egyszer az épületre. A modellt soha nem méretezi át, és a szöveget sem méretezi át léptékhez igazítva: a BimCraft a papírmagasságból és a rajz léptékéből számolja ki a méretet.

## Működés

- A modell valódi méretű. Egy 10 m hosszú fal minden léptéknél 10 000 mm hosszú.
- A jelölésnek van **papírmagassága**: a nyomtatott lapon egy nagybetű magassága milliméterben.
- 1:100-as léptéknél a 2,5 mm-es szöveg a modellben 250 mm magas; 1:50-nél 125 mm. Papíron mindkét esetben 2,5 mm.
- A síkbeli szimbólumok (elektromos, vízvezeték) papíron milliméterben vannak rajzolva, és ugyanezt a szabályt követik.

## Lépések

1. Nyissa meg a projektböngészőt. A {{ui:Rajzlapok}} alatt kattintson a {{ui:Jelölések méretei…}} gombra.
2. Írjon be egy magasságot milliméterben azokhoz a fajtákhoz, amelyeket be szeretne állítani: {{ui:Megjegyzések és feliratok}}, {{ui:Méretszöveg}}, {{ui:Címkék és szintnevek}}, {{ui:Helyiségnevek}}, {{ui:Rácsjelölő betűk}}, {{ui:Nézetcímek a rajzlapokon}} és {{ui:Kimutatás szövege}}. Az üres mező megtartja a BimCraft saját méretét, amely szürkén látszik.
3. Kattintson a {{ui:Mentés}} gombra. Ez egy lépés, amelyet visszavonhat.

Minden rajzlap, a rajzkészlet, a síkrajz PDF-je, valamint a homlokzatok és metszetek a mostantól ezeket a méreteket használják. A méretvonal és a hozzá tartozó szöveg közötti hézag, a rácsjelölő mérete és a kimutatási sor magassága a szöveggel együtt nő.

## Léptékkel rendelkező alaprajz

Adjon egy alaprajznak saját léptéket a nézettartományában ({{ui:Méretarány}}; lásd [Nézetek és rajzlapok](topic:views-and-sheets)). Ekkor:

- a képernyőn a helyiségnevek, címkék, méretszövegek és rácsjelölők nyomtatott méretükben jelennek meg a modellhez képest, így azt látja, amit a lap majd mutat;
- az alaprajzi szimbólumok és címkéik az adott léptékhez vannak méretezve. Ha 1:100-ról 1:50-re változtatja a léptéket, a modellben fele akkorák lesznek, papíron pedig ugyanakkorák.

Saját léptékkel nem rendelkező alaprajz megtartja a rögzített képernyőszövegét, szimbólumai pedig az 1:50-es léptékhez (1/4" = 1'-0", láb és hüvelyk szerint) vannak méretezve, ahogy eddig is.

## Irodája méretei

Az Alapértelmezett szabályzatok bővítmény bekapcsolásával állítsa be az iroda magasságait a Beállítások › Globális › Alapértelmezett szabályzatok › {{ui:Jelölések mérete papíron}} alatt. Az új épület a létrehozáskor átveszi őket. Már elkezdett épületben a párbeszédpanelen ott a {{ui:Irodám méreteinek használata}}. Lásd: [Alapértelmezett szabályzatok](topic:default-policies).

## Szabályzati csomag méretei

Egy szabályzati csomag megadhatja a helyéhez szükséges szövegmagasságokat (az Épületszabályzatok bővítmény, rajzolási előírások). Jelölje be a csomagot a Beállítások › Épületszabályzatok részben, majd a párbeszédpanelen kattintson a {{ui:Szabályzati csomag méreteinek használata}} gombra: a mezők kitöltődnek, Ön ellenőrzi őket és menti. Ha a csomag pontban adott méretet ad, az betűméret, amelyet a program nagybetű-magassággá alakít át, ezért ellenőrizze. Semmi nem állítódik be, amíg nem menti.

## Amit látnia kell

- Ugyanaz a szövegmagasság milliméterben egy 1:100-as és egy 1:50-es rajzlapon, miközben az alaprajz 1:50-nél kétszer akkora.
- A méretek együtt utaznak az épülettel: az IFC-fájljában mentődnek.

## Tudnivalók

- A BimCraft saját méretei azok, amelyeket a rajzlapjai mindig is használtak (a méretszöveg kb. 1,5 mm-es nagybetűi). Ezek nem rajzolási szabvány: állítsa be az irodájáét.
- A magasság 0,5 és 50 mm közé essen.
- A címblokk felirata és a jelmagyarázatok nem tartoznak ide: megtartják a saját méretüket.
