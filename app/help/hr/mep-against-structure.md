---
title: Provjera cijevi i kanala u odnosu na konstrukciju
summary: Pokrenite gotove skupove sudara cijevi i kanala sa zidovima, pločama, gredama i stupovima, pronađite dionice bliže konstrukciji nego što dopuštaju njihova izolacija i zazor te popišite otvore koje dionice trebaju kroz zidove i ploče, kao CSV i BCF.
keywords: mep, sudar, provjera sudara, koordinacija, konstrukcija, zidovi, ploče, grede, stupovi, razmak, mekani sudar, izolacija, zazor, otvor, otvori, prolaz, čahura, bušenje jezgre, radovi građevinara, bcf, csv
from: 2d597f01
---

## Što ćete učiniti

Provjerite odgovara li instalacija zgradi: što ulazi u konstrukciju, što prolazi preblizu njoj i gdje zidovi i ploče trebaju rupe. Otvorite {{ui:Provjera sudara}} u lijevoj ploči; odjeljak **Cijevi i kanali u odnosu na konstrukciju** nalazi se pod uobičajenom provjerom.

## Tvrdi sudari

Dva popisa skupova sada nude i **Cijevi i kanali**, **Zidovi**, **Ploče i krovovi**, **Grede**, **Stupovi** i **Konstrukcija** (sva četiri), s brojem elemenata u svakom. Kliknite {{ui:Cijevi i kanali × konstrukcija}} da odaberete prvi i posljednji popis i pokrenete provjeru; ili odaberite bilo koji par sami i kliknite {{ui:Pokreni}}. Pogledajte [Provjera sudara](topic:clash-check).

## Razmaci

Neke instalacije trebaju prostora oko sebe: njihovu izolaciju te prostor za rad ili čahuru.

1. Dionici cijevi ili kanala upišite debljinu **Izolacije** u Svojstvima (ništa se za nju ne crta).
2. Upišite **Zazor oko cijevi i kanala** (mm) u Provjeri sudara.
3. Kliknite {{ui:Provjeri razmake}}: svaki dio bliži zidu, ploči, gredi ili stupu nego što je njegova izolacija plus zazor popisan je s udaljenosti koju ima i udaljenosti koju traži. Kliknite redak da vidite oba.

Dio koji prolazi kroz zid ili ploču je otvor, a ne razmak, i tamo je popisan.

## Potrebni otvori

Kliknite {{ui:Potrebni otvori}}. Gdje središnja linija dionice prolazi kroz zid ili ploču, BimCraft popisuje otvor koji joj treba: okrugao za okruglu cijev ili kanal, inače pravokutan, veličine vanjske dimenzije dionice plus dvostruka izolacija plus dvostruki zazor, centriran tamo gdje dionica prelazi. Kliknite redak da vidite dionicu i zid ili ploču.

- {{ui:Otvori kao CSV}}: jedan redak po otvoru, s dionicom, njezinom veličinom i izolacijom, veličinom otvora, elementom kroz koji prolazi i njegovim GlobalId-om, etažom, X, Y i Z središta te koliko dionica ide kroz njega.
- {{ui:Otvori kao BCF teme}}: jedna tema po otvoru, s kamerom koja ga gleda te odabranom dionicom i elementom, za program statičara.

:::note
Ništa se ne probija: otvori su popis za one koji ih dimenzioniraju. Zazor upisujete vi; nijedan propis ne kaže koliki otvor mora biti. Grede i stupovi su sudari, a ne otvori: hoće li cijev smjeti proći kroz njih odluka je statičara.
:::
