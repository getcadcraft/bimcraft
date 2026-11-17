---
title: Sčítať množstvá, vypísať prvky a zostaviť tabuľku priestorov
summary: Spočítajte prvky a sčítajte ich dĺžky, plochy, objemy alebo ľubovoľnú číselnú vlastnosť, zoskupené podľa ľubovoľnej vlastnosti; vypíšte zoznam s jedným riadkom na prvok; alebo zostavte tabuľku priestorov s ich plochami a objemami. Každé sa stiahne ako CSV.
keywords: množstvo, množstvá, výkaz výmer, súčty, sčítanie, rozpočet, výkaz množstiev, boq, qto, csv, zoskupiť podľa, počet, dĺžka, plocha, objem, priestory, miestnosti, tabuľka miestností, tabuľka plôch, zoznam prvkov
from: e2e7210c
---

## Čo urobíte

Získate súhrny z modelu: dĺžky stien podľa podlažia, počty dverí podľa typu, objem dosiek podľa materiálu, cena každej zóny.

## Postup

1. Otvorte model IFC.
2. Otvorte {{ui:Quantity totals}} v ľavom paneli.
3. V {{ui:Count}} zvoľte {{ui:Every element}} alebo len vybrané.
4. V {{ui:Group by}} zvoľte vlastnosť, napríklad {{ui:Class}}. Kliknutím na {{ui:Add a group}} rozdelíte ďalej, až na tri, napríklad podľa {{ui:Storey}}.
5. V {{ui:Add up}} zaškrtnite čísla na sčítanie. Sady množstiev modelu sú na začiatku zaškrtnuté.
6. Kliknite na {{ui:Download CSV}}, aby sa tabuľka otvorila v tabuľkovom procesore.

## Čo by ste mali vidieť

- Riadok pre každú skupinu s počtom prvkov a každým súčtom, a riadok celkov.
- Prvky bez hodnoty sa spočítajú, ale nič nepridajú. Vtedy CSV pridá stĺpec „vynechané“ vedľa súčtu, aby ste videli, koľko ich je.
- Čísla sú v jednotkách súboru, tak ako ich súbor ukladá, často milimetre pri dĺžkach.

## Jeden riadok na prvok alebo priestory

Zmeňte {{ui:Show}}:

- **Jeden riadok na prvok**: každý prvok na vlastnom riadku, s vlastnosťami pod {{ui:Columns}} a číslami pod {{ui:Add up}}. CSV začína GlobalId každého prvku. Kliknutím na prvú hodnotu v riadku vyberiete tento prvok.
- **Priestory**: každá miestnosť s jej číslom, názvom, podlažím, plochou a objemom a ich súčty. Plochy a objemy pochádzajú z množstiev priestoru, tak ako ich súbor uvádza. Keď ich súbor nemá, merajú sa podľa tvaru priestoru v m² a m³ a zobrazia sa kurzívou; CSV uvádza, ktoré je ktoré.

## Ďalej

- [Nájdenie prvkov podľa triedy, názvu alebo vlastnosti](topic:find)
- [Sfarbenie prvkov podľa vlastnosti](topic:color-by-property)

## Infraštruktúra (IFC 4.3)

V zozname zobrazení vyberte **Infraštruktúra (IFC 4.3)**, aby ste videli cesty, železnice, mosty a vodné stavby sčítané podľa triedy a typu, s dĺžkou, plochou a objemom, ktoré súbor sám uvádza. Množstvo, ktoré súbor neuvádza, zostane prázdne a nikdy sa nevypočíta. **Odoslať množstvá infraštruktúry do TakeoffCraft** uloží súbor `.quantities.json`, ktorý TakeoffCraft otvorí ako typované množstvá.
