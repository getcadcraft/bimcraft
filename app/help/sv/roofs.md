---
title: Tak: en lutning för varje vägg, gavlar, pulpettak och takplan
summary: Ställ in varje vägg under ett tak till lutande, gavelände eller ingen, använd förinställningarna valmat, sadel och pulpett, höj taket med upplagshöjden, lägg till vindskiva och takfotsbeklädnad, och rita enskilda takplan där det automatiska taket inte passar.
keywords: ändra tak, redigera tak, valt tak, takegenskaper, ångra tak, tak, lutning, per vägg, gavel, gavelände, pulpett, lutande tak, valm, ränna, taknock, upplagshöjd, vindskiva, takfotsbeklädnad, takfot, stupkant, överhäng, takplan, verandatak, takkupa, gavelkupa, pulpettakskupa
from: 096084a7
---

## Vad du gör

Forma taket utifrån väggarna under det. Varje vägg får sin egen inställning, så att ett tak kan vara valmat i framsidan, gavlat i ändarna och stanna plant mot en högre vägg bak. För en veranda eller en yta som det automatiska taket inte kan göra, rita ett takplan efter dess hörn.

## Lägg på ett tak

1. På nivån vars väggar bär taket, klicka på {{ui:Tak}}.
2. Skriv **Lutning** (`6/12`, eller grader som `30`) och **Överhäng**.
3. Välj en förinställning: **Valmat tak**, **Gavlar på de korta sidorna**, **Gavlar på de långa sidorna** eller **Pulpett** (sidan närmast pekaren är den låga takfoten; de andra sidorna är gavelände).
4. Lämna **Vindskiva och takfotsbeklädnad** ikryssad för sluten takfot med vindskiva, eller kryssa ur den för en bar takkant.
5. Peka inne i byggnaden: takfoten, taknocken, valmarna och rännorna visas på planen. Klicka.

Alla konturer fungerar: L-, T-, U- och plusformer, vinklade hörn och urtag. Valmar, taknockar och rännor hittas där takplanen möts.

## En vägg i taget

Välj taket (på nivån ovanför väggarna, klicka inne i dess kontur) och titta under **Varje vägg** i **Egenskaper**. Pekar du på en rad markeras den väggen på planen.

- **Lutande**: väggen har ett lutande takplan över sig. Skriv dess egen lutning bredvid, till exempel `12/12` för branta gavlar på ett `6/12`-tak.
- **Gavelände**: taket slutar i en lodrät ände över väggen, väggen fylls upp till taket, och taket går förbi den med **Gavelöverhäng**.
- **Ingen (ansluter jämnt)**: taket slutar vid väggen utan överhäng och utan gaveltvägg, för ett tak mot en högre vägg.

Listan **Ändar** överst ställer in alla väggar på en gång; **Ställ in per vägg** visas när väggarna inte längre matchar en förinställning.

## Ändra ett tak du redan har lagt

Välj taket, så visar **Egenskaper** samma inställningar som verktyget Tak har: **Lutning**, **Överhäng**, **Gavelöverhäng**, **Upplagshöjd**, **Vindskivehöjd**, **Sluten takfot** och **Tjocklek**. Varje ändring visas direkt i planen och i 3D, med samma kontroller som verktyget (en lutning på 80 grader eller mer nekas, och så görs också en inställning som inte kan bilda ett tak). Skriv ett värde och tryck på {{key:Enter}}, eller lämna rutan.

Varje ändring är ett ångra-steg. Flera ändringar i samma ruta efter varandra (skriv `6/12`, sedan `7/12`, sedan `8/12`) slås ihop till ett steg, så att ett {{key:Ctrl}}+{{key:Z}} återställer det taket hade före serien; att ändra en annan ruta startar ett nytt steg.

## Upplagshöjd, vindskiva och takfotsbeklädnad

- **Upplagshöjd** är där takplanen möter väggarnas utsida, mätt från nivåns golv. Lämna tomt för att låta taket sitta på väggarnas överkant; skriv ett större värde för en förhöjd takfot.
- **Vindskivehöjd** är brädan längs takfoten och upp längs stupkanterna. Skriv `0` för ingen.
- **Sluten takfot** lägger en plan takfotsbeklädnad under varje takfot, från väggen till bakkanten av vindskivan.

Varje plan möter sin vägg vid upplagshöjden, så att väggar med olika lutningar behåller en gemensam upplagslinje och deras takfötter slutar på olika höjder, precis som de skulle ramas in.

## Rita ett takplan

1. På nivån vars väggar planet ligger på, öppna {{ui:Bygge}} och välj {{ui:Takplan}}.
2. Skriv **Lutning** och, om det inte är väggarnas överkant, **Takfotshöjd**.
3. Klicka på hörnen. Den första sidan du ritar är takfoten; planet stiger från den mot resten av formen.
4. Klicka på det första hörnet igen, dubbelklicka eller tryck på {{key:Enter}} för att avsluta. {{key:Esc}} släpper hörnen.

Ett takplan följer inte väggarna. Välj det på nivån ovanför (klicka inne i det) för att ändra dess lutning, takfotshöjd eller tjocklek, eller tryck på {{key:Delete}} för att ta bort det.

## Lägg till en takkupa

1. Visa nivån taket ligger på.
2. Öppna {{ui:Bygge}} och välj {{ui:Takkupa}}.
3. På alternativraden väljer du **Takkupetyp** (**Gavel** eller **Pulpett**) och anger **Bredd**, **Framvägg** (höjden på framväggen från takets överkant till kupans takfot), **Lutning** och **Överhäng**.
4. Klicka på en takyta där kupans främre mitt ska ligga.

BimCraft bygger framväggen, två kindväggar och kupans tak, och kör det bakåt tills det möter taket. En gavelkupa har två plan som möts i en taknock. En pulpettakskupa har ett plan, som måste vara mindre brant än taket. Taket under kupan skärs bort. Kupan följer taket när väggarna flyttas.

Markera den för att ändra dess typ, bredd, framvägg, lutning eller överhäng i **Egenskaper**. {{key:Delete}} tar bort den och sluter taket igen. Den måste få plats på en takyta, bort från valmar, rännor och taknocken, och bara tak som gjorts med verktyget {{ui:Tak}} tar kupor, inte takplan som ritats för hand. Finns inte ännu: ett fönster i kupans framsida, och kupor på handritade takplan.

## Vad som sparas

Tak är IFC-tak som består av en takplatta per plan, gaveltväggar, en vindskivedel och en takfotsbeklädnad. Taket bär sina längder för taknock, valm, ränna, takfot och stupkant, och sina ytor, för mängdavtagningar. Ett takplan är ett IFC-tak med en platta.

:::tip
Ångra tar tillbaka varje takändring i ett steg, även en förinställning som ändrar varje vägg.
:::
