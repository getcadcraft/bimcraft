---
title: Sienu, grīdu un jumtu karkass
summary: Ģenerējiet stenderus, rievojumus, pārsedzes, balķus, spāres vai fermas no modeļa un saglabājiet tos kopā ar to; tie tiek veidoti no jauna, kad mainās sienas, atvērumi, grīdas vai jumts, un kokmateriālu specifikācija ir griezumu saraksts.
keywords: TJI, I-joist, balku spriedzes tabula, tabulas ielāde, karkass, stenderis, stenderi, rievojums, augšējais rievojums, pārsedze, galvenais stenderis, palīgstenderis, apmale, īsais stenderis, palodze, bloķējumi, stūris, Kalifornijas stūris, T savienojums, balķis, apmales balķis, spāre, sīkspāre, ieleju spāre, kores dēlis, griestu balķis, saites, ferma, kokmateriāli, griezumu saraksts, dēļpēdas, 2x4, 2x6, solis, centru attālums
from: 76d0ffb5
---

## Ko jūs darīsiet

Veidojiet ēkas karkasu no tā, ko esat zīmējis. BimCraft izkārto stenderus, rievojumus un pārsedzes sienās, balķus grīdās un spāres (vai fermas) jumtā, nosaka to izmērus pēc marķētām noklusējuma tabulām, saglabā tos kopā ar modeli un veido no jauna, kad mainās tas, ko tie balsta. Specifikācija **Kokmateriāli** ir griezumu saraksts.

## Veidojiet karkasu

1. Līmenī atveriet {{ui:Būvējums}} un izvēlieties {{ui:Karkass}}.
2. Izvēlieties **soli** (16" vai 24" centru attālumā; 400 vai 600 mm), **stūrus** (trīs stenderu vai Kalifornijas), jumtam **Spāres** vai **Fermas**, un to, vai sienām ir rinda **bloķējumu** vidējā augstumā. Grīdām izvēlieties **Zāģēts kokmateriāls** vai **TJI (provizorisks)** un iestatiet balku virzienu uz automātisku, plāna X vai plāna Y.
3. Noklikšķiniet uz **Veidot karkasu visām sienām** vai uz vienas sienas, grīdas vai jumta (uz līmeņa, uz kura atrodas jumts), lai veidotu tikai to.

Izslēdziet **Rādīt karkasu**, lai paslēptu visus karkasa elementus kā slāni; **Caurspīdīgi** paslēpj sienas, grīdas un jumtus, kas ir ar karkasu, lai varētu aplūkot tikai karkasu.

## Ko jūs saņemat

- **Sienas**: apakšējais rievojums (nogriezts pie durvīm), dubultais augšējais rievojums, stenderi izkārtojumā no sienas sākuma, galvenie un palīgstenderi un pārsedze pie katrām durvīm un logiem, īsie stenderi virs pārsedzēm un zem logiem, rupja palodze zem logiem, stūri, kur sienas satiekas (siena, kas iet cauri, paņem stūra stenderus), divi atbalsta stenderi, kur cita siena pieslēdzas T veidā, un bloķējumi starp stenderiem.
- **Grīdas**: balķi pa īso grīdas virzienu pēc noklusējuma vai pa jūsu izvēlēto plāna asi; apmales balķi ap malu, un dubultas apmales un pārsedzes ap kāpņu telpu, ar balķiem caur to nogriezti īsi (astes balķi). TJI režīms izvēlas mazāko uzskaitīto sēriju un augstumu, kas sasniedz izmērīto brīvo spanu izvēlētajā solī.
- **Jumti**: parastās spāres, taisnas pret katru dzegu, sīkspāres, kur ieleju un kores tās nogriež, ieleju un kores spāres, kores dēļi, griestu balķi uz rievojumiem un saites — vai vienkāršas fermas izvēlētajā solī, katra kā viens gabals.

## Mainiet to

Atlasiet jebkuru karkasa elementu 3D skatā vai modeļa kokā. **Rekvizīti** rāda tā karkasu: mainiet soli, grīdas balka tipu un virzienu, stūrus, bloķējumus vai jumta karkasu. Sienu, durvju un logu pārvietošana vai grīdas vai jumta maiņa karkasu veido no jauna pati no sevis.

Lai saglabātu elementu, ko novietojāt tīši, kad karkass tiek veidots no jauna, atlasiet to un izvēlieties **Paturēt šo daļu, kad karkass tiek veidots no jauna**. Paturēta daļa paliek savā vietā; kad karkass ap to mainās, tā tiek atzīmēta, lai varētu pārbaudīt.

## TJI grīdas no tabulas, ko ielādējat

BimCraft neiekļauj balku ražotāju spriedzes tabulas (tās pieder ražotājam un mainās ar katru izdevumu). Izvēlieties grīdas karkasu, iestatiet **Grīdas balķi** uz **TJI (provizorisks)** un izvēlieties **Ielādēt tabulu…** sadaļā **Rekvizīti**: fails formātā `cadcraft-tji-table`, JSON vai CSV, ko izveidojāt no ražotāja pašreizējām spriedzes tabulām. Tajā norādīts ražotājs, produkts un izdevums, kā arī avots, un katram slodzes gadījumam (lietderīgā slodze, pastāvīgā slodze, deformācijas limits, atbalsta garums) uzskaitīts lielākais brīvais spans katrai sērijai un augstumam katrā solī.

- BimCraft ņem grīdas **brīvo spanu**, izvēlas seklāko augstumu un tajā sēriju, kuras uzskaitītais spans to sasniedz izvēlētajam solim un slodzes gadījumam, un ar to izveido grīdas karkasu. Ja spans vai solis ir ārpus tabulas, tas to norāda un neko nemaina.
- Slodzes, deformācijas limits, atbalsta garums, tabula un teikums "Provizorisks izkārtojuma norādījums; galīgā izvēle prasa ražotāja tabulas un projekta slodzes" tiek izdrukāti uz Kokmateriālu specifikācijas, ierakstīti modelī kopā ar karkasu un uzskaitīti panelī **Problēmas** kā piezīme. Tabula, kas atzīmēta kā piemērs, par to brīdina.
- Ja ieslēgts papildinājums **Būvnoteikumi**, tā grīdas balķu noteikums arī nolasa ielādētu tabulu; bez tabulas TJI balķi no šīs pārbaudes tiek izslēgti, kā iepriekš.
- Tabula paliek šajā pārlūkprogrammā, līdz to notīrāt vai ielādējat citu. Fails: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; vai `metric`: mm, metri, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) un `rows` (`series`, `depth`, `spans`: katram gadījuma `id` solis un lielākais brīvais spans, piemēram, `"16": "15-6"`). CSV formātā tie paši fakti ir rindas `# key = value`, pēc tam `series,depth,case,spacing,span`.
- Ja tabula nav ielādēta, TJI izkārtojums tiek noraidīts un nekas nemainās: **Ielādējiet TJI tabulu: ražotāju tabulas pieder viņiem un nav iebūvētas.** Modelis, kas bija karkasēts ar vecāko iebūvēto TJI tabulu (pirms šīs izmaiņas), paturē katru balku, kas tam ir; Rekvizīti un Problēmas norāda, ka nepieciešama tabula, un grīdu var atkārtoti karkasēt, kad ielādējat vienu. Masīvkoka balki darbojas kā līdz šim.

Tas ir izkārtojuma norādījums. Galīgā balku izvēle prasa ražotāja tabulas, projekta slodzes un inženieri.

## Griezumu saraksts

Specifikāciju panelī izvēlieties **Kokmateriāli**: katrs karkasa elements sagrupēts pēc izmēra un krājuma garuma, ko pirktu (veselas 2' garuma no 8'; 600 mm soļi no 2400 mm), ar gabalu skaitu un dēļpēdām. **CSV** to lejupielādē.

:::warning
Galvenes, balku, spāru un griestu balku izmēri nāk no marķētām noklusējuma tabulām tipiskām vienstāva vai divstāvu mājām, nevis inženierrēķini. **Rekvizīti** norāda, kad spans vai atvērums ir ārpus tā tabulas. Projektētājs vai inženieris pārbauda spanus, slodzes un savienojumus.

TJI izkārtojumi izmanto tikai tabulu, ko ielādējat un kas izveidota no ražotāja pašreizējām spriedzes tabulām; BimCraft neiekļauj nevienu. Ieteikums nepārbauda atbalstu, punktveida slodzes, konsoles, caurumus, kāpņu telpu pārsedzes vai savienojumus, un modeļa I profils ir shematisks.
:::

## Kas tiek saglabāts

Katrs karkasa sienas, grīdas vai jumts ir IFC elementu montāža ("Framing") no IFC elementiem (stenderi, rievojumi, spāres, kolonnu saites, bloķējumi, fermas) un sijām (pārsedzes, balķi, apmales, kores dēļi), katrs ar savu izmēru, garumu un dēļpēdām.
