---
title: Ļaut MI asistentam strādāt ar jūsu modeli
summary: Ieslēdziet asistentus iestatījumos, lai asistents jūsu datorā varētu atrast elementus, nolasīt to rekvizītus, izdalīt tos skatā un zīmēt sienas, durvis, logus, grīdas, līmeņus un režģus, izmantojot CadCraft Studio. Līdz ieslēgšanai tas ir izslēgts.
keywords: ai, asistents, mcp, skripts, automatizācija, studio, meklēt elementus, izdalīt, rekvizīti, atļaujas, atvienot, aktivitāte, zīmēt sienas, pievienot durvis, pievienot logus, līmeņi, režģi, grīdas, atsaukt, saglabāt, komandrinda, cli, bez loga, izmantot ar MI asistentiem
from: 66d72742
---

## Ko iemācīsieties

Kā ļaut MI asistentam (jebkuram asistentam, kas runā MCP valodā) apskatīt atvērto IFC modeli un zīmēt tajā, ko tas var un ko nevar darīt, un kā to apturēt.

## Ko asistents var darīt BimCraft

| Tas lūdz | Kas notiek | Vajag |
|---|---|---|
| Meklēt elementus | Tas saņem elementu sarakstu pēc klases, stāva, nosaukuma vai rekvizīta vērtības, tāpat kā to dara **Meklēt** | Lasīt |
| Nolasīt rekvizītus | Tas saņem viena elementa atribūtus, tipu, rekvizītu kopas un daudzumus, tāpat kā tos rāda **Rekvizīti** | Lasīt |
| Aprakstīt modeli, uzskaitīt sienas | Tas saņem līmeņus, sienas, durvis, logus, telpas, grīdas, režģus un kolonnas, kā arī katras sienas galus, tipu un augstumu | Lasīt |
| Izdalīt, padarīt caurspīdīgu, paslēpt vai parādīt | 3D skats mainās tā, it kā būtu izmantota izvēlne {{ui:Rādīt}} | Mainīt skatu un zīmēt |
| Zīmēt sienas, durvis, logus, grīdas, līmeņus vai režģa līnijas | Modelis mainās tā, it kā būtu izmantoti {{ui:Zīmēšana}} rīki: sienas savienojas, telpas, grīdas un jumti seko | Mainīt skatu un zīmēt |
| Mainīt nosaukumu vai rekvizīta vērtību | Viena elementa Nosaukums, Apraksts, Objekta tips vai Birka, vai viena rekvizīta vērtība. Vērtība, ko tas dala ar citiem elementiem, vispirms tiek nokopēta tikai tam; tipa vērtība mainās tikai tad, kad asistents to norāda, jo katrs šī tipa elements seko | Mainīt skatu un zīmēt |
| Pārvietot, dzēst, mainīt sienas, durvis un logus | Elementi tiek pārvietoti vai dzēsti kopā ar tiem, kuriem tie ir piestiprināti; sienas, kas zīmētas ar {{ui:Zīmēšana}} rīkiem, mainās pēc saviem galiem vai tipa, durvis un logi pēc vietas, izmēra vai tipa, un telpas un savienojumi seko | Mainīt skatu un zīmēt |
| Iestatīt, sakārtot un nolasīt specifikāciju | "Durvju specifikācija pa stāviem, ar ugunsdrošības klasi un apkalumiem": asistents nosauc specifikāciju, tās kolonnas (rekvizīts vai birka kļūst par kolonnu) un grupēšanu; BimCraft to aizpilda no modeļa un izkārto, bet to, ko asistents nebija norādījis, ņem no biroja standarta. Iestatījums pievienojas jūsu sarakstam **Specifikācijas**. Katrā rindā, ko tas saņem, ir nosaukti tā elementi, lai tos varētu atlasīt | Lasīt, lai nolasītu; Mainīt skatu un zīmēt, lai saglabātu iestatījumu |
| Eksportēt specifikāciju | CSV, Excel vai ar tabulatoru atdalīts teksts, ko ielīmēt Google Sheets (nekas netiek sūtīts Google) | Eksportēt |
| Nolasīt un iestatīt telpu apdari | Apdares tipi, katras telpas grīdas, sienu un griestu apdare, zonas; laukumi, flīžu skaits un pamatnes tilpumi tad nāk no apdares specifikācijām | Lasīt; Mainīt skatu un zīmēt, lai iestatītu |
| Atlasīt elementus, atsaukt savus soļus | Elementi tiek atlasīti skatā; tiek atsaukts tā pēdējais solis | Mainīt skatu un zīmēt |
| Saglabāt | Jauns IFC fails ar visām izmaiņām, tāpat kā to veido {{ui:Saglabāt kā IFC}} (oriģinālais fails nekad netiek mainīts) | Saglabāt |
| Eksportēt USD | Atvērtie modeļi kā OpenUSD (.usda, .usdc vai .usdz), tāpat kā tos raksta {{ui:USD}} rīkjoslā | Eksportēt |
| Renderēt attēlu, palaist renderēšanas rindu | 3D skata attēls, tāpat kā to veido dialogs {{ui:Renderēt}} ar jūsu renderēšanas iestatījumiem, ja vien tas nepieprasa citus, vai augstas kvalitātes attēli, kas pievienoti dialoga rindai un renderēti pēc kārtas (rindai nepieciešams WebGPU). Modelī nekas nemainās ([Renderēt attēlu](topic:render)) | Eksportēt |

Katra izmaiņa, ko veic asistents, ir viens solis sadaļā **Izmaiņas** ar nosaukumu "Asistents: …" (piemēram, "Asistents: pievienot 4 sienas"), tāpēc {{key:Mod+Z}} atsauc visu tā darbību, un jūs redzat, kura solis tas bija. Logā tas nevar atvērt failus: jūs atverat modeli, un tas strādā ar to, kas ir atvērts.

## Ieslēgt

Asistenti sasniedz BimCraft caur CadCraft Studio jūsu datorā; parastajai pārlūkprogrammai nav piekļuves.

1. Atveriet {{ui:Iestatījumi}} un izvēlieties cilni **BimCraft**.
2. Sadaļā **Asistenti** atzīmējiet **Ļaut MI asistentiem un skriptiem izmantot BimCraft**.
3. **Lasīt** jums jau ir atzīmēts. Atzīmējiet arī **Mainīt skatu un zīmēt**, ja asistents drīkst izdalīt un paslēpt elementus un zīmēt, un **Saglabāt**, ja tas drīkst saglabāt modeli kā jaunu failu.
4. Pievienojiet asistentu Studio (Studio parāda adresi un iestatījumus, ko ielīmēt tajā).

## Kamēr asistents ir pievienots

Piezīme labā paneļa augšdaļā norāda, kurš asistents ir pievienots un ko tas var darīt. Noklikšķiniet uz {{ui:Atvienot}}, lai nekavējoties beigtu tā sesiju; tam jāpievienojas no jauna, lai turpinātu.

**Aktivitāte** sadaļā **Asistenti** iestatījumos uzskaita katru asistenta veikto izsaukumu, jaunākais pirmais, un norāda, vai tas izdevās.

:::tip
Jautājiet vienkāršos vārdos, piemēram, "izdali ārējās sienas 1. līmenī", "kurām durvīm nav ugunsdrošības klases?" vai "zīmē 6 x 4 metru telpu 1. līmenī ar durvīm dienvidu sienā". Asistents atrod elementus un parāda tos jūsu skatā vai tos uzzīmē.
:::

## Bez loga: skripti un komandrinda

Tie paši zīmēšanas rīki darbojas ar IFC failiem mapēs, ko jūs nosaucat, bez atvērta loga: CadCraft MCP serveris un komandrinda var sākt jaunu ēku vai atvērt IFC failu, to aprakstīt, pievienot sienas, durvis, logus, grīdas, līmeņus un režģus, atsaukt un saglabāt to kā jaunu `.ifc` failu. Vēl četri rīki ir piemēroti skriptiem: `ifc_batch` izpilda līdz 200 rediģēšanas soļiem kā vienu (viss vai nekas: viens atsaukums atceļ visu paketi, un noraidīts solis atceļ pārējos un nosauc soli); `ifc_describe` uzskaita līmeņus un katru sienu ar tās durvīm un logiem; `ifc_render_png` bez loga raksta modeļa plakani ēnotu pārbaudes attēlu (bez materiāliem, tekstūrām un ēnām); `usd_export` raksta `.usda`, `.usdc` vai `.usdz`. Komandrindā `cadcraft bim script.json --from model.ifc -o out.ifc` izpilda soļu skriptu, un `--usd`, `--png` un `--plan` no tās pašas izpildes raksta USD failu, attēlu vai plānu. Jūs izlemjat, kuras mapes tas drīkst izmantot un vai tas drīkst kaut ko mainīt vai saglabāt.

## Izslēgt

Noņemiet atzīmi no **Ļaut MI asistentiem un skriptiem izmantot BimCraft**. Katrs asistents tiek nekavējoties atvienots, un iestatījums tiek saglabāts nākamajai reizei.

## Skatīt arī

- [Receptes MI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.
- [Meklēt elementus pēc klases, nosaukuma vai rekvizīta](topic:find)
- [Paslēpt, izdalīt un padarīt caurspīdīgus elementus](topic:hide-and-isolate)
- [BimCraft iestatījumi](topic:settings)
