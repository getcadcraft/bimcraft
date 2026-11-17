---
title: Vyberte, který program nakreslí obraz
summary: Volba Motor v dialogu Vykreslit: naše dva vlastní motory, další programy v CadCraft Studio a co web dělá jinak.
keywords: vykreslit, render, motor, vykreslovač, motor vykreslování, zásuvný modul, plugin, studio, externí program, nakresleno, fronta, motor doplňku
from: 44a1ef5e
---

{{ui:Vykreslit}} má volbu **Motor** nad položkou {{ui:Tvar}}. Naše dva vlastní motory jsou vždy k dispozici a fungují všude; doplňky mohou přidat další a v CadCraft Studio seznam obsahuje i programy, které scénu převezmou.

| Motor | Co dělá | Kde |
|---|---|---|
| Vestavěný: {{ui:Rychlý}} | Rychlý statický obraz: denní světlo, měkké stíny, vzhled skla a kovu, během sekund | Prohlížeč a Studio |
| Vestavěný: sledování paprsků | Světlo odrážené mezi plochami na grafické kartě nebo procesoru, fronta vykreslování a další počítače ve vaší síti | Prohlížeč a Studio |
| Motor doplňku | Obraz nakreslí a vrátí zpět: viz [Nakreslení obrazu jiným programem](topic:render-other-program) | Prohlížeč (motor napsaný v JavaScriptu), nebo Studio (motor, který spouští program) |
| Program, který scénu převezme | Studio umístí scénu do své složky a udržuje ji v souladu | Studio |
| Otevřít v … | Uloží scénu a otevře ji v programu; nic se nevrací: viz [Otevření scény v jiném programu](topic:render-open-in) | Web uloží soubor |

## Jak se volba chová

- Výběr {{ui:Rychlý}} nebo {{ui:Vysoká kvalita (sledování paprsků)}} změní i {{ui:Tvar}}, a naopak. Nic dalšího v dialogu se nemění pro ty, kdo jiný motor nepoužívají.
- Motor, který není k dispozici, zůstane v seznamu s důvodem („not found“, „needs a newer version“); nelze jej vybrat. V prohlížeči motor, který běží jen ve Studiu, ukazuje „saves a file“: {{ui:Vykreslit}} pak uloží scénu a její nastavení do souboru, který si Vy vezmete do daného programu.
- Volba se uloží spolu s nastavením vykreslování souboru a motor, který jste vybrali naposledy, je výchozím motorem pro soubory, které žádnou vlastní volbu nemají.
- Obraz z jiného programu uvádí, který program ho nakreslil a jeho verzi, v dialogu i ve frontě vykreslování. Sliby na stránce [Vykreslení](topic:render) platí jen pro **naše vlastní** motory: jiný program osvětluje, tónuje a vzorkuje po svém, takže dva obrazy jedné scény jsou si podobné v kameře, slunci, svítidlech a expozici, ale ne pixel po pixelu.

## Co každý motor dostane

Scéna jde jinému programu jako **balíček**: model jako soubor USD (stejný soubor, jaký zapisuje [Uložit jako USD](topic:usd)) a soubor nastavení, který obsahuje to, čemu importér USD nelze věřit: přesné hodnoty materiálů, svítidla, která jsou zapnutá, s jejich výkonem a světelnými profily, slunce, oblohu, expozici a kameru tak, jak by ji kreslil dialog. Nic se nikam nenahrává.

## Fronta vykreslování

Obraz pro jiný program může čekat ve [frontě vykreslování](topic:render#the-render-queue) stejně jako naše vlastní; jeho úloha si pamatuje, pro který motor je.
