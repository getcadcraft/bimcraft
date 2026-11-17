---
title: Shiko disa modele IFC së bashku
summary: Shto skedarë IFC të tjerë në skenë, si arkitektura, struktura dhe shërbimet, shiheni ata në të njëjtat koordinata, zhvendos njërin, fshih njërin dhe zgjidh cilin redakton.
keywords: federim, federatë, model i federuar, disa modele, skedarë të shumtë, kombino, mbivendos, koordinim, disiplinë, strukturë, mep, shërbime, zhvendosje, zhvendos modelin, modeli aktiv, shto një model
from: df0efbbf
---

## Çfarë do të bëni

Shikoni modele nga disiplina të ndryshme në një vend: modelin e arkitektit me modelet e strukturës dhe të shërbimeve brenda. Secili mbetet skedar i vet; BimCraft vetëm i shfaq së bashku.

## Hapat

1. Hapni modelin e parë IFC si zakonisht.
2. Te {{ui:Modelet}} në të majtë, klikoni {{ui:Shto një model…}} dhe zgjidhni një ose më shumë skedarë IFC. Secili shfaqet në listë dhe në pamjen 3D.
3. Hiqni shenjën e një modeli për ta fshehur; vendoseni shenjën për ta shfaqur sërish.
4. Nëse një model vjen në vendin e gabuar (një pikë tjetër rilevimi), klikoni {{ui:Zhvendos}} nën të, shkruani sa duhet zhvendosur përgjatë X, Y dhe Z në metra, dhe klikoni {{ui:Zbato}}.
5. Modeli me pikën është ai që redaktoni. Klikoni pikën e një modeli tjetër për ta redaktuar atë.
6. Klikoni × pranë një modeli për ta nxjerrë nga skena.

## Hapni modelet e ekipit

Kur modeli i hapur është një skedar në re, në një projekt ekipi, {{ui:Hap modelet e ekipit}} shfaqet nën listë. Ai hap modelet e tjera IFC të projektit pranë këtij, secili i zhvendosur me shmangien që ka vendosur projekti. Modelet e fshehura për ju mbeten jashtë dhe numërohen; një model që projekti e rrotullon hapet pa rrotullim dhe numërohet gjithashtu; skedarët që nuk janë IFC (një DWG, për shembull) anashkalohen dhe emërtohen në rreshtin e statusit. Një model që është tashmë i hapur nuk hapet kurrë dy herë. Butoni fshihet për një skedar që nuk është në një projekt ekipi.

## Çfarë duhet të shihni

- Çdo model në koordinatat e modelit të parë, ashtu si e vendos skedari i tij. Modelet e eksportuara nga i njëjti projekt përputhen pa zhvendosur asgjë.
- Zgjedhja e një elementi të një modeli që nuk redaktoni shfaq vetitë e tij vetëm për lexim, me {{ui:Redakto atë model}} për ta ndërruar.
- {{ui:Pema e modelit}}, {{ui:Katet}}, {{ui:Ngjyra}}, lista {{ui:Ndryshimet}}, vendosja e elementeve të bibliotekës dhe {{ui:Ruaj si IFC}} veprojnë në modelin që redaktoni. Fshehja, izolimi, transparenca dhe {{ui:Përzgjidh të gjitha}} veprojnë në çdo model.
- {{ui:Ruaj si IFC}} shkarkon modelin që redaktoni, me ndryshimet e tij vetëm.

## Gabime të shpeshta

- **Një model është larg ose mungon.** Skedari i tij përdor koordinata të tjera. Përdorni {{ui:Përshtat}} për ta gjetur, pastaj {{ui:Zhvendos}} për ta vendosur në vend.
- **Fshi ose Kopjo është e çaktivizuar mbi një element të zgjedhur.** Ai i përket një modeli tjetër: kaloni së pari te ai.
- **Hapja e një skedari me Zgjidh një skedar zëvendësoi gjithçka.** Kjo nis një skenë të re. Përdorni {{ui:Shto një model…}} për të shtuar skedarë në atë që keni.

## Më pas

- [Fshih, izolo dhe shiko përmes elementeve](topic:hide-and-isolate)
- [Ngjyros elementët sipas një vetie](topic:color-by-property)
