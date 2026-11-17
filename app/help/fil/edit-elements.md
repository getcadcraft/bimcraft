---
title: Burahin, i-cut, kopyahin at i-paste ang mga building element
summary: Piliin ang mga pader, pinto, muwebles o anumang iba pa sa isang IFC model; burahin, i-cut, o kopyahin at i-paste ang mga ito kung saan ka mag-click, sa mismong lugar, o sa ibang storey.
keywords: burahin, alisin, bura, cut, kopyahin, duplicate, i-paste, ilipat, piliin lahat, building element, pader, pinto, bintana, hagdan, opening, undo
from: d9eec37f
---

## Ano ang gagawin mo

Baguhin ang laman ng IFC model: alisin ang mga elementong ayaw mo, kopyahin ang isang pader o hanay ng muwebles sa ibang lugar, o ilipat ang mga elemento sa pamamagitan ng pag-cut at pag-paste. Bawat pagbabago ay isang hakbang na maaari mong i-undo, at ang pag-save ay gumagawa ng bagong file, kaya nananatiling pareho ang orihinal mo.

## Mga hakbang

1. Buksan ang isang IFC model. Tingnan ang [Buksan ang IFC model at tingnan ito sa 3D](topic:open-ifc-model).
2. Piliin ang babaguhin: mag-click sa isang elemento, pindutin nang matagal ang {{key:Mod}} o {{key:Shift}} at mag-click para pumili pa, o pindutin ang {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}) para piliin ang bawat elementong nakikita.
3. Pagkatapos:
   - **Burahin:** pindutin ang {{key:Delete}}, o {{ui:More}}, {{ui:Delete}}.
   - **Kopyahin:** pindutin ang {{key:Mod+C}} o i-click ang {{ui:Copy}}.
   - **I-cut:** pindutin ang {{key:Mod+X}}, o {{ui:More}}, {{ui:Cut}}. Mawawala ang mga elemento, at maaari mo itong i-paste.
4. Para mag-paste, pindutin ang {{key:Mod+V}} o i-click ang {{ui:Paste}}. Susunod sa pointer ang isang transparent na kahon na kasing laki ng kinopya mo, sa storey na pinili sa placing bar. Pindutin ang {{key:R}} para paikutin ito ng 90°, saka mag-click kung saan ito ilalagay. Bawat click ay naglalagay ng isa pang kopya; pindutin ang {{key:Esc}} para huminto.
5. O pindutin ang {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}): pagkatapos ng cut, babalik ang mga elemento sa eksaktong kinalalagyan nila; pagkatapos ng copy, ang kopya ay nasa mismong tabi ng mga orihinal.
6. I-click ang {{ui:Save as IFC}} para i-download ang na-edit na model.

## Ano ang kasama ng isang elemento

- **Mga part:** kasama ng hagdan ang mga flight nito, kasama ng curtain wall ang mga panel nito; anumang gawa sa mga part ay kasama ang lahat ng part nito.
- **Mga opening:** kasama ng pader ang mga opening na ginupit dito. Kapag binura ang pinto o bintana, kasama rin nitong nabubura ang opening na pinunan nito, kaya nagsasara ang pader, gaya ng nangyayari sa isang authoring program. Kapag binura ang pader na iginuhit sa BimCraft, nabubura rin ang mga pinto at bintana nito at muling nagdudugtong ang mga natirang pader. Kapag binura ang pader mula sa file na gawa sa ibang lugar, nananatili sa dati nilang puwesto ang mga pinto at bintana nito.
- **Data:** ang kopya ay may parehong type, materyales, property set at dami ng orihinal, at bagong GlobalId. Ang pagbabago ng value sa kopya pagkatapos ay hindi nakakaapekto sa orihinal.
- **Mga library item** ay nananatili ang kanilang library data; ang kopya ay nakakakuha ng susunod na bakanteng item number, at ang na-cut na item na ibinalik ay pinapanatili ang sarili nitong numero.

## Ano ang dapat mong makita

- "Binura: …" o "Na-paste: …" sa listahan ng {{ui:Changes}}. Ibinabalik ng {{key:Mod+Z}} ang huling pagbabago; ibinabalik ulit ito ng {{key:Mod+Y}}.
- Pagkatapos ng pagbura, sinasabi ng status line kung ilang part at opening ang nabura rin.
- Ang mga na-paste na elemento ay napipili, kaya maaari mo itong i-paste muli sa mismong lugar para gumawa ng hanay, o burahin ang mga ito.

## Mga dapat malaman

- Ang mga kopya ay gumagamit ng parehong geometry ng orihinal (pinapayagan ito ng IFC), kaya halos hindi lumalaki ang file.
- Ang mga elemento ng gusali ay napa-paste sa model na pinagkopyahan nila, sa parehong tab. Para magamit ang mga nakalagay na library item sa ibang model, kopyahin ang isang item sa bawat pagkakataon: tingnan ang [Kopyahin, i-paste at i-duplicate ang mga library item](topic:copy-paste).
- Hindi mabubura o makokopya ang mga storey, space, building at site. Piliin na lang ang mga elemento sa loob nito. Ang kuwartong iginuhit sa BimCraft ay nagmumula sa mga pader sa paligid nito: burahin ang isang pader para pagdugtungin ang dalawang kuwarto.
- Ang mga pader, pinto at bintanang iginuhit gamit ang sariling wall, door at window tool ng BimCraft ay hindi pa maaaring kopyahin, i-cut o i-duplicate; sasabihin ito ng status line. Iguhit silang muli. Gumagana ang {{ui:Delete}}.
- Ang {{ui:Copy}} ay naglalagay din ng mga pangalan at property ng kinopya mo sa iyong clipboard bilang teksto, para i-paste sa spreadsheet o e-mail.

## Mga karaniwang pagkakamali

- **Naka-grey ang {{ui:Delete}}.** Walang napiling elemento, o storey at space lang ang napili. Ituro ito para mabasa kung bakit.
- **Sinasabi ng paste na galing ang mga elemento sa ibang model.** Nagbukas ka ng ibang model mula nang kopyahin mo ang mga ito. Buksan muli ang unang model at kopyahin ulit doon.
- **Nasa ibang palapag ang na-paste na kopya.** Ang {{ui:Storey}} sa placing bar ang nagpapasya kung saan ito mapupunta; piliin ang storey bago mag-click.

## Kaugnay

- [Itago, i-isolate at tingnan nang nakalusot ang mga elemento](topic:hide-and-isolate)
- [Mga key at mouse](topic:keyboard#edit)
