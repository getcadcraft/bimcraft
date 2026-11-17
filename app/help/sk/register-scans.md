---
title: Zaregistrovanie viacerých skenov do jedného
summary: Umiestnite skeny zachytené z rôznych pozícií do jedného rámca pomocou vybraných dvojíc bodov alebo zadaných cieľov, spresnite ich pomocou ICP, uložte registráciu ako projekt a exportujte zaregistrované mračno ako LAS alebo E57.
keywords: registrácia, skeny, mračno bodov, icp, iterative closest point, ciele, dvojice bodov, tuhá transformácia, zarovnanie, zlúčenie, e57, las, sken na bim
from: e8e270db
---

## Čo urobíte

Viaceré skeny jedného miesta (každý z vlastnej pozície skenera) začínajú vo vlastných súradniciach. Zaregistrujte ich: dajte každému skenu jedno umiestnenie, aby všetky boli v jednom rámci, potom to uložte ako projekt a zapíšte zaregistrované mračno do jedného súboru LAS alebo E57.

## Umiestnenie skenov

1. Otvorte dialóg ({{ui:Register scans…}} na úvodnom paneli, alebo {{ui:Show}} › {{ui:Register scans…}}, keď je model otvorený). {{ui:Add scans…}} prijme súbory LAS, LAZ, E57, PLY, PCD, PTX, PTS alebo XYZ, alebo ich presuňte na dialóg. Skeny s inými jednotkami sa odmietnu s poznámkou: najprv jeden z nich prevedte.
2. Zvoľte {{ui:Scan to move}} a {{ui:Place against}}. Obrázok zobrazuje každý sken v rámci tak, ako je teraz, každý inou farbou: {{ui:Plan}}, {{ui:Front}} alebo {{ui:Side}}; ťahaním posúvate, kolieskom priblížite.
3. **Podľa dvojíc bodov.** Kliknite na {{ui:Pick a pair}}, potom na bod na skene, ktorý chcete presunúť, a potom na to isté miesto na inom skene (roh, cieľ, pätka stĺpa). Urobte to aspoň trikrát, s bodmi, ktoré neležia na jednej priamke a sú od seba rozložené. Kliknite na {{ui:Place by pairs}}: sken sa umiestni metódou najmenších štvorcov a **Zostatok** ukazuje, o koľko každá dvojica ešte chýba. Dvojica s veľkým číslom je zlý výber: odstráňte ju krížikom a umiestnite znova.
4. **Podľa cieľov.** Ak sú známe skutočné súradnice bodu (zamerané ciele), kliknite na {{ui:Pick, then type target}}, kliknite na bod na jeho skene a zapíšte X, Y a Z cieľa do riadku. Dvojice a zadané ciele sa môžu voľne miešať.

## Spresnenie pomocou ICP

Dvojice dajú hrubé umiestnenie. {{ui:Refine}} posúva sken, kým jeho plochy nesedia na plochách druhého skenu: najprv **bod k bodu**, potom **bod k rovine**. Tabuľka uvádza každý krok s jeho chybou a koľko bodov sa spárovalo; riadok nad ňou kreslí klesanie chyby. {{ui:Stop}} ukončí beh po práve prebiehajúcom kroku a ponechá dosiahnutý výsledok. {{ui:Undo}} vezme späť celý beh (alebo posledné umiestnenie); {{ui:Reset}} vráti sken na súradnice jeho súboru.

Aby to bežalo rýchlo na notebooku, ICP pracuje so zredukovaným podielom bodov ({{ui:Points used}}, 5,000 až 60,000) a ignoruje zhody vzdialenejšie ako {{ui:Largest match distance}} (štandardne 5 % veľkosti skenu, s postupným zmenšovaním, ako sa ustáli). Najprv potrebuje hrubé umiestnenie: skeny, ktoré sa len sotva prekrývajú, hlásia, že sa nedajú spárovať. Plochy, ktoré sú len rovinné alebo len priame, nedokážu opraviť polohu pozdĺž seba; vtedy pridajte dvojice.

## Uloženie a export

- {{ui:Save project}} zapíše malý súbor `.ccscans.json`: názov každého skenu, jeho veľkosť a odtlačok prvých 64 KB, spolu s jeho transformáciou. Neobsahuje žiadne body. {{ui:Open project…}} nájde súbory skenov podľa týchto odkazov (súbory musia byť najprv pridané) a vráti každú transformáciu späť.
- {{ui:Export LAS}} a {{ui:Export E57}} zapíšu jeden súbor so všetkými skenmi na ich zaregistrovanom mieste. Body v pôvodných súboroch sa nikdy neprepisujú; transformácia sa uplatní pri výstupe. Keď je zapnuté Načítať každý bod zo súborov, každý súbor sa pri každom bode načíta znova (až 20 miliónov na sken); keď je vypnuté, zapíšu sa iba body zobrazené v prehliadači.
- {{ui:Show registered cloud}} (BimCraft) zapíše LAS a otvorí ho v 3D zobrazení vedľa modelu ako každé iné mračno.

:::note
Nič sa nenahráva. Registrácia pracuje v jednotkách súborov a zachováva milimetre: LAS sa zapisuje s mierkou, ktorá sa hodí (až do 0.1 mm), E57 s dvojitou presnosťou. Súradnicový systém sa prenesie do LAS, iba keď každý sken uvádza ten istý kód EPSG. Zapisovač E57 je náš vlastný; overuje sa tým, že jeho súbory sa čítajú späť týmto čítačom a knižnicou libE57Format.
:::
