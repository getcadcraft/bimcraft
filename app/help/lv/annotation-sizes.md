---
title: Zīmēt pilnā izmērā, anotēt pēc mēroga
summary: Ēka vienmēr tiek zīmēta pilnā izmērā. Teksts, izmēri, marķējumi, telpu nosaukumi, režģa apzīmējumi un simboli tiek izmērīti uz papīra milimetros, kā tie drukāti, un saglabā šo izmēru, kad rasējuma mērogs mainās no 1:100 uz 1:50.
keywords: anotācijas mērogs, anotatīvs, teksta izmērs, teksta augstums, augstums uz papīra, izmēra teksta izmērs, marķējuma izmērs, telpas nosaukuma izmērs, režģa apzīmējums, simbola izmērs, rasējuma mērogs, 1:50, 1:100, biroja standarts, burti, zīmēt 1:1, pilnā izmērā, lapas teksts
from: 94118788
---

## Ko jūs darīsiet

Iestatiet vienreiz visai ēkai, cik augsti ir rasējumu burti uz papīra. Modeli nekad nemērogojat un tekstu nemainat atkarībā no mēroga: BimCraft aprēķina izmēru no augstuma uz papīra un rasējuma mēroga.

## Kā tas darbojas

- Modelis ir pilnā izmērā. Siena, kas gara 10 m, ir 10 000 mm gara katrā mērogā.
- Anotācijai ir **augstums uz papīra**: lielā burta augstums izdrukātā lapā milimetros.
- Pie 1:100 2,5 mm teksts modelī ir 250 mm augsts; pie 1:50 — 125 mm. Uz papīra tas ir 2,5 mm abos gadījumos.
- Plāna simboli (elektrība, santehnika) zīmēti papīra milimetros un seko tam pašam noteikumam.

## Soļi

1. Atveriet projektu pārlūku. Zem {{ui:Lapas}} noklikšķiniet uz {{ui:Anotāciju izmēri…}}.
2. Ierakstiet augstumu milimetros tiem tipiem, ko vēlaties iestatīt: {{ui:Piezīmes un uzraksti}}, {{ui:Izmēru teksts}}, {{ui:Marķējumi un līmeņu nosaukumi}}, {{ui:Telpu nosaukumi}}, {{ui:Režģa apzīmējumu burti}}, {{ui:Skatu nosaukumi uz lapām}} un {{ui:Specifikācijas teksts}}. Tukšs lauciņš paturēs BimCraft savu izmēru, kas rādīts pelēkā krāsā.
3. Noklikšķiniet uz {{ui:Saglabāt}}. Tas ir viens solis, ko var atsaukt.

Katra lapa, zīmējumu komplekts, plāna PDF un fasādes un griezumi no šā brīža izmanto šos izmērus. Atstarpe starp izmēra līniju un tās tekstu, režģa apzīmējuma izmērs un specifikācijas rindas augstums mainās līdzi tekstam.

## Plāns ar savu mērogu

Piešķiriet plānam mērogu tā skata diapazonā ({{ui:Mērogs}}; skatiet [Skati un lapas](topic:views-and-sheets)). Tad:

- ekrānā telpu nosaukumi, marķējumi, izmēru teksts un režģa apzīmējumi tiek zīmēti to drukātajā izmērā attiecībā pret modeli, tātad redzams tas, ko rādīs lapa;
- plāna simboli un to marķējumi ir izmērīti šim mērogam. Mainot mērogu no 1:100 uz 1:50, tie modelī ir perpus mazāki, bet uz papīra tādi paši.

Plāns bez sava mēroga saglabā fiksēto ekrāna tekstu, un tā simboli ir izmērīti 1:50 (1/4" = 1'-0" pēdās un collās), kā līdz šim.

## Jūsu biroja izmēri

Ar ieslēgtu papildinājumu Default Policies iestatiet biroja augstumus sadaļā Iestatījumi › Globāli › Default Policies › {{ui:Anotāciju izmēri uz papīra}}. Jauna ēka tos ņem, noklikšķinot uz Izveidot. Ēkā, kuru jau sākāt, dialogā ir {{ui:Izmantot manas biroja izmērus}}. Skatiet [Default Policies](topic:default-policies).

## Normatīvu pakotnes izmēri

Normatīvu pakotne var dot teksta augstumus, kādi vajadzīgi tās vietai (papildinājums Būvnoteikumi, rasējumu konvencijas). Sadaļā Iestatījumi › Būvnoteikumi atzīmējiet pakotni, tad dialogā noklikšķiniet uz {{ui:Izmantot normatīvu pakotnes izmērus}}: lauciņi aizpildās, jūs tos pārbaudāt un saglabājat. Izmērs, ko pakotne dod punktos, ir fonta izmērs un tiek pārvērsts lielo burtu augstumā, tāpēc pārbaudiet to. Nekas netiek iestatīts, kamēr nesaglabājat.

## Ko jums vajadzētu redzēt

- Tas pats teksta augstums milimetros lapā pie 1:100 un lapā pie 1:50, kamēr pats plāns pie 1:50 ir divreiz lielāks.
- Izmēri pārvietojas kopā ar ēku: tie tiek saglabāti tās IFC failā.

## Labi zināt

- BimCraft savi izmēri ir tie, ko tās lapas vienmēr ir lietojušas (aptuveni 1,5 mm lieli burti izmēru tekstam). Tie nav zīmēšanas standarts: iestatiet biroja izmērus.
- Augstumam jābūt no 0,5 līdz 50 mm.
- Titulbloka uzraksti un atslēgas legendas ar to nav saistītas: tām ir savi izmēri.
