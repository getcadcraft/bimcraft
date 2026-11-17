---
title: Online a offline
summary: Co BimCraft načítá ze stránky, jak Uložit pro offline zpřístupní modely IFC a výkresy DWG bez připojení a proč se nic, co otevřete, nikdy nenahrává.
keywords: offline, online, internet, připojení, bez sítě, režim letadlo, návštěva stavby, uložit pro offline, připraveno offline, nahrát, soukromí, wasm, webassembly, IFC engine, dwg, cloud
from: 39e5c7eb
---

BimCraft čte vaše soubory uvnitř karty prohlížeče. Otevírání, prohlížení, úpravy a ukládání nikdy neposílají vaše soubory nikam, ani online, ani offline. [Práce offline](common:offline) vysvětluje, jak fungují offline kopie ve všech aplikacích; tato stránka popisuje, co je specifické pro BimCraft.

## Co BimCraft načítá ze stránky

| Část | Kdy se načte bez offline kopie | Velikost |
|---|---|---|
| Samotná aplikace s 3D prohlížečem a kódem jádra IFC | Při otevření BimCraft | Několik MB |
| Část WebAssembly jádra IFC | První soubor IFC, který v kartě otevřete: "Starting the IFC engine…" | Asi 1.6 MB |

Výkresy DWG a DXF, projektové a rodinné soubory a složky nepotřebují nic navíc: jejich čtečky jsou součástí aplikace.

## Uložení BimCraft pro offline použití

1. Otevřete BimCraft, když jste online.
2. Klikněte na {{ui:Uložit pro offline}} na liště aplikace nahoře.
3. Sledujte, jak tlačítko počítá nahoru: například "Ukládání 40 z 212". Kopie BimCraft má asi 11 MB, protože obsahuje jádro IFC.
4. Počkejte, až se objeví {{ui:Připraveno offline}}.

Jakmile je tam {{ui:Připraveno offline}}, modely IFC, výkresy DWG a DXF, projektové soubory, složky a tato nápověda se otevřou bez připojení. Nemusíte nejdřív otevírat IFC ani DWG, abyste čtečky "zahřáli".

Chcete-li kopii aktualizovat nebo odstranit, klikněte na {{ui:Připraveno offline}} a zvolte {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}.

## Co říká tlačítko

| Tlačítko | Znamená |
|---|---|
| {{ui:Uložit pro offline}} | Zatím v tomto prohlížeči není žádná offline kopie. Kliknutím ji uložíte |
| "Ukládání *n* z *m*" | Ukládání; nechte kartu otevřenou, dokud neskončí |
| {{ui:Připraveno offline}} | Uloženo. Najetím zjistíte kdy; kliknutím otevřete nabídku |
| {{ui:Nepodařilo se uložit}} | Některé soubory se nestáhly. Zkontrolujte připojení a kliknutím to zkuste znovu. Poslední dobrá kopie, pokud nějaká je, se zachová |
| {{ui:Offline není dostupné}} | Toto okno nemůže uchovat offline kopii (privátní okno nebo spravovaný počítač). Viz [Práce offline](common:offline) |

:::offline
Jste offline.

- Pokud tlačítko říká {{ui:Připraveno offline}}, každý druh souboru se otevře obvykle.
- Pokud ne, funguje jen to, co tato karta už načetla: čtečka, která se v této kartě nikdy nenačetla, nemůže začít, a otevření takového souboru ukáže chybu z prohlížeče ve stavovém řádku. Dokud nebudete zase online, kartu neobnovujte.
:::

## Co nikdy nepotřebuje připojení

Jakmile je BimCraft otevřen v kartě, tyto věci fungují offline i bez uložené kopie:

- Čtení projektových a rodinných souborů a kontrola složek.
- Výběr prvků, čtení vlastností a úprava hodnot IFC v již otevřeném modelu.
- {{ui:Uložit jako IFC}} a {{ui:Stáhnout CSV}}: obojí jsou stahování provedená v kartě.

## Co zatím není k dispozici

- **Ukládání do cloudu.** Soubory se ukládají jen do vašeho počítače.

Viz [Kam jdou vaše soubory](common:your-files).
