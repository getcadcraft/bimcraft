---
title: Riešenie kolízií podľa návrhov jednotlivých profesií
summary: Z výsledkov kontroly kolízií panel Navrhované opravy uvedie pre každú kolíziu, čo môže urobiť každá profesia — potrubie obídené pod nosníkom, potrubie posunuté nabok, stĺp presunutý, otvor v nosníku — každé vyskúšané na kópii modelu s jeho kompromismi, aby ste ho mohli prijať alebo zamietnuť. Prijaté opravy sa zapíšu ako jeden krok späť.
keywords: kolízia, oprava kolízie, riešenie kolízií, usporiadanie kolízií, koordinácia, navrhnúť opravy, preložiť, obísť, posunúť, potrubie, vzduchotechnika, kábelový žľab, nosník, stĺp, otvor, chránička, kompromis, profesia, konštrukcia, strojné, vodoinštalácia, elektroinštalácia, architektúra, asistent
from: f7bafdd9
---

## Čo budete robiť

Premeňte zoznam kolízií na rozhodnutia. Každá profesia (konštrukcia, strojné, vodoinštalácia, elektroinštalácia, architektúra) navrhuje opravy len pre svoje vlastné prvky, každý návrh sa kontroluje na kópii modelu a vy vyberiete.

## Postup

1. Najprv spustite kontrolu kolízií. Pozri [Kontrola kolízií](topic:clash-check) a [Kontrola potrubí a vzduchotechniky voči konštrukcii](topic:mep-against-structure).
2. Pod výsledkami kliknite na {{ui:Propose fixes}}. Vedľa modelu sa otvorí panel **Navrhované opravy**.
3. Pri každej kolízii vidíte návrhy každej profesie, najlepšie ako prvé. Každý riadok hovorí, čo robí, a aké má kompromisy: či kolíziu vyrieši, koľko nových kolízií vytvorí, ktoré pravidlá poruší, koľko trasy pridá alebo ako ďaleko sa posunie, koľko tvaroviek a koľko bodov má hodnotenie nákladov.
4. Kliknite na {{ui:Show}}, aby ste videli prvky v 3D. Kliknite na {{ui:Accept}} pri oprave, ktorú chcete (jedna na kolíziu), alebo na {{ui:Reject}}.
5. Riadok dole hovorí, čo robia všetky vaše prijaté opravy spolu: koľko kolízií je vyriešených, koľko zostáva a či niečo nové koliduje.
6. Kliknite na {{ui:Apply accepted fixes (one undo step)}}. Kontrola kolízií sa spustí znova. {{ui:Undo}} ich všetky vráti naraz.

## Čo môže každá profesia

- **Strojné** (vzduchotechnické potrubia, vykurovacie a chladiace potrubia): obísť nad alebo pod na úseku, ktorý zasahuje, zdvihnúť alebo spustiť celú trasu, posunúť nabok, sploštiť obdĺžnikové potrubie pri rovnakej ploche.
- **Vodoinštalácia** (voda, odpad, plyn, požiarna voda): tie isté úpravy, s výnimkou gravitačného odpadu, ktorý sa nikdy neobchádza; môže sa posunúť iba ako celok so zachovaním spádu.
- **Elektroinštalácia** (kábelové žľaby a chráničky): tie isté úpravy; žľab musí nad sebou zachovať 150 mm voľného priestoru na uloženie kábla.
- **Konštrukcia**: posunúť stĺp (až o 300 mm) alebo otvor v stojine nosníka či v strope pre trasu, ktorá prechádza. Každá konštrukčná oprava uvádza, že ju schvaľuje statik.
- **Architektúra**: chránička v stene pre trasu, ktorá prechádza, alebo posun steny, o ktorej je známe, že nenesie zaťaženie.

## Čo by ste mali vidieť

- Opravy, ktoré porušujú pravidlo, sú označené: medzera menšia ako 25 mm od niečoho iného, pod čiarou voľnej výšky 2,100 mm, otvor v stojine nosníka väčší ako 40 % výšky nosníka alebo príliš blízko jeho koncov, nosník, ktorý by zmenil rozpätie.
- Opravy, ktoré môže BimCraft urobiť, sa použijú na model: trasy, ktoré ste nakreslili nástrojmi Potrubie a Vzduchotechnika, a stĺpy, ktoré ste nakreslili. Ostatné hovoria **Iba poradenstvo**: ich prijatie namiesto toho pridá problém na karte Problémy.

## Dobré vedieť

- Opravy pochádzajú zo vstavaných pravidiel v aplikácii; na ne sa nepoužíva AI.
- Ak pripojíte asistenta (pozri [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants)), môže prečítať kolízie a pridať vlastné návrhy pre jednu profesiu do otvoreného panela. Kontrolujú sa rovnako, sú označené menom asistenta a nič sa nezmení, kým ich neprijmete a nepoužijete.
- Kópia sa kontroluje ohraničujúcimi kvádrami okolo každého prvku a každého úseku trasy, takže šikmá trasa môže ukázať kolíziu, ktorú kontrola kolízií nezachytí. Po použití spustite kontrolu kolízií znova: je to konečné slovo.
- Limity (ako ďaleko sa trasa môže posunúť, ako vysoko môže vystúpať obchádzka, medzera) sú predvolené hodnoty uvedené v paneli.

## Ďalej

- [Problémy a súbory BCF](topic:issues-bcf)
- [Kreslenie trás potrubí a vzduchotechniky](topic:pipes-and-ducts)
