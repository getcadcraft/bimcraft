---
title: Kontrollo për përplasje
summary: Gjeni vendet ku elementët e një grupi futen në elementët e një tjetri — kanale që kalojnë nëpër trarë, mure që futen në soleta — në një model ose në disa, me një toleranc, dhe kthejeni një përplasje në një çështje.
keywords: përplasje, zbulim përplasjesh, kontroll përplasjesh, përplasje e fortë, ndërhyrje, përplasje, koordinim, mbivendosje, toleranc, mep, strukturë
from: 9cb12346
---

## Çfarë do të bëni

Gjeni vendet ku dy grupe elementësh futen në njëri-tjetrin, për shembull gjithçka te modeli i shërbimeve kundrejt strukturës, pastaj shikoni çdo njërën dhe mbani ato që kanë rëndësi si çështje.

## Hapat

1. Hapni një model IFC, dhe shtoni të tjerët me {{ui:Add a model…}} nëse kontrolloni në disa modele. Shihni [Shikoni disa modele IFC së bashku](topic:several-models).
2. Hapni {{ui:Clash check}} në panelin e majtë.
3. Te {{ui:Check}} dhe {{ui:Against}}, zgjidhni dy grupe: elementët që keni zgjedhur, një klasë (mbi çdo model të hapur), një grup kërkimi të ruajtur (shihni [Gjej elementë sipas klasës, emrit ose vetisë](topic:find)), ose gjithçka.
4. Vendosni sa mbivendosje të injorohet, në metra. 0.01 injoron elementët që vetëm prekin.
5. Klikoni {{ui:Run}}. Kontrolli nis në sfond; {{ui:Cancel}} e ndal.
6. Klikoni një rezultat për ta parë: dy elementët zgjidhen dhe shfaqen, gjithçka tjetër bëhet transparente, dhe pamja zmadhohet tek ata.
7. Klikoni {{ui:Make an issue of it}} nën një rezultat për ta shkruar në skedën {{ui:Issues}}. Shihni [Çështjet dhe skedarët BCF](topic:issues-bcf).

## Çfarë duhet të shihni

- Përplasjet e listuara me emrat e të dy elementeve (dhe skedarët e tyre, kur janë hapur disa modele) dhe sa thellë mbivendosen, më e thella e para.
- Sipërfaqet që vetëm prekin, si një mur që qëndron mbi një soletë ose një derë në hapjen e vet, nuk janë përplasje.

## Gjëra të dobishme

- Ky është një kontroll bazë përplasjesh të forta: elementë me sipërfaqe që kryqëzohen. Një element i fshehur plotësisht brenda një tjetri (një tub i varrosur në mur) nuk gjendet ende.
- Thellësia është sa mbivendosen kufijtë e dy elementeve në pikën më të vogël: një udhëzues, jo një matje e saktë.

## Më pas

- [Mas distancat, sipërfaqet e faqeve dhe vendndodhjet në 3D](topic:measure)
- [Fshih, izolo dhe shiko përmes elementëve](topic:hide-and-isolate)
