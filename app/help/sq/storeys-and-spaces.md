---
title: Shfaq dhe fshih katet, hapësirat dhe skajet
summary: Fik katet për të parë brenda një ndërtese, shfaq dhomat dhe hapësirat, dhe ndiz ose fik vijat e skajeve.
keywords: katet, nivele, dysheme, fshih, izolo, dhoma, hapësira, ifcspace, skajet, dukshmëri, prerje
from: b838dcc0
---

## Çfarë do të bësh

Shiko brenda një modeli IFC duke fikur katet mbi atë që të intereson, pastaj shfaq dhomat dhe hapësirat, dhe fik vijat e skajeve për një pamje më të pastër.

## Hapat: shiko një dysheme

1. Hap një model IFC. Shih [Hap një model IFC dhe shiko rreth në 3D](topic:open-ifc-model).
2. Gjej listën {{ui:Katet}} në të majtë. Kati më i lartë është i pari, si kur lexon një prerje nga çatia poshtë.
3. Hiq shenjën te çatia dhe te çdo kat mbi dyshemenë që dëshiron.
4. Kliko {{ui:Sipër}} për të parë poshtë mbi atë dysheme.
5. Vër përsëri shenjat te katet për t'i kthyer.

## Çfarë duhet të shohësh

Çdo kat që çshënon zhduket menjëherë, me gjithçka mbi të. Lista shfaq vetëm katet që mbajnë diçka të dukshme. Elementët që nuk janë caktuar në asnjë kat grupohen si **Jo në një kat** në fund; elementet sipërfaqësore dhe disa mobilje shpesh bien aty.

## Hapat: shfaq dhomat dhe hapësirat

1. Kliko {{ui:Hapësira}} në shiritin mbi model. Butoni mbetet i shtypur.
2. Shiko modelin: dhomat dhe hapësirat shfaqen si vëllime të zbehta, transparente.
3. Kliko një hapësirë për të lexuar vetitë e saj, si emrin, numrin dhe sipërfaqen, djathtas.
4. Kliko {{ui:Hapësira}} përsëri për t'i fshehur.

Hapësirat fshihen kur hapet një model, sepse përndryshe do të mbulonin muret dhe dyshemetë.

## Hapat: skajet

1. Kliko {{ui:Skajet}} për të fikur vijat e holla të skajeve.
2. Kliko përsëri për t'i ndezur.

Në modele shumë të mëdha (mbi 1.5 milionë trekëndësha) butoni është i çaktivizuar, me majën "Skajet janë fikur për modele shumë të mëdha". Kjo kursen memorie.

## Gabimet e zakonshme

- **Heqja e shenjës së një kati dhe ende shohësh pjesë të tij.** Një element i përket katit që i caktoi programi eksportues. Një mur ose shkallë e lartë shpesh i përket vetëm katit të bazës së vet, kështu që mbetet kur kati sipër fshihet, ose zhduket me katin poshtë.
- **Fshehja e kateve për të parë brenda.** Një kuti prerjeje është shpesh më e shpejtë: shih [Pritni një model IFC me një plan prerjeje](topic:section-plane#a-section-box). Mund të heqësh shenjat edhe te rreshtat e {{ui:Pema e modelit}} (shih [Gjej rrugën me pemën e modelit](topic:model-tree)).
- **Klikimi i një hapësire përmes një muri.** Klikimi zgjedh sipërfaqen e dukshme më të afërt. Fshih katin sipër, ose kalo te {{ui:Sipër}}, pastaj kliko.
- **Emrat e kateve duken të çuditshëm.** BimCraft shfaq emrat e kateve të ruajtura në skedar. Nëse thonë "Level 1" ose një numër, kjo është ajo që shkroi eksportuesi.
