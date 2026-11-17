---
title: Plani elektrik
summary: Vendos prizat, çelësat, dritat, sensorët, kutitë e lidhjes dhe panelet në planimetri me të njëjtët simbole si shtojca Electrical e CadCraft, lidh çelësat me dritat që ndezin, dhe listo pajisjet dhe qarqet në tabelat.
keywords: elektrik, plan elektrik, prizë, prizë dyfishe, dyfishe, çelës, tre-drejtimësh, dimer, dritë, dritë tavani, dritë e fshehur, downlight, sensor lëvizjeje, kuti lidhjesh, panel, tabelë shpërndarjeje, qark, ngarkesë, vat, amper, degë çelësi, tabelë pajisjesh, tabelë paneli
from: f7de1947
---

## Çfarë do të bësh

Vizato planin elektrik të shtëpisë në model: prizat, çelësat dhe panelet në muret, dritat dhe sensorët në tavan. Çdo pajisje është një element elektrik i vërtetë në skedarin IFC, me etiketën, qarkun dhe ngarkesën e vet, dhe çelësat kujtojnë dritat që ndezin.

## Vendos pajisjet

1. Në një nivel, hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Elektrik}}.
2. Zgjidh pajisjen: prizat (energji, të dhëna, telefon, audio-video), çelësat dhe sensorët (edhe një termostat dhe një ajustues kohe), dritat, detektorët dhe alarmet, një kuti lidhjesh, një panel ose një nën-panel.
3. Shkruaj një **Qark** nëse e di (çdo emër: 1, 2, A-3). Lëre **Lartësinë e montimit** bosh për lartësinë e zakonshme të asaj pajisjeje.
4. Kliko mbi planimetri. Prizat, çelësat dhe panelet vendosen në sipërfaqen e murit më të afërt, të kthyer nga dhoma; dritat, sensorët dhe kutitë e lidhjes vendosen në tavan aty ku klikon.

Pajisjet etiketohen kur vendosen: **R** për prizat, **S** për çelësat, **L** për dritat, **M** për sensorët e lëvizjes, **J** për kutitë e lidhjes, **P** për panelet. Pajisjet në mur lëvizin me të kur lëviz muri.

E preferon të shfletosh me figura? Hap **Paletën e simboleve** nga {{ui:Ndërtimi}} për të gjetur një pajisje me emër, vendose me yll ato që përdor dhe vendose me një klik: shih [Paleta e simboleve](topic:symbol-palette).

## Lidh çelësat me dritat

1. Zgjidh një çelës (ose një sensor lëvizjeje) dhe kliko **Lidh dritat** te **Vetitë**.
2. Kliko çdo dritë që ndez. Kliko përsëri një dritë të lidhur për ta shkëputur.
3. Shtyp {{key:Enter}} ose kliko **U krye**.

Planimetria vizaton një kurbë me pika nga çelësi te çdo dritë e tij. **Vetitë** e një drite tregojnë cilët çelësa e ndezin.

## Dhoma ku qëndron një pajisje

Çdo pajisje e di dhomën ku qëndron. Një pajisje në mur është në dhomën ku shikon; një pajisje tavani është në dhomën mbi të cilën ndodhet. **Vetitë** tregon **Dhomën**, dhe tabela **Pajisjet elektrike** ka një kolonë **Dhoma** (numri dhe emri, si 101 Kuzhina).

Ajo mbahet e përditësuar: riemërto ose ri-numëro dhomën, zhvendos pajisjen, ose zhvendos një mur, dhe dhoma ndjek në të njëjtin hap. Një pajisje në faqen e jashtme të ndërtesës, ose në një hapësirë që nuk është dhomë, thotë se nuk është në një dhomë.

Dhoma shkruhet edhe në skedar, në grupin e vetive të pajisjes `CadCraft_Location` (Room, RoomNumber, RoomName), që Find, Ngjyros sipas vetisë dhe një tabelë etiketash ta përdorin, dhe e mund ta përdorë edhe një program tjetër. Simbolet e planimetrisë dhe elementet e lidhur me një simbol marrin të njëjtin grup; shih [Paleta e simboleve](topic:symbol-palette).

## Lëri asistentin t'i vendosë

Me një asistent të lidhur (Cilësimet › Asistentët, me ndryshime të lejuara), mund të kërkosh pajisje me fjalë: "vendos një prizë dyfishe çdo 2 m përgjatë mureve të dhomës së ndenjes, 300 mm lart, në qarkun 3", ose "shto një dritë tavani me çelësin e saj pranë derës". Asistenti përdor pesë mjete: `devices_add`, `device_change`, `lights_set`, `devices_delete` dhe `devices_list`. Ato krijojnë të njëjtat pajisje që krijon mjeti Electrical, në të njëjtat mure dhe me të njëjtat etiketa, qarqe, ngarkesa dhe lartësi, dhe çdo thirrje është një hap i vetëm zhbërjeje.

Një pajisje nuk merr kurrë një lloj që mjeti Electrical nuk e ka: një lloj i panjohur refuzohet dhe asistenti merr listën. Një prizë ose çelës duhet të ndodhet brenda 600 mm nga sipërfaqja e murit, si një klik, përndryshe thirrja refuzohet dhe asgjë nuk vendoset. Lartësitë e parazgjedhura janë në milimetra: 300 për prizat, 1100 për çelësat; një pajisje tavani varet nga tavani.

## Ndrysho dhe listo ato

Zgjidh një pajisje për të ndryshuar etiketën, qarkun, ngarkesën (vat) dhe lartësinë e montimit. Zgjidh disa për t'i vendosur të gjitha në një qark njëherësh. Shtyp {{key:Delete}} për të hequr një; një dritë e fshirë hiqet nga çelësat e saj.

Te {{ui:Tabelat}} zgjidh **Pajisjet elektrike** për çdo pajisje me nivelin, qarkun, ngarkesën, lartësinë dhe dritat që ndez çdo çelës, ose **Qarqet** për pajisjet e çdo qarku, ngarkesën totale dhe rrymën. Të dyja janë edhe në fletën e tabelave të grupit të vizatimeve: shih [Fasadat, prerjet dhe fletët](topic:sheets).

:::note
Lartësitë e montimit dhe ngarkesat janë parazgjedhje planifikimi (një prizë 16" lart dhe 200 W, një çelës 48", një dritë tavani 60 W), jo projekt: elektricisti ose inxhinieri i përcakton qarqet dhe e kontrollon kodin.
:::

:::tip
Simbolet janë ato që vizaton shtojca Electrical e CadCraft në planet e instalimit, kështu që një plan nga secila aplikacion lexohet njësoj.
:::
