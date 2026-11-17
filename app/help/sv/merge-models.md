---
title: Slå samman två personers ändringar i en modell
summary: Låt git, Fossil eller Mercurial slå samman två redigerade kopior av samma IFC-modell objekt för objekt, så att två personer kan rita i samma byggnad och förena arbetet.
keywords: sammanslagning, slå samman, git, fossil, mercurial, versionshantering, konflikt, trevägs, cadcraft merge, gitattributes, ifc, globalid, team, två kopior, grenar
from: 50733df8
---

Två personer tar en kopia av samma byggnad, den ena ritar östra flygeln och den andra den västra, och senare måste kopiorna bli en. Om de har ändrat olika objekt kan ett program göra det i stället för en person.

## Så fungerar det

Varje vägg, dörr, nivå, rum och egenskapsuppsättning i en IFC-fil har ett GlobalId som aldrig ändras. Sammanslagningen slår upp objekt med det id:t, inte med det nummer filen ger dem (`#123`), eftersom nummer ändras när ett program sparar. Delar som hänger på ett objekt och inte har något eget id (placeringar, former, enheter) jämförs efter vad de innehåller.

Båda kopiorna måste ha samma IFC-version (2x3, 4 eller 4.3). Sammanslagningen behåller din fil som den är, dess ordning och dess nummer, och lägger till det som är nytt, så att en git-diff av sammanslagningen bara visar det sammanslagningen ändrade.

## Så ställer du in det

Git behöver två rader en gång per arkiv:

```
# .gitattributes
*.ifc merge=cadcraft

# en gång, på varje dator
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Utan git kör du `cadcraft merge <base> <ours> <theirs>`. Fossil och Mercurial tar samma tre filer i sin egen inställning för sammanslagningsverktyg. Ingenting laddas upp; allt körs på din dator.

## Reglerna

- Ett attribut som ändrats bara på ena sidan tas med. Samma ändring på båda sidor tas med en gång.
- Samma attribut ändrat på två sätt (samma nivå omdöpt på två sätt) är en **konflikt**: din sida behålls och rapporten listar båda. Öppna resultatet och rätta det för hand.
- En lista över saker (väggarna på en nivå, egenskaperna i en uppsättning) slås samman som en mängd: det som någon sida lagt till behålls och det som någon sida tagit bort tas bort. Två personer som var och en lägger till väggar på samma nivå ger ingen konflikt.
- Ett objekt som lagts till på någondera sidan behålls, med sin form och sina egenskaper. Borttaget på ena sidan och orört på den andra: borttaget. Borttaget på ena sidan och ändrat på den andra: borttaget, och rapporterat.
- Filens tidsstämpel och författare, samt varje objekts ägarhistorik, behålls som dina.

Geometri slås samman i sin helhet: en väggs form kommer från ena sidan, aldrig blandad punkt för punkt. Zippade IFC- och IFCX-filer slås inte samman. Efter en sammanslagning öppnar du resultatet i BimCraft och tittar i panelen Problem innan du sparar.
