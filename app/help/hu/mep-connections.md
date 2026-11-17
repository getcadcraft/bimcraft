---
title: Csövek és légcsatornák csatlakoztatása berendezésekhez
summary: Indítson vagy zárjon egy csövet vagy légcsatornát egy csatlakozón, hogy az átvegye a csatlakozó méretét és rendszerét, és ahhoz rögzüljön, majd ellenőrizze a csatlakozásokat: nyitott csatlakozók, méret- és rendszereltérések, szakaszok forrás nélkül.
keywords: mep, csatlakoztatás, kapcsolat, kapcsolatok, csatlakozó, csatlakozók, nyitott csatlakozó, méreteltérés, rendszereltérés, forrás, kapcsolatok ellenőrzése, rögzített, követés, berendezés mozgatása, ifcrelconnectsports, koordináció
from: 29144fb0
---

## Mit fog tenni

Kösse össze a szakaszokat a berendezésekkel, hogy a modell egy összefüggő rendszer legyen: egy szivattyú kimenete a belőle kilépő csőhöz, egy szóró nyaka az elágazó légcsatornához. Ezután hagyja, hogy a BimCraft felsorolja, mi nincs összekötve.

## Rajzolás csatlakozóról

1. Válassza a {{ui:Cső}} vagy a {{ui:Légcsatorna}} lehetőséget.
2. Vigye a mutatót a berendezés egyik csatlakozójára (a kis körök; a nyitott csatlakozó a figyelmeztető színnel látszik). A mutató rátapad, és kiírja: **csatlakozón**.
3. Kattintson: a szakasz a csatlakozó magasságában indul, és **átveszi annak méretét és rendszerét** (a cső a rendszer szokásos anyagát is). Az állapotsor kiírja, mit vett át.
4. Rajzoljon tovább a szokásos módon. Ha a szakasz egy másik csatlakozón végződik, az a vég is rögzül.

A szakasz csatlakozón lévő vége **rögzített** hozzá: ha mozgatja vagy elforgatja a berendezést (a Tulajdonságokban), a szakasz vége vele megy; ha magát a szakaszt szerkeszti, a vég a csatlakozón marad. A szakasz többi sarka helyben marad, ezért nagy mozgatás után az első szár ferdén leválhat a csatlakozóról: mozgassa a következő sarkot is.

## A csatlakozások ellenőrzése

Nyissa meg a {{ui:Build}} lapot, és kattintson a {{ui:Kapcsolatok ellenőrzése}} gombra. A sáv alatti lista a következőket mutatja:

| Sor | Mit jelent |
|---|---|
| Egy csatlakozó nincs csatlakoztatva | Egy berendezésnek van olyan csatlakozója, amelyhez semmi nincs rajzolva |
| Semmi nincs a végén | Egy szakasz a levegőben végződik |
| Összekötött csatlakozók eltérő méretűek | Egy adott méretű szakasz eltérő méretű csatlakozóval vagy szakasszal találkozik szűkítő nélkül (cső névleges mérete, légcsatorna alakja és oldalai) |
| Összekötött csatlakozók eltérő rendszerűek | Például egy visszatérő légcsatorna egy befúvó szórón |
| Cső légcsatornához kötve | Két különböző fajtájú csatlakozás találkozik |
| Nincs a hálózatában olyan berendezés, amely ellátná | Semmi, amihez a szakasz kapcsolódik, bármilyen távolságra is, nem rendelkezik kimenettel. A lefolyókat, a csapadékvizet és a szellőzőket nem vizsgálja: vizük a berendezési egységekből származik |
| Berendezés csatlakozójához rögzített, amely már nincs a modellben | A berendezés törlődött; rajzolja újra a véget, vagy törölje a szakaszt |

A hibák kerülnek előre. Kattintson egy sorra a benne megnevezett elem kiválasztásához. A {{ui:Bezárás}} elrejti a listát. Az ellenőrzés a modellt úgy olvassa, ahogy rajzolták: csatlakozásokat és méreteket vizsgál, áramlást, nyomást vagy beszabályozást sosem.
