---
title: Mga finish ng silid at finish schedule
summary: Sabihin kung ano ang tumatakip sa sahig, pader at ceiling ng bawat silid, magdagdag ng mga zone gaya ng tiled na splashback, at kumuha ng finish schedule kada silid, pader at zone na may mga lawak, bilang ng tile kasama ang mga putol, at volume ng substrate.
keywords: finish, finishes, finish schedule, room finishes, floor finish, wall finish, ceiling finish, skirting, tile, tiles, cut tiles, tile count, waste, substrate, screed, backing board, plaster, zone, splashback, dado, wet area, interior, quantities
from: 8c30498c
---

## Ang gagawin mo

Sabihin nang isang beses sa BimCraft kung ano ang finish ng bawat silid. Ibinibigay ng mga finish schedule ang mga lawak, ang mga tile na oorderin at ang volume ng substrate, at nagbabago ang mga ito kasabay ng model.

## Mga hakbang

1. I-on ang {{ui:Draw}}, buksan ang **Mga iskedyul** sa kaliwang panel at i-click ang **Mga finish ng silid**.
2. Sa ilalim ng **Mga uri ng finish**, i-click ang **Magdagdag ng uri ng finish**. Bigyan ito ng pangalan, uri (Tile, Sheet, Coat o Board) at kapal. Para sa tile, ibigay ang haba at lapad ng tile, ang joint at waste allowance sa porsiyento. Kung may nasa ilalim ng finish (screed, backing board, coat ng plaster), pangalanan ito sa ilalim ng **Substrate** at ibigay ang kapal nito.
3. Sa ilalim ng **Mga silid**, piliin ang finish ng sahig, pader at ceiling ng bawat silid. I-type ang pangalan ng skirting at ang taas nito kung may ganoon ang silid.
4. Sa ilalim ng **Mga zone**, i-click ang **Magdagdag ng zone** para sa bahagi ng silid na may ibang finish:
   - ang **wall** zone ay banda sa pagitan ng dalawang taas sa itaas ng sahig (tiled na splashback mula 0 hanggang 1200, dado). Nasa bawat pader ito ng silid, o pumili ng mga pader ng silid na iyon sa model at i-click ang button na **On** para limitahan ito sa mga iyon;
   - ang **floor** o **ceiling** zone ay lugar na iti-type mo. Inaalis ito sa sariling finish ng silid.
5. I-click ang **I-save**. Isang hakbang ito sa Undo. Ina-type ang mga haba sa units ng proyekto.

## Ang mga schedule

Apat na entry ang idinudugtong sa listahan ng Mga iskedyul:

- **Mga finish kada silid**: bawat silid na may finish ng sahig, pader at ceiling, ang mga lawak nila, at ang skirting kasama ang haba nito.
- **Mga finish kada pader**: bawat bahagi ng pader sa gilid ng silid at ang banda nito na tinatakpan ng finish, kasama ang haba, gross area, bawas, net area at, para sa tile, buong tile, putol na tile at tile na oorderin.
- **Mga finish kada zone**: bawat zone kasama ang finish nito, net area, tile at volume ng substrate.
- **Quantity ng finish**: isang row kada finish: net area, buo at putol na tile, tile na oorderin, ang substrate at volume nito, at ang sariling volume ng finish.

I-group, i-total, i-save at i-export ang mga ito tulad ng anumang schedule: tingnan ang [Ayusin, i-save at i-export ang iskedyul](topic:schedule-layouts). I-click ang isang figure para piliin kung saan ito galing: ang mga bawas ng isang pader ay pumipili ng mga pinto at bintana nito.

## Paano sinusukat ang mga finish

- **Mga pader**: bawat bahagi ng pader sa gilid ng silid, ang haba nito sa kahabaan ng silid na pinarami ng taas na tinatakpan ng finish, minus ang bahagi ng bawat pinto at bintana sa loob ng taas na iyon. Ang pader na mas mababa sa silid ay tinatapos hanggang sa sarili nitong tuktok. Tinutukoy ng paraan ng pagsukat ng proyekto kung aling mga butas ang sobrang liit para bawasan ([Mga iskedyul](topic:plan-schedules-and-pdf)).
- **Sahig at ceiling**: ang loob ng silid sa loob ng mga mukha ng pader, minus ang mga isla sa loob nito.
- **Skirting**: ang haba ng pader ng silid minus ang lapad ng mga pinto nito.
- **Tile**: nakalatag bilang grid mula sa isang sulok ng surface, na may isang joint sa pagitan ng mga tile. Ang tile na buo sa surface ay buong tile; ang tile na bahagi lamang nito (sa gilid, sa paligid ng butas) ay putol na tile. Ang tile na oorderin ay buo at putol, plus ang waste allowance, bilugan pataas. Bawat putol na tile ay binibilang na bagong tile: hindi muling ginagamit ang mga tabas.
- **Volume ng substrate**: ang net area pinarami ng kapal ng substrate.
- Ang bilang na may markang **≈** ay kinukuwenta mula sa lawak sa halip na ilatag tile por tile: surface na may tinype na zone na inalis dito, o napakalaki nito.

## Magandang malaman

- Nakatago ang mga finish sa building file (property set na `CadCraft_Finishes` sa proyekto). Ang bawat silid na may finish ay tumatanggap din ng standard na IFC property set na `Pset_SpaceCoveringRequirements`, para mabasa ng ibang programa ang mga pangalan.
- Nagsisimula ang layout ng tile sa isang sulok. Hindi kinukuwenta ang layout na nakasentro sa silid, ang pattern (herringbone, brick bond) at ang muling paggamit ng mga tabas.
- Ang kurbadang pader, at ang hangganan ng silid na hindi pader (room separator), ay nakalista bilang **Other boundary** kasama ang haba nito at walang butas.
- Ang dating **Finishes** entry ay naglilista ng mga finish layer ng wall type; inililista ng **Layers: area and volume** ang bawat layer ng bawat layered type. Ang mga finish ng silid dito ay ipinapatong sa silid sa ibabaw ng mga iyon.
- Maaaring magtakda ang isang assistant ng mga finish para sa iyo gamit ang `finishes_set`: tingnan ang [Hayaang makipagtulungan ang AI assistant sa iyong model](topic:assistants).
