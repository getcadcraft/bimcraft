---
title: Nechajte AI asistenta pracovať s vaším modelom
summary: Zapnite asistentov v Nastaveniach, aby asistent na vašom počítači mohol nájsť prvky, prečítať ich vlastnosti, izolovať ich v pohľade a kresliť múry, dvere, okná, podlahy, úrovne a osi cez CadCraft Studio. Kým ich nezapnete, sú vypnutí.
keywords: ai, asistent, mcp, skript, automatizácia, studio, nájsť prvky, izolovať, vlastnosti, oprávnenia, odpojiť, aktivita, kresliť múry, pridať dvere, pridať okná, úrovne, osi, podlahy, späť, uložiť, príkazový riadok, cli, bez okna, použiť s AI asistentmi
from: 66d72742
---

## Čo sa naučíte

Ako nechať AI asistenta (ľubovoľného asistenta, ktorý hovorí cez MCP) pozrieť sa do otvoreného IFC modelu a kresliť v ňom, čo môže a čo nemôže a ako ho zastaviť.

## Čo môže asistent robiť v BimCraft

| Žiada si | Čo sa stane | Potrebuje |
|---|---|---|
| Nájsť prvky | Dostane zoznam prvkov podľa triedy, podlažia, názvu alebo hodnoty vlastnosti, ako to robí **Hľadať** | Čítanie |
| Čítať vlastnosti | Dostane atribúty jedného prvku, typ, sady vlastností a množstvá, tak ako ich zobrazuje **Vlastnosti** | Čítanie |
| Opísať model, vypísať múry | Dostane úrovne, múry, dvere, okná, miestnosti, podlahy, osi a stĺpy a koncové body každého múra, jeho typ a výšku | Čítanie |
| Izolovať, priehľad, skryť alebo zobraziť | 3D pohľad sa zmení, ako keby ste použili ponuku {{ui:Zobraziť}} | Zmena pohľadu a kreslenie |
| Kresliť múry, dvere, okná, podlahy, úrovne alebo osi | Model sa zmení, ako keby ste použili nástroje {{ui:Kresliť}}: múry sa spájajú, miestnosti, podlahy a strechy nasledujú | Zmena pohľadu a kreslenie |
| Zmeniť názov alebo hodnotu vlastnosti | Názov, Popis, Typ objektu alebo Značka jedného prvku, alebo hodnota jednej vlastnosti. Hodnota, ktorú zdieľa s inými prvkami, sa pre neho najprv skopíruje; hodnota jeho typu sa zmení len vtedy, keď to asistent povie, lebo každý prvok daného typu nasleduje | Zmena pohľadu a kreslenie |
| Presunúť, zmazať, zmeniť múry, dvere a okná | Prvky sa presunú alebo zmažú spolu s prvkami, ktoré nesú; múry nakreslené nástrojmi {{ui:Kresliť}} sa menia koncami alebo typom, dvere a okná miestom, veľkosťou alebo typom, miestnosti a spoje nasledujú | Zmena pohľadu a kreslenie |
| Nastaviť, usporiadať a čítať tabuľku | "Tabuľka dverí podľa podlažia, s požiarnou odolnosťou a okovaním": asistent pomenuje tabuľku, jej stĺpce (vlastnosť alebo značka sa stane stĺpcom) a jej zoskupenie; BimCraft ju naplní z modelu a rozloží ju, pričom to, čo asistent neuviedol, prevezme z kancelárskeho štandardu. Nastavenie sa pridá do vášho zoznamu tabuliek. Každý riadok, ktorý dostane späť, uvádza svoje prvky, takže ich môže označiť | Čítanie na čítanie; Zmena pohľadu a kreslenie na uloženie nastavenia |
| Exportovať tabuľku | CSV, Excel alebo text oddelený tabulátormi na vloženie do Google Sheets (nič sa neodosiela Googlu) | Export |
| Čítať a nastaviť povrchové úpravy miestností | Typy povrchov, podlahová, stenová a stropná úprava každej miestnosti, zóny; plochy, počty dlaždíc a objemy podkladu potom vychádzajú z tabuliek povrchových úprav | Čítanie; na nastavenie Zmena pohľadu a kreslenie |
| Vybrať prvky, vrátiť späť jeho vlastné kroky | Prvky sa vyberajú v pohľade; jeho posledný krok sa vráti späť | Zmena pohľadu a kreslenie |
| Uložiť | Nový IFC súbor so všetkými zmenami, tak ako ho vytvorí {{ui:Uložiť ako IFC}} (pôvodný sa nikdy nemení) | Uložiť |
| Exportovať USD | Otvorené modely ako OpenUSD (.usda, .usdc alebo .usdz), tak ako ich zapíše {{ui:USD}} na paneli nástrojov | Export |
| Vykresliť obrázok, spustiť front vykresľovania | Obrázok 3D pohľadu, tak ako ho vytvorí dialóg {{ui:Vykresliť}} s vašimi nastaveniami vykresľovania, pokiaľ nežiada iné, alebo kvalitné obrázky pridané do frontu dialógu a vykreslené jeden za druhým (front vyžaduje WebGPU). Nič v modeli sa nemení ([Vykreslenie obrázka](topic:render)) | Export |

Každá zmena, ktorú asistent urobí, je jeden krok v **Zmenách** s názvom "Asistent: …" (napríklad "Asistent: pridať 4 múry"), takže {{key:Mod+Z}} vráti späť celú jeho akciu a vidíte, čí krok to bol. V okne nemôže otvárať súbory: model otvoríte vy; pracuje s tým, ktorý je otvorený.

## Zapnutie

Asistenti sa k BimCraft dostanú cez CadCraft Studio vo vašom počítači; bežný prehliadač k nim nemá cestu.

1. Otvorte {{ui:Nastavenia}} a vyberte kartu **BimCraft**.
2. V časti **Asistenti** zaškrtnite **Povoliť AI asistentom a skriptom používať BimCraft**.
3. **Čítanie** je zaškrtnuté za vás. Zaškrtnite aj **Zmena pohľadu a kreslenie**, ak smie asistent izolovať a skrývať prvky a kresliť, a **Uložiť**, ak smie model uložiť ako nový súbor.
4. Pripojte asistenta v Studiu (Studio zobrazí adresu a nastavenia, ktoré do neho vložiť).

## Keď je asistent pripojený

Poznámka v hornej časti pravého panela hovorí, ktorý asistent je pripojený a čo môže robiť. Kliknutím na {{ui:Odpojiť}} ukončíte jeho reláciu okamžite; aby mohol pokračovať, musí sa znova pripojiť.

**Aktivita** v časti **Asistenti** v nastaveniach vypisuje každé volanie, ktoré asistent urobil, od najnovšieho, s údajom, či prebehlo úspešne.

:::tip
Pýtajte sa jednoduchými slovami, napríklad "izolovať vonkajšie múry na Úrovni 1", "ktoré dvere nemajú požiarnu odolnosť?" alebo "nakresliť miestnosť 6 x 4 m na Úrovni 1 s dverami v južnom múre". Asistent nájde prvky a zobrazí ich vo vašom pohľade, alebo ich nakreslí.
:::

## Bez okna: skripty a príkazový riadok

Rovnaké kresliace nástroje fungujú na IFC súboroch v priečinkoch, ktoré uvediete, bez otvoreného okna: MCP server a príkazový riadok CadCraft môžu začať novú budovu alebo otvoriť IFC súbor, opísať ho, pridať múry, dvere, okná, podlahy, úrovne a osi, vrátiť späť a uložiť ho ako nový súbor `.ifc`. Štyri ďalšie nástroje sú vhodné pre skripty: `ifc_batch` spustí naraz až 200 krokov úprav ako jeden (buď všetko, alebo nič: jeden krok späť vráti späť celú dávku a odmietnutý krok vráti späť ostatné a pomenuje krok); `ifc_describe` vypíše úrovne a každý múr s jeho dverami a oknami; `ifc_render_png` zapíše plochý kontrolný obrázok modelu (bez materiálov, textúr a tieňov) bez okna; `usd_export` zapíše `.usda`, `.usdc` alebo `.usdz`. Na príkazovom riadku `cadcraft bim script.json --from model.ifc -o out.ifc` spustí skript krokov a `--usd`, `--png` a `--plan` zapíšu USD súbor, obrázok alebo pôdorys z toho istého behu. Vy rozhodujete, ktoré priečinky môže používať a či smie niečo meniť alebo ukladať.

## Vypnutie

Odškrtnite **Povoliť AI asistentom a skriptom používať BimCraft**. Každý asistent sa okamžite odpojí a nastavenie sa uchová pre ďalší raz.

## Pozri tiež

- [Recepty pre AI asistentov](common:assistants-recipes): hotové príklady, každý s nástrojmi, ktoré volá.
- [Nájsť prvky podľa triedy, názvu alebo vlastnosti](topic:find)
- [Skrytie, izolácia a priehľad prvkov](topic:hide-and-isolate)
- [Nastavenia BimCraft](topic:settings)
