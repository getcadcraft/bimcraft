---
title: Problémy a soubory BCF
summary: Uložte pohled na model jako problém — kameru, vybrané prvky, skryté prvky, řez — sdílejte jej jako soubor BCF s jinými koordinačními nástroji a otevřete jejich soubory BCF a zobrazte jejich problémy.
keywords: bcf, bcfzip, problém, problémy, téma, pohled, zpráva o kolizích, koordinace, komentář, snímek, otevřít bcf, uložit bcf, export, import
from: 2a6cf201
---

## Co budete dělat

Ukažte na problém v modelu, uchovejte pohled, který jej ukazuje, a předejte jej v souboru BCF, formátu, který čtou a zapisují ostatní koordinační nástroje.

## Postup

1. Otevřete model IFC a nastavte pohled: otočte jej k sobě, vyberte dotčené prvky, skryjte, co překáží, a řízněte jej rovinou řezu nebo boxem.
2. Klikněte na záložku {{ui:Issues}} vpravo a pak na {{ui:New issue from this view}}.
3. Napište název a případně komentář; zvolte stav; uveďte své jméno nebo e-mail (přihlášen-li, vyplní se jméno vašeho účtu; viz [Nastavení BimCraftu](topic:settings#your-name-on-issues)). Klikněte na {{ui:Create issue}}.
4. Klikněte na {{ui:Show}} u problému, čímž se vrátí jeho pohled.
5. Klikněte na {{ui:Save BCF}}, čímž se každý problém stáhne jako jeden soubor `.bcf`.
6. Chcete-li vidět problémy, které vytvořil někdo jiný, klikněte na {{ui:Open BCF…}} a vyberte jeho soubor `.bcf` nebo `.bcfzip`.

## Co byste měli vidět

- Každý problém v seznamu s obrázkem svého pohledu, názvem, stavem, autorem a datem.
- {{ui:Show}} vrátí kameru, vybrané prvky, to, co bylo skryto (nebo jediné zobrazené věci), a řez. Prvky se hledají podle jejich GlobalId ve všech otevřených modelech; řádek stavu řekne, pokud některé chybí.
- Rovina nebo box řezu z jiného nástroje se zobrazí, když odpovídá osám modelu; nakloněné nebo další roviny se vrátí jako objem řezu (až 6 rovin). Problém si ponechá první box z objemu tvořeného více boxy.

## Dobré vědět

- Soubor je BCF 2.1 a pohled uchovává v souřadnicích modelu, takže ostatní nástroje postaví kameru na stejné místo.
- Problémy zůstanou na této záložce, dokud je neuložíte. Otevření jiného modelu seznam zachová; před zobrazením problémů otevřete model, kterého se týkají.
- Paralelní (ortogonální) kamera z jiného nástroje se zobrazí s perspektivní kamerou tohoto prohlížeče, couvnutou tak, aby stejná část modelu vyplnila pohled.

## Časté chyby

- **Show posunulo kameru někam divně.** Problém vznikl na jiném modelu nebo s jinými souřadnicemi. Nejprve otevřete správný model.
- **Soubor se neotevře.** Není to zip BCF nebo je poškozen; řádek stavu řekne proč.

## Dále

- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)
- [Řez modelu IFC rovinou řezu](topic:section-plane)
