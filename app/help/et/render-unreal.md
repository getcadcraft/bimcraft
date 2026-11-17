---
title: Saada stseen mängumootorisse
summary: Studio saab kirjutada stseeni Unreal Engine'i projekti ja hoida seda igal saatmisel sünkroonis; sinu enda muudatused elavad kihis, mida CadCraft kunagi ei kirjuta. Projekti avav pistikprogramm pole veel välja antud.
keywords: unreal, unreal engine, mängumootor, link, saada, USD-stage, projekt, otse, cine camera, movie render queue
from: 154d55ef
---

CadCraft Studios saab mootorite loendis hoida **linki** Unreal Engine'i projektile. Ainult ühes suunas: CadCraftist Unrealisse.

## Stseeni saatmine

1. Vali mootorite loendis Unreali kirje. Esimesel korral palub Studio sul valida oma projekti kausta (see, kus on fail `.uproject`); Studio jätab selle meelde.
2. Klõpsa {{ui:Saada}}. Studio kirjutab projekti sisse kausta `CadCraft/<failinimi>/`: stseen USD-failina, sätete fail, valgusprofiilid ja kaks väikest kihifaili.
3. Muuda mudelit, salvesta ja saada uuesti. Asendatakse ainult stseen ja sätete fail.

## Sinu enda muudatused on kaitstud

Stseen, mille Unreal avab, on väike juurkiht, mis tehakse kord, ja selle all kaks kihti: **sinu oma** peal (`<nimi>.user.usda`, algul tühi, CadCraft seda kunagi uuesti ei kirjuta) ja CadCraft'i stseen all. Muudatused, mille salvestad oma kihti, jäävad alles, kui stseen uuesti saadetakse. Valgustid ja muud näitlejad, mille paigutad Unreali tasemele, on stseenist väljas ja neid ei puututa.

## Ilma Studiota

Brauseris või arvutis, kus Studio Unrealit ei leia, vali mootorite loendis **Unreali projekti kaust (.zip)** ja klõpsa {{ui:Renderda}}. See salvestab sama kausta zip-failina: paki see lahti oma projekti kausta `CadCraft`. Esimesel korral jäta **Lisa stseenifailid** sisse; hilisemate salvestuste jaoks lülita see välja, nii et zip sisaldab ainult stseeni ja sätete faili ning sinu enda kiht ei asendata kunagi.

:::note
Unreali pistikprogramm, mis avab stseeni, rakendab päikese, valgustid, kaamerad ja säritust, jälgib iga saatmist ja renderdab kaamera, **pole veel välja antud** ega ole Unrealis käivitatud. Kuni see on valmis, paneb Saada failid projekti ja Unreali enda USD-tööriistad saavad need avada. Esimene süsteem on Windows; macOS tuleb järele.
:::
