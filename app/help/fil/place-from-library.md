---
title: Ilagay ang equipment at furniture mula sa library
summary: Maghanap ng item sa Library, file o bukas na drawing, ilagay ito sa isang storey ng IFC model na may ghost preview, paikutin ito, idikit sa pader, at i-save.
keywords: ilipat, move, paikutin, rotate, turn, drag, library, librarycraft, ilagay, place, insert, equipment, furniture, block, family, item, catalog, content, kcl, csv, gltf, obj, rfa, dwg, ifc type
from: 3dad5d4b
---

## Ano ang gagawin mo

Ilagay ang isang library item sa IFC model: lababo, work table, upuan. Isinusulat ito ng BimCraft bilang tamang IFC element na may type, kaya ang bawat kopya ng parehong item ay nagbabahagi ng iisang set ng geometry, at kasama ang data, item number at license nito.

## Mga hakbang

1. Magbukas ng IFC model.
2. I-click ang tab na {{ui:Library}} sa tabi ng {{ui:Properties}} sa kanan, o ang {{ui:Library}} sa toolbar sa itaas ng model.
3. Pumili ng pinagmulan:
   - **Built-in symbols**: mga generic na plumbing plan symbol na kasama ng BimCraft sa ilalim ng Apache-2.0, available offline. Suriin ang kanilang dimensyon bago magtayo. Para sa electrical plan symbol at IFC electrical device, gamitin ang **Build › Electrical**.
   - **Library**: ang CadCraft library sa site na ito. Ang mga pampublikong item ay hindi nangangailangan ng pag-sign in.
   - **This file**: ang mga block ng bukas na DWG o DXF drawing. Ang dynamic block na may visibility state ay inaalok isang beses bawat state, pinangalanang "Sink: Double bowl", bawat isa ay iginuhit gamit lamang ang mga object ng state na iyon.
   - **Files…**: isang DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV file sa computer mo. Binabasa ito sa tab na ito; walang ina-upload.
   - **Other feeds**: ibang library na gumagamit ng parehong feed format. Idagdag ang address nito minsan; itinatabi ito sa browser na ito.
4. Maghanap o pumili ng kategorya, pagkatapos i-click ang card. Ipinapakita ng card ang plan preview, pangalan, maker at model, license at bersyon.
5. I-click ang {{ui:Ilagay sa plan}} (sa Plan view) o ang {{ui:Ilagay sa model}} (sa 3D view). Sa Split, kung saan kapwa ipinapakita ang plano at 3D view, split button ang button: ang pangunahing aksyon nito ay {{ui:Ilagay sa plan}}, at ang arrow sa kanang dulo nito ay nagbubukas ng menu na may {{ui:Ilagay sa model}}. O i-drag ang card, o ang larawan sa detalye ng item, papunta sa plano o 3D view: ilalagay ang item kung saan mo ito bibitawan. Gamit ang pen o daliri, pindutin nang matagal ang card sandali, pagkatapos i-drag.
6. Piliin ang storey sa placing bar. Sa 3D view, nakatago ang mga storey sa itaas nito habang naglalagay ka at pumupunta sa itaas ang view; sa plano, ipinapakita na ng plano ang storey na iyon. Ang pagpili ng {{ui:Ilagay sa model}} mula sa plano lamang ay magpapakita ng 3D view sa tabi nito.
7. Ilipat ang pointer sa ibabaw ng model: ipinapakita ng isang transparent na box kung saan pupunta ang item.
8. Pindutin ang {{key:R}} para paikutin ito ng 90°. Pindutin ang {{key:Tab}} (o {{ui:Wall snap}}) para idikit ang likod nito sa pinakamalapit na pader, nakaharap sa kuwarto.
9. I-click para ilagay ito. O i-type ang posisyon sa **X, Y (mm)**, halimbawa `1200, 3400`, at pindutin ang {{key:Enter}}.

Ang ilaw o anumang nakasabit sa itaas: itakda ang **Mount** sa **At the ceiling**. Ang tuktok ng item ay nasa ilalim ng kisame sa ibabaw ng puwesto (o sa taas ng level kung walang kisame). Kapag may ceiling plan sa plan view, ang **Mount** ay nagsisimula sa **At the ceiling**.
10. Sagutin ang isang tanong: ang **item number** (awtomatikong mapupunan ang susunod na bakanteng numero), ang quantity at isang note. Pindutin ang {{key:Enter}}.
11. Maglagay pa, o pindutin ang {{key:Esc}} para huminto.
12. I-click ang {{ui:I-save bilang IFC}} para i-download ang na-edit na kopya.

## Plan o model

Sumusunod ang place button ng Library sa view na nasa iyo, at nagbabago agad kapag binago mo ang view (ang mga button na {{ui:Plan}}, {{ui:Split}} at {{ui:3D}}, ang keyboard, o pagbubukas ng file). Isang button lang ang ipinapakita ng Plan, ang {{ui:Ilagay sa plan}}; isang button lang ang ipinapakita ng 3D, ang {{ui:Ilagay sa model}}; ipinapakita ng Split ang split button, na ang pangunahing aksyon ay {{ui:Ilagay sa plan}} at ang {{ui:Ilagay sa model}} ay nasa menu nito. Parehong gumagamit ng parehong placing bar at nagsusulat ng parehong IFC element ang dalawang paraan: gumagana ang pointer sa plan view para sa isa at sa 3D view para sa isa. Pindutin ang {{key:Esc}} anumang oras para huminto.

Walang sariling key ang pag-drag ng card; ang split button, o ang simpleng button, ang gumagawa ng parehong bagay gamit ang keyboard.

## Ilipat o paikutin ang nailagay na item

Sa {{ui:Draw}}, piliin ang item sa plano. Lalabas ang isang square grip sa insertion point nito at isang round grip sa tabi nito.

- I-drag ang item, o ang square grip nito, para ilipat ito. Dumidikit ito gaya ng Wall tool (mga dulo at mukha ng pader); pinananatili ng {{key:Shift}} itong nakahanay pa rin sa dati nitong puwesto.
- I-drag ang round grip para paikutin ito sa hakbang na 15°. Pindutin nang hawak ang {{key:Shift}} para sa hakbang na 1°.
- Pindutin ang {{key:R}} para paikutin ito ng 90°.
- Sa **Properties** (pati sa 3D view), i-type ang **X**, **Y** at **Rotation (°)**, o i-click ang **Turn 90°**.

Ang bawat paglipat ay isang hakbang ng undo at naipapasa sa Live TeamWork. Pinapanatili ng item ang item number, library data at taas nito mula sa level. Hindi pa ito nagagawa: ang pag-drag nito sa 3D view.

## Ang dapat mong makita

- Ang item sa model, napili, kasama ang mga property nito sa kanan: isang kahon na **Library item** na may license at attribution nito, at ang mga set na `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` at, para sa mga item mula sa tagged na drawing, `CadCraft_SourceAttributes`.
- "Inilagay: *item* (item *n*)" sa listahan ng pagbabago. Binabawi ito ng {{key:Mod+Z}}.
- Ang status line: "Inilagay ang *item* bilang item *n*."

## Dapat mong malaman

- May ilang item na may iba't ibang size o opsyon: kaya may pagpipiliang **Variant** ang card, at ang pipiliin mo ang siyang ilalagay. Tingnan ang [Place and swap a library item that has variants](topic:library-variants).
- Ang item na walang 3D body (2D symbol) ay inilalagay gamit ang pansamantalang box; ibibigay mo ang taas nito kapag tinanong.
- Dagdag pa ng pareho: pumili ng nailagay na item at gamitin ang {{ui:Kopyahin}} at {{ui:I-paste}}, o {{key:Mod+D}}. Tingnan ang [Copy, paste and duplicate library items](topic:copy-paste).
- Para magsimula ang bawat paglalagay na nakabukas ang wall snap, i-on ang **Start with wall snap on** sa [BimCraft settings](topic:settings).
- Kino-convert sa sariling units ng model ang mga haba, anuman ang mga ito.
- Nasa library rin ang **Entourage** (puno, shrub, tao, kotse): maghanap ng "tree", "person" o "car". Iginuhit ang mga ito ng CadCraft (CC0) at pinapanatili ang kanilang kulay kapag nailagay (kayumanggi ang puno, berde ang dahon, transparent ang bintana ng kotse), sa BimCraft at sa ibang BIM program. Lumalabas ang mga ito sa [rendered pictures](topic:render).
- Sa IFC2X3 file, isinusulat ang body bilang faceted solid; sa IFC4 bilang triangulated face set. Parehong nabubuksan sa ibang IFC tool.
- Hindi maisasave dito ang drawing (DWG o DXF), kaya IFC model lamang ang pinaglalagyan ng mga item. Gamitin ang **This file** sa isang drawing para makita kung ano ang magiging anyo ng mga block nito.

## Mga item sa iyong wika

Puwedeng dalhin ng item ang pangalan, paglalarawan at type nito sa ibang wika. Kapag mayroon ang mga ito sa wikang nakatakda sa BimCraft (Mga setting › General › Language), ipinapakita ng pahina ng item ang mga iyon, at nasa ilalim ang pangalang ibinigay ng maker nito. Isinusulat ng **Place** ang pangalan sa wika mo sa model, kaya ganoon ang pagkakalista nito sa iskedyul na {{ui:Equipment}}. Nananatiling parehong item ang item: ang pagsuri ng update at pagpapalit ay nakabatay sa mismong item, hindi kailanman sa pangalan nito. Pinapanatili ng mga item na walang salin ang sarili nilang salita.

## Mga karaniwang pagkakamali

- **Nawawala ang place button.** Walang nakabukas na IFC model. Buksan muna ang isa.
- **Hindi sumusunod sa pointer ang ghost.** Nasa labas ng lugar ng model ang pointer, o wala sa view ang eroplano ng storey. I-click ang {{ui:Itaas}}.
- **Sinasabi ng {{ui:Wall snap}} na walang pader.** Walang pader sa IFC ang storey (may ilang export na naglalagay ng pader sa ibang storey). Piliin ang storey na iyon, o i-type ang X at Y.
- **Mali ang laki ng mga item ng file.** Walang units ang file, o mali ang sinasabi nitong units. Sa {{ui:Mga file…}} piliin ang units at basahin ulit.

:::tip
Ang paglalagay ng parehong item nang dalawang beses ay nagbabahagi ng iisang IFC type, kaya ang model na may apatnapung upuan ay iniimbak ang upuan nang isang beses.
:::
