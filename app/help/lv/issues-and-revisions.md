---
title: Izsniegumi, revīzijas un rasējumu izmaiņu žurnāls
summary: Ierakstiet katru izsniegto lapu kopu, skatiet, kas kopš tā laika ir mainījies uz katras lapas un elementa, un glabājiet objektu norādījumus, darbnīcas rasējumus un saistītos modeļus pie izsnieguma, kuram tie pieder.
keywords: izsniegums, izsniegta kopa, iesniegta kopa, iesniegšana, revīzija, revīzijas, kas mainījies, kopš izsnieguma, izmaiņu žurnāls, rasējumu izmaiņu žurnāls, rasējumu reģistrs, pavadraksts, objekta norādījums, darbnīcas rasējums, saistītais modelis, iepirkums, būvniecība, momentuzņēmums, salīdzināt
from: 4c732832
---

## Ko jūs darīsiet

Ierakstiet izsniegumu: kuras lapas tika izsniegtas, kurā datumā, kādam nolūkam, katra ar savu revīziju. Vēlāk jautājiet, kas mainījies kopš šī izsnieguma. Glabājiet objektu norādījumus un atgrieztos darbnīcas rasējumus pie izsnieguma.

## Soļi

1. Kreisajā panelī atveriet **Izsniegumi un revīzijas**.
2. Izvēlieties **Ierakstīt izsniegumu**. Revīzija tiek ieteikta (A, pēc tam B; numurēta, piemēram, P1, skaitās uz augšu). Izvēlieties, kādam nolūkam tas tiek izsniegts, kam tas tiek nosūtīts, datumu un lapas. Kad projekta stadija ir iestatīta, nolūks seko tai. Kad atļaujas pakotnei ir atbalsta dokumentu saraksts, uz šo sarakstu saistītās lapas tiek automātiski atzīmētas.
3. Atstājiet atzīmētu **Saglabāt arī modeļa kopiju kā izsniegtu**, lai modelis paliktu tieši tāds, kāds tika izsniegts. Kopija tiek lejupielādēta; tās nosaukums, izmērs un SHA-256 tiek glabāti kopā ar izsniegumu.
4. Izvēlieties **Ierakstīt šo izsniegumu**. Lapa, kas kopš pēdējās izsniegšanas ir mainījusies, saņem jaunu revīziju. Lapa, kas nav mainījusies, saglabā savu revīziju. Katras lapas titulblokā ir redzama tās revīzija.
5. Lai redzētu, kas mainījies, izvēlieties **Izmaiņas kopš** blakus izsniegumam. Katra lapa rāda Tāds pats vai Mainīts, kā arī uz tās pievienotos, mainītos un noņemtos elementus. Noklikšķiniet uz skaita, lai atlasītu šos elementus.
6. Izvēlieties **Pievienot ierakstu** objekta norādījumam, darbnīcas rasējumam, atzīmju kopai, saistītajam modelim vai piezīmei. Izvēlieties izsniegumu, kuram tas pieder. Fails, ko izvēlaties, tiek ierakstīts pēc tā nosaukuma, izmēra un SHA-256; fails paliek tur, kur atrodas.
7. **Rasējumu izmaiņu žurnāls** rāda vienu rindu katrai lapai un vienu kolonnu katram izsniegumam. **Lejupielādēt izmaiņu žurnālu (CSV)** saglabā to kopā ar izsniegumiem un ierakstiem.
8. **Saglabāt izsniegumu vēsturi** raksta failu `.issues.json`. MarkupCraft, TakeoffCraft un DetailCraft to nolasa ar **Nolasīt izsniegumu vēsturi**.

## Noderīga informācija

- Vēsture tiek glabāta IFC failā (rekvizītu kopā `CadCraft_Issues` projektā). Citas programmas to ignorē.
- Lapa tiek uzskatīta par mainītu, ja mainījies tās pašas iestatījums vai ja tajā redzams elements, kas mainījies: plāns rāda savu līmeni, fasāde vai griezums — visu modeli, durvju vai logu specifikācija — savas durvis vai logus.
- Elements tiek uzskatīts par mainītu, ja mainījies rekvizīts, tā novietojums, izmērs vai forma.
- Lai redzētu tieši, kurš rekvizīts mainījies, atveriet saglabāto izsniegtā modeļa kopiju ar **Salīdzināt versijas**.
- Izsnieguma noņemšana atstāj tā ierakstus bez izsnieguma. Katru soli var atsaukt ar vienu darbību.
- Modelis ar vairāk nekā 60 000 elementiem neglabā katra elementa ierakstu ar izsniegumu. Lapas tomēr tiek salīdzinātas.

## Vēl nav izveidots

- Lapas netiek saglabātas kā PDF kopā ar izsniegumu.
- Revīzijas mākonis netiek zīmēts uz BimCraft pašu lapām. Ierakstiet mākoņus MarkupCraft pret izsniegumu.
