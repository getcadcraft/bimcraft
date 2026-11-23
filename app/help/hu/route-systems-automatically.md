---
title: Csatornák, lefolyók, víz- és hűtőközeg-csövek automatikus útvonalazása
summary: Az ütközésellenőrzésben a BimCraft a nyitott modell körül keres utat csatornákhoz, gravitációs lefolyáshoz, hideg- és melegvízhez, valamint osztott és többosztatú hűtőközeg-csövekhez, és a vezetékeket az idomokkal együtt egyetlen visszavonási lépésben rajzolja meg. Tervezési segédeszköz: a méreteket, lejtéseket és ellenőrzéseket a program táblázatai és az Ön által megadott számok adják; semmi nem jelenti, hogy a terv megfelel bármely előírásnak.
keywords: automatikus útvonal, autoroute, csatornák útvonalazása, csövek útvonalazása, lefolyás, szennyvíz, gravitációs, függőleges ág, szellőzés, szifon, víz, melegvíz, visszatérő hurok, keringetés, hűtőközeg, osztott, többosztatú, VRF, egyenértékű hossz, elágazó készlet, Y-idom
from: 5841d513
---

## Mit fog csinálni

Hagyja, hogy a BimCraft vezetékhálózatot rendezzen el a modellben már meglévő csatlakozók között, falak és gerendák körül kerülve, majd ellenőrizze azt láthatóan megadott számokkal.

## Lépések

1. Nyissa meg a modellt és az ütközésellenőrzést. A **Csatornák automatikus útvonalazása** alatt válasszon légkezelőt és a végpontjait, vagy a **Más rendszerek automatikus útvonalazása** alatt válasszon rendszert.
2. **Gravitációs szennyvízlefolyás.** Adja meg a kifolyó helyzetét, és ha vannak, a függőleges ágak helyzetét. Jelölje be a **Minden szintet egy lépésben útvonalazza** lehetőséget, hogy minden olyan szintet vegyen, ahol vannak elemek: minden szint lefolyói a saját szintjükön csatlakoznak az ághoz, az ág pedig a legmagasabb csap fölül a talpáig fut. Nyomja meg a {{ui:Útvonal}} gombot.
3. **Szifon a szellőzőig.** A panel felsorolja az egyes szifonok távolságát a szellőzőjükig. A **Szifontól a szellőzőig legfeljebb** mezőbe írja be a legnagyobb értéket, amit az előírása megenged; a fölötte lévő elemek nem készültként jelennek meg, a túllépés milliméterben. Jelölje be a **Szellőztetés a függőleges ágon át** lehetőséget, ha az elemeknek nincs saját szellőzőcsonkjuk: a távolságot ekkor az ághoz mérik. A BimCraft nem tartalmaz erre előírási táblázatot: Ön írja be a számot.
4. **Hideg- és melegvíz.** Válassza ki a forrást, és adja meg a forrásnál lévő nyomást, valamint a csapnál szükséges nyomást. Jelölje be a **Melegvíz** lehetőséget, válassza ki a fűtő meleg csatlakozóját, és jelölje be a **Visszatérő hurok** lehetőséget, hogy a visszatérő vezeték a fűtő **meleg-visszatérés** csatlakozóján, vagy egy másik, Ön által kiválasztott csatlakozón végződjön (az utóbbi 150 mm-rel rövidebben, nyitva végződik, Ön csatlakoztatja).
5. **Osztott, többosztatú és VRF.** Válassza ki a kültéri egységet, jelölje be a beltéri egységeket, és írja be mindegyik teljesítményét. Írja be a gyártói adatokból származó határértékeket. Írja be egy könyök és egy elágazó készlet **egyenértékű hosszát** (a gyártó értékei), és a leghosszabb és a teljes hossz ellenőrzése egyenértékű hosszakon történik.
6. Nyomja meg a {{ui:Útvonal}} gombot. A panel megmondja, hány vezetéket rajzolt, és mit nem tudott megtenni, és miért. Az {{ui:Visszavonás}} egy lépésben mindent visszavon.

## Mit kell látnia

Csövek könyökökkel, T-idomokkal és szűkítőkkel; lefolyók, amelyek legalább a méretükhöz tartozó legkisebb lejtést adják; szellőzőcsonkok az elemeknél; hűtőközeg-vezetékek folyadék- és gázvezeték-pár formájában, amely minden kanyarnál azonos irányban fordul, az elágazásnál pedig elágazó készlet jelöli, ahol az elágazás kiválik a törzsvezetékből.

## Jó tudni

- Ahol egy lefolyó másik lefolyóhoz csatlakozik, a modell T-idomot rajzol. Az alaprajz ezeket a helyeket 45 fokos Y-csatlakozásként nevezi meg, hogy az idomot módosíthassa.
- A melegvíz a csaptelep saját melegvíz-csatlakozóját használja, ha a családjának van ilyen, és a hidegvíz-csatlakozótól 100 mm-re lévő csatlakozót, ha nincs.
- A hűtőközeg-vezetékek az egységek két csatlakozója között indulnak. Ha egy egység két csatlakozója túl közel áll egymáshoz egy kanyarhoz, a pár közöttük középen marad.
- A víz-hálózat a számításokban látható kereslet-görbét és súrlódási számokat használja; cserélje le előírásának értékeire, mielőtt a nyomásokra támaszkodna.
- Nagy házak fél percet vagy többet is igénybe vehetnek, főleg a melegvíz-hálózat miatt.
- Ez egy tervezési segédeszköz. Szakképzett személy ellenőrzi a méreteket, lejtéseket, szellőzőket és nyomásokat a vonatkozó előírás szerint.

## Következő

[Ütközések ellenőrzése](topic:clash-check) · [Csövek és csatornák ellenőrzése a szerkezettel](topic:mep-against-structure) · [Csövek és berendezések csatlakozásai](topic:mep-connections)
