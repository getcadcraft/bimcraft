---
title: Preverite betonske elemente in ustvarite potresne obtežbe
summary: Nastavite palice betonskih nosilcev in stebrov odprtega modela, jih preverite po ACI 318-19, ustvarite ekvivalentne bočne sile po ASCE 7-22 na togih etažnih ploščah in si oglejte zdrs etaž. Pomoč inženirju za pregled.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, nosilec, steber, strig, stremena, potres, potresna obtežba, ekvivalentna bočna sila, ELF, ASCE 7-22, zdrs, zdrs etaže, etaže, toga diafragma, teža etaže, izkoriščenost, konstrukcija, inženir, analiza
from: 2f342e72
---

Bloka {{ui:Betonski elementi}} in {{ui:Potresne obtežbe}} v zavihku {{ui:Analiza}} preverita armiranobetonske nosilce in stebre odprtega IFC ter ustvarita bočne sile potresa na etažah njegovega okvirja. Sta enaka blokoma kot v DetailCraftu, zaženeta se po analizi zavihka {{ui:Analiza}} in se shranita v IFC skupaj z drugimi nastavitvami analize.

:::warning
Rezultati so **za preverjanje s strani inženirja**: pomoč, dokler jih ne pregleda inženir. Preverbe betona uporabljajo sile prvega reda (steber v okvirju, ki ga imenujete nepremični, je dimenzioniran za svoj povečani moment), brez povečanja zaradi zibanja, brez dimenzioniranja na zvijanje, brez potresnega detajliranja (ACI poglavje 18) in brez detajliranja stremen. Potresne obtežbe ne upoštevajo faktorja redundance, navpičnega potresnega učinka, torzijskega ojačanja in učinkov P-delta. **Vetrne obtežbe še niso izdelane**: poglavij standarda o vetru ni v referenčnih straneh projekta.
:::

## Kaj BimCraft prebere

Analiza prebere nosilce, stebre in diagonale modela s njihovimi profili (glejte [Analiza konstrukcijskega okvirja](topic:frame-analysis)). Blok {{ui:Betonski elementi}} našteje vsak prerez, ki ga uporabljajo. Pritisnite {{ui:Nastavi kot beton …}} na prerezu, ki je beton: BimCraft iz površine in togosti profila vzame pravokotnik (širino b in višino h, ki ju lahko nato spremenite), zato prerez, ki ni blizu pravokotnika (valjani jekleni profil), dobi mero, ki jo morate popraviti, ali pa ostane nespremenjen.

Prerez, nastavljen kot beton, in vsak element, katerega material je poimenovan beton, se analizira kot beton: E = 4700 √f′c, 2400 kg/m³, privzeto z **razpokanimi prerezi** (stebri 0.70 Ig, nosilci 0.35 Ig; ACI 318-19 preglednica 6.6.3.1.1(a)). Izberite {{ui:Bruto prerezi}}, da to izklopite. Brez teh nastavitev se model analizira točno kot prej.

## Palice, kombinacije, preverba

Vnesite zaščitni sloj, zgornje, spodnje in stranske palice (ali kletko stebra) ter stremena vsakega prereza, nastavite f′c, fy, fyt, K in zibanje ali nezibanje. Vsakemu obtežnemu primeru določite vrsto, pritisnite {{ui:Izdelaj kombinacije}} (ASCE 7 §5.3.1) in nato {{ui:Preveri beton}}: vsak element dobi izkoriščenost, pobarvano na modelu. Elementi nad nosilnostjo in zdrs etaže nad mejo so navedeni v {{ui:Težave}} z ustrezno klavzulo; kliknite jo, da izberete element.

## Etaže in potresne obtežbe

V bloku {{ui:Potresne obtežbe}} {{ui:Poišči etaže}} poišče nivoje, kjer se stikata dva ali več nosilcev; vsak postane toga diafragma. {{ui:Vzemi teže iz primerov}} prebere potresno težo vsake etaže iz primerov, ki jim podate faktor. Vnesite SDS, SD1, S1, R, Ie, Cd, TL, sistem in kategorijo tveganja, nato {{ui:Ustvari potresne primere}} (ASCE 7-22 12.8: perioda, bazna sila, razporeditev po etažah, 5 % naključna torzija). Sile po etažah in preverba zdrsa (12.12) se prikažeta po zagonu. Ista perioda in togost etaže vplivata na potres v [Predvajanje poplave, vetra ali potresa](topic:hazard-playback), ko kot vir izberete okvirno analizo.

Betonske plošče in stene postanejo v analizi plošče, blok {{ui:Armatura plošč}} pa izračuna potrebno jeklo na meter. Podrobnosti vsake preverbe so v temi DetailCraftu z istim imenom.
