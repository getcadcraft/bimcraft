---
title: Postavitev, shranjevanje in izvoz razpredelnice
summary: Razvrstite razpredelnico, dodajte ji vmesne vsote in skupne vsote, dodajte stolpec, prebran iz lastnosti, shranite jo kot nastavitev v datoteki in jo izvozite kot delovni zvezek preglednice (.xlsx), kot besedilo za prilepitev v spletno preglednico ali kot CSV. Pisarniški standard dopolni, kar razpredelnica ne navede.
keywords: postavitev razpredelnice, razvrsti po, vmesna vsota, skupna vsota, naslovi, pisarniški standard, privzeta pravila, nastavitev, razpredelnica vrat po etažah, požarna odpornost, okovje, xlsx, delovni zvezek, spletna preglednica, prilepi, csv, izvoz, preglednica, elementi, izberi iz razpredelnice, vrednost
from: 95dfd801
---

## Kaj boste naredili

Preprosto razpredelnico spremenite v tisto, ki jo izda vaša pisarna: razvrščeno po nivoju, tipu ali prostoru, z vmesnimi vsotami in skupno vsoto, s stolpci, ki jih potrebujete, pod lastnim imenom. Nato jo pošljite v preglednico. Vsaka vrstica in vsaka vrednost še vedno ve, od katerih elementov izhaja.

## Koraki

1. Vklopite {{ui:Risanje}} in v levi plošči odprite **Razpredelnice**. Izberite razpredelnico, na primer **Vrata**.
2. Nad tabelo izberite **Razvrsti po** (stolpec razpredelnice, na primer Nivo ali Tip, ali **Brez razvrščanja**) in **Vsote** (**Brez vsot**, **Ena vsota** ali **Vmesne vsote in skupna vsota**). **Kot je nastavljeno** prepusti izbiro shranjeni nastavitvi ali pisarniškemu standardu.
3. Za dodajanje stolpca, prebranega iz elementov, pod tabelo vpišite ime lastnosti ali oznake (na primer `FireRating`, `Pset_DoorCommon.FireRating` ali ime oznake, kot je `Okovje`) in kliknite **Dodaj stolpec**. BimCraft najprej prebere nabore lastnosti elementa, nato tipa. Če elementi še nimajo vrednosti, to pove; stolpec se napolni sam, ko je vrednost nastavljena.
4. Vpišite ime (na primer „Razpredelnica vrat po etažah“) in kliknite **Shrani kot nastavitev**. Nastavitev se hrani v datoteki stavbe in se pod svojim imenom pridruži seznamu razpredelnic. Sledi vsaki spremembi modela. **Odstrani to nastavitev** jo spet odstrani. Obe dejanji sta en korak pri razveljavitvi.

## Kliknite vrednost, da izberete, od česa izhaja

Kliknite katero koli vrstico ali katero koli posamezno vrednost, da izberete elemente za njo v tlorisu in v 3D:

- vrstica izbere elemente te vrstice;
- vmesna vsota ali skupna vsota izbere vse, kar seštevata; naslov skupine izbere njeno skupino;
- vrednost z lastnimi elementi izbere te: **odbitki** tipa stene izberejo njena vrata in okna, površina sten prostora pa njegove stene.

Enako deluje v dokumentu, narejenem iz modela: v predogledu kliknite vrednost razpredelnice.

## Izvoz

- **Prenesi Excel** shrani delovni zvezek .xlsx. Dolžine, površine, prostornine in števila so prava števila v enoti, ki jo stolpec prikazuje (čevlji in palci ostanejo besedilo). Drugi list, **Elementi**, za vsako vrstico navede GlobalId-je elementov, ki stojijo za njo.
- **Kopiraj za Google Sheets** da razpredelnico v odložišče kot besedilo, ločeno s tabulatorji. V Google preglednici kliknite celico A1 in prilepite. **Odpri novo Google Sheet** odpre `sheets.new`, Googlov lastni naslov za prazno preglednico, v vašem računu Google. BimCraft se ne prijavlja v Google in tja ničesar ne pošlje: prilepljanje je vaše.
- **Prenesi CSV** shrani tabelo tako, kot je postavljena na zaslonu.

## Pisarniški standard

Pisarna lahko enkrat navede, kako so njene razpredelnice postavljene. Vklopite dodatek **Privzeta pravila** ([Privzeta pravila](topic:default-policies)) in v **Nastavitve › Splošno › Privzeta pravila › Postavitev razpredelnice (pisarniški standard)** nastavite:

| Pravilo | Kaj naredi |
|---|---|
| Razvrsti razpredelnice po | Nivo, Tip, Prostor ali brez razvrščanja, za vsako razpredelnico, ki ima tak stolpec |
| Vsote v razpredelnicah | Brez vsot, ena vsota na koncu ali vmesna vsota pod vsako skupino in skupna vsota |
| Naslov razpredelnice | Vzorec, na primer `{project}: {schedule}` |
| Naslovi stolpcev | Kot je zapisano, V VELIKIH ČRKAH ali Z velikimi začetnicami |

Standard velja za vsako razpredelnico, ne glede na to, kdo jo nastavi: navadne razpredelnice na plošči, shranjena nastavitev, razpredelnica, ki jo nastavi pomočnik, izvozi in razpredelnice v dokumentu. Nastavitev, ki sama navaja svoje razvrščanje, vsote ali naslov, jih ohrani; standard dopolni ostalo. Plošča pove, kateri deli so bili nastavljeni s pisarniškim standardom. Pravila potujejo v datoteki Privzeta pravila skupaj z drugimi.

## Dobro je vedeti

- Nastavitev navede svojo izvorno razpredelnico in svoje stolpce; števil ne hrani. Števila se vsakič preberejo iz modela.
- Seznami, ki niso vrstice elementov (sestavi sten in legenda materialov), tu nimajo postavitve in izvoza.
- Pomočnik lahko vse to naredi namesto vas: glejte [Pustite, da AI pomočnik dela z vašim modelom](topic:assistants).
