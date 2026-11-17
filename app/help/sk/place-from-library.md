---
title: Umiestnenie zariadení a nábytku z knižnice
summary: Nájdite položku v knižnici, v súbore alebo v otvorenom výkrese, umiestnite ju na podlažie modelu IFC s náhľadom duchom, otočte ju, prichyťte k stene a uložte.
keywords: presun, otočenie, otočiť, potiahnutie, knižnica, librarycraft, umiestnenie, vloženie, zariadenie, nábytok, blok, rodina, položka, katalóg, obsah, kcl, csv, gltf, obj, rfa, dwg, typ IFC
from: 3dad5d4b
---

## Čo urobíte

Vložte položku knižnice do modelu IFC: drez, pracovný stôl, stoličku. BimCraft ju zapíše ako správny prvok IFC s typom, takže každá kópia tej istej položky zdieľa jednu sadu geometrie a jej údaje, číslo položky a licencia sa prenesú.

## Postup

1. Otvorte model IFC.
2. Kliknite na kartu {{ui:Knižnica}} vedľa {{ui:Vlastnosti}} vpravo, alebo na {{ui:Knižnica}} na lište nad modelom.
3. Vyberte zdroj:
   - **Vstavané symboly**: všeobecné symboly pôdorysu vodoinštalácie, ktoré BimCraft obsahuje pod Apache-2.0, dostupné offline. Pred stavbou overte ich rozmery. Pre elektrické symboly pôdorysu a elektrické zariadenia IFC použite **Zostava › Elektroinštalácia**.
   - **Knižnica**: knižnica CadCraft na tejto stránke. Verejné položky nevyžadujú prihlásenie.
   - **Tento súbor**: bloky otvoreného výkresu DWG alebo DXF. Dynamický blok so stavmi viditeľnosti sa ponúkne raz pre každý stav, pomenovaný "Drez: Dvojitá misa", každý nakreslený iba s objektmi tohto stavu.
   - **Súbory…**: súbor DWG, DXF, IFC, glTF/GLB, OBJ, RFA alebo CSV vo vašom počítači. Načíta sa na tejto karte; nič sa nenahráva.
   - **Iné zdroje**: iná knižnica, ktorá hovorí rovnakým formátom zdroja. Pridajte jej adresu raz; uloží sa v tomto prehliadači.
4. Vyhľadajte alebo vyberte kategóriu a kliknite na kartu. Karta zobrazuje náhľad pôdorysu, názov, výrobcu a model, licenciu a verziu.
5. Kliknite na {{ui:Umiestniť do pôdorysu}} (v zobrazení {{ui:Pôdorys}}) alebo na {{ui:Umiestniť do modelu}} (v 3D zobrazení). V zobrazení {{ui:Rozdeliť}}, kde sa zobrazujú pôdorys aj 3D pohľad, je tlačidlo rozdeľovacie: jeho hlavná akcia je {{ui:Umiestniť do pôdorysu}} a rozbaľovacia ponuka na jeho pravom konci otvorí {{ui:Umiestniť do modelu}}. Alebo potiahnite kartu, alebo obrázok z podrobností položky, na pôdorys alebo 3D pohľad: položka sa umiestni tam, kde ju pustíte. Perom alebo prstom pridržte kartu chvíľu, potom potiahnite.
6. V lište umiestnenia vyberte podlažie. V 3D pohľade sú podlažia nad ním počas umiestňovania skryté a pohľad sa otočí zhora; v pôdoryse pôdorys už zobrazuje toto podlažie. Výber {{ui:Umiestniť do modelu}} len z pôdorysu zobrazí vedľa neho 3D pohľad.
7. Presuňte ukazovateľ nad model: priesvitná škatuľa ukazuje, kam položka pôjde.
8. Stlačte {{key:R}} na otočenie o 90°. Stlačte {{key:Tab}} (alebo {{ui:Prichytenie k stene}}), aby sa jej zadná strana opreli o najbližšiu stenu, čelom k miestnosti.
9. Kliknutím ju umiestnite. Alebo zadajte polohu do **X, Y (mm)**, napríklad `1200, 3400`, a stlačte {{key:Enter}}.

Svetlo alebo čokoľvek zavesené zhora: nastavte **Uchytenie** na **Na strop**. Horná hrana položky potom sedí na spodnej strane stropu nad miestom (alebo na výške úrovne tam, kde nie je strop). Keď je na pôdorysnom zobrazení stropný pôdorys, **Uchytenie** sa začne na **Na strop**.

10. Odpovedzte na jednu otázku: **číslo položky** (vyplní sa ďalšie voľné číslo), množstvo a poznámku. Stlačte {{key:Enter}}.
11. Umiestnite ďalšie, alebo stlačte {{key:Esc}}, aby ste skončili.
12. Kliknite na {{ui:Uložiť ako IFC}}, aby ste stiahli upravenú kópiu.

## Pôdorys alebo model

Tlačidlo umiestnenia z knižnice sa riadi podľa zobrazenia, v ktorom ste, a zmení sa hneď, ako zmeníte zobrazenie (tlačidlá {{ui:Pôdorys}}, {{ui:Rozdeliť}} a {{ui:3D}}, klávesnica, otvorenie súboru). Pôdorys zobrazuje jedno tlačidlo, {{ui:Umiestniť do pôdorysu}}; 3D zobrazuje jedno tlačidlo, {{ui:Umiestniť do modelu}}; Rozdeliť zobrazuje rozdeľovacie tlačidlo s {{ui:Umiestniť do pôdorysu}} ako hlavnou akciou a {{ui:Umiestniť do modelu}} v jeho ponuke. Oba spôsoby používajú tú istú lištu umiestnenia a zapisujú ten istý prvok IFC: ukazovateľ pracuje v pôdoryse pre jeden a v 3D pohľade pre druhý. Stlačte {{key:Esc}} kedykoľvek, aby ste zastavili.

Potiahnutie karty nemá vlastnú klávesu; s klávesnicou urobí to isté rozdeľovacie alebo obyčajné tlačidlo.

## Presun alebo otočenie umiestnenej položky

V {{ui:Kresliť}} vyberte položku v pôdoryse. Na jej vkladacom bode sa zobrazí štvorcový úchyt a vedľa neho okrúhly úchyt.

- Potiahnite položku alebo jej štvorcový úchyt na presun. Prichytáva sa ako nástroj Stena (konce a líce stien); {{key:Shift}} ju udrží kolmo k pôvodnej polohe.
- Potiahnite okrúhly úchyt na otočenie po krokoch 15°. Pri krokoch 1° držte {{key:Shift}}.
- Stlačte {{key:R}} na otočenie o 90°.
- Vo **Vlastnostiach** (aj v 3D pohľade) zadajte **X**, **Y** a **Otočenie (°)**, alebo kliknite na **Otočiť o 90°**.

Každý presun je jeden krok {{ui:Späť}} a prenáša sa v Live TeamWork. Položka si ponechá číslo položky, svoje údaje z knižnice a výšku nad úrovňou. Ešte nie je hotové: potiahnutie v 3D pohľade.

## Čo by ste mali vidieť

- Položka v modeli, vybraná, s vlastnosťami vpravo: políčko **Položka knižnice** s jej licenciou a uvedením autora a sady `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` a, pre položky z označených výkresov, `CadCraft_SourceAttributes`.
- "Umiestnené: *položka* (položka *n*)" v zozname zmien. {{key:Mod+Z}} to vráti späť.
- Stavový riadok: "*položka* bola umiestnená ako položka *n*."

## Dobré vedieť

- Niektoré položky sa dodávajú vo viacerých veľkostiach alebo možnostiach: karta potom má výber **Variant** a umiestni sa ten, ktorý vyberiete. Pozrite [Umiestnenie a výmena položky knižnice s variantmi](topic:library-variants).
- Položka bez 3D telesa (2D symbol) sa umiestni s náhradnou škatuľou; výšku zadáte, keď sa spýta.
- Ďalšie rovnaké: vyberte umiestnenú položku a použite {{ui:Kopírovať}} a {{ui:Prilepiť}}, alebo {{key:Mod+D}}. Pozrite [Kopírovanie, prilepenie a duplikovanie položiek knižnice](topic:copy-paste).
- Ak chcete, aby každé umiestnenie začínalo so zapnutým prichytením k stene, zapnite **Začať so zapnutým prichytením k stene** v [nastaveniach BimCraft](topic:settings).
- Dĺžky sa prevádzajú na jednotky vlastné modelu, akékoľvek sú.
- **Entourage** (stromy, kríky, ľudia, autá) je tiež v knižnici: hľadajte "tree", "person" alebo "car". Tieto kreslí CadCraft (CC0) a pri umiestnení si zachovajú svoje farby (kmeň hnedý, lístie zelené, okná auta priehľadné), v BimCraft aj v iných programoch BIM. Zobrazujú sa v [vykreslených obrázkoch](topic:render).
- V súbore IFC2X3 sa telo zapíše ako fazetový solid; v IFC4 ako trojuholníková sieť plôch. Obe sa otvoria v iných nástrojoch IFC.
- Výkres (DWG alebo DXF) sa tu nedá uložiť, takže položky sa umiestňujú iba do modelov IFC. Na výkrese použite **Tento súbor**, aby ste videli, čím by sa jeho bloky stali.

## Položky vo vašom jazyku

Položka môže mať svoj názov, popis a typ v iných jazykoch. Keď ich má v jazyku, na ktorý je nastavený BimCraft (Nastavenia › Všeobecné › Jazyk), stránka položky ich zobrazuje, s názvom, ktorý dal jej výrobca, pod nimi. Keď položku umiestnite, názov vo vašom jazyku sa zapíše do modelu, takže tabuľka {{ui:Vybavenie}} ho uvádza tak. Položka zostáva tou istou položkou: kontrola aktualizácií a výmena sa riadia podľa samotnej položky, nikdy podľa jej názvu. Položky bez prekladu si ponechajú svoje slová.

## Časté chyby

- **Tlačidlo umiestnenia chýba.** Nie je otvorený žiadny model IFC. Najprv otvorte jeden.
- **Duch nenasleduje ukazovateľ.** Ukazovateľ je mimo oblasti modelu alebo rovina podlažia nie je v zobrazení. Kliknite na {{ui:Zhora}}.
- **{{ui:Prichytenie k stene}} hlási, že nie sú žiadne steny.** Podlažie nemá steny v IFC (niektoré exporty dávajú steny na iné podlažie). Vyberte toto podlažie alebo zadajte X a Y.
- **Položky zo súboru majú zlú veľkosť.** Súbor nemá jednotky alebo uvádza iné. V {{ui:Súbory…}} zvoľte jednotky a načítajte ho znova.

:::tip
Umiestnenie tej istej položky dvakrát zdieľa jeden typ IFC, takže model s štyridsiatimi stoličkami uloží stoličku iba raz.
:::
