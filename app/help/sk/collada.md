---
title: Exportovať model ako Collada alebo pre mapový prehliadač
summary: Zapíšte otvorené modely IFC ako súbor Collada (.dae) pre Blender a iné 3D programy alebo ako balík Google Earth (.kmz) umiestnený tam, kde je model na mape.
keywords: collada, dae, kmz, kml, google earth, blender, export, geolokácia, georeferencia, zemepisná šírka, zemepisná dĺžka, poloha, 3D programy
from: 81cfec09
---

{{ui:Collada}} na paneli nástrojov (alebo {{ui:Exportovať Collada (.dae, .kmz)…}} v ponuke Súbor v štýloch ponuky a pása kariet) zapíše to, čo je otvorené, ako Collada 1.4.1: každý model, ktorý je zobrazený, a združené modely tam, kde ste ich umiestnili.

## Export

1. Vyberte {{ui:Collada}}.
2. Vyberte formát:
   - {{ui:Súbor Collada (.dae), pre Blender a iné 3D programy}}.
   - {{ui:Balík Google Earth (.kmz): model umiestnený tam, kde je na mape}}. Ponúka sa iba vtedy, keď model má polohu.
3. Zvoľte možnosti, potom {{ui:Exportovať}}. Súbor sa stiahne a stavový riadok uvedie, koľko prvkov bolo zapísaných.

| Možnosť | Čo robí |
|---|---|
| {{ui:Zapísať polohu do súboru}} | Pridá zemepisnú šírku, zemepisnú dĺžku, výšku a natočenie začiatku súboru do .dae |
| {{ui:Výška}} | {{ui:Na zemi: úroveň 0 modelu leží na teréne}}, alebo {{ui:Vlastná výška modelu nad morom}} |
| {{ui:Zahrnúť miestnosti a priestory}} | Priestory sa zapíšu tiež (predvolene sa vynechávajú) |
| {{ui:Zahrnúť skryté prvky}} | Zapíšu sa aj prvky, ktoré ste skryli (predvolene sa zapíše iba to, čo vidíte) |

## Čo je v súbore

| V modeli | V súbore Collada |
|---|---|
| Budova, podlažia | Vnorené uzly, podlažia v poradí výšky; prvky bez podlažia pod "Nezaradené" |
| Každý prvok | Jeden uzol s vlastnou sieťou, pomenovaný ako v modeli (jeho názvom, inak triedou a značkou) |
| Trieda, GlobalId, preddefinovaný typ | V dodatočných údajoch uzla (profil IFC), s presným názvom (profil ModelCraft) |
| Farby | Materiály, s priehľadnosťou |
| Jednotky a osi | Metre, Z nahor. Úroveň 0 otvoreného modelu je vo výške 0 |

Model zostáva blízko začiatku súradníc na zemi, takže programy, ktoré pracujú s jednoduchou presnosťou, ho zobrazia bez chvenia. ModelCraft zapisuje svoje súbory Collada rovnakým zapisovačom a otvára tieto súbory s ich názvami prvkov.

## Odkiaľ pochádza poloha

Poloha sa určuje z otvoreného modelu rovnakým spôsobom, akým {{ui:Merať}} vypočíta zemepisnú šírku a dĺžku bodu:

- Prevod na mapu (IFC4 IfcMapConversion alebo sady vlastností IFC2X3) cez súradnicový systém modelu. Systém, ktorý ste zvolili pre model, má prednosť pred systémom, ktorý uvádza súbor.
- Inak zemepisná šírka a dĺžka staveniska (približné, na celom stavenisku postačujúce).

Natočenie sa meria, nepredpokladá sa: zohľadňuje otočenie mapy, pravý sever a konvergenciu mapy. Ak chcete modelu priradiť polohu, použite {{ui:Mapový začiatok…}} v {{ui:Merať}}.

## V iných programoch

- **Google Earth** číta .kmz: model sa zobrazí na mieste, otočený na sever. Obyčajný .dae nemá miesto, z ktorého by Google Earth čítal polohu; použite .kmz.
- **Blender** (4.x a staršie): File, Import, Collada (.dae). Každý prvok sa importuje ako vlastný objekt so svojím materiálom. Poloha sa uchováva v dodatočných údajoch súboru, ktoré Blender nečíta. Blender 5.0 odstránil svoj vstavaný importér Collada; tam použite {{ui:USD}} alebo export glTF, alebo otvorte .dae v Blender 4.5 a uložte ako .blend.

Naše testy overujú každý súbor voči schéme Collada 1.4.1 a čítajú ho späť nezávislou čítačkou Collada. V Blenderi ani v Google Earth sme ho neotvárali.
