---
title: Pag-frame ng mga pader, sahig at bubong
summary: Gumawa ng stud, plate, header, joist, rafter o truss mula sa model at panatilihin ang mga ito kasama nito; muling ginagawa ang mga ito kapag nagbago ang mga pader, bukas, sahig o bubong, at ang iskedyul na Lumber ang cut list.
keywords: TJI, I-joist, joist span table, load a table, framing, frame, stud, studs, plate, top plate, header, king stud, jack stud, trimmer, cripple, sill, blocking, corner, California corner, tee, joist, rim joist, band joist, trimmer, rafter, hip rafter, valley rafter, jack rafter, ridge board, ceiling joist, collar tie, truss, lumber, cut list, board feet, 2x4, 2x6, spacing, on center
from: 76d0ffb5
---

## Ano ang gagawin mo

I-frame ang gusali mula sa iginuhit mo. Inilalatag ng BimCraft ang mga stud, plate at header sa mga pader, ang mga joist sa mga sahig at ang mga rafter (o truss) sa bubong, sinusukat ang mga ito ayon sa mga markadong default na talahanayan, pinananatili ang mga ito kasama ng model, at muling ginagawa tuwing nagbabago ang kanilang sinusuportahan. Ang iskedyul na **Lumber** ang cut list.

## I-frame ito

1. Sa isang level, buksan ang {{ui:Build}} at piliin ang {{ui:Framing}}.
2. Piliin ang **spacing** (16" o 24" on center; 400 o 600 mm), ang **corners** (three-stud o California), ang **Rafters** o **Trusses** para sa mga bubong, at kung ang mga pader ay makakakuha ng hanay ng **blocking** sa kalagitnaan ng taas. Para sa mga sahig, piliin ang **Sawn lumber** o **TJI (preliminary)** at itakda ang direksyon ng joist sa automatic, plan X o plan Y.
3. I-click ang **I-frame ang bawat pader**, o i-click ang isang pader, sahig, o bubong (sa level kung saan nakapatong ang bubong) para i-frame lang iyon.

I-off ang **Ipakita ang framing** para itago ang bawat framing piece, gaya ng layer; ang **Makita sa loob** ay nagtatago sa mga pader, sahig at bubong na naka-frame para makita mo ang framing lang.

## Ano ang makukuha mo

- **Mga pader**: ilalim na plate (pinutol sa mga pinto), dobleng top plate, mga stud sa layout mula sa simula ng pader, king at jack stud at header sa bawat pinto at bintana, cripple sa itaas ng mga header at sa ilalim ng mga bintana, rough sill sa ilalim ng mga bintana, mga sulok kung saan nagtatagpo ang mga pader (ang pader na dumadaan ay kumukuha ng mga corner stud), dalawang backer stud kung saan may pader na tee-in, at blocking sa pagitan ng mga stud.
- **Mga sahig**: joist na nakahalang sa maikling direksyon ng sahig bilang default, o sa pinili mong plan axis; rim joist sa paligid ng gilid, at dobleng trimmer at header sa paligid ng stairwell, kung saan pinuputol nang maikli ang mga joist na dumadaan dito (tail joist). Pinipili ng TJI mode ang pinakamaliit na nakalistang series at depth na aabot sa sinukat na clear span sa napiling spacing.
- **Mga bubong**: common rafter na parisukat sa bawat eave, jack rafter kung saan pinuputol sila ng hip at valley, hip at valley rafter, ridge board, ceiling joist sa mga plate at collar tie — o simpleng truss sa spacing, isang piraso bawat isa.

## Baguhin ito

Pumili ng anumang framing piece sa 3D view o sa model tree. Ipinapakita ng **Properties** ang framing nito: baguhin ang spacing, ang uri at direksyon ng floor joist, ang mga sulok, ang blocking o ang framing ng bubong. Ang paggalaw ng mga pader, pinto at bintana, o pagbabago ng sahig o bubong, ay muling gagawin ang framing nang kusa.

Para mapanatili ang piyesang inilagay mo nang sinasadya kapag muling ginawa ang framing, piliin ito at piliin ang **Panatilihin ang piyesang ito kapag muling ginawa ang framing**. Nananatili ang nakapanatiling piyesa sa kinalalagyan nito; kapag nagbago ang framing sa paligid nito, minamarkahan ito para masuri mo.

## Mga TJI floor mula sa table na iyong i-load

Walang dalang span table ng joist maker ang BimCraft (kanila ang mga ito, at nagbabago kada edition). Piliin ang framing ng isang sahig, itakda ang **Floor joists** sa **TJI (preliminary)**, at piliin ang **Load a table…** sa **Properties**: isang file sa format na `cadcraft-tji-table`, JSON o CSV, na ginawa mo mula sa kasalukuyang span table ng maker. Pinangalanan nito ang maker, ang product at edition, at kung saan galing ang mga numero, at nililista para sa bawat load case (live load, dead load, deflection limit, bearing length) ang pinakamalaking clear span ng bawat series at depth sa bawat spacing.

- Kinukuha ng BimCraft ang **clear span** ng sahig, pumipili ng pinakamababaw na depth, at sa loob nito ang series na ang nakalistang span ay umaabot dito para sa spacing at load case na pinili mo, at ini-frame ang sahig gamit ito. Kung nasa labas ng table ang span o spacing, sasabihin nito at walang babaguhin.
- Ang mga load, deflection limit, bearing length, ang table at ang pangungusap na "Preliminary layout guidance; final selection needs the manufacturer's tables and the project loads" ay nakaprint sa iskedyul na Lumber, nakasulat sa model kasama ng framing, at nakalista sa panel na **Problema** bilang tala. Ang table na minarkahang halimbawa ay sinasabi ito sa isang babala.
- Kapag naka-on ang add-on na **Building regulations**, binabasa rin ng floor-joist rule nito ang na-load na table; kapag walang table, hindi isinasama ang mga TJI joist sa check na iyon, gaya ng dati.
- Nananatili ang table sa browser na ito hanggang burahin mo ito o mag-load ng iba. Ang file: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; o `metric`: mm, metres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) at `rows` (`series`, `depth`, `spans`: para sa bawat case id, ang spacing at ang pinakamalaking clear span, gaya ng `"16": "15-6"`). Sa CSV, ang parehong impormasyon ay nasa mga linyang `# key = value`, saka `series,depth,case,spacing,span`.
- Kapag walang na-load na table, tinatanggihan ang TJI layout at walang nagbabago: **Mag-load ng TJI table: ang mga table ng manufacturer ay kanila at hindi nakabuild-in sa BimCraft.** Ang model na na-frame gamit ang mas lumang built-in na TJI table (bago ang pagbabagong ito) ay pinananatili ang bawat joist nito; sinasabi ng Properties at Problema na kailangan ang table, at maaaring i-frame muli ang sahig kapag may na-load ka na. Gumagana pa rin gaya ng dati ang solid-sawn joist.

Gabay lang ito sa layout. Kailangan ng pinal na pagpili ng joist ang mga table ng maker, ang mga load ng proyekto, at ang engineer.

## Ang cut list

Sa panel na Schedules, piliin ang **Lumber**: bawat framing piece na pinagpangkat ayon sa laki at ayon sa stock length na bibilhin mo (buong 2' na haba mula 8'; mga hakbang na 600 mm mula sa 2400 sa millimetre), kasama ang bilang ng mga piyesa at ang board feet. Dina-download ng **CSV** ang listahan.

:::warning
Ang laki ng header, joist, rafter at ceiling joist ay galing sa mga markadong default na talahanayan para sa karaniwang isa o dalawang palapag na bahay, hindi engineering. Sinasabi ng **Properties** kapag lampas na sa talahanayan nito ang span o isang bukas. Sinusuri ng designer o engineer ang mga span, load at koneksyon.

Ang TJI layout ay gumagamit lamang ng table na iyong i-load, na ginawa mo mula sa kasalukuyang span table ng maker; wala kasamang anuman ang BimCraft. Hindi sinusuri ng mungkahi ang bearing, point load, cantilever, butas, stairwell header o koneksyon, at schematic lang ang I shape ng model.
:::

## Ano ang naka-save

Bawat na-frame na pader, sahig o bubong ay isang IFC element assembly ("Framing") ng mga IFC member (stud, plate, rafter, collar tie, blocking, truss) at beam (header, joist, rim, ridge board), bawat isa ay may sariling laki, haba at board feet.
