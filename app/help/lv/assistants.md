---
title: Ļaujiet AI asistentam strādāt ar jūsu modeli
summary: Ieslēdziet asistentus iestatījumos, lai asistents jūsu datorā varētu atrast elementus, nolasīt to rekvizītus, izolēt tos skatā un zīmēt sienas, durvis, logus, grīdas, līmeņus un režģus caur CadCraft Studio. Līdz ieslēgšanai ir izslēgts.
keywords: ai, asistents, mcp, skripts, automatizācija, studio, atrast elementus, izolēt, rekvizīti, atļaujas, atvienot, aktivitāte, zīmēt sienas, pievienot durvis, pievienot logus, līmeņi, režģi, grīdas, atsaukt, saglabāt, komandrinda, cli, bez loga, izmantot ar AI asistentiem
from: c5ee595b
---

## Ko jūs iemācīsieties

Kā ļaut AI asistentam (jebkuram asistentam, kas runā MCP) apskatīt atvērto IFC modeli un zīmēt tajā, ko tas var un ko nevar darīt, un kā to apturēt.

## Ko asistents var darīt BimCraft

| Tas lūdz | Kas notiek | Nepieciešams |
|---|---|---|
| Atrast elementus | Tas saņem elementu sarakstu pēc klases, stāva, nosaukuma vai rekvizīta vērtības, kā to dara **Meklēt** | Lasīt |
| Nolasīt rekvizītus | Tas saņem viena elementa atribūtus, tipu, rekvizītu kopas un daudzumus, kā tos rāda **Rekvizīti** | Lasīt |
| Aprakstīt modeli, uzskaitīt sienas | Tas saņem līmeņus, sienas, durvis, logus, telpas, grīdas, režģus un kolonnas, kā arī katras sienas galus, tipu un augstumu | Lasīt |
| Izolēt, padarīt caurspīdīgu, paslēpt vai parādīt | 3D skats mainās tā, it kā būtu izmantota izvēlne {{ui:Rādīt}} | Mainīt skatu un zīmēt |
| Zīmēt sienas, durvis, logus, grīdas, līmeņus vai režģa līnijas | Modelis mainās tā, it kā būtu izmantoti {{ui:Zīmēšana}} rīki: sienas savienojas, telpas, grīdas un jumti seko | Mainīt skatu un zīmēt |
| Mainīt nosaukumu vai rekvizīta vērtību | Viena elementa nosaukums, apraksts, objekta tips vai marķējums, vai viena rekvizīta vērtība. Vērtību, ko tas dala ar citiem elementiem, vispirms tam nokopē; tipa vērtība mainās tikai tad, kad asistents to norāda, jo katrs šī tipa elements seko | Mainīt skatu un zīmēt |
| Pārvietot, dzēst, mainīt sienas, durvis un logus | Elementi tiek pārvietoti vai dzēsti kopā ar to, ko tie tur; sienas, zīmētas ar {{ui:Zīmēšana}} rīkiem, mainās pēc galiem vai tipa, durvis un logi — pēc vietas, izmēra vai tipa, un telpas un savienojumi seko | Mainīt skatu un zīmēt |
| Iestatīt, izkārtot un nolasīt specifikāciju | "Durvju specifikācija pa stāviem, ar ugunsizturību un furnitūru": asistents nosauc specifikāciju, tās kolonnas (rekvizīts vai marķējums kļūst par kolonnu) un grupēšanu; BimCraft to aizpilda no modeļa un izkārto, bet to, ko asistents nav norādījis, ņem no biroja standarta. Iestatījums pievienojas jūsu {{ui:Specifikācijas}} sarakstam. Katra saņemtā rinda nosauc savus elementus, lai tos varētu atlasīt | Lasīt, lai nolasītu; Mainīt skatu un zīmēt, lai saglabātu iestatījumu |
| Eksportēt specifikāciju | CSV, Excel vai ar tabulēšanas zīmēm atdalīts teksts, ko ielīmēt Google Sheets (nekas netiek sūtīts uz Google) | Eksportēt |
| Nolasīt un iestatīt telpu apdari | Apdares tipi, katras telpas grīdas, sienu un griestu apdare, zonas; laukumi, plākšņu skaits un pamatnes tilpumi tad nāk no apdares specifikācijām | Lasīt; Mainīt skatu un zīmēt, lai iestatītu |
| Atlasīt elementus, atsaukt pašu soļus | Elementi tiek atlasīti skatā; tā pēdējais solis tiek atsaukts | Mainīt skatu un zīmēt |
| Saglabāt | Jauns IFC fails ar visām izmaiņām, kā to veido {{ui:Saglabāt kā IFC}} (oriģināls nekad netiek mainīts) | Saglabāt |
| Eksportēt USD | Atvērtie modeļi kā OpenUSD (.usda, .usdc vai .usdz), kā to raksta {{ui:USD}} rīkjoslā | Eksportēt |
| Renderēt attēlu, palaist renderēšanas rindu | 3D skata attēls, kā to veido dialogs {{ui:Renderēt}} ar jūsu renderēšanas iestatījumiem, ja vien nelūdz citus, vai augstas kvalitātes attēli, kas pievienoti dialoga rindai un renderēti vienu pēc otra (rindai nepieciešams WebGPU). Modelī nekas nemainās ([Renderēt attēlu](topic:render)) | Eksportēt |

Katra asistenta izmaiņa ir viens solis sadaļā **Izmaiņas** ar nosaukumu "Asistents: …" (piemēram, "Asistents: pievienot 4 sienas"), tāpēc {{key:Mod+Z}} atsauc visu tā darbību, un jūs redzat, kura solis tas bija. Logā tas nevar atvērt failus: jūs atverat modeli, un tas strādā ar atvērto.

## Ieslēgt

Asistenti sasniedz BimCraft caur CadCraft Studio jūsu datorā; parastā pārlūkprogramma tam ceļu nedod.

1. Atveriet {{ui:Iestatījumi}} un izvēlieties cilni **BimCraft**.
2. Sadaļā **Asistenti** atzīmējiet **Ļaut AI asistentiem un skriptiem izmantot BimCraft**.
3. **Lasīt** jums jau ir atzīmēts. Atzīmējiet arī **Mainīt skatu un zīmēt**, ja asistents drīkst izolēt un paslēpt elementus un zīmēt, un **Saglabāt**, ja tas drīkst saglabāt modeli kā jaunu failu.
4. Pieslēdziet asistentu Studio (Studio parāda adresi un iestatījumus, ko ielīmēt tajā).

## Kamēr asistents ir pieslēgts

Piezīme labās paneļa augšdaļā norāda, kurš asistents ir pieslēgts un ko tas var. Noklikšķiniet uz {{ui:Atvienot}}, lai nekavējoties beigtu tā sesiju; tam jāpieslēdzas vēlreiz, lai turpinātu.

**Aktivitāte** sadaļā **Asistenti** iestatījumos uzskaita katru izsaukumu, ko asistents veica, jaunākais pirmais, ar norādi, vai tas izdevās.

:::tip
Jautājiet vienkāršos vārdos, piemēram, "izolēt ārējās sienas 1. līmenī", "kurām durvīm nav ugunsizturības?" vai "zīmēt 6 x 4 metru telpu 1. līmenī ar durvīm dienvidu sienā". Asistents atrod elementus un parāda tos jūsu skatā vai tos uzzīmē.
:::

## Bez loga: skripti un komandrinda

Tie paši zīmēšanas rīki darbojas IFC failos mapēs, ko norādāt, bez atvērta loga: CadCraft MCP serveris un komandrinda var sākt jaunu ēku vai atvērt IFC failu, to aprakstīt, pievienot sienas, durvis, logus, grīdas, līmeņus un režģus, atsaukt un saglabāt kā jaunu `.ifc` failu. Jūs nosakāt, kuras mapes tas drīkst izmantot un vai drīkst kaut ko mainīt vai saglabāt.

## Izslēgt

Noņemiet atzīmi no **Ļaut AI asistentiem un skriptiem izmantot BimCraft**. Katrs asistents tiek nekavējoties atvienots, un iestatījums tiek saglabāts nākamreizei.

## Skatīt arī

- [Recepšu piemēri AI asistentiem](common:assistants-recipes): darba piemēri, katrs ar izsauktajiem rīkiem.
- [Atrast elementus pēc klases, nosaukuma vai rekvizīta](topic:find)
- [Paslēpt, izolēt un padarīt caurspīdīgus elementus](topic:hide-and-isolate)
- [BimCraft iestatījumi](topic:settings)
