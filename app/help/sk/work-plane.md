---
title: Pracovná rovina: nastaviť, zobraziť, pozrieť sa na ňu kolmo
summary: Pracovná rovina je rovina, ktorú používajú čiary modelu, text modelu a Prehliadač pracovnej roviny. Nastavte ju na podlažie, plochu, pomenovanú referenčnú rovinu alebo čiaru; zobrazte ju v pohľadoch; otvorte prehliadač, ak chcete kresliť na zvislú rovinu.
keywords: pracovná rovina, nastaviť pracovnú rovinu, zobraziť pracovnú rovinu, referenčná rovina, prehliadač pracovnej roviny, pomenovaná rovina, plocha, úroveň, zvislá rovina, kolmá rovina, kresliť na stenu, výkres pohľadu, uchopenie, zarovnanie, ref rovina
from: 8aceee1d
---

## Čo urobíte

Vyberiete rovinu, na ktorú kreslíte, uvidíte, kde sa nachádza, a budete kresliť na rovinu, ktorá stojí kolmo.

## Postup

1. Zapnite **Kresliť** a otvorte ponuku **Stavba** (v rozložení pásu: karta Architektúra, Pracovná rovina).
2. Vyberte **Nastaviť pracovnú rovinu**. Potom urobte jedno z toho:
   - vyberte podlažie v **Nastaviť na**;
   - vyberte pomenovanú referenčnú rovinu v zozname vedľa;
   - kliknite na čiaru v pôdoryse: múr, os, referenčnú rovinu, čiaru modelu alebo závesnú stenu. Pracovná rovina sa stane zvislou rovinou prechádzajúcou touto čiarou;
   - kliknite na rovnú plochu v 3D pohľade. Pracovná rovina leží na tejto ploche.
3. Vyberte **Zobraziť pracovnú rovinu**, aby ste ju videli: sfarbený plát s metrovou mriežkou v 3D pohľade, prerušovaný obrys alebo čiaru v pôdoryse a prerušovaný obrys v paneli pohľadov a rezov. Ak ju chcete skryť, vyberte to znova.
4. Vyberte **Prehliadač pracovnej roviny**, aby ste sa na rovinu pozreli kolmo. Čierne čiary sú model rezaný rovinou. Jeho nástrojmi nakreslíte čiaru modelu, text modelu alebo referenčnú rovinu na rovine. **Pozrieť sa na to v 3D** otočí 3D pohľad tak, aby smeroval na rovinu.

## Referenčné roviny

Referenčná rovina je pomenovaná rovina, ktorú kreslíte ako čiaru.

1. Vyberte **Referenčná rovina**. Ak chcete názov, napíšte ho do jej riadka (inak sa pomenuje automaticky) a zadajte výšku.
2. Kliknite, kde začína a kde končí. V pôdoryse to vytvorí zvislú rovinu. V prehliadači pracovnej roviny to vytvorí rovinu, ktorá stojí kolmo na pracovnú rovinu.
3. Zobrazí sa ako prerušovaná zelená čiara s menom v pôdoryse, prerušovaný obrys v 3D pohľade a v paneli pohľadov a rezov.
4. Vyberte ju, ak ju chcete premenovať, zmeniť jej dĺžku, výšku a pätu, alebo stlačte **Použiť ako pracovnú rovinu**.

Dve referenčné roviny nemôžu mať rovnaký názov, lebo podľa názvu si jednu vyberáte.

## Dobré vedieť

- Model bez nastavenej pracovnej roviny pracuje na svojom najnižšom podlaží.
- Pracovná rovina sa ukladá do súboru. Zobrazenie alebo skrytie sa pamätá v tomto prehliadači, nie v súbore.
- Ak pracovná rovina nasleduje referenčnú rovinu a vy túto rovinu posuniete, pracovná rovina sa posunie s ňou.
- Na zvislej pracovnej rovine nástroje Čiara modelu a Text modelu otvoria prehliadač, lebo pôdorys nedokáže ukázať na výšku.
- Kresliace nástroje chytajú konce referenčných rovín nakreslených v pôdoryse rovnako, ako chytajú konce iných čiar v prehliadači.

## V súbore IFC

- Pracovná rovina je sada vlastností (CadCraft_WorkPlane) na projekte.
- Referenčná rovina je IfcAnnotation s typom objektu ReferencePlane a svojím názvom. Jej tvar je uzavretý obrys roviny, takže iný program ukáže, kde sa nachádza. Jej sada CadCraft_ReferencePlane obsahuje začiatok, smer, normálu a rozsah. IFC nemá triedu pre referenčnú rovinu; anotácia sa nepočíta ako stavebný prvok a neohraničuje miestnosti.
