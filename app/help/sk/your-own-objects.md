---
title: Priniesť vlastné objekty a súbory rodín do knižnice
summary: Čítajte súbory rodín (.rfa) a súbory IFC, DWG, DXF, glTF alebo OBJ na karte Knižnica, umiestňujte ich ako ľubovoľnú položku knižnice a uchovávajte ich v Moje objekty, súkromnom zozname, ktorý vidíte len vy.
keywords: rfa, rodina, rodiny, knižnica rodín, vlastné objekty, moje objekty, súkromné objekty, súkromná knižnica, importovať objekty, obsah výrobcu, bim objekty, ifc objekt, gltf, obj, blok dwg, uchovať, prepnúť, migrovať
from: 886261f8
---

## Čo urobíte

Priniesť objekty, ktoré už máte, do BimCraft: knižnicu rodín z Revitu, IFC alebo DWG stiahnutie od výrobcu, sieť z iného modelovacieho programu. Súbor prečítate na karte {{ui:Knižnica}}, objekt umiestnite do modelu ako správny IFC prvok a ak ho chcete použiť neskôr, uchovajte ho v {{ui:Moje objekty}}.

## Postup

1. Otvorte IFC model alebo začnite novú budovu.
2. Kliknite na kartu {{ui:Knižnica}} vedľa {{ui:Vlastnosti}}.
3. Kliknite na {{ui:Súbory…}}, potom na {{ui:Vybrať súbor…}}. Vyberte jeden súbor alebo naraz viac: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` alebo `.csv`. Alebo kliknite na {{ui:Vyberte priečinok…}}, aby sa načítal celý priečinok a priečinky v ňom (až 200 súborov naraz).
4. Kliknite na položku, aby ste videli, čo sa načítalo: náhľad v pôdoryse, názov, výrobcu a model, rozmery a poznámky.
5. Kliknite na {{ui:Umiestniť do pôdorysu}} alebo {{ui:Umiestniť do modelu}}, aby ste ho umiestnili.
6. Ak ho chcete použiť neskôr v iných projektoch, kliknite na {{ui:Uchovať v mojich objektoch}}. Pri načítaní viacerých súborov {{ui:Uchovať všetko v mojich objektoch}} uchová všetky naraz.
7. Neskôr kliknite na {{ui:Moje objekty}} na karte Knižnica, aby ste ich našli. Umiestňujú sa, vymieňajú a aktualizujú ako ľubovoľná položka knižnice.

Súbory sa čítajú na tejto karte. Nič sa nenahrá, kým nevyberiete {{ui:Uchovať v mojich objektoch}}.

## Čo sa načíta z každého druhu súboru

| Súbor | Čo dostanete |
|---|---|
| IFC | Každý typ prvku ako objekt so skutočným 3D tvarom, triedou IFC a sadami vlastností |
| glTF, GLB, OBJ | Jeden objekt so skutočným 3D tvarom ako sieť. Najprv nastavte jednotky a smer hore. |
| DWG, DXF | Každý blok ako objekt s výkresom v pôdoryse a atribútmi |
| Súbor rodiny (`.rfa`) | Názov rodiny, kategória, výrobca, model, parametre a jej typy. **Nie jej 3D tvar:** namiesto neho sa použije kváder s Šírkou, Hĺbkou a Výškou rodiny. |
| CSV | Jeden objekt na riadok: názov, rozmery a údaje, nakreslený ako kváder |

## Súbory rodín a ich 3D tvar

3D tvar vnútri súboru `.rfa` je uložený v nedokumentovanom formáte, preto BimCraft načíta údaje rodiny a neodhaduje jej geometriu. Položka to hovorí: "Geometria z tejto rodiny nebola načítaná; namiesto nej stojí kváder."

Ak chcete rodinu priniesť so skutočným tvarom, exportujte ju z programu, ktorý ju vytvoril (Revit):

1. Otvorte rodinu alebo projekt, v ktorom je rodina umiestnená.
2. Vyberte **Súbor > Export > IFC**. Pozrite si [nastavenia exportu, ktoré sa tu najlepšie otvárajú](topic:rvt-to-ifc).
3. V BimCraft prečítajte súbor `.ifc` pomocou {{ui:Súbory…}}. Každý typ rodiny prichádza ako samostatný objekt, so svojím tvarom a sadami vlastností.

Mnohí výrobcovia ponúkajú stiahnutie IFC alebo DWG vedľa súboru rodiny. Tie sa čítajú priamo.

## Typy rodín

Rodina s viacerými typmi príde ako jedna položka s voľbou {{ui:Variant}}, jeden variant na typ. Každý variant má hodnoty, ktoré sa medzi typmi líšia, a vlastný kváder, keď typ má Šírku a Hĺbku. Rodina s jedným typom je obyčajná položka vyplnená hodnotami tohto typu.

Niektoré rodiny majú typy v katalógu typov: súbor `.txt` s rovnakým názvom vedľa súboru rodiny. Vyberte oba spolu alebo vyberte priečinok a riadky katalógu sa stanú variantmi.

## Údaje rodiny na skutočnom tvare

Ak priečinok obsahuje súbor rodiny a súbor IFC, glTF alebo OBJ s rovnakým názvom (`Chair.rfa` a `Chair.ifc`), vyberte oba spolu alebo vyberte priečinok. BimCraft vytvorí jednu položku: súbor rodiny dá názov, výrobcu, model, parametre a typy a druhý súbor dá skutočný 3D tvar. Poznámky hovoria, z ktorého súboru tvar pochádza. Jeden tvar sa použije pre každý typ.

Ak súbor rodiny obsahuje uložený obrázok, podrobnosti položky zobrazia tento obrázok pod výkresom v pôdoryse. Obrázok sa zobrazí len tam; nie je uchovaný spolu s položkou.

## Moje objekty

{{ui:Moje objekty}} je váš vlastný súkromný zoznam v Knižnici. Vidíte len vy, čo je v ňom: nie je vo verejnej knižnici, nie je vo vyhľadávaní a nezobrazuje sa vášmu tímu. Je viazaný na váš účet, takže na inom počítači sú tie isté objekty, keď sa prihlásite do knižnice.

- Na uchovanie objektu sa musíte prihlásiť do knižnice. Pozrite si [prihlásenie do knižnice](topic:library-credits).
- Uchovanie objektu odošle tento jeden objekt na váš účet. Dovtedy zostáva vo vašom počítači.
- {{ui:Odstrániť z mojich objektov}} vyberie objekt zo zoznamu. Kópie, ktoré už sú umiestnené vo výkresoch, zostanú.
- Ak chcete objekt zdieľať so všetkými, nahrajte ho namiesto toho do verejnej knižnice pod licenciou, ktorú vyberiete.

:::note
Moje objekty sa testujú a pre váš účet ešte nemusia byť otvorené. Ak zdroj chýba alebo sa zobrazí "Moje objekty ešte nie sú pre tento účet otvorené", stále môžete čítať a umiestňovať svoje vlastné súbory pomocou {{ui:Súbory…}}; uložia sa do vášho modelu.
:::

## Časté chyby

- **Očakávanie skutočného tvaru rodiny zo súboru `.rfa`.** Čítajú sa len jej údaje. Pre tvar exportujte IFC.
- **Dve položky tam, kde ste očakávali jednu.** Rodina a jej súbor tvaru sa spoja, len keď sa ich názvy zhodujú presne, okrem prípony, a sú v rovnakom priečinku.
- **Sieť príde tisíckrát väčšia alebo ležiaca na boku.** Pred výberom súboru nastavte {{ui:Jednotky súboru}} a {{ui:Os hore pre sieť}} pod {{ui:Súbory…}}.
- **"Žiadne údaje rodiny" pri súbore.** Je to projekt (`.rvt` uložený s inou príponou) alebo šablóna rodiny, nie rodina. Pozrite si [Čítanie súboru projektu alebo rodiny](topic:read-rvt-file).
- **Uchovávanie obsahu, ktorý možno nesmiete ukladať.** Niektoré platené knižnice nedovoľujú kópie mimo vlastnej služby. Skontrolujte podmienky obsahu, ktorý ste nevytvorili.
