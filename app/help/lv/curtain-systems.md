---
title: "Aizkaru sistēmas: stiklotas sienas režģī ar stāvprofiliem"
summary: "Zīmējiet aizkaru sistēmu kā sienu vai novietojiet to uz virsmas, pēc tam iestatiet tās režģa līnijas un stāvprofilus. Tā tiek saglabāta kā IfcCurtainWall ar saviem stikla laukiem un stāvprofiliem."
keywords: "aizkaru sistēma, aizkaru siena, aizkaru režģis, stāvprofils, stiklojums, veikala fasāde, stikla siena, panelis, stikla lauks, pēc virsmas, virsma, masa, režģa līnija, solis, profils, šķērsprofils, IfcCurtainWall, IfcPlate, IfcMember"
from: 99d6219c
---

## Ko jūs darīsiet

Izveidojiet stiklotu sienu no stikla laukiem starp stāvprofiliem, mainiet, kur atrodas tās režģa līnijas, un izvēlieties, kurām līnijām ir stāvprofils.

## Soļi

1. Ieslēdziet **Zīmēšana** un atveriet izvēlni **Būvēt** (lentes izkārtojumā: cilne Arhitektūra).
2. Izvēlieties **Aizkaru sistēma**. Tās rindā iestatiet augšu (stāvu virs tā vai augstumu), līniju ik pa tik gar to, līniju ik pa tik augšup pa to (atstājiet tukšu, ja nav), to, vai tai būs stāvprofili, un stāvprofila profilu.
3. Noklikšķiniet, kur tā sākas un kur beidzas, tāpat kā zīmējot sienu. {{key:Shift}} tur to taisnā leņķī.
4. Lai mainītu režģi, izvēlieties **Aizkaru režģis** un noklikšķiniet uz sistēmas:
   - **Pievienot līniju**: vertikāla līnija tiek novietota, kur noklikšķināt. Horizontālai līnijai vispirms ierakstiet tās augstumu laukā **Pie**.
   - **Pārvietot līniju**: noklikšķiniet uz līnijas, pēc tam uz vietas, kur tā jāpārvieto.
   - **Noņemt līniju**: noklikšķiniet uz līnijas.
   - **Iestatīt pēc soļa**: ierakstiet soli laukā **Ik**, pēc tam noklikšķiniet uz sistēmas.
5. Lai mainītu stāvprofilus, izvēlieties **Stāvprofils**, izvēlieties, uz ko tas attiecas (vertikālo līniju, uz kuru noklikšķināt, horizontālo līniju noteiktā augstumā, malu vai katru līniju), izvēlieties **Novietot stāvprofilus** vai **Noņemt stāvprofilus** un profilu, pēc tam noklikšķiniet uz sistēmas.
6. Atlasiet sistēmu, lai redzētu visu tās **Īpašībās**: katru režģa līniju ar tās vietu, atzīmi par tās stāvprofilu un pogu tā noņemšanai; soli; malu; profilu; stikla lauka biezumu.

## Pēc virsmas

**Pēc virsmas** veido aizkaru sistēmu uz plakanas virsmas, uz kuras noklikšķināt 3D skatā. Tās rindā ir tie paši režģa un stāvprofilu iestatījumi.

- Tā darbojas uz jebkuras plakanas virsmas jebkura elementa, ko rāda 3D skats: masas, sienas, grīdas, jumta plaknes, kolonnas, novietota vienuma. Virsma var būt vertikāla, slīpa vai horizontāla.
- Sistēma pārņem virsmas kontūru. Frontons vai cita neparasta forma apgriež stikla laukus un stāvprofilus pēc tās.
- Tā var izveidot **sienu** gar vertikālas virsmas pamatni, tik augstu, cik virsma. Šeit siena vienmēr stāv vertikāli, tāpēc slīpa vai horizontāla virsma nevar to pieņemt.
- Tā neveido jumtu. BimCraft jumts tiek aprēķināts no stāva kontūras un slīpuma, nevis no vienas virsmas.
- Izliekta virsma ir daudz mazu plakanu virsmu: viens klikšķis paņem vienu no tām.
- Virsma ar atverēm: sistēma aptver virsmas ārējo kontūru.

## Kā tas tiek mērīts

- **Bruto laukums** ir sistēmas kontūra.
- **Stikla laukums** ir izveidotie stikla lauki: katrs lauks zaudē pusi režģa stāvprofila platuma uz katras malas ar režģa stāvprofilu un visu platumu pie malas stāvprofila.
- Vertikāls stāvprofils iet cauri no malas līdz malai. Horizontāls stāvprofils apstājas pie katra vertikālā stāvprofila un pie malas. Malas stāvprofili atrodas kontūras iekšpusē; kur divi saskaras, cauri iet tas, kas ir vertikālāks. Savienojumi griezti taisni, nevis slīpi.
- **Specifikācijas** ietver sarakstu **Aizkaru sistēmas** ar šiem skaitļiem, kad modelim tāds ir.

## IFC failā

IfcCurtainWall savā stāvā, kas sastāv no vienas IfcPlate (aizkaru paneļa) katram stikla laukam un vienas IfcMember (stāvprofila) katram stāvprofila posmam, katram ar savu formu, materiālu un pamatdaudzumiem.

## Lietderīgi zināt

- Jebkurš izmērs tiek veidots, kā pieprasīts. Atteikts tiek tikai kontūra bez laukuma, jo nav nekā, ko veidot.
- Sistēma, zīmēta kā siena, saglabā augstumu, ar kādu tā zīmēta. Ja vēlāk pārvietojat stāvu, vēlreiz iestatiet tā augstumu Īpašībās.
- Pārvietošanas rīks vēl nepārvieto aizkaru sistēmu. Izdzēsiet to un zīmējiet vēlreiz vai mainiet tās režģi uz vietas.
- {{ui:Undo}} atsauc katru soli: visu sistēmu, vienu režģa izmaiņu, vienu stāvprofila izmaiņu.
