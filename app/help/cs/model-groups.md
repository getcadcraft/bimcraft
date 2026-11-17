---
title: Skupiny modelu
summary: Vyberte prvky jako jednu pojmenovanou skupinu, umístěte skupinu znovu jinde a změnou jedné kopie změníte všechny.
keywords: skupina, skupina modelu, seskupování, zrušit skupinu, instance, kopie, opakování, typická jednotka, pole, byt, upravit skupinu, IfcGroup
from: 121c5027
---

## Co uděláte

Seskupíte typické pole, umístíte ho několikrát a změníte každou kopii změnou jedné.

## Kde je nástroj

- Rozvržení pásu karet: {{ui:Architektura}} › **Model** › {{ui:Skupina modelu}}.
- Klasické rozvržení: panel {{ui:Kreslení}} › nabídka {{ui:Místnosti}} › Skupina modelu.

## Postup

1. Nástrojem Vybrat vyberte prvky: klikněte na jeden, Ctrl+klik nebo Shift+klik na ostatní.
2. Zvolte {{ui:Skupina modelu}}. Hned se z nich stane skupina. Napište {{ui:Název skupiny}} do řádku předem, abyste ji pojmenovali, nebo ji pojmenujte později přejmenováním.
3. Stiskněte {{ui:Umístit další}} a klikněte, kam má kopie stát: její levý dolní roh přijde na místo kliknutí.
4. Změňte kteroukoli kopii: posuňte konec stěny, změňte velikost dveří, smažte sloup. Každá další kopie skupiny se změní ve stejném kroku a jeden krok Zpět to vrátí všechno.
5. Dokud máte v ruce {{ui:Skupina modelu}}, klik na prvek vybere celou jeho skupinu.

## Další možnosti

- {{ui:Přidat vybrané}}: přidá další prvky do skupiny, kterou jste vybrali naposledy.
- {{ui:Zrušit skupinu}}: tato kopie se stane obyčejnými prvky. Ostatní kopie zůstanou skupinou.
- Celou kopii přesunete nástrojem Posunout: je to stejná skupina na novém místě, ostatní se nepohnou.
- Smažete-li prvky kopie, kopie zmizí.

## Co může být ve skupině

Stěny s dveřmi a okny, sloupy a nakreslené podlahy lze umístit znovu a zachovat stejné. Skupina může obsahovat i jiné prvky, ale pak ji zatím nelze umístit znovu; v příslušném řádku je uvedeno proč.

Kopie se posouvají, neotáčejí ani nezrcadlí.

## V IFC

Skupina je IfcGroup s IfcRelAssignsToGroup k jejím členům, kteří zůstávají obyčejnými stěnami, sloupy a podlažími. Každá kopie jedné skupiny nese stejné id definice.

## Ještě není hotovo

- Otáčení nebo zrcadlení kopie.
- Schodiště, střechy, podlahy místností a položky knihovny ve skupině, která se umisťuje znovu.
- Profil stěny, sklon a otvory ve stěnách se na kopie nepřenášejí.
- Skupiny ve skupinách.

Viz také [Posun, zarovnání a rozmístění](topic:move-align-distribute).
