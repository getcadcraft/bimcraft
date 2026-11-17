---
title: Mga issue, revision at drawing changelog
summary: I-record ang bawat set ng sheet na ibinigay mo, tingnan kung ano ang nagbago mula noon sa bawat sheet at elemento, at itago ang site instruction, shop drawing at linked model kasama ang issue na kinabibilangan nila.
keywords: issue, issued set, isinumiteng set, pagsumite, revision, revisions, ano ang nagbago, mula sa issue, changelog, drawing changelog, drawing register, transmittal, site instruction, shop drawing, linked model, tender, konstruksyon, snapshot, ihambing
from: 4c732832
---

## Ano ang gagawin mo

I-record ang isang issue: aling mga sheet ang naibigay, anong petsa, para saan, at ang bawat isa sa kanilang revision. Pagkatapos, itanong kung ano ang nagbago mula sa issue na iyon. Itago ang site instruction at ang mga naibalik na shop drawing kasama ang issue.

## Mga hakbang

1. Sa kaliwang panel, buksan ang **Mga issue at revision**.
2. Piliin ang **I-record ang issue**. Iminumungkahi ang revision (A, tapos B; ang may numero gaya ng P1 ay nagbibilang pataas). Piliin kung para saan ito ibinigay, kanino ito ipapadala, ang petsa at ang mga sheet. Kapag nakatakda na ang yugto ng project mo, susunod dito ang purpose. Kapag may listahan ng supporting document ang permit package, awtomatikong tsinek ang mga sheet na naka-link sa listahang iyon.
3. Iwanang naka-tsek ang **I-save din ang kopya ng model bilang naibigay** para mapanatili ang model nang eksakto kung paano ito naibigay. Ida-download ang kopya; ang pangalan, laki at SHA-256 nito ay itatago kasama ng issue.
4. Piliin ang **I-record ang issue na ito**. Ang sheet na nagbago mula nang huli itong naibigay ay kukuha ng bagong revision. Ang sheet na hindi nagbago ay mananatili sa revision nito. Ipinapakita ng title block ng bawat sheet ang revision nito.
5. Para makita kung ano ang nagbago, piliin ang **Mga pagbabago mula noon** sa tabi ng isang issue. Bawat sheet ay magsasabing Pareho o Nagbago, kasama ang mga elementong idinagdag, binago at tinanggal dito. I-click ang bilang para piliin ang mga elementong iyon.
6. Piliin ang **Magdagdag ng record** para sa site instruction, shop drawing, markup set, linked model o note. Piliin ang issue na kinabibilangan nito. Ang file na pipiliin mo ay ire-record ayon sa pangalan, laki at SHA-256 nito; mananatili ang file sa kinaroroonan nito.
7. Ang **Drawing changelog** ay nagpapakita ng isang row para sa bawat sheet at isang column para sa bawat issue. Ang **I-download ang changelog (CSV)** ay ise-save ito kasama ng mga issue at record.
8. Ang **I-save ang issue history** ay sumusulat ng file na `.issues.json`. Mababasa ito ng MarkupCraft, TakeoffCraft at DetailCraft gamit ang **Basahin ang issue history**.

## Mabuting malaman

- Nakatago ang history sa loob ng IFC file (property set `CadCraft_Issues` sa project). Hindi ito pinapansin ng ibang program.
- Itinuturing na nagbago ang sheet kapag nagbago ang sarili nitong set-up, o kapag nagbago ang elementong ipinapakita nito: ipinapakita ng plano ang level nito, ang elevation o section ang buong model, at ang door o window schedule ang mga pinto o bintana nito.
- Itinuturing na nagbago ang elemento kapag nagbago ang property, posisyon, laki o hugis nito.
- Para makita kung aling property ang eksaktong nagbago, buksan ang naka-save na kopya ng naibigay na model gamit ang **Ihambing ang mga version**.
- Ang pag-alis ng issue ay nag-iiwan ng mga record nito, nang walang issue. Bawat hakbang ay isang Undo.
- Ang model na may higit sa 60,000 elemento ay hindi nagtatago ng record ng bawat elemento kasama ng issue. Ihahambing pa rin ang mga sheet.

## Hindi pa nagagawa

- Hindi sine-save ang mga sheet bilang PDF kasama ng issue.
- Hindi iginuguhit ang revision cloud sa sarili nitong mga sheet ng BimCraft. I-record ang mga cloud sa MarkupCraft kasama ng issue.
