---
title: "Mga classification code (Uniclass, OmniClass, UniFormat)"
summary: "Bigyan ang bawat element at type ng classification code, piliin kung aling mga sistema ang gamit ng proyekto, maghanap sa mga Uniclass table na kasama ng app, mag-load ng sariling lisensyadong table ng opisina, at ipakita ang mga code sa mga iskedyul. Isinusulat ang mga code sa IFC file para sa ibang software."
keywords: "klasipikasyon, classify, code, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, table, element code, type code, default code, IfcClassification, IfcClassificationReference, cobie, column ng iskedyul, csv, lisensya, license"
from: 222b94cd
---

## Ano ang gagawin mo

Maglagay ng classification code sa mga pader, sahig, bubong, pinto, bintana at iba pa sa model, hanggang tatlong sistema nang magkatabi: Uniclass, OmniClass at UniFormat. Umaasa ang ibang disiplina at iba pang software sa code, hindi sa pangalan, kaya ang mga code ay sine-save sa IFC file bilang classification reference na nababasa ng alinmang BIM program.

## Bigyan ng code ang isang element

1. Pumili ng element (o marami) at buksan ang **Properties**. Buksan ang seksyong {{ui:Classification}}.
2. I-type ang code sa kahon ng sistema nito at pindutin ang Enter. Kapag may nakakargang code list, i-type ang bahagi ng code o ilang salita ("curtain wall") at pumili mula sa mga tugma: awtomatikong mapupunan ang pamagat ng code.
3. Sinasabi ng {{ui:Applies to}} kung saan napupunta ang code: **Ang element na ito**, o **Ang type nito (bawat element ng type)**. Binabasa ng bawat pader ng wall type ang code nito, pati ang mga iguguhit mo pa lang.
4. Inaalis ng {{ui:Clear}} ang code.

Sa ilalim ng bawat code, sinasabi ng seksyon kung saan ito galing: itinakda sa element na ito, mula sa type nito, o ang default ng proyekto para sa klase nito. Laging nananalo ang sariling code ng element kaysa sa type nito, at ang sa type kaysa sa default. Kapag maraming element ang napili, ang kahong may nakasulat na "nag-iiba" ay nangangahulugang hindi sila iisa ang code; ang pag-type ng isa ay ibibigay ito sa lahat. Bawat pagbabago ay isang undo step.

Maaaring i-type ang code kahit may nakakargang listahan o wala. Kung hindi ito mukhang code ng sistemang iyon, o wala sa nakargang listahan, may hint na nagsasabi nito at pinananatili ang code gaya ng pagkaka-type mo.

## Piliin ang mga sistema ng proyekto

Buksan ang **Data** sa model bar at piliin ang {{ui:Classification}} (o {{ui:Project classification…}} sa seksyong Properties).

- I-tick ang mga sistemang gamit ng proyektong ito. Ipinapakita na lang ng Properties ang mga iyon.
- **Uniclass**: kasama ng app ang mga table ng Elements/ functions (EF), Systems (Ss) at Products (Pr). © NBS ang mga ito, nilisensyahan sa ilalim ng Creative Commons Attribution-NoDerivatives 4.0, at ipinapasa nang hindi binabago. Ipinapakita ng dialog ang edition ng bawat table at ang araw na binasa ito. Hindi ito ang pinakabagong table: naglalabas ang publisher ng bagong bersyon kada quarter sa sarili nilang site.
- **OmniClass** at **UniFormat**: walang code list na kasama ng app, dahil hindi pinapayagan ng publisher na ipasa ang mga table nang walang lisensya. I-type ang anumang code, o mag-load ng sariling lisensyadong table ng opisina mo.
- Binabasa ng {{ui:Load a table (CSV)…}} ang sariling table ng opisina mo mula sa CSV file na may column ng code at column ng pamagat (awtomatikong nahahanap ang header row na pinangalanang Code, Number o Identifier at Title, Name o Description; kung wala, ang unang dalawang column ang ginagamit). Nananatili ang table sa browser na ito at hindi kailanman inilalagay sa project file. Ang mga code lang na itinalaga mo ang sine-save sa file. Maaari kang mag-load ng mas bagong Uniclass table sa parehong paraan.
- Ang {{ui:Give elements a default code by their class}} ay nagbibigay sa bawat pader, sahig, bubong, pinto, bintana, hagdan, ramp, column, beam at kasangkapan ng paunang Uniclass code mula sa Elements/ functions table kapag wala pa itong sariling code. Makakakuha rin nito ang mga element na iguguhit mo pagkatapos.
- Ang {{ui:Show the codes as columns in the schedules}} ay nagdaragdag ng isang column bawat sistema sa mga iskedyul na Doors, Windows, Walls by type at Rooms, at sa kanilang CSV. Nagpapakita ng "nag-iiba" ang hanay ng ilang element kapag magkakaiba ang kanilang code.

## Mahalagang malaman

- Ang mga default code ay sariling panimulang pagpili ng CadCraft, hindi ng publisher, at hindi pa nasuri ng practitioner. Suriin ang mga ito laban sa pamantayan ng proyekto mo.
- Sa file, ang default ay tunay na classification, minarkahan ng relation name na "CadCraft default", at nawawala ito sa sandaling makakuha ng sariling code ang element o ang type nito.
- Ang mga code na mayroon na sa na-import na file ay nababasa at ipinapakita, anuman ang spelling na ginamit ng ibang program sa pangalan ng sistema. Ang mga code ng ibang sistema (sa opisina) ay nililista at hindi ginagalaw.
- Nababasa ulit ang mga code kapag binuksan muli ang file, dito man o sa ibang program. Dinadala rin ang mga ito sa IFC5 alpha (IFCX) export kapag bukas ang lab option na iyon, maliban sa code na itinakda sa bubong.
- Hindi pa nagagawa: puno para mag-browse ng table level by level, mga code sa palapag at kuwarto bilang default ng proyekto, at pagsuri ng code laban sa edition na nakasaad sa file.
