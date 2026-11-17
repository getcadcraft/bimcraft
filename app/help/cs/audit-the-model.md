---
title: Audit modelu: místnosti, značky, LOD, kolize a rozhraní
summary: Spusťte hotové kontroly neoznačených místností, chybějících značek, prvků pod úrovní rozpracování, kterou vyžaduje fáze projektu, kolizí mezi profesemi a rozhraní LOD 350. Pouze rady: nic se neblokuje.
keywords: audit, kontrola, neoznačená místnost, chybějící značka, označení, lod, úroveň rozpracování, milník, fáze, kolize, profese, koordinace, rozhraní, lod 350, otvor, překlad, záhlaví, prostup, chránička, potrubí, vzduchotechnika, problémy, protokol kontroly, poradní
from: cc83a14d
---

## Co provedete

Projděte celý model najednou, než jej vydáte. Audit spustí připravené sady pravidel a nálezy zapíše do seznamu {{ui:Problémy}} jako rady. Nic se neblokuje: nález opravíte, nebo jej přijmete s důvodem, jako každý jiný problém.

## Postup

1. Otevřete {{ui:Kontroly modelu}} › {{ui:Audit}} v levém panelu, nebo {{ui:Nástroje}} › {{ui:Auditovat model…}} (zadáním: `AUDIT`).
2. Zvolte {{ui:Fáze projektu}}. Je to stejná fáze jako v podrobnostech výkresu.
3. Zaškrtněte sady pravidel, které chcete spustit.
4. Klikněte na {{ui:Spustit audit}}.
5. Přečtěte řádek u každé sady pravidel a poté otevřete {{ui:Otevřít seznam problémů}}. Klik na nález vybere jeho prvek.
6. {{ui:Protokol kontroly}} stáhne protokol: každý nález, kdo co přijal a proč, a sady pravidel, které proběhly.

## Sady pravidel

- **Neoznačené místnosti**: místnost bez názvu, nebo stále pojmenovaná tak, jak ji nazval program ("Room 3").
- **Chybějící značky**: dveře nebo okno bez označení, místnost bez čísla, elektrické zařízení bez značky.
- **Prvky pod LOD fáze**: každá stěna, podlaha, strop, střecha, dveře a okno, jejichž LOD je nižší, než fáze vyžaduje. Prvek čte značku LOD svého typu; prvek ověřený na stavbě má LOD 500. Prvky bez značky se započítají do jedné poznámky, protože je nelze zkontrolovat.
- **Kolize mezi profesemi**: prvky dvou profesí (architektura, konstrukce, technika prostředí, vodoinstalace, elektro, podle třídy IFC), které do sebe zasahují. Střecha ležící na svých stěnách se nepočítá.
- **Rozhraní LOD 350**: každé dveře a okno sedí v otvoru své stěny, otvor se vejde do stěny, dva otvory se nepřekrývají, otvor širší než limit má překlad nebo záhlaví (prvek nad ním, nebo poznámku u dveří či okna), a potrubí, vzduchotechnika nebo kabelový žlab, který prochází stěnou nebo deskou, má v tom místě otvor. Nálezy se počítají na dvojici profesí.
- **Rozpoznané prvky, které nikdo nekontroloval**: stěny, dveře, okna a místnosti načtené z PDF, skenu nebo výkresu, které jsou ještě neověřené. Viz [Označení prvků jako zkontrolovaných nebo ověřených na stavbě](topic:verification).

## LOD, které každá fáze vyžaduje

Otevřete {{ui:LOD, které každá fáze vyžaduje}}, chcete-li tabulku zobrazit nebo změnit.

:::note
Tabulka a šířka překladu jsou výchozí hodnoty CadCraftu. Nejsou převzaty z normy: projekt nastavuje LOD pro každou fázi ve svém plánu BIM. Nastavte je podle svého. Kancelář může tabulku nastavit pro všechny v Nastavení › Default Policies › Audit; změna v části Audit se uchovává na tomto počítači.
:::

## Dobré vědět

- Překlad lze zapsat jako poznámku místo modelování: vyberte dveře nebo okno a vyplňte {{ui:Poznámka k překladu nebo záhlaví}} v části {{ui:Ověření}} ve Vlastnostech.
- Potrubí, které prochází skutečným otvorem, neprotíná žádnou plochu a nehlásí se. Potrubí namodelované přímo skrz stěnu se hlásí.
- Kontrola kolizí se u velmi velkého modelu po několika sekundách zastaví a řekne to. Pro úplnou kontrolu dvou zvolených sad použijte [Najít kolize mezi prvky](topic:clash-check).
- Po změně modelu audit spusťte znovu. Přijaté nálezy zůstávají přijaty, dokud se nezmění jejich čísla.
- Pracuje s modelem. Nenahrazuje koordinační kontrolu od odpovědných osob.

## Další

- [Zkontrolujte model na běžné problémy](topic:model-checks)
- [Najít kolize mezi prvky](topic:clash-check)
- [Označení prvků jako zkontrolovaných nebo ověřených na stavbě](topic:verification)
