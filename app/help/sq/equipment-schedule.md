---
title: Krijo një tabelë pajisjesh dhe eksporto CSV
summary: Shndërro etiketat e artikujve në një vizatim shërbimi ushqimor në një tabelë pajisjesh, filtro, shko te çdo artikull në fletën e vet, dhe shkarkoje si CSV.
keywords: pajisje, tabelë, shërbim ushqimor, kuzhinë, etiketa artikujsh, kcl, atribute, bom, listë materialesh, csv, fletëllogaritëse, eksport, nxjerrje të dhënash
from: e3faa1c8
---

## Çfarë do të bësh

Lexo listën e pajisjeve nga një vizatim kuzhine ose shërbimi ushqimor, kontrollo, gjej çdo artikull në planimetri, dhe shkarkoje si skedar fletëllogaritëse.

Kjo punon te vizatimet ku etiketat e pajisjeve mbajnë të dhënat e tyre si atribute blloku, siç bëjnë bibliotekat e projektimit të kuzhinave si KCL: çdo etiketë mban numrin e artikullit (`KCL-ITEM`), sasinë, kategorinë, prodhuesin, modelin, të dhënat elektrike dhe hidraulike, dhe shënimet. Vizatimet e tjera nuk kanë skedën {{ui:Pajisjet}}.

## Hapat

1. Hap vizatimin, mundësisht nga dosja e projektit të tij, që edhe vizatimet e lidhura të ngarkohen.
2. Kliko skedën {{ui:Pajisjet}} mbi vizatim. Etiketa e saj tregon sa artikuj janë në fletë, për shembull "Pajisjet (88)".
3. Lexo tabelën: **Artikulli**, **Sasia**, **Pajisja**, **Prodhuesi**, **Modeli**, **Elektrik**, **Hidraulik** dhe **Vendi**.
4. Zgjidh çfarë të listohet në menynë mbi tabelë: **Çdo fletë**, një fletë, **Jo në asnjë fletë**, ose **Gjithçka e etiketuar në vizatim**. Çdo zgjedhje shfaq numrin e vet.
5. Shkruaj në kutinë e filtrit ("Filtro: kategoria, prodhuesi, modeli…") për ta ngushtuar listën, për shembull `refrigerator` ose `208`.
6. Kliko emrin e fletës së një artikulli në kolonën **Vendi**.
7. Shiko vizatimin: BimCraft kalon te ajo fletë, zmadhon artikullin dhe vizaton një unazë rreth tij. Rreshti i statusit thotë "Artikulli *n*, *kategoria* është rrethuar në *fleta*."
8. Kliko {{ui:Pajisjet}} për t'u kthyer te tabela.
9. Kliko {{ui:Shkarko CSV}}.

## Çfarë duhet të shohësh

- Një skedar me emrin "*emri i vizatimit* equipment.csv" (me emrin e fletës në kllapa kur ke listuar një fletë të vetme) në dosjen e shkarkimeve. Hapet në Excel, Numbers, LibreOffice ose Google Sheets.
- Rreshti i statusit: "U shkarkua *emri i skedarit* (*n* artikuj)."

CSV ka këto kolona: Artikulli, Sasia, Kategoria, Prodhuesi, Modeli, Elektrik, Hidraulik, Shënime, Shënime elektrike, Shënime hidraulike, Fletët, Vendosur (sa etiketa). Shkarkon saktësisht rreshtat që shfaq tabela, pasi zbatohen menyja dhe filtri.

## Si ndërtohet tabela

- Lexohet nga **vetë etiketat**, jo nga tabela e vizatuar në fletë. Shënimi mbi tabelë thotë sa etiketa u lexuan.
- Një rresht është një numër artikulli me një grup të dhënash. Sasia e tij është **shuma** e etiketave të tij, ashtu si e numëron një tabelë e printuar: raftet e etiketuara "5" në një vend dhe "3" në një tjetër janë 8, shfaqur si "5 + 3".
- **Vendi** liston fletët që tregojnë çdo artikull, të llogaritura nga ajo që tregojnë viewport-et e çdo fletë, që është ajo që printohet. "Vetëm model" do të thotë se asnjë fletë nuk e tregon.
- **Numri i përdorur dy herë** shënon një numër artikulli në dy pajisje të ndryshme. Rreshti ka një shenjë qelibari.
- Etiketat që asnjë fletë nuk i tregon mbahen veç nën **Jo në asnjë fletë**. Shpesh janë mbetje nga planet e mëparshme ose nga punë të tjera, dhe nuk përzihen kurrë në **Çdo fletë**.
- **Elektrik** tregon amperët, kW, HP, volt, fazën, lidhjen dhe prizën siç janë etiketuar. **Hidraulik** tregon madhësitë e lidhjeve: CW ujë i ftohtë, HW ujë i ngrohtë, DD kullim i drejtpërdrejtë, ID kullim i tërthortë, dhe gaz. Fushat e tjera të etiketës nuk shfaqen ende.

## Gabimet e zakonshme

- **Nuk ka skedën {{ui:Pajisjet}}.** Vizatimi nuk ka etiketa `KCL-ITEM`, ose pajisjet e tij janë vizatuar pa të dhëna. Nuk ka çfarë të lexohet.
- **Numrat ndryshojnë nga tabela e printuar.** Një tabelë e printuar mund të listojë numra rezervë ose emra më të shkurtër se etiketat. Beso etiketat për atë që është vendosur; kontrollo ndryshimet me projektuesin.
- **Hapja e CSV shfaq karaktere të çuditshme.** Skedari është UTF-8. Hapeni me komandën e importit të fletëllogaritësit dhe zgjidh UTF-8 nëse programi e kërkon.
- **Një qelizë fillon me apostrof.** Vlerat që fillojnë me `=`, `+`, `-` ose `@` marrin një `'` në fillim, që fletëllogaritëset të mos i ekzekutojnë si formula.
- **{{key:F}} dhe {{key:P}} nuk bëjnë asgjë.** Ato punojnë te vizatimi, jo te tabela. Kliko së pari një skedë fletë.
