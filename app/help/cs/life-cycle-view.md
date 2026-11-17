---
title: Co se za padesát let opotřebuje
summary: Okna, dveře, povrchové úpravy a střecha, které model obsahuje, jejich životnost, roky, v nichž se každý prvek vymění, a náklady podle roku i jejich současná hodnota, když zadáte cenu za jednotku.
keywords: životní cyklus, lifecycle, životnost, výměna, údržba, náklady, současná hodnota, diskontní sazba, inflace, 50 let, okna, nátěr, střecha, povrchové úpravy, celková životnost
from: 1b849545
---

Část {{ui:Pohled na životní cyklus}} v levém panelu uvádí, co model obsahuje a co se opotřebovává, a kdy se to během studijního období (zpočátku 50 let) vymění. V modelu se nic nemění.

## Jak to číst

Každá položka ukazuje své množství (změřené z modelu: plocha oken, vnější a vnitřní dveře, povrchová úprava vnější stěny, vnitřní nátěr, povrchová úprava podlahy a stropu, půdorysná plocha střechy, schodiště), **životnost v letech** a **cenu za jednotku**. Prvek se vymění po uplynutí své životnosti, po jejím dvojnásobku a tak dále, dokud je to před koncem studie. Okno s životností 30 let se tak ve 50leté studii vymění jednou, v 30. roce. Životnosti jsou typické plánovací hodnoty: změňte je podle svých výrobků a klimatu. Žádná cena se nepředpokládá; zadejte ji a uvidíte peníze podle roku, celkem a jejich současnou hodnotu. Pokud je chcete, přidejte diskontní sazbu a míru inflace.

{{ui:Uložit harmonogram (CSV)}} zapíše komponenty a roky. Potrubí, vzduchotechnika, vedení a zařízení jsou uvedeny také (viz níže).

## Potrubí, vzduchotechnika, vedení a zařízení

- **Potrubí a vzduchotechnika** jsou metry každé nakreslené trasy. **Zařízení** (čerpadla, ventilátory, ventily, koncová zařízení, armatury, zásuvky, spínače, rozvaděče a další věci, které karta Assets eviduje) se počítá podle druhu, každý druh s plánovanou životností. Položka, jejíž vlastní *životnost* je nastavena v kartě Assets, má vlastní řádek s touto životností. Pokud má datum instalace, začíná svým stářím: čerpadlo staré 16 let s životností 10 let je splatné hned a poté každých deset let.
- **Vedení** je **odhad**: plánovaná vzdálenost od rozvaděče podél zařízení každého okruhu, počínaje nejbližším, vynásobená 1,25 kvůli trase. Model žádný kabel nekreslí, proto ho porovnejte se svým vlastním výkazem výměr.
- Životnosti jsou plánovací hodnoty k posouzení, nikoli zdroj.

## Uhlík u každé výměny

Zaškrtněte {{ui:Zahrnout vázaný uhlík každé výměny}}. Nové okno, dveře, schodiště, střecha, potrubí nebo kus zařízení se počítá s uhlíkem, který nesou prvky modelu stejného druhu (faktory z karty Carbon, na jednotku). Položka bez prvku nebo faktoru, například nátěr, povrchové úpravy a vedení, ukáže pomlčku a je uvedena. Konec životnosti staré části a práce na jejím výměně se nepočítají.
