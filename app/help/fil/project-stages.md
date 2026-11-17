---
title: Mga yugto ng proyekto, mula sa brief hanggang sa instruksyon sa site
summary: Magsimula sa isang brief na may target na lawak at tingnan kung natugunan o kulang habang gumuguhit, ihambing dito ang mga concept option, i-link ang mga specification at detalye sa mga type, suriin ang shop drawing at itala ang mga site instruction laban sa mga element.
keywords: brief, iskedyul ng accommodation, target na lawak, natugunan, kulang, mga kuwarto, concept option, option, massing, budget, specification, spec, detalye, construction detail, type, shop drawing, review, approve, resubmit, site instruction, revision, cause, field, yugto
from: 0a49b852
---

## Ano ang gagawin mo

Gawin ang mga yugto ng proyekto sa iisang panel: isulat ang brief ng kliyente bilang mga kuwarto na may target na lawak, ihambing dito ang mga concept option, panatilihin ang specification at construction detail kasama ng mga type na kinabibilangan ng mga ito, suriin ang shop drawing habang bumabalik ang mga trade, at itala ang mga site instruction laban sa mga element na binabago nila.

## Mga hakbang

1. Sa kaliwang panel, buksan ang **Mga yugto ng proyekto**, pagkatapos ang **Brief**.
2. I-paste ang mga kuwarto, isa bawat linya: ang `Living; 1; 30` ay nangangahulugang isang kuwarto na 30 m². Puwedeng alisin ang bilang. Piliin ang **Idagdag ang mga kuwarto**. Punan ang kliyente, site, budget, tolerance at programme, pagkatapos piliin ang **I-save ang brief**.
3. Gumuhit ng mga pader. Bawat kuwartong nabuo ng mga pader na may pangalan ng kuwarto sa brief ay binibilang (ang numerong nakasunod dito, gaya ng "Bedroom 2", ay hindi pinapansin). Ipinapakita ng **Iskedyul ng accommodation** ang **Natugunan**, **Kulang**, **Labis** o **Hindi pa iginuguhit**, kasama ang pagkakaiba sa m².
4. Para magsimula ng bagong proyekto sa ganitong paraan, piliin ang **Simulan ang bagong proyekto mula sa brief**. Magbubukas ito ng bagong model, mula sa isa sa iyong naka-save na template kung pipili ka ng isa, at ilalagay ang brief bilang unang hakbang nito.
5. Buksan ang **Mga option laban sa brief**. Bawat massing option na nasa model ay iginuguhit sa iisang scale kasama ang gross area nito, ang hinihingi ng brief, at kung ilan sa mga kuwarto ng brief ang kasya. Inilalagay ng **I-stack ang brief dito** ang mga kuwarto sa mga palapag ng option, mula sa pinakamababa, at sinasabi kung ano ang hindi kasya. Ang gastos ay galing lamang sa price table ng proyekto; kung walang katugmang row, sinasabi nitong "No rate".
6. Buksan ang **Mga type, specification at detalye**. Ipinapakita ng bawat type ng pader, pinto, bintana at sahig kung may specification text ito, ang mga detalyeng naka-link dito, at kung saan nagkakaiba ang specification, ang mga iskedyul at ang mga sheet. Dinadagdag ng **I-link ang detalye** ang isang DetailCraft o CadCraft file, isang address, o isang sheet ng model na ito.
7. Buksan ang **Mga shop drawing**. Piliin ang mga element na sakop ng shop drawing sa model, pagkatapos piliin ang **Tanggapin ito**. Gamitin ang **Approve**, **As noted** o **Revise** kasama ang pangalan at tala ng reviewer. Ang **Resubmitted** ay gumagawa ng susunod na revision ng parehong record at pinananatili ang review history. Nakasulat din ang estado sa bawat element.
8. Buksan ang **Mga site instruction**. Piliin ang mga element, ibigay ang dahilan at kung ano ang epekto nito sa gastos at oras sa sarili mong mga salita, at piliin ang **Itala ito**. Pagkatapos maitala ang isang issue, sinasabi ng **Ipaliwanag ang mga pagbabago mula sa issue na ito** kung aling mga nabagong element ang sakop ng isang instruction at alin ang nagbago nang walang naitalang anuman.

## Good to know

- Bawat hakbang ay isang Undo. Walang tinatanggihan: ang brief na hindi natugunan, type na hindi tugma sa teksto nito, o shop drawing na lampas na sa takdang petsa ay babala o tala lamang sa **Mga problema**.
- Ang mga kuwarto ng brief ay mga space na walang pader. May target ang mga ito, hindi iginuhit na lawak, kaya hindi sila binibilang ng room schedule at COBie bilang mga iginuhit na kuwarto.
- Ang layout ay naglalagay lamang ng mga kuwarto sa mga palapag ayon sa lawak. Wala itong iginuguhit na pader.
- Ang teksto ng specification ay isinusulat sa Documents mula sa model. Dito, ikinukumpara lamang ito sa sarili nitong sukat ng model: walang sugnay ng anumang pamantayan na isinusulat para sa iyo.
- Ang shop drawing at site instruction ay mga record sa parehong history ng panel na Issues and revisions, kaya ipinapakita ng parehong panel ang mga ito.
- Ang estado ng shop drawing ay property ng bawat element (`CadCraft_ShopDrawing`), at ang site instruction ay `CadCraft_SiteInstruction`, kaya magagamit ang mga ito ng Find at Color by property.
- Ang mga markang na-verify sa field (Yugto 7) ay nasa Properties sa ilalim ng Verification.
