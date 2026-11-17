---
title: DWG vai DXF rasējuma skatīšana
summary: Atveriet DWG vai DXF, pārvietojieties pa modeļa telpu un lapām, nolasiet koordinātas un redziet, kas vēl nav uzzīmēts.
keywords: dinamiskie bloki, redzamības stāvokļi, dwg, dxf, cad, rasējums, 2D, skats, skatītājs, panoramēt, tālummaiņa, modeļa telpa, papīra telpa, izkārtojums, koordinātas, atvērt dwg
from: 4db3122a
---

## Ko darāt

Atveriet CAD rasējumu, skatiet to 3D vai 2D, pārvietojieties pa to, pārslēdzieties starp modeļa telpu un tā lapām un nolasiet koordinātas. BimCraft rāda DWG un DXF rasējumus; tos nerediģē un nesaglabā. Lai to mainītu, noklikšķiniet uz {{ui:Rediģēt programmā CadCraft}}, un rasējums atveras CadCraft projektēšanas lietotnē jaunā cilnē.

## Soļi

1. Noklikšķiniet uz {{ui:Izvēlēties failu}} vai ievelciet rasējumu lapā.
2. Izvēlieties `.dwg` vai `.dxf` failu.
3. Pagaidiet, kamēr statusa rindā rakstīts "Reading the drawing…" (rasējums tiek nolasīts). Lieli rasējumi prasa dažas sekundes. Tad tiek norādīts, cik ilgi lasīšana aizņēma, "rendering…" (tiek renderēts), kamēr tiek zīmēts pirmais attēls, un cik ilgi tas aizņēma.
4. Rasējums atveras 3D, kas ir visātrākais veids, kā parādīt lielu rasējumu (sk. [DWG vai DXF rasējuma skatīšana 3D](topic:dwg-in-3d)). Noklikšķiniet uz {{ui:Modelis}} plakanam 2D skatam. Lai rasējumi vienmēr atvērtos 2D, iestatiet {{ui:Iestatījumi}} › {{ui:BimCraft}} › **Rasējumi atveras** uz {{ui:Modelis (2D)}}. Rasējums bez nekā modeļa telpā vai pārlūkprogramma, kas nerāda 3D, atveras 2D.
5. Apskatiet cilnes virs rasējuma: vispirms {{ui:Modelis}}, tad pa vienai cilnei katrai lapai rasējuma pašā kārtībā.
6. Noklikšķiniet uz lapas cilnes, lai redzētu šo lapu: papīru ar modeli, kas rādīts caur tā skatlogiem.
7. Noklikšķiniet uz {{ui:Modelis}}, lai atgrieztos modeļa telpā.
8. Pārvietojiet rādītāju pāri rasējumam un nolasiet X un Y koordinātas stūrī.

## Ko jūs redzēsiet

- Rasējums, pielāgots logam. Krāsas seko rasējumam; baltās līnijas (krāsa 7) tiek zīmētas motīva tintes krāsā, un bālas krāsas gaišajā motīvā tiek notumšotas, lai tās paliek salasāmas.
- Panelis {{ui:Rasējums}} pa kreisi: fails, izmērs, formāts (piemēram, "AutoCAD 2018 (AC1032)"), vienības, elementu un slāņu skaits, lapu skaits, kā arī saistītie rasējumi un iekārtas, ja tādi ir.
- Saraksts {{ui:Slāņi}} pa kreisi.
- Pa labi: kā pārvietoties, saistītie rasējumi un attēli, un **Vēl nav uzzīmēts**.

## Pārvietošanās

:::mouse
| Lai | Dariet šo |
|---|---|
| Panoramēt | Velciet ar jebkuru peles pogu |
| Tālummaiņa | Ritiniet ritentiņu; punkts zem rādītāja paliek vietā |
| Pielāgot | Veiciet dubultklikšķi, nospiediet {{key:F}} vai noklikšķiniet uz {{ui:Pielāgot}} |
:::

:::mac mouse
Uz skārienpaliktņa divu pirkstu ritināšana **tālina**, nepanoramē. Savilkšana arī tālina. Lai panoramētu, noklikšķiniet un velciet.
:::

:::touch
Velciet ar vienu pirkstu, lai panoramētu. Rasējumiem tālummaiņa ar savilkšanu vēl nav izveidota: pieskarieties {{ui:Pielāgot}}, lai redzētu visu lapu, un tālinātam izmantojiet peli vai skārienpaliktni.
:::

## Dinamiskie bloki

Dinamisks bloks tiek zīmēts tā, kā to rāda rasējums: katrs novietotais bloks redzamības stāvoklī, kādā rasējums to saglabāja ("Plan" vai "Front", "Single bowl" vai "Double bowl"). Pa labi **Dinamiskie bloki** uzskaita katru, kas novietots modeļa telpā: cik novietoti, kādus stāvokļus rāda un kādi stāvokļi tam ir. Sadaļā {{ui:3D}} noklikšķiniet uz novietota bloka, lai Rekvizītos redzētu **Dinamiskais bloks**, **Rādītais stāvoklis** un **Citi stāvokļi**. BimCraft stāvokļus nemaina.

## Vēl nav uzzīmēts

Dažus objektu veidus šajā versijā nezīmē. Tie tiek uzskaitīti kā **Vēl nav uzzīmēts** pa labi ("Šīs rasējuma daļas pagaidām tiek izlaistas, nevis minētas."), lai zinātu, ka kaut kas trūkst. Līnijas, polilīnijas, lokus, riņķus, elipses, splainus, svītrojumus un cietos aizpildījumus, tekstu un daudzrindu tekstu, blokus ar atribūtiem, izmērus, norādes un daudzvirsotņu norādes, tabulas, attēlus un skatlogus zīmē. 3D sejas, daudzskaldņu tīklus un daudzstūru tīklus zīmē kā to malas, redzamas no augšas; pārslēdzieties uz {{ui:3D}}, lai tās redzētu kā virsmas.

Bināru DXF nevar atvērt: BimCraft to saka. Saglabājiet to atkal kā ASCII DXF vai kā DWG programmā, kas to izveidoja.

## Biežākās kļūdas

- **Rasējums izskatās tukšs.** Daži slāņi paša rasējuma iekšienē var būt izslēgti vai iesaldēti; tie sākas neatzīmēti sadaļā {{ui:Slāņi}}. Noklikšķiniet uz {{ui:Visi ieslēgti}}. Ja statusā rakstīts "*nosaukums* ir tukšs rasējums: tajā nav nevienas līnijas, teksta vai bloka.", tajā nav nekā.
- **Lapa rāda tukšu rāmi.** Lapa var balstīties uz saistītiem rasējumiem. Sk. [Saistīto rasējumu un attēlu atrašana](topic:dwg-linked-files).
- **Teksts izskatās nedaudz citādāks.** BimCraft zīmē tekstu šaurā bezserifu fontā, nevis rasējuma paša fontos, tāpēc teksts var būt nedaudz platāks vai šaurāks nekā programmā, kas to izveidoja.
- **"*nosaukums* nevar tikt nolasīts. Tas var būt bojāts vai saglabāts formātā, ko lasītājs vēl neapstrādā."** Iekavās beigās ir faila formāta kods. Saglabājiet to no programmas, kas to izveidoja, kā vecāku DWG vai kā DXF, un mēģiniet vēlreiz.
- **Gaidāt mērīšanu, zīmēšanu vai rediģēšanu.** BimCraft tikai skata rasējumus. Noklikšķiniet uz {{ui:Rediģēt programmā CadCraft}}, lai atvērtu to pašu failu CadCraft projektēšanas lietotnē, kas to rediģē un saglabā kopiju kā DWG vai DXF. Sākotnējais fails netiek mainīts, un saistītie rasējumi paliek BimCraft. Poga parādās tikai tad, kad CadCraft jums ir pieejams.

## Tālāk

- [DWG vai DXF rasējuma skatīšana 3D](topic:dwg-in-3d)
- [Darbs ar slāņiem un lapām](topic:dwg-layers-sheets)
- [Rasējuma pārbaude drukas skatā](topic:print-view)
