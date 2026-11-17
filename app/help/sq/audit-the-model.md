---
title: Audito modelin: dhoma, etiketa, LOD, përplasje dhe ndërfaqe
summary: Ekzekuto kontrolle gati për dhoma pa emër, etiketa që mungojnë, elementë nën nivelin e zhvillimit që kërkon faza e projektit, përplasje mes disiplinave dhe ndërfaqe LOD 350. Vetëm këshillë: asgjë nuk bllokohet.
keywords: audit, kontroll, dhomë pa emër, etiketë që mungon, shënim, lod, nivel zhvillimi, gur milje, fazë, përplasje, disiplinë, koordinim, ndërfaqe, lod 350, hapje, trarë mbi hapje, depërtim, mbrojtës tubi, tub, kanal ajri, probleme, raport kontrolli, këshillues
from: cc83a14d
---

## Çfarë do të bësh

Shiko të gjithë modelin me një kalim para se ta lëshosh. Auditimi ekzekuton grupe rregullash gati dhe i vendos gjetjet në listën {{ui:Problemet}} si këshilla. Asgjë nuk bllokohet: ti rregullon një gjetje, ose e pranon me një arsye, si çdo problem tjetër.

## Hapat

1. Hap {{ui:Kontrollet e modelit}} › {{ui:Auditimi}} në panelin e majtë, ose {{ui:Mjete}} › {{ui:Audito modelin…}} (shkruar: `AUDIT`).
2. Zgjidh {{ui:Faza e projektit}}. Është e njëjta fazë si në detajet e vizatimit.
3. Shëno grupet e rregullave që do të ekzekutohen.
4. Kliko {{ui:Ekzekuto auditimin}}.
5. Lexo rreshtin për çdo grup rregullash, pastaj hap {{ui:Hap listën e Problemeve}}. Një klik mbi një gjetje zgjedh elementin e saj.
6. {{ui:Raporti i kontrollit}} shkarkon raportin: çdo gjetje, kush pranoi çfarë dhe pse, dhe grupet e rregullave që u ekzekutuan.

## Grupet e rregullave

- **Dhoma pa emër**: një dhomë pa emër, ose ende e quajtur ashtu si e quajti programi ("Dhoma 3").
- **Etiketa që mungojnë**: një derë ose dritare pa shenjë, një dhomë pa numër, një pajisje elektrike pa etiketë.
- **Elementë nën LOD-in e fazës**: çdo mur, dysheme, tavan, çati, derë dhe dritare LOD i të cilit është nën atë që kërkon faza. Një element lexon etiketën LOD të tipit të vet; një element i verifikuar në terren është LOD 500. Elementët pa etiketë numërohen në një shënim, sepse nuk mund të kontrollohen.
- **Përplasje mes disiplinave**: elementë nga dy disiplina (arkitektura, struktura, mekanika, hidraulika, elektrika, sipas klasës IFC) që futen njëri në tjetrin. Një çati që mbështetet mbi muret e veta nuk numërohet.
- **Ndërfaqe LOD 350**: çdo derë dhe dritare ndodhet në një hapje të murit të vet, hapja përshtatet brenda murit, dy hapje nuk mbivendosen, një hapje më e gjerë se kufiri ka një trarë mbi hapje (një element mbi të, ose një shënim te dera ose dritarja), dhe një tub, kanal ajri ose tavë kabllosh që kalon një mur ose dysheme ka një hapje aty. Gjetjet numërohen për çift disiplinash.
- **Elementë të njohur që askush nuk i ka kontrolluar**: muret, dyert, dritaret dhe dhomat e lexuara nga një PDF, një skanim ose një vizatim që janë ende të paverifikuara. Shih [Shëno elementet si të kontrolluara ose të verifikuara në terren](topic:verification).

## LOD-i që kërkon çdo fazë

Hap {{ui:LOD-i që kërkon çdo fazë}} për të parë ose ndryshuar tabelën.

:::note
Tabela dhe gjerësia e trarit mbi hapje janë vlerat fillestare të CadCraft. Nuk janë marrë nga një standard: një projekt cakton LOD-in për fazë në planin e ekzekutimit BIM të tij. Vendosi të tuat. Një zyrë mund ta caktojë tabelën për të gjithë te Cilësimet › Politikat e parazgjedhura › Audit; një ndryshim në seksionin Audit mbahet në këtë kompjuter.
:::

## Gjëra të dobishme

- Një trarë mbi hapje mund të shënohet në vend që të modelohet: zgjidh derën ose dritaren dhe plotëso {{ui:Shënim për trarin mbi hapje}} nën {{ui:Verifikimi}} te **Vetitë**.
- Një tub që kalon nga një hapje e vërtetë nuk prek asnjë sipërfaqe dhe nuk raportohet. Një tub që është modeluar drejt përmes murit, po.
- Kontrolli i përplasjeve ndalon pas disa sekondash në një model shumë të madh dhe e thotë këtë. Për një kontroll të plotë të dy grupeve të zgjedhura përdor [Gjej përplasje mes elementëve](topic:clash-check).
- Ekzekuto përsëri auditimin pasi ndryshon modelin. Gjetjet e pranuara mbeten të pranuara për sa kohë numrat e tyre nuk ndryshojnë.
- Lexon modelin. Nuk zëvendëson një shqyrtim koordinimi nga njerëzit përgjegjës.

## Më tej

- [Kontrollo një model për problemet e zakonshme](topic:model-checks)
- [Gjej përplasje mes elementëve](topic:clash-check)
- [Shëno elementet si të kontrolluara ose të verifikuara në terren](topic:verification)
