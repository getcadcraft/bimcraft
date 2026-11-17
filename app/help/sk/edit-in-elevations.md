---
title: Úprava v pohľadoch a rezoch, veľkosti listov, popisové polia a premenovanie
summary: Presúvajte steny, dvere, okná a úrovne a kreslite steny, otvory, úrovne, kóty a poznámky priamo v pohľade alebo v reze; uchovávajte svoje vlastné veľkosti listov a popisové polia ako údaje a premenúvajte rodiny, veľkosti a prvky v prehliadači projektu.
keywords: nová úroveň v pohľade, kóta v pohľade, úprava v pohľade, úprava v reze, pohľad, rez, presun steny v pohľade, parapet okna, výška úrovne, potiahnutie úrovne, kreslenie steny v reze, poznámky v pohľade, anotácia, veľkosť listu, vlastná veľkosť listu, veľkosť papiera, popisové pole, šablóna popisového poľa, formát listu, rámček, polia, klient, autor výkresu, revízia, premenovať rodinu, premenovať typ, premenovať prvok, prehliadač projektu
from: 8726cf83
---

## Čo budete robiť

Upravte budovu tam, kde ju vidíte zboku, nastavte listy, ktoré používa vaša kancelária, a dajte rodinám, veľkostiam a prvkom názvy, aké chcete.

## Úprava v pohľade alebo v reze

1. Zapnite {{ui:Draw}}. V {{ui:Project browser}} otvorte {{ui:Elevations}} alebo {{ui:Sections}}.
2. Kliknite na tlačidlo s ceruzkou {{ui:Edit in this view}} pri riadku. Pohľad sa otvorí tak, ako ho kreslia listy, s tým, čo môžete zmeniť, navrchu.
3. S {{ui:Select and move}}:
   - potiahnite stenu, ktorá je k pohľadu čelom, pozdĺž nej;
   - potiahnite dvere alebo okno pozdĺž ich steny a okno nahor alebo nadol, aby ste zmenili jeho parapet;
   - potiahnite čiaru úrovne nahor alebo nadol a zmeňte jej výšku;
   - potiahnite poznámku.
4. {{ui:Door}} a {{ui:Window}}: kliknite na stenu, kam majú ísť (okno vo výške, na ktorú kliknete).
5. {{ui:Wall}} (v reze): kliknite, kde začína a kde končí na rovine rezu; nakreslí sa na úrovni pod vaším prvým kliknutím, až po ďalšiu úroveň.
6. {{ui:Note}}: kliknite a napíšte. Poznámky sa uchovajú v súbore a nakreslia sa na každom liste, ktorý zobrazuje tento pohľad.
7. {{ui:Level}}: kliknite na výšku, kam má nová úroveň ísť. Je rovnako vysoká ako medzera po úroveň nad ňou (navrchu 3000 mm); potiahnite jej čiaru, ak chcete zmeniť výšku. Druhá úroveň do 50 mm od inej sa odmietne.
8. {{ui:Dimension}}: kliknite, kde začína a kde končí. Kliknutia zachytávajú hrany stien, dverí, okien a úrovní a kóta je vodorovná alebo zvislá podľa toho, ktorým smerom ťaháte. Uchová sa v súbore a nakreslí sa aj s dĺžkou na každom liste, ktorý zobrazuje tento pohľad. Kliknite na ňu pomocou {{ui:Select and move}}, aby ste ju vybrali.
9. {{ui:Delete}} alebo klávesa Delete odstráni vybranú stenu, dvere, okno, kótu alebo poznámku. {{key:Ctrl+Z}} vráti späť poslednú zmenu, kým je panel otvorený. {{key:Esc}} sa vráti na {{ui:Select and move}}.

Každá zmena je rovnaká zmena, akú urobí pôdorys, jeden krok späť: pôdorys, 3D zobrazenie a listy sa prispôsobia.

## Veľkosti listov a popisové polia

1. Otvorte list ({{ui:New sheet}}, alebo jeden z vašich pod {{ui:Sheets}}). Vedľa {{ui:Paper}} sú {{ui:Title block}} a {{ui:Formats…}}.
2. {{ui:Paper}} vypisuje každú štandardnú veľkosť (Letter až Arch E, A4 až A0) a vaše vlastné.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} s obvyklými poliami, alebo vlastné. Polia toho, ktorý vyberiete, sa zobrazia pod názvom listu: zadajte klienta, autora výkresu a revíziu.
4. {{ui:Formats…}} vytvorí vaše vlastné: veľkosť listu (názov, šírka, výška, okraj) a popisové pole (kde sa nachádza, jeho šírka, jeho polia, každé pole na samostatnom riadku; pole ukončené znakom * bude veľké).
5. {{ui:Export}} ich uloží ako súbor knižnice a {{ui:Import…}} pridá jeden do iného modelu. Zostávajú uchované v modeli, takže šablóna ich prenáša.

## Premenovanie rodín, veľkostí a prvkov

1. V {{ui:Project browser}} otvorte {{ui:Families}}.
2. Ceruzka vedľa rodiny ju premenuje; typ každej veľkosti prevezme nový názov.
3. Otvorte veľkosti rodiny, ak chcete premenovať veľkosť alebo prvok umiestnený z nej (zobrazí sa najviac 40 na veľkosť).

Každé premenovanie je jeden krok späť.
