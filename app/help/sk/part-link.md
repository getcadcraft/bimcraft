---
title: Odoslanie prvku do PartCraft a jeho vrátenie
summary: Vyberte podperu, konzolu, zábradlie alebo kus zariadenia, navrhnite ho ako časť v PartCraft s budovou okolo a prijmite nový tvar späť do modelu.
keywords: partcraft, časť, odoslať, prepojenie, prvok, podpera, konzola, ohrada, zábradlie, zariadenie, návrh, obojsmerný prenos, prijať, zmenené, prepojenia častí
from: 4ce2f449
---

## Čo budete robiť

Navrhnite jeden prvok budovy ako časť: odošlite ho do PartCraft, zmeňte ho tam (vystrihnutím, pridaním, vŕtaním, zmenou veľkosti) a vráťte nový tvar do modelu.

## Postup

1. Vyberte jeden prvok v modeli: všeobecný prvok, zariadenie, stĺp, nosník, zábradlie alebo nábytok.
2. Na paneli nástrojov zvoľte {{ui:Prepojenia častí}} a potom {{ui:Odoslať do PartCraft}}. PartCraft sa otvorí na novej karte s prvkom ako časťou. Prvky do vzdialenosti 3 m sa vykreslia sivo vedľa neho, aby ste ho mohli navrhovať na mieste. Tam sa nedajú meniť.
3. Zmeňte časť v PartCraft. V PartCraft zvoľte {{ui:Súbor}} › {{ui:Exportovať}} › Uložiť späť do BimCraft. Späť môžete uložiť koľkokrát chcete.
4. Späť v BimCraft tlačidlo {{ui:Prepojenia častí}} zobrazuje počet a karta uvádza prvok ako {{ui:Zmenené v PartCraft}} so zmenou veľkosti a objemu slovami.
5. Zvoľte {{ui:Zobraziť}}, aby ste si ho prezreli, potom {{ui:Prijať}}, aby prvok dostal nový tvar, alebo {{ui:Ponechať moje}}, aby zostal taký, aký bol.

## Čo by ste mali vidieť

- Prijatie je jeden krok späť. Prvok si ponechá svoje miesto, GlobalId, typ, materiál a vlastnosti. Nahradí sa iba jeho teleso.
- Prvok dostane sadu vlastností {{ui:CadCraft_PartLink}} s prepojením, jeho stavom a revíziou.
- {{ui:Odoslať znova}} znovu otvorí ten istý prvok v PartCraft, na tom istom prepojení.

## Dobré vedieť

- Steny, podlahy, strechy, dvere, okná, schodiská, rampy a priestory kreslia stavebné nástroje z obrysu a po každej zmene sa prebudujú. Teleso z inej aplikácie by ich prepísalo, preto sa odmietnu s uvedením dôvodu.
- Tvar sa vráti ako sieť (tesselácia IFC), nie ako prvky časti. História časti zostáva v PartCraft.
- Ak sa prvok v modeli zmenil po odoslaní, karta to pred prijatím oznámi: prijatie tieto zmeny nahradí.
- Nič sa nenahráva. Obe aplikácie sú stránky jedného webu a prenášajú prvok medzi sebou v tomto prehliadači. Obe musia byť otvorené v tom istom prehliadači.
- Prvok musí v PartCraft vytvoriť uzavreté teleso. Prvok s veľkými otvorenými medzerami v tvare sa tam odmietne s počtom otvorených hrán.
- Na prijatie urobte aktívnym model, ktorý prvok obsahuje.
