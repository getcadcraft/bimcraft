---
title: MEP iekārtas ar pieslēgvietām
summary: Novietojiet vispārīgus gaisa apstrādes blokus, ventilatorus, sūkņus, katlus, ūdens sildītājus, termināla vienības, difuzorus, režģus un tvertnes ar izmēriem, ko ievadāt jūs, katru ar caurulēm un gaisa vadiem, kurus pieslēdz citi posmi.
keywords: mep, iekārta, gaisa apstrādes bloks, ahu, ventilators, iekļaujamais ventilators, sūknis, katls, ūdens sildītājs, termināla vienība, vav, difuzors, režģis, reģistrs, tvertne, pieslēgvieta, pieslēgvietas, savienojums, uzgalis, kakla izmērs, hvac, santehnika, mehāniskā, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ko darīsiet

Novietojiet iekārtas caurules un gaisa vadu galos. Katra daļa ir vispārīga forma, kuras izmērus nosaka ievadītās vērtības, un tās savienojumi ir **pieslēgvietas**: kur caurule vai gaisa vads pieslēdzas, kura sistēma, kurā virzienā plūst un kāds izmērs. Caurules un gaisa vadi, kas zīmēti no pieslēgvietas, pārņem tās izmēru un sistēmu un paliek tai piestiprināti: skatiet [Caurulu un gaisa vadu savienošana ar iekārtām](topic:mep-connections).

:::note
Šis ir zīmēšanas un koordinācijas palīglīdzeklis, izmērus nosaka inženieris. Iekārta nav ražotāja izstrādājums: nav jaudu, svaru vai ražotāja pieslēgvietu izmēru. Ražotāja modeli no savas MEP programmas ievietojiet kā IFC, kad tas vajadzīgs.
:::

## Novietot daļu

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet {{ui:Būvējums}} un izvēlieties {{ui:Aprīkojums}}.
2. Joslā izvēlieties veidu un ierakstiet tā izmērus. Katram veidam vajadzīgi savi:

| Veids | Ierakstāt | Tās pieslēgvietas |
|---|---|---|
| Gaisa apstrādes bloks | garums, platums, augstums; padeves un nosūces atveres; spirāles caurules izmērs un sistēma; kondensāta izmērs | padeves gaisa vads ārā, nosūces gaisa vads iekšā, spirāle iekšā un ārā, kondensāta novadīšana |
| Iekļaujamais ventilators | diametrs, garums, sistēma | gaisa vads iekšā un ārā |
| Sūknis | caurules izmērs, sistēma | ieeja un izeja |
| Katls | garums, platums, augstums, caurules izmērs, gāzes izmērs, dūmvada diametrs | apkures padeve ārā un atgriešana iekšā, gāze iekšā, dūmvads ārā |
| Ūdens sildītājs | diametrs, augstums, caurules izmērs, gāze vai elektrība | aukstais ūdens iekšā, karstais ūdens ārā (un gāze iekšā un dūmvads, ja tas kurina gāzi) |
| Termināla vienība | garums, platums, augstums, apaļa ieeja, izejas platums un augstums | padeves gaiss iekšā un ārā |
| Difuzors | seja, kakls, sistēma | tā kakls (gaiss iekšā) |
| Režģis | sejas platums un augstums, kakla platums un augstums, sistēma | tā kakls (gaiss ārā uz atgaisa vai nosūces gaisa vadu) |
| Tvertne | diametrs, augstums, caurules izmērs, sistēma | ieeja augšā, izeja tuvu apakšai |
| Radiators | garums, augstums, dziļums, caurules izmērs, sistēma | plūsma iekšā vienas malas augšā, atgriešana ārā otras malas apakšā |
| Konvektors / paneļu sildītājs | garums, augstums, dziļums, caurules izmērs, sistēma | plūsma iekšā vienā galā, atgriešana ārā otrā |
| Ražotāja saime | saime (skatiet [Caurules specifikācijas, vārsti, aizvari un ražotāju saimes](topic:pipe-specs)) | pieslēgvietas, ar kurām saime tika izveidota |

3. Iestatiet **Pie**, pamata augstumu virs līmeņa. Difuzora vai režģa augstums ir tā seja: ierakstiet griestu augstumu.
4. Ierakstiet **Marķējumu**, ja vēlaties (`AHU-1`); nākamā tāda paša veida daļa saņem nākamo numuru.
5. Pārvietojiet rādītāju pa plānu: pamatne un tās pieslēgvietas seko tam. Nospiediet {{key:R}}, lai pagrieztu par 90°. Noklikšķiniet, kur tai jābūt.

Cauruļu izmēri ir tērauda cauruļu izmēri (ASME B36.10M). Caurule, kas no sūkņa zīmēta citā materiālā, pārņem to pašu nominālo izmēru savā materiālā.

## Mainīt vai noņemt

Atlasiet to plānā vai 3D skatā. Īpašības rāda katru ierakstīto izmēru, tā marķējumu, X, Y, augstumu un pagriezienu, kā arī katru pieslēgvietu: tās izmēru, sistēmu, plūsmas virzienu un to, vai kaut kas ir pieslēgts. Katra izmaiņa ir viens solis {{ui:Atsaukt}}; posmi, kas piestiprināti tās pieslēgvietām, pārvietojas kopā ar to. {{key:Delete}} to noņem; posmi, kas bija piestiprināti tai, paliek, un {{ui:Savienojumu pārbaude}} tos uzskaita.

## IFC failā

Katrs veids tiek saglabāts kā sava IFC klase: IfcUnitaryEquipment (gaisa apstrādes bloks), IfcFan, IfcPump, IfcBoiler (katls; ūdens sildītājs ir IfcBoiler ar tipu water un objekta tipu "Water heater"), IfcAirTerminalBox (termināla vienība), IfcAirTerminal (difuzors, režģis) un IfcTank, ar tipu, ko dala katra tāda paša veida daļa, un izmēriem. IFC2X3 failos ir IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal un IfcFlowStorageDevice ar atbilstošiem tipiem. Katra pieslēgvieta ir IfcDistributionPort, novietota tur, kur ir savienojums, vērsta uz āru, ar savu plūsmas virzienu un sistēmu; citas programmas nolasa, kurš posms pieslēdzas kurai pieslēgvietai. Daļa pievienojas katras savas pieslēgvietas sistēmai un satur visus bibliotēkas vienumu komplektus, kādi ir katram novietotajam bibliotēkas vienumam.
