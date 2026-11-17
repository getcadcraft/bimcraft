---
title: Kontrollera en ritning i utskriftsvy
summary: Växla en DWG eller DXF till utskriftsvy för att se den svart på vitt med dess linjetjocklekar och utan de lager som aldrig skrivs ut.
keywords: utskrift, plotta, förhandsvisning, plotförhandsvisning, linjetjocklek, monokrom, svart och vitt, defpoints, ingen plot
from: 1a59c23e
---

## Vad du gör

Se hur ett blad kommer att se ut på papper innan du skriver ut det från programmet som skapade det: svart på vitt, linjetjocklekar i sin verkliga bredd och utan lager som är inställda att inte skrivas ut.

## Steg

1. Öppna en DWG- eller DXF-ritning.
2. Klicka på en bladflik ovanför ritningen.
3. Klicka på {{ui:Print view}} i slutet av flikarna, eller tryck på {{key:P}}.
4. Zooma in på en detalj för att jämföra tjocka och tunna linjer.
5. Klicka på {{ui:Print view}} igen, eller tryck på {{key:P}}, för att gå tillbaka till de vanliga färgerna.

## Vad du bör se

- Vitt papper på ett grått skrivbord, varje linje och all text i svart, oavsett tema.
- Linjetjocklekar: på ett blad ritas varje tjocklek i sin verkliga bredd på papper, så en 0.5 mm-linje är dubbelt så tjock som en 0.25 mm-linje i alla zoomnivåer. En linje ritas aldrig tunnare än sin skärmtjocklek.
- Lager som är inställda att inte skrivas ut, och lagret DEFPOINTS, döljs.
- Knappen {{ui:Print view}} förblir nedtryckt. Utskriftsvyn är på när du byter blad eller öppnar en annan ritning, tills du stänger av den.

I {{ui:Model}} använder utskriftsvyn bara skärmtjocklekar (tunna linjer en pixel, tjockare något kraftigare), eftersom modellrummet saknar pappersstorlek.

## Vanliga misstag

- **Att förvänta sig att den skrivs ut.** Utskriftsvyn är en förhandsvisning. Utskrift och PDF-export ingår inte i BimCraft ännu; skriv ut från programmet som skapade ritningen.
- **Att förvänta sig plotstilar.** Pentabeller och plotstilsfärger läses inte. Allt är vanlig svart.
- **Att trycka på P medan du skriver.** {{key:F}} och {{key:P}} gör ingenting när du skriver i ett fält, eller när utrustningsförteckningen visas.
