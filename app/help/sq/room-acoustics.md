---
title: Kontrollo jehonën e dhomës dhe dëgjoje
summary: Kohëzgjatja e jehonës sipas brezit oktavë për çdo dhomë (Sabine dhe Eyring), nga madhësia dhe përfundimet e saj, një objektiv i yti, dhe një zë, një duartrokitje ose muzikë e luajtur përmes një përgjigjeje impulsive të llogaritur të dhomës.
keywords: akustikë, jehonë, kohë jehone, rt60, sabine, eyring, thithje, jehonë, tingull, dëgjo, përgjigje impulsive, të folur, klasë, zyrë, qilim, pllakë tavani, zhurmë
from: 16996cbb
---

Seksioni {{ui:Akustika e dhomës}} i panelit të majtë llogarit sa gjatë qëndron zëri në çdo dhomë. Ai lexon sipërfaqen e dyshemesë, lartësinë, muret, dyert dhe dritaret e çdo dhome nga modeli IFC i hapur. Asgjë në model nuk ndryshohet.

## Zgjidh përfundimet

Kur modeli thotë çfarë ka mbi një sipërfaqe, dhoma e lexon atë: shtresën e brendshme të tipit të çdo muri (gips, suva, tullë, beton dhe bllok njihen), llojin e dyshemesë (dru ose beton) dhe nëse një tavan është me pllaka. Etiketa pranë çdo zgjedhjeje thotë nëse vjen nga modeli, është një parazgjedhje ose zgjedhja jote; zgjidh një përfundim tjetër për ta anashkaluar. Çdo gjë që modeli nuk e thotë mbetet te parazgjedhja. Koeficientët janë **vlera tipike të publikuara**; zëvendësoji me të dhënat e testimit të një produkti kur i ke. Shkruaj një **objektiv** (jehonën më të gjatë me frekuencë mesatare që do) dhe çdo dhomë mbi të është një paralajmërim, me thithjen që do ta ulte atë.

## Lexo tabelën

Jehona jepet për 125 Hz deri në 4 kHz. Sabine i përshtatet dhomave të gjalla dhe Eyring atyre të vdekura; rreshti i shënuar *Përdorur* merr Eyring kur thithja mesatare është mbi 0.2. Thithja e ajrit përfshihet (ai shkurton brezat e lartë në dhoma të mëdha). Është një model statistikor: supozon që zëri përhapet në mënyrë të barabartë, kështu që dhomat e gjata ose të sheshta dhe dhomat shumë të vogla janë një udhëzues i përafërt, dhe mobiljet, njerëzit dhe dyert e hapura nuk llogariten.

## Dëgjo

{{ui:Luaj në këtë dhomë}} luan një zë (të krijuar këtu), një duartrokitje, nota të ciupura ose **skedarin tënd të zërit** (qëndron në kompjuterin tënd) përmes një përgjigjeje impulsive të llogaritur për dhomën: tingullin e drejtpërdrejtë, reflektimet e para të një kutie me atë madhësi, dhe një bisht që zbehet me kohën e jehonës së dhomës në çdo bandë. {{ui:Luaj të thatë}} luan të njëjtin tingull në të njëjtin nivel, pa dhomën. Mund të ruash përgjigjen impulsive ose tingullin në dhomë si skedarë WAV. Tingëllon si një dhomë me atë madhësi dhe përfundim, jo si ndonjë dhomë reale.

## Njerëzit dhe mobiljet

Shkruaj numrin e **njerëzve në këtë dhomë** për të shtuar thithjen e tyre. Mobiljet që mban modeli (divane, shtretër, karrige, tavolina, dollapë, të gjetur sipas emrit) shtojnë thithjen e tyre. Shifrat janë vlera të përafërta planifikimi, të rrumbullakosura; zëvendësoji me matje për një dhomë që ka rëndësi.

## Burimi dhe dëgjuesi

Te {{ui:Burimi dhe dëgjuesi}}, shtyp {{ui:Vendos burimin}} ose {{ui:Vendos dëgjuesin}} dhe kliko planimetrinë e dhomës. Tingulli që luan dëgjohet nga aty: tingulli i drejtpërdrejtë arrin pas distancës, dhe pjesa me jehonë është në nivelin për atë distancë. Pastro të dyja për t'u kthyer te kutia e distancës.

## Thithje e pabarabartë dhe mënyrat e dhomës

Te {{ui:Thithje e pabarabartë (dhomë kutie)}}, shkruaj dhomën si kuti dhe zgjidh përfundimet e dyshemesë, tavanit dhe mureve. Tabela shton Fitzroy dhe Arau-Puchades pranë Sabine dhe Eyring: ata i trajtojnë tri çiftet e sipërfaqeve të kundërta veçmas, kështu që një dhomë me qilim dhe tavan të fortë nuk lexohet si shumë e shkurtër. Kur çiftet ndryshojnë shumë, një shënim thotë cilit t'i besosh. Nën tabelë, **Mënyrat e dhomës** liston valët e qëndrueshme më të ulëta të kutisë dhe frekuencën nën të cilën dhoma ka mënyra të veçanta në vend të një fushe të barabartë zëri. Këto janë parashikime për një dhomë kutie, një mjet projektimi dhe jo një matje.

## Njësitë

Sipërfaqet, lartësitë, vëllimet dhe distancat e dhomave shfaqen në {{ui:Njësitë}} që zgjodhe (këmbë dhe inç katrorë dhe kubikë, inç, milimetra, centimetra ose metra). Llogaritja vetë mbetet në SI; ndryshon vetëm shfaqja. Kohët (sekonda), frekuencat dhe nivelet nuk ndryshojnë.
