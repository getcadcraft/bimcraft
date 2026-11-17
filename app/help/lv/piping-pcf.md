---
title: Nosūtīt cauruļvadu uz spriegumu vai izometrijas programmu un nolasīt atpakaļ (PCF)
summary: Ierakstiet modeļa cauruļu trases kā PCF cauruļvadu komponentu failu vai nolasiet PCF failu no cauruļu spriegumu vai izometrijas programmas un zīmējiet tā cauruļvadu kā trases.
keywords: pcf, cauruļvadu komponentu fails, cauruļvadu spriegums, izometrija, izometrijas, eksports, imports, cauruļvadi, rūpnīca, tērauda caurule, darba pārvietošana, cita programmatūra
from: 24f91355
---

## Ko jūs darīsiet

PCF ir vienkāršā teksta fails, ko cauruļvadu spriegumu un izometrijas programmas lasa un raksta. Tajā uzskaitīti katra cauruļvada komponenti ar to galapunktiem un diametriem.

## Eksports

1. Izvēlieties Caurules rīku. Opciju rindā redzams **Eksportēt PCF**.
2. Noklikšķiniet uz tā. Tiek ierakstīta katra modeļa cauruļu trase: taisna caurule, elkoņi (90 grādu pagrieziens, citādi līkums), T veida savienojumi ar to atzara punktu, reducētāji un vārsti.
3. Failā izmantoti milimetri. Diametri ir nominālie diametri milimetros. Elkoņa centra punkts ir tā stūris, kur saskaras tā divas kājas.

PCF tiek rakstīts tērauda caurulei ar sastumjamo metinājumu. Trase citā materiālā tiek ierakstīta arī, ar tērauda komponentu atslēgām, un tas tiek atzīmēts Problēmu panelī.

## Imports

1. Izvēlieties Caurules rīku un noklikšķiniet **Importēt PCF…**, tad izvēlieties failu.
2. Taisna caurule līdz elkoņiem, līkumiem, vārstiem un flanšiem kļūst par vienu trasi pašreizējā līmenī. Izmēra maiņa sāk jaunu trasi. T veida savienojuma atzars kļūst par savu trasi, kas sākas T centrā.
3. Modelis veido savus veidgabalus. Reducētāji un T veida savienojumi netiek kopēti: tie parādās tur, kur satiekas dažādu izmēru trases vai atzars.

:::note
Augstumi failā tiek nolasīti kā augstumi virs pašreizējā līmeņa. Slodzes, balsti un pats sprieguma aprēķins PCF failā nav, tāpēc tie nenāk līdzi.
:::

## Pārbaudīt, kas ienāca

- Kopējais cauruļvada garums katram cauruļvadam atbilst avotam.
- Problēmu panelī katru uzskaitīts vienu reizi: elkonis, kura centra punkts nav vienādā attālumā no abiem galiem; caurule bez garuma; un diametrs, kas nav standarta izmērs.

## Cauruļvads, kas jau ir IFC failā

Kad IFC fails ir atvērts, **Eksportēt PCF** ieraksta arī tā paša cauruļu segmentus, veidgabalus un vārstus blakus trasēm, ko esat zīmējis. Segments iegūst savus galus no savām pieslēgvietām vai no sava korpusa galiem. Veidgabals bez pieslēgvietām tiek izlaists, un Problēmu panelis to norāda. Varat eksportēt tikai no IFC, ja modelim nav zīmētu trasu.

Importējot, balsti, atzari (olets), flanši, blīvējumi un vāciņi failā netiek zīmēti. Problēmu panelī uzskaitīts, cik katra veida izlaists, lai nekas nepazustu klusi.
