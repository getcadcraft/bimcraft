---
title: Pamati zem sienām
summary: Ēkai ar vienu klikšķi izveidojiet plāksni uz grunts, cokola sienas ar plāksni, zemsedzi vai pagrabu; pamatnes tiek noteiktas pēc sienām un stāvu skaita, un pamats seko līdzi, kad sienas pārvietojas.
keywords: pamats, pamatne, plāksne uz grunts, sabiezināta mala, monolītā plāksne, cokola siena, zemsedze, pagrabs, pagraba siena, sala, betons, pamatnes platums
from: c0e20172
---

## Ko jūs darīsiet

Dodiet ēkai pamatu, kas atbilst tās sienām. BimCraft seko sienu ārējai pusei, nosaka pamatnes izmērus pēc sienas tipa un tā, cik stāvu tām balstās, un katru reizi, kad sienas mainās, veido pamatu no jauna.

## Ievietojiet pamatu

1. Līmenī, kurā stāv sienas (parasti pirmajā), atveriet {{ui:Būvējums}} un izvēlieties {{ui:Pamats}}.
2. Izvēlieties veidu:
   - **Plāksne uz grunts**: 4" betona plāksne, kuras augša ir grīda, ar sabiezinātu malu zem sienām.
   - **Cokola sienas un plāksne**: pamata sienas līdz grīdai uz pamatnēm, ar plāksni iekšpusē.
   - **Zemsedze**: pamata sienas, kas apstājas zem grīdas karkasa, uz pamatnēm, bez plāksnes.
   - **Pagrabs**: pilna augstuma pamata sienas uz pamatnēm ar pagraba plāksni zem grīdas karkasa.
3. Norādiet ēkas iekšpusē: pamatnes parādās punktētas, ar savu izmēru. Noklikšķiniet.

Noklikšķinot uz ēkas, kurai jau ir pamats, to atlasāt, tātad to var mainīt, nevis pievienot otru.

## Mainiet to

Atlasiet pamatu (noklikšķiniet ēkas iekšpusē ar {{ui:Pamats}} vai uz jebkuras tā daļas 3D skatā vai modeļa kokā) un mainiet to sadaļā **Rekvizīti**: veidu, pamatnes platumu un dziļumu, cik zemu atrodas pamatnes apakšējā mala, sienas biezumu, cik zem grīdas sienas beidzas, pagraba augstumu un plāksnes biezumu. Katra izmaiņa ir viens atsaukšanas solis.

Izmēri, kas atzīmēti kā **automātiski**, nāk no sienām: pamatnes ir 12", 15" vai 23" platas vienam, diviem vai trim stāviem uz plāksnes vai cokola sienām, 18", 22" vai 27" virs zemsedzes vai pagraba, un par 4" platākas zem mūra vai betona sienām. Ierakstiet izmēru, lai iestatītu savu; ierakstiet `0`, lai atgrieztos pie automātiskā.

:::warning
Automātiskie izmēri ir marķēti noklusējumi tipiskām vieglā karkasa mājām, nevis inženierrēķini. Projektētājs vai inženieris pārbauda pamatnes, dziļumus un sienas attiecībā pret augsni, sala dziļumu un slodzēm.
:::

## Kas tiek saglabāts

Pamats tiek saglabāts kā IFC elementu montāža ("Foundation") no pamatnes (vai plāksnes sabiezinātās malas), pamata sienas un plāksnes, cik nepieciešams tā veidam, visi no betona, katrs ar saviem daudzumiem: garumi, platumi, augstumi, laukumi un tilpumi, gatavi apjomu aprēķiniem.

## Noderīga informācija

- Sienu pārvietošana, pievienošana vai dzēšana atkārtoti veido pamatu zem tām; ja zīmējat sienas virs līmeņa, zemākās pamatnes paplašinās papildu stāvam.
- {{key:Delete}} noņem atlasītu pamatu kopā ar visām tā daļām.
- Ja vietas zeme ir modelī (skatiet [Vietas zeme, ēkas laukums un segumi](topic:terrain)), cokola sienas un zemsedzes pamatnes nolaižas kopā ar to 8" soļos.
- Pamatnes zem iekšējām sienām vēl nav izveidotas.
