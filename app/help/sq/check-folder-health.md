---
title: Kontrollo një dosje për kopje të dëmtuara, lidhje që mungojnë dhe mbetje
summary: Përdorni raportin e dosjes për të gjetur skedarë modelesh të prerë, për të zgjedhur kopjen më të re të plotë rezervë, për të parë cilat lidhje mungojnë dhe për të gjetur skedarë kyçjeje dhe të përkohshëm.
keywords: kontroll shëndeti, i dëmtuar, i korruptuar, i paplotë, i prerë, rezervë, lidhje që mungojnë, xref mungon, audit, mbetje, skedarë kyçjeje, dwl, bak, dorëzim
from: 3025a539
---

## Çfarë do të bëni

Kontrolloni një dosje projekti përpara se ta dorëzoni ose të filloni punën me të: a është çdo model i plotë, cila kopje rezervë është e fundit e mirë, dhe a janë të gjitha skedarët e lidhur aty?

## Hapat: kopjet e dëmtuara

1. Hapni dosjen e projektit. Shihni [Hap një dosje të tërë projekti](topic:open-project-folder).
2. Lexoni shënimet nën emrin e dosjes. "2 skedarë janë të paplotë ose të palexueshëm. Shihni modelet më poshtë." do të thotë se ka diçka për të parë.
3. Te **Modelet**, shihni kolonën **Gjendja**. **I plotë** është në rregull. Një "1 i paplotë" me ngjyrë kehribari do të thotë se një kopje është e dëmtuar, por një tjetër është e shëndetshme. Një **I paplotë** me ngjyrë të kuqe do të thotë se nuk u gjet asnjë kopje e shëndetshme.
4. Hapni **Të gjitha kopjet e …** nën një model me problem. Lista përfshin skedarin kryesor dhe çdo kopje rezervë të numëruar, më e reja e para, me madhësinë, datën dhe gjendjen.
5. Lexoni shënimin mbi listë, për shembull "Tower.rvt është i paplotë (183.2 MB, duhet të jetë të paktën 214.0 MB). Kartela tregon kopjen më të re të plotë, Tower.0012.rvt (Mar 3, 2025)."
6. Klikoni kopjen që dëshironi të hapni. Vetëm kopjet e plota mund të klikohen.

## Çfarë bën kontrolli i shëndetit

Çdo kopje e çdo modeli merr një kontroll të shpejtë të kokës së saj, nga 512 bajt secila, kështu që edhe një dosje me modele të mëdha kontrollohet në sekonda. Një skedar, indeksi i të cilit tregon përtej fundit të vet, është prerë gjatë kopjimit, ngarkimit ose sinkronizimit. Një skedar në diskun në re që është ende "vetëm online" duket njësoj.

Kartela për çdo model lexohet nga skedari kryesor kur është i shëndetshëm, dhe nga kopja më e re e shëndetshme rezervë kur jo.

## Hapat: lidhjet që mungojnë

1. Shihni shënimin "*n* skedarë të lidhur nuk janë në këtë dosje." nën emrin e dosjes.
2. Lëvizni te **Skedarët e lidhur dhe të referuar**. Lidhjet që mungojnë listohen të parat.
3. Lexoni kolonën **Ku** për çdo lidhje:
   - **Në këtë dosje**: u gjet te shtegu që modeli ruajti.
   - **U gjet me të njëjtin emër**: një skedar me të njëjtin emër gjendet diku tjetër në dosje. Kontrolloni që është ai i duhuri.
   - **Skedar biblioteke**: një tabelë kodesh shënimesh kryesore ose montimesh. Këto vijnë me programin në çdo kompjuter, ndaj nuk pritet të jenë në dosje.
   - **Jo në këtë dosje**: nuk u gjet askund në dosje.
4. Lexoni **Përdoret nga** për të parë cilët modele lidhin çdo skedar.

BimCraft kërkon çdo lidhje fillimisht sipas shtegut relativ, pastaj sipas fundit të shtegut të ruajtur (kështu që `\\server\jobs\Tower\Cad\X-Refs\site.dwg` gjendet te `X-Refs/site.dwg` kur keni zgjedhur dosjen `Cad`), dhe më pas sipas emrit të skedarit kudo në dosje.

## Hapat: mbetjet

1. Lëvizni te **Vënë mënjanë** në fund të raportit.
2. Lexoni tri rreshtat që mund të shfaqen:
   - Dosjet e mirëmbajtjes (`*_backup`, `*_log`, `Revit_temp`): nuk lexohen.
   - Mbetjet e kyçjes, regjistrimit dhe rezervës: skedarë si `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ato janë lënë nga programe që u prishën ose ishin të hapura kur u kopjua dosja. Zakonisht mund të fshihen pa rrezik kur askush nuk i ka të hapur.
   - Skedarë të tjerë: çdo gjë tjetër që BimCraft nuk e lexon.

## Gabimet e zakonshme

- **Fshirja e skedarit kryesor të dëmtuar përpara ruajtjes së një rezerve të mirë.** Kopjoni fillimisht kopjen më të re të plotë, pastaj merrni veprim me skedarin e dëmtuar.
- **Besimi i verbër te "U gjet me të njëjtin emër".** Dy vizatime të ndryshme mund të kenë të njëjtin emër. Hapini të dyja nëse keni dyshime.
- **Mendimi se një skedar biblioteke që mungon është problem.** Tabelat e kodeve të shënimeve kryesore dhe të montimeve jetojnë me programin në çdo kompjuter.
- **Numri i skedarëve ndryshon midis shfletuesve.** Në Firefox dhe Safari, {{ui:Open a folder}} dorëzon çdo skedar, përfshirë ata brenda dosjeve të mirëmbajtjes, kështu që numërimi (dhe kufiri prej 20,000 skedarësh) i përfshin ato. Tërheqja e dosjes brenda i kalon ato, si bëjnë Chrome dhe Edge. Raporti është tjetërkund i njëjtë.
