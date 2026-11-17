---
title: Nechajte AI asistenta pracovať s vaším modelom
summary: Zapnite asistentov v Nastaveniach, aby asistent na vašom počítači mohol nájsť prvky, prečítať ich vlastnosti, izolovať ich v pohľade a kresliť steny, dvere, okná, podlažia, úrovne a mriežky cez CadCraft Studio. Vypnuté, kým ho nezapnete.
keywords: ai, asistent, mcp, skript, automatizácia, studio, nájsť prvky, izolovať, vlastnosti, oprávnenia, odpojiť, aktivita, kresliť steny, pridať dvere, pridať okná, úrovne, mriežky, podlažia, späť, uložiť, príkazový riadok, cli, bez okna, použitie s AI asistentmi
from: c5ee595b
---

## Čo sa naučíte

Ako necháte AI asistenta (akéhokoľvek asistenta, ktorý hovorí MCP) nahliadnuť do otvoreného modelu IFC a kresliť v ňom, čo môže a čo nemôže, a ako ho zastavíte.

## Čo môže asistent v BimCraft robiť

| Žiada si | Čo sa stane | Potrebuje |
|---|---|---|
| Nájsť prvky | Dostane zoznam prvkov podľa triedy, podlažia, názvu alebo hodnoty vlastnosti, ako to robí **Nájsť** | Čítanie |
| Prečítať vlastnosti | Dostane atribúty jedného prvku, jeho typ, sady vlastností a množstvá, ako ich zobrazuje **Vlastnosti** | Čítanie |
| Opísať model, vypísať steny | Dostane úrovne, steny, dvere, okná, miestnosti, podlažia, mriežky a stĺpy a koniec, typ a výšku každej steny | Čítanie |
| Izolovať, priehľadne, skryť alebo zobraziť | 3D pohľad sa zmení, ako keby ste použili ponuku {{ui:Show}} | Zmena pohľadu a kreslenie |
| Kresliť steny, dvere, okná, podlažia, úrovne alebo mrežové čiary | Model sa zmení, ako keby ste použili nástroje {{ui:Draw}}: steny sa spoja, miestnosti, podlažia a strechy nasledujú | Zmena pohľadu a kreslenie |
| Zmeniť názov alebo hodnotu vlastnosti | Názov, popis, objektový typ alebo značku jedného prvku, alebo jednu hodnotu vlastnosti. Hodnota, ktorú zdieľa s ďalšími prvkami, sa pre tento prvok najprv skopíruje; hodnota jeho typu sa mení, len keď to asistent povie, lebo každý prvok tohto typu nasleduje | Zmena pohľadu a kreslenie |
| Presunúť, zmazať, meniť steny, dvere a okná | Prvky sa presunú alebo zmažú spolu s tým, čo nesú; steny nakreslené nástrojmi {{ui:Draw}} sa menia podľa koncov alebo typu, dvere a okná podľa miesta, veľkosti alebo typu, a miestnosti a spoje nasledujú | Zmena pohľadu a kreslenie |
| Nastaviť, usporiadať a čítať tabuľku | „Tabuľka dverí podľa podlažia, s požiarnou odolnosťou a kovaním“: asistent pomenuje tabuľku, jej stĺpce (vlastnosť alebo značka sa stane stĺpcom) a jej zoskupenie; BimCraft ju naplní z modelu a rozloží, pričom to, čo asistent neuviedol, prevezme zo štandardu kancelárie. Nastavenie sa pridá do vášho zoznamu {{ui:Schedules}}. Každý riadok, ktorý dostane späť, uvádza svoje prvky, aby ich mohol vybrať | Čítanie na čítanie; zmena pohľadu a kreslenie na uloženie nastavenia |
| Exportovať tabuľku | CSV, Excel alebo text oddelený tabulátormi na vloženie do Google Sheets (nič sa neodosiela Googlu) | Export |
| Čítať a nastaviť povrchové úpravy miestností | Typy úprav, povrchová úprava podlahy, steny a stropu každej miestnosti, zóny; plochy, počty dlaždíc a objemy podkladu sa potom získajú z tabuliek úprav | Čítanie; na nastavenie zmena pohľadu a kreslenie |
| Vybrať prvky, vrátiť späť vlastné kroky | Prvky sa vyberajú vo pohľade; jeho posledný krok sa vráti späť | Zmena pohľadu a kreslenie |
| Uložiť | Nový súbor IFC so všetkými zmenami, ako ho vytvorí {{ui:Save as IFC}} (pôvodný sa nikdy nemení) | Uloženie |
| Exportovať USD | Otvorené modely ako OpenUSD (.usda, .usdc alebo .usdz), ako ich zapíše {{ui:USD}} na paneli nástrojov | Export |
| Vykresliť obrázok, spustiť rad vykresľovania | Obrázok 3D pohľadu, ako ho vytvorí dialóg {{ui:Render}} s vašimi nastaveniami vykresľovania, pokiaľ nežiada iné, alebo kvalitné obrázky pridané do radu dialógu a vykreslené jeden za druhým (rad potrebuje WebGPU). Model sa nemení ([Vykreslenie obrázka](topic:render)) | Export |

Každá zmena, ktorú asistent urobí, je jeden krok v **Zmeny**, s názvom „Asistent: …“ (napríklad „Asistent: pridať 4 steny“), takže {{key:Mod+Z}} vráti späť celú jeho akciu a vidíte, čí krok to bol. V okne nemôže otvárať súbory: otvoríte model; pracuje s tým, ktorý je otvorený.

## Zapnutie

Asistenti sa k BimCraft dostanú cez CadCraft Studio na vašom počítači; bežný prehliadač nemá cestu dnu.

1. Otvorte {{ui:Settings}} a vyberte kartu **BimCraft**.
2. V časti **Asistenti** zaškrtnite **Povoliť AI asistentom a skriptom používať BimCraft**.
3. **Čítanie** je za vás zaškrtnuté. Zaškrtnite **Zmena pohľadu a kreslenie** tiež, ak asistent smie izolovať a skrývať prvky a kresliť, a **Uloženie**, ak smie model uložiť ako nový súbor.
4. Pripojte asistenta v Studio (Studio zobrazí adresu a nastavenia, ktoré do neho vložíte).

## Keď je asistent pripojený

Poznámka v hornej časti pravého panela hovorí, ktorý asistent je pripojený a čo môže. Kliknite na {{ui:Disconnect}}, aby ste okamžite ukončili jeho reláciu; aby pokračoval, musí sa znova pripojiť.

**Aktivita**, pod **Asistenti** v Nastaveniach, vypisuje každé volanie, ktoré asistent urobil, od najnovšieho, s tým, či prebehlo úspešne.

:::tip
Pýtajte sa jednoduchými slovami, napríklad „izoluj vonkajšie steny na podlaží 1“, „ktoré dvere nemajú požiarnu odolnosť?“ alebo „nakresli miestnosť 6 x 4 metre na úrovni 1 s dverami v južnej stene“. Asistent nájde prvky a ukáže ich vo vašom pohľade, alebo ich nakreslí.
:::

## Bez okna: skripty a príkazový riadok

Tie isté nástroje na kreslenie fungujú aj na súboroch IFC v priečinkoch, ktoré určíte, bez otvoreného okna: MCP server a príkazový riadok CadCraft dokážu začať novú budovu alebo otvoriť súbor IFC, opísať ho, pridať steny, dvere, okná, podlažia, úrovne a mriežky, vrátiť späť a uložiť ho ako nový súbor `.ifc`. Vy rozhodujete, ktoré priečinky môže použiť a či môže niečo meniť alebo ukladať.

## Vypnutie

Odškrtnite **Povoliť AI asistentom a skriptom používať BimCraft**. Každý asistent sa okamžite odpojí a nastavenie sa zachová na nabudúce.

## Pozri tiež

- [Recepty pre AI asistentov](common:assistants-recipes): prepracované príklady, každý s nástrojmi, ktoré volá.
- [Nájdenie prvkov podľa triedy, názvu alebo vlastnosti](topic:find)
- [Skrytie, izolácia a priehľad prvkov](topic:hide-and-isolate)
- [Nastavenia BimCraft](topic:settings)
