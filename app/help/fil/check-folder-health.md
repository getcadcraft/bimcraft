---
title: "Suriin ang folder para sa sirang kopya, nawawalang link, at mga naiwan"
summary: "Gamitin ang folder report para makita ang mga model file na naputol, piliin ang pinakabagong buong backup, alamin kung aling link ang nawawala, at hanapin ang lock at temp file."
keywords: "health check, sira, corrupt, kulang, naputol, backup, nawawalang link, xref missing, audit, mga naiwan, lock files, dwl, bak, paghahatid"
from: 3025a539
---

## Ano ang gagawin mo

Suriin ang project folder bago mo ito ibigay o bago ka magsimulang magtrabaho dito: kumpleto ba ang bawat model, alin ang huling maayos na backup, at nandoon ba ang lahat ng naka-link na file?

## Mga hakbang: sirang kopya

1. Buksan ang project folder. Tingnan ang [Magbukas ng buong project folder](topic:open-project-folder).
2. Basahin ang mga note sa ilalim ng pangalan ng folder. Ang "2 files are incomplete or unreadable. See the models below." ay nangangahulugang may dapat tingnan.
3. Sa **Models**, tingnan ang column na **Status**. Ang **Complete** ay maayos. Ang amber na "1 incomplete" ay nangangahulugang sira ang isang kopya pero may maayos pang iba. Ang pulang **Incomplete** ay nangangahulugang walang nakitang maayos na kopya.
4. Buksan ang **All … copies** sa ilalim ng model na may problema. Nakalista rito ang pangunahing file at bawat may numerong backup, pinakabago muna, kasama ang laki, petsa at status.
5. Basahin ang note sa itaas ng listahan, halimbawa: "Hindi kumpleto ang Tower.rvt (183.2 MB, dapat at least 214.0 MB). Ipinapakita ng card ang pinakabagong kumpletong kopya, ang Tower.0012.rvt (Mar 3, 2025)."
6. I-click ang kopyang gusto mong buksan. Ang mga kompletong kopya lang ang maaaring i-click.

## Ano ang ginagawa ng health check

Bawat kopya ng bawat model ay mabilis na sinusuri sa header nito, 512 bytes bawat isa, kaya kahit ang folder na may malalaking model ay nasusuri sa loob ng ilang segundo. Ang file na ang sariling index ay tumuturo lampas sa dulo nito ay naputol habang kinokopya, ina-upload o sini-sync. Ganito rin ang itsura ng file sa cloud drive na "online only" pa lang.

Ang card ng bawat model ay binabasa mula sa pangunahing file kapag maayos ito, at mula sa pinakabagong maayos na backup kapag hindi.

## Mga hakbang: nawawalang link

1. Hanapin ang note na "*n* na naka-link na file ang wala sa folder na ito." sa ilalim ng pangalan ng folder.
2. Mag-scroll sa **Linked and referenced files**. Ang mga nawawalang link ang nasa unahan ng listahan.
3. Basahin ang column na **Where** para sa bawat link:
   - **In this folder**: nakita sa path na na-save ng model.
   - **Same name found**: may file na may parehong pangalan sa ibang lugar ng folder. Tiyakin na ito ang tamang file.
   - **Library file**: keynote o assembly code table. Kasama ito ng program sa bawat computer, kaya hindi inaasahang nasa folder.
   - **Not in this folder**: hindi nakita kahit saan sa folder.
4. Basahin ang **Used by** para makita kung aling mga model ang nag-li-link sa bawat file.

Ang BimCraft ay naghahanap ng bawat link muna sa relative path nito, pagkatapos sa dulo ng na-save nitong path (kaya ang `\\server\jobs\Tower\Cad\X-Refs\site.dwg` ay makikita bilang `X-Refs/site.dwg` kapag pinili mo ang folder na `Cad`), at saka sa pangalan ng file kahit saan sa folder.

## Mga hakbang: mga naiwan

1. Mag-scroll sa **Set aside** sa dulo ng report.
2. Basahin ang tatlong linyang maaaring lumitaw:
   - Housekeeping folders (`*_backup`, `*_log`, `Revit_temp`): hindi binabasa.
   - Lock, log at backup na naiwan: mga file tulad ng `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Naiiwan ang mga ito ng mga program na nag-crash o nakabukas noong kinopya ang folder. Kadalasan ligtas nang burahin kapag wala nang nakabukas na file.
   - Iba pang file: lahat ng iba pang hindi binabasa ng BimCraft.

## Mga karaniwang pagkakamali

- **Pagbura sa sirang pangunahing file bago mag-save ng maayos na backup.** Kopyahin muna ang pinakabagong kumpletong backup, saka harapin ang sirang file.
- **Pagtitiwala nang bulag sa "Same name found".** Maaaring magkapareho ng pangalan ang dalawang magkaibang drawing. Buksan ang pareho kung may pagdududa.
- **Pag-isip na problema ang nawawalang library file.** Nasa program sa bawat computer ang keynote at assembly code table.
- **Nagkakaiba ang bilang ng file sa iba't ibang browser.** Sa Firefox at Safari, ang {{ui:Open a folder}} ay nagbibigay ng bawat file, kasama ang mga nasa loob ng housekeeping folders, kaya kasama sila sa bilang (at sa limitasyong 20,000 file). Kapag i-drag ang folder, nilalaktawan sila, gaya ng sa Chrome at Edge. Pareho ang report kung hindi.
