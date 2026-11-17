---
title: Fela, einangra og sjá í gegnum hluti
summary: Veldu nokkra hluti, feldu þá, sýndu aðeins þá, eða sýndu þá með öllu öðru gegnsæju, og komdu síðan öllu aftur fram.
keywords: fela, einangra, gegnsætt, gegnsæi, draugur, röntgen, sýna allt, birta aftur, velja marga, margval, ctrl smellur, shift smellur, sýnileiki
from: 97e98b8c
---

## Hvað þú gerir

Hreinsaðu sýnina niður í það sem þú horfir á: feldu hluti sem eru í veginum, sýndu aðeins þá sem þú valdir, eða haltu öllu öðru á skjánum sem daufum útlínum svo þú vitir enn hvar þú ert.

## Skref

1. Opnaðu IFC-líkan. Sjá [Opna IFC-líkan og skoða það í þrívídd](topic:open-ifc-model).
2. Smelltu á hlut til að velja hann. Til að velja fleiri, haltu niðri {{key:Mod}} eða {{key:Shift}} og smelltu á hvern þeirra. Að smella á valinn hlut á þann hátt tekur hann úr valinu aftur.
3. Opnaðu {{ui:Sýna}} á tækjastikunni og veldu hvað á að gera, eða ýttu á lykil þess:
   - {{ui:Fela}} ({{key:H}}) felur völdu hlutina.
   - {{ui:Einangra}} ({{key:I}}) sýnir aðeins völdu hlutina.
   - {{ui:Gegnsætt}} ({{key:T}}) sýnir völdu hlutina eins og þeir eru og allt annað gegnsætt.
4. Smelltu á {{ui:Sýna allt}} í sömu valmynd, eða ýttu á {{key:Shift+H}}, til að sýna alla hluti aftur.
5. Til að skera burt allt í kringum völdu hlutina í staðinn, smelltu á {{ui:Sniðkassi utan um valið}} í sömu valmynd, eða ýttu á {{key:Shift+X}}. Sjá [Skera IFC-líkan með sniðplani](topic:section-plane).

## Það sem þú átt að sjá

- Með nokkra hluti valda sýnir {{ui:Eiginleikar}} hversu marga og telur þá upp eftir flokki. Smelltu á einn þeirra einan til að sjá eiginleika hans.
- Falda hluti er ekki hægt að velja: smellur lendir á því sem er á bak við þá.
- Gegnsæir hlutir er heldur ekki hægt að velja, svo þú getur smellt beint í gegnum veggi á það sem þú einangraðir.
- Brúnir fela sig með hlutnum sínum og verða daufar með honum.
- Feling, einangrun og gegnsæi haldast þótt þú breytir, setjir inn hluti úr safni eða skerir líkanið með sniðplani. Að opna annað líkan sýnir allt aftur.

## Algeng mistök

- **Valmyndaratriðin eru grá.** Ekkert er valið. Smelltu fyrst á hlut; bentu á atriði til að lesa hvers vegna það getur ekki virkað.
- **Einangrun sýndi vegg sem ég hafði falið.** Einangrun sýnir nákvæmlega það sem þú valdir, falið eða ekki.
- **Heil hæð vantar.** Það er listinn {{ui:Hæðir}}, ekki {{ui:Sýna allt}}: hakaðu við hæðina aftur.

## Næst

- [Sýna og fela hæðir, rými og brúnir](topic:storeys-and-spaces)
- [Skera IFC-líkan með sniðplani](topic:section-plane)
