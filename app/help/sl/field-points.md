---
title: Točke za zakoličbo in preverjanje izvedenega stanja
summary: Oštevilčite mesta, ki jih ekipa zakoliči iz modela, kot so središča stebrov, konci sten, sidrni vijaki, rokavi ali katerikoli izbrani element. Zapišite jih za totalno postajo, nato preberite izmerjene točke izvedenega stanja in preverite, kaj odstopa.
keywords: točke zakoličbe, zakoličba, zakoličiti, totalna postaja, geodetski posnetek, datoteka točk, csv, txt, pnezd, penzd, xyz, severna koordinata, vzhodna koordinata, višina, izvedeno stanje, preverjanje, odstopanje, toleranca, sidrni vijaki, središča stebrov, konci sten, rokavi, koordinate geodetskega posnetka, pretvorba karte
from: acea9606
---

Zavihek {{ui:Točke}} na desni ustvari točke, ki jih ekipa zakoliči na gradbišču iz odprtega modela, in preveri točke, ki jih izmerijo kasneje.

## Izdelajte točke

1. Odprite model IFC in zavihek {{ui:Točke}}.
2. Označite, kaj zakoličiti: **središča stebrov** (vznožje osi središča vsakega stebra), **konce sten** (oba konca osi vsake stene na njeni podlagi), **sidrne vijake**, **rokave** (elementi, katerih ime ali tip vsebuje „sleeve“) in **izbrane elemente** (vsak na svoji točki postavitve; najprej jih izberite v pogledu).
3. Izberite prvo številko in predpono, koordinate, enote, stolpce in datoteko:
   - **Model**: lastne koordinate datoteke. **Geodetska mreža**: kartna mreža georeference modela (prikazana samo, če IFC vsebuje kartno pretvorbo), v metrih ali v enoti, ki jo izberete.
   - Stolpci **PNEZD** (točka, severna, vzhodna, višina, opis), **PENZD** ali **XYZ**; **CSV** (vejice) ali **TXT** (tabulatorji).
4. Pritisnite {{ui:Izdelaj točke}}: seznam jih prikaže, pogled pa jih označi modro. {{ui:Prenesi točke}} zapiše datoteko.

Točke so v stalnem vrstnem redu, po vrsti, nato po vrstah čez tloris, zato ponovna izdelava iz istega modela da ista števila. Datoteka je tista, ki jo odpre CivilCraft in jo zapiše ukaz EXPORTPOINTS programa CadCraft: ena točka na vrstico, tri decimalke, opis v narekovajih, kadar vsebuje vejico.

## Preverite izvedene točke

Ko ekipa pošlje, kar je izmerila, izberite **toleranco** v milimetrih in način seznanjanja točk: po **številki točke** (ohranili so vaše številke) ali po **najbližjem posnetku**. Nato pritisnite {{ui:Preberi točke izvedenega stanja…}}. Datoteko preberite v istih enotah in koordinatah, v katerih ste jo zapisali.

Vsaka projektna točka je nato **znotraj** tolerance, **zunaj** nje, **ni izmerjena**, vsak posnetek, ki ga nihče ni zahteval, pa je **dodaten**. Tabela navaja razlike v enoti, ki jo izberete v orodni vrstici, čevlji (ft) so prikazani kot decimalni palci (in): izvedeno minus projektno za vzhod, sever, višino in razdaljo v tlorisu. Pogled označi vsako točko zeleno ali rdeče, z črto do posnetka, sivo, če ni bila izmerjena. {{ui:Poročilo (CSV)}} zapiše celotno primerjavo.

Tu se model ne spremeni. Še ni izdelano: zakoličevanje z robov plošč, presečišč mreže ali odprtin, ki jih program naredi namesto vas, in pošiljanje točk neposredno v instrument. Uporabite datoteko.
