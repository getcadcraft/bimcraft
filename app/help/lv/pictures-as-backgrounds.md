---
title: Ievietot attēlu zem plāna
summary: Novietojiet PNG, JPEG vai WebP attēlu (skenētu plānu, skici, objekta fotogrāfiju, aerofotogrāfiju) zem stāva plāna vai uz vertikālas plaknes, mērogu iestatiet pēc diviem punktiem, pārvietojiet, pagrieziet, mainiet caurspīdīgumu un bloķējiet, skatiet 3D un plāna PDF, un glabājiet to kopā ar modeli kopā.
keywords: attēls, bilde, fons, PNG, JPEG, WebP, skenējums, skice, fotogrāfija, aerofotogrāfija, situācijas plāns, mērogs, caurspīdīgums, bloķēt, pamatne, izsekot
from: e3c78d1f
---

## Novietot attēlu

Ieslēdziet {{ui:Zīmēšana}}, dodieties uz stāvu un izvēlieties {{ui:Attēls}} izvēlnē {{ui:Būvējums}}. Tad {{ui:Ievietot attēlu…}} un izvēlieties PNG, JPEG vai WebP failu. Tas tiek nolasīts jūsu pārlūkprogrammā un nekad netiek augšupielādēts. Tas parādās zem plāna, pielāgots skatam, un rīkjosla saka, ka tas vēl nav mērogots. Viss, ko zīmējat, atrodas virs tā.

## Iestatīt mērogu

Izvēlieties {{ui:Mērogs}}, noklikšķiniet uz diviem punktiem attēlā, kuru reālais attālums jums ir zināms (divi sienas gali skenētā plānā, izdrukāts izmērs uz skices), tad ierakstiet attālumu un nospiediet {{key:Enter}}. Attēls palielinās vai samazinās ap pirmo punktu, uz kuru noklikšķinājāt. {{key:Esc}} atceļ.

## Ielīmēt kopētu apgabalu

MarkupCraft {{ui:Kopēt apgabalu}} nokopē daļu no PDF lapas kā attēlu. Atpakaļ BimCraft, kad redzams stāva plāns, nospiediet {{key:Ctrl+V}} (vai {{ui:Ielīmēt}} izvēlnē {{ui:Rediģēt}}): apgabals nonāk plānā kā attēls, centrēts tur, kur atrodas rādītājs (vai skata vidū). Ja lapai bija rasējuma mērogs, tas ienāk savā īstajā izmērā, tāpēc siena uz tā ir tikpat gara kā jūsu sienas. Ja mēroga nav, tas ienāk papīra izmērā, un sākas {{ui:Mērogs}}, lai varētu noklikšķināt uz diviem punktiem un ierakstīt to attālumu. Apgabals, kas kopēts kā pārklājums, sākas ar caurspīdīgumu, kāds tam bija kopējot. Tas ir viens atsaukšanas solis un tiek glabāts kā jebkurš cits attēls.

Ielīmēšana ņem to, ko pēdējo kopējāt: kopētu apgabalu vai kaut ko, ko kopējāt BimCraft. {{key:Ctrl+V}} ielīmē arī jebkuru citu PNG, JPEG vai WebP attēlu no jūsu starpliktuves, novietotu kā {{ui:Ievietot attēlu…}} un vēl nemērogotu. Kopēts apgabals tiek atcerēts sešas stundas.

## Pārvietot, pagriezt, izbalināt, bloķēt

{{ui:Pārvietot}} prasa bāzes punktu uz attēla un tad vietu, kur tam jāiet. {{ui:Pagriezt}} prasa leņķi grādos ap attēla centru. {{ui:Caurspīdīgums}} to izbalina, lai jūsu līnijas izceltos. {{ui:Bloķēt}} neļauj tam pārvietoties, kamēr zīmējat; bloķēts attēls joprojām ļauj mainīt caurspīdīgumu un paslēpt to. Katra izmaiņa ir viens atsaukšanas solis.

## Vairāki attēli, vairāki stāvi

Attēls pieder stāvam, uz kura tas tika novietots, un rādās šī stāva plānā un griestu plānā. Noklikšķiniet uz attēla, lai strādātu ar to, vai izvēlieties to sarakstā. {{ui:Paslēpt}} to izslēdz, neizdzēšot; {{ui:Noņemt}} (vai {{key:Delete}}) to izņem no modeļa.

## Attēli 3D skatā

Katrs attēls arī stāv 3D skatā kā plakana plakne: plāna attēls guļ uz sava stāva, vertikālās plaknes attēls stāv virs sava griezuma līnijas. Tas tiek zīmēts pāri modelim, neslēpjot to, un modelis paslēpj attēla daļu, kas atrodas aiz tā. Pārklājošies attēli kārtojas pēc attāluma. Caurspīdīgums, {{ui:Paslēpt}}, {{ui:Bloķēt}} un {{ui:Noņemt}} darbojas tāpat, un {{ui:Rādīt 3D}} izslēdz visas plaknes tikai 3D skatā. Stāvs var saturēt ne vairāk kā 8 attēlus, lai skati paliktu ātri.

## Attēls uz vertikālas plaknes

Zem {{ui:Novietot uz}} izvēlieties {{ui:Vertikāla plakne (griezuma līnija)}}, tad {{ui:Ievietot attēlu…}}. Noklikšķiniet uz divu līnijas galiem plānā (sienas malas gals piesaistās), vai izvēlieties nosaukto griezuma līniju no stāva sarakstā {{ui:Virs griezuma līnijas}}, un nekādi klikšķi nav vajadzīgi. Attēls stāv uz stāva virs šīs līnijas, tikpat plats kā līnija. Iestatiet tā {{ui:Platums}}, vietu {{ui:Pa līniju}} un {{ui:Augstums virs līmeņa}}, ierakstot; {{ui:Pagriezt}} to pagriež tā pašā plaknē. Vertikālais attēls netiek zīmēts zem plāna; plāns rāda tā līniju, kamēr strādājat pie tā. BimCraft nav interaktīva 2D griezuma loga: griezumi un fasādes tiek zīmēti lapās, un attēli šajos lapu skatos vēl netiek drukāti.

## Drukāšana

{{ui:Drukas skats}} plānā ieraksta stāva attēlus PDF zem rasējuma, to mērogā, pagriezienā un caurspīdīgumā, apgriezti līdz lapai; paslēpts attēls paliek ārpus tā. JPEG tiek ielikts kā ir; citi attēli vispirms tiek samazināti līdz 200 dpi uz lapas.

## Glabāts kopā ar modeli

Attēla baiti netiek ierakstīti IFC tekstā. Modelis katru atsaucas pēc nosaukuma (IfcDocumentReference, piemēram, pictures/<id>.png), un baiti ceļo projekta kopā. Izmantojiet {{ui:Saglabāt kā kopu…}} (vai {{ui:Saglabāt kā IFC}} un izvēlieties to): jūs saņemat vienu .ccbundle failu ar modeli un tā attēliem, IFC paliek mazs, un rediģēšana paliek ātra. Atveriet .ccbundle, un attēli atkal ir tur.

Vienkāršs .ifc nevar saturēt attēlu, nekļūstot lielam. Kad jūs to saglabājat, BimCraft saka, cik attēlu ir glabāti ārpus tā, un piedāvā kopu vai vienkāršu IFC, kas iegulda attēlus līdz 512 KB un atstāj pārējos ārpusē. Vienkāršs .ifc, kas atvērts bez savas kopas, rāda šos attēlus kā trūkstošus, un Problēmas tos uzskaita; atveriet .ccbundle, kurā tie tika saglabāti. Faili, kas saglabāti ar pirmo versiju, ar attēlu IFC iekšpusē, joprojām atveras, un kopas saglabāšana pārceļ to attēlus ārā. Attēls tiek glabāts kā ir līdz 6 MB; lielāku vispirms samazina, un par to jums paziņo. Citas programmas atver modeli un ignorē attēlus. Attēls, ko vēl neesat mērogojis, tiek uzskaitīts Problēmās kā piezīme.

## Sekciju un fasāžu lapās

Attēls uz vertikālas plaknes (izvēlieties {{ui:Vertikāli}} attēla panelī un noklikšķiniet uz divu līnijas galiem vai novietojiet to virs nosaukta griezuma līnijas) tiek drukāts tajos lapu skatos, kas skatās tieši uz to. Griezums rāda attēlu, kas stāv uz tā griezuma līnijas, vai ko novietoja virs šīs griezuma līnijas pēc nosaukuma. Fasāde rāda katru vertikālo attēlu, kura plakne ir vērsta pret to. Attēls tiek zīmēts zem skata līnijām, skata mērogā, apgriezts līdz skatam, un saglabā savu caurspīdīgumu. Atveriet {{ui:Lapas…}}, lai to redzētu; lapas PDF to glabā kā attēlu. Skatīts no aizmugures, attēls ir spoguļots, kā tas ir 3D skatā. Paslēptie attēli tiek atstāti ārpusē.
