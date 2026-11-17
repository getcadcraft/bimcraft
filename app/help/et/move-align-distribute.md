---
title: Teisalda, kopeeri, joonda ja jaota hoone elemente
summary: Teisalda seinu, põrandaid, poste ja paigutatud raamatukogu üksusi baaspunkti ja teise punkti või sisestatud kauguse järgi, kopeeri neid samal ajal ning joonda või jaota ühtlaselt, plaanil või 3D-s valikuga.
keywords: teisalda, kopeeri, joonda, jaota, vahe, nihe, baaspunkt, nihkevektor, seinad, postid, põrandad, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Mida sa teed

Nihuta sein, põrand, post või paigutatud raamatukogu üksus uude kohta, tee sellest koopiaid või joonda mitu korraga, joonistamata neid uuesti.

## Nimed ja klahvid

Käsud on {{ui:Teisalda}}, {{ui:Joonda}} ja {{ui:Jaota}}, ja käsureal saad kirjutada `MOVE`, `ALIGN` ja `DISTRIBUTE`, nagu CadCraft joonistusrakenduses. Üks erinevus: BimCraftis on {{key:M}} {{ui:Mõõda}}, nii et teisaldamisel on oma klahv, {{key:Shift+M}}. Tööriistad on menüüs Versioon.

## Teisalda

1. Vali, mida teisaldada, plaanilt või 3D-vaatest. Seinad, põrandad, postid ja paigutatud raamatukogu üksused võivad kõik olla ühes valikus.
2. Vajuta {{key:Shift+M}} või vali {{ui:Teisalda}}.
3. Klõpsa baaspunkt, siis teine punkt. Või sisesta pärast baaspunkti kaugus ja vajuta {{key:Enter}}: element liigub baaspunktist hiire osutatud suunas. Võid sisestada ka `dx,dy` (või `@dx,dy`) või `pikkus<nurk`.
4. Vajuta {{key:C}}, et lülitada sisse {{ui:Kopeeri}}: iga teisaldus teeb siis koopia ja jääb järgmiseks valmis. Vajuta {{key:Esc}}, et lõpetada.

Mõlemad punktid saab klõpsata ka 3D-vaates: kui {{ui:Teisalda}} on sisse lülitatud, tabab kursor korruse põrandakõrgust, nii et klõps seal on plaani punkt. Hoia {{key:Shift}} all, kui klõpsad, et hoopis valida teine element. Kasuta vaadet {{ui:Plaan}}, {{ui:Ülemine}}, {{ui:Esi}} või {{ui:Külg}}, nagu sulle sobib: punktid asuvad alati sellel korrusel.

Sein võtab oma uksed ja aknad kaasa. Joonistatud põrand võtab oma avad kaasa. Ruumid, põrandad ja laed, mis järgivad seinu, uuendatakse. Seinad, mis ühinesid teisaldatud seinaga, jäävad oma kohale.

Iga teisaldus on üks muudatus: {{key:Mod+Z}} võtab ühe sammu tagasi ning see liigub kõigile sessioonis Live TeamWork. Paigutatud raamatukogu üksust ei saa nii kopeerida; kasuta {{ui:Redigeeri}} › {{ui:Kopeeri}} ja {{ui:Kleebi}}.

## Joonda

Vali kaks või enam elementi, vali {{ui:Joonda}}, seejärel külg (vasak, keskel, parem, ülemine, keskmine või alumine) ning see, millele joondada: valitud hulk, esimene valitu, viimane valitu või klõpsatud punkt. Vajuta ribal {{ui:Joonda}}.

## Jaota

Vali kolm või enam elementi, vali {{ui:Jaota}}, seejärel suund (laiuti või alla) ja vahe: võrdsed vahed nende vahel või võrdsed keskpunktid. Kaks äärmist jäävad oma kohale.

Seinad, mida joondamine või jaotamine liigutab, säilitavad oma ühendused nagu teisaldamisel: teisaldatud seinaga ühinenud sein libiseb oma joonel otsa, et ühendus säiliks; sellesse toetuvad vaheseinad tulevad kaasa; kaks ühendatud seina, mõlemad teisaldatud, säilitavad nurga, kus nende uued jooned kohtuvad. Ruumid jäävad suletuks. See on üks samm **Muudatused**-s.
