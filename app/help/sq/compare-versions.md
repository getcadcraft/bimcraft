---
title: Krahaso dy versione të një modeli
summary: Hapni dy versione të të njëjtit model IFC dhe shihni cilët elementë u shtuan, u hoqën dhe u ndryshuan, të përputhur sipas GlobalId-ve të tyre, me një CSV për çdo ndryshim.
keywords: krahaso, diff, ndryshim, versione, rishikim, ndryshime, ndryshuar, shtuar, hequr, lëvizur, globalid, guid, çfarë ndryshoi
from: cfca6971
---

## Çfarë do të bëni

Shihni çfarë ndryshoi mes modelit që keni pasur dhe atij që ju është dërguar: cilët elementë janë të rinj, cilët nuk ekzistojnë më, cilët u lëvizën ose morën vlera të reja vetish.

## Hapat

1. Hapni versionin më të ri, pastaj klikoni {{ui:Add a model…}} dhe zgjidhni atë më të vjetër. Shih [Shiko disa modele IFC së bashku](topic:several-models).
2. Te {{ui:Models}}, hapni {{ui:Compare versions}}.
3. Zgjidhni {{ui:Older version}} dhe {{ui:Newer version}}.
4. Klikoni {{ui:Compare}}.
5. Klikoni një element në një listë për ta zgjedhur dhe për të parë vetitë e tij. Klikoni {{ui:Download CSV}} për çdo ndryshim, veti për veti.
6. Klikoni {{ui:Clear}} për t'u kthyer te pamja normale.

## Çfarë duhet të shihni

- Elementët **të shtuar** me ngjyrë blu, nga versioni më i ri.
- Elementët **të hequr** me ngjyrë të kuqe, nga versioni më i vjetër.
- Elementët **të ndryshuar** me ngjyrë oker, nga versioni më i ri, secili duke thënë çfarë ndryshoi: vetitë, një lëvizje dhe sa larg, ose një formë të re.
- Gjithçka që është e njëjtë, transparente.

## Gjëra për t'u ditur

- Elementët përputhen sipas GlobalId-së së tyre. Një program që u jep elementeve GlobalId të reja në çdo eksport bën që çdo element të duket i hequr dhe i shtuar sërish.
- Pozicionet krahasohen aty ku qëndrojnë modelet në skenë. Nëse një version u lëvizi qëllimisht, rreshtojini së pari me {{ui:Move}} te {{ui:Models}}.
- Një GlobalId e përdorur dy herë në një model lihet jashtë krahasimit. [Kontrollo një model për probleme të zakonshme](topic:model-checks) i gjen ato.

## Pasi

- [Çështjet dhe skedarët BCF](topic:issues-bcf)
- [Mblidh sasitë sipas vetisë](topic:quantity-totals)
