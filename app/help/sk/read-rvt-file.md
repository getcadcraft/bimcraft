---
title: Čítanie projektového alebo rodinného súboru
summary: Otvorte súbor .rvt, .rfa, .rte alebo .rft a prečítajte si jeho vydanie, zdieľanie prác, údaje o projekte, parametre rodiny, prepojenia a náhľadový obrázok bez programu, ktorý ho vytvoril.
keywords: rvt, rfa, rte, rft, projektový súbor, rodina, vydanie, verzia, ktorá verzia, build, zdieľanie prác, centrálny model, údaje o projekte, náhľad, miniatúra, prepojenia, záloha
from: df3600e1
---

## Čo urobíte

Zistite, čo je v projektovom alebo rodinnom súbore, bez otvorenia v Revit: ktoré vydanie ho uložilo, či je zdieľaný, údaje o projekte a na čo odkazuje. Užitočné, keď vám súbor príde od niekoho a potrebujete vedieť, v akom vydaní ho otvoriť.

## Postup

1. Kliknite na {{ui:Choose a file}}.
2. Vyberte súbor `.rvt`, `.rfa`, `.rte` alebo `.rft`.
3. Počkajte chvíľu. Stavový riadok hovorí „Čítam súbor…“ a potom „Otvorené *názov súboru*“.
4. Pozrite sa na vrch karty: náhľadový obrázok uložený v súbore, druh súboru a vydanie, v ktorom bol uložený, a názov projektu.
5. Posúvajte sa nadol a čítajte sekcie karty.

## Čo by ste mali vidieť

Karta v strede, s týmito sekciami, ak ich súbor obsahuje:

| Sekcia | Čo vám povie |
|---|---|
| File | Názov súboru, veľkosť, druh (projekt, šablóna projektu, rodina alebo šablóna rodiny), vydanie a build, v ktorom bol uložený, zdieľanie prác, cesta centrálneho modelu, kde a kým bol naposledy uložený, jazyk a GUID dokumentu |
| Project information | Vlastné polia projektu, ako názov, číslo, klient, adresa a stav. Polia, ktoré sú stále na predvolených hodnotách nového projektu, sa vynechajú. |
| Family, Family: … | Pri rodine: jej názov, kategória, vydanie, posledná aktualizácia a jej parametre, skupina po skupine |
| Linked and referenced files | Každý prepojený model, CAD prepojenie, obrázok a tabuľka poznámok, na ktorý súbor ukazuje, s jeho uloženou cestou |

Vľavo panel {{ui:File}} opakuje kľúčové údaje a pridáva **Načítané**: koľko súboru BimCraft skutočne prečítal, zvyčajne asi 40 KB zo súboru, ktorý má mnoho megabajtov. Vpravo panel {{ui:Properties}} hovorí, že vlastnosti prvkov potrebujú model 3D.

## Prečo tu nie je 3D

Model 3D a prvky vo vnútri projektového súboru sú uložené v nedokumentovanom formáte. BimCraft číta iba tie časti súboru, ktoré sú zdokumentované alebo ľahko čitateľné: informácie o súbore, údaje o projekte, údaje o rodine, zoznam prepojení a náhľadový obrázok. Ostatné nehádá. Ak chcete vidieť model v 3D a čítať vlastnosti prvkov, exportujte IFC z programu, ktorý súbor vytvoril. Pozri [Získanie projektového súboru do 3D cez IFC](topic:rvt-to-ifc).

## Časté chyby

- **Očakávanie 3D.** Pozri vyššie.
- **Prepojenia zobrazujú iba uloženú cestu.** Súbor otvorený samostatne nevie overiť, či jeho prepojenia existujú. Otvorte namiesto toho priečinok, v ktorom leží, a BimCraft označí každé prepojenie ako nájdené alebo nenájdené: [Otvorenie celého priečinka projektu](topic:open-project-folder).
- **„This file is incomplete…“** Súbor bol prerušený pri kopírovaní, nahrávaní alebo synchronizácii. Takto sa správa aj súbor v cloude, ktorý je stále „iba online“. BimCraft ho aj tak otvorí a zobrazí iba to, čo sa podarilo obnoviť: žlté upozornenie hore na karte, sekciu **Obnovené z tohto súboru** so zoznamom častí, ktorých každý bajt je v súbore, a **Nie je v súbore** pre zvyšok. Za chýbajúcu časť sa nič nedoplní, takže vydanie, náhľadový obrázok alebo údaje o projekte môžu chýbať, ak boli uložené až za miestom prerušenia. Ak bol prerušený aj zoznam obsahu súboru, nedá sa nič otvoriť. Skopírujte pôvodný súbor znova a otvorte ho, aby ste mali úplný súbor.
- **„No preview picture in this file“.** Niektoré súbory sa ukladajú bez náhľadového obrázka. To je normálne.
- **Omylom otvorená záloha.** Súbory pomenované ako `Tower.0004.rvt` sú očíslované zálohy. Otvorenie priečinka ich zoskupí s ich modelom.
