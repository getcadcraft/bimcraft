---
title: Preverite risbo v pogledu tiska
summary: Preklopite DWG ali DXF v pogled tiska, da ga vidite črno na belem z debelinami črt in brez slojev, ki se nikoli ne natisnejo.
keywords: tisk, izris, predogled, predogled izrisa, debelina črt, lineweight, enobarvno, črno-belo, defpoints, brez izrisa
from: 1a59c23e
---

## Kaj boste naredili

Preverite, kako bo list izgledal na papirju, preden ga natisnete iz programa, ki ga je ustvaril: črno na belem, debeline črt v pravi širini in brez slojev, ki so nastavljeni na neizpis.

## Koraki

1. Odprite risbo DWG ali DXF.
2. Kliknite zavihek lista nad risbo.
3. Kliknite {{ui:Pogled tiska}} na koncu zavihkov ali pritisnite {{key:P}}.
4. Približajte detajl, da primerjate debele in tanke črte.
5. Znova kliknite {{ui:Pogled tiska}} ali pritisnite {{key:P}}, da se vrnete na običajne barve.

## Kaj naj vidite

- Bel papir na sivi mizi, vsaka črta in vsako besedilo črno, ne glede na temo.
- Debeline črt: na listu je vsaka debelina narisana v svoji pravi širini na papirju, zato je črta 0.5 mm dvakrat debelejša od črte 0.25 mm pri vsaki povečavi. Črta ni nikoli narisana tanjša od svoje debeline na zaslonu.
- Sloji, nastavljeni na neizpis, in sloj DEFPOINTS so skriti.
- Gumb {{ui:Pogled tiska}} ostane pritisnjen. Pogled tiska ostane vklopljen, ko preklopite liste ali odprete drugo risbo, dokler ga ne izklopite.

V {{ui:Model}} pogled tiska uporablja samo debeline zaslona (tanke črte po eno slikovno piko, težje malo debelejše), ker prostor modela nima velikosti papirja.

## Pogoste napake

- **Pričakovanje, da se bo natisnilo.** Pogled tiska je predogled. Tiskanje in izvoz v PDF v BimCraftu še nista izdelana; natisnite iz programa, ki je risbo ustvaril.
- **Pričakovanje tiskalnih slogov.** Tabele peres in barve tiskalnih slogov se ne berejo. Vse je navadno črno.
- **Pritisk na P med tipkanjem.** {{key:F}} in {{key:P}} ne naredita ničesar, medtem ko tipkate v polju ali medtem ko je prikazana razpredelnica opreme.
