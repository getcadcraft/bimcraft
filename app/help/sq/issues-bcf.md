---
title: Çështjet dhe skedarët BCF
summary: Ruaj një pamje të modelit si çështje — kamerën, elementët e zgjedhur, ata të fshehur, prerjen — ndaje si skedar BCF me mjete të tjera koordinimi, dhe hap skedarët e tyre BCF për të parë çështjet e tyre.
keywords: bcf, bcfzip, çështje, temë, pikëpamje, raport përplasjesh, koordinim, koment, pamje e ruajtur, hap bcf, ruaj bcf, eksporto, importo
from: 2a6cf201
---

## Çfarë do të bëni

Tregoni një problem në model dhe ruani pamjen që e tregon, pastaj jepeni tjetrit në një skedar BCF, formatin që lexojnë dhe shkruajnë mjetet e tjera të koordinimit.

## Hapat

1. Hapni një model IFC dhe vendosni pamjen: rrotulloni drejt tij, zgjidhni elementët e përfshirë, fshihni ç'pengon, prijeni me një plan ose kuti prerjeje.
2. Klikoni skedën {{ui:Çështje}} në të djathtë, pastaj {{ui:Çështje e re nga kjo pamje}}.
3. Shkruani një titull, dhe një koment nëse dëshironi; zgjidhni një status; jepni emrin ose e-mailin tuaj (nëse jeni hyrë, emri i llogarisë suaj plotësohet; shih [Cilësimet e BimCraft](topic:settings#your-name-on-issues)). Klikoni {{ui:Krijo çështjen}}.
4. Klikoni {{ui:Shfaq}} te një çështje për ta kthyer pamjen e saj.
5. Klikoni {{ui:Ruaj BCF}} për të shkarkuar çdo çështje si një skedar të vetëm `.bcf`.
6. Për të parë çështje që dikush tjetër i ka bërë, klikoni {{ui:Hap BCF…}} dhe zgjidhni skedarin e tyre `.bcf` ose `.bcfzip`.

## Çfarë duhet të shihni

- Çdo çështje në listë me një imazh të pamjes së saj, titullin, statusin, autorin dhe datën.
- {{ui:Shfaq}} e kthen kamerën, elementët e zgjedhur, atë që ishte fshehur (ose vetëm gjërat që ishin shfaqur) dhe prerjen. Elementët gjenden me GlobalId-në e tyre në çdo model të hapur; rreshti i statusit thotë nëse disa mungojnë.
- Një plan ose kuti prerjeje nga një mjet tjetër shfaqet kur përputhet me boshtet e modelit; planet e prirura ose shtesë kthehen si një vëllim prerjeje (deri në 6 plane). Një çështje mban kutinë e parë të një vëllimi me disa kuti.

## Të mirë për t'u ditur

- Skedari është BCF 2.1 dhe e mban pamjen në koordinatat e vetë modelit, kështu që mjetet e tjera e vendosin kamerën në të njëjtin vend.
- Çështjet qëndrojnë në këtë skedë derisa t'i ruani. Hapja e një modeli tjetër e mban listën; hapni modelin për të cilin janë çështjet përpara se t'i shfaqni.
- Një kamerë paralele (ortogonale) nga një mjet tjetër shfaqet me kamerën perspektivë të këtij shikuesi, e shtyrë prapa, kështu që i njëjti pjesë e modelit mbush pamjen.

## Gabime të zakonshme

- **Shfaq e zhvendosi kamerën diku të çuditshme.** Çështja u bë në një model tjetër ose me koordinata të tjera. Hapni modelin e duhur së pari.
- **Skedari nuk hapet.** Nuk është një zip BCF, ose është i dëmtuar; rreshti i statusit thotë pse.

## Më pas

- [Fshih, izolo dhe shiko përmes elementeve](topic:hide-and-isolate)
- [Prit një model IFC me një plan prerjeje](topic:section-plane)
