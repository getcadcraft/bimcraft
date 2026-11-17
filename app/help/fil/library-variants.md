---
title: Ilagay at palitan ang library item na may variant
summary: May ilang library item na may iba't ibang laki o opsyon. Piliin ang variant bago ilagay, tingnan kung aling variant ang isang nakalagay na item, palitan ito ng ibang variant sa isang click, at panatilihin ito kapag na-update ang item.
keywords: variant, variants, laki, opsyon, configuration, library, librarycraft, ilagay, palitan, configurator, family, type, update, ports
from: c05f0af3
---

## Ano ang gagawin mo

Ilagay ang library item sa laki o opsyon na kailangan mo, at magbago ng isip mamaya nang hindi ito inilalagay muli. Ang item na may variant ay iisang item sa library (isang pangalan, isang license, isang version) na may talaan ng mga variant nito: halimbawa, isang mounting plate sa Small, Medium at Large, o ang parehong plate na walang butas.

## Piliin ang variant at ilagay ito

1. Buksan ang tab na {{ui:Library}} at i-click ang card ng item.
2. Sa ilalim ng pangalan, inililista ng pagpili na {{ui:Variant}} ang bawat variant kasama ang laki nito. Ang default ng item ang unang napipili.
3. Pumili ng isa. Susunod sa plano, sa laki at sa 3D body row ang pinili mo.
4. I-click ang {{ui:Ilagay sa plan}} (o {{ui:Ilagay sa model}} sa 3D view) at ilagay ito gaya ng anumang item: tingnan ang [Ilagay ang kagamitan at furniture mula sa library](topic:place-from-library).

Ang nakalagay na elemento ay pinangalanan ayon sa item at variant nito, halimbawa *Mounting plate — Large*, para magkaiba sila sa {{ui:Equipment}} schedule at sa tree. Bawat variant ay sarili nitong IFC type: kapag inilagay mo ang parehong variant nang dalawang beses, iisang type ang ibinabahagi nila; ang ibang variant ay may sariling type.

## Tingnan kung aling variant ang nakalagay na item

Piliin ang elemento. Sa {{ui:Properties}}, may linyang **Variant** ang kahon na **Library item**. Itinatago ito ng IFC sa `CadCraft_LibraryItem`: `Variant` (id ng variant), `VariantName` at `VariantValues` (ang mga value ng opsyon, bilang text), para mabasa ito ng ibang program.

## Palitan sa ibang variant

1. Piliin ang nakalagay na item at i-click ang {{ui:Palitan ang item…}} sa kahon na **Library item**. Bubukas ang tab na {{ui:Library}}.
2. Sa itaas, nakalista sa **Other variants of** *ang item* ang bawat variant kasama ang laki nito. Minamarkahan ang nakalagay at hindi ito maaaring piliin.
3. I-click ang {{ui:Palitan sa …}} sa variant na gusto mo.

Pinananatili ng elemento ang lugar, turn, palapag, item number, quantity at notes nito; nagbabago ang type, hugis at data nito sa ibang variant. Ibinabalik ng {{key:Mod+Z}} ang nauna. Maaari ka pa ring pumili ng ibang item mula sa listahan sa ibaba, gaya ng dati: tingnan ang [Palitan ang nakalagay na item, at i-update ang mga item mula sa library](topic:swap-and-update-library-items).

## Copy, paste at mga update

- Ang kopya ng nakalagay na variant ay parehong variant: sa model na ito, at sa ibang model na nakabukas sa parehong browser tab, sa pamamagitan ng Copy at Paste.
- **Mga update** ay pinananatili ang variant: kung may variant pa rin ang mas bagong version ng item, ang placement ay magiging variant na iyon ng bagong version. Kung wala na ito sa bagong version, ang placement ay kukuha ng default variant ng item.

## Mabuting malaman

- Ilang library item lang ang may variant. Hindi ito sinasabi ng mga card; makikita mo ang pagpili na {{ui:Variant}} kapag binuksan mo ang isa.
- Maaaring maglista ang item ng **ports** (mga connection point para sa tubo at duct) bawat variant. Ipinapakita ng tab ng Library kung ilan ang mayroon ang variant. Hindi pa sila nasusulat sa IFC kapag inilagay mo ang item mula sa tab ng Library.
- Ang variant na walang 3D body ay inilalagay gamit ang stand-in box, gaya ng anumang 2D symbol.
- Nasa millimeters ang mga laki sa pagpili, gaya ng pagkakasulat ng library.
