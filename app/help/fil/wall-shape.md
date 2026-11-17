---
title: Hubugin ang pader: ikabit, profile, hilig at mga opening
summary: Ikabit ang tuktok ng pader sa bubong, sahig o kisame, bigyan ito ng sarili nitong outline sa elevation, ikiling ito, o maghiwa ng opening na walang pinto o bintana, sa Properties, sa elevation o section, sa sariling face view nito o sa 3D; bawat isa ay isang undo step.
keywords: attach, attach top, attach base, bubong, slab, kisame, gable, profile, edit profile, elevation outline, stepped, parapet, slant, slanted, lean, tilt, tapered, double slant, opening, wall opening, butas, pass-through, walang pinto, grips, elevation, section, 3D, face view, curved wall, copy
from: f558b269
---

## Ano ang gagawin mo

Baguhin ang hugis ng pader sa itaas at sa ibaba ng plan nito: ang tuktok nito ay maaaring sumunod sa bubong, slab ng sahig o kisame, maaari itong magkaroon ng sariling outline na nakikita mula sa gilid, maaari itong ikiling, at maaari itong magkaroon ng mga opening na walang pinto o bintana. Nananatili ang plan ng pader, ang mga sulok nito at ang location line nito gaya ng dati.

## Saan mo ito magagawa

- **Properties**: kapag naka-on ang {{ui:Draw}} at {{ui:Select}}, i-click ang isang pader na iginuhit mo. Ipinapakita ng **Properties** ang mga row ng pader, pagkatapos ang **Hugis**, kung saan lahat ay tina-type.
- **Elevation o section**: binubuksan ng lapis ng project browser ({{ui:Edit in this view}}) ang view; pumili ng pader doon at i-drag ang mga grip nito. Tingnan ang "Sa elevation o section" sa ibaba.
- **Sariling face view ng pader**: {{ui:Walls}} › {{ui:Edit profile}}, pagkatapos i-click ang pader sa plan. Gumagana ito sa anumang pader, pati sa pader na hindi tuwid na tinitingnan ng anumang elevation, at sa kurbadong pader (ipinapakitang nakabuka).
- **Plan at 3D view**: ang apat na command sa {{ui:Walls}} (grupong Edit): {{ui:Attach top / base}}, {{ui:Edit profile}}, {{ui:Slant}} at {{ui:Wall opening}}. Tingnan ang "Sa plan at sa 3D" sa ibaba.

Anuman ang piliin mo, iisa ang pagbabago: isang hakbang sa **Changes**, at binabawi ito ng {{ui:Undo}}.

Parehong tuwid at kurbadong pader ang tumatanggap ng bawat Shape tool. Sa kurbadong pader, tumatakbo ang mga distansya sa kahabaan ng arc nito.

## Ikabit ang itaas o ang base

- **Attach top**: pumili ng bubong, sahig o kisame. Sumusunod ang tuktok ng pader sa ilalim ng napili mo, tuwid sa itaas ng bawat sulok ng pader. Sa ilalim ng pitched na bubong, nagkakaroon ng hilig na tuktok ang pader, at kung saan nagbabago ng eroplano ang bubong (ridge o hip), yumuyuko kasama nito ang tuktok ng pader.
- **Attach base**: pumili ng sahig o kisame. Sumusunod ang base ng pader sa top face nito.
- Kung saan walang nasa itaas (o sa ibaba) ng bahagi ng pader, pinananatili ng bahaging iyon ang sarili nitong taas.
- Nananatili ang koneksyon: palitan ang pitch o overhang ng bubong, o ang taas ng kisame, at susunod ang mga nakakabit na pader sa iisang hakbang.
- Piliin ang **Sariling taas** para bitawan.

## I-edit ang profile

Binubuksan ng {{ui:Edit profile…}} ang outline ng pader na nakikita mula sa gilid nito:

- **Top line**: mga row ng **Along** (ang distansya mula sa simula ng pader) at **Height** (sa itaas ng base ng pader). Ang tatlong row na 0 / 3000, 2500 / 4500, 5000 / 3000 ay gumagawa ng gable end sa 5 m na pader.
- **Bottom line**: iwanang walang laman para sa level na base, o maglagay ng row para sa pader sa stepped na pundasyon.
- {{ui:Add a point}} ay nagdaragdag ng row, inaalis ng **Alisin** ang isa. Ina-apply ito ng {{ui:Use this profile}}; inaalis ito ng {{ui:Back to straight}}.

Tumatakbo ang bawat linya sa kahabaan ng pader nang isang beses, mula simula hanggang dulo nito; hindi tinatanggap ang linyang bumabalik sa sarili nito, o tuktok na bumababa hanggang base. Kapag may nakakabit ding tuktok, ang mas mababa sa dalawa ang gagamitin.

## Ikiling ang pader

**Slant**: **Patayo**, **Nakahilig** (parehong mukha ay nakahilig sa iisang direksyon, nananatili ang kapal) o **Dobleng hilig** (may sariling anggulo ang bawat mukha: pader na nagiging mas manipis o mas makapal habang tumataas). I-type ang degrees mula sa patayo; ang positibong anggulo ay nakahilig sa kaliwa ng pader, kapag tiningnan mula sa simula nito. Nananatili sa iginuhit nitong lugar ang pader sa base nito; ang mga pader na nakakabit dito ay hindi nakahilig kasama nito.

## Mga opening na walang pinto o bintana

{{ui:Add opening}} ay naghihiwa ng butas na 900 ang lapad sa gitna ng pader. Nagtatakda ang row nito sa **Mga opening** ng **Mula sa simula**, **Lapad**, **Sill** (mula sa level) at **Taas**; inaalis ito ng **Alisin**. Dumadaan ang opening sa buong pader, hindi kasama ng dami ng pader ang opening, at nagpapakita ang plan ng puwang kung saan ito umaabot sa taas ng hiwa ng plan. Kapag dumulas ang simula ng pader sa kahabaan ng linya nito, nananatili ang opening sa puwesto nito; tinatanggihan ang pagbabagong maglalagay dito sa labas ng pader.

## Sa elevation o section

Buksan ang view gamit ang lapis ng project browser. Kapag naka-on ang {{ui:Select and move}}:

- **Profile**: i-click ang pader na nakaharap sa view. Nagiging asul ang top at bottom line nito, may parisukat na grip sa bawat punto at tuldok sa gitna ng bawat piraso.
  - I-drag ang isang parisukat para ilipat ang punto na iyon (ang dalawang dulong punto ay gumagalaw pataas at pababa lamang).
  - I-drag ang isang tuldok para ilipat pataas o pababa ang buong piraso.
  - I-double-click ang isang linya (o i-right-click) para magdagdag ng punto doon; ang {{ui:Add a point (top)}} at {{ui:Add a point (bottom)}} ay nagdaragdag ng isa sa gitna ng pinakamahabang piraso.
  - I-click ang isang parisukat at pindutin ang Delete (o i-right-click) para alisin ang punto na iyon. Inaalis ng {{ui:Back to straight}} ang profile.
  - Kapag napili ang isang punto, i-type ang **Along** at **Height** nito sa strip sa ilalim ng toolbar.
- **Attach**: may listahan ang strip ng **Attach top** at **Attach base** para sa napiling pader. O gamitin ang tool na {{ui:Attach top}} o {{ui:Attach base}}: i-click ang pader o mga pader, pagkatapos ang bubong, sahig o kisame, na ipinapakita bilang mga dashed box. Nakakabit ang lahat ng napiling pader sa iisang hakbang.
- **Mga wall opening**: gamit ang tool na {{ui:Wall opening}}, i-drag ang isang rectangle sa mukha ng pader. Pagbalik sa {{ui:Select and move}}, i-drag ang opening para ilipat ito, i-drag ang isa sa walong grip nito para baguhin ang laki, i-type ang **Mula sa simula**, **Lapad**, **Sill** at **Taas** sa strip, o pindutin ang Delete para alisin ito.
- **Slant**: maaari ring i-click ang pader na tinitingnan nang tuwid ng view (nakikita nang nakaharap ang dulo, bilang section na dumadaan dito, o sa elevation mula sa dulo nito). I-drag ang bilog na hawakan sa tuktok nito para ikiling ito, o piliin ang **Patayo**, **Nakahilig** o **Dobleng hilig** sa strip at i-type ang mga anggulo.

Dumidikit ang mga laki sa 10 mm; mag-type ng halaga para sa mas pinong sukat. Maaaring i-edit sa elevation ang kurbadong pader habang tumatakbo ito sa isang direksyon sa kabuuan ng view; laging gumagana ang sarili nitong face view.

## Sa plan at sa 3D

Buksan ang {{ui:Walls}} sa grupong Edit:

- {{ui:Attach top / base}}: piliin ang **Attach top** o **Attach base** sa row ng tool. I-click ang pader o mga pader (sa plan o sa 3D view), pagkatapos kung saan sila ikakabit: sa 3D, i-click mismo ang bubong, sahig o kisame; sa plan, i-click ang isang punto sa ilalim nito (kapag may higit sa isa, may listahang magtatanong kung alin).
- {{ui:Edit profile}}: sa plan, i-click ang pader para buksan ang face view nito. Sa 3D, i-click ang pader: makakakuha ng grip ang mga punto ng profile nito; i-drag ang isa sa eroplano ng pader.
- {{ui:Slant}}: i-click ang pader (plan o 3D) at i-type kung gaano ito kahilig.
- {{ui:Wall opening}}: sa plan, i-click ang pader kung saan pupunta ang opening; ang **Lapad**, **Taas** at **Sill** nito ay nasa row ng tool. Sa 3D, i-click ang isang sulok sa mukha ng pader, pagkatapos ang kabilang sulok. Kapag napili ang pader sa 3D, may grip ang mga opening nito: nagbabago ang laki ng mga sulok, gumagalaw ang gitna.

Ang mga 3D grip ay sariling grip ng 3D view, kaya naghihintay ang mga ito habang ipinapakita ng section box ang mga grip nito.

## Sa plan

Iginuguhit ang nakahilig na pader kung saan ito pinuputol ng plan (1200 sa itaas ng level maliban kung iba ang sinasabi ng view): inililipat ang outline nito ayon sa lawak ng pagkahilig nito sa taas na iyon, at mas malapad o mas makitid doon ang dobleng hilig. Iginuguhit ang outline nito sa sahig gamit ang manipis na linya ng nasa ibaba ng hiwa. Nananatili sa base ang mga sulok, grip at dimension ng pader.

## Mga kopya

Kasama ng {{ui:Copy this level…}} at ng Move na may **Copy** ang profile, hilig at mga opening ng pader. Ang pader na nakakabit sa sahig o kisame ay nakakabit sa kinopyang sahig o kisame ng bagong level; ang pagkakabit sa bubong ay hindi kinokopya kasama ng level (hindi kinokopya ang mga bubong). Ang kopya sa parehong level ay nananatiling nakakabit sa parehong bubong, sahig o kisame.

## Sa file

Isinusulat ang pader na may hugis bilang faceted solid (IfcFacetedBrep), na binabasa ng ibang programa gaya ng pagkakaguhit nito; nasa pader ang mga setting nito (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Ang opening ay isang IfcOpeningElement sa loob ng pader na walang laman.

## Hindi pa nagagawa

- Profile na may overhang o butas sa outline (gumamit ng opening para sa butas).
- Sa 3D: pagdaragdag o pag-alis ng profile point, at ang hilig sa pamamagitan ng hawakan (gamitin ang face view ng pader, isang elevation o section, o i-type ang mga ito).
- Ang {{ui:Offset}} na may naka-on na Copy ay hindi kumokopya ng hugis o ng mga opening ng pader (ginagawa ito ng Move na may Copy).
- Hindi iginuguhit ang mga layer ng nakahilig na pader sa Katamtaman at Pino na plan (ang outline nito ay iginuguhit).
- Mga opening na hindi rectangle.
