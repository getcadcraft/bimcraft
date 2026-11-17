---
title: Redzēt, kas nolietojas piecdesmit gadu laikā
summary: Modelī esošie logi, durvis, apdares un jumts, to kalpošanas laiks, gadi, kad katrs tiek nomainīts, un izmaksas pa gadiem, kā arī to tagadnes vērtība, kad ievadāt izmaksas par vienību.
keywords: dzīves cikls, dzīvescikls, kalpošanas laiks, nomaiņa, uzturēšana, izmaksas, tagadnes vērtība, diskonts, inflācija, 50 gadi, logi, krāsa, jumts, apdares, pilns dzīves cikls
from: 1b849545
---

Sadaļa {{ui:Dzīves cikla skats}} kreisajā panelī uzskaita, kas modelī ir un nolietojas, un kad tas tiek nomainīts izpētes periodā (sākotnēji 50 gadi). Modelī nekas netiek mainīts.

## Kā to lasīt

Katrai daļai redzams tās daudzums (izmērīts no modeļa: logu laukums, ārējās un iekšējās durvis, ārsienu apdare, iekštelpu krāsa, grīdas un griestu apdare, jumta pamatne, kāpnes), **kalpošanas laiks gados** un **izmaksas par vienību**. Daļa tiek nomainīta pēc sava kalpošanas laika, pēc divkārša kalpošanas laika un tā tālāk, kamēr tas ir pirms izpētes beigām; tādējādi logs ar 30 gadu kalpošanas laiku 50 gadu izpētē tiek nomainīts vienreiz, 30. gadā. Kalpošanas laiki ir tipiski plānošanas dati: mainiet tos atbilstoši saviem produktiem un klimatam. Izmaksas nav pieņemtas; ievadiet tās, lai redzētu naudu pa gadiem, kopsummu un tās tagadnes vērtību. Ja vēlaties, pievienojiet diskonta likmi un inflācijas likmi.

{{ui:Saglabāt grafiku (CSV)}} ieraksta komponentus un gadus. Caurules, gaisa vadi, elektroinstalācija un iekārtas arī ir uzskaitītas (skatiet zemāk).

## Caurules, gaisa vadi, elektroinstalācija un iekārtas

- **Caurules un gaisa vadi** ir katra zīmētā posma metri. **Iekārtas** (sūkņi, ventilatori, vārsti, termināļi, armatūra, izejas, slēdži, sadales paneļi un citas lietas, ko izseko cilnē Aktīvi) tiek skaitītas pa veidiem, katram veidam ir plānošanas kalpošanas laiks. Vienumam, kuram cilnē Aktīvi ir iestatīts pats *kalpošanas laiks*, ir sava rindiņa ar šo laiku, un, ja tam ir uzstādīšanas datums, tas sākas no sava vecuma: sūknis, kas ir 16 gadus vecs ar 10 gadu kalpošanas laiku, ir jānomaina tagad, pēc tam ik pēc desmit gadiem.
- **Elektroinstalācija** ir **aplēse**: plānā mērītais attālums no sadales paneļa gar katras ķēdes ierīcēm, sākot ar tuvākajām, reizināts ar 1,25 maršrutēšanai. Modelis nezīmē kabeli, tāpēc pārbaudiet to pret savu apjomu aprēķinu.
- Kalpošanas laiki ir plānošanas dati, kas jāpārskata, nevis avots.

## Oglekļa emisijas katrā nomaiņā

Atzīmējiet {{ui:Iekļaut katras nomaiņas iestrādātās oglekļa emisijas}}. Jauns logs, durvis, kāpnes, jumts, caurule vai iekārta tiek skaitīta pēc oglekļa, ko modeļa paša šāda veida elementi satur (cilnes Oglekļis koeficienti, par vienību). Daļai bez elementa vai koeficienta, piemēram, krāsai, apdarei un elektroinstalācijai, redzama svītra, un tā tiek uzskaitīta. Vecās daļas kalpošanas beigas un tās nomaiņas darbs netiek skaitīti.
