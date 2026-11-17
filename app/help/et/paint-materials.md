---
title: Materjalide värvimine seintele, põrandatele ja katustele
summary: Anna elementidele materjal, nagu tellis, vooder, sindel, puit või plaat, kas terve elemendi või ühele küljele, salvestatud IFC-sse ja näidatud renderdatud piltidel.
keywords: värvi, materjal, materjalid, viimistlus, viimistlused, tekstuur, tellis, vooder, sindel, katusematerjal, puit, kivi, plaat, betoon, krohv, rohi, kruus, klaas, metall, seina külg, sise, väli, põranda viimistlus, ruum, pinnastiil
from: fbfed676
---

{{ui:Värvi}} tööriistaribal avab materjaliteegi 3D-vaate kohal: tellis ja plokk, vooder, katusematerjal, puit, kivi, plaat, betoon, krohv, maapind, klaas ja metall.

## Elementide värvimine

1. Klõpsa {{ui:Värvi}}.
2. Klõpsa materjalil.
3. Klõpsa elementidel 3D-vaates. Iga klõps värvib klõpsatud elemendi.

Et värvida palju korraga, vali need enne (klõpsa, {{key:Ctrl}}+klõps või [otsing](topic:find)) ja klõpsa seejärel materjalil: iga valitud element saab selle ühe sammuga.

Element näitab materjali värvi 3D-vaates kohe. Tekstuur ilmub [renderdatud pildil](topic:render). {{key:Esc}} või {{ui:Sulge}} lõpetab värvimise.

## Värvi üks külg

Vali {{ui:Ainult klõpsatud külg}} ja klõpsa soovitud küljel: seina väliskülg vooderdusega ja selle sisekülg teise viimistlusega, põranda ülemine pind puiduga, alumine pind jääb nagu oli. Ülejäänud element säilitab oma materjali.

Külg leitakse elemendi enda suundade järgi, nii et see jääb samaks küljeks, kui elementi teisaldad või pöörad.

Põrandate värvimiseks ruumi kaupa anna igale ruumile oma põrand ({{ui:Joonista}} › {{ui:Põrand}} › **See ruum**, vt [Ruumid, põrandad, laed ja katused](topic:floors-and-roofs)), seejärel värvi iga põranda ülemine pind.

## Materjali eemaldamine

Klõpsa triibulisel värviproovil ({{ui:Ilma materjalita}}) ja seejärel elemendil. Kõik sellel olevad materjalid, sealhulgas küljed, eemaldatakse.

## IFC-s

Värvimine muudab IFC-d (iga samm on eraldi ja {{key:Ctrl+Z}} võtab selle tagasi) ning jääb tavaliseks IFC-ks:

- iga värvitud element saab omadusehulga `CadCraft_Render`, mis nimetab tema materjali, ja ühe omaduse iga värvitud külje kohta;
- tema kehale tuleb pinnastiil materjali värviga, nii et teised BIM-programmid näitavad värvi. IFC4-s nimetab stiil ka tekstuuri.

Kui BimCraft muudab seina, mille sa värvisid (näiteks lööd selle otsa ümber), säilitab sein oma materjali ja värvi BimCraftis, piltidel ja teistes programmides.

:::note
Tekstuurid joonistab BimCraft ise: need töötavad võrguühenduseta ja on tasuta igaks otstarbeks (CC0). Sinu enda pildifailidest tehtud tekstuure veel ei ole.
:::

## Tekstuurid 3D-vaates

Värvitud tellisseinal on näha tellised ja puitpõrandal laudised oma tegelikus suuruses, niipea kui värv on peal. Eemalda linnuke **Näita tekstuure 3D-vaates** värvipaletil, et näha selle asemel tasaseid värve (väga suur mudel lülitab need ise välja ja ütleb seda). Omaduse järgi värvimine näitab alati oma värve. Tekstuure joonistab programm, nii et midagi ei laadita alla, ja renderdused ning glTF-fail kannavad neid igal juhul.
