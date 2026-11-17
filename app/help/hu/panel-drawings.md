---
title: Panelrajzok fa- vagy könnyűacél-vázas szerkezetekhez
summary: Keretezze a modell falait, padlóit és tetőit panelekként fából vagy könnyűacélból, lássa minden állóelemet, koszorút, áthidalót, gerendát és szarufát léptékhelyesen, és mentse a vágólistát CSV-ként, a műhelyrajzokat pedig PDF-ként.
keywords: panel, keretezés, műhelyrajz, vágólista, készlet, könnyűacél, acél állóelem, LGS, fa, gerenda, szarufa, áthidaló, PDF
from: c09f916e
---

## Panelek megnyitása

Válassza a {{ui:Build}} menü {{ui:Panelrajzok}} lehetőségét (vagy írja be: {{cmd:PANELS}}). A lista a modell minden megrajzolt falát, minden padlóját és tetőjét tartalmazza, mindegyik jelölőnégyzettel. A falak az ajtóikkal és ablakaikkal együtt nyílásokként szerepelnek. A padló a körvonala körül húzott téglalapként van keretezve, a gerendák a rövidebb irányban futnak. A tető a falai körvonalán átívelő oromfalként van keretezve, a tető lejtésével. A lista ezt jelzi, mert a csonkakontya vagy az összetett tető nem oromfalas tető.

## Anyag, méret és osztás

Válassza a {{ui:Anyag}} lehetőséget: **Fa** vagy **Könnyűacél**. Az acélelemek C-állóelemek, nevüket mélységük és vastagságuk adja meg (például C92-1.2), a koszorúkhoz sínnel. A {{ui:Tartóelem mérete}} egy méretet választ minden bejelölt panelhez; ha Alapértelmezett értéken hagyja, minden panel típusa a saját alapértékét használja. Az {{ui:Osztásköz}} az állóelemek, gerendák vagy szarufák közötti távolság. Ezek kiindulási értékek, amelyeket be kell állítani. Nem szerkezeti ellenőrzések: hogy az adott osztásközzel egy állóelem megtartja-e az adott falat, és az áthidaló az adott nyílást, az építési szabályzat táblázataira (az Építési előírások bővítményben vannak az IRC táblázatai) és a statikusra tartozik.

## Mit kap

Az első bejelölt panel léptékhelyesen rajzolódik meg a párbeszédpanelben, méretekkel. A {{ui:Vágólista (CSV)}} gomb minden panel darabjait jelölés, méret és hossz szerint menti, valamint az ezekhez szükséges anyaghosszakat. A {{ui:Műhelyrajzok (PDF)}} gomb panelenként egy A3-as oldalt ment, minden darabot jelöléssel és vágólistával. A {{ui:Rajz (SVG)}} gomb az első panelt rajzként menti. Amit a keretezési kód nem tud megoldani (nyílás túl közel a fal végéhez, áthidaló, amely nem fér a koszorú alá, darab, amely hosszabb a leghosszabb anyagnál), azt a **Problémák** között és a párbeszédpanelen is felsorolja.

## Amit nem tesz

A panelek a modellből készült rajzok, amelyeket akkor kap, amikor kéri: a modellbe semmi sem íródik, így mindig egyeznek vele. Ha a keretezést elemekként szeretné a modellbe tenni, a fa falakhoz, padlókhoz és tetőkhöz használja a {{ui:Vázszerkezet}} lehetőséget.
