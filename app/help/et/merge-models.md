---
title: Ühenda kahe inimese muudatused ühest mudelist
summary: Lase git, Fossil või Mercurial ühendada kahe muudetud koopia sama IFC-mudeli objektid objekt-objektilt, nii et kaks inimest saavad joonistada ühele hoonele ja liita oma töö.
keywords: ühenda, git, fossil, mercurial, versioonihaldus, konflikt, kolmepoolne, cadcraft merge, gitattributes, ifc, globalid, meeskond, kaks koopiat, harud
from: 50733df8
---

Kaks inimest võtavad sama hoone koopia, üks joonistab idatiiba ja teine läänetiiba, ning hiljem tuleb koopiad muuta üheks. Kui nad puudutasid erinevaid objekte, saab seda teha programm inimese asemel.

## Mis selle töötamise teeb

Iga sein, uks, korrus, ruum ja omaduste komplekt IFC-failis on GlobalId, mis ei muutu. Ühendamine otsib objekte selle id järgi, mitte failis antud numbri järgi (`#123`), sest numbrid muutuvad, kui programm salvestab. Objektidest sõltuvad osad, millel endal id ei ole (paigutused, kujud, ühikud), võrreldakse sisu järgi.

Mõlemad koopiad peavad olema sama IFC-versiooniga (2x3, 4 või 4.3). Ühendamine jätab sinu faili nagu see on, sama järjekorra ja numbritega, ning lisab, mis on uus, nii et ühendamise git diff näitab ainult seda, mida ühendamine muutis.

## Seadistus

Git vajab kahte rida kord hoidla kohta:

```
# .gitattributes
*.ifc merge=cadcraft

# üks kord igas arvutis
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilma gitita käivita `cadcraft merge <base> <ours> <theirs>`. Fossil ja Mercurial võtavad samad kolm faili oma ühendamistööriista seadistuses. Midagi ei laadita üles; kõik töötab sinu arvutis.

## Reeglid

- Atribuut, mis muudeti ainult ühel poolel, võetakse. Sama muudatus mõlemal poolel võetakse üks kord.
- Sama atribuut muudetud kahel viisil (sama korrus nimetati kahel viisil ümber) on **konflikt**: sinu pool jääb alles ja aruanne loetleb mõlemad. Ava tulemus ja paranda käsitsi.
- Asjade loend (korruse seinad, komplekti omadused) ühendatakse komplektina: see, mida kumbki pool lisas, jääb alles, ja see, mida kumbki pool eemaldas, eemaldatakse. Kaks inimest, kes lisavad sama korruse seintele seinu, ei lähe konflikti.
- Objekt, mis lisati kummalegi poolele, jääb alles koos oma kuju ja omadustega. Eemaldatud ühel poolel ja puutumata teisel: eemaldatud. Eemaldatud ühel poolel ja muudetud teisel: eemaldatud ning teatatud.
- Faili ajatempel ja autor ning iga objekti omanikuajalugu jäävad sinu omaks.

Geomeetria ühendatakse tervikuna: seina kuju tuleb ühelt poolelt, mitte kunagi punkthaaval segatuna. Pakitud IFC- ja IFCX-faile ei ühendata. Pärast ühendamist ava tulemus BimCraft'is ja vaata enne salvestamist probleemide paneeli.
