---
title: Výber programu, ktorý vykreslí obraz
summary: Výber motora v dialógu Vykresliť: naše dva vlastné motory, iné programy v CadCraft Studio a čo namiesto toho robí web.
keywords: vykreslenie, motor, vykresľovací motor, plug-in, plugin, studio, externý program, vykreslené programom, rad, motor doplnku
from: 44a1ef5e
---

{{ui:Vykresliť}} má výber **Motor** nad {{ui:Tvar}}. Naše dva vlastné motory sú vždy k dispozícii a fungujú všade; doplnky môžu pridať ďalšie a v CadCraft Studio zoznam obsahuje aj programy, ktoré scénu prevezmú.

| Motor | Čo robí | Kde |
|---|---|---|
| Vstavaný: Rýchly | Rýchly statický obraz: denné svetlo, mäkké tiene, vzhľad skla a kovu, za sekundy | Prehliadač a Studio |
| Vstavaný: Path tracer | Odrazy svetla medzi povrchmi na grafickej karte alebo procesore, rad vykresľovania a ostatné počítače vo vašej sieti | Prehliadač a Studio |
| Motor doplnku | Vykreslí obraz a vráti ho späť: pozri [Vykreslenie obrazu iným programom](topic:render-other-program) | Prehliadač (motor napísaný v JavaScripte) alebo Studio (motor, ktorý spúšťa program) |
| Program, ktorý scénu prevezme | Studio uloží scénu do svojho priečinka a udržiava ju v súlade | Studio |
| Otvoriť v … | Uloží scénu a otvorí ju v programe; nič sa nevráti: pozri [Otvorenie scény v inom programe](topic:render-open-in) | Web uloží súbor |

## Ako výber funguje

- Výber Rýchly alebo Path tracer zmení aj {{ui:Tvar}} a naopak. Nič ďalšie v dialógu sa nemení pre tých, ktorí iný motor nikdy nepoužívajú.
- Motor, ktorý nie je k dispozícii, zostane v zozname s dôvodom („nenájdený“, „vyžaduje novšiu verziu“); nedá sa vybrať. V prehliadači motor, ktorý beží iba v Studiu, zobrazí „ukladá súbor“: {{ui:Vykresliť}} potom uloží scénu a jej nastavenia do súboru, ktorý odnesiete do tohto programu.
- Výber sa uloží spolu s nastaveniami vykreslenia súboru a motor vybraný naposledy je východiskový motor pre súbory, ktoré nemajú vlastný výber.
- Obraz z iného programu uvádza, ktorý program ho vykreslil a jeho verziu, v dialógu aj v rade vykresľovania. Sľuby stránky [Vykreslenie](topic:render) platia iba pre **naše vlastné** motory: iný program osvetľuje, tónuje a vzorkuje po svojom, takže dva obrazy jednej scény sú si podobné v kamere, slnku, svetlách a expozícii, nie však pixel po pixeli.

## Čo dostane každý motor

Scéna ide do iného programu ako **balík**: model ako súbor USD (rovnaký súbor, aký zapíše [Uložiť ako USD](topic:usd)) a súbor nastavení, ktorý obsahuje to, čomu sa importéru USD nedá dôverovať: presné hodnoty materiálov, svetlá, ktoré sú zapnuté, s ich výkonom a svetelnými profilmi, slnko, oblohu, expozíciu a kameru tak, ako by ju nakreslil dialóg. Nič sa nikam neodosiela.

## Rad vykresľovania

Obraz pre iný program môže čakať v [rade vykresľovania](topic:render#the-render-queue) rovnako ako naše vlastné; jeho úloha si pamätá, pre ktorý motor je.
