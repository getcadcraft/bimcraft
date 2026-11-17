---
title: Die werkvlak: stel dit, wys dit, kyk reguit daarna
summary: Die werkvlak is die vlak wat modellyne, modelteks en die Werkvlakkyker gebruik. Stel dit op 'n verdieping, 'n oppervlak, 'n benoemde verwysingsvlak of 'n lyn; wys dit in die aansigte; maak die kyker oop om op 'n regop vlak te teken.
keywords: werkvlak, stel werkvlak, wys werkvlak, verwysingsvlak, werkvlakkyker, benoemde vlak, oppervlak, vlak, verdieping, regop vlak, vertikale vlak, teken op 'n muur, aansig-tekening, vasvang, belyning, verwys-vlak
from: 8aceee1d
---

## Wat jy sal doen

Kies die vlak waarop jy teken, sien waar dit is, en teken op 'n vlak wat regop staan.

## Stappe

1. Skakel **Teken** aan en maak die **Bou**-kieslys oop (in 'n lintuitleg: die Argitektuur-oortjie, Werkvlak).
2. Kies **Stel werkvlak**. Doen dan een van hierdie:
   - kies 'n vlak in **Stel na**;
   - kies 'n benoemde verwysingsvlak in die lys langs dit;
   - klik op 'n lyn in die plan: 'n muur, 'n roosterlyn, 'n verwysingsvlak, 'n modellyn of 'n gordynstelsel. Die werkvlak word die regop vlak deur daardie lyn;
   - klik op 'n plat oppervlak in die 3D-aansig. Die werkvlak lê op daardie oppervlak.
3. Kies **Wys werkvlak** om dit te sien: 'n getinte blad met 'n meterrooster in die 3D-aansig, 'n gestreepte omtrek of lyn in die plan, en 'n gestreepte omtrek in die aansig- en snitpaneel. Kies dit weer om dit te verberg.
4. Kies **Werkvlakkyker** om reguit na die vlak te kyk. Die swart lyne is die model wat deur die vlak gesny word. Gebruik sy gereedskap om 'n modellyn, 'n modelteks of 'n verwysingsvlak op die vlak te teken. **Kyk daarna in 3D** draai die 3D-aansig sodat dit na die vlak wys.

## Verwysingsvlakke

'n Verwysingsvlak is 'n benoemde vlak wat jy as 'n lyn teken.

1. Kies **Verwysingsvlak**. Tik 'n naam in sy ry as jy een wil hê (dit word andersins vir jou benoem) en 'n hoogte.
2. Klik waar dit begin en waar dit eindig. In die plan maak dit 'n regop vlak. In die Werkvlakkyker maak dit 'n vlak wat loodreg op die werkvlak staan.
3. Dit wys as 'n groen gestreepte lyn met sy naam in die plan, 'n gestreepte omtrek in die 3D-aansig en in die aansig- en snitpaneel.
4. Kies dit om dit te hernoem, sy lengte, hoogte en voet te verander, of druk **Gebruik as die werkvlak**.

Twee verwysingsvlakke kan nie dieselfde naam hê nie, omdat jy een kies volgens die naam.

## Goed om te weet

- 'n Model waarvoor geen werkvlak gestel is nie, werk op sy laagste vlak.
- Die werkvlak word in die lêer gestoor. Of dit gewys of verberg word, word in hierdie blaaier onthou, nie in die lêer nie.
- As die werkvlak 'n verwysingsvlak volg en jy daardie vlak skuif, skuif die werkvlak saam daarmee.
- Op 'n regop werkvlak open die Modellyn- en Modelteks-gereedskap die kyker, omdat 'n plan nie na 'n hoogte kan wys nie.
- Teken-gereedskap vang die punte van verwysingsvlakke wat in die plan geteken is, op dieselfde manier as wat hulle ander lyne se punte in die kyker vang.

## In die IFC-lêer

- Die werkvlak is 'n eienskapstel (CadCraft_WorkPlane) op die projek.
- 'n Verwysingsvlak is 'n IfcAnnotation met die objektipe ReferencePlane en sy naam. Sy vorm is die geslote omtrek van die vlak, sodat 'n ander program wys waar dit is. Sy stel CadCraft_ReferencePlane hou die oorsprong, rigting, normaal en omvang. IFC het geen klas vir 'n verwysingsvlak nie; 'n annotasie word nie as 'n boue-element getel nie en begrens nie vertrekke nie.
