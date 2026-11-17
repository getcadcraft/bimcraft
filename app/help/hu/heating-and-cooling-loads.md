---
title: Fűtési és hűtési terhelések becslése
summary: Minden helyiség hővesztesége, éves fűtése fokosnapokkal és hűtési csúcsa, a modellben őt határoló elemekből és minden elem U-értékéből, a bemenetek láthatóan megjelenítve. Tervezési segédeszköz, nem megfelelőségi számítás.
keywords: energia, fűtés, hűtés, hőveszteség, hőterhelés, hűtési terhelés, u-érték, hőátbocsátási tényező, fokosnap, hdd, szellőzés, légcsere, belső nyereség, napenergia-nyereség, lambda, hővezetési tényező, szigetelés, korai tervezés, elemzés, helyiségek, terek
from: ec312d20
---

A {{ui:Természetes fény}} lapon, a {{ui:Számítás}} után nyissa meg a {{ui:Fűtési és hűtési terhelések}} részt, és kattintson a {{ui:A terhelések kiszámítása}} gombra. Minden helyiség megkapja a **hőveszteségét** egy hideg tervezési napon, az **éves fűtését** és a **hűtési csúcsát** egy meleg napon. Semmi sem kerül feltöltésre; a modellben semmi sem változik, hacsak nem ír be U-értéket.

:::warning
Ez **tervezési segédeszköz, nem megfelelőségi számítás**: állandósult állapotú becslés, minden bemenet a képernyőn látható. **Nem** az ISO 52016-1 módszer, nem szimuláció és nem energetikai tanúsítvány; nem méretezi a kazánokat, hőszivattyúkat vagy hűtőgépeket. Ellenőrizze az eredményeket, a berendezéseket pedig mérnökkel méreteztesse.
:::

## Mi határolja az egyes helyiségeket

A BimCraft magában a modellben találja meg ezeket, így bármely program IFC-fájlja működik (nem szükségesek a határoló terek, amelyeket egyes programok exportálnak). A helyiség saját felületének minden darabjából egyenesen kifelé néz:

- az első fal, ablak, ajtó, padló, tető, burkolat, függönyfal vagy gerenda, amelyet elér, **határolja** ezt a darabot;
- közvetlenül az elem mögött vagy **másik helyiség** (szomszédként számítva, azonos hőmérsékleten: nincs veszteség), vagy **semmi** (kint), a legalsó szinten lévő padló alatt pedig **a talaj**;
- egy másik helyiségbe nyíló nyitott ajtónyílás szomszédosnak számít; az a darab, amely egyáltalán semmihez nem ér (oldalirányban vagy lefelé 1,5 m, felfelé 8 m határon belül), a helyiség alatt van felsorolva, és nem számít bele.

Az ablakok és ajtók méretét az IFC-ből veszi (teljes szélesség × magasság), az őket tartalmazó faltól. Kattintson egy helyiségre a táblázatban, hogy lássa az összes őt határoló elemet a területével, U-értékével és azzal, honnan származik az U-érték.

## U-értékek

Minden elemhez a BimCraft ebben a sorrendben jár el:

1. **Az IFC saját U-értéke** — a `ThermalTransmittance` az elem közös tulajdonságkészletében (például `Pset_WallCommon`) vagy annak típusában. A legtöbb tervezőprogram képes ezt írni.
2. **Anyagrétegei** — 1 ÷ (belső felületi ellenállás + minden réteg vastagsága ÷ a hővezetési tényezője λ + külső felületi ellenállás), a szokásos felületi ellenállásokkal (falaknál 0,13 és 0,04 m²K/W; a belső oldalon felfelé 0,10, lefelé 0,17). A kezdéshez tipikus hővezetési tényezők (ásványgyapot 0,035, tégla 0,77, beton 1,4…); a {{ui:Anyagok hővezetési tényezője}} alatt írja be a gyártóét, és az ezekből a rétegekből számolt minden U-érték ehhez igazodik.
3. **Tipikus érték** (falaknál 0,3, tetőknél 0,2, padlóknál 0,25, ablakoknál 1,4, ajtóknál 1,6 W/m²K), ezt jelölve mint ilyet — írja be a sajátját.

Az egy helyiség részletei között megadott U-érték az elem közös tulajdonságkészletébe `ThermalTransmittance` néven íródik (egy lépés; a {{key:Mod+Z}} visszavonja). Ha több elem osztozik ezen a készleten (például egy faltípus), mindegyik együtt változik, és az állapotsor kiírja, hány darabról van szó.

## Fűtés

- **Hőveszteség** = Σ U × A × (belső − külső) mindenre, ami kifelé néz, + Σ U × A × (belső − talaj) a talajon álló padlókra + 0,335 × óránkénti légcsere × a helyiség térfogata × (belső − külső). A 0,335 Wh per m³ és kelvin a levegő sűrűségének (1,2 kg/m³) és hőkapacitásának (1005 J/kgK) szorzata.
- **Éves fűtés** = (a helyiség fokonkénti vesztesége a külső felé, a szerkezeten és a levegőn át, plusz talajvesztesége ugyanarra a különbségre skálázva) × a **fokosnapok** × 24 ÷ 1000, kWh-ban. Írja be a helyre vonatkozó fokosnapokat, vagy töltse be őket a {{ui:Fokosnapok beolvasása CSV-ből…}} lehetőséggel (soronként egy nap vagy hónap; minden sor utolsó számát összeadja). Az Ön forrása által használt alaphőmérsékletre vonatkozó fokosnapokat használja: ez az alap már számol az emberek, a világítás és a nap ingyen hőjével.

## Hűtés

A **hűtési csúcs** = a szerkezeten és a levegőn át a nyári tervezési hőmérsékletnél érkező hő + emberek (padlófelület személyenként × hő személyenként) + világítás és berendezés négyzetméterenként + **a nap**: az adott helyiségre vonatkozó {{ui:Nap az ablakokon át egy adott napon}} csúcsa. Előbb számolja ki a napot egy meleg napon; addig a nap 0-nak számít, és a szakasz ezt ki is írja. Minden rész csúcsát összeadjuk, akkor is, ha különböző órákban esnek, ami kissé túlbecsül.

## Mit hagy ki

- Az ISO 52016-1 havi és óránkénti módszerei (fizetős szabvány), az épület tömegében tárolt hő, a hőhidak, a fűtő- és hűtőrendszerek teljesítménye és az éghajlati fájlok.
- A szomszédos helyiségeket azonos hőmérsékletűnek vesszük; a fűtetlen terek nincsenek modellezve.

Lásd még: [A természetes fény becslése helyiségenként](topic:daylight-factor).
