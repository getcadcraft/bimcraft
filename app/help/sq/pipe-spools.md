---
title: Spool-et e tubave të çelikut dhe fletët e spool-eve
summary: Ndani një linjë tubi çeliku me saldim tip butt në spool-e me gjatësinë më të madhe që zgjidhni dhe te saldimet në terren që vendosni, numërojini dhe shkarkoni një fletë spool-i për secilin spool (pamja 3D, gjatësitë e prera, pjesët lidhëse, saldimet, lista e materialeve) si PDF dhe CSV; kanalet marrin një listë prerjesh të copave të drejta.
keywords: spool, spool-e, fletë spool-i, izometrik, prodhim, parafabrikim, saldim në terren, saldim në punëtori, saldim butt, gjatësi prerjeje, listë prerjesh, listë materialesh, bom, tub çeliku, schedule 40, numër linje, listë prerjesh kanali, copa kanali
from: 539f51de
---

## Çfarë do të bëni

Ktheni një linjë tubi çeliku në copat që një punëtori i saldon dhe një montues i vendos: spool-e jo më të gjata se një gjatësi që zgjidhni, të ndara aty ku vendosni saldime në terren, secili me fletën e vet.

Vetëm **tub çeliku me saldim tip butt** ndahet në spool-e (madhësitë e tubit ASME B36.10M, lakimet në rreze të gjatë ASME B16.9). Tubat e bakrit, PVC dhe PEX nuk kanë bashkime saldimi tip butt, prandaj linjat e tyre nuk kanë spool-e.

## Ndaj një linjë në spool-e

1. Zgjidhni një linjë tubi çeliku. Te Vetitë, shënoni **Ndaj në spool-e**.
2. **Spooli më i gjatë**: gjatësia më e madhe e vijës qendrore që mund të ketë një spool (6 m, rreth 20 ft, si fillim).
3. **Numri i linjës**: pjesë e numrit të çdo spooli. Një linjë e re me spool merr numrin e lirë të radhës të sistemit të saj.

Spool-et numërohen përgjatë linjës nga pika e saj e parë: `CHW-12-S01`, `CHW-12-S02` … (sistemi, numri i linjës, spool-i). Një spool rritet pjesë pas pjese; pjesa që do ta bënte shumë të gjatë fillon spool-in tjetër, dhe një gjatësi e drejtë më e gjatë se një spool priten aty ku spool-i mbushet.

## Vendos saldime në terren

1. Hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Saldim në terren}}.
2. Klikoni te një tub me spool aty ku shkon saldimi në terren. Brenda një gjatësie të drejtë tubi priten aty; brenda një lakimi ose valvule, saldimi zhvendoset te bashkimi më i afërt.

Vetitë listojnë saldimet në terren të linjës, secili me {{ui:Hiq}}. Çdo ndryshim është një hap i {{ui:Zhbëj}}.

## Fletët e spool-eve

Te Vetitë e një linje me spool:

- {{ui:Fletët e spool-eve (PDF)}}: një faqe për spool. Majtas, spool-i në pamje izometrike 30°: segmentet e drejta të numëruara, saldimet në punëtori si pika, saldimet në terren të shënuara FW, dhe veriu i planimetrisë. Djathtas, numri i spool-it, madhësia, skedula dhe gjatësia e tij, pastaj **gjatësitë e prera**, **pjesët lidhëse**, **saldimet** (një saldim butt në punëtori te çdo bashkim brenda spool-it, një saldim në terren aty ku takon spool-in tjetër) dhe **listën e materialeve** me peshën e tubit (peshë ASME B36.10M plain-end).
- {{ui:Lista e spool-eve (CSV)}}: e njëjta gjë, një bllok për spool.

:::note
Gjatësitë e prera janë nga skaji në skaj siç vizatohen: nuk hiqet asnjë hapësirë rrënjë apo lejë saldimi. Lakimet janë në rreze të gjatë B16.9; trungjet, reduktorët dhe valvulat janë gjenerikë, të përmasuar sipas tubit, jo sipas B16.9 apo prodhuesit, dhe fleta e thotë këtë. Peshat e pjesëve lidhëse nuk jepen. Mjet hartimi dhe koordinimi, i përmasuar nga një inxhinier.
:::

## Në skedarin IFC

Çdo pjesë e një linje me spool mban **CadCraft_Spool** me SpoolId-në e saj, linjën, numrin e spool-it në linjë, dhe ku fillon dhe mbaron përgjatë linjës. Linja i mban rregullat e saj (spooli më i gjatë, saldimet në terren, numri i linjës) në grupin e vet, kështu që spool-et kthehen të njëjta kur skedari hapet përsëri.

## Kanalet: një listë prerjesh

Hapni {{ui:Ndërtimi}} dhe klikoni {{ui:Lista e prerjeve të kanaleve}}: një CSV i copave të drejta të kanaleve sipas sistemit, formës dhe madhësisë, ku çdo gjatësi e drejtë është prerë në copa të **Gjatësisë së copës** te shiriti i Kanal ajri (1500 mm, rreth 5 ft, si fillim), dhe pjesa që mbetet. Vetëm gjatësi: pa brazda, trashësi lamine apo lidhës.
