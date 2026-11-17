---
title: Zmazanie, vystrihnutie, kopírovanie a prilepenie stavebných prvkov
summary: Vyberte steny, dvere, nábytok alebo čokoľvek iné v modeli IFC; zmažte ich, vystrihnite alebo skopírujte a prilepte tam, kam kliknete, na rovnaké miesto alebo na iné podlažie.
keywords: zmazať, odstrániť, vymazať, vystrihnúť, kopírovať, prilepiť, duplikovať, presunúť, vybrať všetko, vybrať všetky, stavebný prvok, stena, dvere, okno, schodisko, otvor, späť
from: d9eec37f
---

## Čo budete robiť

Meníte obsah modelu IFC: odstraňujete prvky, ktoré nechcete, kopírujete stenu alebo súbor nábytku na iné miesto a presúvate prvky vystrihnutím a prilepením. Každá zmena je jeden krok, ktorý môžete vrátiť späť, a uloženie zapíše nový súbor, takže pôvodný zostane nezmenený.

## Postup

1. Otvorte model IFC. Pozrite si [Otvorenie modelu IFC a prezeranie v 3D](topic:open-ifc-model).
2. Vyberte, čo chcete zmeniť: kliknite na prvok, podržte {{key:Mod}} alebo {{key:Shift}} a kliknite, ak chcete vybrať ďalšie, alebo stlačte {{key:Mod+A}} ({{ui:Viac}}, {{ui:Vybrať všetko}}), ak chcete vybrať každý zobrazený prvok.
3. Potom:
   - **Zmazanie:** stlačte {{key:Delete}}, alebo {{ui:Viac}}, {{ui:Zmazať}}.
   - **Kopírovanie:** stlačte {{key:Mod+C}} alebo kliknite na {{ui:Kopírovať}}.
   - **Vystrihnutie:** stlačte {{key:Mod+X}}, alebo {{ui:Viac}}, {{ui:Vystrihnúť}}. Prvky zmiznú a môžete ich prilepiť.
4. Na prilepenie stlačte {{key:Mod+V}} alebo kliknite na {{ui:Prilepiť}}. Priehľadný box v rozmere kopírovaného prvku sa pohybuje za ukazovateľom na podlaží zvolenom na lište umiestňovania. Stlačením {{key:R}} ho otočte o 90° a potom kliknite na miesto, kam má ísť. Každým kliknutím vložíte ďalšiu kópiu; stlačte {{key:Esc}}, ak chcete skončiť.
5. Alebo stlačte {{key:Mod+Shift+V}} ({{ui:Viac}}, {{ui:Prilepiť na rovnaké miesto}}): po vystrihnutí sa prvky vrátia presne tam, kde boli; po kopírovaní sa kópia umiestni hneď vedľa originálov.
6. Kliknutím na {{ui:Uložiť ako IFC}} stiahnete upravený model.

## Čo patrí k prvku

- **Časti:** schodisko zahŕňa svoje ramená, zavesená stena svoje panely; čokoľvek zložené z častí zahŕňa všetky svoje časti.
- **Otvory:** stena zahŕňa otvory v nej vyrezané. Zmazanie dverí alebo okna zmaže aj otvor, ktorý vypĺňali, takže stena sa uzavrie, ako v autorskom programe. Zmazanie steny nakreslenej v BimCraft zmaže aj jej dvere a okná a znovu spojí zvyšné steny. Zmazanie steny zo súboru vytvoreného inde ponechá jej dvere a okná tam, kde boli.
- **Údaje:** kópia má rovnaký typ, materiály, sady vlastností a množstvá ako originál a nový GlobalId. Neskoršia zmena hodnoty na kópii nezasiahne do originálu.
- **Položky knižnice** si ponechajú údaje z knižnice; kópia dostane ďalšie voľné číslo položky a vystrihnutá položka prilepená späť si ponechá svoje číslo.

## Čo by ste mali vidieť

- "Zmazané: …" alebo "Prilepené: …" v zozname {{ui:Zmeny}}. {{key:Mod+Z}} vráti poslednú zmenu späť; {{key:Mod+Y}} ju obnoví.
- Po zmazaní stavový riadok uvedie, koľko častí a otvorov bolo zmazaných tiež.
- Prilepené prvky sú vybraté, takže ich môžete znovu prilepiť na rovnaké miesto a vytvoriť radu, alebo ich zmazať.

## Dobré vedieť

- Kópie používajú rovnakú geometriu ako originál (IFC umožňuje, aby prvky zdieľali geometriu), takže súbor rastie veľmi málo.
- Stavebné prvky sa prilepia do modelu, z ktorého boli skopírované, na rovnakej karte. Ak chcete použiť umiestnené položky knižnice v inom modeli, kopírujte jednu položku naraz: pozrite si [Kopírovanie, prilepenie a duplikovanie položiek knižnice](topic:copy-paste).
- Podlažia, priestory, budovy a pozemok sa nedajú zmazať ani kopírovať. Vyberte namiesto toho prvky v nich. Miestnosť nakreslená v BimCraft vzniká z okolitých stien: ak chcete spojiť dve miestnosti, zmažte stenu.
- Steny, dvere a okná nakreslené vlastnými nástrojmi BimCraft na steny, dvere a okná sa zatiaľ nedajú kopírovať, vystrihnúť ani duplikovať; stavový riadok to oznámi. Nakreslite ich znova. Zmazanie funguje.
- Kopírovanie tiež uloží názvy a vlastnosti kopírovaných prvkov do schránky ako text, ktorý môžete prilepiť do tabuľky alebo e-mailu.

## Časté chyby

- **{{ui:Zmazať}} je sivé.** Nič nie je vybraté, alebo sú vybraté iba podlažia alebo priestory. Ukážte na tlačidlo, aby ste zistili dôvod.
- **Prilepenie hlási, že prvky pochádzajú z iného modelu.** Od kopírovania ste otvorili iný model. Znovu otvorte prvý model a skopírujte prvky tam.
- **Prilepená kópia je na inom podlaží.** Položka {{ui:Podlažie}} na lište umiestňovania určuje, kam kópia pôjde; pred kliknutím vyberte podlažie.

## Súvisiace

- [Skrytie, izolovanie a priehľad prvkov](topic:hide-and-isolate)
- [Klávesy a myš](topic:keyboard#edit)
