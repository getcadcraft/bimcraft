---
title: Kontrola modelu na bežné problémy
summary: Nájdite prvky, ktorým chýba vlastnosť, ktorú potrebujete, GlobalId použité dvakrát, prvky bez podlažia a kópie položené jedna na druhej.
keywords: kontrola, kontrola modelu, validácia, qa, kvalita, chýbajúca vlastnosť, povinné, duplicitný, globalid, guid, podlažie, položené, prekrytie
from: 4d835513
---

## Čo budete robiť

Pozrite si model, než ho odovzdáte ďalej: problémy, ktoré narúšajú tabuľky, množstvá a iný software.

## Postup

1. Otvorte model IFC.
2. V ľavom paneli otvorte {{ui:Kontroly modelu}}.
3. Pod {{ui:Povinné vlastnosti}} je už jedno pravidlo (ľubovoľná trieda, Name). Zmeňte jeho triedu (alebo {{ui:Ktorákoľvek trieda}}) a vlastnosť, alebo kliknite na {{ui:Pridať vlastnosť}} pre ďalšie pravidlo; krížik pravidlo odstráni. Prvok nevyhovie pravidlu, keď vlastnosť chýba alebo je prázdna. Pravidlá zostávajú v tomto prehliadači pre každý model.
4. Kliknite na {{ui:Spustiť kontroly}}.
5. Kliknutím na výsledok vyberiete tieto prvky a priblížite na ne.

## Čo by ste mali vidieť

- **Chýbajúca povinná vlastnosť**: každé pravidlo s prvkami, ktoré pre ňu nemajú hodnotu.
- **GlobalId použitý dvakrát**: prvky, ktoré zdieľajú jeden GlobalId. Iný software ich považuje za jeden prvok.
- **Bez podlažia**: prvky s tvarom, ktorý nepatrí do žiadneho podlažia.
- **Kópie položené jedna na druhej**: prvky tej istej triedy a typu s rovnakým tvarom na rovnakom mieste, ktoré sa v množstvách počítajú dvakrát.

Každý riadok vo výsledkoch je tlačidlo: kliknutím vyberiete tieto prvky a priblížite na ne. Zobrazených je iba prvých 50 skupín každej kontroly. Tie isté zistenia sa zobrazia aj v {{ui:Problémy}}.

## Dobré vedieť

- Kontroly sa týkajú aktívneho modelu, ak je otvorených viac modelov. Pozrite si [Zobrazenie viacerých modelov IFC naraz](topic:several-models).
- Po úprave kontroly znova spustite.
- V paneli {{ui:Problémy}} sa dĺžky, plochy a objemy v texte problému riadia podľa {{ui:Jednotky}} zvolených na paneli nástrojov (dvere s rozmerom "800 mm" sa zobrazia ako 2'-7 1/2" v stopách a palcoch); zmeňte jednotku a panel texty prepíše.

## Ďalšie

- [Audit modelu: miestnosti, značky, LOD, kolízie a rozhrania](topic:audit-the-model)
- [Vyhľadanie prvkov podľa triedy, názvu alebo vlastnosti](topic:find)
- [Zmazanie, vystrihnutie, kopírovanie a prilepenie prvkov](topic:copy-paste)
