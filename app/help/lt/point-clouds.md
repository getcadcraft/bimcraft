---
title: Rodyti taškų debesį šalia modelio
summary: Atidarykite lazerinį nuskaitymą (LAS, LAZ, E57, PLY, PCD, PTX, PTS arba XYZ) 3D vaizde atskirai arba su IFC modeliu, nuspalvinkite jį, iškirpkite ploną pjūvį, matuokite iki jo taškų ir perduokite braižymo programai, kad nubrėžtumėte tikrosios būklės linijas.
keywords: taškų debesis, lazerinis nuskaitymas, nuskaitymas, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tikra būklė, geodezinė nuotrauka, sulygiavimas, pjūvis, plano pjūvis, prisegimas, matuoti, atsekti, nuskaitymas į BIM
from: d0a3e740
---

## Ką atliksite

Pažiūrėti lazerinį pastato nuskaitymą šalia jo modelio: patikrinti, ar pastatyta atitinka projektą, matuoti tarp nuskenuotų taškų ir iškirpti ploną pjūvį, iš kurio nuskaityti sienas, duris ir kolonas.

## Žingsniai

1. Atidarykite debesį: {{ui:Atvira}} `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` arba `.xyz` failą, arba numeskite jį ant puslapio (žr. temą apie taškų debesies formatus: ką kiekvienas atneša ir ką eksportuoti iš skenerio programinės įrangos). Kai modelis atidarytas, debesis prisijungia prie modelio 3D vaizde; debesies atidarymas niekada neuždaro modelio ar jo neįrašytų pakeitimų. Be modelio debesis atsidaro savarankiškai.
2. Po įrankių juosta atsiranda debesies juosta. Joje nurodoma, kiek taškų rodoma ir kiek jų yra faile.
3. Pasirinkite {{ui:Spalva pagal}}: failo paties spalvas (jei skeneris jas įrašė), {{ui:Aukštis}}, {{ui:Intensyvumas}}, {{ui:Klasė}} (LiDAR klasės, pvz., žemė, augmenija ir pastatai) arba {{ui:Viena spalva}}. {{ui:Dydis}} padaro taškus didesnius arba mažesnius.
4. Spustelėkite {{ui:Planas}} po {{ui:Pjūvis}}, kad liktų tik plona juosta 1,2 m virš žemiausio taško, žiūrint iš viršaus: sienos, durų angos ir kolonos atrodo kaip aukšto planas. {{ui:Priekis}} ir {{ui:Iš šono}} iškerta vertikalias juostas fasadams ir pjūviams. Juostą perkelkite su {{ui:Prie}}, o {{ui:Storis}} keiskite (metrais). {{ui:Išjungta}} vėl rodo visą debesį.
5. Įrankių juostoje spustelėkite {{ui:Matuoti}}. Žymeklis prisikabina prie debesies taškų (žymėje rašoma „taškų debesis“), todėl galite matuoti nuo sienos iki sienos pjūvyje arba nuo modelio elemento iki nuskaitymo. Modelio kampas ar briauna, esanti pasiekiamumo zonoje, vis dar laimi.
6. Su {{ui:Matuoti}} › {{ui:Vieta}} debesies taškas nurodo platumą ir ilgumą pagal paties debesies koordinačių sistemą, kai failas ją nurodo.
7. {{ui:Slėpti}} laikinai paslepia debesį; {{ui:Pašalinti}} jį visiškai išima. {{ui:Rodyti}} › {{ui:Taškų debesis}} paslepia arba parodo juostą.

## Kur eina debesis

{{ui:Padėti}} juostoje nurodoma, kaip debesis sulygiuojamas su modeliu:

- **Modelio koordinatės**: debesies skaičiai yra paties modelio (nuskaitymas, sulygiuotas su projekto koordinatėmis).
- **Žemėlapio koordinatės**: modelis turi žemėlapio konvertavimą (IfcMapConversion), o debesis yra toje pačioje projekcijos sistemoje: debesis dedamas per jį. Jei abi pusės nurodo skirtingas sistemas, būsenos eilutėje tai pasakoma.
- **Centruota pagal modelį**: kai nė vienas variantas debesies nededa arti modelio, jo vidurys dedamas į modelio vidurį, o žemiausias taškas – ant modelio grindų. Pasirinkite kitą variantą, kad tai pakeistumėte.

Kai failas nenurodo savo vienetų, BimCraft skaito metrus ir juostoje siūlo {{ui:Vienetai}}.

## Nubrėžti tikrosios būklės linijas

Spustelėkite {{ui:Atsekti programoje CadCraft}}, kad debesį perduotumėte braižymo programai naujame skirtuke. Ten jis atsidaro po brėžiniu, kur plano pjūvis ir objektų prisegimas leidžia nubrėžti sienas virš nuskaitymo. Žr. CadCraft temą apie taškų debesis.

## Kiek taškų

Nuskaitymas gali turėti šimtus milijonų taškų. BimCraft nuskaito kiekvieną tašką vieną kartą ir paliekia lygią dalį jų piešti: {{ui:Rodyti}} juostoje nustatoma, kiek (1, 2, 5 arba 10 milijonų). Daugiau taškų reikia daugiau atminties ir greitesnės vaizdo plokštės. Kiekvienos LiDAR klasės skaičiai skaičiuojami pagal visus failo taškus.

:::note
Failai nuskaitomi šiame kompiuteryje; nieko neįkeliama. Nuskaitomi LAS 1.0–1.4 ir LAZ (LAZ failai iki 1 GB, laikomi atmintyje nuskaitymo metu); E57 failai iki 6 milijonų taškų ir 512 MB kol kas (didesni nuskaitymai: eksportuokite LAS arba LAZ); PLY, PCD ir PTX – visi; tekstiniai debesys – `x y z`, su spalvų (`r g b`) ir intensyvumo stulpeliais, kai jie yra.
:::

## Keli nuskaitymai

Nuskaitymus, padarytus iš skirtingų vietų, galima sulygiuoti į vieną rėmą, patikslinti su ICP ir eksportuoti kaip vieną LAS arba E57: žr. [Sulygiuoti kelis nuskaitymus į vieną](topic:register-scans).
