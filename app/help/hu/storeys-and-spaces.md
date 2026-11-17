---
title: Szintek, terek és élek megjelenítése és elrejtése
summary: Kapcsolja ki a szinteket, hogy belelásson az épületbe, jelenítse meg a helyiségeket és tereket, és kapcsolja be vagy ki az élvonalakat.
keywords: szintek, padlók, elrejtés, izolálás, helyiségek, terek, ifcspace, élek, láthatóság, metszet
from: b838dcc0
---

## Mit fog csinálni

Nézzen be egy IFC-modellbe úgy, hogy kikapcsolja a vizsgált szint feletti szinteket, majd megjeleníti a helyiségeket és tereket, és kikapcsolja az élvonalakat a tisztább képért.

## Lépések: egy szint megtekintése

1. Nyisson meg egy IFC-modellt. Lásd [IFC-modell megnyitása és körüljárása 3D-ben](topic:open-ifc-model).
2. Keresse meg a bal oldali {{ui:Szintek}} listát. A legfelső szint van elöl, mint egy metszetben, amelyet a tetőtől lefelé olvasunk.
3. Vegye ki a jelölést a tetőről és a megtekinteni kívánt padló feletti minden szintről.
4. Kattintson a {{ui:Felülnézet}} gombra, hogy lenézzen arra a padlóra.
5. Jelölje be újra a szinteket, hogy visszakerüljenek.

## Mit kell látnia

Minden szint, amelyről kivette a jelölést, azonnal eltűnik, és vele együtt mindaz, ami rajta van. A lista csak azokat a szinteket mutatja, amelyeken van látható elem. Azok az elemek, amelyek egyik szinthez sincsenek rendelve, a lista alján **Nincs szinten** néven csoportosulnak; a telekelemek és néhány bútor gyakran ide kerül.

## Lépések: helyiségek és terek megjelenítése

1. Kattintson a {{ui:Terek}} gombra a modell felett lévő eszköztáron. A gomb lenyomva marad.
2. Nézze meg a modellt: a helyiségek és terek halvány, áttetsző térfogatként jelennek meg.
3. Kattintson egy térre, hogy jobbra olvassa az adatait, például a nevét, számát és területét.
4. Kattintson újra a {{ui:Terek}} gombra az elrejtésükhöz.

A terek a modell megnyitásakor el vannak rejtve, mert különben eltakarnák a falakat és padlókat.

## Lépések: élek

1. Kattintson az {{ui:Élek}} gombra a vékony élvonalak kikapcsolásához.
2. Kattintson rá újra a visszakapcsoláshoz.

Nagyon nagy modelleknél (1,5 millió háromszög felett) a gomb szürke, és a súgó így jelzi: „Az élek nagyon nagy modelleknél ki vannak kapcsolva”. Ez memóriát takarít meg.

## Gyakori hibák

- **Egy szint kikapcsolása után is látja annak egy részét.** Egy elem ahhoz a szinthez tartozik, amelyhez az exportáló program rendelte. Egy magas fal vagy lépcső gyakran csak az alsó szintjéhez tartozik, így megmarad, ha a fölötte lévő szint el van rejtve, vagy az alatta lévővel együtt tűnik el.
- **Szintek elrejtése, hogy belelásson.** A metszetdoboz gyakran gyorsabb: lásd [IFC-modell vágása metszősíkkal](topic:section-plane#a-section-box). A {{ui:Modellfa}} sorainak jelölését is kiveheti (lásd [Eligazodás a modellfában](topic:model-tree)).
- **Falon át kattintva egy teret.** A kattintás a legközelebbi látható felületet választja ki. Rejtse el a fölötte lévő szintet, vagy váltson a {{ui:Felülnézet}} nézetre, majd kattintson.
- **A szintnevek furcsának tűnnek.** A BimCraft a fájlban mentett szintneveket mutatja. Ha azok például „Level 1” vagy egy szám, azt írta az exportáló.
