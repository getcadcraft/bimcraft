---
title: Pārvietot, kopēt, izlīdzināt un sadalīt ēkas elementus
summary: Pārvietojiet sienas, grīdas, kolonnas un novietotos bibliotēkas vienumus pēc bāzes punkta un otra punkta vai ievadīta attāluma, kopējiet tos pārvietošanas laikā un izlīdziniet vai sadaliet vienmērīgi plānā vai no atlases 3D skatā.
keywords: pārvietot, kopēt, izlīdzināt, sadalīt, atstarpe, nobīde, bāzes punkts, pārvietojums, sienas, kolonnas, grīdas, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Ko jūs darīsit

Pārvietot sienu, kolonnu, grīdu vai novietotu bibliotēkas vienumu uz jaunu vietu, izveidot tā kopijas vai izlīdzināt vairākus, to nezīmējot no jauna.

## Nosaukumi un taustiņi

Komandas ir {{ui:Pārvietot}}, {{ui:Izlīdzināt}} un {{ui:Sadalīt}}, un komandrindā varat ierakstīt `MOVE`, `ALIGN` un `DISTRIBUTE`, kā CadCraft zīmēšanas lietotnē. Viena atšķirība: BimCraft {{key:M}} ir {{ui:Mērīt}}, tāpēc Pārvietot ir savs taustiņš, {{key:Shift+M}}. Rīki atrodas izvēlnē {{ui:Būvējums}}.

## Pārvietot

1. Atlasiet, ko pārvietot, plānā vai 3D skatā. Sienas, grīdas, kolonnas un novietotie bibliotēkas vienumi var būt vienā atlasē.
2. Nospiediet {{key:Shift+M}} vai izvēlieties {{ui:Pārvietot}}.
3. Noklikšķiniet bāzes punktu, tad otru punktu. Vai pēc bāzes punkta ievadiet attālumu un nospiediet {{key:Enter}}: tas iet tajā virzienā, kur rāda rādītājs no bāzes punkta. Varat arī ierakstīt `dx,dy` (vai `@dx,dy`) vai `garums<leņķis`.
4. Nospiediet {{key:C}}, lai ieslēgtu {{ui:Kopēt}}: tad katra pārvietošana veido kopijas un paliek gatava nākamajai. Nospiediet {{key:Esc}}, lai apturētu.

Abus punktus var noklikšķināt arī 3D skatā: ar ieslēgtu Pārvietot rādītājs sasniedz stāva grīdas augstumu, tātad klikšķis tur ir plāna punkts. Turiet {{key:Shift}}, noklikšķinot, lai tā vietā atlasītu citu elementu. Izmantojiet plāna, {{ui:Augša}}, {{ui:Priekšpuse}} vai {{ui:Sāns}} skatu, kā vēlaties: punkti vienmēr atrodas uz šī līmeņa.

Siena paņem līdzi savas durvis un logus. Zīmēta grīda paņem līdzi savas atveres. Telpas, grīdas un griesti, kas seko sienām, tiek atjaunināti. Sienas, kas bija savienotas ar pārvietoto sienu, paliek savās vietās.

Katra pārvietošana ir viena izmaiņa: viens {{key:Mod+Z}} to atsauc, un tā tiek nosūtīta visiem Live TeamWork sesijā. Novietotu bibliotēkas vienumu šādi kopēt nevar; izmantojiet {{ui:Rediģēt}} › {{ui:Kopēt}} un {{ui:Ielīmēt}}.

## Izlīdzināt

Atlasiet divus vai vairākus elementus, izvēlieties {{ui:Izlīdzināt}}, tad pusi (pa kreisi, centrs, pa labi, augšā, vidus vai apakšā) un to, pēc kā izlīdzināt: atlasītā kopa, pirmais atlasītais, pēdējais atlasītais vai punkts, uz kura noklikšķināt. Nospiediet {{ui:Izlīdzināt}} joslā.

## Sadalīt

Atlasiet trīs vai vairākus elementus, izvēlieties {{ui:Sadalīt}}, tad virzienu (šķērsām vai lejup) un atstarpi: vienādas spraugas starp tiem vai vienādi centri. Divi galējie paliek savās vietās.

Sienas, ko Izlīdzināt vai Sadalīt pārvieto, saglabā savus savienojumus, kā ar Pārvietot: sienai, kas savienota ar pārvietoto sienu, gals slīd pa savu līniju, lai paliktu savienots; starpsienas, kas tajā atduras, nāk līdzi; un divas savienotas sienas, kas abas pārvietotas, saglabā savu stūri tur, kur to jaunās līnijas krustojas. Telpas paliek slēgtas. Tas ir viens solis sadaļā **Izmaiņas**.
