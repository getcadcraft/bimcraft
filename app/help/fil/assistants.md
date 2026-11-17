---
title: Hayaan ang AI assistant na magtrabaho kasama ang model mo
summary: I-on ang mga assistant sa Settings para makahanap ang assistant sa computer mo ng mga elemento, mabasa ang kanilang property, maihiwalay ang mga ito sa view, at gumuhit ng mga pader, pinto, bintana, sahig, level at grid, sa pamamagitan ng CadCraft Studio. Naka-off hanggang buksan mo ito.
keywords: ai, assistant, mcp, script, automation, studio, maghanap ng elemento, ihiwalay, properties, permissions, disconnect, activity, gumuhit ng pader, magdagdag ng pinto, magdagdag ng bintana, level, grid, sahig, undo, save, command line, cli, headless, gamitin sa mga AI assistant
from: c5ee595b
---

## Ano ang matututunan mo

Paano payagan ang isang AI assistant (anumang assistant na nagsasalita ng MCP) na tingnan ang IFC model na bukas sa iyo at gumuhit dito, ano ang kaya at hindi nitong gawin, at paano ito ihihinto.

## Ano ang magagawa ng assistant sa BimCraft

| Humihingi ng | Ano ang mangyayari | Kailangan |
|---|---|---|
| Maghanap ng mga elemento | Nakakakuha ito ng listahan ng mga elemento ayon sa class, storey, pangalan o value ng property, gaya ng ginagawa ng **Find** | Basahin |
| Basahin ang mga property | Nakakakuha ito ng mga attribute, type, property set at quantity ng isang elemento, gaya ng ipinapakita ng **Properties** | Basahin |
| Ilarawan ang model, ilista ang mga pader | Nakakakuha ito ng mga level, pader, pinto, bintana, silid, sahig, grid at column, at ang bawat dulo, type, at taas ng pader | Basahin |
| Ihiwalay, gawing see-through, itago o ipakita | Nagbabago ang 3D view na parang ginamit mo ang menu na {{ui:Show}} | Baguhin ang view at gumuhit |
| Gumuhit ng pader, pinto, bintana, sahig, level o grid line | Nagbabago ang model na parang ginamit mo ang mga tool na {{ui:Draw}}: nagdurugtong ang mga pader, sumusunod ang mga silid, sahig at bubong | Baguhin ang view at gumuhit |
| Baguhin ang pangalan o value ng property | Ang Name, Description, Object type o Tag ng isang elemento, o isang value ng property. Ang value na ibinabahagi nito sa ibang elemento ay kinokopya muna para dito; ang value ng type ay nagbabago lang kapag sinabi ito ng assistant, dahil susunod ang bawat elemento ng type na iyon | Baguhin ang view at gumuhit |
| Ilipat, burahin, baguhin ang mga pader, pinto at bintana | Gumagalaw o nabubura ang mga elemento kasama ng mga elementong kinakapitan nila; ang mga pader na iginuhit gamit ang mga tool na {{ui:Draw}} ay nagbabago sa mga dulo o type nila, ang mga pinto at bintana sa lugar, laki, o type nila, at sumusunod ang mga silid at dugtungan | Baguhin ang view at gumuhit |
| Mag-set up, mag-ayos, at magbasa ng schedule | "Iskedyul ng pinto ayon sa palapag, kasama ang fire rating at ironmongery": pinapangalanan ng assistant ang schedule, ang mga column nito (ang property o tag ay nagiging column), at ang pagpapangkat nito; pinupunan ito ng BimCraft mula sa model at inaayos, at ang hindi binanggit ng assistant ay kinukuha mula sa pamantayan ng opisina. Idinadagdag ang set-up sa iyong listahan ng {{ui:Schedules}}. Bawat linyang ibinabalik nito ay nagpapangalan ng mga elemento nito, kaya maaari nila itong piliin | Basahin para magbasa; Baguhin ang view at gumuhit para i-save ang set-up |
| I-export ang schedule | CSV, Excel, o tab-separated text na ipi-paste sa Google Sheets (walang ipinapadala sa Google) | I-export |
| Basahin at itakda ang finish ng silid | Ang mga type ng finish, ang finish ng sahig, pader at kisame ng bawat silid, mga zone; ang mga lawak, bilang ng tile, at dami ng substrate ay nanggagaling pagkatapos sa mga finish schedule | Basahin; Baguhin ang view at gumuhit para itakda |
| Pumili ng mga elemento, i-undo ang sarili nitong mga hakbang | Ang mga elemento ay pinipili sa view; binabawi ang huling hakbang nito | Baguhin ang view at gumuhit |
| I-save | Isang bagong IFC file na may bawat pagbabago, gaya ng ginagawa ng {{ui:Save as IFC}} (hindi kailanman nababago ang orihinal) | I-save |
| I-export ang USD | Ang mga bukas na model bilang OpenUSD (.usda, .usdc, o .usdz), gaya ng isinusulat ng {{ui:USD}} sa toolbar | I-export |
| Mag-render ng larawan, patakbuhin ang render queue | Larawan ng 3D view, gaya ng ginagawa ng dialog na {{ui:Render}} gamit ang iyong mga setting ng Render maliban kung humingi ito ng iba, o mga high-quality na larawang idinagdag sa pila ng dialog at isa-isang nire-render (kailangan ng pila ang WebGPU). Walang nagbabago sa model ([Render a picture](topic:render)) | I-export |

Ang bawat pagbabagong ginagawa ng assistant ay isang hakbang sa **Mga pagbabago**, pinangalanang "Assistant: …" (halimbawa "Assistant: add 4 walls"), kaya babawiin ng {{key:Mod+Z}} ang buong aksyon nito, at makikita mo kung kanino ang hakbang. Sa window, hindi ito makapagbubukas ng file: ikaw ang nagbubukas ng model; ang model na bukas ang gagamitin nito.

## I-on ito

Naaabot ng mga assistant ang BimCraft sa pamamagitan ng CadCraft Studio sa computer mo; walang paraan papasok ang plain browser.

1. Buksan ang {{ui:Settings}} at piliin ang tab na **BimCraft**.
2. Sa ilalim ng **Assistants**, lagyan ng tsek ang **Hayaang gamitin ng AI assistant at mga script ang BimCraft**.
3. Naka-tsek na ang **Read** para sa iyo. Lagyan din ng tsek ang **Baguhin ang view at gumuhit** kung maaaring ihiwalay at itago ng assistant ang mga elemento at gumuhit, at ang **Save** kung maaari nitong i-save ang model bilang bagong file.
4. Ikonekta ang assistant sa Studio (ipinapakita ng Studio ang address at ang mga setting na ipapaste dito).

## Habang may konektadong assistant

Isang note sa itaas ng kanang panel ang nagsasabi kung aling assistant ang konektado at kung ano ang kaya nitong gawin. I-click ang {{ui:Disconnect}} para agad na tapusin ang session nito; kailangan nitong kumonekta muli para magpatuloy.

**Aktibidad**, sa ilalim ng **Assistants** sa Settings, ay naglilista ng bawat tawag na ginawa ng assistant, pinakabago muna, kasama kung nagtagumpay ito.

:::tip
Magtanong sa payak na mga salita, halimbawa "ihiwalay ang mga panlabas na pader sa Level 1", "aling mga pinto ang walang fire rating?", o "gumuhit ng 6 by 4 metrong silid sa Level 1 na may pinto sa pader sa timog". Hinahanap ng assistant ang mga elemento at ipinapakita ang mga ito sa view mo, o gumuguhit.
:::

## Walang bintana: mga script at command line

Ang parehong mga tool sa pagguhit ay gumagana sa mga IFC file sa mga folder na itinakda mo, nang walang bukas na window: ang MCP server at command line ng CadCraft ay maaaring magsimula ng bagong gusali o magbukas ng IFC file, ilarawan ito, magdagdag ng pader, pinto, bintana, sahig, level at grid, i-undo ito, at i-save bilang bagong `.ifc` file. Ikaw ang nagpapasya kung aling mga folder ang maaari nitong gamitin at kung maaari nitong baguhin o i-save ang anuman.

## I-off ito

Alisan ng tsek ang **Hayaang gamitin ng AI assistant at mga script ang BimCraft**. Agad na madidiskonekta ang bawat assistant, at mananatili ang setting para sa susunod.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang gawa, bawat isa ay may mga tool na tinatawag nito.
- [Maghanap ng elemento ayon sa class, pangalan o property](topic:find)
- [Itago, ihiwalay, at gawing see-through ang mga elemento](topic:hide-and-isolate)
- [Mga setting ng BimCraft](topic:settings)
