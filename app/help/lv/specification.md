---
title: Specifikācijas rakstīšana no modeļa
summary: Viena specifikācijas sadaļa katram sienu, durvju, logu, grīdu un apdares tipam, kas tiek izmantots, ar tā faktiem, nolasītiem no modeļa, un jūsu pašu tekstu, pārveidota PDF vai Word dokumentā.
keywords: specifikācija, spec, darba rasējumi, 5. posms, būvdokumentācija, sadaļa, sienas tips, durvju tips, logu tips, apdare, klasifikācija, uniclass, omniclass, masterformat, dokuments, pdf, word, docx, tabulas
from: a6acc6d4
---

## Ko jūs darīsiet

Iegūstiet specifikāciju, kas seko modelim: sadaļa katram tipam, kas patiesi ir ēkā, katra ar tās konstrukciju un daudzumiem, nolasītiem no modeļa, un tekstu, ko jūs tai rakstāt.

## Soļi

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet **Specifikācijas** kreisajā panelī un noklikšķiniet uz **Specifikācija**.
2. Dialogā ir uzskaitīta viena sadaļa katram sienu tipam, durvju tipam, logu tipam, grīdai un telpas apdarei, kas tiek izmantots. Zem katra virsraksta ir tās **fakti**, nolasīti no modeļa: biezums, slāņi pa vienam, attīstības līmenis, izmēri, cik un cik daudz. Sadaļa, kuras elementiem ir klasifikācijas kods, rāda kodu savā virsrakstā.
3. Rakstiet specifikācijas tekstu lodziņā zem sadaļas. **Atlasīt tās elementus** rāda, par ko ir sadaļa.
4. Noklikšķiniet uz **Saglabāt**. Tas ir viens solis atsaukšanā, un teksts tiek saglabāts ēkas failā.
5. Atveriet **Dokumenti no modeļa**, izvēlieties **Specifikācijas** veidni un noklikšķiniet uz **Priekšskatījums**, tad saglabājiet kā PDF, Word vai Markdown. Skatiet [Dokumenti no modeļa](topic:documents-from-the-model).

## Darba rasējumu tabulas kā dokuments

Veidne **Darba rasējumu tabulas** izdrukā durvju, logu un apdares tabulas tieši no modeļa, jūsu biroja izkārtojumā. Savā veidnē uzrakstiet `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` vai saglabātā iestatījuma nosaukumu, piemēram, `{{schedule Door schedule by floor}}`. `{{specification}}` izdrukā specifikāciju.

## Labi zināt

- Fakti ir modeļa. Tie mainās, kad mainās modelis; jūsu teksts nemainās.
- BimCraft neraksta nevienu standarta punktu un nevienu ražotāja tekstu. Sadaļa bez teksta izdrukājas kā "Specifikācijas teksts vēl nav uzrakstīts."
- Teksts, kas rakstīts tipam, kas vairs nav modelī, tiek saglabāts un uzskaitīts zem "Teksts tipiem, kas vairs nav modelī".
- Lai vispārīgu tipu mainītu uz konkrētu konstrukciju, skatiet [Sienu rīki](topic:wall-tools) (Mainīt tipu).
