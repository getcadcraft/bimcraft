---
title: Dokument och revisioner (valvet)
summary: En steg-för-steg-genomgång av ett riktigt uppdrag: ställ en projektmapp med IFC-modeller under kontroll, checka ut en modell, ändra den, checka in den med en anteckning, skicka den på granskning, godkänna och frige den, se historiken och vad som använder den, vad en andra person ser medan den är låst, och hur det fungerar med molnmappar.
keywords: valv, dokument, genomgång, handledning, checka ut, checka in, revision, frigivning, godkänna, lås, historik, var den används, ifc, modell, molnmapp, projektmapp, två personer, delad mapp
from: 0a753f25
---

## Vad du gör

Du är Ana och arbetar på Riverside Clinic tillsammans med en kollega, Ben. Projektets IFC-modeller finns i en mapp som ni båda når (en delad enhet, en synkad mapp eller en molnmapp). I slutet har en fil gått från sin första kopia till en frigiven revision **A**, har ändrats igen som **B.1**, du har sett vem som gjorde vad, och du har sett vad Ben ser när du håller i filen.

Allt sparas i en dold mapp `.ccvault` bredvid dina filer: ingen server, inget laddas upp (en molnmapp är undantaget, se sista steget). För varje knapp och regel på ett ställe, se ämnet *Dokument: utcheckning, revisioner och frigivning* där din app har det.

## 1. Ställ in projektmappen

1. Välj {{ui:Dokument}} bredvid {{ui:Öppna en mapp}} på startskärmen, eller {{ui:Dokument…}} i menyn **Arkiv**.
2. Välj {{ui:Välj projektmappen}} och välj mappen som innehåller projektets IFC-modeller. (Projektmappar fungerar i Studio och i webbläsare som kan öppna en mapp, till exempel Chrome och Edge. I andra webbläsare säger panelen det.)
3. Välj {{ui:Ändring}} bredvid **Du:** och skriv ditt namn, `Ana` (om den frågar, även namnet på den här datorn). Panelen säger nu *Du: Ana på* och din dator. Ditt namn följer med allt du gör.
4. Välj {{ui:Starta ett valv i den här mappen}} och skriv projektets namn, `Riverside clinic`. Panelen säger *Valvet startat för Riverside clinic.*

## 2. Ta en fil under kontroll

1. Öppna **Filer som inte finns i valvet** och välj {{ui:Lägg till}} bredvid `models/House.ifc`.
2. Den visas under **Filer i valvet** på revision **A.1**, status **Pågående arbete**. A.1 är dess första kopia. Valvet sparar en kopia av varje revision.

## 3. Checka ut, ändra, checka in

1. Välj {{ui:Öppen}} bredvid `models/House.ifc`. Modellen öppnas i BimCraft och panelen stängs så att du ser den. Öppna panelen igen från {{ui:Dokument}}.
2. Öppna panelen igen och välj {{ui:Checka ut}}. Raden säger nu **Utcheckad till dig**. En låsfil har skapats i `.ccvault/locks`. Ingen annan kan checka ut filen förrän du checkar in den.
3. Ändra modellen: flytta en vägg, lägg till en dörr. Spara nekas om modellen inte är utcheckad till dig, och det säger varför. Spara som fungerar alltid för en kopia av din egen.
4. Öppna panelen, välj {{ui:Checka in}} och skriv vad som ändrades (`Flyttade dörren`). Panelen säger *incheckad som A.2*. Filen i projektmappen är nu den modell du hade öppen, och låset är borta. Att checka in utan någon ändring behåller revisionen.

Ändrar du dig, ger {{ui:Ångra utcheckning}} tillbaka filen utan en ny revision.

## 4. Granska och frige

1. Välj {{ui:Skicka på granskning}}. Statusen blir **För granskning** och filen är skrivskyddad.
2. Innan du godkänner väljer du {{ui:Projektinställningar}} och listar vem som får godkänna (ett namn per rad), till exempel `Ben` och `Carla`, och bockar för regeln att godkännaren måste vara någon annan än författaren. Välj {{ui:Spara inställningar}}. Nu nekar valvet själv alla andra.
3. Ben (eller Carla) väljer {{ui:Godkänn}} och skriver godkännarens namn. Statusen blir **Frigiven** och revisionen blir **A**, med *godkänd av* och namnet. En frigiven fil är skrivskyddad. {{ui:Skicka tillbaka}} hade flyttat den till Pågående arbete, med en orsak.

Godkännarens namn är namnet som skrevs i panelen. Det är en uppgift om vem som skrev under, inte ett bevis på identitet.

## 5. En ny revision

1. På den frigivna filen väljer du {{ui:Ny revision}}. Du håller den för nästa bokstav.
2. Ändra den och välj sedan {{ui:Checka in}}. Revisionen är **B.1**, pågående arbete. Frige den på samma sätt så blir den **B**. {{ui:Ångra utcheckning}} före den första incheckningen lämnar den på **A**.

Revisionsbokstäverna går A, B … Z, AA, AB. Om din standard hoppar över vissa bokstäver, hoppar projektinställningen *Använd ASME Y14.35-följden* över I, O, Q, S, X och Z för de kommande revisionerna.

## 6. Se vad som hände

Välj filens namn för att öppna dess detaljer:

- **{{ui:Historik}}**: varje händelse, nyaste först, med vem, vilken dator och när: *Incheckad A.2* av Ana, *Frigiven* av Ben, och så vidare.
- **{{ui:Revisioner}}**: revisionstabellen: varje sparad revision, med datum, vem som checkade in den, anteckningen och vem som godkände den. Valvet sparar en kopia av varje i `.ccvault/revs`.
- **{{ui:Använder}}**: de dokument som en IFC-modell pekar på.
- **{{ui:Används av}}**: Används av listar varje modell i valvet som pekar på den här filen.

## Modeller som pekar på andra dokument

En IFC-modell som pekar på andra dokument i mappen (ritningar, förteckningar) visar dem under **Använder**, och var och en av dem visar modellen under **Används av**. Checkar du in ett dokument kan du se vilka modeller som refererar till det.

## 7. Vad Ben ser medan du håller filen

Checka nu ut filen igen och be Ben öppna samma projektmapp på sin dator och öppna panelen. På filens rad ser han **Utcheckad av Ana på** din dator **sedan** tiden, och ingen knapp för {{ui:Checka ut}}. Om han försöker ändå nekar valvet: låset är en fil som systemet inte skapar två gånger. Därför kan två personer inte hålla filen samtidigt, inte ens i samma bråkdel av en sekund, när mappen finns på disk i Studio. (I en webbläsare ger mappen bara ett bästa försök, och panelen säger det under **Mapp**.)

Om Ana är borta och Ben behöver filen frigör {{ui:Bryt utcheckning}} den. Han måste skriva en orsak. Den hamnar i loggen tillsammans med vems utcheckning det var. När projektet listar administratörer kan bara de göra det. En utcheckning som är äldre än gränsen för inaktivitet (14 dagar som standard) märks *lång tid*. Efter att utcheckningen brutits nekas Anas sena incheckning, så att ni två inte kan skriva över varandra.

## 8. Molnmappar

En molnmapp är en projektmapp som sparas i ert teams molnlagring, så teamet behöver ingen delad enhet. I Studio, inloggad på ditt CadCraft-konto, visar panelen {{ui:Öppna en molnmapp}} bredvid {{ui:Välj projektmappen}}. Välj den och välj mappen, som visas som arbetsyta / mapp. En ägare av arbetsytan skapar mappen först, och teamets molnlagring måste vara aktiv. Allt ovan fungerar likadant. Servern skapar låset, och det är strikt mellan personer. Om du inte är inloggad säger panelen att du ska logga in. I en vanlig webbläsarflik erbjuds inte molnknappen. Använd Studio.

## Prova det

Gör de åtta stegen ovan med en kopia av en riktig fil. För de två personstegen behöver du en annan person, eller två fönster med två namn. Om du provar med en riktig delad mapp listar sidan för gemenskapens tester en kontroll som frågar just det, och tar emot resultat.
