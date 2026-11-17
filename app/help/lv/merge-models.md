---
title: Sapludināt divu cilvēku rediģējumus vienā modelī
summary: Ļaujiet git, Fossil vai Mercurial sapludināt divas rediģētas tā paša IFC modeļa kopijas objekta pa objektam, lai divi cilvēki varētu zīmēt vienu ēku un apvienot darbu.
keywords: sapludināt, git, fossil, mercurial, versiju kontrole, konflikts, trīspusējs, cadcraft sapludināšana, gitattributes, ifc, globalid, komanda, divas kopijas, zari
from: 50733df8
---

Divi cilvēki paņem vienas ēkas kopiju: viens zīmē austrumu spārnu, otrs rietumu, un vēlāk kopijām jākļūst par vienu. Ja viņi ir skāruši dažādus objektus, to var izdarīt programma, nevis cilvēks.

## Kā tas darbojas

Katrai sienai, durvīm, līmenim, telpai un īpašību kopai IFC failā ir GlobalId, kas nemainās. Sapludināšana meklē objektus pēc šī identifikatora, nevis pēc numura, ko fails tiem piešķir (`#123`), jo numuri mainās, kad programma saglabā. Daļas, kas pieder objektam un kurām nav paša identifikatora (novietojumi, formas, vienības), tiek salīdzinātas pēc satura.

Abām kopijām jābūt vienai un tai pašai IFC versijai (2x3, 4 vai 4.3). Sapludināšana saglabā jūsu failu tādu, kāds tas ir, ar tā kārtību un numuriem, un pievieno to, kas ir jauns, tāpēc git diff sapludināšanas rezultātā rāda tikai to, ko sapludināšana mainīja.

## Iestatīšana

Git vajag divas rindiņas vienu reizi katrā repozitorijā:

```
# .gitattributes
*.ifc merge=cadcraft

# vienreiz katrā datorā
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez git izpildiet `cadcraft merge <base> <ours> <theirs>`. Fossil un Mercurial pieņem tos pašus trīs failus savā sapludināšanas rīka iestatījumā. Nekas netiek augšupielādēts; viss darbojas jūsu datorā.

## Noteikumi

- Atribūts, kas mainīts tikai vienā pusē, tiek ņemts. Tā pati izmaiņa abās pusēs tiek ņemta vienreiz.
- Tas pats atribūts, mainīts divos veidos (tas pats līmenis pārdēvēts divos veidos), ir **konflikts**: jūsu puse paliek, un pārskatā uzskaitītas abas. Atveriet rezultātu un labojiet to ar roku.
- Saraksts (sienas līmenī, kopas īpašības) tiek sapludināts kā kopa: tas, ko pievienoja kāda puse, paliek, un tas, ko noņēma kāda puse, tiek noņemts. Divi cilvēki, kas katrs pievieno sienas tam pašam līmenim, nekonfliktē.
- Objekts, kas pievienots kādā pusē, paliek ar savu formu un īpašībām. Noņemts vienā pusē un nemainīts otrā: noņemts. Noņemts vienā pusē un mainīts otrā: noņemts un norādīts pārskatā.
- Faila laika zīmogs un autors, kā arī katra objekta īpašnieka vēsture paliek jūsējie.

Ģeometrija tiek sapludināta vesela: sienas forma nāk no vienas puses, nekad nav sajaukta punkt pa punktam. Saspiestie IFC un IFCX faili netiek sapludināti. Pēc sapludināšanas atveriet rezultātu BimCraft un pirms saglabāšanas apskatiet paneli {{ui:Problēmas}}.
