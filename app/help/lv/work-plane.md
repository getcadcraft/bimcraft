---
title: Darba plakne: iestatīt, parādīt, skatīties tieši uz to
summary: Darba plakne ir plakne, ko izmanto modeļa līnijas, modeļa teksts un Darba plaknes skatītājs. Iestatiet to uz līmeni, virsmu, nosauktu atsauces plakni vai līniju; parādiet to skatos; atveriet skatītāju, lai zīmētu uz vertikālas plaknes.
keywords: darba plakne, iestatīt darba plakni, rādīt darba plakni, atsauces plakne, darba plaknes skatītājs, nosaukta plakne, virsma, līmenis, vertikāla plakne, zīmēt uz sienas, fasādes rasējums, piesaiste, izlīdzināšana, atsauces plakne
from: 8aceee1d
---

## Ko jūs darīsiet

Izvēlieties plakni, uz kuras zīmējat, redziet, kur tā atrodas, un zīmējiet uz plaknes, kas stāv vertikāli.

## Soļi

1. Ieslēdziet **Zīmēšana** un atveriet izvēlni **Būvēt** (lentes izkārtojumā: cilne Arhitektūra, Darba plakne).
2. Izvēlieties **Iestatīt darba plakni**. Pēc tam veiciet vienu no šīm darbībām:
   - izvēlieties līmeni laukā **Iestatīt uz**;
   - izvēlieties nosauktu atsauces plakni blakus esošajā sarakstā;
   - noklikšķiniet uz līnijas plānā: sienas, režģa līnijas, atsauces plaknes, modeļa līnijas vai aizkaru sistēmas. Darba plakne kļūst par vertikālu plakni, kas iet caur šo līniju;
   - noklikšķiniet uz plakanas virsmas 3D skatā. Darba plakne atrodas uz šīs virsmas.
3. Izvēlieties **Rādīt darba plakni**, lai to redzētu: 3D skatā tonēta lapa ar metru režģi, plānā punktēts kontūras rāmis vai līnija, un fasāžu un griezumu panelī punktēts kontūras rāmis. Izvēlieties to vēlreiz, lai paslēptu.
4. Izvēlieties **Darba plaknes skatītājs**, lai skatītos tieši uz plakni. Melnās līnijas ir modelis, ko šķeļ plakne. Izmantojiet tā rīkus, lai uz plaknes zīmētu modeļa līniju, modeļa tekstu vai atsauces plakni. **Skatīt 3D** pagriež 3D skatu pret plakni.

## Atsauces plaknes

Atsauces plakne ir nosaukta plakne, ko zīmējat kā līniju.

1. Izvēlieties **Atsauces plakne**. Ierakstiet nosaukumu tās rindā, ja vēlaties (citādi tai tiks piešķirts nosaukums), un augstumu.
2. Noklikšķiniet, kur tā sākas un kur beidzas. Plānā tas veido vertikālu plakni. Darba plaknes skatītājā tas veido plakni, kas stāv taisni pret darba plakni.
3. Tā redzama kā punktēta zaļa līnija ar savu nosaukumu plānā, kā punktēts kontūras rāmis 3D skatā un fasāžu un griezumu panelī.
4. Atlasiet to, lai pārdēvētu, mainītu garumu, augstumu un pamatni, vai nospiediet **Izmantot kā darba plakni**.

Divām atsauces plaknēm nevar būt viens un tas pats nosaukums, jo pēc nosaukuma tās tiek atlasītas.

## Noderīgi zināt

- Modelim, kurā nav iestatīta darba plakne, darbs notiek tā zemākajā līmenī.
- Darba plakne tiek saglabāta failā. Tās rādīšana vai paslēpšana tiek atcerēta šajā pārlūkā, nevis failā.
- Ja darba plakne seko atsauces plaknei un jūs to pārvietojat, darba plakne pārvietojas kopā ar to.
- Uz vertikālas darba plaknes rīki Modeļa līnija un Modeļa teksts atver skatītāju, jo plānā nevar norādīt augstumu.
- Zīmēšanas rīki notver plānā zīmētu atsauces plakņu galus tāpat, kā notver citu līniju galus skatītājā.

## IFC failā

- Darba plakne ir rekvizītu kopa (CadCraft_WorkPlane) projektā.
- Atsauces plakne ir IfcAnnotation ar objekta tipu ReferencePlane un tās nosaukumu. Tās forma ir plaknes slēgtais kontūras rāmis, lai cita programma parādītu, kur tā atrodas. Tās kopa CadCraft_ReferencePlane satur sākumpunktu, virzienu, normāli un apjomu. IFC atsauces plaknei klases nav; anotācija netiek skaitīta kā ēkas elements un neierobežo telpas.
