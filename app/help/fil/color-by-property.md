---
title: Kulayan ang mga element ayon sa property
summary: Kulayan ang bawat element ayon sa value ng isang property, gaya ng class, type, storey, materyal, fire rating o cost, basahin ang legend, i-click ang isang value para ipakita lang ang mga element na iyon, at i-save ang mga kulay bilang scheme na magagamit sa ibang model.
keywords: color, colour, color by, legend, smart view, appearance, property, type, material, fire rating, filter, isolate, theme, values, scheme, color scheme, save colors, reuse, team, json, swatch, kulay, property, scheme
from: f081d343
---

## Ano ang gagawin mo

Makita agad kung paano kalat ang isang property sa buong model: aling mga pader ang external, aling materyal ang ginagamit saan, aling element ang walang fire rating. Bawat element ay kumukuha ng kulay ng value nito, at sinasabi ng legend kung ano ang ibig sabihin ng bawat kulay at ilang element ang meron nito.

## Mga hakbang

1. Magbukas ng IFC model.
2. I-click ang {{ui:Color}} tab sa kanan.
3. Pumili ng property sa listahan. Ang mga nauuna ay para sa bawat element ({{ui:Class}}, {{ui:Type}}, {{ui:Storey}}, {{ui:Material}}, {{ui:Name}}…); ang iba ay galing sa property set at quantity set ng model, sa ilalim ng pangalan ng set. Ang numero sa tabi ng bawat isa ay kung ilang element ang meron nito.
4. Basahin ang legend: isang kulay, ang value, at kung ilang element ang meron nito.
5. I-click ang isang value para ipakita lang ang mga element na iyon. Pindutin nang matagal ang {{key:Mod}} at i-click para magdagdag pa ng mga value. Pindutin ang {{key:Shift+H}} para ipakita ulit ang lahat.
6. I-click ang {{ui:Off}} para bumalik sa sariling kulay ng model.

## Ano ang dapat makita

- Hanggang pitong value ang may sariling kulay, ang pinakakaraniwang value ang nauuna. Kapag mas marami pa, iisang gray ang gagamitin nila at nakalista bilang **other values**.
- Ang numerong maraming magkakaibang value ay hinahati sa anim na pantay na range, mula sa magaan (mababa) hanggang sa madilim (mataas).
- Ang mga element na walang property ay maputlang gray, nakalista bilang **No value**, para tumingkad ang mga may kulay.
- Nagbabago ang mga kulay sa Paper at Model, at nananatili habang ine-edit ang model.
- Ang property ng isang type ay para sa bawat element ng type na iyon; kapag may sariling value ang isang element para sa parehong property, ang sarili nitong value ang nananaig.

## Baguhin ang mga kulay at itago bilang scheme

- I-click ang swatch ng isang value sa legend para pumili ng ibang kulay. Agad na muling kinukulayan ang model.
- Dina-download ng {{ui:Save scheme}} ang mga kulay bilang maliit na `.json` file na pinangalanan ayon sa property, halimbawa `Class colors.json`.
- Sa ibang model, o sa computer ng kasamahan, i-click ang {{ui:Open scheme…}} at piliin ang file na iyon. Bawat value sa scheme ay makakakuha ng kulay nito, kaya pareho ang kulay ng parehong fire rating o system sa bawat model.
- Ang value na wala sa scheme ay pininturahan ng gray at nakalista bilang "not in the scheme"; ang mga value sa scheme na wala sa model na ito ay nananatiling nakalista na may 0, para makita mo ang buong scheme.
- Pinananatili ng scheme ang mga kulay nito sa parehong theme. Kapag pumili ng property sa listahan, magsisimula ulit ito sa mga awtomatikong kulay.

## Mga karaniwang pagkakamali

- **"This model has no … values".** Na-save ang scheme para sa property na wala sa model na ito (halimbawa, ibang pangalan ng property set). Magbukas ng scheme na ginawa para sa ganitong uri ng model, o pumili ng property sa listahan.

- **Wala sa listahan ang isang property.** Walang element na may hugis sa model ang may ganitong property. Hindi nakalista ang mga property ng mismong storey at space.
- **Iisa ang kulay ng lahat.** Iisa ang value ng bawat element, o wala talaga: tingnan ang bilang sa legend.

## Susunod

- [Itago, i-isolate at gawing transparent ang mga element](topic:hide-and-isolate)
- [Maghanap ng daan gamit ang model tree](topic:model-tree)
