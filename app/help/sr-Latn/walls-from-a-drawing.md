---
title: Zidovi iz prenesenog crteža
summary: Pretvorite DWG ili DXF osnovu u zidove, vrata i prozore na nivou i zadržite crtež ispod osnove kao referencu.
keywords: dwg, dxf, prenos, prenesen, uvoz osnove, konvertovanje, cad u bim, 2d u 3d, zidovi iz linija, slojevi, blokovi, vrata iz blokova, podloga, referentni crtež, pozadina, xref, program za crtanje
from: 3bf213f1
---

## Šta ćete uraditi

Upotrebite osnovu koju ste (ili neko drugi) nacrtali u programu za crtanje kao početak modela: njene linije zidova postaju zidovi, a njeni blokovi vrata i prozora postaju vrata i prozori.

## Koraci

1. Uključite {{ui:Crtanje}} i izaberite nivo koji crtež prikazuje u listi nivoa osnove.
2. Izaberite {{ui:Verzija}} › {{ui:Iz crteža…}}, zatim {{ui:Izaberi crtež…}} i izaberite DWG ili DXF.
3. U dijalogu:
   - **Jedinice crteža** dolaze iz crteža; izaberite druge ako su pogrešne (osnova nacrtana u stopama, a pročitana u inčima, biće dvanaest puta premala).
   - **Slojevi sa zidovima**: štiklirajte slojeve na kojima su linije zidova. Slojevi čija imena kažu „zid” su štiklirani za vas.
   - **Linije su**: **obe strane svakog zida** (uobičajen način crtanja osnova: svaki par paralelnih linija na rastojanju do 600 mm postaje jedan zid, debeo koliko je razmak), **osne linije zidova**, ili **jedna strana** sa zidom levo ili desno od nje. Uz osne linije ili jednu stranu, tip zida određuje debljinu.
   - **Tip zida** i **Visina zida**, kao za alat {{ui:Zid}}.
   - **Blokovi**: izaberite tip vrata ili prozora za svaki blok koji je vrata ili prozor, ili ga izostavite. Blokovi čija imena kažu „vrata” ili „prozor” biraju se za vas. Svaki se stavlja u zid na kojem stoji, širine koliko je blok duž zida; vrata se otvaraju na onu stranu na kojoj je nacrtan njihov luk.
   - **Gde ide**: na sopstvenim koordinatama crteža, ili sa donjim levim uglom na početku koordinatnog sistema osnove.
   - **Zadrži crtež ispod osnove ovog nivoa**: ostavite štiklirano da vidite crtež kao tanke linije ispod onoga što pravite.
4. Linija ispod izbora kaže koliko će zidova, vrata i prozora napraviti. Kliknite {{ui:Napravi ih}}.

## Šta treba da vidite

- Zidovi, vrata i prozori na nivou, spojeni tamo gde se sastaju, sa prostorijama koje zatvaraju; sve je jedan korak, pa {{key:Mod+Z}} to vraća.
- Crtež kao tanke linije ispod osnove. {{ui:Verzija}} › {{ui:Iz crteža…}} navodi crteže sačuvane na nivou, svaki sa {{ui:Ukloni}}; uklanjanje jednog ostavlja zidove.
- U IFC datoteci sačuvani crtež je napomena na nivou (njegove linije), pa je pokazuju i drugi BIM programi.

:::note
PDF ili skeniranje takođe radi: videti [Zidovi iz skupa planova](topic:walls-from-plans). Lukovi se izostavljaju (BimCraft crta prave zidove), kao i linije unutar blokova. Linije bez para u „obe strane” se broje u dijalogu i izostavljaju: nacrtajte te zidove alatom {{ui:Zid}}, ili ih dotererajte alatom {{ui:Izmena}} › {{ui:Skrati / produži}} (videti [Skratite, produžite i spojite zidove](topic:trim-extend-walls)).
:::

:::tip
Prenosite preko skeniranja u programu za crtanje? Otvorite i skeniranje ovde, pa proverite zidove prema njemu: videti [Model iz skeniranja](topic:model-from-a-scan).
:::
