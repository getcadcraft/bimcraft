---
title: Vyberte prvok a prečítajte si jeho vlastnosti
summary: Kliknite na ľubovoľný prvok v 3D modeli, aby sa zvýraznil, a prečítajte si jeho názov, typ, označenie, GlobalId, sady vlastností a množstvá.
keywords: vlastnosti, výber, vybrať, kliknutie, prvok, parametre, sady vlastností, pset, množstvá, globalid, guid, typ, kontrola
from: 43b80aa8
---

## Čo budete robiť

Vyberte prvky v modeli IFC a prečítajte si všetko, čo súbor o nich hovorí: atribúty, sady vlastností, vlastnosti typu a množstvá.

## Postup

1. Otvorte model IFC.
2. Kliknite na prvok, napríklad na dvere. Klikajte bez ťahania: ťahanie o viac než pár pixelov model otáča namiesto výberu.
3. Pozrite sa na prvok: je zvýraznený modrou farbou.
4. Pozrite sa na panel {{ui:Vlastnosti}} vpravo. Hore je druh prvku (napríklad "Door" alebo "WallStandardCase") a jeho názov.
5. Prečítajte prvý blok: Názov, Typ, Typ objektu, Označenie, Popis, **GlobalId** a Riadok.
6. Posuňte nadol na sady vlastností. Prvé tri sú otvorené; kliknutím na názov ľubovoľnej inej sady ju otvoríte.
7. Kliknutím na iný prvok sa prepnete naň.
8. Stlačte {{key:Esc}} alebo kliknite na prázdne pozadie, aby sa výber zrušil.

## Čo by ste mali vidieť

- Zvýraznený prvok a jeho údaje vpravo.
- Sady vlastností v abecednom poradí. Sady, ktoré pochádzajú z **typu** prvku, majú za názvom " (typ)" a poznámku: "Vlastnosť typu: zmena tu sa uplatní na každý prvok tohto typu."
- Sady množstiev (napríklad dĺžky, plochy a objemy) sú uvedené spolu s ostatnými sadami. Množstvá sú len na čítanie.
- Hodnoty, ktoré môžete zmeniť, vyzerajú ako tlačidlá. [Zmena vlastností IFC a uloženie upravenej kópie](topic:edit-ifc-properties) ukazuje, ako na to.

[Polia panela Vlastnosti](topic:properties-panel) vysvetľuje každé pole.

## Prístup ku skrytým prvkom

1. Ak sa chcete dostať k niečomu vnútri budovy, odškrtnite podlažia nad ním v zozname {{ui:Podlažia}}.
2. Ak sa chcete dostať k múru za objemom miestnosti, vypnite {{ui:Priestory}}.
3. Kliknite na prvok.

## Časté chyby

- **Mierne potiahnutie pri kliknutí.** BimCraft to berie ako otáčanie a prvok nevyberie. Držte myš nehybne.
- **Očakávanie jednotiek pri číslach.** Hodnoty sa zobrazujú tak, ako sú uložené v súbore, zaokrúhlené na štyri desatinné miesta, bez symbolu jednotky. Dĺžky v metrickom exporte sú zvyčajne milimetre alebo metre; skontrolujte nastavenia exportéra.
- **Hľadanie parametra podľa známeho názvu.** Exportéry premenúvajú a zoskupujú parametre do sád vlastností IFC, napríklad `Pset_WallCommon`. Prejdite každú sadu; vlastné parametre sa často nachádzajú v sade pomenovanej po exportujúcom programe alebo vašej firme.
- **Očakávanie vyhľadávacieho poľa.** Na výber kliknite na prvok; {{key:Mod}}+klik alebo {{key:Shift}}+klik vyberie ďalšie a {{key:Mod+A}} vyberie každý zobrazený prvok. Zoznam {{ui:Prvky}} vľavo len počíta prvky podľa druhu; nedá sa naň kliknúť.
- **Výber na karte súboru projektu.** Karta súboru nemá prvky na výber: "Vlastnosti prvku potrebujú 3D model. Otvorte export IFC tohto súboru, aby ste ich videli."
