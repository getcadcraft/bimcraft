---
title: Previesť ľudí budovou
summary: Evakuácia alebo bežné denné príchody cez vaše miestnosti, dvere a schody, s radmi tam, kde sa budova zužuje, najdlhšou cestou k východu z každej miestnosti a zisteniami ako Problémy. Hrubý model davu pre návrhové rozhodnutia, nie certifikát požiarnej bezpečnosti.
keywords: ľudia, evakuácia, únik, úniková cesta, východ, vzdialenosť, rad, dav, tok, šírka dverí, schody, príchody, úzke miesto, simulácia, osoby, chodec, čo ak, zablokované dvere
from: 84aa8920
---

Sekcia {{ui:Ľudia v budove}} na ľavom paneli prevedie ľudí cez miestnosti, dvere a schody otvoreného modelu IFC. V modeli sa nič nemení a nič sa nenahráva.

:::warning
Toto je **pomôcka pri návrhu, nie certifikát požiarnej bezpečnosti**. Nepozná požiar, dym, paniku, rozdiely v pohyblivosti ani to, čo od vás vyžaduje predpis. Hranice určujete vy: najdlhšia cesta k východu a dostupný čas sú čísla, ktoré zadáte vy, a žiadne nie je predpokladané.
:::

## Spustenie

1. Otvorte model so zatvorenými miestnosťami a dverami. Dvere s miestnosťou len na jednej strane sú východ; dvere medzi dvoma miestnosťami ich spájajú; schody spájajú miestnosti na svojich koncoch.
2. Zvoľte **Evakuácia** (každý ide k východu), **Príchody** (každý prichádza a ide do miestnosti) alebo **Výmena** (ľudia v miestnostiach odchádzajú, zatiaľ čo prichádza rovnako veľa), a plochu podlahy na osobu. Miestnosti pomenované ako chodba, schodište, vestibul alebo WC nikoho nedržia.
3. Kliknite na {{ui:Spustiť}}. Dostanete čas, kedy odíde posledný človek (a kedy odíde polovica a deväť z desiatich), rad pri každých dverách a schodoch, miestnosť s najdlhšou cestou a pôdorys, ktorý prehrá priebeh.

## Čo ak

Zaškrtnite {{ui:Zatvorené}} pri dverách v tabuľke a spustite znova: ľudia nájdu inú cestu, alebo sa vypíšu miestnosti bez úniku ako chyby. Dvojnásobne široké dvere vyprázdnia miestnosť oveľa skôr; tabuľka ukazuje, kde sú rady.

## Ako to funguje

Každá miestnosť je mriežka, takže ľudia chodia okolo rohov, nie cez steny. Rýchlosť klesá, keď sa miestnosť zapĺňa (S = 1.4 (1 − 0.266 D) m/s, D v osobách na m²). Dvere prepustia 1.3 osoby za sekundu na každý meter svojej šírky, zníženú o 150 mm z každej strany; schodisko 1.0, a chôdza na schodoch je pomalšia. Ľudia čakajú vo fronte podľa poradia príchodu. Číslo behu zopakuje ten istý priebeh presne.

Asistent môže spustiť to isté: požiadajte o evakuáciu alebo o najdlhšiu cestu k východu z každej miestnosti.

## Ľudia v každej miestnosti

Otvorte {{ui:Ľudia v každej miestnosti}}, ak chcete zadať číslo pre ľubovoľnú miestnosť. Prázdne políčko použije údaj o ploche podlahy (zobrazený sivo); 0 miestnosť vyprázdni. Vaše čísla sa používajú pri behu a uchovávajú sa v tomto prehliadači.

## Protiprúd pri dverách

Pri **Výmene** sa ľudia odchádzajúci a prichádzajúci stretávajú pri tých istých dverách. Keď dvere prepustia osobu v opačnom smere tesne za poslednou osobou, zachovajú časť svojej rýchlosti (tu 0.8; predpoklad, lebo publikované hodnoty sa líšia), a tabuľka počíta zmeny smeru. Dvere, ktoré často menia smer, sú uvedené v Problémoch ako poznámka.

## Schodiská a podesty

Každý podest schodiska stojí chodca jednu sekundu na otočenie (predpoklad). Priame schodisko nemá žiadny; schodisko tvaru L alebo U má jeden. Rýchlosť schodiska stále vychádza zo šírky jeho ramena.

## V 3D pohľade

Zaškrtnite {{ui:Zobraziť ľudí v pohľade 3D}} a chodci sa zobrazia ako postavy v modeli, sfarbené podľa toho, čo robia, a pohybujú sa, keď prehrávate beh. Do modelu sa nič nepridá.
