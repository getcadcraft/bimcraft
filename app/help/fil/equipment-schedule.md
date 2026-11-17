---
title: Gumawa ng equipment schedule at mag-export ng CSV
summary: Gawing equipment schedule ang item tag sa foodservice drawing, i-filter ito, pumunta sa bawat item sa sheet nito, at i-download bilang CSV.
keywords: equipment, schedule, foodservice, kitchen, item tags, kcl, attributes, bom, bill of materials, csv, spreadsheet, export, pagkuha ng data
from: e3faa1c8
---

## Ang gagawin mo

Basahin ang listahan ng equipment mula sa kitchen o foodservice drawing, suriin ito, hanapin ang bawat item sa plan, at i-download ito bilang spreadsheet file.

Gumagana ito sa mga drawing na may dalang data ang equipment tag bilang block attribute, gaya ng mga kitchen-design library tulad ng KCL: bawat tag ay may item number (`KCL-ITEM`), quantity, kategorya, manufacturer, model, electrical at plumbing data, at remarks. Ang ibang drawing ay walang tab na {{ui:Equipment}}.

## Mga hakbang

1. Buksan ang drawing, mas mainam mula sa project folder nito para mag-load din ang mga naka-link na drawing.
2. I-click ang tab na {{ui:Equipment}} sa itaas ng drawing. Ipinapakita ng label nito kung ilang item ang nasa mga sheet, halimbawa "Equipment (88)".
3. Basahin ang schedule: **Item**, **Qty**, **Equipment**, **Manufacturer**, **Model**, **Electrical**, **Plumbing** at **Saan**.
4. Piliin kung ano ang ililista sa menu sa itaas ng table: **Bawat sheet**, isang sheet, **Wala sa anumang sheet**, o **Lahat ng may tag sa drawing**. Ipinapakita ng bawat pagpipilian ang bilang nito.
5. I-type sa filter box ("Filter: kategorya, maker, model…") para paliitin ang listahan, halimbawa `refrigerator` o `208`.
6. I-click ang pangalan ng sheet ng item sa column na **Saan**.
7. Tingnan ang drawing: lilipat ang BimCraft sa sheet na iyon, mag-zoom in sa item at gumuguhit ng singsing sa palibot nito. Ganito ang sinasabi ng status line: "Item *n*, *category* ay naka-ring sa *sheet*."
8. I-click ang {{ui:Equipment}} para bumalik sa schedule.
9. I-click ang {{ui:Download CSV}}.

## Ang dapat mong makita

- Isang file na ang pangalan ay "*drawing name* equipment.csv" (may pangalan ng sheet sa bracket kapag isang sheet ang inilista mo) sa downloads folder mo. Mabubuksan ito sa Excel, Numbers, LibreOffice o Google Sheets.
- Ang status line: "Na-download ang *file name* (*n* na item)."

Ang CSV ay may ganitong column: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (ilang tag). Ang idinadownload nito ay eksaktong mga row na ipinapakita ng table, pagkatapos ng menu at filter.

## Paano binubuo ang schedule

- Binabasa ito mula sa **mismong mga tag**, hindi mula sa schedule table na iginuhit sa sheet. Ipinapakita ng note sa itaas ng table kung ilang tag ang nabasa.
- Isang row ay isang item number na may isang set ng data. Ang quantity nito ay ang **kabuuan** ng mga tag nito, gaya ng pagbilang ng nakalimbag na schedule: ang shelving na may tag na "5" sa isang lugar at "3" sa iba ay 8, ipinapakitang "5 + 3".
- Inililista ng **Saan** ang mga sheet na nagpapakita ng bawat item, batay sa ipinapakita ng viewport ng bawat sheet, na siyang nakaprint. Ang "Model only" ay nangangahulugang walang sheet na nagpapakita nito.
- Minamarkahan ng **Number used twice** ang isang item number na nasa dalawang magkaibang kagamitan. May amber mark ang row.
- Ang mga tag na walang sheet na nagpapakita ay inilalagay sa hiwalay na **Not on any sheet**. Madalas ay labi ito ng naunang plano o ibang proyekto, at hindi kailanman hinahalo sa **Bawat sheet**.
- Ipinapakita ng **Electrical** ang amps, kW, HP, volts, phase, connection at plug ayon sa nakatag. Ipinapakita ng **Plumbing** ang laki ng connection: CW cold water, HW hot water, DD direct drain, ID indirect drain, at gas. Hindi pa ipinapakita ang ibang field ng tag.

## Mga karaniwang pagkakamali

- **Walang tab na {{ui:Equipment}}.** Walang `KCL-ITEM` tag ang drawing, o iginuhit ang equipment nang walang data. Walang mababasa.
- **Iba ang bilang sa nakalimbag na schedule.** Maaaring may kasamang spare number ang nakalimbag na schedule, o mas maikli ang pangalan kaysa sa tag. Pagkatiwalaan ang mga tag para sa kung ano ang nakalagay; suriin ang pagkakaiba sa designer.
- **Kakaibang character ang lumalabas kapag binuksan ang CSV.** UTF-8 ang file. Buksan ito gamit ang import command ng spreadsheet mo at piliin ang UTF-8 kung magtanong ang programa.
- **Nagsisimula ang cell sa apostrophe.** Ang mga value na nagsisimula sa `=`, `+`, `-` o `@` ay binibigyan ng nangungunang `'` para hindi ito patakbuhin ng spreadsheet bilang formula.
- **Walang nangyayari sa {{key:F}} at {{key:P}}.** Gumagana ang mga ito sa drawing, hindi sa schedule. I-click muna ang tab ng sheet.
