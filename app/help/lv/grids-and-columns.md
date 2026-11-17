---
title: Režģi un kolonnas
summary: Izvietot režģa līnijas ar numurētiem un burtiem apzīmētiem apļiem, pēc soļa vai pa vienai, zīmēt sienas un kolonnas gar tām un redzēt tās plānos, fasādēs un griezumos.
keywords: režģis, režģi, režģa līnija, kolonnu režģis, ass, asis, aplis, režģa līnija, konstrukcijas režģis, 1 2 3, A B C, kolonna, kolonnas, pīlārs, stabs, piesaiste, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ko jūs darīsiet

Izveidojiet ēkas plānojumu uz režģa, pēc tam zīmējiet sienas un novietojiet kolonnas gar tā līnijām.

## Novietot visu režģi

1. Ieslēdziet {{ui:Zīmēšana}}, pēc tam izvēlieties {{ui:Būvējums}} › {{ui:Režģis}}.
2. Noklikšķiniet uz {{ui:Novietot režģi…}}. Norādiet, cik **numurētu līniju** (1, 2, 3…) un **burtu līniju** (A, B, C…) vēlaties un cik tālu tās atrodas viena no otras. Ierakstiet vienu soli vai vairākus, atdalītus ar komatiem, nevienmērīgiem laukiem (piemēram, `20', 24', 20'`). {{ui:Aiz pēdējām līnijām}} ir attālums, par cik katra līnija iziet aiz ārējām otra veida līnijām, un {{ui:Pagriezts (grādi)}} pagriež visu režģi.
3. Noklikšķiniet uz {{ui:Novietot}}, pēc tam noklikšķiniet, kur jāatrodas pirmajam krustpunktam (1 / A). Priekšskatījums seko kursoram.

Numurētās līnijas iet pa plānu augšup un tiek izvietotas pa to; burtu līnijas iet pa plānu un tiek izvietotas augšup pa to. Burti izlaiž I un O, kā rasējumos, lai tos nevarētu nolasīt kā 1 un 0.

## Zīmēt režģa līnijas pa vienai

Ar ieslēgtu {{ui:Režģis}} noklikšķiniet, kur līnija sākas un kur beidzas. Tā saņem nākamo apzīmējumu no līniju, pa kurām tā iet (pēc 3 nāk 4; pēc B nāk C). Lai pārtrauktu, nospiediet {{key:Esc}}.

## Mainīt režģa līniju

Ar ieslēgtu {{ui:Režģis}} noklikšķiniet uz līnijas, lai to atlasītu. Ierakstiet jaunu {{ui:Apzīmējums}} un nospiediet {{key:Enter}}, vai noklikšķiniet uz {{ui:Dzēst šo līniju}} (vai nospiediet {{key:Delete}}). {{ui:Apļi}} ievieto apļus abos galos, katras līnijas sākumā vai beigās, vai nevienā. Katrs grozījums ir viens solis: {{key:Mod+Z}} to atsauc.

## Zīmēt pa režģi

Rīki {{ui:Siena}}, {{ui:Kolonna}} un citi zīmēšanas rīki piesaistās režģa līnijām un to krustpunktiem (piesaistes zīme ir neliels aplis ar krustiņu).

**Kolonnas:** izvēlieties {{ui:Būvējums}} › {{ui:Kolonna}}, norādiet formu (taisnstūra vai apaļu), izmēru un to, vai kolonna iet **līdz stāvam virs tās** vai līdz fiksētam augstumam, un pēc tam noklikšķiniet. {{ui:Katrā režģa krustpunktā}} novieto kolonnu katrā krustpunktā, kur tādas vēl nav. Noklikšķiniet uz kolonnas, lai mainītu tās formu, izmēru vai augstumu sadaļā {{ui:Rekvizīti}}; {{key:Delete}} to noņem. Kolonnas, kas iet līdz stāvam virs tās, seko tam, kad mainās tā augstums.

## Ko jūs redzēsiet

- Režģi katra stāva plānā ar apli un tā apzīmējumu katras līnijas galos.
- Režģa līnijas rasējumu komplektā: plānos, kā arī fasādēs un griezumos, kur līnija redzama galā, ar apli virs ēkas. Skatiet [Fasādes, griezumi un lapas](topic:sheets).
- IFC failā: viens režģis ēkai (IfcGrid, tā numurētās līnijas vienā sarakstā un burtu līnijas otrā), un kolonnas kā IfcColumn ar to izmēru, augstumu un daudzumiem. Citas BIM programmas rāda abus.

:::note
Režģis, kas ienācis no citas programmas faila, tiek parādīts, un rīki tam piesaistās, bet tā līnijas šeit nevar mainīt.
:::
