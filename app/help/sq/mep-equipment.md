---
title: Pajisjet MEP me porte
summary: Vendos njësi gjenerike trajtimi ajri, ventilatorë, pompa, kaldaja, ngrohës uji, njësi terminale, difuzorë, grila dhe depozita, të përmasuara me vlerat që shkruan, secila me lidhjet e tubave dhe kanaleve që u bashkohen vargjet e tjera.
keywords: mep, pajisje, njësi trajtimi ajri, ahu, ventilator, ventilator në linjë, pompë, kaldajë, ngrohës uji, njësi terminale, vav, difuzor, grilë, regjistër, depozitë, port, portet, lidhje, grykë, madhësi grykeje, hvac, hidraulikë, mekanike, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Çfarë do të bësh

Vendos pajisjet në skajet e tubave dhe kanaleve. Çdo pjesë është një formë gjenerike e përmasuar me vlerat që shkruan, me lidhjet e saj si **porte**: ku bashkohet një tub ose kanal, cili sistem, nga cili drejtim shkon rrjedha dhe çfarë madhësie. Tubat dhe kanalet e vizatuar nga një port marrin madhësinë dhe sistemin e tij dhe mbeten të fiksuar aty: shih [Lidh tubat dhe kanalet me pajisjet](topic:mep-connections).

:::note
Kjo është një ndihmë hartimi dhe koordinimi, e përmasuar nga një inxhinier. Pajisja nuk është produkt i një prodhuesi: pa kapacitete, pesha ose madhësi lidhjesh të prodhuesve. Sill një model të prodhuesit nga programi yt MEP si IFC kur të nevojitet.
:::

## Vendos një pjesë

1. Ndiz {{ui:Vizato}}, hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Pajisjet}}.
2. Te shiriti, zgjidh llojin dhe shkruaj madhësitë e tij. Çdo lloj kërkon të vetat:

| Lloji | Shkruan | Portet e tij |
|---|---|---|
| Njësi trajtimi ajri | gjatësi, gjerësi, lartësi; hapjet e furnizimit dhe të kthimit; madhësia e tubit të serpentinës dhe sistemi; madhësia e kondensatës | kanali i furnizimit jashtë, kanali i kthimit brenda, serpentina brenda dhe jashtë, kullimi i kondensatës |
| Ventilator në linjë | diametri, gjatësia, sistemi | kanal brenda dhe jashtë |
| Pompë | madhësia e tubit, sistemi | hyrja dhe dalja |
| Kaldajë | gjatësia, gjerësia, lartësia, madhësia e tubit, madhësia e gazit, diametri i tubit të tymit | furnizimi i ngrohjes jashtë dhe kthimi brenda, gazi brenda, tymi jashtë |
| Ngrohës uji | diametri, lartësia, madhësia e tubit, gaz ose elektrik | ujë i ftohtë brenda, ujë i ngrohtë jashtë (dhe gaz brenda dhe tub tymi kur djeg gaz) |
| Njësi terminale | gjatësi, gjerësi, lartësi, hyrja rrethore, gjerësia dhe lartësia e daljes | ajri i furnizimit brenda dhe jashtë |
| Difuzor | fytyra, grykë, sistemi | gryka e tij (ajri brenda) |
| Grilë | gjerësia dhe lartësia e fytyrës, gjerësia dhe lartësia e grykës, sistemi | gryka e tij (ajri jashtë te kanali i kthimit ose i nxjerrjes) |
| Depozitë | diametri, lartësia, madhësia e tubit, sistemi | hyrja lart, dalja afër fundit |
| Radiator | gjatësia, lartësia, thellësia, madhësia e tubit, sistemi | rrjedha brenda lart në njërin skaj, kthimi jashtë poshtë në tjetrin |
| Konvektor / ngrohës paneli | gjatësia, lartësia, thellësia, madhësia e tubit, sistemi | rrjedha brenda në njërin skaj, kthimi jashtë në tjetrin |
| Familja e prodhuesit | familja (shih [Specifikimet e tubave, valvulat, kllapat dhe familjet e prodhuesve](topic:pipe-specs)) | portet që iu dhanë familjes së tij |

3. Cakto **Në**, lartësinë e bazës mbi nivelin. Lartësia e një difuzori ose grile është fytyra e tij: shkruaj lartësinë e tavanit.
4. Shkruaj një **Etiketë** nëse dëshiron një (`AHU-1`); pjesa e radhës e të njëjtit lloj merr numrin e radhës.
5. Lëviz treguesin mbi planimetri: shtrirja dhe portet e saj ndjekin treguesin. Shtyp {{key:R}} për ta rrotulluar 90°. Kliko aty ku duhet të shkojë.

Madhësitë e tubave janë madhësi tubash çeliku (ASME B36.10M). Një tub i vizatuar nga një pompë me material tjetër merr të njëjtën madhësi nominale në materialin e vet.

## Ndrysho ose hiq

Zgjidhe në planimetri ose në pamjen 3D. Vetitë shfaqin çdo madhësi që shkruajte, etiketën e saj, X, Y, lartësinë dhe rrotullimin, dhe çdo port: madhësinë e tij, sistemin, nga cili drejtim shkon rrjedha dhe nëse diçka është e lidhur. Çdo ndryshim është një hap i {{ui:Zhbëj}}; vargjet e fiksuara te portet e saj lëvizin me të. {{key:Delete}} e heq; vargjet që ishin fiksuar te ajo mbeten dhe kontrolli i Lidhjeve i liston ato.

## Te skedari IFC

Çdo lloj ruhet si klasa e vet IFC: IfcUnitaryEquipment (njësi trajtimi ajri), IfcFan, IfcPump, IfcBoiler (kaldajë; një ngrohës uji është një IfcBoiler i tipit water me llojin e objektit "Water heater"), IfcAirTerminalBox (njësi terminale), IfcAirTerminal (difuzor, grilë) dhe IfcTank, me një tip të përbashkët për çdo pjesë të së njëjtës lloj dhe madhësie. Skedarët IFC2X3 marrin IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal dhe IfcFlowStorageDevice me tipet përkatëse. Çdo port është një IfcDistributionPort i vendosur aty ku është lidhja, i drejtuar jashtë, me drejtimin e rrjedhës dhe sistemin e vet; programet e tjera lexojnë cili varg lidhet me cilin port. Pjesa bashkohet me sistemin e secilit prej portëve të saj dhe mban grupet e artikujve të bibliotekës që ka çdo artikull i vendosur.
