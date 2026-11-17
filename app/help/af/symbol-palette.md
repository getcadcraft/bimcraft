---
title: Die simboolpalet
summary: Vind elektriese en loodgieter-simbole volgens naam of prent, merk die wat jy gebruik met 'n ster, en plaas hulle op die plan met een klik.
keywords: simboolpalet, simbole-werkbalkknoppie, muur volg, simbole, elektriese simbole, loodgieter-simbole, loodgieterplan, watertoilet, toilet, handewasbak, bad, stort, vloerdreineerder, skoonmaakpunt, slangkraan, warmwaterstoor, klep, sluitklep, koue water, warm water, afvoer, ontlugting, lynstyl, gunstelinge, soek
from: 67f20bc0
---

## Wat jy sal doen

Open een paneel wat die elektriese simbole en die loodgieterplansimbole met hul prente en name lys, vind die een wat jy wil hê, en plaas dit op die plan. Niks hier benodig die internet nie: die simbole word saam met die program gelewer.

## Maak dit oop en plaas 'n simbool

1. Open 'n model en open {{ui:Bou}} › {{ui:Simboolpalet}} (getikte opdrag: SYMBOLS). Dieselfde knoppie is in die Gereedskap-kieslys van die {{ui:Teken}}-balk en as **Simbole** in die Biblioteek-groep van die werkbalk.
2. Kies 'n stel: **Elektries** of **Loodgieter**, of **Alle stelle**. Tik in die soekkassie om die lys te versmal. Jy kan volgens naam of afkorting soek (WC, CW, HB).
3. Klik op 'n simbool. Die plan is gereed om dit te plaas.
   - 'n **Elektriese** simbool begin die Elektriese gereedskap met daardie toestel gekies, so alles op [Die elektriese plan](topic:electrical-plan) geld: klik op die plan, een ontdoenstap.
   - 'n **Loodgieter**-simbool begin die plansimboolgereedskap. Klik op die plan. 'n Toestel wat op 'n muur staan (’n toilet, handewasbak, bad, opwasbak, slangkraan) snap na die naaste muurvlak met sy rug na die muur; dreineerders, kleppe, die warmwaterstoor en lynstyle gaan waar jy klik.
4. Druk {{key:R}} om die simbool 90 grade te draai ({{key:Shift}}+{{key:R}} draai dit die ander kant), of tik 'n hoek in **Rotasie** in die opsiebalk. Druk {{key:Esc}} om te stop.

'n Toestel of slangkraan wat na 'n muurvlak gesnap het, onthou daardie muur: wanneer die muur beweeg, beweeg die simbool saam daarmee (dieselfde vlak, dieselfde afstand langs die muur) in dieselfde ontdoenstap. As jy die muur uitvee, bly die simbool waar dit was en lys Probleme "het sy muur verloor"; skuif dit of vee dit uit. Simbole wat weg van mure geplaas is, is aan niks gekoppel nie.

Elke simbool wat jy plaas, is een ontdoenstap. 'n Geplaasde simbool is 'n plan-aantekening in die IFC-lêer met sy etiket (WC1, WC2, ...). Kies dit om sy etiket of rotasie in **Eienskappe** te verander, of druk {{key:Delete}}.

## Wat die loodgieterstel het

Toestelle (watertoilet, urinaal, handewasbak, bad, stort, kombuisopwasbak, enkel opwasbak), 'n vloerdreineerder, vloer- en muurskoonmaakpunte, 'n slangkraan, 'n muurhidrant, 'n warmwaterstoor, kleppe (sluitklep, globe, bal, terugslag, skyfklep, drukverminderend) en lynstyle met hul afkortings: koue water (CW), warm water (HW), warm waterterugvoer (HWR), afvoer (W), ontlugting (V), stormdreinering (SD) en gas (G). Die tekeninge skaal saam met die plan, so hulle behou hul grootte op die gedrukte blad. 'n Lynstyl is 'n kort stomp om die styl op die plan te wys; teken die werklike pyplope met die pyp-gereedskap.

:::note
Dit is algemene loodgieterplan-konvensies, deur ons geteken; nie gesertifiseer volgens ISO 4067-1 of ASME Y32.4 nie. Hulle is vergelyk met openbare tekenlegendes en opleidingshandleidings (die lys is in die stel se bronnenota, wat sê waar ons ooreenstem en waar ons verskil), nie van enige produk gekopieer nie, en hulle is gratis om te gebruik (Apache-2.0). Tekenstelle verskil, so kontroleer die legende van jou eie projek. Hulle is plansimbole, nie 'n loodgieterontwerp nie: hulle bepaal nie pypgroottes of kontroleer kodes nie.
:::

## Gunstelinge en sleutelbord

- Klik die ster op 'n simbool (of druk {{key:F}} daarop) om dit as 'n gunsteling te hou. Gunstelinge word eerste gelys en bly in hierdie blaaier. **Slegs gunstelinge** wys net hulle.
- {{key:Down}} vanaf die soekkassie beweeg in die simbole; die pyltjiesleutels, {{key:Home}} en {{key:End}} beweeg tussen hulle; {{key:Enter}} kies die gefokusde een; {{key:Esc}} sluit die palet.
- Op 'n foon is die palet 'n blad aan die onderkant van die skerm; dit skuif opsy wanneer jy 'n simbool kies sodat jy die plan kan sien. Maak dit weer oop vanaf die Bou-kieslys of die **Palet**-knoppie in die opsiebalk.

:::tip
As 'n lêer 'n simboolstel gebruik wat hierdie bou nie het nie, wys die plan 'n kassie waar die simbool was, en Probleme lys dit.
:::

## Koppel 'n geplaasde element aan 'n simbool

'n Ligtoestel uit die Biblioteek is 'n 3D-element, maar 'n elektriese uitleg wys dit as sy simbool. Jy plaas dit **een keer** en koppel dit:

1. Kies Bou › **Simboolskakel** (of tik SYMBOLLINK). 'n Simboolskakel-afdeling open in die linkerpaneel.
2. Kies die geplaasde elemente op die plan of in 3D. Die afdeling sê hoeveel gekies is en waaraan hulle gekoppel is.
3. Kies die **Simbool** (uit enige simboolstel: Elektries, Loodgieter) en kies **Koppel**.

Die element is steeds een element, en elke skedule tel dit een keer:

- **3D** wys altyd sy liggaam.
- 'n **Plan** wys sy plan-vorm, soos voorheen.
- 'n Plan waarvan **Hierdie aansig wys gekoppelde elemente as** op **Hul simbool (’n dienste-uitleg)** gestel is, wys die simbool in sy plek. 'n Klik op die simbool kies die element. Die keuse word vir daardie aansig ('n vlak se vloerplan, sy plafonplan, of 'n uitroep) in die lêer behou.

**Draai die simbool 90°** draai die simbool ten opsigte van sy element. **Verwyder die skakel** haal die skakel af; die element bly. Die skedule **Gekoppelde simbole** lys elke gekoppelde element een keer met sy vlak en die vertrek waarin dit staan.

Nog nie gebou nie: 'n aansig se keuse op 'n blad is die keuse van die vlak se plan wat dit wys; toestelle wat met die Elektriese gereedskap geplaas is, is simbole in elke plan, soos voorheen.
