---
title: Balík na povolenie a podporné dokumenty úradu
summary: Zhromaždite kontrolu podľa predpisov, pravdepodobné pripomienky posudzovateľa, model a zoznam podporných dokumentov úradu do jedného zipu, pričom každý dokument je prepojený s listom alebo tabuľkou, ktorá ho spĺňa.
keywords: schvaľovací proces, formát podania, požadované výkresy, veľkosť listu, formát súboru, kópie, balík predpisov, povolenie, balík na povolenie, podanie stavebného plánu, schválenie plánu, zákonné podanie, podporné dokumenty, kontrolný zoznam, úrad, obec, mestská časť, žiadosť o povolenie, pripomienky posudzovateľa, Stavebné predpisy, chýbajúce dokumenty
from: 47dd77ee
---

## Čo urobíte

Zostavíte jeden zip pre zákonné podanie (keď zoznam úradu pochádza z balíka predpisov, obsahuje aj schvaľovacie kroky a formát podania): titulnú stranu, pripomienky, ktoré posudzovateľ pravdepodobne vznesie (napísané z kontrol, nie odhadnuté), správu o predpisoch, keď je zapnutý doplnok Stavebné predpisy, model a zoznam podporných dokumentov, ktoré váš schvaľujúci úrad žiada.

Tento návod je vytvorený z modelu. Registrovaný odborník a úrad rozhodujú, čo sa vyžaduje a čo sa prijme.

## Kroky

1. Keď je model otvorený, otvorte {{ui:Balík na povolenie}} na ľavom paneli.
2. Napíšte názov projektu, adresu a žiadateľa a uveďte svoje listy a formuláre, každý na jednom riadku.
3. Pod {{ui:Podporné dokumenty}} zvoľte {{ui:Zoznam úradu}}. Zoznamy pochádzajú z balíkov predpisov: pridajte doplnok Stavebné predpisy a v Nastavenia › Stavebné predpisy zaškrtnite balík pre vaše miesto (balík môže obsahovať pravidlá, schvaľovací proces, formát podania, konvencie výkresov a štandardné poznámky). Všeobecný zoznam funguje aj bez neho.
4. Prečítajte si zoznam. Každý dokument je {{ui:Prepojené}} (s listom a dôvodom), {{ui:Dodané vami}}, {{ui:Nevzťahuje sa}} alebo {{ui:Chýbajúce}}.
5. Pri papieri, ktorý dodáte sami (formulár, list vlastníctva, potvrdenie o poplatku), zvoľte {{ui:Dodané vami}}. Pri položke označenej „ak sa vzťahuje“, ktorá sa nevzťahuje, zvoľte {{ui:Tu sa nevzťahuje}}. Ak chcete dokument prepojiť s listom sami, zvoľte list.
6. Otvorte {{ui:Schvaľovací proces}} a {{ui:Formát podania}} pod zoznamom, ak chcete prečítať kroky a to, čo sa odovzdáva (veľkosti listov, formáty súborov, kópie). Poplatok alebo časový rámec sa zobrazí, iba keď ho uvádza zdroj balíka, spolu so stranou a dátumom, kedy bol prečítaný.
7. Kliknite na {{ui:Vytvoriť balík na povolenie (zip)}}. Kroky a formát sú aj na titulnej strane.

## Ako je dokument prepojený

Dokument je prepojený s listom, ktorý obsahuje správny druh pohľadu (pôdorys, pohľad, rez), s listom, ktorý obsahuje správnu tabuľku (tabuľka dverí pre tabuľku dverí), alebo s listom, ktorého názov to uvádza (list s názvom „Situačný plán“). Keď model má riadky, ale žiadny list netvorí tabuľku, alebo keď je pozemok nakreslený, ale žiadny list nemá názov situačného plánu, položka zostáva chýbajúca a uvedie prečo.

## Dobré vedieť

- **Žiadny zoznam úradu nebol overený miestnym odborníkom.** Každý bol prečítaný z publikovaného zdroja, ktorý uvádza, a na dátum, ktorý zobrazuje, a napísaný našimi vlastnými slovami. Požiadavky sa menia: skontrolujte aktuálny zoznam samotného úradu.
- Čo súboru stále chýba, alebo list, ktorý nemá veľkosť, orientáciu či mierku, ktoré balík žiada, sa zobrazí v zozname Problémy ako poznámka. Poznámky sú rady: nikdy nezastavia balík.
- Chýbajúce dokumenty nikdy nezastavia balík. Sú uvedené na titulnej strane a v `04-supporting-documents.csv`.
- Zoznamy sú dáta, nie kód, vo vnútri balíkov predpisov: Južná Afrika (Národné stavebné predpisy, predpis A2), Kapské Mesto (s pridanou oblasťou Južná Afrika z knižnice), Anglicko (národné požiadavky na informácie), Portland v Oregone, VYMYSLENÝ výučbový balík a všeobecný zoznam, ktorý nie je zoznamom žiadneho úradu. Ktokoľvek môže napísať balík pre svoje miesto.
- Vaše voľby sú uložené v modeli, takže tam sú, keď ho znova otvoríte, a každá je jeden krok, ktorý môžete vrátiť späť.

Pozrite tiež [Listy](topic:sheets) a [Pozemok, budova na ňom a jeho podlažia](topic:site-building-and-levels).
