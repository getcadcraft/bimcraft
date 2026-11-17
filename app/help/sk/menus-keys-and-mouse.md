---
title: Ponuky, klávesy a myš
summary: Vyberte štýl ponuky, ktorý zodpovedá vášmu spôsobu práce, priraďte ľubovoľnému príkazu vlastný kláves, presúvajte príkazy medzi ponukami a nastavte, čo robia koliesko a každé tlačidlo myši.
keywords: štýl ponuky, ponuky, panel ponuky, pás kariet, riadok príkazov, klávesové skratky, horúce klávesy, klávesy, prispôsobiť, premapovať, znova priradiť, myš, koliesko, obrátiť, smer zoomu, stredné tlačidlo, posun, orbit, dvojpísmenové klávesy, export, import, prepínanie, známy
from: a424e836
---

Príkazy v programe BimCraft sú rovnaké bez ohľadu na to, akou cestou sa k nim dostanete. **Štýl ponuky** rozhoduje iba o tom, kde sa príkazy na obrazovke nachádzajú, ako sa tam volajú a ktoré klávesy ich spustia, takže si môžete zachovať zaužívané návyky. Vyberte ho v {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Ponuky, klávesy a myš}}; zmena sa prejaví hneď a tento prehliadač si ju zapamätá.

## Päť štýlov

| Štýl | Čo dostanete |
|---|---|
| {{ui:CadCraft}} | Vlastný panel nástrojov a klávesy programu BimCraft ({{key:W}} stena, {{key:D}} dvere, {{key:N}} okno, {{key:X}} rez, {{key:F}} prispôsobiť). Východiskový štýl. |
| {{ui:Návrh domu}} | Panel ponuky (Súbor, Upraviť, Zostava, Knižnica, 3D, CAD, Nástroje, Pohľad) nad radom stavebných nástrojov, tak ako ich usporadúvajú programy na návrh obytných domov. Rovnaké jednopísmenové klávesy plus {{key:Mod+L}} pre knižnicu, {{key:F9}} pre 3D pohľad, {{key:F10}} pre pôdorys a {{key:F11}} pre oba. |
| {{ui:Pás kariet BIM}} | Karty s veľkými tlačidlami (Architektúra, Vložiť, Anotovať, Upraviť, Pohľad, Výstup) s ponukou Súbor a rýchlymi tlačidlami vpravo. Dvojpísmenové klávesy: {{key:W}} potom {{key:A}} pre stenu, {{key:D}} {{key:R}} dvere, {{key:W}} {{key:N}} okno, {{key:S}} {{key:C}} rez, {{key:Z}} {{key:F}} prispôsobiť. Stredné tlačidlo posúva; {{key:Shift}} a stredné tlačidlo orbitujú. |
| {{ui:Klasické kreslenie}} | Malý pás kariet a riadok príkazov pre tých, ktorí príkazy píšu: WALL, DOOR, WINDOW, ROOF, U (späť), ZOOM, SECTION, PLOT, INSERT, HELP. Začnite písať kdekoľvek a písmená sa dostanú na riadok príkazov; {{key:Enter}} spustí príkaz, {{key:Enter}} bez zadania zopakuje posledný príkaz a {{key:Esc}} ho vymaže. |
| {{ui:Prehliadač}} | Na otváranie a kontrolu modelov, nie na ich kreslenie: ponuky {{ui:Súbor}}, {{ui:Pohľad}}, {{ui:Zobraziť}}, {{ui:Skontrolovať}} a {{ui:Upraviť}} nad radom nástrojov na prezeranie (prispôsobiť, pohľad zhora, spredu, zboku, rez, merať, skryť, izolovať, priehľad, zobraziť všetko, prechádzka). Nástroje na stavbu čakajú v ponuke {{ui:Model}} na konci. Rovnaké klávesy ako vo vlastnom štýle programu BimCraft. |

Ponuky a pásy kariet sa zobrazia po otvorení modelu alebo po začatí novej stavby; dovtedy panel vľavo otvára súbory a začína stavby.

:::tip
Kláves, ktorý patrí do vlastného rozloženia programu BimCraft, ale nie do štýlu, ktorý ste vybrali, nerobí nič, a stavový riadok uvedie, kam sa jeho príkaz presunul ("V Pás kariet BIM, rez je SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šípky si vždy zachovávajú svoj význam a spustený nástroj si ponecháva vlastné klávesy: {{key:R}} a {{key:Tab}} pri umiestňovaní, {{key:W}} {{key:A}} {{key:S}} {{key:D}} pri prechádzke, {{key:H}} pri nástrojoch dvere a okno, čísla pri zadávaní dĺžky.
:::

## Prispôsobte si to

1. Vyberte štýl, ktorý sa najviac približuje vašej predstave, a potom kliknite na {{ui:Prispôsobiť…}}.
2. Na {{ui:Klávesy a ponuky}} nájdite príkaz (pomôže vyhľadávacie pole). Kliknite na {{ui:Pridať kláves}} a stlačte kláves, alebo dva klávesy za sebou pre dvojpísmenový kláves. Kliknutím na kláves ho odstránite.
3. Pri paneli ponuky alebo páse kariet {{ui:Kde sa nachádza}} presunie príkaz do inej ponuky alebo panela, prípadne ho nechá iba ako {{ui:Iba klávesy}}.
4. Na {{ui:Myš}} nastavte koliesko, tlačidlá, ktoré posúvajú pôdorys, a to, čo robí každé tlačidlo v 3D pohľadoch.
5. Dajte mu názov a kliknite na {{ui:Uložiť}}.

Uloženie vstavaného štýlu vytvorí vašu vlastnú kópiu ("Môj návrh domu"); vstavaný štýl sa nikdy nezmení. Kláves priradený dvom príkazom alebo kláves, ktorý by sa spustil skôr, než by sa dal napísať dvojpísmenový kláves, sa zobrazí červenou farbou a pred uložením ho treba opraviť.

## Myš

- **Koliesko myši**: {{ui:Posun nahor priblíži}} (východiskové) alebo {{ui:Posun nahor oddiali}}, a to ako rýchlo. Štipnutie na touchpade vždy zväčšuje alebo zmenšuje podľa pohybu prstov.
- **Posun pôdorysu a výkresov**: ktorýmkoľvek z ľavého, stredného alebo pravého tlačidla. {{key:Space}} a ťahanie tiež posúva; ťahanie ľavým tlačidlom posúva len tam, kde by klik nič nevybral ani nenakreslil.
- **Ťahanie v 3D pohľadoch**: {{ui:Vlastné pre každý pohľad}} ponechá tlačidlá programu BimCraft (ľavé orbituje, pravé posúva). Alebo nastavte každé tlačidlo na orbit, posun, zoom alebo na nič; {{key:Shift}} s tlačidlom zamení orbit a posun. Klik bez ťahania stále vyberá.

## Vezmite si to so sebou

{{ui:Exportovať}} uloží používaný štýl ako malý súbor `.ccinput.json`; {{ui:Importovať…}} pridá jeden zo súboru z iného počítača alebo od kolegu. Importovaný súbor môže odkazovať iba na vlastné príkazy programu BimCraft: čokoľvek iné v ňom (príkaz, ktorý táto verzia nemá, kláves, ktorý tu nefunguje) sa vynechá a uvedie sa v stavovom riadku. {{ui:Zmazať tento štýl}} odstráni niektorý z vašich vlastných.

:::note
Tieto nastavenia zostávajú v tomto prehliadači. {{ui:Použiť tento štýl v každej aplikácii}} pod kartami štýlov spôsobí, že sa každá aplikácia otvorí v zodpovedajúcom štýle (vlastný panel nástrojov, panel ponuky, pás kariet alebo klasické kreslenie; {{ui:Prehliadač}} patrí len programu BimCraft a inde nemá zodpovedajúci štýl), so zmenami, ktoré ste urobili v každej aplikácii. Aplikácia bez zodpovedajúceho štýlu si ponechá vlastný. Výber iného štýlu v jednej aplikácii mení iba túto aplikáciu.
:::

Súvisiace: [Klávesnica a myš](topic:keyboard) · [Nastavenia programu BimCraft](topic:settings) · [Prechod z iných programov pre BIM a kreslenie](topic:coming-from)
