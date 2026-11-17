---
title: Kausta kontroll kahjustatud koopiate, puuduvate linkide ja jäänuste suhtes
summary: Kasuta kaustaraportit, et leida katkised mudelifailid, valida viimane terve varukoopia, näha puuduvaid linke ning leida lukk- ja ajutised failid.
keywords: tervisekontroll, kahjustatud, rikutud, puudulik, katkestatud, varukoopia, puuduvad lingid, xref puudub, audit, jäänused, lukufailid, dwl, bak, üleandmine
from: 3025a539
---

## Mida sa teed

Kontrolli projektikausta enne selle üleandmist või töö alustamist: kas iga mudel on terve, milline varukoopia on viimane hea ja kas kõik lingitud failid on olemas?

## Sammud: kahjustatud koopiad

1. Ava projektikaust. Vaata [Ava kogu projektikaust](topic:open-project-folder).
2. Loe kausta nime all olevaid märkmeid. "2 faili on puudulikud või loetamatud. Vaata allpool olevaid mudeleid." tähendab, et midagi tuleb vaadata.
3. Vaata jaotises **Mudelid** veergu **Olek**. **Täielik** on korras. Kollane "1 puudulik" tähendab, et üks koopia on halb, kuid teine on terve. Punane **Puudulik** tähendab, et tervet koopiat ei leitud.
4. Ava probleemiga mudeli all **Kõik … koopiad**. See loetleb põhifaili ja iga nummerdatud varukoopia, uusimad enne, koos suuruse, kuupäeva ja olekuga.
5. Loe loendi kohal olevat märkust, näiteks "Tower.rvt on puudulik (183.2 MB, peaks olema vähemalt 214.0 MB). Kaart näitab uusimat täielikku koopiat, Tower.0012.rvt (3. märts 2025)."
6. Klõpsa koopial, mida soovid avada. Klõpsata saab ainult täielikke koopiaid.

## Mida tervisekontroll teeb

Iga mudeli iga koopia saab kiire kontrolli oma päisest, 512 baiti kumbki, nii et isegi suurte mudelitega kaust kontrollitakse sekunditega. Fail, mille enda register osutab oma lõpust kaugemale, on lõigatud ära kopeerimise, üleslaadimise või sünkroonimise ajal. Pilvedraivi fail, mis on veel "ainult võrgus", näeb välja samamoodi.

Mudeli kaart loetakse põhifailist, kui see on terve, ja muidu viimasest terve varukoopiast.

## Sammud: puuduvad lingid

1. Otsi kausta nime all märkust "*n* lingitud faili ei ole selles kaustas."
2. Keri jaotiseni **Lingitud ja viidatud failid**. Puuduvad lingid on loetletud esimesena.
3. Loe iga lingi veergu **Asukoht**:
   - **Selles kaustas**: leitud teelt, mille mudel salvestas.
   - **Leitud sama nimega**: sama nimega fail on kaustas mujal. Kontrolli, et see on õige.
   - **Teegifail**: märgistustabel või koostukood. Need tulevad programmiga igas arvutis kaasa, seega ei eeldata neid kaustas.
   - **Pole selles kaustas**: ei leitud kogu kaustast.
4. Loe veergu **Kasutab**, et näha, millised mudelid iga faili linkivad.

BimCraft otsib iga linki esmalt selle suhtelise tee järgi, seejärel salvestatud tee lõpu järgi (nii et `\\server\jobs\Tower\Cad\X-Refs\site.dwg` leitakse kui `X-Refs/site.dwg`, kui valisid kausta `Cad`), ning seejärel faili nime järgi kogu kaustas.

## Sammud: jäänused

1. Keri raporti lõpus jaotiseni **Eraldatud**.
2. Loe kolme rida, mis võivad ilmuda:
   - Halduskaustad (`*_backup`, `*_log`, `Revit_temp`): ei loeta.
   - Lukk-, logi- ja varukoopia jäänused: failid nagu `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Need jäävad alles programmidest, mis jooksid kokku või olid kausta kopeerimisel avatud. Tavaliselt on turvaline need kustutada, kui keegi neid faile enam lahti ei hoia.
   - Muud failid: kõik muu, mida BimCraft ei loe.

## Levinud vead

- **Kahjustatud põhifaili kustutamine enne hea varukoopia salvestamist.** Kopeeri esmalt uusim täielik varukoopia ja alles siis tegele kahjustatud failiga.
- **Pimesi usaldamine valiku "Leitud sama nimega" vastu.** Kaks erinevat joonist võivad kanda sama nime. Kui kahtled, ava mõlemad.
- **Arvamine, et puuduv teegifail on probleem.** Märgistus- ja koostukoodide tabelid elavad programmiga igas arvutis.
- **Failide arv erineb brauseriti.** Firefoxis ja Safaris annab {{ui:Ava kaust}} üle iga faili, sealhulgas halduskaustade sees olevad, nii et arv (ja 20 000 faili piir) hõlmab neid. Kausta lohistamisel jäetakse need välja, nagu Chrome ja Edge teevad. Muidu on raport sama.
