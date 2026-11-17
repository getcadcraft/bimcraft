---
title: Pozrite si, čo sa opotrebúva za päťdesiat rokov
summary: Okná, dvere, povrchové úpravy a strecha, ktoré model obsahuje, ich životnosť, roky výmeny a náklady podľa roka a ich súčasná hodnota, keď zadáte náklad na jednotku.
keywords: životný cyklus, lifecycle, životnosť, výmena, údržba, náklady, súčasná hodnota, diskontná sadzba, inflácia, 50 rokov, okná, náter, strecha, povrchové úpravy, celý životný cyklus
from: 1b849545
---

Sekcia {{ui:Pohľad na životný cyklus}} na ľavom paneli uvádza, čo model obsahuje a čo sa opotrebúva, a kedy sa to vymieňa počas študijného obdobia (zatiaľ 50 rokov). Nič v modeli sa nemení.

## Čítanie údajov

Každá časť zobrazuje svoje množstvo (merané z modelu: plocha okien, vonkajšie a vnútorné dvere, povrchová úprava vonkajšieho múru, vnútorný náter, povrchová úprava podlahy a stropu, pôdorysná plocha strechy, schodištia), **životnosť v rokoch** a **náklad na jednotku**. Časť sa vymení po uplynutí svojej životnosti, po dvojnásobku životnosti a tak ďalej, pokiaľ je to pred koncom študijného obdobia. 30-ročné okno v 50-ročnej štúdii sa preto vymení raz, v roku 30. Životnosti sú typické plánovacie údaje: zmeňte ich podľa svojich produktov a klímy. Náklad nie je predpokladaný; zadajte ho, aby ste videli peniaze podľa roka, celkovú sumu a ich súčasnú hodnotu. Ak chcete, pridajte diskontnú sadzbu a mieru inflácie.

{{ui:Uložiť harmonogram (CSV)}} zapíše komponenty a roky. Zoznam obsahuje aj potrubia, vzduchotechnické potrubia, vedenia a zariadenia (pozri nižšie).

## Potrubia, vzduchotechnické potrubia, vedenia a zariadenia

- **Potrubia a vzduchotechnické potrubia** sú metre každého nakresleného úseku. **Zariadenia** (čerpadlá, ventilátory, ventily, koncové prvky, armatúry, výstupy, spínače, rozvádzače a ďalšie veci, ktoré sleduje karta Majetok) sa počítajú podľa druhu, pričom každý druh má plánovaciu životnosť. Položka, ktorej vlastná *životnosť* je nastavená v karte Majetok, má vlastný riadok s touto životnosťou. Ak má dátum inštalácie, začína sa počítať od svojho veku: čerpadlo staré 16 rokov s 10-ročnou životnosťou je na výmenu hneď, potom každých desať rokov.
- **Vedenie** je **odhad**: vzdialenosť na pôdoryse od rozvádzača pozdĺž zariadení každého okruhu, od najbližšieho, vynásobená 1.25 kvôli trase. Model nekreslí kábel, preto ho skontrolujte voči vlastnému výkazu výmer.
- Životnosti sú plánovacie údaje, ktoré treba skontrolovať, nie zdroj.

## Uhlík na jednu výmenu

Zaškrtnite {{ui:Zahrnúť zabudovaný uhlík každej výmeny}}. Nové okno, dvere, schodisko, strecha, potrubie alebo zariadenie sa počíta s uhlíkom, ktorý nesú prvky modelu daného druhu (faktory z karty Uhlík, na jednotku). Časť bez prvku alebo faktora, ako sú náter, povrchové úpravy a vedenie, zobrazí pomlčku a je uvedená v zozname. Koniec životnosti starej časti a práca na jej výmene sa nepočítajú.
