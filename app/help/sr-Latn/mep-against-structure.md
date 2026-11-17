---
title: Proverite cevi i kanale u odnosu na konstrukciju
summary: Pokrenite gotove skupove sudara cevi i kanala sa zidovima, pločama, gredama i stubovima, pronađite trase bliže konstrukciji nego što su njihova izolacija i zazor, i izlistajte otvore koje trase zahtevaju kroz zidove i ploče kao CSV i BCF.
keywords: mep, sudar, provera sudara, koordinacija, konstrukcija, zidovi, ploče, grede, stubovi, slobodan prostor, meki sudar, izolacija, zazor, otvor, otvori, prodor, čaura, jezgro, radovi za građevinu, bcf, csv
from: 2d597f01
---

## Šta ćete uraditi

Proverite da se instalacije uklapaju u zgradu: šta upada u konstrukciju, šta prolazi suviše blizu nje i gde zidovi i ploče treba da imaju otvore. Otvorite {{ui:Provera sudara}} u levom panelu; odeljak **Cevi i kanali u odnosu na konstrukciju** nalazi se pod uobičajenom proverom.

## Tvrdi sudari

Dva izbora skupova sada takođe nude **Cevi i kanale**, **Zidove**, **Ploče i krovove**, **Grede**, **Stubove** i **Konstrukciju** (sva četiri), sa brojem elemenata u svakom. Kliknite {{ui:Cevi i kanali × konstrukcija}} da izaberete prvi i poslednji i pokrenete proveru; ili izaberite bilo koji par sami i kliknite {{ui:Pokreni}}. Videti [Proveri sudare](topic:clash-check).

## Slobodan prostor

Neke instalacije trebaju prostor oko sebe: njihovu izolaciju i prostor za rad ili čauru.

1. Dajte trasi cevi ili kanala debljinu **Izolacije** u Svojstvima (ništa se ne crta za nju).
2. Ukucajte **Zazor oko cevi i kanala** (mm) u panelu {{ui:Provera sudara}}.
3. Kliknite {{ui:Proveri razmake}}: svaki deo bliži zidu, ploči, gredi ili stubu nego što su njegova izolacija plus zazor izlistava se sa rastojanjem koje ima i rastojanjem koje mu treba. Kliknite red da vidite ta dva.

Deo koji prolazi kroz zid ili ploču je otvor, a ne slobodan prostor, i izlistava se tamo.

## Potrebni otvori

Kliknite {{ui:Potrebni otvori}}. Gde središnja linija trase prolazi kroz zid ili ploču, BimCraft izlistava otvor koji joj treba: okrugao za okrugle cev ili kanal, inače pravougaon, veličine spoljne dimenzije trase plus dvostruka izolacija plus dvostruki zazor, centriran tamo gde trasa prelazi. Kliknite red da vidite trasu i zid ili ploču.

- {{ui:Otvori kao CSV}}: jedan red po otvoru, sa trasom, njenom veličinom i izolacijom, veličinom otvora, elementom kroz koji prolazi i njegovim GlobalId, nivoom, X, Y i Z koordinatama centra i koliko trasa prolazi kroz njega.
- {{ui:Otvori kao BCF probleme}}: jedan problem po otvoru, sa kamerom koja ga gleda i izabranom trasom i elementom, za program konstruktora.

:::note
Ništa se ne seče: otvori su spisak za ljude koji ih dimenzionišu. Zazor unosite vi; nijedan propis ne kaže koliki otvor mora biti. Grede i stubovi su sudari, a ne otvori: da li cev sme da prođe kroz njih je odluka konstruktora.
:::
