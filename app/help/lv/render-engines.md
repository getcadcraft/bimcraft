---
title: Izvēle, kura programma zīmē attēlu
summary: Dzinēja izvēle renderēšanas dialogā: mūsu pašu divi dzinēji, citas programmas CadCraft Studio un tas, ko tīmeklis dara citādi.
keywords: renderēt, dzinējs, renderētājs, renderēšanas dzinējs, spraudnis, plugin, studio, ārējā programma, zīmē, rinda, papildinājuma dzinējs
from: 44a1ef5e
---

{{ui:Renderēt}} dialogā virs {{ui:Forma}} ir izvēle **Dzinējs**. Mūsu pašu divi dzinēji vienmēr ir pieejami un darbojas visur; papildinājumi var pievienot citus, bet programmā CadCraft Studio saraksts satur arī programmas, kas pārņem ainu.

| Dzinējs | Ko tas dara | Kur |
|---|---|---|
| Iebūvētais: Ātrais | Ātrs stāvattēls: dienas gaisma, mīkstas ēnas, stikla un metāla izskats, sekundēs | Pārlūkā un Studio |
| Iebūvētais: Ceļu izsekotājs | Gaismas atstarošanās starp virsmām jūsu grafikas kartē vai procesorā, renderēšanas rinda un citi datori jūsu tīklā | Pārlūkā un Studio |
| Papildinājuma dzinējs | Tas zīmē un atdod attēlu: skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program) | Pārlūkā (dzinējs JavaScript) vai Studio (dzinējs, kas palaiž programmu) |
| Programma, kas pārņem ainu | Studio ieliek ainu savā mapē un to uztur atbilstošu | Studio |
| Atvērt citā programmā … | Saglabā ainu un atver to programmā; nekas neatgriežas: skatiet [Atvērt ainu citā programmā](topic:render-open-in) | Tīmeklis saglabā failu |

## Kā izvēle darbojas

- Izvēloties Ātrais vai Ceļu izsekotājs, līdzi mainās {{ui:Forma}}, un otrādi. Citas dialoga daļas nemainās lietotājiem, kas nekad neizmanto citu dzinēju.
- Dzinējs, kas nav pieejams, paliek sarakstā ar iemeslu ("nav atrasts", "nepieciešama jaunāka versija"); to nevar izvēlēties. Pārlūkā dzinējs, kas darbojas tikai Studio, rāda "saglabā failu": {{ui:Renderēt}} tad saglabā ainu un tās iestatījumus failā, ko nogādājat līdz šai programmai.
- Izvēle tiek saglabāta kopā ar faila renderēšanas iestatījumiem, un pēdējais izvēlētais dzinējs ir sākuma dzinējs failiem, kuriem nav savas izvēles.
- Attēls no citas programmas norāda, kura programma to zīmēja un tās versiju, dialogā un renderēšanas rindā. [Renderēšanas](topic:render) lapas apsolījumi attiecas tikai uz **mūsu pašu** dzinējiem: cita programma apgaismo, toņo un paraugo pēc savas metodes, tāpēc divi viena attēla attēli ir līdzīgi kamerā, saulē, lampās un ekspozīcijā, bet ne pikseli pa pikselim.

## Ko katrs dzinējs saņem

Aina citai programmai nonāk kā **pakotne**: modelis kā USD fails (tas pats fails, ko raksta [Saglabāt kā USD](topic:usd)), un iestatījumu fails, kurā ir tas, ko USD importētājam nevar uzticēt: precīzās materiālu vērtības, lampas, kas ir ieslēgtas ar savu jaudu un gaismas profiliem, saule, debesis, ekspozīcija un kamera tā, kā to zīmētu dialogs. Nekas netiek augšupielādēts nekur.

## Renderēšanas rinda

Attēls citai programmai var gaidīt [renderēšanas rindā](topic:render#the-render-queue) kā mūsu pašu; tā darbs atceras, kuram dzinējam tas paredzēts.
