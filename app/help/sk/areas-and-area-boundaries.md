---
title: Plochy a hranice plôch
summary: Merajte hrubú stavebnú plochu alebo prenajímateľnú plochu v hraniciach, ktoré nakreslíte alebo prevezmete zo stien, a vypíšte plochy v tabuľke.
keywords: plocha, plochy, hranica plochy, schéma plôch, hrubá stavebná plocha, hrubá podlahová plocha, GFA, prenajímateľná, pôdorys plôch, tabuľka plôch, výber stien, nie je uzavreté
from: c79f96d2
---

## Čo budete robiť

Nakreslite hranice schémy plôch, umiestnite plochy do nich a prečítajte si súčty.

## Kde sú nástroje

- Rozloženia s pásom nástrojov: {{ui:Architecture}} › **Miestnosť a plocha** › {{ui:Area}} a {{ui:Area Boundary}}.
- Klasické rozloženie: panel Kresliť › ponuka {{ui:Rooms}}.

## Postup

1. Vyberte {{ui:Area Boundary}}. V riadku vyberte {{ui:Scheme}}: Hrubá stavebná alebo Prenajímateľná. Každá schéma má vlastné hranice.
2. Vyberte, ako vytvoriť čiary v {{ui:Make by}}:
   - **Kresliť**: klikajte bod za bodom.
   - **Výber stien: stredová čiara**: kliknite na stenu a jej stredová čiara je hranicou.
   - **Výber stien: kliknutá strana**: kliknite na stenu na strane, ktorú chcete; táto plocha je hranicou. Pre hrubú stavebnú plochu kliknite na vonkajšiu stranu vonkajších stien.
3. Vyberte {{ui:Area}}. Vyberte rovnakú schému, ak chcete, zadajte názov, číslo alebo typ a kliknite vnútri hraníc.
4. Plocha sa zmeria hneď. Vyberte ju, aby ste zmenili jej názov, číslo alebo typ vo Vlastnostiach.

## Čo z čoho vyplýva

- Hranica vytvorená výberom steny nasleduje tú stenu: keď stenu posuniete, plocha sa v tom istom kroku znova zmeria.
- Hranica, ktorú nakreslíte, zostane tam, kde ste ju nakreslili.
- Plochy stien, ktoré sa stretávajú v rohu, sa tam stretnú tiež, takže štyri vybrané steny uzavrú plochu bez medzier.
- Hranice plôch sa zobrazia v pôdoryse, keď máte v ruke nástroj miestnosti alebo plochy, inak nezahlcujú pôdorys.

## Ak sa hranice neuzavrú

Plocha sa aj tak umiestni. Označí sa **Nie je uzavreté** a nič nezmeria, kým sa hranice okolo nej neuzavrú. Je to odporúčanie: nič sa neodmietne.

## Tabuľka

Ľavý panel › {{ui:Schedules}} › **Plochy**: schéma, číslo, názov, typ, úroveň, plocha a obvod, so súčtom. Kliknutie na riadok vyberie plochu. {{ui:Download CSV}} dá tú istú tabuľku.

## V IFC

Plocha je IfcSpace bez telesa: PredefinedType GFA pre schému hrubej stavebnej plochy, USERDEFINED s ObjectType Rentable pre prenajímateľnú. Obsahuje GrossFloorArea a GrossPerimeter a žiadnu čistú plochu, takže sa nezamení s miestnosťou. Hranica je IfcVirtualElement.

## Ešte nie je hotové

- Vlastné schémy (iba Hrubá stavebná a Prenajímateľná).
- Farebné výplne podľa typu plochy.
- Pravidlá, ktoré hranicu umiestnia za vás, napríklad „po líniu skla“.

Pozri aj [Miestnosti a priečky](topic:rooms-and-separators), [Značky miestností a plôch](topic:room-and-area-tags).
