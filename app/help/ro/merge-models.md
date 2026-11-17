---
title: Îmbinarea modificărilor a două persoane dintr-un model
summary: Lăsați git, Fossil sau Mercurial să îmbine două copii editate ale aceluiași model IFC, obiect cu obiect, astfel încât două persoane să poată desena pe aceeași clădire și să unească lucrarea.
keywords: îmbinare, git, fossil, mercurial, control al versiunilor, conflict, trei căi, cadcraft merge, gitattributes, ifc, globalid, echipă, două copii, ramuri
from: 50733df8
---

Două persoane iau o copie a aceleiași clădiri, una desenează aripa de est și una pe cea de vest, iar mai târziu copiile trebuie să devină una singură. Dacă au atins obiecte diferite, un program poate face asta în locul unei persoane.

## Ce face să funcționeze

Fiecare perete, ușă, nivel, cameră și set de proprietăți dintr-un fișier IFC are un GlobalId care nu se schimbă niciodată. Îmbinarea caută obiectele după acel identificator, nu după numărul pe care îl dă fișierul (`#123`), pentru că numerele se schimbă când un program salvează. Părțile atârnate de un obiect care nu au identificator propriu (plasări, forme, unități) sunt comparate după ce conțin.

Ambele copii trebuie să aibă aceeași versiune IFC (2x3, 4 sau 4.3). Îmbinarea păstrează fișierul așa cum este, cu ordinea și numerele sale, și adaugă ce este nou, astfel încât un diff git al îmbinării arată doar ce a schimbat îmbinarea.

## Configurați

Git are nevoie de două linii o singură dată pentru fiecare depozit:

```
# .gitattributes
*.ifc merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Fără git, rulați `cadcraft merge <base> <ours> <theirs>`. Fossil și Mercurial iau aceleași trei fișiere în propria lor setare de instrument de îmbinare. Nimic nu se încarcă; totul rulează pe calculator.

## Regulile

- Un atribut modificat doar pe o parte este preluat. Aceeași modificare pe ambele părți este preluată o singură dată.
- Același atribut modificat în două feluri (același nivel redenumit în două feluri) este un **conflict**: partea proprie rămâne, iar raportul listează ambele. Deschideți rezultatul și corectați-l manual.
- O listă de lucruri (pereții unui nivel, proprietățile unui set) se îmbină ca o mulțime: ce a adăugat oricare parte se păstrează, iar ce a eliminat oricare parte se elimină. Două persoane care adaugă fiecare pereți la același nivel nu intră în conflict.
- Un obiect adăugat pe oricare parte se păstrează, cu forma și proprietățile sale. Eliminat pe o parte și neatins pe cealaltă: eliminat. Eliminat pe o parte și modificat pe cealaltă: eliminat și raportat.
- Marca de timp și autorul fișierului, precum și istoricul proprietarului fiecărui obiect rămân cele din copia fiecăruia.

Geometria se îmbină întreagă: forma unui perete vine dintr-o parte, niciodată amestecată punct cu punct. Fișierele IFC comprimate și IFCX nu se îmbină. După o îmbinare, deschideți rezultatul în BimCraft și uitați-vă în panoul {{ui:Probleme}} înainte de a salva.
