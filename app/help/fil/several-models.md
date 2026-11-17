---
title: Tingnan ang ilang IFC model nang sabay
summary: Magdagdag ng higit pang IFC file sa eksena, gaya ng architecture, structure at services, tingnan ang mga ito sa parehong coordinates, ilipat ang isa, itago ang isa, at piliin kung alin ang ie-edit mo.
keywords: federate, federation, federated model, maraming model, maraming file, pagsamahin, overlay, coordination, disiplina, structure, mep, services, offset, ilipat ang model, active model, magdagdag ng model
from: df0efbbf
---

## Ano ang gagawin mo

Tingnan ang mga model mula sa iba't ibang disiplina sa iisang lugar: ang model ng architect kasama ang mga structural at services model. Nananatiling sariling file ang bawat isa; ipinapakita lang sila nang magkasama ng BimCraft.

## Mga hakbang

1. Buksan ang unang IFC model gaya ng dati.
2. Sa {{ui:Mga model}} sa kaliwa, i-click ang {{ui:Magdagdag ng model…}} at piliin ang isa o higit pang IFC file. Lalabas ang bawat isa sa listahan at sa 3D view.
3. Alisan ng tsek ang isang model para itago ito; lagyan ng tsek para ipakitang muli.
4. Kung napunta ang model sa maling lugar (ibang survey point), i-click ang {{ui:Ilipat}} sa ilalim nito, i-type kung gaano kalayo ito ililipat sa X, Y at Z sa metro, at i-click ang {{ui:Ilapat}}.
5. Ang model na may tuldok ang ine-edit mo. I-click ang tuldok ng ibang model para i-edit iyon.
6. I-click ang × sa tabi ng model para alisin ito sa eksena.

## Buksan ang mga model ng team

Kapag ang bukas na model ay cloud file sa team project, lilitaw ang {{ui:Buksan ang mga model ng team}} sa ilalim ng listahan. Binubuksan nito ang iba pang IFC model ng project sa tabi ng isang ito, bawat isa ay inilipat ayon sa offset na itinakda ng project. Nananatiling wala ang mga model na nakatago sa iyo at binibilang ang mga ito; ang model na pinaikot ng project ay binubuksan nang hindi pinaikot at binibilang din; nilalaktawan ang mga file na hindi IFC (halimbawa DWG) at pinangalanan sa status line. Hindi kailanman binubuksan nang dalawang beses ang model na bukas na. Nakatago ang button para sa file na wala sa team project.

## Ano ang dapat mong makita

- Bawat model sa coordinates ng unang model, ayon sa pagkakalagay ng file nito. Ang mga model na na-export mula sa parehong project ay magkakahanay nang hindi ginagalaw.
- Kapag pumili ka ng elemento ng model na hindi mo ine-edit, read only ang ipapakitang property nito, at may {{ui:I-edit ang model na iyon}} para lumipat.
- Ang {{ui:Model tree}}, {{ui:Mga palapag}}, {{ui:Color}}, ang listahan ng {{ui:Mga pagbabago}}, paglalagay ng library item at {{ui:I-save bilang IFC}} ay gumagana sa model na ine-edit mo. Ang pagtatago, pag-isolate, see-through at {{ui:Piliin lahat}} ay gumagana sa lahat ng model.
- Ang {{ui:I-save bilang IFC}} ay nagda-download ng model na ine-edit mo, kasama ang mga pagbabago lamang nito.

## Mga karaniwang pagkakamali

- **Malayo o nawawala ang isang model.** Iba ang coordinates ng file nito. Gamitin ang {{ui:Fit}} para hanapin ito, saka {{ui:Ilipat}} ito sa tamang lugar.
- **Naka-grey out ang Burahin o Kopyahin sa napiling elemento.** Nabibilang ito sa ibang model: lumipat muna dito.
- **Pinalitan ng Pumili ng file ang lahat.** Nagsisimula iyon ng bagong eksena. Gamitin ang {{ui:Magdagdag ng model…}} para idagdag ang mga file sa kasalukuyan mo.

## Susunod

- [Itago, i-isolate at i-see through ang mga elemento](topic:hide-and-isolate)
- [Kulayan ang mga elemento ayon sa property](topic:color-by-property)
