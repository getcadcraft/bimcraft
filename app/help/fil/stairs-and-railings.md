---
title: Mga hagdan at railing
summary: Gumuhit ng tuwid, L, U at winder na hagdan na kusang nagsa-size ng kanilang riser at tread mula sa floor-to-floor na taas, may handrail at baluster, at ang stairwell na ginupit sa sahig sa itaas; gumuhit ng guardrail sa kahabaan ng deck at sa paligid ng mga opening.
keywords: spiral, round stair, hagdan, staircase, flight, riser, tread, landing, winder, L stair, U stair, switchback, handrail, guardrail, guard, railing, baluster, spindle, newel, post, stairwell, headroom, deck, balcony
from: 16e5ace4
---

## Ano ang gagawin mo

Maglagay ng hagdan sa pagitan ng mga level at railing kung saan kailangan ng mga tao. Kinakalkula ng hagdan ang sarili nitong mga hakbang mula sa taas sa pagitan ng mga level, pinananatili ang mga ito sa karaniwang limitasyon sa tirahan, naglalagay ng handrail sa mga bukas nitong gilid, at ginugupit ang stairwell nito sa sahig sa itaas.

## Gumuhit ng hagdan

1. Sa level kung saan nagsisimula ang hagdan, buksan ang {{ui:Build}} at piliin ang {{ui:Stair}}.
2. Piliin ang uri — **Tuwid**, **L na may landing**, **U na may landing** o **L na may winder** — kung saang direksyon ito **lumiliko**, ang **lapad** nito, at kung saan ilalagay ang mga **handrail** nito.
3. I-click kung saan nagsisimula ang hagdan: ang gitna ng harap na gilid ng pinakamababang hakbang.
4. Ilipat ang pointer sa direksyong paakyat ng hagdan; susunod dito ang mga hakbang, kasama ang bilang ng mga riser at tread. Dumidikit ito sa mga pader at sa mga hakbang na 15°; pindutin nang matagal ang {{key:Shift}} para manatiling parisukat.
5. I-click. Ang {{key:Esc}} ay nagsisimulang muli.

## Gumuhit ng spiral na hagdan

1. Buksan ang {{ui:Build}}, piliin ang {{ui:Stair}}, at pagkatapos ay piliin ang **Spiral** bilang uri.
2. Itakda ang **Liko**, kung saang direksyon ito iikot paakyat (ang kaliwa ay pakaliwa).
3. I-click ang gitna ng post nito.
4. I-click ang direksyong itinuturo ng pinakamababang tread.

Nagsisimula ito sa lapad na 30" (ang tread, mula sa post hanggang sa labas), na may post na 4½". Kinakalkula ang mga riser mula sa floor-to-floor na taas, hanggang 9½" bawat isa bilang default. Ang mga tread ay 7½" ang lalim sa walk line, 12" palabas mula sa post. Tumatakbo ang handrail sa labas.

Sa **Mga property**, nagdaragdag ang spiral na hagdan ng **Gitnang post**, ang diyametro nito. Ang field na **Tread** ay sinusukat sa walk line. Ang mga check nito ay may label na default para sa spiral na hagdan: 26" na malinaw na lapad, hindi bababa sa 6¾" na tread sa walk line, riser na hanggang 9½" at handrail na 34"–38". Hindi ito engineering; ang building official ang nagpapasya.

## Paano kinakalkula ang mga hakbang

Ang taas sa pagitan ng sahig ng level at ng level sa itaas nito ay hinahati sa pantay na riser na hindi lalampas sa 7¾", at ang bawat tread ay 10" ang lalim (parehong puwedeng baguhin sa **Mga property**). Ang landing ay binibilang bilang isang hakbang; ang winder ay tatlong hakbang na nakahilera sa paligid ng panloob na sulok. Kapag binago ang taas ng level, muling kinakalkula ang bawat hagdan dito.

:::warning
7¾" na riser, 10" na tread, 36" na lapad, 6'-8" na headroom at 34"–38" na handrail ay mga naka-label na default ayon sa karaniwang residential code, hindi engineering. Sinasabi ng **Mga property** kung alin ang natutugunan; ang building official ang nagpapasya kung ano ang naaangkop.
:::

## Baguhin ang hagdan

Piliin ito (i-click sa plano o sa 3D view) at baguhin sa **Mga property**: ang uri at liko nito, lapad, pinakamataas na riser, lalim ng tread, handrail at taas nito, at ang **Gupitin ang sahig sa itaas** para sa stairwell. Nakasulat sa ibaba ang mga riser at tread na nakuha nito.

## Ang stairwell

Kapag may sahig ang level sa itaas, ginugupit ito ng hagdan kung saan ang mga hakbang ay magkakaroon ng mas mababa sa 6'-8" na headroom. Gumagalaw ang gupit kasama ng hagdan at nawawala kapag nabura ang hagdan.

## Gumuhit ng railing

1. Buksan ang {{ui:Build}} at piliin ang {{ui:Railing}}.
2. Piliin ang **Guardrail** (36" ang taas) o **Handrail** at ang taas nito.
3. I-click sa kahabaan ng gilid — ng deck, balkonahe, sa paligid ng stairwell — at i-double-click o pindutin ang {{key:Enter}} para tapusin.

Ang mga railing ay nagkakaroon ng post sa mga dulo at sulok, at baluster na may puwang na mas mababa sa 4". Pumili ng isa para baguhin ang uri, taas o gaano kalayo sa itaas ng sahig ito magsisimula.

## Gumuhit ng bakod

Piliin ang **Bakod** sa parehong Railing tool, itakda ang taas nito (1800 mm bilang panimula), i-click sa linya ng bakod, at pindutin ang {{key:Enter}}.

- Ang bakod ay may post sa bawat dulo at sulok, at may post sa bawat 2.4 m sa pagitan ng mga ito. Ang panel fence ay may panel sa pagitan ng mga post; ang rail fence ay may dalawang rail. Ang mga sukat na ito ay karaniwang pagpili, hindi kinakailangan ng code: nililimitahan ng lokal na patakaran ang taas ng bakod.
- Ito ay isang elemento sa model (isang IfcRailing na pinangalanang Fence) na may property set na {{ui:CadCraft_Fence}}: style, taas, post, panel, rail, gate, haba at lawak ng panel. Isang hakbang ng undo.
- Hindi iginuguhit dito: gate (ang generator sa CivilCraft ang naglalatag nito), mga picket, terrain (nakatayo ang bakod sa level), at ang pagpili ng iisang post.

## Ang naka-save

Ang hagdan ay naka-save bilang IFC stair na binubuo ng stair flight (kasama ang mga riser, tread, taas ng riser at haba ng tread), landing, winder at handrail; ang stairwell ay opening sa floor slab sa itaas. Ang railing ay IFC railing na may haba at bilang ng baluster at post.
