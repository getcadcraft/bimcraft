---
title: Ciyaar jadwalka dhismaha moodelka
summary: Fur liiska hawlaha oo ah CSV, ku xidh hawl kasta walxaha sifo ahaan, kadibna u gudub taariikhaha si aad u aragto waxa la dhisay, waxa socda iyo waxa weli aan bilaabmin.
keywords: 4d, jadwal, taxanaha dhismaha, timeline, marxaladeynta, barnaamij, gantt, hawlo, taariikhaha, simulation, horumar, la dhisay, csv, marxalad, phase, xirmada shaqada, wbs, koox
from: 1b985a64
---

## Waxa aad samayn doontid

Daawo dhismaha oo kor u kacaya: hawl kasta oo jadwalkaaga ku jira oo ku xidhan walxaha uu dhisayo, oo maalin-maalin lagu muujiyo.

## Tallaabooyin

1. Fur moodel IFC oo fur {{ui:Jadwalka 4D}} panel-ka bidix.
2. Guji {{ui:Soo deji tusaale}} si aad u hesho liis hawlaha oo leh hal toddobaad dabaq kasta, oo ku beddel miis-xisaab. Ama qor kaaga.
3. Guji {{ui:Fur liiska hawlaha…}} oo dooro CSV-ga.
4. Jiid dhanka taariikhda, ama guji {{ui:Bilow}}.

## Liiska hawlaha

CSV oo leh safka madaxa iyo tiirarka **Task**, **Start**, **Finish**, **Field** iyo **Value**. Kala-soocidda waxay noqon kartaa koma ama semicolon labaduba way shaqeeyaan.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Dabaqa 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Saqaf | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Saqaf | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Qor taariikhaha qaabka YYYY-MM-DD.
- Safku wuxuu hawlka ku xidhaa walxaha oo dhan ee **Field**-kooda **Value**-kooda la mid yahay. Field waa sifo sida Storey, Class, Name, Type, Material, Tag ama GlobalId, ama sifo kasta oo lagu qoro set-kiisa iyo magaciisa, sida `Pset_WallCommon.FireRating`.
- Ku celi hawl safyo badan oo taariikh isku mid ah, si aad walxo dheeraad ah ugu xidhto.

## Marxaladaha iyo xirmooyinka shaqada

Ku dar tiir **Stage**, tiir **Package**, ama labadaba, si aad hawlaha ugu soo ururiso marxaladaha iyo xirmooyinka shaqada. Phase iyo WBS waxay sidoo kale shaqeeyaan sida magacyada tiirarka.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Sagxadda dabaqa 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Qaab-dhismeed | Frame |
| Darbiyada dabaqa 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Qaab-dhismeed | Frame |
| Albaabbada | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Dhamaystirka | Joinery |

- Hawl wuxuu ku jiraa hal marxalad iyo hal xirmo. Haddii safka dambe ee isla hawlaha uu magac kale magacaabo, safkaas waa la liistaa lambarka safkiisa oo waa la dhaafaa.
- Magac xirmo isku mid ah laba marxalad gudahood waa laba xirmo.

Marka liiska leeyahay kooxo, liiska {{ui:Muuji}} ayaa ka soo muuqda taariikhda kor. Dooro marxalad ama xirmo, oo waxay u ciyaartaa sidii hal mid:

- jiidka iyo {{ui:Bilow}} waxay socdaan laga bilaabo bilowga ugu horreeya ee kooxda ilaa dhammaadka ugu dambeeya,
- kaliya hawlaha kooxda ayaa la liistaa oo la sawiraa, wax kasta oo ka baxsan kooxda waa muuqaal cadaan ah,
- khadka hoos ee liiska wuxuu sheegayaa imisa hawl oo kooxda ka mid ah ayaa la dhammeeyay, la socda, iyo kuwa soo socda taariikhdaas,
- {{ui:Dooro walxaha}} wuxuu doortaa walxaha kooxda oo dhan, si loo isticmaalo {{ui:Muuji}}, {{ui:Goyn}} ama jadwal.

Dooro **Dhammaan hawlaha** si aad jadwalka oo dhan dib ugu aragto.

## Waxa aad arki lahayd

- **Built**: walxaha hawlahooda oo dhan la dhammeeyay, midabkooda u gaar ah.
- **In progress**: walxaha ay hawl socota maalintaas ku jirto, midab ochre ah. Hawl waxa la socdaa laga bilaabo taariikhda bilowga ilaa taariikhda dhammaadka.
- **Not started**: muuqaal cadaan ah.
- Walxaha aan hawl ku jirin way sii joogaan sidooda. Liiska wuxuu muujinayaa imisa walxood ayaa hawl kasta helay. Safyada aan la akhriyi karin, ama aan wax helin, waxaa lagu liistaa lambarkooda safka.

## Xiriiriyaasha, jaantuska Gantt iyo MS Project

- Fur fayl Microsoft Project XML (`.xml`) ama CSV oo leh tiir `Predecessors`. Xiriiriyayaashu waxay noqon karaan finish to start, start to start, finish to finish ama start to finish, mid kastaba leh lead ama lag maalmo.
- Hoos liiska hawlaha, jaantuska Gantt wuxuu hawl kasta ku sawiraa bar, falaadhna xiriiriyayaasha u dhexeeya. Hawlaha ku jira jidka muhiimka ah (critical path) waa casaan. Xiriiriye wareeg ah ama predecessor aan jirin ayaa lagu liistaa panel-ka.
- {{ui:Kaydi sida MS Project XML}} iyo {{ui:Kaydi CSV oo leh xidhiidhada}} waxay jadwalka dib u qoraan iyadoo xiriiriyayaashiisa ku jira.

## Xiga

- [Raadi walxaha fasal, magac ama sifo](topic:find)
- [Midee walxaha iyada oo sifo lagu saleeyay](topic:color-by-property)
