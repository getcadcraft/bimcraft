---
title: Zidovi iz obrađenog crteža
summary: Pretvorite DWG ili DXF osnovu u zidove, vrata i prozore na nivou i zadržite crtež ispod osnove kao referencu.
keywords: dwg, dxf, obrada, obrađeno, uvezi osnovu, pretvori, cad u bim, 2D u 3D, zidovi iz linija, slojevi, blokovi, vrata iz blokova, podloga, referentni crtež, pozadina, xref, aplikacija za crtanje
from: 3bf213f1
---

## Šta ćete uraditi

Koristite osnovu koju ste (ili neko drugi) nacrtali u aplikaciji za crtanje kao početak modela: njene linije zidova postaju zidovi, a njeni blokovi vrata i prozora postaju vrata i prozori.

## Koraci

1. Uključite {{ui:Crtanje}} i izaberite nivo koji crtež prikazuje u listi nivoa osnove.
2. Izaberite {{ui:Verzija}} › {{ui:Iz crteža…}}, zatim {{ui:Odaberi crtež…}} i izaberite DWG ili DXF.
3. U dijalogu:
   - **Jedinice crteža** dolaze iz crteža; izaberite druge ako su pogrešne (osnova nacrtana u stopama, a pročitana u inčima, bude dvanaest puta premala).
   - **Slojevi sa zidovima**: označite slojeve na kojima su linije zidova. Slojevi čiji nazivi sadrže „wall“ (zid) su označeni za vas.
   - **Linije su**: **obje strane svakog zida** (uobičajen način crtanja osnova: svaki par paralelnih linija do 600 mm razmaka postaje jedan zid debljine tog razmaka), **osne linije zidova**, ili **jedna strana** sa zidom s lijeve ili desne strane. Uz osne linije ili jednu stranu, tip zida određuje debljinu.
   - **Tip zida** i **Visina zida**, kao za alat {{ui:Zid}}.
   - **Blokovi**: izaberite tip vrata ili prozora za svaki blok koji je vrata ili prozor, ili ga izostavite. Blokovi čiji nazivi sadrže „door“ (vrata) ili „window“ (prozor) biraju se za vas. Svaki se stavlja u zid na kojem stoji, širok koliko je blok duž zida; vrata se otvaraju na stranu na koju je nacrtan njihov zamah.
   - **Gdje ide**: na koordinate samog crteža, ili s njegovim donjim lijevim uglom na ishodištu osnove.
   - **Zadrži crtež ispod osnove ovog nivoa**: ostavite označeno da vidite crtež kao tanke linije ispod onoga što pravite.
4. Linija ispod izbora kaže koliko će zidova, vrata i prozora napraviti. Kliknite {{ui:Napravi ih}}.

## Šta treba da vidite

- Zidovi, vrata i prozori na nivou, spojeni tamo gdje se sastaju, sa prostorijama koje zatvaraju; sve je jedan korak, pa ga {{key:Mod+Z}} vraća.
- Crtež kao tanke linije ispod osnove. {{ui:Verzija}} › {{ui:Iz crteža…}} navodi crteže sačuvane na nivou, svaki s {{ui:Ukloni}}; uklanjanje jednog ostavlja zidove.
- U IFC datoteci sačuvani crtež je napomena na nivou (njegove linije), pa je vide i drugi BIM programi.

:::note
PDF ili sken također rade: vidi [Zidovi iz skupa planova](topic:walls-from-plans). Lukovi se izostavljaju (BimCraft crta ravne zidove), kao i linije unutar blokova. Linije bez para u „obje strane“ se broje u dijalogu i izostavljaju: nacrtajte te zidove alatom {{ui:Zid}} ili ih dotjerajte s {{ui:Izmijeni}} › {{ui:Odsijeci / produži}} (vidi [Odsijecanje, produženje i spajanje zidova](topic:trim-extend-walls)).
:::

:::tip
Ocrtali ste sken u aplikaciji za crtanje? Otvorite i sken ovdje i provjerite zidove prema njemu: vidi [Model iz skena](topic:model-from-a-scan).
:::
