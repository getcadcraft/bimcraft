---
title: Lähetä malli pelimoottoriin
summary: Studio voi kirjoittaa mallin Unreal Engine -projektiin ja pitää sen ajan tasalla jokaisella lähetyksellä; omat muokkaukset ovat kerroksessa, johon CadCraft ei koskaan kirjoita. Projektin avaava liitännäinen ei ole vielä julkaistu.
keywords: unreal, unreal engine, pelimoottori, linkki, lähetä, usd-näyttämö, projekti, live, cine camera, movie render queue
from: 154d55ef
---

CadCraft Studiossa Moottori-luettelossa voi olla **linkki** Unreal Engine -projektiin. Vain yhteen suuntaan: CadCraftista Unrealiin.

## Lähetä malli

1. Valitse Unreal-kohta Moottori-luettelosta. Ensimmäisellä kerralla Studio pyytää valitsemaan projektisi kansion (se, jossa on `.uproject`-tiedosto); se muistaa sen.
2. Napsauta {{ui:Lähetä}}. Studio kirjoittaa `CadCraft/<tiedoston nimi>/` projektin sisään: mallin USD-tiedostona, asetustiedoston, valoprofiilit ja kaksi pientä kerrostiedostoa.
3. Muuta mallia, tallenna ja lähetä uudelleen. Vain malli ja asetustiedosto korvataan.

## Omat muokkaukset ovat turvassa

Näyttämö, jonka Unreal avaa, on pieni juuritaso, joka luodaan kerran, ja sen alla on kaksi kerrosta: **oma kerros** päällimmäisenä (`<name>.user.usda`, aluksi tyhjä, CadCraft ei koskaan kirjoita sitä uudelleen) ja CadCraftin malli alla. Omaan kerrokseen tallennetut muokkaukset säilyvät, kun malli lähetetään uudelleen. Valot ja muut Unreal-tason toimijat, jotka sijoitat, ovat näyttämön ulkopuolella eivätkä muutu niistäkään.

## Ilman Studiota

Selaimessa tai tietokoneella, jolla Studio ei löydä Unrealia, valitse Moottori-luettelosta **Unreal-projektikansio (.zip)** ja napsauta {{ui:Renderöi}}. Se tallentaa saman kansion zip-tiedostona: pura se projektisi `CadCraft`-kansioon. Jätä **Sisällytä näyttämötiedostot** päälle ensimmäisellä kerralla; kytke se pois myöhemmillä tallennuksilla, jolloin zip sisältää vain mallin ja asetustiedoston, eikä omaa kerrosta korvata.

:::note
Unreal-liitännäinen, joka avaa näyttämön, käyttää auringon, lamput, kamerat ja valotuksen, seuraa jokaista lähetystä ja renderöi kameran, **ei ole vielä julkaistu**, eikä sitä ole ajettu Unrealissa. Siihen asti Lähetä vie tiedostot projektiin, ja Unrealin omat USD-työkalut voivat avata ne. Windows on ensimmäinen järjestelmä; macOS seuraa.
:::
