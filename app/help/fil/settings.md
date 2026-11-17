---
title: Mga setting ng BimCraft
summary: Piliin kung lilitaw ang mga room at space, kung iguguhit ang mga edge at aling view ang bubuksan ng model, at magsimula sa pagpoposisyon na may naka-on na wall snap.
keywords: mga setting, kagustuhan, mga opsyon, mga space, mga silid, ifcspace, mga gilid, mga linya, performance, malaking model, view sa pagbubukas, camera, top view, wall snap, snapping
from: 4416e64f
---

Buksan ang {{ui:Mga setting}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:BimCraft}}, ay naglalaman ng mga setting na pag-aari ng app na ito; ang {{ui:Pangkalahatan}} ay naglalaman ng mga setting na ibinabahagi ng lahat ng CadCraft app (theme, toolbar, panels). Ang mga setting ng BimCraft ay umiiral lamang sa app: binabago mo ang mga ito dito, at naaalala ito ng browser na ito. Ibinabalik ng {{ui:I-reset ang mga setting ng BimCraft}} sa ibaba ng dialog ang mga ito, at ang mga ibinabahaging setting, sa orihinal na estado.

## Mga menu, key at mouse

Ang estilo ng menu (sariling toolbar ng BimCraft, isang home-design menu bar, BIM ribbon o drafting command line), sarili mong mga key at menu, at kung ano ang ginagawa ng wheel at mga mouse button. Tingnan ang [Mga menu, key at mouse](topic:menus-keys-and-mouse).

## Kapag bumukas ang model

- **Ipakita ang mga room at space** (naka-off sa simula): ang mga room at space ay mga see-through box na maaaring magtago ng mga pader sa likod nila, kaya nakatago ang mga ito sa simula. Ang button na {{ui:Mga space}} sa itaas ng model ay nagbubukas at nagsasara pa rin ng mga ito para sa bukas na model.
- **Edges**: {{ui:Edges on}} (ang simula) ay gumuguhit ng mga edge line na nagbibigay ng drafting look. {{ui:Mga maliit na model lang}} ay gumuguhit lamang ng mga ito para sa mga model na mas mababa sa 300,000 triangle, na nagpapanatiling mas mabilis baguhin ang malalaking model. {{ui:Edges off}} ay nagsisimula ng bawat model na walang mga ito. Ang button na {{ui:Edges}} ay nagpapalit pa rin ng mga ito para sa bukas na model. Sa higit sa 1.5 milyong triangle, palaging naka-off ang mga edge.

## Mga drawing na bumubukas sa

Paano unang lumalabas ang DWG o DXF drawing: ang {{ui:3D (pinakamabilis)}} (ang simula) ay gumuguhit kahit ng malaking drawing nang mabilis, o ang {{ui:Model (2D)}} ay nagbubukas ng patag na model space view. Ang mga tab sa itaas ng drawing ay lumilipat sa pagitan ng {{ui:Model}}, ng mga sheet at ng {{ui:3D}} anumang oras. Ang drawing na walang laman sa model space, o browser na hindi kayang magpakita ng 3D, ay laging nagbubukas sa 2D.

## Opening view

Ang camera na ginagamit sa pagbubukas ng model: {{ui:Fit}} (ang simula, ang buong model mula sa isang sulok), {{ui:Itaas}}, {{ui:Harap}} o {{ui:Side}}. Ang mga button sa itaas ng model ay nagpapalit ng view anumang oras.

**Gusaling nakaikot sa site nito**: maraming model ang dumarating na nakahilig ang gusali sa axes ng file (sa survey o shared coordinates). Ang {{ui:Square to the building}} (ang simula) ay nagpapakita ng ganitong gusali nang tuwid: ang {{ui:Fit}}, {{ui:Itaas}}, {{ui:Harap}}, {{ui:Side}}, ang mga mukha ng view cube at bawat bagong section ay sumusunod sa mga pader nito, at ang compass ng view cube ay tumuturo pa rin sa hilaga ng model. Pinapanatili ng {{ui:As placed in the site}} ang axes ng file. Pareho ang itsura ng gusaling nakahanay ang mga pader sa axes sa alinmang paraan.

## Paglalagay ng library item

**Simulan na naka-on ang wall snap** (naka-off sa simula): kapag nagsimula ang paglalagay o pag-paste ng library item, ang likod nito ay nagsa-snap sa pinakamalapit na pader, nakaharap sa room. Ang {{key:Tab}} o ang {{ui:Wall snap}} sa placing bar ay pansamantalang nagpapatay nito. Ang storey na walang pader ay nagsisimula nang wala ito.

## Section box

Ang {{ui:Room round the pick}} ay ang espasyong iniiwan ng {{ui:Section box round the pick}} sa bawat panig ng mga napiling elemento, sa millimeter: 300 sa simula, hanggang 5000. Tingnan ang [Pagputol ng IFC model gamit ang section plane](topic:section-plane).

## Lokasyon

Ang {{ui:Latitude and longitude in}} ay pumipili ng sistemang ibinibigay ng {{ui:Measure}} › {{ui:Location}} para sa latitude at longitude: WGS 84 (EPSG:4326, ang simula, gaya ng ginagamit ng GPS at web map), {{ui:The file's own datum}}, o isa sa ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 at CGCS2000. Palaging ipinapakita rin ang map system at datum ng file. Tingnan ang [Sukatin ang distansya, lawak ng mukha at lokasyon sa 3D](topic:measure).

## Corner indicator

Ang nasa kanang-ibabang sulok ng 3D view (isang IFC model, at drawing na nakalipat sa 3D): {{ui:View cube}} (ang simula), {{ui:Axis icon}} (maliit na X, Y at Z) o {{ui:Wala}}. Agad itong nagbabago. Hindi kailanman nagpapakita ng isa ang 2D drawing view.

Sa view cube, i-click ang isang mukha, gilid o sulok para tumingin mula sa panig na iyon, i-drag ang cube para umikot, i-drag ang singsing para lumingon, at i-click ang bahay para sa panimulang view.

## Ang pangalan mo sa mga issue

Kapag naka-sign in, dala ng mga issue ang pangalan ng iyong account at hindi humihingi ng kahit ano ang BimCraft: ipinapakita ng bahaging ito ang {{ui:Mula sa iyong account (<name>)}}. Ang {{ui:Use another name}} ay nagbubukas ng kahon para sa ibang pangalan, na nananaig hanggang piliin mo ang {{ui:Use my account name}}. Kapag naka-sign out, hihingi ng pangalan ang form ng issue gaya ng dati. Tingnan ang [Mga issue at BCF file](topic:issues-bcf).

## Mga assistant

**Hayaang gamitin ng mga AI assistant at script ang BimCraft** (naka-off sa simula) ay nagpapahintulot sa assistant sa computer mo na maabot ang bukas na model sa pamamagitan ng CadCraft Studio: ang **Basahin** ay humahanap ng mga elemento at bumabasa ng kanilang property, ang **Palitan ang view** ay nag-iisolate, nagtatago at nagpapakita ng mga ito. Inililista ng **Aktibidad** ang mga tawag nito. Tingnan ang [Hayaang gumana ang AI assistant sa model mo](topic:assistants).

:::note
Ang iba pang setting ay nalalapat kapag bumukas ang model o nagsimula ang paglalagay. Ang model na bukas na ay nananatili sa itsura nito hanggang gamitin mo ang mga button sa toolbar o buksan itong muli.
:::

## Kaugnay

- [Kopyahin, i-paste at i-duplicate ang mga library item](topic:copy-paste)
- [Ilagay ang kagamitan at muwebles mula sa library](topic:place-from-library)
- [Ang screen ng BimCraft](topic:workspace)
- [Hayaang gumana ang AI assistant sa model mo](topic:assistants)
