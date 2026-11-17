---
title: Magsimula ng bagong building
summary: Gumawa ng blangkong building model na may mga level nito, gumuhit ng mga pader, maglagay ng item mula sa library, at i-save ito bilang IFC.
keywords: bago, bagong building, blangko, walang laman, magsimula mula sa wala, template, levels, palapag, sahig, gawin, model
from: 68786865
---

## Ano ang gagawin mo

Magsimula ng building model mula sa wala sa halip na magbukas ng isa. Gumagawa ang BimCraft ng blangkong IFC model na may project, site, building at mga level nito. Maaari kang maglagay ng equipment at furniture sa mga level mula sa library at i-save ito bilang IFC file.

:::note
Maaari nang iguhit ang mga pader: tingnan ang [Gumuhit ng mga pader](topic:draw-walls). Susunod na gagawin ang mga pinto, bintana, sahig at bubong.
:::

## Mga hakbang

1. I-click ang {{ui:Bagong building}} sa ilalim ng **Magbukas ng file o folder**, o sa start page.
2. I-type ang **Pangalan ng building**.
3. Piliin kung ilang **Levels** ang mayroon ito (1 hanggang 200).
4. I-type ang **Level height**, mula sahig hanggang sahig: halimbawa `10'-0"`, `10'6"` o `3000 mm`. Ang plain na numero ay feet sa US, at millimeters sa ibang lugar.
5. Puno na ang bawat field, kaya puwede mo itong iwan gaya ng mga ito. Sa ilalim nila, sinasabi ng kahon kung ano ang sisimulan mo: ang mga unit, ang **Wall type** na unang gagawin ng Wall tool (pumili ng iba sa listahan kung gusto mo), at ang unang sheet.
6. I-click ang {{ui:Gawin}}. Nakasalansan ang mga level mula 0, bawat isa ay isang level height sa itaas ng nauna, at pinangalanang Level 1, Level 2 at iba pa. Lumalabas ang mga ito sa model tree, at bumubukas ang plan ng Level 1 sa tabi ng 3D view na naka-on ang {{ui:Draw}}.
7. Iguhit ang mga pader: i-click ang {{ui:Pader}} at dalawang punto. Tingnan ang [Gumuhit ng mga pader](topic:draw-walls). Palitan ang pangalan ng mga level o baguhin ang taas nila sa **Levels** panel.
8. Maglagay ng item: tingnan ang [Maglagay ng equipment at furniture mula sa library](topic:place-from-library). Nakalista sa placing bar ang bawat level.
9. I-click ang {{ui:I-save bilang IFC}}. Ang file ay pinangalanan ayon sa building, halimbawa `Smith's house.ifc`.

## Mahalagang malaman

- Naka-save ang model sa millimeters, bilang IFC4. Nabubuksan ito ng ibang BIM program.
- Kasama sa bagong building ang isang sheet, **A-101**, na may plan ng pinakamababang level: A3 sa 1:100 kapag metric ang units, o Tabloid sa 1/8" = 1'-0" kung hindi. Walang laman ito hanggang sa unang pader, at saka ipapakita ang plan habang gumuguhit ka. Buksan ito sa ilalim ng **Sheets** sa project browser para baguhin ang papel, scale o title nito, magdagdag ng view, o burahin ito. Ang building na nagsimula sa template ay magdadala ng sheets ng template.
- Para baguhin kung ano ang sinisimulan ng bawat bagong building (ang wall type para sa metric na project, ang mga level, ang unang sheet, ang tool na aktibo pagkatapos ng Create), tingnan ang [Default Policies](topic:default-policies).
- Walang kailangang i-set up bago ang unang pader. Maaaring baguhin ang wall type, taas ng mga level, units at sheet anumang oras.
- Ang **Mga palapag** sa kaliwang panel ay naglilista lamang ng mga level na may laman; nakalista naman lahat sa model tree.
- Hangga't hindi mo ito sine-save, bilang unsaved work ang bagong building. Nagtatanong ang BimCraft bago ka magbukas ng ibang file o umalis, at nagtatago ng kopya sa browser na ito kung sakaling magsara ang tab.
