---
title: Type pack: magbahagi ng wall type bilang bukas na file
summary: I-save ang mga wall type kasama ang kanilang layer, materyal, tag at classification code, at mga family, bilang isang bukas na file (simpleng JSON o IFC), at idagdag ang mga ito sa ibang project. Mababasa rin ang mga wall type ng isang IFC file mula sa ibang program.
keywords: type pack, types, wall type, ibahagi, export, import, library, bukas na format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materyal, layer, template, office standard, families
from: e4c91331
---

## Ang gagawin mo

Dalhin ang iyong wall type mula sa isang project papunta sa iba, o ibigay ang mga ito sa taong nagtatrabaho sa ibang program. Naglalaman ang type pack ng bawat wall type kasama ang mga layer, kapal, materyal, core, cavity, layer priority, level of development, takeoff data at classification code, at anumang family na idaragdag mo. Bukas na file ito: simpleng JSON text na mababasa ng sinuman, o IFC file. Walang nakatali rito sa isang firm, bansa o account.

## I-save ang mga type mula sa project

1. Buksan ang **Data** sa model bar at piliin ang {{ui:Type packs}}.
2. Sa ilalim ng {{ui:Save types from this project}}, lagyan ng tsek ang mga wall type na isasama. Naka-tsek ang sariling type ng project; maaaring idagdag ang starter type at papasok ito bilang kopya. Lagyan ng tsek ang family kung gusto mong isama ang mga ito.
3. I-type ang {{ui:Pack name}}.
4. Ang {{ui:Save as a pack (.json)}} ay nagda-download ng `.cctypes.json` file. Ang {{ui:Save as IFC (.ifc)}} ay nagda-download ng IFC file na may mga type lamang: bawat wall type bilang IfcWallType kasama ang material layer set, mga materyal at classification nito, para sa anumang BIM program.

## Magdagdag ng type sa project

1. Sa parehong dialog, piliin ang {{ui:Open a pack or an IFC file…}} at pumili ng `.json` pack o `.ifc` file.
2. Inililista ng dialog ang laman ng file: bawat wall type kasama ang kapal nito, bilang ng layer at mga code, ang mga materyal at ang mga family.
3. Piliin kung ano ang mangyayari sa {{ui:A type this project already has}}: **Panatilihin ang sa project**, **Idagdag ang sa pack bilang kopya** (bibigyan ng bagong pangalan na nagtatapos sa "(2)"), o **Palitan (kapag walang pader na gumagamit nito lamang)**.
4. {{ui:Add to the project}}. Inililista ng dialog kung ano ang naidagdag, nakopya, napalitan o napanatili. Isang undo step ito.

Nasa listahan ng type ng Wall tool kaagad ang mga bagong type.

## Floor, roof at ceiling type

Kasama rin sa listahan ng mga type na ise-save ang floor, roof at ceiling type ng project at ang kanilang starter (may markang Floor, Roof, Ceiling). Kayang dalhin ng isang pack ang lahat ng apat na uri; pinangangalanan ng bawat type ang IFC class nito (IfcWallType, IfcSlabType, IfcCoveringType). Ang floor, roof o ceiling type na ginagamit ng mga element ay hindi pinapalitan mula sa pack: baguhin ito sa type editor.

## Isang type bilang Library item

Lagyan ng tsek ang eksaktong isang type at piliin ang **I-save bilang Library item…**. Nagse-save ito ng `.cctype.json` file: isang Library item ng uri na Types na naglalaman ng isang type na iyon (ang mga layer, materyal, LOD at classification code nito). I-upload ito sa Library para maibahagi. Binabasa rin ng **Magbukas ng pack o IFC file** ang ganitong item at idinadagdag ang type nito sa project tulad ng pack.

## Mabuting malaman

- Maaari ring buksan dito ang IFC file mula sa ibang program. Binabasa ang bawat wall type nito na may material layer: ang pangalan, mga materyal at kapal ng layer, at anumang cavity ay sarili ng file. Hinuhulaan kung aling layer ang core at ang gawain ng bawat layer (finish, structure, insulation), minarkahan ang type bilang **(guessed)**, at dapat itong suriin sa wall type editor. Iniiwan ang wall type na walang layer at pinapangalanan.
- Nananatili ang materyal na mayroon na ang project gaya ng dati. Ang bagong materyal na may pangalang nagamit na ay nagkakaroon ng "(pack)" pagkatapos ng pangalan nito.
- Hindi kailanman pinapalitan mula sa pack ang type na ginagamit ng mga pader. Baguhin ito sa wall type editor, na tamang gumagalaw sa mga pader nito.
- Hindi naglalakbay ang code na itinakda sa isang pader: pag-aari iyon ng pader na iyon. Naglalakbay ang code na itinakda sa type.
- Tinatanggihan ang file na may field na wala sa format, layer na kulang ang materyal, o anumang hindi plain text, at sinasabi ng mensahe kung saan at bakit.
- Hindi pa nabubuo: floor, roof at ceiling type (wala silang type sa bersyong ito: bawat isa ay may sariling kapal), door at window type maliban sa family, at hatch o kulay mula sa file ng ibang program.
