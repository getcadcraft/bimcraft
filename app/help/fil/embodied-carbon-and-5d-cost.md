---
title: Embodied carbon at mga gastos sa schedule
summary: Pagsamahin ang embodied carbon ng model mula sa bukas at maaaring i-edit na factor table, at ikalat ang mga presyo sa 4D schedule bilang kurba ng cost at cash flow. Pareho itong nagsisimula sa mga halagang tina-type mo o ina-import.
keywords: embodied carbon, carbon, co2, kgco2e, emissions, factor table, epd, 5d, cost, cash flow, s curve, cost ng schedule, presyo, presyo ng takeoff
from: 83e82840
---

## Embodied carbon

Buksan ang **Carbon** pane. Ang quantity ng bawat element (volume, area o length) ay pinaparami sa isang factor mula sa table, ayon sa life-cycle module: kailangan ang product stage, opsyonal ang transport at waste. Lumalabas ang mga kabuuan ayon sa materyal, klase at palapag, at kada metro kuwadrado ng sahig.

**Ang factor table ay sa iyo.** Ang mga row na kasama sa BimCraft ay generic na paunang halaga na tama ang order of magnitude. Hindi sila galing sa database, minarkahang hindi pa nasusuri, at kailangang palitan ng pinagkukunang ginagamit mo (isang EPD, pambansang database, o ang mga figure ng firm mo). I-edit ang mga row sa pane, o i-import at i-export ang table bilang CSV o JSON. Ang mga row na idadagdag mo ay papalit sa paunang row na may parehong id. Naka-save ang table sa model.

Ang mga element na walang katugma, o walang quantity, ay nakalista bilang Problema sa halip na bilangin bilang zero.

## Mga cost sa 4D schedule

Buksan ang **Cost** pane sa tabi ng 4D schedule. Bigyan ito ng mga presyo (i-type ang mga ito, mag-import ng CSV o JSON, o dalhin ang mga linya ng TakeoffCraft), i-map ang bawat presyo sa mga materyal ng model gamit ang mga keyword, at pepresyuhan nito ang mga element ng bawat task. Ang gastos ng task ay ikinakalat sa mga araw mula simula hanggang tapos (pantay, o mas mabigat sa unahan o sa hulihan), at iginuguhit ng pane ang kumulatibong kurba ng cash flow kada araw, linggo o buwan, kasama ang cost ayon sa stage at package, at kung ano ang nakaplano laban sa kung ano ang nagawa sa isang petsa. CSV ang output. Walang napepresyuhan hangga't hindi ka nagbibigay ng presyo: wala ni isa ang kasama.

## Currency

Maaaring sabihin ng price table kung anong currency ang mga presyo nito (tatlong letra, gaya ng USD o EUR). May kahon para dito ang 5D pane, nakaimbak ito sa file kasama ng mga presyo, at dala ito ng mga JSON export. Ang table na ginawa bago ito, o kung saan iniwan mong blangko, ay walang currency: ang gastos nito ay ipinapakita bilang USD, ang default ng shell, at sinasabi ito ng pane at ng running totals. Walang conversion ng currency na nangyayari.
