---
title: Rist og súlur
summary: Leggja út ristarlínur með tölusettum og bókstafssettum hringjum, eftir bili eða eina í einu, teikna veggi og súlur eftir þeim, og sjá þær á grunnmyndum, útlitum og sniðum.
keywords: rist, ristir, ristarlína, súlurist, ás, ásar, hringur, ristarlína, burðarrist, 1 2 3, A B C, súla, súlur, stoð, póstur, smella, IfcGrid, IfcColumn
from: bf99a8f7
---

## Hvað þú gerir

Leggja byggingu út á rist, og teikna síðan veggi og setja súlur eftir línum hennar.

## Setja alla ristina

1. Kveiktu á {{ui:Teikna}} og veldu síðan {{ui:Smíð}} › {{ui:Rist}}.
2. Smelltu á {{ui:Setja rist…}}. Segðu hversu margar **tölusettar línur** (1, 2, 3…) og **bókstafssettar línur** (A, B, C…) þú vilt og hve langt er á milli þeirra. Sláðu inn eitt bil, eða nokkur aðskilin með kommum fyrir ójöfn bil (til dæmis `20', 24', 20'`). {{ui:Framhjá síðustu línum}} er hve langt hver lína nær út fyrir ytri línur hinnar tegundarinnar, og {{ui:Snúið (gráður)}} snýr allri ristinni.
3. Smelltu á {{ui:Setja hana}}, smelltu síðan þar sem fyrsti skurðpunkturinn (1 / A) á að vera. Forskoðunin fylgir bendlinum.

Tölusettar línur liggja upp grunnmyndina og eru dreifðar yfir hana; bókstafssettar línur liggja þvert yfir grunnmyndina og eru dreifðar upp eftir henni. Stafirnir I og O eru sleppt, eins og á teikningum, svo þeir séu aldrei lesnir sem 1 og 0.

## Teikna ristarlínur eina í einu

Með {{ui:Rist}} á smelltu þar sem lína byrjar og þar sem hún endar. Hún fær næsta merki af línunum sem hún liggur eftir (eftir 3 kemur 4; eftir B kemur C). Ýttu á {{key:Esc}} til að hætta.

## Breyta ristarlínu

Með {{ui:Rist}} á smelltu á línu til að velja hana. Sláðu inn nýtt {{ui:Merki}} og ýttu á {{key:Enter}}, eða smelltu á {{ui:Eyða þessari línu}} (eða ýttu á {{key:Delete}}). {{ui:Hringir}} setur hringina við báða enda, við upphaf eða endi hverrar línu, eða hvergi. Hver breyting er eitt skref: {{key:Mod+Z}} tekur hana til baka.

## Teikna eftir ristinni

Veggtólið, súlutólið og önnur teikniverkfæri smella á ristarlínur og þar sem þær skerast (smellimerkið er lítill hringur með krossi).

**Súlur:** veldu {{ui:Smíð}} › {{ui:Súla}}, veldu lögunina (ferkantaða eða kringlótta), stærðina og hvort súlan nær **upp á hæðina fyrir ofan** eða að föstri hæð, smelltu síðan. {{ui:Í hverjum skurðpunkti ristarinnar}} setur súlu á hvern skurðpunkt sem hefur enga enn. Smelltu á súlu til að breyta lögun, stærð eða hæð í {{ui:Eiginleikar}}; {{key:Delete}} fjarlægir hana. Súlur sem ná upp á hæðina fyrir ofan fylgja henni þegar hæð hennar breytist.

## Það sem þú átt að sjá

- Ristina á grunnmynd hverrar hæðar, með hring og merki hans við enda hverrar línu.
- Ristarlínur á teikningasettinu: á grunnmyndum, og á útlitum og sniðum þar sem línu sést á rönd, með hringinn fyrir ofan bygginguna. Sjá [Útlit, snið og blöð](topic:sheets).
- Í IFC-skránni: ein rist fyrir bygginguna (IfcGrid, tölusettu línurnar í einum lista og bókstafssettu línurnar í öðrum), og súlur sem IfcColumn með stærð, hæð og magntölum. Önnur BIM-forrit sýna hvort tveggja.

:::note
Rist sem kom í skrá frá öðru forriti birtist og verkfærin smella á hana, en línum hennar er ekki hægt að breyta hér.
:::
