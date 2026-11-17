---
title: Masas varianti, kas saglabāti līdzās
summary: Saglabājiet vairākus masas variantus vienā modelī, padariet vienu par pašreizējo variantu, pārbaudiet to pret objekta būvlīnijām un servitūtiem, ievietojiet masas no ModelCraft un izstrādājiet izvēlēto variantu sienās un grīdās.
keywords: masa, masas variants, variants, variantu kopa, shēma, koncepcija, koncepcijas projekts, 2. posms, alternatīvas, salīdzināt variantus, pašreizējais variants, ēkas masa, bīdīt vilkt, modelcraft, civilcraft, bruto grīdas platība, pamatne, tilpums, izstrādāt masu, servitūts, būvlīnija, atkāpe
from: 69a01459
---

## Ko jūs darīsiet

Turiet koncepcijas masas variantus vienā modelī, nevis atsevišķos failos: vairākas ēku masas līdzās, viena no tām ir **pašreizējais variants**, pārējās saglabātas salīdzināšanai.

Masas variants ir ēkas masa: kontūra, paaugstināta līdz augstumam, ar noteiktu stāvu skaitu. Tās vēl nav sienas. Varat saglabāt, cik vēlaties, grupējot tos **variantu kopās** (vienas kopas varianti ir alternatīvas viens otram).

## Saglabāt variantu

1. Atveriet {{ui:Telpu programma līdz apjomam}}, ierakstiet telpu programmu un kontūru un izvēlieties {{ui:Meklēt variantus}}.
2. Izvēlieties vienu no uzskaitītajiem variantiem.
3. Zem {{ui:Masas varianti modelī}} ierakstiet {{ui:Variantu kopa}} nosaukumu, ja vēlaties, un izvēlieties {{ui:Saglabāt atlasīto variantu}}.

Variants parādās modelī kā ēkas masa un sarakstā, ar stāviem, pamatni, bruto grīdas platību un tilpumu. Neko nebūvē. Saglabājiet citu tāpat.

Kopas pirmais variants ir tās pašreizējais variants. Katrs solis ir viens atsaukšanas solis.

## Pašreizējais variants

Katras kopas viens variants ir pašreizējais. Tas nozīmē divas lietas:

- **Tā stāvi tiek skaitīti kā ēkas grīdas platības.** Pašreizējam variantam ir viena telpa katrā stāvā, kas nes šī stāva bruto platību, tātad viss, kas nolasa grīdas platības, redz spēkā esošo variantu un nevienu citu.
- **To pārbauda pret objektu.** Ja tas atrodas ārpus objekta robežas, pāri būvlīnijai vai servitūtā, sadaļā {{ui:Problēmas}} parādās brīdinājums ar tā nosaukumu. Tas ir tikai brīdinājums: nekas netiek aizliegts. Varianti, kas nav pašreizējie, netiek pārbaudīti.

Izvēlieties {{ui:Padarīt pašreizējo}} citā variantā, lai to mainītu.

{{ui:Paslēpt variantus, kas nav pašreizējie}} paslēpj pārējos 3D skatā. Tas attiecas tikai uz šo pārlūkprogrammu un netiek saglabāts failā.

## Masa no ModelCraft

ModelCraft {{ui:Eksportēt}} › {{ui:Masa uz BimCraft…}} nosūta katru grupu vai komponentu kā vienu variantu. BimCraft atver failu ar uzskaitītiem variantiem.

Lai tos ievietotu modelī, kas jau ir atvērts, izvēlieties {{ui:Pievienot masas variantus no faila}} un atlasiet `.ifc` failu. Tā masas tiek ievietotas kā variantu kopas varianti vienā atsaukšanas solī, stāvot tur, kur tās tika modelētas. Ēku masu fails no CivilCraft darbojas tieši tāpat.

Variants, kas atzīmēts ar „(forma vienkāršota)”, ModelCraft nebija vienkāršs taisns bloks (tas atkāpjas, slīpojas vai nav slēgts). Tā masa šeit ir tā pamatnes kontūra, paaugstināta līdz augstumam; tā grīdas platības un tilpums ir mērīti no paša cietā ķermeņa.

## Izstrādāt izvēlēto variantu

Izvēlieties {{ui:Izstrādāt}} variantam. Tas kļūst par līmeņiem (pievienoti līdz tā stāvu skaitam), sienām ap tā kontūru katrā stāvā un grīdas plātni katrā, vienā atsaukšanas solī. Variants pazūd no saraksta; pārējie varianti paliek kā bija. Jumta vēl nav.

{{ui:Pārdēvēt}} maina varianta nosaukumu, {{ui:Noņemt}} izņem to no modeļa. Pašreizējā varianta noņemšana padara kopas pirmo citu variantu par pašreizējo.

## Ko vajadzētu redzēt

- Katrs saglabātais variants kā bloks 3D skatā un rinda sarakstā.
- „(pašreizējais)” blakus vienam variantam katrā kopā.
- Brīdinājums sadaļā {{ui:Problēmas}}, kad pašreizējais variants šķērso objekta robežu, būvlīniju vai servitūtu.

## Labi zināt

- IFC failā variants ir elementa vietturis (building element proxy) ar rekvizītu kopu `CadCraft_SiteMass` (tā variantu kopa, varianta nosaukums un tas, vai tas ir pašreizējais, ir šajā kopā). Pašreizējā varianta stāvi ir telpas ar tipu `MassingFloor`. Citas programmas vietturi lasa kā vispārīgu elementu.
- Varianta saglabāšana nekad nepievieno līmeņus; tā izstrāde pievieno.
- Palīgs var uzskaitīt saglabātos variantus, saglabāt vienu, padarīt vienu pašreizējo, pārdēvēt, izstrādāt vai noņemt to.
