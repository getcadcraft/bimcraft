---
title: Ngjyros elementët sipas një vetie
summary: Ngjyros çdo element sipas vlerës së një vetie, si klasa, lloji, kati, materiali, vlerësimi i zjarrit ose kosto; lexo legjendën, kliko një vlerë për të shfaqur vetëm ato elementë, dhe ruaj ngjyrat si skemë për modele të tjera.
keywords: ngjyra, ngjyros, ngjyro sipas, legjendë, pamje inteligjente, veti, lloji, materiali, vlerësimi i zjarrit, filtër, izolo, temë, vlera, skemë, skemë ngjyrash, ruaj ngjyrat, ripërdor, ekip, json, mostër ngjyre
from: f081d343
---

## Çfarë do të bëni

Shihni me një vështrim se si shpërndahet një veti në të gjithë modelin: cilët mure janë të jashtëm, cilat materiale përdoren ku, cilët elementë nuk kanë vlerësim zjarri. Çdo element merr ngjyrën e vlerës së tij, dhe legjenda thotë çfarë do të thotë secila ngjyrë dhe sa elementë e kanë.

## Hapat

1. Hapni një model IFC.
2. Klikoni skedën {{ui:Color}} në të djathtë.
3. Zgjidhni një veti në listë. Të parat i takojnë çdo elementi ({{ui:Class}}, {{ui:Type}}, {{ui:Storey}}, {{ui:Material}}, {{ui:Name}}…); të tjerat vijnë nga grupet e vetive dhe grupet e sasive të modelit, nën emrin e grupit. Numri pas secilës është sa elementë e kanë.
4. Lexoni legjendën: një ngjyrë, vlera dhe sa elementë e kanë.
5. Klikoni një vlerë për të shfaqur vetëm ato elementë. Mbani {{key:Mod}} dhe klikoni për të shtuar vlera të tjera. Shtypni {{key:Shift+H}} për t'i shfaqur përsëri të gjitha.
6. Klikoni {{ui:Off}} për t'u kthyer te ngjyrat e vetë modelit.

## Çfarë duhet të shihni

- Deri në shtatë vlera marrin nga një ngjyrë, më e shpeshta e para. Më shumë vlera se kaq ndajnë një ngjyrë gri, të listuara si **vlera të tjera**.
- Një numër me shumë vlera të ndryshme ndahet në gjashtë intervale të barabarta, nga më e çelta (ulët) te më e errëta (lart).
- Elementët pa këtë veti janë gri e zbehtë, të listuar si **Pa vlerë**, që ata me ngjyrë të dallohen.
- Ngjyrat ndryshojnë me Paper dhe Model, dhe mbeten kur e redaktoni modelin.
- Vetia e një tipi vlen për çdo element të atij tipi; kur një element ka vlerën e vet për të njëjtën veti, vlera e vet fiton.

## Ndryshoni ngjyrat dhe ruajini si skemë

- Klikoni mostrën e ngjyrës te legjenda për të zgjedhur një ngjyrë tjetër për të. Modeli ripiktohet menjëherë.
- {{ui:Save scheme}} shkarkon ngjyrat si një skedar të vogël `.json` me emrin e vetisë, për shembull `Class colors.json`.
- Në një model tjetër, ose te kompjuteri i një shoku ekipi, klikoni {{ui:Open scheme…}} dhe zgjidhni atë skedar. Çdo vlerë në skemë merr ngjyrën e vet, kështu që i njëjti vlerësim zjarri ose i njëjti sistem ka të njëjtën ngjyrë në çdo model.
- Një vlerë që skema nuk e ka piktohet gri dhe listohet si "not in the scheme"; vlerat e skemës që ky model nuk i ka mbeten të listuara me 0, që të shihni tërë skemën.
- Një skemë i mban ngjyrat e veta në të dyja temat. Zgjedhja e një vetie në listë nis përsëri nga ngjyrat automatike.

## Gabime të shpeshta

- **"This model has no … values".** Skema u ruajt për një veti që ky model nuk e ka (për shembull një emër tjetër grupi vetish). Hapni një skemë të bërë për këtë lloj modeli, ose zgjidhni një veti në listë.
- **Një veti mungon nga lista.** Asnjë element me formë në model nuk e ka. Vetitë e vetë kateve dhe hapësirave nuk listohen.
- **Gjithçka ka të njëjtën ngjyrë.** Çdo element ka të njëjtën vlerë, ose asnjërën: shikoni numrat e legjendës.

## Pasi

- [Fshih, izolo dhe shiko përmes elementëve](topic:hide-and-isolate)
- [Gjej rrugën me pemën e modelit](topic:model-tree)
