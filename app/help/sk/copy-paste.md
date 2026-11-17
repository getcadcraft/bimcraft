---
title: Kopírovanie, prilepenie a duplikovanie položiek knižnice
summary: Skopírujte umiestnenú položku knižnice a prilepte ju tam, kam kliknete, priamo vedľa originálu alebo do iného modelu; vlastnosti akéhokoľvek iného prvku skopírujte ako text; vráťte späť a znova vykonajte zmenu.
keywords: kopírovať, prilepiť, duplikovať, schránka, prilepiť na rovnaké miesto, vystrihnúť, zmazať, vybrať všetko, späť, znova, ponuka úprav, viac, položka knižnice, umiestnenie, opakovanie, pole
from: 6ac15931
---

## Čo budete robiť

Pridajte ďalšie kópie položky, ktorú ste už umiestnili: druhý pracovný stôl, rad umývadiel. Táto téma sa týka **umiestnených položiek knižnice**, teda prvkov, ktoré BimCraft zapísal do modelu. Jednu z nich možno prilepiť do ľubovoľného modelu, aj na inej karte. Steny, dvere a každý ďalší prvok sa kopírujú, vystrihujú, prilepujú a mažú rovnako v rámci vlastného modelu: pozri [Zmazanie, vystrihnutie, kopírovanie a prilepenie stavebných prvkov](topic:edit-elements).

Príkazy sú na paneli nástrojov nad modelom: {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}} a {{ui:Viac}}, ponuka s {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}. Príkaz, ktorý momentálne nemôže byť vykonaný, je sivý; ukážte naň, aby ste si prečítali dôvod, alebo naň kliknite a stavový riadok vysvetlí, prečo.

## Postup

1. Otvorte model IFC s položkou knižnice v ňom, alebo najprv nejakú položku umiestnite. Pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library).
2. Kliknite na položku v 3D zobrazení. Jej vlastnosti zobrazia pole **Položka knižnice**.
3. Kliknite na {{ui:Kopírovať}} alebo stlačte {{key:Mod+C}}.
4. Kliknite na {{ui:Prilepiť}} alebo stlačte {{key:Mod+V}}. Otvorí sa lišta umiestňovania a priehľadný box sa pohybuje za ukazovateľom, otočený ako originál.
5. Stlačte {{key:R}} na otočenie o 90°, {{key:Tab}} na prichytenie jeho zadnej strany k stene, alebo zadajte X a Y na lište umiestňovania.
6. Kliknite na miesto, kam má kópia ísť. Každé kliknutie umiestni ďalšiu kópiu; {{key:Esc}} ukončí umiestňovanie.
7. Kliknite na {{ui:Uložiť ako IFC}} a stiahnite upravenú kópiu modelu.

## Prilepiť na rovnaké miesto

{{ui:Viac}}, {{ui:Prilepiť na rovnaké miesto}} alebo {{key:Mod+Shift+V}} prilepí bez klikania, na rovnaké X a Y a otočené rovnako:

- **Do toho istého modelu, na to isté podlažie**: dve položky presne na jednom mieste by neboli užitočné, takže kópia pôjde priamo vedľa originálu, o šírku položky plus 100 mm pozdĺž vlastnej šírky položky. Prilepte na rovnaké miesto znova z novej kópie a vytvoríte rad.
- **Na iné podlažie alebo do iného modelu**: presne rovnaké X, Y a otočenie. BimCraft použije podlažie s rovnakým názvom; ak takého niet, to najbližšie podľa výšky. Stavový riadok povie, ktoré.

## Duplikovať

{{ui:Viac}}, {{ui:Duplikovať}} alebo {{key:Mod+D}} skopíruje vybranú položku a hneď začne jej prilepovanie: jeden krok namiesto dvoch.

## Do iného modelu alebo na inú kartu

To, čo skopírujete, zostáva uložené v tomto prehliadači, takže môžete otvoriť iný model IFC alebo BimCraft na inej karte a prilepiť to tam. Druhý model potrebuje samotnú položku knižnice: BimCraft ju má, ak bola položka na tejto karte umiestnená, vymenená alebo aktualizovaná. Položku umiestnenú v predchádzajúcej relácii možno prilepiť znova iba do jej vlastného modelu; v inom modeli ju umiestnite z karty {{ui:Knižnica}}.

## Čo by ste mali vidieť

- Kópiu v modeli, vybratú, s rovnakou položkou knižnice, licenciou, údajmi o zariadení, množstvom a poznámkou ako originál, a **ďalšie voľné číslo položky**. Číslo zmeníte vo Vlastnostiach v časti `CadCraft_Placement`.
- „Umiestnené: *položka* (položka *n*)“ v zozname zmien. {{key:Mod+Z}} to vráti späť; {{key:Mod+Y}} to vráti znova.

## Dobré vedieť

- Kópie zdieľajú typ originálu, takže všetky používajú jednu sadu geometrie, rovnako ako pri dvojitom umiestnení tej istej položky.
- {{ui:Späť}} a {{ui:Znova}} pokrývajú každú zmenu: upravené hodnoty, umiestnenia, prilepenia, výmeny a aktualizácie. Znova vráti umiestnenie na to isté miesto; nová zmena zruší to, čo sa dalo znova vykonať.
- Vo 2D zobrazení výkresu nie je nič, čo by sa dalo vybrať, takže nič nie je možné skopírovať. Na zmenu výkresu použite {{ui:Upraviť v CadCraft}}, ak sa zobrazí.

## Časté chyby

- **{{ui:Prilepiť}} hlási, že prvky pochádzajú z iného modelu.** Naposledy skopírovaný bol stavebný prvok alebo viacero prvkov; tie sa prilepia iba do vlastného modelu. Vyberte jednu umiestnenú položku knižnice a skopírujte ju.
- **{{ui:Prilepiť}} hlási, že kópia pochádza z iného modelu bez svojej položky knižnice.** Umiestnite položku raz z karty {{ui:Knižnica}} na tejto karte, potom ju skopírujte a prilepte.
- **{{key:Mod+C}} namiesto toho kopíruje text stránky.** Text bol vybraný na stránke. Najprv kliknite na model.

## Súvisiace

- [Klávesy a myš](topic:keyboard#edit)
- [Nastavenia BimCraft](topic:settings)
