---
title: Hayaang magtrabaho ang AI assistant sa model mo
summary: I-on ang assistants sa Mga setting para mahanap ng assistant sa computer mo ang mga element, mabasa ang kanilang property, ihiwalay ang mga ito sa view at mag-draw ng pader, pinto, bintana, sahig, level at grid, sa pamamagitan ng CadCraft Studio. Naka-off hanggang i-on mo ito.
keywords: ai, assistant, mcp, script, automation, studio, hanapin ang element, ihiwalay, properties, permissions, i-disconnect, activity, mag-draw ng pader, magdagdag ng pinto, magdagdag ng bintana, level, grid, sahig, i-undo, i-save, command line, cli, headless, gamitin sa AI assistants
from: 66d72742
---

## Ano ang matututunan mo

Paano payagan ang AI assistant (kahit anong assistant na nagsasalita ng MCP) na tingnan ang IFC model na bukas sa iyo at mag-draw dito, ano ang kaya at hindi kaya nitong gawin, at paano ito patigilin.

## Ano ang magagawa ng assistant sa BimCraft

| Humihiling ng | Ano ang mangyayari | Kailangan |
|---|---|---|
| Hanapin ang mga element | Makakakuha ito ng listahan ng mga element ayon sa class, storey, pangalan o halaga ng property, gaya ng ginagawa ng **Hanapin** | Basahin |
| Basahin ang mga property | Makakakuha ito ng mga attribute, type, property set at quantity ng isang element, gaya ng ipinapakita ng **Properties** | Basahin |
| Ilarawan ang model, ilista ang mga pader | Makakakuha ito ng mga level, pader, pinto, bintana, silid, sahig, grid at column, at ang mga dulo, type at taas ng bawat pader | Basahin |
| I-isolate, gawing see-through, itago o ipakita | Magbabago ang 3D view na parang ginamit mo ang menu na {{ui:Show}} | Baguhin ang view at mag-draw |
| Mag-draw ng pader, pinto, bintana, sahig, level o grid line | Magbabago ang model na parang ginamit mo ang mga tool na {{ui:Draw}}: magdudugtong ang mga pader, susunod ang mga silid, sahig at bubong | Baguhin ang view at mag-draw |
| Palitan ang pangalan o halaga ng property | Ang Name, Description, Object type o Tag ng isang element, o isang halaga ng property. Ang halagang ibinabahagi nito sa ibang element ay kokopyahin muna para dito; ang halagang para sa type nito ay babaguhin lang kapag sinabi ng assistant, dahil susunod ang bawat element ng type na iyon | Baguhin ang view at mag-draw |
| Ilipat, burahin, baguhin ang mga pader, pinto at bintana | Gumagalaw o nabubura ang mga element kasama ng mga host nila; ang mga pader na ginawa gamit ang mga tool na {{ui:Draw}} ay nagbabago sa mga dulo o type nila, ang mga pinto at bintana sa lugar, sukat o type nila, at susunod ang mga silid at join | Baguhin ang view at mag-draw |
| Mag-set up, mag-ayos at magbasa ng schedule | "Iskedyul ng pinto ayon sa palapag, may fire rating at ironmongery": pinapangalanan ng assistant ang schedule, ang mga column nito (ang property o tag ay nagiging column) at ang grouping nito; pupunuin ito ng BimCraft mula sa model at ilalatag, at ang hindi binanggit ng assistant ay kukunin sa office standard. Idudugtong ang set-up sa listahan mo ng Schedules. Pinapangalanan ng bawat linyang ibinabalik nito ang mga element nito, para mapili ito ng assistant | Basahin para magbasa; Baguhin ang view at mag-draw para i-save ang set-up |
| I-export ang schedule | CSV, Excel, o tab-separated text na ipi-paste sa Google Sheets (walang ipinapadala sa Google) | I-export |
| Basahin at itakda ang mga finish ng silid | Ang mga finish type, ang floor, wall at ceiling finish ng bawat silid, mga zone; ang mga area, bilang ng tile at volume ng substrate ay manggagaling sa mga finish schedule | Basahin; Baguhin ang view at mag-draw para itakda |
| Pumili ng mga element, i-undo ang sarili nitong hakbang | Ang mga element ay pinipili sa view; ang huling hakbang nito ay binabawi | Baguhin ang view at mag-draw |
| I-save | Bagong IFC file na may bawat pagbabago, gaya ng ginagawa ng {{ui:Save as IFC}} (hindi kailanman nababago ang orihinal) | I-save |
| I-export ang USD | Ang mga bukas na model bilang OpenUSD (.usda, .usdc o .usdz), gaya ng isinusulat ng {{ui:USD}} sa toolbar | I-export |
| I-render ang larawan, patakbuhin ang render queue | Larawan ng 3D view, gaya ng ginagawa ng dialog na {{ui:Render}} gamit ang Render settings mo, maliban kung humiling ito ng iba; o mga high-quality na larawang idinagdag sa queue ng dialog at isa-isang nire-render (kailangan ng queue ang WebGPU). Walang nagbabago sa model ([I-render ang larawan](topic:render)) | I-export |

Ang bawat pagbabagong gawin ng assistant ay isang hakbang sa **Mga pagbabago**, na may pangalang "Assistant: …" (halimbawa "Assistant: add 4 walls"), kaya babawiin ng {{key:Mod+Z}} ang buong aksyon nito, at makikita mo kung kanino ang hakbang. Sa bintana nito, hindi ito makakabukas ng mga file: ikaw ang magbubukas ng model; gagana ito sa nakabukas.

## I-on ito

Kumokonekta ang mga assistant sa BimCraft sa pamamagitan ng CadCraft Studio sa computer mo; walang paraan ang plain browser papasok.

1. Buksan ang {{ui:Settings}} at piliin ang tab na **BimCraft**.
2. Sa ilalim ng **Assistants**, lagyan ng tsek ang **Payagan ang AI assistants at scripts na gamitin ang BimCraft**.
3. Naka-tsek na ang **Basahin** para sa iyo. Lagyan din ng tsek ang **Baguhin ang view at mag-draw** kung puwedeng i-isolate at itago ng assistant ang mga element at mag-draw, at ang **I-save** kung puwede nitong i-save ang model bilang bagong file.
4. Ikonekta ang assistant sa Studio (ipinapakita ng Studio ang address at ang mga setting na ipi-paste sa assistant).

## Habang nakakonekta ang assistant

Ang note sa itaas ng right panel ay nagsasabi kung aling assistant ang nakakonekta at kung ano ang kaya nito. I-click ang {{ui:Disconnect}} para agad tapusin ang session nito; kailangan nitong kumonekta muli para magpatuloy.

**Activity**, sa ilalim ng **Assistants** sa Settings, ay naglilista ng bawat tawag na ginawa ng assistant, pinakabago muna, kasama kung nagtagumpay ito.

:::tip
Magtanong sa simpleng salita, halimbawa "ihiwalay ang mga panlabas na pader sa Level 1", "aling mga pinto ang walang fire rating?" o "gumuhit ng 6 by 4 metrong silid sa Level 1 na may pinto sa south wall". Hahanapin ng assistant ang mga element at ipapakita ang mga ito sa view mo, o iguguhit ang mga ito.
:::

## Walang window: scripts at command line

Gumagana rin ang parehong drawing tool sa mga IFC file sa mga folder na tinukoy mo, nang walang nakabukas na window: kayang magsimula ng bagong gusali o magbukas ng IFC file ang MCP server at command line ng CadCraft, ilarawan ito, magdagdag ng pader, pinto, bintana, sahig, level at grid, mag-undo, at i-save ito bilang bagong `.ifc` file. Apat pang tool ang angkop sa scripts: ang `ifc_batch` ay nagpapatakbo ng hanggang 200 hakbang sa pag-edit bilang isa (lahat o wala: binabawi ng isang undo ang buong batch, at ang hakbang na tinanggihan ay nag-uundo ng iba at pinapangalanan ang hakbang); ang `ifc_describe` ay naglilista ng mga level at bawat pader kasama ang mga pinto at bintana nito; ang `ifc_render_png` ay nagsusulat ng flat-shaded na checking picture ng model (walang materials, textures o shadows) nang walang window; ang `usd_export` ay nagsusulat ng `.usda`, `.usdc` o `.usdz`. Sa command line, pinapatakbo ng `cadcraft bim script.json --from model.ifc -o out.ifc` ang script ng mga hakbang, at ang `--usd`, `--png` at `--plan` ay nagsusulat ng USD file, larawan o plano mula sa parehong takbo. Ikaw ang nagpapasya kung aling mga folder ang puwede nitong gamitin at kung puwede nitong baguhin o i-save ang anuman.

## I-off ito

Alisin ang tsek sa **Payagan ang AI assistants at scripts na gamitin ang BimCraft**. Agad na madidiskonekta ang bawat assistant, at mananatili ang setting para sa susunod na pagkakataon.

## Tingnan din

- [Mga recipe para sa AI assistants](common:assistants-recipes): mga halimbawang may kasamang tool na tinatawag ng bawat isa.
- [Hanapin ang mga element ayon sa class, pangalan o property](topic:find)
- [Itago, ihiwalay at gawing see-through ang mga element](topic:hide-and-isolate)
- [Mga setting ng BimCraft](topic:settings)
