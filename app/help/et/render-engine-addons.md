---
title: Renderdusmootori lisamine lisandmooduliga
summary: Mida lisandmoodul saab lisada renderdamise dialoogi mootorite loendisse, millist luba see vajab programmi käivitamiseks ning mida Studio kontrollib ja küsib.
keywords: lisandmoodul, lisandmoodulid, mootor, renderdusmootor, arendaja, engine.run, luba, programm, skript, allkirjastatud, Studio, API
from: 06295376
---

Lisandmoodul (Sätted › Lisandmoodulid) saab lisada mootori {{ui:Renderda}} dialoogi mootorite loendisse. Lisandmoodulite autoritele mõeldud täielik tekst on lisandmooduli spetsifikatsiooni 16. peatükis; lühidalt:

- Lisandmoodul registreerib mootori, mille tunnus algab tema enda tunnusega, millel on nimi, valikulised sätted ning **kas** programm, mida käivitada, **või** JavaScriptis funktsioon, mis joonistab pildi.
- Mootor, mis käivitab programmi, vajab luba **`engine.run`**, mida näidatakse enne paigaldamist ja sätetes. See töötab ainult Studios; brauseris kuvatakse see failina, mille saab salvestada.
- Lisandmoodul nimetab programmi (lihtne failinimi, mitte kest), skripti, mis asub **allkirjastatud lisandmooduli sees**, ning argumendid, mis koosnevad kohatäitjatest ja lihtsatest sõnadest. Studio leiab programmi või palub korra näidata, kus see asub.
- Esimesel korral, kui lisandmoodul käivitab programmi, **küsib Studio seda oma dialoogis**: milline lisandmoodul, milline programm ning et skript võib teha kõike, mida programm võib. Lubage seda ainult lisandmoodulile, mida usaldate. Teie vastus jäetakse meelde selle lisandmooduli ja programmi kohta.
- Pakett (stseen USD-na ja sätete fail, lisaks glTF-fail, kui lisandmoodul seda nõuab) ning lisandmooduli skript pannakse uude ajutisse kausta, programm töötab seal ja pilt tuleb tagasi, märgituna lisandmooduli mootori nimega.

:::note
Lisandmoodulid saavad lisada renderdusmootoreid alates lisandmooduli API versioonist 1.4. Töötav näide avatud lähtekoodiga käsurea renderdaja jaoks on selle oma repositooriumis; seda renderdajat pole veel selle näite järgi käivitatud.
:::
