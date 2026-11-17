---
title: Magbukas ng project bundle
summary: Ang project bundle ay isang zip na may model, mga view, mga layout at mga property group nito. Buksan ito, ipakita ang isang view kasama ang palapag at mga layer nito, buksan ang isang layout, at tingnan ang mga property sa mga group ng project.
keywords: bundle, project bundle, ccbundle, zip, views, mapa ng view, layouts, layout book, layer combination, property groups, standards, pln, template
from: b5b86e8f
---

## Ang gagawin mo

Buksan ang **project bundle** (`.ccbundle.zip`) at magtrabaho kasama ang project ayon sa pagkakaayos nito: ang mga view, layout at property group nito, sa ibabaw ng model.

Ang bundle ay naglalaman ng:

- ang model bilang IFC,
- ang mga layout bilang PDF at DWG,
- isang listahan ng mga bagay na hindi kasama ng IFC: ang mga view (bawat isa kasama ang palapag, layer combination at scale nito), ang mga layout at ang mga drawing na nakalagay sa mga ito, mga property definition sa kanilang mga group, mga classification, at mga standard tulad ng layer, pen set, line type, fill, surface at composite.

Ginagawa ang mga bundle ng isang open-source na script na tumatakbo sa loob ng Archicad at humihingi sa mismong Archicad ng mga listahang ito. Hindi kailanman binabasa nang direkta ng BimCraft ang mga file na `.pln` o `.tpl`; tingnan ang [Magbukas ng .pln at .pla na project file](topic:pln-project-files).

## Gumawa ng bundle

Preview pa lang ang script: hindi pa ito nasusubukan sa bawat bersyon ng Archicad. Kunin ito mula sa [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Kailangan mo ng Archicad 24 o mas bago at Python 3.8 o mas bago; wala nang ibang i-install.

1. I-save ang `archicad_bundle.py` sa isang folder, halimbawa `C:\cc-bundle`.
2. Sa Archicad, buksan ang project at gumawa ng publisher set na eksaktong pinangalanang **CadCraft bundle**: ang 3D view bilang IFC, bawat layout bilang PDF, at bawat layout muli bilang DWG, na nailathala sa mga file sa disk sa iisang flat na folder.
3. Habang bukas ang project, patakbuhin nang isang beses ang `python archicad_bundle.py --probe --out .`. Nagbabasa lang ito at nagsusulat ng `probe.json`.
4. Patakbuhin ang `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (gamitin ang IFC translator na pinili mo). Ilalathala ng Archicad ang set at isusulat ng script ang `<project>.ccbundle.zip`.

Kung pumalya ang pag-publish sa pamamagitan ng script, ilathala nang manu-mano ang set at patakbuhin ang `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Nasa README ng repository ang lahat ng option. Kung may hindi lumabas, magbukas ng issue doon at ilakip ang `probe.json`.

## Magbukas ng bundle

1. I-click ang {{ui:Choose a file}}, o i-drop ang `.ccbundle.zip` sa BimCraft. Sa folder na binuksan mo gamit ang {{ui:Open a folder}}, nakalista ang mga bundle sa ilalim ng **Mga project bundle**; i-click ang isa sa pangalan nito.
2. Bumubukas ang model gaya ng anumang IFC, at lumalabas sa kaliwa, sa ilalim ng impormasyon ng file, ang seksyong **Project bundle**.

Walang ina-upload: binabasa ang bundle sa computer mo, isang file sa isang pagkakataon, kaya hindi dalawang beses kinokopya ang malaking model.

## Ipakita ang view

Sa ilalim ng **Views**, pinapangkat ang mga view ayon sa mga folder na mayroon sila sa project. I-click ang pangalan ng view:

- **Plano ng sahig** ay nagpapakita lang ng palapag nito, tiningnan mula sa itaas.
- **Layer combination nito** ay nagtatago ng mga elemento sa mga layer na tinatago ng combination na iyon. Sinasabi ng status line kung ilang elemento ang natago nito.
- **Scale nito** ay ipinapakita sa tabi ng pangalan at sa status line.
- **Ang 3D view** ay nagpapakita ng lahat ng palapag.

Para ipakita muli ang lahat, gamitin ang {{ui:Show all}} sa {{ui:Show}} at lagyan ng tik ang bawat palapag.

:::note
Hinahanap ng BimCraft ang mga layer sa pamamagitan ng layer assignment ng IFC file. Kung na-export ang IFC nang wala ang mga ito, walang natatagong anuman ang layer combination, at sinasabi ng status line na 0 elementong natago.
:::

## Buksan ang layout

Sa ilalim ng **Layouts**, ipinapakita ng bawat layout ang numero, pangalan, laki ng papel at ang mga view na nakalagay dito.

- **PDF** ay sine-save ang PDF ng layout mula sa bundle.
- **DWG** ay nagbubukas ng drawing ng layout sa 2D view. I-click ang kahit anong view para bumalik sa model.
- **Buksan sa …** ay ipinapadala ang file ng layout sa app na gumagawa dito, sa bagong tab: ang PDF sa MarkupCraft, ang DWG sa CadCraft. Lumalabas lang ito kung bukas ang app na iyon sa tabi ng BimCraft. Binabasa ang file mula sa bundle habang naglo-load ang tab, at walang ina-upload.

Ang layout na walang alinman ay nagsasabing **Walang file sa bundle**.

## Tingnan ang mga property sa mga group ng project

Pumili ng elemento. Ipinapakita ng **Property groups** ang mga property nito sa ilalim ng mga group na tinukoy ng project, na tugma sa pamamagitan ng property set at pangalan na ibinigay ng definition para sa IFC, o kung hindi, sa pangalan nito. Ang natitira ay nananatili sa {{ui:Properties}} gaya ng dati. Inililista ng **Property definitions** ang bawat definition kasama ang group, uri at IFC name nito.

## Mga standard at tala

- Binibilang ng **Standards** ang mga layer, layer combination, pen set, line type, fill, surface, composite at material sa bundle.
- Inililista ng **Notes** ang hindi nakuha ng script mula sa bersyon ng Archicad na iyon, anumang field na hindi nabasa ng BimCraft, at anumang file na pinangalanan ng bundle pero wala sa loob nito.

## Pag-troubleshoot

- **"… ay zip pero hindi project bundle."** Walang `manifest.json` ang zip. I-unzip ito at buksan ang `.ifc` sa loob.
- **"… ay mas bagong project bundle kaysa sa kayang basahin ng BimCraft na ito."** I-update ang BimCraft.
- **"… ay walang model na pinangalanan ng manifest nito."** Naputol o na-edit ang zip. Gawin ulit ang bundle.
- **Nagpapakita ng lahat ng palapag ang isang view.** Wala sa IFC ng model ang palapag nito (sinasabi ito ng status line). Tiyaking kasama sa IFC export ang palapag na iyon.

Tingnan din ang [Pagtutulungan sa pagitan ng dalawang BIM program](topic:two-bim-programs) at [Ano ang binabasa ng BimCraft mula sa bawat format](topic:file-formats).
