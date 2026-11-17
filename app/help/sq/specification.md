---
title: Shkruani specifikimin nga modeli
summary: Një seksion specifikimi për çdo lloj muri, dere, dritareje, dysheme dhe përfundimi në përdorim, me faktet e tij të lexuara nga modeli dhe tekstin tuaj, i bërë në PDF ose dokument Word.
keywords: specifikim, spec, vizatime pune, faza 5, dokumente ndërtimi, seksion, lloj muri, lloj dere, lloj dritareje, përfundim, klasifikim, uniclass, omniclass, masterformat, dokument, pdf, word, docx, tabela
from: a6acc6d4
---

## Çfarë do të bëni

Merrni një specifikim që ndjek modelin: një seksion për çdo lloj që është vërtet në ndërtesë, secili me strukturën dhe sasitë e tij të lexuara nga modeli, dhe tekstin që shkruani për të.

## Hapat

1. Ndizni {{ui:Vizato}}, hapni **Tabelat** në panelin e majtë dhe klikoni **Specifikimi**.
2. Dialogu liston një seksion për çdo lloj muri, lloj dere, lloj dritareje, dysheme dhe përfundim dhome në përdorim. Nën çdo titull janë **faktet** e tij, të lexuara nga modeli: trashësia, shtresat një nga një, niveli i zhvillimit, madhësitë, sa janë dhe sa peshojnë. Një seksion, elementët e të cilit mbajnë një kod klasifikimi, shfaq kodin në titull.
3. Shkruani tekstin e specifikimit tuaj në kutinë nën një seksion. **Zgjidh elementët e tij** tregon se për çfarë është seksioni.
4. Klikoni **Ruaj**. Është një hap në Zhbëj, dhe teksti mbahet në skedarin e ndërtesës.
5. Hapni **Dokumentet nga modeli**, zgjidhni shabllonin **Specifikimi** dhe klikoni **Pamja paraprake**, pastaj ruajeni si PDF, Word ose Markdown. Shih [Dokumentet nga modeli](topic:documents-from-the-model).

## Tabelat e vizatimeve të punës si dokument

Shablloni **Tabelat e vizatimeve të punës** i printon tabelat e dyerve, dritareve dhe përfundimeve direkt nga modeli, në paraqitjen e zyrës suaj. Në shabllonin tuaj shkruani `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ose emrin e një konfigurimi të ruajtur, për shembull `{{schedule Door schedule by floor}}`. `{{specification}}` printon specifikimin.

## Mirë të dini

- Faktet janë të modelit. Ndryshojnë kur ndryshon modeli; teksti juaj jo.
- BimCraft nuk shkruan asnjë klauzolë të ndonjë standardi, as tekst prodhuesi. Një seksion pa tekst shtypet "Nuk është shkruar ende tekst specifikimi."
- Teksti i shkruar për një lloj që nuk është më në model mbahet dhe listohet nën "Tekst për llojet që nuk janë më në model".
- Për të ndryshuar një lloj të përgjithshëm në një strukturë specifike, shih [Veglat e mureve](topic:wall-tools) (Ndërro llojin).
