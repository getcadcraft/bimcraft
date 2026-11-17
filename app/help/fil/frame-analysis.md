---
title: I-analyze ang structural frame
summary: Mga puwersa, reaksyon at deflection ng mga beam, column at brace ng model sa ilalim ng mga load case at combination na itinakda mo, nakatago sa IFC. Pantulong sa analysis, hindi code check.
keywords: analysis, units, feet and inches, display unit, structural analysis, design checks, utilisation, rolled, welded, AISC 360, EN 1993-1-1, frame analysis, analytical model, stiffness method, loads, load case, combination, dead load, live load, self weight, own weight, reactions, bending moment, shear, axial force, deflection, deflected shape, supports, pinned, fixed, release, report, pdf, csv, craftscript, frame3d, beams, columns, members
from: b93b58c4
---

Hinahanap ng tab na {{ui:Analysis}} sa kanan ang mga puwersa sa mga beam, column at brace ng bukas na model, ang mga reaksyon sa paanan ng column, at kung gaano kabaluktot ang mga member, para sa mga load na ibibigay mo.

:::warning
Ito ay **pantulong sa analysis, hindi code check**. Walang design code na ginagamit ang analysis: hindi nito sinusukat ang mga member o chine-check ang capacity, at hindi nito pinipili ang mga load factor. Sinusuri ng engineer ang analytical model, ang mga load at suporta nito, at nagpapasya kung ano ang ibig sabihin ng mga numero. Ang bloke na {{ui:Design checks}} sa ibaba nito ay nagche-check ng rolled steel I-shape ayon sa AISC 360 o EN 1993-1-1, pantulong lang hanggang masuri ito ng isang engineer: tingnan ang [Design checks](topic:frame-analysis#design-checks).
:::

## Patakbuhin ito

1. Magbukas ng IFC model at ang tab na {{ui:Analysis}}.
2. Pumili ng isa o higit pang beam, column o brace sa view, pumili ng {{ui:Case}}, {{ui:Load}} at {{ui:Direction}}, i-type ang halaga at pindutin ang {{ui:Add load}}: kN/m para sa load na nakakalat sa kahabaan ng member, kN para sa point load.
3. Pindutin ang {{ui:Run analysis}}.

Inililista ng talahanayan ang pinakamalaking axial force, shear, bending moment, torsion at deflection ng bawat member; i-click ang pangalan ng member para piliin ito sa view. Sa ibaba ang mga reaksyon. Iginuguhit ng {{ui:On the model}} ang deflected shape, o ang isang aksyon bilang diagram sa tabi ng bawat member. Nagiging luma ang mga resulta kapag nagbago ang model: patakbuhin muli.

Ang bawat load at setting ay isang pagbabago sa listahang {{ui:Changes}}: binabawi ito ng {{ui:Undo}}, at pinananatili ito sa file ng {{ui:Save as IFC}} (ang property set ng proyekto na `CadCraft_Analysis`), kaya sa susunod na buksan ang model dito, nandoon pa rin ang mga load nito.

## Paano ginagawa ang analytical model

- Bawat IfcBeam, IfcColumn at IfcMember na ang hugis ay iisang tuwid na extrusion ay nagiging member sa centroid line ng seksyon nito. Galing sa profile ang mga property ng seksyon nito: I, U, L at T na hugis, rectangle at tube, circle at round tube, o anumang saradong outline (kung gayon ay tantiya ang torsion constant, sinasabi ito sa ulat). Ang anumang iba pa ay hindi isinasama at binibilang.
- Sa model, humihinto ang mga beam sa mukha ng column at nakaupo sa ilalim ng sahig. Ang bawat dulo ng member ay dinadala sa sarili nitong linya papunta sa axis ng member na kinakabitan nito, kapag malapit ang axis (sa loob ng laki ng mga seksyon, humigit-kumulang), at hinahati doon ang member. Sinasabi ng ulat kung ilang dulo ang gumalaw.
- **Ang paanan ng column** na walang nasa ilalim ay mga suporta: fixed (ang simula) o pinned (hawak sa lugar at laban sa pag-ikot, malayang umikot).
- **Ang mga dulo ng beam** ay rigid o pinned ayon sa rule na {{ui:Beam ends with no connection}}; ang **brace** (IfcMember) ay pinned sa magkabilang dulo. Pumili ng isang member para bigyan ang mga dulo nito, o ang paanan ng column, ng sarili nitong rule.
- Mga materyal ayon sa pangalan: concrete (E = 30 GPa), timber (E = 11 GPa), kung hindi, steel (E = 200 GPa).

Kung makagalaw ang frame nang hindi nababaluktot ang anuman — isang mechanism — hihinto ang run at sasabihin kung saan at aling direksyon.

## Mga case, combination, sign at ulat

Nagsisimula ang analysis sa **Dead** (sariling timbang), **Live** at **Dead + live**; magdagdag ng mga case at combination gamit ang mga factor na hinihingi ng iyong design code. Ang N > 0 ay tension; ang My > 0 ay naglalagay ng local −z side ng member sa tension (ang beam na lumulubog sa gravity ay may My > 0). Ang {{ui:Report (PDF)}} at {{ui:Report (CSV)}} ay naglalaman ng mga assumption, seksyon, case, reaksyon kasama ang kanilang kabuuan, member force, displacement at envelope. Ang {{ui:Export as CraftScript}} ay sumusulat ng frame para sa Script workspace ng PartCraft, kung saan nilulutas ito ng library function na `frame3d` sa nababasang code.

Ang paraan ay ang direct stiffness method, linear at first order maliban kung lagyan mo ng tsek ang Second order (P-Delta), at sinusuri laban sa mga textbook na kaso.

**Second order (P-Delta).** Lagyan ng tsek ang *Second order (P-Delta)* sa tabi ng Run: muling nilulutas ang bawat combination gamit ang axial force ng mga member na kumikilos sa deflected frame (bawat member ay hinahati sa 4 na piraso, kaya nabibilang din ang pagbaluktot ng member sa pagitan ng mga dulo nito), hanggang sa tumigil sa pagbabago ang axial force. Ibinibigay ng result line ang bilang ng pass at kung gaano lumaki ang sway; ginagamit ng mga moment, deflection, design check at ulat ang mga resultang ito. Sa itaas ng elastic critical load ng frame, hihinto ang run at sasabihin ito. Elastic ito na may maliliit na rotation, flexural lang, walang stiffness reduction o notional load (hindi mismong AISC direct analysis method); ang slab, pader at rigid floor ay nananatiling first order.

**Floor pressure sa slab.** Para sa concrete slab (binabasa ng analysis ang slab bilang plate kapag concrete ang materyal nito), may {{ui:Pressure on every slab}} ang Loads block: i-type ang kN/m², piliin ang case sa itaas at pindutin ang {{ui:Add to slabs}}. Ipinamamahagi ito sa bawat slab na nahanap ng analysis, pababa, at nakalista na may link na Remove. Iisang pressure ito para sa lahat ng slab, hindi isa-isa, at hindi ito code load: i-type ang halagang ibinigay ng iyong engineer.

**Natural frequencies (finite elements).** Hinahanap ng block na {{ui:Finite elements: natural frequencies}} sa ilalim ng mga resulta ang pinakamababang mode ng parehong model gamit ang finite element engine: mga beam kasama ang kanilang end release, slab at pader bilang flat na four-node shell, rigid floor, suporta. Piliin kung ilang mode (3, 6, 10 o 20) at ang slab element (ang four-node shell para sa makapal o manipis na slab, o ang thin-slab na isa) at pindutin ang {{ui:Find the frequencies}}. Ibinibigay ng talahanayan ang frequency ng bawat mode sa Hz, ang period nito sa segundo at ang effective modal mass nito sa X, Y at Z bilang bahagi ng masang maaaring gumalaw; iginuguhit ng {{ui:Show on the model}} ang anumang mode sa paraang iginuguhit ang deflected shape. Ang mass ay material density na pinarami ng volume: hindi nagdadagdag ng mass ang mga load, at walang mass ang materyal na walang density. Dala ng ulat (PDF, CSV) ang talahanayan. Elastic at maliit na galaw lang ito, at walang seismic o wind load na nagagawa mula sa code dito. Hindi ito code check; sinusuri ng iyong engineer ang mga resulta.

**Response spectrum, time history at pushover.** Tatlo pang block ang nasa ilalim ng mga frequency, gamit ang parehong finite element model. Ang mass para sa lahat ng ito ay material density kasama ang mga downward load ng mga case na tinsekan mo, na bawat isa ay pinarami ng factor na i-type mo (halimbawa, Dead sa 1 at Live sa bahaging ibibilang mo bilang mass).

{{ui:Response spectrum}} ay binabasa ang bawat mode mula sa spectrum na ibibigay mo (isang talahanayan ng period at acceleration, o ang ASCE 7 shape mula sa SDS, SD1 at TL; kinokopya ng button na {{ui:Use the Seismic block values}} ang mga iyon mula sa Seismic block) at pinagsasama ang mga mode sa pamamagitan ng CQC, SRSS, ten percent rule o absolute sum, saka pinagsasama ang X, Y at Z na direksyon (100 % + 30 % o SRSS). Ibinibigay nito ang base shear, storey drift, end force ng member at talahanayan ng mode na nagbababala kapag ang mga mode na ginamit ay may dalang mas mababa sa 90 % ng mass. Maaari mong i-scale ang mga resulta ayon sa factor o hanggang sa base shear na itatype mo; hindi kailanman kinukuwenta ng block ang base shear na iyon mismo. Walang sign ang mga resulta.

{{ui:Time history}} ay nagpapatakbo ng ground acceleration sa pamamagitan ng modal superposition (eksakto para sa tuwid na linya ng record sa pagitan ng mga punto) o sa direct integration (Newmark average acceleration na may Rayleigh damping). Ang input ay gawa-gawang sine o pulse (laging may label na synthetic), record na idinikit mo, o text file na binubuksan mo (oras at acceleration, isang acceleration bawat linya na may step, o file na tulad ng PEER na may DT= header; sa g o m/s²). Ibinibigay nito ang roof displacement at base shear laban sa oras, ang drift ng bawat level, at ang envelope ng member end force. Ang mga model na may napakahabang record ay itinatago ang record para sa session lang.

{{ui:Pushover}} ay itinutulak ang bubong patagilid sa maliliit na hakbang (pattern na tulad ng unang mode, o uniform), na may plastic hinge sa mga dulo ng member na may I shape. Nagbubunga ang hinge sa plastic moment, na bumababa habang tumataas ang axial force (kinukuwenta mula sa iginuhit na hugis, hindi isinasaalang-alang ang fillet); opsyonal ang hardening, opsyonal ang P-delta, at maaaring ilapat muna ang gravity combination. Ibinibigay nito ang capacity curve (base shear laban sa roof displacement), ang unang hinge, at ang estado at plastic rotation ng bawat hinge. {{ui:Run the nonlinear time history}} ay pinapatakbo ang parehong hinge sa ilalim ng record ng Time history block sa maliliit na model. Nabubuo ang mga hinge sa mga dulo ng member lang (maglagay ng node kung saan dapat mabuo ang hinge sa loob ng span); ang member na na-release sa magkabilang dulo ay walang hinge; hindi namomodelo ang pagbunga at buckling ng brace; nananatiling elastic ang slab at pader; walang acceptance criteria na ibinibigay. Hindi ito code check; sinusuri ng iyong engineer ang mga resulta. Sine-save kasama ng model ang mga setting, at dala ng ulat ang mga talahanayan.

Hindi pa nagagawa: buckling, missing-mass correction para sa response spectrum, record scaling, acceptance criteria para sa hinge (nandito na ang dynamic response, sa itaas), area load maliban sa iisang pressure sa bawat slab, member offset, tension-only brace, pader at slab sa frame, at design code check ng welded shape at ng seksyong iba sa rolled I-shape. Tingnan ang [Hindi pa nagagawa](topic:not-built-yet).

## Mga unit

Sinusunod ng mga haba ang unit na pipiliin mo sa toolbar ({{ui:Units}}), gaya ng iba pa sa BimCraft: ang mga posisyon ng load na tinitype at nakikita mo ({{ui:From}}, {{ui:To}}, {{ui:At}}), ang mga punto ng node load at reaksyon, ang taas ng sahig sa {{ui:Seismic}}, at ang mga column ng deflection at drift (ipinapakita ng feet at inches ang maliliit na haba bilang decimal na inches). Baguhin ang unit anumang oras; muling iguguhit ang tab. Nananatili sa kN at kN·m ang mga force, at nananatili sa millimetre ang ulat (PDF, CSV) at ang file ng CraftScript, na may nakasulat na unit. Nananatili sa millimetre ang laki ng seksyon, diameter ng bar at cover sa block na {{ui:Concrete}}, gaya ng pagkakapangalan sa mga ito.

## Design checks

Kumukuha ang block na {{ui:Design checks}} (kapareho ng sa DetailCraft) ng {{ui:Design code}}, ASCE 7 + AISC 360 o EN 1990 + EN 1993-1-1, at isang {{ui:Steel grade}}. Bigyan ang bawat load case ng uri nito (dead, live, wind …) at isusulat ng {{ui:Make combinations}} ang mga load combination ng code mula sa iyong mga case; pagkatapos, papatakbuhin ito ng analysis gaya ng anumang combination.

Pagkatapos, chine-check ng {{ui:Check members}} ang bawat **rolled steel I-shape** gamit ang mga check ng DetailCraft (tension, compression na may buckling, bending na may lateral-torsional buckling, shear, bending na may axial force, deflection; nasa ulat ang mga clause) at ipinapakita kung gaano kalaki ang nagagamit nitong capacity, may kulay sa model. Pantulong ito **hanggang masuri ito ng isang engineer**.

**Aling mga member ang chine-check.** Hindi sinasabi ng IFC profile kung rolled o welded ang steel I-shape, kaya tinatawag ng BimCraft na rolled lang ito kapag ang pangalan ng profile (o kung wala, ang type name ng element) ay sukat mula sa AISC W o S table o sa EN 10365 IPE, HEA o HEB table (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **at** ang depth, lapad, web at flange sa file ay tumutugma sa sukat na iyon sa loob ng 1 %. Ang bawat ibang I-shape (plate girder, sukat na may ibang pangalan, sukat na na-edit) ay itinuturing na welded at lalabas na **hindi chine-check**, gayundin ang tube, angle, channel at iba pang seksyon, slender na bahagi at torsion. Suriin ang mga member na iyon kasama ng engineer.
