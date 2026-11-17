---
title: Atļaujas pakotne un iestādes pavaddokumenti
summary: Apkopojiet regulējuma pārbaudi, iespējamās pārskatīšanas piezīmes, modeli un iestādes pavaddokumentu sarakstu vienā zip failā, katram dokumentam norādot lapu vai specifikāciju, kas to apmierina.
keywords: apstiprināšanas process, iesniegšanas formāts, nepieciešamie rasējumi, lapas izmērs, failu formāts, eksemplāri, noteikumu pakete, atļauja, atļaujas pakotne, būvniecības plāna iesniegšana, plāna apstiprināšana, normatīvā iesniegšana, pavaddokumenti, kontrolsaraksts, iestāde, pašvaldība, dome, plānošanas pieteikums, pārskatīšanas piezīmes, Valsts būvnoteikumi, trūkstoši dokumenti
from: 47dd77ee
---

## Ko jūs darīsiet

Izveidojiet vienu zip failu normatīvai iesniegšanai (ja iestādes saraksts nāk no noteikumu paketes, tajā ir arī apstiprināšanas soļi un iesniegšanas formāts): vāku, komentārus, ko pārskatītājs, visticamāk, izteiks (rakstītus no pārbaudēm, nevis minētus), regulējuma pārskatu, kad ieslēgts pievienojums Būvnoteikumi, modeli un iestādes pavaddokumentu sarakstu, ko prasa jūsu apstiprinošā iestāde.

Šis ir ceļvedis, kas veidots no modeļa. Reģistrētais profesionālis un iestāde nosaka, kas nepieciešams un kas tiek pieņemts.

## Soļi

1. Ar atvērtu modeli atveriet {{ui:Atļaujas pakotne}} kreisajā panelī.
2. Ierakstiet projekta nosaukumu, adresi un pieteicēju un uzskaitiet savas lapas un veidlapas, katru atsevišķā rindā.
3. Zem {{ui:Pavaddokumenti}} izvēlieties {{ui:Iestādes saraksts}}. Saraksti nāk no noteikumu paketēm: pievienojiet pievienojumu Būvnoteikumi un atzīmējiet paketi savai vietai sadaļā Iestatījumi › Būvnoteikumi (pakotne var saturēt noteikumus, apstiprināšanas procesu, iesniegšanas formātu, rasējumu konvencijas un standarta piezīmes). Vispārīgais saraksts darbojas arī bez tā.
4. Izlasiet sarakstu. Katrs dokuments ir {{ui:Saistīts}} (ar lapu un iemeslu), {{ui:Sagatavojis jūs}}, {{ui:Neattiecas}} vai {{ui:Trūkst}}.
5. Papīram, ko sagatavojat pats (veidlapa, īpašuma apliecība, maksas kvīts), izvēlieties {{ui:Sagatavoju es}}. Vienumam, kas atzīmēts "ja attiecas", un tas neattiecas, izvēlieties {{ui:Šeit neattiecas}}. Lai pats saistītu dokumentu ar lapu, izvēlieties lapu.
6. Atveriet {{ui:Apstiprināšanas process}} un {{ui:Iesniegšanas formāts}} zem saraksta, lai izlasītu soļus un to, ko iesniegt (lapu izmēri, failu formāti, eksemplāri). Maksa vai termiņš tiek rādīts tikai tad, ja pakotnes avots to norāda, kopā ar lappusi un datumu, kad tas nolasīts.
7. Noklikšķiniet uz {{ui:Izveidot atļaujas pakotni (zip)}}. Soļi un formāts ir arī uz vāka.

## Kā dokuments tiek saistīts

Dokuments tiek saistīts ar lapu, kurā ir pareizā veida skats (stāva plāns, fasāde, griezums), ar lapu, kurā ir pareizā specifikācija (durvju specifikācija durvīm), vai ar lapu, kuras virsraksts to saka (lapa ar nosaukumu "Situācijas plāns"). Kad modelī ir rindas, bet nevienā lapā nav specifikācijas, vai vieta ir uzzīmēta, bet nevienai lapai nav situācijas plāna virsraksta, vienums paliek trūkstošs un norāda, kāpēc.

## Lietderīgi zināt

- **Katru iestādes sarakstu nav pārbaudījis vietējais praktiķis.** Katrs tika nolasīts no publicētā avota, uz kuru tas atsaucas, datumā, ko tas rāda, un uzrakstīts mūsu pašu vārdiem. Prasības mainās: pārbaudiet iestādes pašreizējo sarakstu.
- Tas, kas kopai vēl trūkst, vai lapa, kas nav tāda izmēra, orientācijas vai mēroga, kādu prasa pakotne, tiek rādīts Problēmu sarakstā kā piezīme. Piezīmes ir padomi: tās nekad neaptur pakotni.
- Trūkstoši dokumenti nekad neaptur pakotni. Tie ir uzskaitīti uz vāka un failā `04-supporting-documents.csv`.
- Saraksti noteikumu paketēs ir dati, nevis kods: Dienvidāfrika (Valsts būvnoteikumi, noteikums A2), Keiptauna (ar Dienvidāfrikas reģionu, kas pievienots no Bibliotēkas), Anglija (valsts informācijas prasības), Portlenda (Oregona), IZDOMĀTA mācību pakotne un vispārīgs saraksts, kas nav nevienas iestādes. Ikviens var uzrakstīt paketi savai vietai.
- Jūsu izvēles tiek glabātas modelī, tāpēc tās ir tur, kad to atverat atkal, un katra ir viens solis, ko var atsaukt.

Skatiet arī [Lapas](topic:sheets) un [Zemesgabals, ēka uz tā un tās stāvi](topic:site-building-and-levels).
