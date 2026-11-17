---
title: Osi a stĺpce
summary: Rozmiestnite čiary osí s číslovanými a písmenovými bublinami podľa rozstupov alebo po jednej, pozdĺž nich nakreslite múry a stĺpce a zobrazte ich na pôdorysoch, pohľadoch a rezoch.
keywords: sieť osí, os, osi, čiara osi, bublina, konštrukčná sieť, 1 2 3, A B C, stĺpec, stĺpce, pilier, stĺp, prichytávanie, IfcGrid, IfcColumn
from: bf99a8f7
---

## Čo budete robiť

Rozmiestnite budovu na sieti osí a potom nakreslite múry a umiestnite stĺpce pozdĺž jej čiar.

## Umiestnenie celej siete

1. Zapnite {{ui:Kresliť}}, potom zvoľte {{ui:Zostava}} › {{ui:Os}}.
2. Kliknite na {{ui:Umiestniť sieť osí…}}. Určte, koľko **číslovaných čiar** (1, 2, 3…) a **písmenových čiar** (A, B, C…) chcete a aký majú rozstup. Zadajte jeden rozstup alebo viac rozstupov oddelených čiarkami pre nerovnomerné polia (napríklad `20', 24', 20'`). {{ui:Za poslednými osami}} je, o koľko každá čiara presahuje vonkajšie čiary druhého druhu, a {{ui:Otočenie (stupne)}} otočí celú sieť.
3. Kliknite na {{ui:Umiestniť}}, potom kliknite na miesto, kde má byť prvý priesečník (1 / A). Náhľad sleduje ukazovateľ.

Číslované osi vedú zvisle po pôdoryse a sú rozmiestnené vodorovne; písmenové osi vedú vodorovne a sú rozmiestnené zvisle. Písmená vynechávajú I a O, ako na výkresoch, takže sa nikdy nečítajú ako 1 a 0.

## Nakreslenie osí po jednej

So zapnutou {{ui:Os}} kliknite, kde čiara začína a kde končí. Dostane ďalšie označenie z čiar, pozdĺž ktorých ide (po 3 nasleduje 4; po B nasleduje C). Na zastavenie stlačte {{key:Esc}}.

## Zmena osi

So zapnutou {{ui:Os}} kliknutím vyberte os. Zadajte nové {{ui:Označenie}} a stlačte {{key:Enter}}, alebo kliknite na {{ui:Zmazať túto os}} (prípadne stlačte {{key:Delete}}). {{ui:Bubliny}} umiestnia bubliny na oba konce, na začiatok alebo koniec každej čiary, alebo ich nezobrazia vôbec. Každá zmena je jeden krok: {{key:Mod+Z}} ju vráti späť.

## Kreslenie pozdĺž siete

Nástroj {{ui:Stena}}, nástroj {{ui:Stĺp}} a ďalšie kresliace nástroje sa prichytávajú k osiam a k miestam, kde sa kríži (značka prichytenia je malý kruh s krížikom).

**Stĺpce:** zvoľte {{ui:Zostava}} › {{ui:Stĺp}}, vyberte tvar (obdĺžnikový alebo okrúhly), veľkosť a to, či stĺp siaha **po podlažie nad ním**, alebo do pevnej výšky, potom kliknite. {{ui:V každom priesečníku osí}} umiestni stĺp na každý priesečník, ktorý ešte nemá stĺp. Kliknutím na stĺp zmeníte jeho tvar, veľkosť alebo výšku v {{ui:Vlastnosti}}; {{key:Delete}} ho odstráni. Stĺpy, ktoré siahajú po podlažie nad nimi, sa pri zmene výšky tohto podlažia prispôsobia.

## Čo by ste mali vidieť

- Sieť na pôdoryse každého podlažia s bublinou a jej označením na koncoch každej čiary.
- Čiary osí v súbore výkresov: na pôdorysoch a na pohľadoch a rezoch, kde je os vidieť v pohľade na jej koniec, s bublinou nad budovou. Pozri [Pohľady, rezy a listy](topic:sheets).
- V súbore IFC: jedna sieť pre budovu (IfcGrid, jej číslované čiary v jednom zozname a písmenové v druhom) a stĺpce ako IfcColumn s ich veľkosťou, výškou a množstvami. Ostatné programy BIM zobrazia oboje.

:::note
Sieť zo súboru z iného programu sa zobrazí a nástroje sa k nej prichytávajú, ale jej osi sa tu zmeniť nedajú.
:::
