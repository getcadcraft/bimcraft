---
title: Regjistro disa skanime në një
summary: Vendos skanimet e marra nga pozicione të ndryshme në një kuadër të vetëm me çifte pikash të zgjedhura ose synime të shkruara, rafino me ICP, ruaj regjistrimin si projekt, dhe eksporto renë e regjistruar si LAS ose E57.
keywords: regjistro, regjistrim, skanime, re pikash, icp, pika më e afërt iterative, synime, çifte pikash, transformim i ngurtë, rreshtim, bashkim, e57, las, skanim në bim
from: e8e270db
---

## Çfarë do të bësh

Disa skanime të të njëjtit vend (secili nga pozicioni i vet i skanerit) fillojnë në koordinatat e tyre. Regjistroji: jep çdo skanimi një vendosje të vetme, që të gjitha të ndodhen në një kuadër të vetëm, pastaj ruaje si projekt dhe shkruaje renën e regjistruar si një skedar të vetëm LAS ose E57.

## Vendos skanimet

1. Hap dialogun ({{ui:Register scans…}} në panelin e nisjes, ose {{ui:Show}} › {{ui:Register scans…}} kur modeli është hapur). {{ui:Add scans…}} pranon skedarë LAS, LAZ, E57, PLY, PCD, PTX, PTS ose XYZ, ose lësho ato në dialog. Skanimet që përdorin njësi të ndryshme refuzohen me një shënim: konverto një prej tyre më parë.
2. Zgjidh {{ui:Scan to move}} dhe {{ui:Place against}}. Pamja tregon çdo skanim në kuadër ashtu siç është tani, me një ngjyrë për secilin: {{ui:Plan}}, {{ui:Front}} ose {{ui:Side}}; tërhiq për të lëvizur dhe përdor rrotën për zmadhim.
3. **Me çifte pikash.** Kliko {{ui:Pick a pair}}, pastaj një pikë në skanimin që do të lëvizet, pastaj e njëjta vend në një skanim tjetër (një cep, një synim, këmba e një kolone). Bëje këtë të paktën tri herë, me pika që nuk janë në një vijë dhe janë të shpërndara. Kliko {{ui:Place by pairs}}: skanimi vendoset me një përshtatje me katrorët më të vegjël, dhe **Mbetur** tregon sa e humb secili çift. Një çift me numër të madh është një zgjedhje e keqe: hiqe me kryqin dhe vendos përsëri.
4. **Me synime.** Nëse koordinatat e vërteta të një pike njihen (synime të matura), kliko {{ui:Pick, then type target}}, kliko pikën në skanimin e vet, dhe shkruaj X, Y dhe Z të synimit në rresht. Çiftet dhe synimet e shkruara përzihen lirisht.

## Rafino me ICP

Çiftet japin një vendosje të përafërt. {{ui:Refine}} zhvendos skanimin derisa sipërfaqet e tij të vendosen mbi ato të skanimit tjetër: së pari **pikë te pikë**, pastaj **pikë te plani**. Tabela liston çdo hap me gabimin e vet dhe sa pika u përputhën; vija mbi të tregon gabimin që bie. {{ui:Stop}} e përfundon ekzekutimin pas hapit në progres dhe ruan atë që arriti. {{ui:Undo}} e kthen mbrapsht gjithë ekzekutimin (ose vendosjen e fundit); {{ui:Reset}} e kthen skanimin te koordinatat e skedarit.

Që të jetë e shpejtë në një laptop, ICP punon mbi një pjesë të zvogëluar të pikave ({{ui:Points used}}, 5,000 deri 60,000) dhe injoron përputhjet më larg se {{ui:Largest match distance}} (si parazgjedhje 5% e madhësisë së skanimit, që zvogëlohet kur qetësohet). Ai ka nevojë për një vendosje të përafërt më parë: skanimet që pothuajse nuk mbivendosen raportojnë se nuk mund të përputhen. Sipërfaqet që janë vetëm të sheshta ose vetëm të drejta nuk mund ta fiksojnë pozicionin përgjatë vetes; shto çifte në atë rast.

## Ruaj dhe eksporto

- {{ui:Save project}} shkruan një skedar të vogël `.ccscans.json`: emrin, madhësinë e secilit skanim dhe një gjurmë të 64 KB të parë të tij, me transformimin e tij. Nuk mban pika. {{ui:Open project…}} i gjen skedarët e skanimit sipas këtyre referencave (skedarët duhet të shtohen më parë) dhe rikthen çdo transformim.
- {{ui:Export LAS}} dhe {{ui:Export E57}} shkruajnë një skedar me çdo skanim në vendin e tij të regjistruar. Pikat nuk rishkruhen në origjinale; transformimi zbatohet gjatë daljes. Me {{ui:Lexo çdo pikë nga skedarët}} të ndezur, çdo skedar lexohet përsëri për çdo pikë (deri në 20 milionë për skanim); të fikur, shkruhen vetëm pikat që shfaqen në shfaqës.
- {{ui:Show registered cloud}} (BimCraft) shkruan LAS dhe e hap në pamjen 3D pranë modelit, si çdo re tjetër.

:::note
Asgjë nuk ngarkohet. Regjistrimi punon në njësitë vetanake të skedarëve dhe ruan milimetrat: një LAS shkruhet me një shkallë që përshtatet (deri në 0.1 mm), një E57 me numra me pikë lëvizëse. Një sistem koordinatash futet në LAS vetëm kur çdo skanim emërton të njëjtin kod EPSG. Shkruesi E57 është i yni; kontrollohet duke i lexuar skedarët e tij përsëri me këtë lexues dhe me libE57Format.
:::
