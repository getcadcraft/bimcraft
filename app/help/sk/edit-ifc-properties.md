---
title: Zmena vlastností IFC a uloženie upravenej kópie
summary: Zmeňte názov prvku, značku, popis alebo hodnotu vlastnosti, vráťte zmenu späť a stiahnite nový súbor IFC, zatiaľ čo pôvodný zostane nezmenený.
keywords: upraviť, zmeniť, vlastnosti, parametre, značka, názov, premenovať, označenie, uložiť ako, stiahnuť, späť, kopírovať, ifc, zapísať
from: f8035d62
---

## Čo budete robiť

Opravte údaje v modeli IFC: premenujte prvok, opravte jeho značku, zmeňte hodnotu vlastnosti. Potom uložte nový súbor IFC so svojimi zmenami. Súbor, ktorý ste otvorili, sa nikdy nezmení.

## Čo môžete zmeniť

| Pole | Dá sa upraviť |
|---|---|
| Názov, Typ objektu, Značka, Popis | Áno |
| Jednotlivé hodnoty vlastností (text, čísla, Áno/Nie) | Áno |
| Vlastnosti typu (sady označené "(type)") | Áno, a zmena sa použije na každý prvok daného typu |
| Typ, GlobalId, Riadok | Nie |
| Množstvá (dĺžky, plochy, objemy, počty) | Nie |
| Zoznamy, výpočty a iné viacčastové hodnoty | Nie |
| Geometria, poloha, pridávanie alebo mazanie prvkov | Nie |

## Postup

1. Otvorte model IFC a kliknite na prvok, ktorý chcete zmeniť.
2. V paneli {{ui:Properties}} kliknite na hodnotu, ktorú chcete zmeniť. Zmení sa na textové pole. Prázdna hodnota sa zobrazí ako *prázdna*.
3. Zadajte novú hodnotu.
4. Stlačte {{key:Enter}} alebo kliknite inde, aby sa zachovala. Stlačte {{key:Esc}}, ak chcete zrušiť.
5. Pozrite sa na hodnotu: teraz je tučná s modrým pruhom vedľa seba, ktorý označuje upravenú hodnotu.
6. Pozrite sa na sekciu {{ui:Changes}} vľavo: zmena je uvedená ako *prvok*: *pole*, stará hodnota na novú hodnotu.
7. Zopakujte pre ďalšie hodnoty alebo ďalšie prvky.
8. Kliknite na {{ui:Save as IFC}} (ukazuje, koľko zmien čaká, napríklad "Uložiť ako IFC (3)"), alebo stlačte {{key:Mod+S}}.
9. Nájdite "*pôvodný názov* (edited).ifc" vo svojom priečinku na stiahnuté súbory.

## Čo by ste mali vidieť

Stavový riadok hovorí: "Súbor *name* (edited).ifc bol uložený so *n* zmenami (… bajtov). Váš pôvodný súbor je nezmenený." Zoznam {{ui:Changes}} sa vyprázdni a je pripravený na ďalšie kolo.

## Druhy hodnôt

- **Text**: čokoľvek napíšete, sa zachová tak, ako je. Vymazanie Názvu, Typu objektu, Značky alebo Popisu hodnotu odstráni.
- **Čísla**: zadajte obyčajné číslo, napríklad `2.4` alebo `1200`, v jednotkách samotného súboru. Bez symbolov jednotiek. Čokoľvek iné zobrazí "Zadajte číslo."
- **Celé čísla** (počty, celé hodnoty): "Zadajte celé číslo." ak napíšete desatinné číslo.
- **Áno/Nie**: hodnota sa zmení na ponuku s možnosťami Áno a Nie.

Každá hodnota si zachováva svoj typ IFC, takže číslo zostane číslom a ostatné programy ho čítajú správne.

## Späť

1. Kliknite na {{ui:Undo}} v sekcii {{ui:Changes}}, alebo stlačte {{key:Mod+Z}}, keď nepíšete do poľa.
2. Opakujte, ak chcete vrátiť viac. Každé vrátenie odstráni najnovšiu zmenu.

Nemôžete vrátiť späť cez uloženie: po uložení sa zoznam začína odznova. Uložený súbor obsahuje všetko.

## Prečo vaša úprava mení len jeden prvok

Exportéry šetria miesto zdieľaním údajov. Jedna sada vlastností môže byť zdieľaná dvadsiatimi dverami a jedna hodnota ("Požiarna odolnosť: 60 min") môže byť uvedená v deväťdesiatich sadách. Ak by BimCraft jednoducho zmenil zdieľanú hodnotu, každý prvok, ktorý ju zdieľa, by sa zmenil tiež.

Preto BimCraft pred zápisom skopíruje:

- Ak sada vlastností, ktorú upravujete, je zdieľaná s inými prvkami, váš prvok dostane vlastnú kópiu sady a mení sa len kópia.
- Ak je hodnota zdieľaná s inými sadami, vaša sada dostane vlastnú kópiu hodnoty.

Susedia si zachovajú svoje staré údaje. Tomuto sa hovorí *kopírovanie pri zápise* (copy-on-write). Pridá do súboru niekoľko malých záznamov, ktoré každý program IFC číta normálne.

**Vlastnosti typu sú úmyselná výnimka.** Sada označená "(type)" patrí typu prvku a v IFC si ju každý prvok daného typu číta odtiaľ. Zmena ju zmení pre typ, takže každý prvok daného typu zobrazí novú hodnotu. Zoznam {{ui:Changes}} takéto úpravy označuje "(type)". Pozri [Zmena vlastnosti typu pre každý prvok daného typu](topic:type-vs-instance).

## Upozornenia pred stratou práce

- Otvorenie iného súboru, keď máte neuložené zmeny, sa spýta: "Máte *n* neuložených zmien v súbore *file*. Zahodiť ich?" Kliknite na Zrušiť, ak chcete pokračovať v práci, a potom uložte.
- Zatvorenie alebo znovunačítanie karty s neuloženými zmenami sa prehliadač opýta, či chcete odísť.

## Časté chyby

- **Písanie jednotiek.** `2400 mm` sa odmietne. Napíšte `2400`.
- **Zmena vlastnosti typu, keď ste mysleli jeden prvok.** Pred písaním hľadajte poznámku "(type)". Ak chcete, aby sa jeden prvok líšil, zmeňte vlastnosť inštancie alebo jeho Značku či Názov.
- **Očakávanie, že sa zmení pôvodný súbor.** Uloženie vždy stiahne nový súbor. Pôvodný nahraďte sami, ak to chcete, a ponechajte si kópiu.
- **Stlačenie {{key:Mod+S}} bez zmien.** BimCraft ukladá len vtedy, keď je čo uložiť; inak sa môže otvoriť vlastné "Uložiť stránku" prehliadača. Zatvorte ho.
- **Uloženie dvakrát a očakávanie dvoch malých súborov.** Každé uloženie obsahuje všetky úpravy od otvorenia modelu.
- **Očakávanie, že sa úpravy vrátia do projektového súboru.** BimCraft zapisuje len IFC. Upravený IFC importujte do svojho tvorbového programu tak, ako importujete ľubovoľný IFC.
