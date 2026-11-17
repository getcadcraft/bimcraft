---
title: Symbols, Types at Assets, project template at Quick Kits
summary: May tatlong uri ng item ang Library (Symbols, Types, Assets). Magdagdag ng Type sa project mo, magsimula sa shared na project template, magdagdag ng Quick Kit, at ibahagi ang sarili mo sa upload page ng Library.
keywords: library, symbols, types, assets, type, wall type, floor type, roof type, ceiling type, project template, template, quick kit, kit, ibahagi, upload, version, changelog, LOD, classification, licence, notes mula sa practice
from: e13b0e67
---

## Ano ang gagawin mo

Hanapin ang kailangan mo sa Library ayon sa uri nito, magdagdag ng Type sa project na iginuguhit mo, magsimula ng bagong project mula sa template na ibinahagi ng iba, at ibahagi ang sarili mong template, type at kit.

## Tatlong uri ng Library item

- **Symbols** ay mga convention sa drawing: 2D lang, iginuguhit sa laki ng annotation, pinagsama-sama ayon sa discipline.
- **Types** ay nagsasabi kung ano ang gawa ng isang elemento: ang mga layer nito na may totoong kapal, ang level of development (LOD) at ang classification code nito. Idinadagdag ang Type sa project, hindi iginuguhit.
- **Assets** ay mga pisikal na bagay tulad ng pinto, bintana, furniture, fixture at equipment, na may plan view at 3D body sa totoong laki.

Sa tab na {{ui:Library}}, piliin ang {{ui:Library}} at gamitin ang **Uri ng item** para ipakita ang Lahat, Symbols, Types o Assets.

## Magdagdag ng Type sa project mo

1. Piliin ang **Types** sa ilalim ng Uri ng item at buksan ang isa.
2. Tingnan ang build-up, LOD at classification nito sa ilalim ng larawan, tapos i-click ang {{ui:Idagdag sa project na ito}}.
3. Idinadagdag ito bilang wall, floor, roof o ceiling type na maaari mong iguhitan. Kung may type na may ganoong pangalan na, idinadagdag ang bago bilang kopya at nananatiling pareho ang sa iyo. Isang undo ang mag-aalis nito.

## Mga project template at Quick Kit

Piliin ang {{ui:Mga Kit}} para makita kung ano ang ibinahagi ng mga tao.

- **Ang project template** ay IFC file na may level, grid, type at setting. Ini-save ito ng {{ui:I-save sa aking mga template}} sa New building sa ilalim ng **Magsimula sa**.
- **Ang Quick Kit** ay listahan ng mga Library item. Inililista ito ng {{ui:Ipakita ang mga item ng kit}} bilang mga card na maaari mong ilagay.
- Bawat kit ay may version at changelog, pinakabago muna. Ang version na nagsisimula sa 0 ay para sa talakayan; ang 1.0.0 ay para lang sa mga inampon ng may-ari ng linya.

## Ibahagi ang sarili mo

- **Project template:** {{ui:I-save bilang template}}, lagyan ng tsek ang {{ui:Gumawa rin ng file na ibabahagi sa Library}}, idagdag ang laman nito at isang version. Makakakuha ka ng `.json` file.
- **Quick Kit:** sa {{ui:Mga Kit}}, piliin ang Gumawa ng Quick Kit mula sa project na ito. Inililista nito ang mga Library item na ginagamit ng project.
- **Type:** sa {{ui:Type pack}}, lagyan ng tsek ang isang type at piliin ang {{ui:I-save bilang Library item…}}.

I-upload ang file sa upload page ng Library. Dadaan ito sa parehong review gaya ng anumang item, at doon ka pipili ng licence: may nakasaad na licence ang bawat item. Hinihingi sa mga item ang LOD nila, isang IFC class at isang classification code (code, hindi lang pangalan).

## Notes mula sa practice

Sa anumang page ng Library item, maaaring magdagdag ng note ang mga naka-sign in na miyembro: ginamit sa totoong project, sinubukan sa sample project, o may nakitang problema. Sabihin ang uri ng project sa ilang salita at huwag isama ang pangalan ng client. Pampubliko ang note at hindi ito review: hindi nito binabago ang item.

## Mabuting malaman

- Walang ipinapadala mula sa app. Ginagawa ang mga file sa computer mo at ikaw mismo ang mag-u-upload.
- Dala ng kit na ginawa mula sa template ang IFC text nang eksakto gaya ng naka-save. Suriin ito kung may anumang pribado bago mag-upload.
- Ipinapakita ng CadCraft ang Symbols at Assets sa tab nitong Library; ang Types at template ay para sa BimCraft project.
