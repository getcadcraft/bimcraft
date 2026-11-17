---
title: Uloženie pohľadov a prechádzok
summary: Uchovajte kamerové pohľady na model podľa názvu, vráťte sa k nim, prehrávajte ich za sebou a nahrajte prechádzku budovou na neskoršie prehratie.
keywords: pohľady, uložené pohľady, kamera, kamery, pohľad, scéna, scény, prehliadka, prezentácia, prechádzka, prejsť, prelet, nahrať, prehrať, dráha, animácia
from: 3af19a36
---

{{ui:Pohľady}} na lište uchováva kamery 3D pohľadu v súbore modelu, takže vy aj ten, komu ho pošlete, sa k nim vrátite priamo.

## Uloženie pohľadu

1. Nastavte 3D pohľad: otáčajte, priblížte, skryte, čo nechcete.
2. Kliknite na {{ui:Pohľady}}, napíšte názov (alebo ponechajte ponúkaný) a kliknite na {{ui:Uložiť pohľad}} alebo stlačte {{key:Enter}}.

Uloženie s názvom, ktorý už je v zozname, aktualizuje ten pohľad. Kliknite na názov pohľadu, aby ste sa k nemu vrátili; kamera sa tam plynule presunie.

Šípky menia poradie, ceruzka premenúva a kôš maže. Každá zmena je jeden krok, takže ju {{key:Ctrl+Z}} vráti späť.

## Prehrávanie pohľadov

{{ui:Prehrať pohľady}} prejde z jedného pohľadu na ďalší v poradí zoznamu a pri každom sa na chvíľu zastaví. {{key:Esc}} alebo {{ui:Zastaviť}} to ukončí.

## Nahrávanie prechádzky

1. Zapnite [Prechádzka](topic:walk) a začnite sa prechádzať vnútri budovy.
2. V {{ui:Pohľady}} kliknite na {{ui:Nahrať prechádzku}}.
3. Choďte klávesami {{key:W}} {{key:A}} {{key:S}} {{key:D}} a rozhliadajte sa myšou.
4. Kliknite na {{ui:Zastaviť nahrávanie}}. Prechádzka sa uloží ako "Prechádzka 1", s dĺžkou.

Kliknite na prechádzku, aby sa prehrala tak, ako ste ju prešli. {{key:Esc}} ju zastaví.

## Vykreslenie prechádzky ako videa

Kliknite na ikonu filmu vedľa prechádzky. Dialóg videa vykreslí každý snímok prechádzky s nastaveniami vykreslenia, ktoré ste zvolili naposledy, vo veľkosti, snímkovej frekvencii a kvalite, ktoré tu zvolíte. Uložte ho ako video WebM alebo MP4, alebo ako ZIP s jedným obrázkom na snímok. Snímky trvajú rovnako dlho ako obrázky, takže začnite s {{ui:Rýchle}}.

## Narácia prechádzky

Kliknite na ikonu bubliny s rečou vedľa prechádzky. Napíšte jeden riadok pre každú vec, ktorá sa povie, a začnite riadok časom, kedy sa začína (`12`, `0:12` alebo `1:02.5`). Riadok bez času nasleduje riadok nad ním po čase, ktorý trvá jeho vypovedanie. Vyberte jazyk, v jazyku klienta, ak je to ten, kto bude sledovať. {{ui:Ukážka}} prehrá slová hlasom tohto počítača a zobrazí ich ako titulky; to isté sa stane vždy, keď sa prechádzka prehráva. {{ui:Uložiť s prechádzkou}} uchová naráciu v IFC spolu s prechádzkou.

Váš vlastný pripojený asistent môže naráciu napísať za vás: požiadajte ho, aby pozrel na prechádzku a uložené pohľady, a nastaví riadky v jazyku, ktorý uvediete, ako jeden krok na vrátenie späť.

Vykreslené video nemá vlastný zvuk, pretože prehliadač nedokáže nahrať vlastný hlas. Uložte titulky (`.srt` alebo `.vtt`) a pridajte ich k videu vo vašom prehrávači alebo editore. Hlasy, ktoré môžete vybrať, závisia od počítača: jazyk bez nainštalovaného hlasu titulky dostane aj tak.

## V súbore

Pohľady a prechádzky sa uchovávajú v IFC ako sada vlastností `CadCraft_Views` na projekte: obyčajné IFC, ktoré ostatné programy ignorujú. Sú v súradniciach prvého modelu, takže sedia aj po znovunačítaní modelu alebo pridaní ďalšieho modelu.

:::tip
Ak chcete vykresliť obrázok z uloženého pohľadu, prejdite na pohľad a potom kliknite na [Vykreslenie](topic:render).
:::
