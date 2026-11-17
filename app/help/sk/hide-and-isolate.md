---
title: Skryť, izolovať a zobraziť prvky priehľadne
summary: Vyberte viac prvkov a skryte ich, zobrazte len ich, alebo zobrazte ich s ostatnými prvkami priehľadnými, potom všetko vráťte späť.
keywords: skryť, izolovať, priehľad, priehľadný, duch, röntgen, zobraziť všetko, zobraziť späť, výber viacerých, ctrl klik, shift klik, viditeľnosť
from: 97e98b8c
---

## Čo budete robiť

Vyčistite zobrazenie na to, čo pozorujete: skryte prvky, ktoré prekážajú, zobrazte len vami vybrané, alebo nechajte všetko ostatné na obrazovke ako slabý obrys, aby ste stále vedeli, kde ste.

## Postup

1. Otvorte model IFC. Pozri [Otvorenie modelu IFC a obzretie sa v 3D](topic:open-ifc-model).
2. Kliknutím vyberte prvok. Na výber ďalších podržte {{key:Mod}} alebo {{key:Shift}} a kliknite na každý z nich. Kliknutím na už vybraný prvok týmto spôsobom ho z výberu odstránite.
3. Otvorte {{ui:Zobraziť}} na paneli nástrojov a zvoľte, čo urobiť, alebo stlačte jeho klávesu:
   - {{ui:Skryť}} ({{key:H}}) skryje vybrané prvky.
   - {{ui:Izolovať}} ({{key:I}}) zobrazí len vybrané prvky.
   - {{ui:Priehľad}} ({{key:T}}) zobrazí vybrané prvky tak, ako sú, a všetko ostatné priehľadne.
4. Kliknite na {{ui:Zobraziť všetko}} v tej istej ponuke alebo stlačte {{key:Shift+H}}, aby sa znova zobrazil každý prvok.
5. Ak chcete namiesto toho odrezať všetko okolo vybraných prvkov, kliknite v tej istej ponuke na {{ui:Rezný box okolo výberu}} alebo stlačte {{key:Shift+X}}. Pozri [Rez modelom IFC rovinou rezu](topic:section-plane).

## Čo by ste mali vidieť

- Pri viacerých vybraných prvkoch {{ui:Vlastnosti}} uvedú ich počet a vymenujú ich podľa triedy. Kliknite na jeden samostatne, ak chcete vidieť jeho vlastnosti.
- Skryté prvky nemožno vybrať: kliknutie zasiahne to, čo je za nimi.
- Ani prvky v priehľade sa nedajú vybrať, takže môžete kliknúť priamo cez steny na to, čo ste izolovali.
- Hrany sa skryjú spolu s prvkom a zoslabnú s ním.
- Skrytie, izolácia a priehľad zostávajú, ako sú, kým upravujete, umiestňujete položky knižnice alebo rezáte model rovinou rezu. Otvorenie iného modelu zobrazí všetko znova.

## Časté chyby

- **Položky ponuky sú sivé.** Nič nie je vybrané. Najprv kliknite na prvok; ukážte na položku, aby ste videli, prečo nemôže konať.
- **Izolácia zobrazila múr, ktorý som skryl.** Izolácia zobrazí presne to, čo ste vybrali, skryté alebo nie.
- **Chýba celé podlažie.** To je zoznam {{ui:Podlažia}}, nie {{ui:Zobraziť všetko}}: zaškrtnite podlažie znova.

## Ďalšie

- [Zobrazenie a skrytie podlaží, priestorov a hrán](topic:storeys-and-spaces)
- [Rez modelom IFC rovinou rezu](topic:section-plane)
