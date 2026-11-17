---
title: Označenia miestností a plôch
summary: Umiestnite štítok s číslom, názvom a plochou na miestnosť alebo plochu. Štítok ju sleduje a jeho veľkosť je daná výškou na papieri.
keywords: štítok, štítok miestnosti, štítok plochy, označiť miestnosť, označiť plochu, označiť všetko, označiť všetky neoznačené, popis, výška textu, výška na papieri, anotácia
from: 67059d8a
---

## Čo urobíte

Označíte miestnosti a plochy jednu po druhej alebo naraz a prespoviete štítok tam, kde sa dobre číta.

## Kde sú nástroje

- Rozloženie s pásom kariet: {{ui:Architektúra}} › **Miestnosť a plocha** › {{ui:Označiť miestnosť}} a {{ui:Označiť plochu}}.
- Klasické rozloženie: lišta {{ui:Kresliť}} › ponuka {{ui:Miestnosti}}.
- Vybraná miestnosť alebo plocha: {{ui:Vlastnosti}} › {{ui:Pridať štítok}}.

## Postup

1. Zvoľte {{ui:Označiť miestnosť}} a kliknite do miestnosti, kde má štítok byť.
2. Alebo stlačte {{ui:Označiť všetky neoznačené}} v riadku: každá miestnosť na tomto podlaží, ktorá nemá štítok, dostane jeden v strede. Je to jeden krok späť.
3. Ak chcete štítok posunúť, vyberte ho nástrojom Vybrať a presuňte ho. Vlastnosti majú {{ui:Vrátiť do stredu}}.
4. {{ui:Označiť plochu}} funguje pre plochy rovnako.

## Čo štítok robí

- Uvádza číslo, názov a plochu v zobrazovaných jednotkách.
- Sleduje svoju miestnosť: premenujete miestnosť alebo posuniete stenu a text aj miesto štítku sa zmenia v tom istom kroku.
- Veľkosť je daná na papieri: {{ui:Výška textu na papieri}} je v milimetroch (na začiatok 2.5). Pri mierke pohľadu 1:50 je štítok 2.5 mm vysoký 125 mm v modeli; pri 1:100 je to 250 mm.
- Miestnosť so štítkom zobrazuje štítok namiesto svojho obyčajného popisu.
- Keď jej miestnosť alebo plocha zanikne, štítok zanikne s ňou. Späť obnoví obidva.

## V IFC

Štítok je IfcAnnotation (ObjectType ROOMTAG alebo AREATAG) s textom ako textovým literálom a GlobalId toho, čo pomenúva. Text v súbore uvádza plochu v štvorcových metroch.

## Ešte nie je hotové

- Vlastné tvary štítkov a vodiaca čiara.
- Štítky na dverách, oknách a stenách sú samostatný nástroj (pozrite štýly štítkov výkresov).

Pozri aj [Miestnosti a oddeľovače miestností](topic:rooms-and-separators).
