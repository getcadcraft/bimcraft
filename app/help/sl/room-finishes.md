---
title: Obdelave prostorov in razpredelnice obdelav
summary: Povejte, s čim so obdelani tla, stene in strop vsakega prostora, dodajte cone, na primer zaščitno oblogo ob umivalniku, in dobite razpredelnice obdelav po prostoru, steni in coni s površinami, številom ploščic z rezi ter prostornino podlag.
keywords: obdelava, obdelave, razpredelnica obdelav, obdelava prostora, obdelava tal, obdelava stene, obdelava stropa, talna letev, ploščica, ploščice, rezane ploščice, število ploščic, odpad, podlaga, estrih, podložna plošča, omet, cona, zaščitna obloga, spodnja obloga, mokro območje, notranjost, količine
from: 8c30498c
---

## Kaj boste naredili

Enkrat povejte BimCraftu, s čim je obdelan vsak prostor. Razpredelnice obdelav nato dajo površine, ploščice za naročilo in prostornine podlag ter se spreminjajo z modelom.

## Koraki

1. Vklopite {{ui:Risanje}}, v levi plošči odprite **Razpredelnice** in kliknite **Obdelave prostorov**.
2. Pod **Vrste obdelav** kliknite **Dodaj vrsto obdelave**. Dajte ji ime, vrsto (Ploščica, Plošča, Premaz ali Deska) in debelino. Za ploščico vnesite dolžino in širino ploščice, fugo ter dodatek za odpad v odstotkih. Če je pod obdelavo kaj (estrih, podložna plošča, plast ometa), ga imenujte pod **Podlaga** in vnesite njegovo debelino.
3. Pod **{{ui:Prostori}}** izberite talno, stensko in stropno obdelavo vsakega prostora. Če ima prostor talno letev, vpišite njeno ime in višino.
4. Pod **Cone** kliknite **Dodaj cono** za del prostora, ki dobi drugo obdelavo:
   - **stenska** cona je pas med dvema višinama nad tlemi (zaščitna obloga ob umivalniku od 0 do 1200, spodnja obloga stene). Je na vseh stenah prostora, ali pa izberite stene tega prostora v modelu in kliknite gumb **Vklop**, da ostane samo pri njih;
   - **talna** ali **stropna** cona je površina, ki jo vpišete. Odšteje se od lastne obdelave prostora.
5. Kliknite **Shrani**. To je en korak pri razveljavitvi. Dolžine vpišete v enotah projekta.

## Razpredelnice

Štiri vnosi se pridružijo seznamu razpredelnic:

- **Obdelave po prostoru**: vsak prostor s svojo talno, stensko in stropno obdelavo, njihove površine ter talna letev z dolžino.
- **Obdelave po steni**: vsak odsek stene na strani prostora in pas, ki ga pokrije obdelava, z dolžino, bruto površino, odbitki, neto površino ter pri ploščicah s celimi ploščicami, rezanimi ploščicami in ploščicami za naročilo.
- **Obdelave po coni**: vsaka cona z obdelavo, neto površino, ploščicami in prostornino podlage.
- **Količine obdelav**: ena vrstica na obdelavo: neto površina, cele in rezane ploščice, ploščice za naročilo, podlaga in njena prostornina ter lastna prostornina obdelave.

Razvrstite, seštejte, shranite in izvozite jih kot katero koli razpredelnico: glejte [Postavitev, shranjevanje in izvoz razpredelnice](topic:schedule-layouts). Kliknite vrednost, da izberete, od česa izhaja: odbitki stene izberejo njena vrata in okna.

## Kako se merijo obdelave

- **Stene**: vsak odsek stene na strani prostora, njegova dolžina vzdolž prostora krat višina, ki jo obdelava pokriva, minus del vsakih vrat in oken znotraj te višine. Stena, nižja od prostora, je obdelana do lastnega vrha. Metoda merjenja projekta določa, katere odprtine so premajhne za odbitek ([Razpredelnice](topic:plan-schedules-and-pdf)).
- **Tla in stropi**: prostor znotraj zunanjih ploskev sten, minus otoki v njem.
- **Talna letev**: dolžina sten prostora minus širina vrat.
- **Ploščice**: položene v mrežo od enega vogala površine, z eno fugo med ploščicami. Ploščica, ki je v celoti na površini, je cela; ploščica, ki je le delno na njej (ob robu, okoli odprtine), je rezana. Ploščice za naročilo so cele plus rezane, plus dodatek za odpad, zaokroženo navzgor. Vsaka rezana ploščica se šteje kot nova: odrezkov ne uporabljamo znova.
- **Prostornina podlage**: neto površina krat debelina podlage.
- Število, označeno z **≈**, je izračunano iz površine namesto ploščica za ploščico: površina z vneseno cono, izrezano iz nje, ali zelo velika površina.

## Dobro je vedeti

- Obdelave se hranijo v datoteki stavbe (nabor lastnosti `CadCraft_Finishes` na projektu). Vsak prostor z obdelavo dobi tudi standardni nabor lastnosti IFC `Pset_SpaceCoveringRequirements`, da imena berejo drugi programi.
- Postavitev ploščic se začne pri vogalu. Postavitev, centrirana v prostoru, vzorec (riblja kost, opečna vezava) in ponovna uporaba odrezkov se ne računajo.
- Ukrivljena stena in meja prostora, ki ni stena (ločilnik prostorov), je navedena kot **Druga meja** z dolžino in brez odprtin.
- Prej obstoječa **Obdelave** navede plasti obdelav tipov sten; **Sloji: površina in prostornina** navede vsak sloj vsakega tipa s plastmi. Obdelave prostorov tukaj so tiste, ki so na prostor nanesene čez te.
- Pomočnik lahko nastavi obdelave namesto vas z `finishes_set`: glejte [Pustite, da AI pomočnik dela z vašim modelom](topic:assistants).
