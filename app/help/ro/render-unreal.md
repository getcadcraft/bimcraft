---
title: Trimiterea scenei către un motor de joc
summary: Studio poate scrie scena într-un proiect Unreal Engine și o ține sincronizată la fiecare trimitere; propriile modificări stau într-un strat pe care CadCraft nu îl scrie niciodată. Modulul plug-in care o deschide nu a fost încă lansat.
keywords: unreal, unreal engine, motor de joc, legătură, trimitere, scenă USD, proiect, live, cameră cine, coadă de randare cinematică
from: 154d55ef
---

În CadCraft Studio, lista Motor poate conține o **legătură** către un proiect Unreal Engine. Într-un singur sens: de la CadCraft spre Unreal.

## Trimiterea scenei

1. Alegeți intrarea Unreal din lista Motor. Prima dată, Studio cere să alegeți dosarul proiectului (cel cu fișierul `.uproject`); îl reține.
2. Faceți clic pe {{ui:Trimitere}}. Studio scrie `CadCraft/<numele fișierului>/` în interiorul proiectului: scena ca fișier USD, fișierul de setări, profilurile de lumină și două fișiere mici de strat.
3. Modificați modelul, salvați și trimiteți din nou. Se înlocuiesc doar scena și fișierul de setări.

## Modificările proprii sunt în siguranță

Scena pe care o deschide Unreal este un strat rădăcină mic, făcut o singură dată, cu două straturi sub el: **stratul propriu** deasupra (`<name>.user.usda`, gol la început, niciodată rescris de CadCraft) și scena CadCraft dedesubt. Modificările salvate în stratul propriu rămân când scena este trimisă din nou. Luminile și celelalte actoare pe care le plasați în nivelul Unreal sunt în afara scenei și nici ele nu sunt atinse.

## Fără Studio

În browser, sau pe un calculator unde Studio nu găsește Unreal, alegeți **Dosar de proiect Unreal (.zip)** în lista Motor și faceți clic pe {{ui:Randare}}. Se salvează același dosar, ca arhivă zip: dezarhivați-l în dosarul `CadCraft` al proiectului. Lăsați **Includeți fișierele scenei** bifat prima dată; debifați-l pentru salvările ulterioare, astfel încât arhiva să conțină doar scena și fișierul de setări, iar stratul propriu să nu fie înlocuit niciodată.

:::note
Modulul plug-in Unreal care deschide scena, aplică soarele, lămpile, camerele și expunerea, urmărește fiecare trimitere și randează o cameră **nu a fost încă lansat** și nu a fost rulat în Unreal. Până atunci, {{ui:Trimitere}} pune fișierele în proiect, iar instrumentele USD proprii ale Unreal le pot deschide. Windows este primul sistem; macOS urmează.
:::
