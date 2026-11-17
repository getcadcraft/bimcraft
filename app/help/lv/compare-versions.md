---
title: Divu modeļa versiju salīdzināšana
summary: Atvērt divas to pašu IFC modeļa versijas un redzēt, kuri elementi pievienoti, noņemti un mainīti, saskaņojot tos pēc GlobalId, ar CSV ar katru izmaiņu.
keywords: salīdzināt, diff, atšķirība, versijas, revīzija, izmaiņas, mainīts, pievienots, noņemts, pārvietots, globalid, guid, kas mainījies
from: cfca6971
---

## Ko jūs darīsiet

Redzēt, kas mainījies starp modeli, kāds jums bija, un to, kas jums nosūtīts: kuri elementi ir jauni, kuri pazuduši, kuri pārvietoti vai ieguvuši jaunas rekvizītu vērtības.

## Soļi

1. Atveriet jaunāko versiju, tad noklikšķiniet {{ui:Pievienot modeli…}} un izvēlieties vecāko. Skatiet [Vairāku IFC modeļu skatīšana kopā](topic:several-models).
2. Sarakstā {{ui:Modeļi}} atveriet {{ui:Salīdzināt versijas}}.
3. Izvēlieties {{ui:Vecākā versija}} un {{ui:Jaunākā versija}}.
4. Noklikšķiniet {{ui:Salīdzināt}}.
5. Noklikšķiniet elementu sarakstā, lai to izvēlētos un redzētu tā rekvizītus. Noklikšķiniet {{ui:Lejupielādēt CSV}}, lai saņemtu katru izmaiņu pa rekvizītam.
6. Noklikšķiniet {{ui:Notīrīt}}, lai atgrieztos normālajā skatā.

## Ko vajadzētu redzēt

- **Pievienotie** elementi zilā krāsā, no jaunākās versijas.
- **Noņemtie** elementi sarkanā krāsā, no vecākās versijas.
- **Mainītie** elementi okera krāsā, no jaunākās versijas, katrs ar norādi, kas mainījies: rekvizīti, pārvietojums ar attālumu vai jauna forma.
- Viss, kas nav mainījies, redzams caurspīdīgs.

## Labi zināt

- Elementi tiek saskaņoti pēc GlobalId. Programma, kas katrā eksportā piešķir jaunus GlobalId, liek katram elementam šķist noņemtam un atkal pievienotam.
- Pozīcijas salīdzina tur, kur modeļi atrodas scēnā. Ja viena versija tika apzināti pārvietota, vispirms tās saskaņojiet ar {{ui:Pārvietot}} sadaļā {{ui:Modeļi}}.
- GlobalId, kas vienā modelī izmantots divreiz, salīdzinājumā netiek iekļauts. [Pārbaudīt modeli, vai nav bieži sastopamu problēmu](topic:model-checks) tos atrod.

## Tālāk

- [Problēmas un BCF faili](topic:issues-bcf)
- [Saskaitīt daudzumus pēc rekvizīta](topic:quantity-totals)
