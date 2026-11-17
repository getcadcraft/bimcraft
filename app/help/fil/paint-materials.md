---
title: Ipinta ang materyal sa mga pader, sahig at bubong
summary: Bigyan ang mga elemento ng materyal gaya ng brick, siding, shingles, kahoy o tile, sa buong elemento o sa isang gilid, na sine-save sa IFC at ipinapakita sa mga rendered na larawan.
keywords: paint, material, materials, finish, finishes, texture, brick, siding, shingles, roofing, kahoy, bato, tile, concrete, stucco, damo, graba, salamin, metal, gilid ng pader, loob, labas, floor finish, silid, surface style
from: fbfed676
---

{{ui:Paint}} sa toolbar ay nagbubukas ng library ng materyal sa ibabaw ng 3D view: brick at block, siding, roofing, kahoy, bato, tile, concrete, stucco, lupa, salamin at metal.

## Magpinta ng mga elemento

1. I-click ang {{ui:Paint}}.
2. I-click ang isang materyal.
3. I-click ang mga elemento sa 3D view. Bawat click ay nagpipinta sa elementong na-click mo.

Para magpinta ng marami nang sabay, piliin muna sila (click, {{key:Ctrl}}+click, o isang [paghahanap](topic:find)), pagkatapos i-click ang materyal: bawat piniling elemento ay kukuha nito sa isang hakbang lang.

Agad ipinapakita ng elemento ang kulay ng materyal sa 3D view. Lumalabas ang texture nito sa isang [rendered na larawan](topic:render). Tinatapos ng {{key:Esc}} o {{ui:Close}} ang pagpipinta.

## Magpinta ng isang gilid

Piliin ang {{ui:Only the side clicked}}, pagkatapos i-click ang gilid na gusto mo: ang labas ng pader sa siding at ang loob nito sa ibang finish, o ang itaas ng sahig sa kahoy habang nananatili ang ilalim nito. Nananatili sa materyal nito ang natitira sa elemento.

Natutukoy ang gilid mula sa sariling direksyon ng elemento, kaya nananatili itong parehong gilid kapag inilipat o pinihit mo ang elemento.

Para magpinta ng sahig silid-por-silid, bigyan ang bawat silid ng sarili nitong sahig ({{ui:Draw}} › {{ui:Floor}} › **Silid na ito**, tingnan ang [Mga silid, sahig, kisame at bubong](topic:floors-and-roofs)), pagkatapos ipinta ang itaas ng bawat sahig.

## Alisin ang materyal

I-click ang may guhit na swatch ({{ui:No material}}), pagkatapos i-click ang elemento. Mawawala ang bawat materyal dito, kasama ang mga gilid.

## Sa file

Nagbabago ang IFC kapag nagpinta ka (isang hakbang bawat isa, binabawi ito ng {{key:Ctrl+Z}}) at nananatiling plain IFC:

- bawat napinturahang elemento ay nakakakuha ng property set na `CadCraft_Render` na nagpapangalan sa materyal nito, at isang property para sa bawat napinturahang gilid;
- ang katawan nito ay nakakakuha ng surface style na may kulay ng materyal, para ipakita ng ibang BIM program ang kulay. Sa IFC4, pinapangalanan din ng style ang texture.

Kapag inayos ng BimCraft ang pader na pinintahan mo (halimbawa, binago mo ang dulo nito), nananatili sa pader ang materyal at kulay nito, sa BimCraft, sa mga larawan at sa ibang program.

:::note
Iginuguhit mismo ng BimCraft ang mga texture: gumagana ang mga ito offline at libre gamitin para sa kahit anong layunin (CC0). Hindi pa available ang sarili mong image texture.
:::

## Mga texture sa 3D view

Ipinapakita ng napinturahang brick na pader ang mga brick nito, at ng kahoy na sahig ang mga tabla nito, sa totoong laki, sa sandaling mailagay ang pintura. Alisan ng tik ang **Ipakita ang mga texture sa 3D view** sa Paint palette para makita ang flat na kulay (awtomatiko itong pinapatay ng napakalaking model at sinasabi nito iyon). Palaging ipinapakita ng Kulay ayon sa property ang sarili nitong mga kulay. Iginuguhit ng programa ang mga texture, kaya walang dina-download, at dala ng mga render at ng glTF file ang mga ito sa alinmang paraan.
