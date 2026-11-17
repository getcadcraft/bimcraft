---
title: Zidovi iz ucrtanog crteža
summary: Pretvorite DWG ili DXF tlocrt u zidove, vrata i prozore na razini i zadržite crtež ispod tlocrta kao referencu.
keywords: dwg, dxf, ucrtavanje, ucrtan, uvoz tlocrta, pretvorba, cad u bim, 2d u 3d, zidovi iz linija, slojevi, blokovi, vrata iz blokova, podloga, referentni crtež, pozadina, xref, aplikacija za crtanje
from: 3bf213f1
---

## Što ćete učiniti

Upotrijebite tlocrt koji ste (ili netko drugi) nacrtali u aplikaciji za crtanje kao početak modela: njegove linije zidova postaju zidovima, a njegovi blokovi vrata i prozora postaju vratima i prozorima.

## Koraci

1. Uključite {{ui:Crtanje}} i odaberite razinu koju crtež prikazuje u popisu razina tlocrta.
2. Odaberite {{ui:Izgradnja}} › {{ui:Iz crteža…}}, zatim {{ui:Odaberi crtež…}} i odaberite DWG ili DXF.
3. U dijaloškom okviru:
   - **Jedinice crteža** dolaze iz crteža; odaberite druge ako su pogrešne (tlocrt nacrtan u stopama, a očitan kao inči, dvanaest je puta premali).
   - **Slojevi sa zidovima**: označite slojeve na kojima su linije zidova. Slojevi čiji nazivi kažu „wall“ označeni su za vas.
   - **Linije su**: **obje plohe svakog zida** (uobičajen način crtanja tlocrta: svaki par paralelnih linija razmaknutih do 600 mm postaje jedan zid debljine tog razmaka), **središnje linije zidova** ili **jedna ploha** sa zidom s lijeve ili desne strane. Uz središnje linije ili jednu plohu, vrsta zida postavlja debljinu.
   - **Vrsta zida** i **Visina zida**, kao za alat {{ui:Zid}}.
   - **Blokovi**: odaberite vrstu vrata ili prozora za svaki blok koji je vrata ili prozor, ili ga izostavite. Blokovi čiji nazivi kažu „door“ ili „window“ biraju se za vas. Svaki se stavlja u zid na kojem stoji, širok koliko i blok duž zida; vrata se otvaraju na onu stranu na kojoj je nacrtan njihov zamah.
   - **Gdje ide**: na vlastitim koordinatama crteža, ili s donjim lijevim kutom na ishodištu tlocrta.
   - **Zadrži crtež ispod tlocrta ove razine**: ostavite označeno da vidite crtež kao tanke linije ispod onoga što izrađujete.
4. Redak ispod izbora kaže koliko će zidova, vrata i prozora napraviti. Kliknite {{ui:Izradi ih}}.

## Što biste trebali vidjeti

- Zidovi, vrata i prozori na razini, spojeni tamo gdje se susreću, sa prostorijama koje zatvaraju; sve je jedan korak, pa {{key:Mod+Z}} to vraća.
- Crtež kao tanke linije ispod tlocrta. {{ui:Izgradnja}} › {{ui:Iz crteža…}} navodi crteže zadržane na razini, svaki s {{ui:Ukloni}}; uklanjanje jednog ostavlja zidove.
- U IFC datoteci zadržani crtež je bilješka na razini (njezine linije), pa je vide i drugi BIM programi.

:::note
PDF ili skeniranje također radi: vidi [Zidovi iz skupa tlocrta](topic:walls-from-plans). Lukovi se izostavljaju (BimCraft crta ravne zidove), kao i linije unutar blokova. Linije bez para u „obje plohe“ broje se u dijaloškom okviru i izostavljaju: nacrtajte te zidove alatom {{ui:Zid}} ili ih uredite pomoću {{ui:Izmijeni}} › {{ui:Skrati / produži}} (vidi [Skrati, produži i spoji zidove](topic:trim-extend-walls)).
:::

:::tip
Ucrtali ste preko skena u aplikaciji za crtanje? Otvorite i skeniranje ovdje te provjerite zidove prema njemu: vidi [Model iz skeniranja](topic:model-from-a-scan).
:::
