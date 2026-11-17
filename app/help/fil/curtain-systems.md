---
title: Curtain systems: mga salaming pader sa grid, na may mullion
summary: Iguhit ang curtain system tulad ng pader, o ilagay ito sa isang face, saka itakda ang grid lines at mullion nito. Sine-save ito bilang IfcCurtainWall na may mga pane at mullion nito.
keywords: curtain system, curtain wall, curtain grid, mullion, glazing, storefront, glass wall, panel, pane, by face, face, mass, grid line, spacing, profile, transom, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Ano ang gagawin mo

Gumawa ng salaming pader na binubuo ng mga pane sa pagitan ng mullion, baguhin kung nasaan ang grid lines nito, at piliin kung aling mga line ang may mullion.

## Mga hakbang

1. I-on ang **Draw** at buksan ang menu na **Build** (sa ribbon layout: ang tab na Architecture).
2. Piliin ang **Curtain System**. Sa row nito, itakda ang top (ang palapag sa itaas, o isang taas), isang line kada ilang distansya sa kahabaan nito, isang line kada ilang distansya paakyat (iwanang walang laman para walang line), kung may mullion ito, at ang mullion profile.
3. I-click kung saan ito nagsisimula at kung saan nagtatapos, gaya ng pag-guhit ng pader. Pinapanatili ng Shift itong parisukat.
4. Para baguhin ang grid, piliin ang **Curtain Grid** at i-click ang system:
   - **Magdagdag ng line**: may patayong line na nilalagay kung saan ka mag-click. Para sa level line, i-type muna ang taas nito sa **At**.
   - **Ilipat ang line**: i-click ang line, saka kung saan ito pupunta.
   - **Alisin ang line**: i-click ang line.
   - **Itakda ayon sa spacing**: i-type ang spacing sa **Every**, saka i-click ang system.
5. Para baguhin ang mullion, piliin ang **Mullion**, piliin kung ano ang gagalawin nito (ang patayong line na i-click mo, ang level line sa isang taas, ang border, o bawat line), piliin ang **Place mullions** o **Remove mullions** at isang profile, saka i-click ang system.
6. Pumili ng system para makita ang lahat nito sa **Properties**: bawat grid line kasama ang puwesto nito, tsek para sa mullion nito at button para alisin ito; ang spacing; ang border; ang profile; ang kapal ng pane.

## By Face

Gumagawa ang **By Face** ng curtain system sa isang flat na face na i-click mo sa 3D view. Pareho ang grid at mullion settings ng row nito.

- Gumagana ito sa anumang flat na face ng anumang element na ipinapakita ng 3D view: mass, pader, sahig, eroplano ng bubong, haligi, o nailagay na item. Maaaring patayo, nakahilig o pahiga ang face.
- Kinukuha ng system ang outline ng face. Ang gable o ibang kakaibang hugis ay pinuputol ang mga pane at mullion ayon dito.
- Maaari itong gumawa ng **pader** sa halip, sa paanan ng patayong face at kasing taas ng face. Palaging nakatayo nang patayo ang pader dito, kaya hindi makakagawa nito ang nakahilig o pahigang face.
- Hindi ito gumagawa ng bubong. Kinukuwenta ang bubong sa BimCraft mula sa outline ng palapag at pitch, hindi mula sa iisang face.
- Ang curved na face ay maraming maliliit na flat na face: isang click ay kumukuha ng isa sa mga ito.
- Ang face na may openings: sakop ng system ang panlabas na outline ng face.

## Paano ito sinusukat

- **Gross area** ay ang outline ng system.
- **Glass area** ay ang mga pane gaya ng ginawa: bawat pane ay nawawalan ng kalahating lapad ng mullion sa bawat gilid na may grid mullion, at buong lapad sa border mullion.
- Ang patayong mullion ay dumadaan mula border hanggang border. Ang level mullion ay humihinto sa bawat patayong mullion at sa border. Nasa loob ng outline ang border mullion; kapag nagtagpo ang dalawa, ang mas patayo ang dumadaan. Pinuputol nang tuwid ang mga joint, hindi naka-miter.
- Ang **Iskedyul** ay may listahang **Curtain systems** na may mga numerong ito kapag mayroon nang system ang model.

## Sa IFC file

Isang IfcCurtainWall sa palapag nito, binubuo ng isang IfcPlate (curtain panel) kada pane at isang IfcMember (mullion) kada piraso ng mullion, bawat isa ay may sariling shape, material at base quantities.

## Good to know

- Anumang laki ay nagagawa ayon sa hiling mo. Tanging outline na walang area ang tinatanggihan, dahil walang maigagawa.
- Ang system na iginuhit gaya ng pader ay nananatili sa taas na ginamit sa pagguhit. Kung ililipat mo ang palapag pagkatapos, itakda ulit ang taas nito sa Properties.
- Hindi pa naglilipat ng curtain system ang Move tool. Burahin ito at iguhit ulit, o baguhin ang grid nito sa lugar.
- Binabawi ng Undo ang bawat hakbang: ang buong system, isang pagbabago sa grid, isang pagbabago sa mullion.
