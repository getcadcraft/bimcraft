---
title: Kirjuta spetsifikatsioon mudelist
summary: Üks spetsifikatsiooni jaotis iga kasutuses oleva seina-, ukse-, akna-, põranda- ja viimistlustüübi kohta, faktid loetud mudelist ja sinu enda tekst, PDF- või Wordi dokumendina.
keywords: spetsifikatsioon, spec, tööjoonised, 5. etapp, ehitusdokumentatsioon, jaotis, seinatüüp, ukse tüüp, akna tüüp, viimistlus, klassifikatsioon, uniclass, omniclass, masterformat, dokument, pdf, word, docx, loendid
from: a6acc6d4
---

## Mida sa teed

Saa spetsifikatsioon, mis järgib mudelit: jaotis iga tüübi kohta, mis on hoones tegelikult kasutusel, igaüks oma ülesehituse ja kogustega, mis on loetud mudelist, ja tekst, mille sina sellele kirjutad.

## Sammud

1. Lülita sisse {{ui:Joonista}}, ava vasakpoolsel paneelil **Loendid** ja klõpsa **Spetsifikatsioon**.
2. Dialoog loetleb ühe jaotise iga kasutuses oleva seinatüübi, ukse tüübi, akna tüübi, põranda ja ruumi viimistluse kohta. Iga pealkirja all on selle **faktid**, loetud mudelist: paksus, kihid ükshaaval, arendustase, mõõdud, arv ja kogus. Jaotis, mille elementidel on klassifikatsioonikood, näitab koodi oma pealkirjas.
3. Kirjuta oma spetsifikatsiooni tekst jaotise all olevasse kasti. **Vali tema elemendid** näitab, mida jaotis käsitleb.
4. Klõpsa **Salvesta**. See on üks samm tagasivõtmises ja tekst jääb hoone faili.
5. Ava **Dokumendid mudelist**, vali mall **Spetsifikatsioon** ja klõpsa **Eelvaade**, seejärel salvesta see PDF-ina, Wordina või Markdownina. Vaata [Dokumendid mudelist](topic:documents-from-the-model).

## Tööjooniste loendid dokumendina

Mall **Tööjooniste loendid** prindib ukse-, akna- ja viimistluse loendid otse mudelist sinu kontori paigutuses. Oma mallis kirjuta `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` või salvestatud seadistuse nime, näiteks `{{schedule Door schedule by floor}}`. `{{specification}}` prindib spetsifikatsiooni.

## Hea teada

- Faktid on mudeli omad. Need muutuvad, kui mudel muutub; sinu tekst ei muutu.
- BimCraft ei kirjuta ühtegi standardi punkti ega tootja teksti. Jaotis ilma tekstita prindib „Spetsifikatsioonitekst pole veel kirjutatud.“
- Tüübile kirjutatud tekst, mida mudelis enam ei ole, säilitatakse ja loetletakse pealkirja „Tekst mudelis enam mitte olevatele tüüpidele“ all.
- Üldise tüübi muutmiseks konkreetseks ülesehituseks vaata [Seinatööriistad](topic:wall-tools) (Vaheta tüüp).
