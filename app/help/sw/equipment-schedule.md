---
title: Tengeneza jedwali la vifaa na uhamishe CSV
summary: Geuza lebo za vitu kwenye mchoro wa huduma za chakula kuwa jedwali la vifaa, chuja, ruka hadi kila kitu kwenye karatasi yake, kisha upakue kama CSV.
keywords: vifaa, jedwali, huduma ya chakula, jikoni, lebo za vitu, kcl, sifa, bom, orodha ya vifaa, csv, lahajedwali, hamisha, utoaji wa data
from: e3faa1c8
---

## Utakachofanya

Soma orodha ya vifaa kutoka kwenye mchoro wa jikoni au wa huduma za chakula, ikague, pata kila kitu kwenye mpango, kisha upakue kama faili ya lahajedwali.

Hii inafanya kazi kwenye michoro ambayo lebo zake za vifaa hubeba data zao kama sifa za bloku, kama maktaba za usanifu wa jikoni kama KCL: kila lebo ina nambari ya kitu (`KCL-ITEM`), kiasi, kundi, mtengenezaji, modeli, data ya umeme na mabomba, na maelezo. Michoro mingine haina kichupo cha {{ui:Equipment}}.

## Hatua

1. Fungua mchoro, ikiwezekana kutoka folda ya mradi wake ili michoro iliyounganishwa nao ipakie pia.
2. Bofya kichupo cha {{ui:Equipment}} juu ya mchoro. Lebo yake inaonyesha vitu vingapi viko kwenye karatasi, kwa mfano "Vifaa (88)".
3. Soma jedwali: **Kitu**, **Kiasi**, **Kifaa**, **Mtengenezaji**, **Modeli**, **Umeme**, **Mabomba** na **Mahali**.
4. Chagua kinachoorodheshwa kwenye menyu iliyo juu ya jedwali: **Kila karatasi**, karatasi moja, **Si kwenye karatasi yoyote**, au **Kila kitu kilichowekwa lebo kwenye mchoro**. Kila chaguo linaonyesha hesabu yake.
5. Andika kwenye kisanduku cha kuchuja ("Chuja: kundi, mtengenezaji, modeli…") ili kupunguza orodha, kwa mfano `refrigerator` au `208`.
6. Bofya jina la karatasi la kitu kwenye safu ya **Mahali**.
7. Angalia mchoro: BimCraft hubadilisha hadi karatasi hiyo, hukuza kitu na kuchora duara kukizunguka. Mstari wa hali unasema "Kitu *n*, *kundi* kimezungushwa kwenye *karatasi*."
8. Bofya {{ui:Equipment}} kurudi kwenye jedwali.
9. Bofya {{ui:Download CSV}}.

## Unachopaswa kuona

- Faili yenye jina "*jina la mchoro* equipment.csv" (pamoja na jina la karatasi kwenye mabano ukiorodhesha karatasi moja) kwenye folda yako ya vipakuliwa. Hufunguka kwenye Excel, Numbers, LibreOffice au Google Sheets.
- Mstari wa hali: "Imepakuliwa *jina la faili* (vitu *n*)."

CSV ina safu hizi: Kitu, Kiasi, Kundi, Mtengenezaji, Modeli, Umeme, Mabomba, Maelezo, Maelezo ya umeme, Maelezo ya mabomba, Karatasi, Imewekwa (idadi ya lebo). Inapakua mistari ile tu inayoonyeshwa kwenye jedwali, baada ya menyu na kichujio.

## Jedwali linavyojengwa

- Linasomwa kutoka kwenye **lebo zenyewe**, si kutoka jedwali la ratiba lililochorwa kwenye karatasi. Dokezo lililo juu ya jedwali linasema lebo ngapi zilisomwa.
- Mstari mmoja ni nambari moja ya kitu yenye seti moja ya data. Kiasi chake ni **jumla** ya lebo zake, kama ratiba iliyochapishwa inavyohesabu: rafu zilizowekwa lebo "5" mahali pamoja na "3" mahali pengine ni 8, zinaonyeshwa kama "5 + 3".
- **Mahali** inaorodhesha karatasi zinazoonyesha kila kitu, zikihesabiwa kutoka kwa kile madirisha ya mtazamo ya kila karatasi yanaonyesha, ambacho ndicho kinachochapishwa. "Modeli pekee" maana yake hakuna karatasi inayokionyesha.
- **Nambari imetumika mara mbili** inaweka alama kwenye nambari moja ya kitu kwenye vifaa viwili tofauti. Mstari huo una alama ya kaharabu.
- Lebo ambazo hakuna karatasi inayozionyesha zinawekwa kando chini ya **Si kwenye karatasi yoyote**. Mara nyingi ni mabaki ya mipango ya awali au ya kazi nyingine, na hazichanganywi kamwe kwenye **Kila karatasi**.
- **Umeme** inaonyesha amps, kW, HP, volts, phase, muunganisho na plagi kama zilivyowekwa lebo. **Mabomba** inaonyesha ukubwa wa miunganisho: CW maji baridi, HW maji moto, DD mfereji wa moja kwa moja, ID mfereji usio wa moja kwa moja, na gesi. Sehemu nyingine za lebo hazionyeshwi bado.

## Makosa ya kawaida

- **Hakuna kichupo cha {{ui:Equipment}}.** Mchoro hauna lebo za `KCL-ITEM`, au vifaa vyake vimechorwa bila data. Hakuna cha kusoma.
- **Hesabu zinatofautiana na ratiba iliyochapishwa.** Ratiba iliyochapishwa inaweza kuorodhesha nambari za ziada au kutumia majina mafupi kuliko lebo. Amini lebo kwa kile kilichowekwa; kagua tofauti na mbunifu.
- **Kufungua CSV kunaonyesha herufi za ajabu.** Faili ni UTF-8. Ifungue kwa amri ya kuingiza ya lahajedwali lako na uchague UTF-8 programu ikiuliza.
- **Seli inaanza na apostrofi.** Thamani zinazoanza na `=`, `+`, `-` au `@` hupata `'` mbele ili lahajedwali zisizitekeleze kama fomula.
- **{{key:F}} na {{key:P}} hazifanyi kitu.** Zinafanya kazi kwenye mchoro, si kwenye jedwali. Bofya kichupo cha karatasi kwanza.
