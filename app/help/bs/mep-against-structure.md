---
title: Provjeri cijevi i zračne kanale u odnosu na konstrukciju
summary: Pokreni gotove skupove kolizija cijevi i zračnih kanala sa zidovima, pločama, gredama i stubovima, nađi trase bliže konstrukciji nego što su njihova izolacija i zazor, i izlistaj otvore koje trase trebaju kroz zidove i ploče kao CSV i BCF.
keywords: mep, kolizija, provjera kolizija, koordinacija, konstrukcija, zidovi, ploče, grede, stubovi, slobodan prostor, meka kolizija, izolacija, zazor, otvor, otvori, prodor, čaura, jezgro, građevinski radovi, bcf, csv
from: 2d597f01
---

## Šta ćeš uraditi

Uvjeri se da instalacije odgovaraju zgradi: šta ulazi u konstrukciju, šta prolazi preblizu njoj, i gdje zidovi i ploče trebaju rupe. Otvori {{ui:Clash check}} u lijevom panelu; odjeljak **Cijevi i zračni kanali u odnosu na konstrukciju** nalazi se pod uobičajenom provjerom.

## Tvrde kolizije

Dva popisa skupova sada nude i **Cijevi i zračne kanale**, **Zidove**, **Ploče i krovove**, **Grede**, **Stubove** i **Konstrukciju** (sva četiri), s brojem elemenata u svakom. Klikni {{ui:Pipes and ducts × structure}} da izabereš prvi i posljednji i pokreneš provjeru; ili izaberi bilo koji par sam i klikni {{ui:Run}}. Vidi [Provjera kolizija](topic:clash-check).

## Slobodan prostor

Neke instalacije trebaju prostor oko sebe: svoju izolaciju i prostor za rad ili za čauru.

1. Daj trasi cijevi ili zračnog kanala debljinu **Izolacije** u Svojstvima (ništa se za nju ne crta).
2. Upiši **Zazor oko cijevi i zračnih kanala** (mm) u Provjeri kolizija.
3. Klikni {{ui:Check clearances}}: svaki dio bliži zidu, ploči, gredi ili stubu nego što je njegova izolacija plus zazor navodi se s razdaljinom koju ima i razdaljinom koju traži. Klikni red da vidiš oba.

Dio koji prolazi kroz zid ili ploču je otvor, a ne slobodan prostor, i navodi se tamo umjesto toga.

## Potrebni otvori

Klikni {{ui:Openings needed}}. Gdje središnja linija trase prolazi kroz zid ili ploču, BimCraft navodi otvor koji joj treba: okrugao za okruglu cijev ili kanal, inače pravougaon, veličine vanjske dimenzije trase plus dvostruka izolacija plus dvostruki zazor, centriran na mjestu gdje trasa prelazi. Klikni red da vidiš trasu i zid ili ploču.

- {{ui:Openings as CSV}}: jedan red po otvoru, s trasom, njenom veličinom i izolacijom, veličinom otvora, elementom kroz koji prolazi i njegovim GlobalId, nivoom, X, Y i Z koordinatama centra, i koliko daleko trasa ide kroz njega.
- {{ui:Openings as BCF issues}}: jedan zadatak po otvoru, s kamerom koja gleda na njega i izabranom trasom i elementom, za program konstruktora.

:::note
Ništa se ne siječe: otvori su spisak za ljude koji ih dimenzioniraju. Zazor upisuješ ti; nijedan propis ne kaže koliki otvor mora biti. Grede i stubovi su kolizije, a ne otvori: to da li cijev smije proći kroz jedan je odluka konstruktora.
:::
