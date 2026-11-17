---
title: Uložení pohledů a procházek
summary: Uchovávejte kamerové pohledy na model podle názvu, vracejte se k nim, přehrávejte je jeden za druhým a nahrajte procházku budovou k přehrání.
keywords: pohledy, uložené pohledy, kamera, kamery, pohled z kamery, scéna, scény, prohlídka, prezentace, procházka, projít budovou, přelet, nahrát, přehrát, trasa, animace
from: 3af19a36
---

{{ui:Pohledy}} na panelu nástrojů uchovává kamery 3D pohledu v souboru modelu, takže vy i ti, kterým jej pošlete, se k nim dostanete přímo.

## Uložení pohledu

1. Nastavte 3D pohled: otáčejte, přibližujte, skryjte, co nechcete.
2. Klikněte na {{ui:Pohledy}}, napište název (nebo ponechte nabízený) a klikněte na {{ui:Uložit pohled}} nebo stiskněte {{key:Enter}}.

Uložení pod názvem, který už v seznamu je, ten pohled aktualizuje. Kliknutím na název pohledu se vrátíte k němu; kamera se k němu plynule přesune.

Šipky mění pořadí, tužka přejmenuje, koš smaže. Každá změna je jeden krok, takže ji {{key:Ctrl+Z}} vrátí zpět.

## Přehrání pohledů

{{ui:Přehrát pohledy}} přejde od jednoho pohledu k dalšímu v pořadí seznamu a u každého se na okamžik zastaví. {{key:Esc}} nebo {{ui:Zastavit}} ji ukončí.

## Nahrání procházky

1. Zapněte [Procházka](topic:walk) a začněte procházet uvnitř budovy.
2. V {{ui:Pohledy}} klikněte na {{ui:Nahrát procházku}}.
3. Procházejte klávesami {{key:W}} {{key:A}} {{key:S}} {{key:D}} a rozhlížejte se myší.
4. Klikněte na {{ui:Zastavit nahrávání}}. Procházka se uloží jako "Procházka 1" s délkou.

Kliknutím na procházku ji přehrajete tak, jak jste ji prošli. {{key:Esc}} ji zastaví.

## Vykreslení procházky jako video

Klikněte na ikonu filmu vedle procházky. Dialog videa vykreslí každý snímek procházky s nastavením vykreslení, které jste zvolili naposledy, ve velikosti, snímkové frekvenci a kvalitě, které zde zvolíte. Uložte jej jako video WebM nebo MP4, nebo jako ZIP s jedním obrázkem na snímek. Snímky trvají tak dlouho jako obrázky, takže začněte s {{ui:Rychlé}}.

## Komentář k procházce

Klikněte na ikonu bubliny vedle procházky. Napište jeden řádek pro každou řeč a začněte řádek časem, kdy začne (`12`, `0:12` nebo `1:02.5`); řádek bez času následuje řádek nad ním po době, kterou trvá jeho vyslovení. Zvolte jazyk, v jazyce klienta, pokud právě on bude procházku sledovat. {{ui:Náhled}} přehraje slova hlasem tohoto počítače a zobrazí je jako titulky; stejné se stane pokaždé, když se procházka přehrává. {{ui:Uložit s procházkou}} ponechá komentář v IFC spolu s procházkou.

Váš vlastní připojený asistent vám může komentář napsat: požádejte jej, ať se podívá na procházku a uložené pohledy, a nastaví řádky v jazyce, který uvedete, jako jeden krok pro vrácení zpět.

Vykreslené video nemá vlastní zvuk, protože prohlížeč nedokáže nahrát svůj vlastní hlas. Uložte titulky (`.srt` nebo `.vtt`) a přidejte je k videu v přehrávači nebo editoru videa. Které hlasy můžete zvolit, závisí na počítači: jazyk bez nainstalovaného hlasu titulky dostane také.

## V souboru

Pohledy a procházky jsou v IFC uloženy jako sada vlastností `CadCraft_Views` u projektu: obyčejné IFC, které ostatní programy ignorují. Jsou v souřadnicích prvního modelu, takže sedí i po znovunačtení modelu nebo po přidání dalšího modelu.

:::tip
Chcete-li vykreslit obrázek z uloženého pohledu, přejděte na něj a klikněte na [Vykreslení](topic:render).
:::
