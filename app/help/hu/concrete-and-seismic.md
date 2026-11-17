---
title: Betonelemek ellenőrzése és szeizmikus terhek készítése
summary: Állítsa be a megnyitott modell betongerendáinak és -oszlopainak vasalását, ellenőrizze őket ACI 318-19 szerint, készítsen egyenértékű oldalirányú erőket ASCE 7-22 szerint merev födémekre, és nézze meg a szintenkénti elmozdulást. Mérnöki ellenőrzéshez készült segédeszköz.
keywords: beton, vasbeton, ACI 318, ACI 318-19, betonacél, gerenda, oszlop, nyírás, kengyel, szeizmikus, földrengés, egyenértékű oldalirányú erő, ELF, ASCE 7-22, elmozdulás, szintenkénti elmozdulás, födém, merev lemez, szintsúly, kihasználtság, szerkezeti, mérnök, elemzés
from: 2f342e72
---

A megnyitott IFC betongerendáit és -oszlopait ellenőrző, valamint a keret födémeire ható földrengés oldalirányú erőit kiszámító {{ui:Betonrudak}} és {{ui:Szeizmikus terhek}} blokk az {{ui:Elemzés}} lapon található. Ugyanezek a blokkok, mint a DetailCraftban, az {{ui:Elemzés}} lap elemzése után futnak, és az IFC-be mentődnek a többi elemzési beállítással együtt.

:::warning
Az eredmények **mérnöki ellenőrzésre valók**: segédeszköz, amíg egy mérnök át nem nézte. A betonellenőrzések elsőrendű erőket használnak (egy nem eltolódó keretben lévő oszlopot a felnagyított nyomatékára tervezik), oldalirányú felnagyítás, csavarási tervezés, szeizmikus részletezés (ACI 18. fejezet) és kengyelrészletezés nélkül. A szeizmikus terhek nem számolnak a redundanciatényezővel, a függőleges szeizmikus hatással, a csavarási felnagyítással és a P-delta hatásokkal. **A szélterhek nincsenek elkészítve**: a szabvány szélre vonatkozó fejezetei nincsenek a projekt hivatkozási oldalain.
:::

## Amit a BimCraft beolvas

Az elemzés a modell gerendáit, oszlopait és merevítéseit olvassa be a profiljaikkal (lásd: [A szerkezeti váz elemzése](topic:frame-analysis)). A {{ui:Betonrudak}} blokk minden általa használt szelvényt felsorol. Nyomja meg a {{ui:Beállítás betonként…}} gombot egy betonszelvényen: a BimCraft a profil területéből és merevségéből téglalapot vesz (a szélesség, b, és a magasság, h, amelyeket utána módosíthat), így a téglalaphoz nem közeli szelvény (egy hengerelt acélprofil) olyan méretet ad, amelyet ki kell javítani, vagy érintetlen marad.

A betonként beállított szelvény, és minden olyan elem, amelynek anyaga betonként van megnevezve, betonként elemződik: E = 4700 √f′c, 2400 kg/m³, és alapértelmezés szerint **repedt szelvényekkel** (oszlopok 0,70 Ig, gerendák 0,35 Ig; ACI 318-19, a 6.6.3.1.1(a) táblázat). Ezt a {{ui:Bruttó szelvények}} lehetőséggel lehet kikapcsolni. Ezek a beállítások nélkül a modell pontosan a korábbi módon elemződik.

## Vasalás, kombinációk, ellenőrzés

Adja meg a fedést, a felső, alsó és oldalsó vasakat (vagy egy oszlopkosarat), és minden szelvény kengyeleit. Állítsa be az f′c, fy, fyt, K értékeket, valamint az eltolódó vagy nem eltolódó jelleget. Adja meg a terhelési esetek típusát, nyomja meg a {{ui:Kombinációk készítése}} gombot (ASCE 7 §5.3.1), majd a {{ui:Beton ellenőrzése}} gombot: minden elem kihasználtságot kap, amely színezve jelenik meg a modellen. A kapacitást meghaladó elemek és a határértéken túli szintenkénti elmozdulás a {{ui:Problémák}} alatt szerepelnek, a hivatkozott záradékukkal együtt; kattintson egyre az elem kijelöléséhez.

## Födémek és szeizmikus terhek

A {{ui:Szeizmikus terhek}} blokkban a {{ui:Szintek keresése}} gomb azokat a szinteket veszi, ahol két vagy több gerenda találkozik; mindegyik merev födémlemezzé válik. A {{ui:Súlyok átvétele az esetekből}} gomb minden födém szeizmikus súlyát azokból az esetekből olvassa be, amelyekhez tényezőt adott. Töltse ki az SDS, SD1, S1, R, Ie, Cd, TL, a rendszer és a kockázati kategória mezőit, majd nyomja meg a {{ui:Szeizmikus esetek készítése}} gombot (ASCE 7-22 12.8: periódus, alapnyíróerő, eloszlás a födémeken felfelé, 5% járulékos csavarás). A szintenkénti erők és az elmozdulás-ellenőrzés (12.12) futtatás után jelennek meg. Ugyanez a periódus és szintmerevség táplálja a földrengést a [Árvíz, szél vagy földrengés lejátszása](topic:hazard-playback) funkcióban, ha az elemzési keretet választja forrásként.

A betonból készült födémek és falak az elemzésben lemezekké válnak, a {{ui:Födémvasalás}} blokk pedig méterenként kiszámítja a szükséges acélt. Minden ellenőrzés részletei a DetailCraft azonos nevű témakörében találhatók.
