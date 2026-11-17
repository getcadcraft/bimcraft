---
title: I-sum ang mga dami, ilista ang mga elemento at i-schedule ang mga space
summary: Bilangin ang mga elemento at i-sum ang kanilang haba, lawak, volume o anumang number property, nakapangkat ayon sa anumang property; ilista ang isang row bawat elemento; o i-schedule ang mga space kasama ang kanilang lawak at volume. Bawat isa ay nada-download bilang CSV.
keywords: dami, quantity, quantities, takeoff, totals, sum, schedule, bill of quantities, boq, qto, csv, group by, count, haba, lawak, volume, mga space, mga kuwarto, room schedule, area schedule, listahan ng elemento
from: e2e7210c
---

## Ano ang gagawin mo

Kumuha ng kabuuan mula sa model: haba ng pader kada storey, bilang ng pinto kada type, volume ng slab kada materyal, ang gastos ng bawat zone.

## Mga hakbang

1. Magbukas ng IFC model.
2. Buksan ang {{ui:Kabuuang dami}} sa kaliwang panel.
3. Sa {{ui:Bilang}}, piliin ang {{ui:Bawat elemento}} o ang mga napili lang.
4. Sa ilalim ng {{ui:Pagpangkatin ayon sa}}, pumili ng property, gaya ng {{ui:Class}}. I-click ang {{ui:Magdagdag ng grupo}} para hatiin pa, hanggang tatlo, halimbawa ayon sa {{ui:Storey}}.
5. Sa ilalim ng {{ui:I-sum}}, lagyan ng tsek ang mga numerong isasama. Naka-tsek na sa simula ang mga quantity set ng model.
6. I-click ang {{ui:I-download ang CSV}} para buksan ang table sa spreadsheet.

## Ano ang dapat mong makita

- Isang row bawat grupo, na may bilang ng elemento nito at bawat kabuuan, at isang total row.
- Ang mga elementong walang value ay binibilang pero walang idinadagdag. Kapag nangyari iyon, nagdaragdag ang CSV ng "left out" na column sa tabi ng kabuuan para makita mo kung ilan sila.
- Nasa units ng file ang mga numero, gaya ng pagkakaimbak ng file, kadalasan millimeters para sa mga haba.

## Isang row bawat elemento, o ang mga space

Palitan ang {{ui:Ipakita}}:

- **Isang row bawat elemento**: bawat elemento sa sariling row, kasama ang mga property sa ilalim ng {{ui:Mga column}} at ang mga numero sa ilalim ng {{ui:I-sum}}. Nagsisimula ang CSV sa GlobalId ng bawat elemento. I-click ang unang value sa isang row para piliin ang elementong iyon.
- **Mga space**: bawat kuwarto kasama ang numero, pangalan, {{ui:Storey}}, lawak at volume nito, at ang kanilang kabuuan. Galing sa quantities ng space, ayon sa pagkakasabi ng file, ang mga lawak at volume. Kapag walang nakasulat ang file, sinusukat ang mga ito mula sa shape ng space sa m² at m³ at ipinapakita nang italic; sinasabi ng CSV kung alin ang alin.

## Susunod

- [Hanapin ang mga elemento ayon sa class, pangalan o property](topic:find)
- [Kulayan ang mga elemento ayon sa property](topic:color-by-property)

## Infrastructure (IFC 4.3)

Pumili ng **Infrastructure (IFC 4.3)** sa listahan ng view para makita ang mga kalsada, riles, tulay at marine works na kabuuan kada class at type, kasama ang haba, lawak at volume na sinasabi mismo ng file. Blangko ang iniiwan para sa dami na hindi sinasabi ng file, at hindi ito kinukuwenta. Ang **Ipadala ang infrastructure quantities sa TakeoffCraft** ay nagse-save ng `.quantities.json` file na binubuksan ng TakeoffCraft bilang typed quantities.
