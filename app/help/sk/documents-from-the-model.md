---
title: Dokumenty z modelu
summary: Napíšte špecifikáciu alebo popis raz ako šablónu s poliami pre množstvá, vlastnosti a štítky a vyplňte ju z otvoreného IFC ako PDF alebo Word dokument.
keywords: dokument, dokumenty, špecifikácia, popis, šablóna, markdown, správa, word, docx, pdf, množstvá, tabuľka, branža, rozpis dverí, povrchové úpravy, documentcad
from: 2b0c9156
---

## Čo budete robiť

Šablóna je text v Markdown s poľami v dvojitých zložených zátvorkách. BimCraft vyplní polia z otvoreného modelu (počty, množstvá podľa typu, vlastnosti, vaše [štítky](topic:tags-and-schedules)) a uloží výsledok ako PDF, Word dokument (.docx) alebo Markdown.

## Postup

1. Otvorte model IFC.
2. V ľavom paneli, pod {{ui:Množstvá}}, otvorte {{ui:Dokumenty z modelu}}.
3. Vyberte šablónu: {{ui:Dvere a kovania}} alebo {{ui:Steny, obklady a povrchové úpravy}}, alebo {{ui:Načítať šablónu (.md)…}} pre vlastnú.
4. Ak šablóna číta štítky, ktoré model ešte nedefinuje, kliknite na {{ui:Pridať štítky tejto šablóny}} a potom označte prvky pod {{ui:Štítky}}.
5. Zmeňte text, ako chcete, a kliknite na {{ui:Zobraziť dokument}}.
6. Kliknite na {{ui:PDF}} (najprv vyberte A4 alebo Letter) alebo na {{ui:Word (.docx)}}.

## Čo by ste mali vidieť

- Vyplnený dokument pod tlačidlami, s jeho tabuľkami.
- Zoznam upozornení, keď sa pole nedá prečítať (štítok, ktorý nie je definovaný, vlastnosť, ktorú model nemá, blok, ktorý nie je nikdy uzavretý); takéto pole sa vytlačí ako `[?…]`.
- Strany PDF s názvom dokumentu a "Strana 1 z 3" v päte každej strany; dlhé tabuľky prenášajú svoj riadok hlavičky.

## Polia

| Pole | Dá |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | názov a popis projektu, názov súboru, dnešný dátum |
| `{{count IfcDoor}}` | koľko je dverí |
| `{{sum IfcWall NetSideArea}}` | súčet s jeho jednotkou |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` a zátvorky) nad výrazmi v hranatých zátvorkách: `[sum …]`, `[count …]` a vnútri each `[qty Width]`. `round n` nastaví desatinné miesta, `unit` pridá jednotku. Čo nedokáže prečítať, alebo delenie nulou, sa vytlačí ako `[?…]` a upozorní |
| `{{qty IfcWall NetSideArea by Type}}` | tabuľka: jeden riadok na typ s jeho počtom a súčtom a riadok celkom |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabuľka, jeden riadok na prvok |
| `{{tag Finish}}` | v cykle hodnota prvku; inde každá použitá hodnota (Dub, Náter) |
| `{{tags}}` | definície štítkov ako tabuľka |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | text raz na prvok; časť za `{{else}}`, keď žiadny nie je |
| `{{#group IfcWall by Type}} … {{/group}}` | text raz na typ, s `{{value}}`, `{{count}}`, `{{sum Length}}` a obyčajným `{{#each}}` vnútri |

Vnútri `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (vlastná hodnota prvku, s jednotkou).

Trieda môže byť viac (`IfcDoor|IfcWindow`) alebo každý prvok (`*`). Ktorúkoľvek zúžte pomocou `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testy sú `=`, `!=`, `~` (obsahuje), `>`, `<`, `>=`, `<=`, `has` a `hasnot`; spojte viac pomocou `and`; hodnotu s medzerami vložte do "úvodzoviek". `sort Name` zoradí cyklus.

## Tabuľky a špecifikácia v dokumente

`{{schedule doors}}` vytlačí tabuľku modelu ako tabuľku vo vašom kancelárskom rozložení: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, alebo názov nastavenia, ktoré ste uložili v Tabuľkách. `{{specification}}` vytlačí špecifikáciu projektu. Šablóny **Výkresové tabuľky** a **Špecifikácia** ich používajú. V náhľade kliknite na číslo z takejto tabuľky a vyberiete prvky, z ktorých pochádza. Pozri [Rozloženie, uloženie a export tabuľky](topic:schedule-layouts) a [Napísanie špecifikácie z modelu](topic:specification).

## Dobré vedieť

- Pole označuje vstavaný údaj (Name, Type, Storey, Class, Material, Mark), štítok (`tag:Fire rating`, alebo jeho názov), vlastnosť (`Pset_WallCommon.FireRating`) alebo len názov vlastnosti (`NetSideArea`, `Width`): holý názov číta vlastnú sadu každého prvku, najprv sady množstiev, takže `Width` na dverách je šírka dverí, nie hrúbka steny. Vo `where` holý názov číta sadu, ktorú má väčšina vybraných prvkov.
- Množstvá sú to, čo hovoria sady množstiev súboru (BimCraft ich zapisuje pre to, čo kreslí); jednotky pochádzajú z nastavení jednotiek súboru.
- Slová poľa (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) zostávajú v angličtine v každom jazyku. Príkladové šablóny sú v angličtine.
- Text z modelu sa nikdy nestane formátovaním: názov s `*` alebo `|` sa vytlačí tak, ako je.
- Šablónu, ktorú ste upravili, uchovajte pomocou {{ui:Uchovať v tomto prehliadači}} (len tento prehliadač ju má) alebo {{ui:Stiahnuť šablónu}}.
- Text PDF používa štandardné PDF písma: znak mimo západoeurópskeho textu sa vytlačí ako "?" a stavový riadok povie, koľko ich bolo.
- Šablóny podľa branže žijú v Knižnici (druh Šablóna dokumentu). V Dokumentoch z modelu vyberte z knižnice…, vyberte jednu a jej text aj štítky, ktoré číta, sa nahrajú; upravte ju, ako chcete. Zverejnenie vlastnej šablóny v Knižnici je rovnaké nahratie ako pri každej inej položke. Ešte nie je hotové: výpočty nad rámec počtov a súčtov.
