---
title: Rezy, pohľady a listy
summary: Nakreslite rezové čiary na pôdoryse a potom otvorte Listy pre súbor výkresov pripravený na tlač, vytvorený z modelu: pôdorysy každej úrovne, štyri pohľady, rezy budovy, tabuľky a konštrukcia stien, s popisovými poľami a mierkami, ako jeden PDF súbor.
keywords: listy, súbor výkresov, realizačná dokumentácia, tlačiť, vykresliť, pdf, pohľad, pohľady, severný pohľad, rez, rez budovy, rezová čiara, rezať, skryté čiary, popisové pole, číslo listu, mierka, 1/4" = 1'-0", 1:50, 1:100, papier, 11x17, 24x36, A3, A1, súbor pre stavebné povolenie
from: 91ed0cde
---

## Čo urobíte

Vytvorte súbor výkresov z modelu: pôdorys každej úrovne, severný, východný, južný a západný pohľad, rez budovy pre každú rezovú čiaru, tabuľky dverí, okien, miestností a reziva a pohľad na každú konštruovanú stenu. Súbor sa pri každom otvorení znova kreslí z modelu, takže vždy zodpovedá tomu, čo ste postavili.

## Nakreslenie rezovej čiary

1. Na úrovni otvorte {{ui:Zostava}} a vyberte {{ui:Rezová čiara}}.
2. Kliknite, kde čiara začína a kde končí. Krátka čiara v jej strede ukazuje stranu, na ktorú rez hľadí: ľavú stranu čiary, keď idete od prvého kliknutia k druhému.
3. Čiara sa zobrazí v pôdoryse s jej hlavicami a písmenom (A, potom B, a tak ďalej).

Čiaru zmeníte vo **Vlastnostiach**: jej písmeno, **Otočiť pohľad**, aby ste sa pozreli opačným smerom, a **Pozerať až na**, aby sa pohľad zastavil nastavenú vzdialenosť za rezom (0 zobrazí všetko za ním). Na odstránenie stlačte {{key:Delete}}.

## Otvorenie listov

1. Kliknite na {{ui:Listy}} na lište modelu (vedľa {{ui:Tlačiť}}).
2. Listy sú uvedené vľavo: **A-101** a ďalšie pre pôdorysy, **A-201** pre pohľady, **A-301** pre rezy, **A-401** pre tabuľky a **S-101** pre konštrukciu stien. Kliknutím na jeden ho zobrazíte.
3. Vyberte **Papier**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 alebo A1. Papier si ponechá svoj štandardný názov a jeho veľkosť je zapísaná v {{ui:Jednotky}}, ktoré ste vybrali, napríklad *Letter · 8.5 × 11 in* alebo *A3 · 297 × 420 mm*.
4. Kliknite na {{ui:Stiahnuť súbor ako PDF}}: jedna strana na list.

## Štandardné poznámky z predpisového balíka

V liste umožňuje {{ui:Štandardné poznámky}} umiestniť poznámky z predpisového balíka (podľa odboru) do pravého stĺpca listu. Každá poznámka si uchová balík a klauzulu, z ktorej pochádza, a vytlačený list uvedie, keď balík nie je overený. Poznámky sú východiskom: o tom, čo hovoria, rozhoduje osoba zodpovedná za výkres. Potrebujú doplnok Building regulations.

## Čo je na listoch

- **Pôdorysy** zobrazujú múry, dvere, okná, miestnosti s ich plochami, kóty a rezové čiary, v najväčšej štandardnej mierke, ktorá sa zmestí: 1/4" = 1'-0" alebo menšia (1:50 alebo menšia v milimetroch).
- **Pohľady** sa kreslia z 3D modelu s odstránenými skrytými čiarami, dva na list, všetky v rovnakej mierke, so základnou čiarou terénu pod nimi. Strecha, základy a terén sa zobrazia tak, ako sú modelované.
- **Rezy** vyplnia to, čím rez prechádza (múry, podlažia, strecha), a zobrazia to, čo je vidieť za ním.
- **Pohľady a rezy majú svoje poznámky:** značku pre každú úroveň s jej názvom a výškou vpravo, výšku medzi úrovňami vľavo a na pohľade pod budovou jej šírku a označenie (D1, W1) na každých dverách a oknách v múre, ktorý smeruje k vám. Pre vnútorné múry miestnosti pozri [Interiérové pohľady](topic:interior-elevations).
- **Tabuľky** sú rovnaké tabuľky ako {{ui:Tabuľky}} na lište modelu.
- **Konštrukcia** zobrazuje stojky, rámy, nadpražia a parapety každej konštruovanej steny tak, ako sú vidieť z jej vonkajšej strany, aby ich mohla partia vytýčiť. Pozri [Konštrukcie múrov, podlaží a striech](topic:framing).

Každý list má popisové pole s jeho číslom, názvom, názvom súboru a dátumom.

:::tip
Listy sa vytvárajú z modelu: ak chcete zmeniť výkres, zmeňte model a znova otvorte {{ui:Listy}}.
:::

:::note
Pohľady a rezy zobrazujú len čiary a výplne: kóty, značky úrovní a poznámky na nich ešte nie sú hotové.
:::
