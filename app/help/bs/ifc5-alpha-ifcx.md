---
title: Otvori i izvezi IFC5 alfa (IFCX datoteke)
summary: Laboratorijska opcija za format datoteka IFC5 alfa (.ifcx): otvori datoteku sa njenim slojevima, vidi šta čitanje nije moglo provjeriti i izvezi otvorene modele. Format se još mijenja, zato prvo pročitaj.
keywords: ifc5, ifcx, alfa, buildingsmart, json, slojevi, šema, laboratorija, količine, qto, izvoz, uvoz
from: cffe1669
---

IFC5 alfa (datoteka sa nastavkom {{ui:.ifcx}}) je format datoteka koji buildingSMART još osmišljava. Nije konačan: datoteke i naše tumačenje mogu se promijeniti. Zato je ovo laboratorijska opcija i zato čitanje ide prvo.

## Uključi

1. Izaberi {{ui:Postavke}}, zatim odjeljak {{ui:IFC5 alfa (IFCX)}} na kartici BimCraft.
2. Označi {{ui:IFC5 alfa (IFCX) – format se još mijenja; prvo pročitaj}}.

Opcija je isključena po zadanim postavkama. Dok je isključena, .ifcx datoteka se odbija porukom koja upućuje ovdje. {{ui:Otvori IFC5 alfa (.ifcx)…}} i dugme {{ui:IFC5 alpha}} za izvoz pojavljuju se kad je uključeno.

## Otvori

- Izaberi .ifcx datoteku pomoću {{ui:Otvori datoteku ili folder}} (zamjenjuje otvoreni model, nakon uobičajenog pitanja o izmjenama), ili
- izaberi {{ui:Otvori IFC5 alfa (.ifcx)…}} i izaberi nekoliko datoteka zajedno: datoteku, njene slojeve i datoteke šeme koje uvozi. Kad je model već otvoren, datoteka se **dodaje pored njega**; x na listi modela ga ponovo uklanja, što je poništavanje.

IFCX datoteka navodi čvorove (putanju, njihovu djecu, ono što nasljeđuju, svoje atribute). Nekoliko datoteka može opisivati isti čvor: kasnija datoteka (sloj) prepisuje atribute ranije, a null dijete uklanja dijete. BimCraft ih složi, pa crta rezultat kao mali IFC4 model: projekt, lokaciju, zgradu, spratove i elemente s imenima, klasama, svojstvima, količinama, bojama i mrežama (mesh).

Ništa se ne preuzima s mreže. Datoteke šeme koje datoteka uvozi (na primjer `ifc@v5a.ifcx`) koriste se samo ako si ih izabrao uz datoteku; inače izvještaj to kaže i atributi se čitaju bez provjere tipa.

### Izvještaj

Nakon otvaranja, izvještaj navodi šta je čitanje našlo: podatke koji ne odgovaraju njihovoj šemi, datoteke šeme koje nisu date, atribute koji ovdje nemaju IFC značenje. Atributi bez mapiranja se **zadržavaju** u modelu, ne odbacuju, i zapisuju se nazad pri izvozu.

## Šta postaje šta

| U IFCX datoteci | U BimCraft-u |
|---|---|
| Čvor sa IFC klasom (projekt, lokacija, zgrada, sprat, zid …) | Odgovarajući IFC4 element; klasa koju ovo čitanje ne poznaje postaje proxy elemenat zgrade |
| Ime koje čvor ima pod svojim roditeljem | Ime elementa |
| Atributi sa vrstom količine (Dužina, Površina, Zapremina, Masa …) | IFC4 skup količina pod nazivom `Qto_IFCX` (IFC4 količine ostaju IFC4 `Qto_*` skupovi) |
| Ostali atributi svojstava | Skup svojstava pod nazivom `Pset_IFCX` |
| Atributi mreže (mesh) i transformacije | Trouglovi elementa i postavljanje; nevidljive mreže se ne crtaju |
| Boja, neprozirnost, materijal, klasifikacija | Stil površine, materijal i klasifikacija elementa |

Jedinice se uzimaju kao metri, sa Z prema gore: alfa kaže da će jedinice biti dokumentovane kasnije.

## Izvoz

Izaberi {{ui:IFC5 alpha}} na traci alata, pročitaj napomenu, zatim {{ui:Izvezi .ifcx}}. Datoteka ima naše zaglavlje (autor CadCraft, verzija ifcx_alpha) i sama kaže da je alfa format. Svaki model se zapisuje u sopstvenim koordinatama datoteke, u metrima, sa imenima, klasama, skupovima svojstava, količinama (kao atributi s vrstom), bojama i trouglovima. Slojevi i nasljeđivanje se zapisuju ravnati. Provjeri datoteku u programu kojem je šalješ.

## Ograničenja

- Zakrivljena geometrija (krive, površine) se ne čita: samo trouglaste mreže.
- Vrata i prozori ugniježđeni u zid postavljaju se na sprat; zid iz kojeg su došli nije povezan.
- Nazivi `Qto_*` IFC4 skupova čuvaju se kao naše grupe atributa (`cadcraft::qto::…`); standardna alfa šema ima samo nekoliko naziva količina.
- Format se može promijeniti pod nama; datoteka napravljena danas možda se neće čitati sutra.
