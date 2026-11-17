---
title: Rrjeta dhe kolonat
summary: Vendos vijat e rrjetës me rrathë numerikë dhe me shkronja, sipas hapësirës ose një nga një, vizato mure dhe kolona përgjatë tyre, dhe shiheji në planimetri, fasada dhe prerje.
keywords: rrjetë, rrjeta, vijë rrjete, rrjetë kolonash, bosht, boshte, rreth, vijë rrjete, rrjetë strukturore, 1 2 3, A B C, kolonë, kolona, shtyllë, mbërthim, IfcGrid, IfcColumn
from: bf99a8f7
---

## Çfarë do të bësh

Vendos një ndërtesë mbi një rrjetë, pastaj vizato mure dhe vendos kolona përgjatë vijave të saj.

## Vendos një rrjetë të plotë

1. Ndiz {{ui:Vizato}}, pastaj zgjidh {{ui:Ndërtimi}} › {{ui:Rrjetë}}.
2. Kliko {{ui:Vendos një rrjetë…}}. Thuaj sa **vija numerike** (1, 2, 3…) dhe sa **vija me shkronja** (A, B, C…) do të kesh, dhe sa larg janë. Shkruaj një hapësirë, ose disa të ndara me presje për kaptina të pabarabarta (për shembull `20', 24', 20'`). {{ui:Përtej vijave të fundit}} është sa shtrihet çdo vijë përtej vijave të llojit tjetër të skajshme, dhe {{ui:Të rrotulluara (gradë)}} e rrotullon të gjithë rrjetën.
3. Kliko {{ui:Vendose}}, pastaj kliko ku shkon kryqëzimi i parë (1 / A). Pamja paraprake ndjek treguesin.

Vijat numerike shtrihen përgjatë planimetrisë dhe shpërndahen përgjatë saj; vijat me shkronja shtrihen tërthorë planimetrisë dhe shpërndahen lart në të. Shkronjat kalojnë I dhe O, si në vizatimet, që të mos lexohen kurrë si 1 dhe 0.

## Vizato vijat e rrjetës një nga një

Me {{ui:Rrjetë}} të ndezur, kliko ku fillon një vijë dhe ku mbaron. Ajo merr etiketën e radhës së vijave përgjatë të cilave shtrihet (pas 3 vjen 4; pas B vjen C). Shtyp {{key:Esc}} për të ndalur.

## Ndrysho një vijë rrjete

Me {{ui:Rrjetë}} të ndezur, kliko një vijë për ta zgjedhur. Shkruaj një {{ui:Etiketa}} të re dhe shtyp {{key:Enter}}, ose kliko {{ui:Fshi këtë vijë}} (ose shtyp {{key:Delete}}). {{ui:Rrethat}} vendos rrathët në të dy skajet, në fillim ose në fund të çdo vije, ose askund. Çdo ndryshim është një hap: {{key:Mod+Z}} e kthen mbrapsht.

## Vizato sipas rrjetës

Veglat {{ui:Mur}}, {{ui:Kolonë}} dhe veglat e tjera të vizatimit kapen te vijat e rrjetës dhe te kryqëzimet e tyre (shenja e kapjes është një rreth i vogël me kryq).

**Kolonat:** zgjidh {{ui:Ndërtimi}} › {{ui:Kolonë}}, zgjidh formën (drejtkëndëshe ose e rrumbullakët), madhësinë, dhe nëse kolona shkon **deri në katin sipër** ose deri në një lartësi fikse, pastaj kliko. {{ui:Në çdo kryqëzim rrjete}} vendos një kolonë në çdo kryqëzim që nuk ka ende një. Kliko një kolonë për të ndryshuar formën, madhësinë ose lartësinë te {{ui:Vetitë}}; {{key:Delete}} e heq. Kolonat që shkojnë deri në katin sipër e ndjekin atë kur ndryshon lartësia e tij.

## Çfarë duhet të shohësh

- Rrjeta në planimetrinë e çdo kati, me një rreth dhe etiketën e tij në skajet e çdo vije.
- Vijat e rrjetës në grupin e vizatimeve: në planimetri, dhe në fasada e prerje ku një vijë shihet nga mbi, me rrethin e saj mbi ndërtesë. Shih [Fasadat, prerjet dhe fletët](topic:sheets).
- Në skedarin IFC: një rrjetë për ndërtesën (IfcGrid, vijat e saj numerike në një listë dhe vijat me shkronja në tjetrën), dhe kolonat si IfcColumn me madhësinë, lartësinë dhe sasitë e tyre. Programet e tjera BIM i shfaqin të dyja.

:::note
Një rrjetë që erdhi në një skedar nga një program tjetër shfaqet, dhe veglat kapen te ajo, por vijat e saj nuk mund të ndryshohen këtu.
:::
