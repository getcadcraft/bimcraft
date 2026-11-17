---
title: Kreslenie v plnej veľkosti, anotácie podľa mierky
summary: Budova sa vždy kreslí v plnej veľkosti. Text, kóty, značky, názvy miestností, bubliny osí a symboly sa určujú na papieri, v milimetroch podľa tlače, a pri zmene mierky výkresu z 1:100 na 1:50 si túto veľkosť zachovajú.
keywords: mierka anotácií, anotatívny, veľkosť textu, výška textu, výška na papieri, veľkosť textu kóty, veľkosť značky, veľkosť názvu miestnosti, bublina osi, veľkosť symbolu, mierka výkresu, 1:50, 1:100, štandard kancelárie, písmo, kreslenie v mierke 1:1, plná veľkosť, text na liste
from: 94118788
---

## Čo budete robiť

Nastavte, aká vysoká bude písmená vo vašich výkresoch na papieri, raz pre celú budovu. Model nikdy nemeníte na mierku a text nikdy neupravujete pre mierku: BimCraft vypočíta veľkosť z výšky na papieri a mierky výkresu.

## Ako to funguje

- Model je v plnej veľkosti. Stena dlhá 10 m má v každej mierke 10 000 mm.
- Anotácia má **výšku na papieri**: výšku veľkého písmena na vytlačenom liste v milimetroch.
- Pri mierke 1:100 je text 2.5 mm vysoký 250 mm v modeli; pri 1:50 je 125 mm. Na papieri má 2.5 mm v oboch prípadoch.
- Symboly v pôdoryse (elektro, zdravotechnika) sa kreslia v milimetroch na papieri a riadia sa rovnakým pravidlom.

## Postup

1. Otvorte prehliadač projektu. Pod {{ui:Sheets}} kliknite na {{ui:Annotation sizes…}}.
2. Zadajte výšku v milimetroch pre druhy, ktoré chcete nastaviť: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} a {{ui:Schedule text}}. Prázdne pole ponechá veľkosť BimCraft, zobrazenú sivou.
3. Kliknite na {{ui:Save}}. Je to jeden krok, ktorý môžete vrátiť späť.

Každý list, súbor výkresov, PDF pôdorysu a pohľady a rezy používajú od tej chvíle tieto veľkosti. Medzera medzi kótovou čiarou a jej textom, veľkosť bubliny osi a výška riadku tabuľky sa zväčšujú spolu s textom.

## Pôdorys s vlastnou mierkou

Dajte pôdorysu mierku v jeho rozsahu pohľadu ({{ui:Scale}}; pozri [Pohľady a listy](topic:views-and-sheets)). Potom:

- na obrazovke sa názvy miestností, značky, text kót a bubliny osí kreslia v ich vytlačenej veľkosti voči modelu, takže vidíte to, čo sa zobrazí na liste;
- symboly v pôdoryse a ich značky sú dimenzované pre túto mierku. Zmeňte mierku z 1:100 na 1:50 a sú v modeli polovičné a na papieri rovnaké.

Pôdorys bez vlastnej mierky si zachová pevný text na obrazovke a jeho symboly sú dimenzované pre 1:50 (1/4" = 1'-0" v stopách a palcoch), ako predtým.

## Kancelárske veľkosti

S doplnkom Default Policies zapnutým nastavte výšky kancelárie v Nastavenia › Globálne › Default Policies › {{ui:Annotation sizes on paper}}. Nová budova ich prevezme po kliknutí na Vytvoriť. V budove, ktorú ste už začali, má dialóg {{ui:Use my office's sizes}}. Pozri [Default Policies](topic:default-policies).

## Veľkosti z predpisového balíka

Predpisový balík môže nastaviť výšky textu, ktoré vyžaduje jeho miesto (doplnok Building regulations, konvencie výkresov). Zaškrtnite balík v Nastavenia › Building regulations, potom v dialógu kliknite na {{ui:Use a regulation pack's sizes}}: polia sa vyplnia, skontrolujete ich a uložíte. Veľkosť, ktorú balík dáva v bodoch, je veľkosť písma a premení sa na výšku veľkého písmena, takže ju skontrolujte. Nič sa nenastaví, kým neuložíte.

## Čo by ste mali vidieť

- Rovnaká výška textu v milimetroch na liste pri 1:100 a na liste pri 1:50, zatiaľ čo samotný pôdorys je pri 1:50 dvakrát väčší.
- Veľkosti putujú spolu s budovou: sú uložené v jej súbore IFC.

## Dobré vedieť

- Vlastné veľkosti BimCraft sú tie, ktoré jeho listy používali odjakživa (asi 1.5 mm veľké písmená pre text kót). Nie sú to projektantské normy: nastavte si veľkosti svojej kancelárie.
- Výška musí byť od 0.5 do 50 mm.
- Písmo popisového poľa a legendy kľúčových poznámok sa do tohto nezapočítavajú: zachovávajú si vlastné veľkosti.
