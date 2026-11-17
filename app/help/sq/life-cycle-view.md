---
title: Shiko çfarë konsumohet gjatë pesëdhjetë vjetësh
summary: Dritaret, dyert, përfundimet dhe çatia që mban modeli, jetëgjatësia e tyre, vitet kur zëvendësohet secili, dhe kostoja sipas vitit dhe vlera e tanishme e saj kur shkruan një kosto për njësi.
keywords: cikli jetësor, ciklijetësor, jetëgjatësi shërbimi, zëvendësim, mirëmbajtje, kosto, vlerë e tanishme, skontim, inflacion, 50 vjet, dritare, bojë, çati, përfundime, kosto e plotë e ciklit
from: 1b849545
---

Seksioni {{ui:Pamja e ciklit jetësor}} i panelit të majtë liston çfarë mban modeli që konsumohet dhe kur zëvendësohet gjatë periudhës së studimit (50 vjet në fillim). Asgjë në model nuk ndryshohet.

## Si ta lexosh

Çdo pjesë shfaq sasinë e vet (e matur nga modeli: sipërfaqja e dritares, dyert e jashtme dhe të brendshme, përfundimi i murit të jashtëm, bojë e brendshme, përfundimi i dyshemesë dhe i tavanit, sipërfaqja e çatisë, shkallët), një **jetëgjatësi në vite** dhe një **kosto për njësi**. Një pjesë zëvendësohet në jetëgjatësinë e vet, në dyfishin e saj e kështu me radhë, për aq kohë sa kjo është para fundit të studimit. Pra një dritare 30-vjeçare në një studim 50-vjeçar zëvendësohet një herë, në vitin 30. Jetëgjatësitë e shërbimit janë shifra tipike planifikimi: ndryshoji sipas produkteve dhe klimës suaj. Nuk supozohet asnjë kosto; shkruani një për të parë paratë sipas vitit, totalin dhe vlerën e tanishme. Shtoni një normë skontimi dhe një normë inflacioni nëse i dëshironi.

{{ui:Ruaj planin (CSV)}} shkruan përbërësit dhe vitet. Tubat, kanalet, instalimet elektrike dhe pajisjet listohen gjithashtu (shih më poshtë).

## Tubat, kanalet, instalimet elektrike dhe pajisjet

- **Tubat dhe kanalet** janë metrat e çdo linje të vizatuar. **Pajisjet** (pompat, ventilatorët, valvulat, terminalet, armaturat, daljet, çelësat, panelet dhe gjërat e tjera që skeda Assets gjurmon) numërohen sipas llojit, secili lloj me një jetëgjatësi planifikimi. Një artikull që ka **jetëgjatësinë e shërbimit** të vet të vendosur në skedën Assets është rresht i veçantë me atë jetëgjatësi, dhe nëse ka datë instalimi, fillon nga mosha e tij: një pompë 16-vjeçare me jetëgjatësi 10 vjet është për t'u zëvendësuar tani, pastaj çdo dhjetë vjet.
- **Instalimi elektrik** është një **vlerësim**: distanca në plan nga paneli përgjatë pajisjeve të çdo qarku, nga më e afërta te më e largëta, shumëzuar me 1.25 për rrugëzimin. Modeli nuk vizaton kabllo, prandaj kontrolloje me llogaritjen tënde të sasive.
- Jetëgjatësitë janë shifra planifikimi për t'u rishikuar, jo burim.

## Karboni për çdo zëvendësim

Shëno {{ui:Përfshi karbonin e mbartur të çdo zëvendësimi}}. Një dritare, derë, shkallë, çati, tub ose pajisje e re llogaritet me karbonin që kanë elementët e modelit të atij lloji (faktorët e skedës Carbon, për njësi). Një pjesë pa element ose faktor, si bojë, përfundime dhe instalime elektrike, shfaq një viza dhe listohet. Fundi i jetës së pjesës së vjetër dhe puna e zëvendësimit nuk llogariten.
