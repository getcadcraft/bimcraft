---
title: "Sistemes de mur cortina: murs vidrats en una quadrícula, amb muntants"
summary: Dibuixeu un sistema de mur cortina com un mur o situeu-lo sobre una cara, i després definiu-ne les línies de quadrícula i els muntants. Es desa com a IfcCurtainWall amb els seus panells i muntants.
keywords: sistema de mur cortina, mur cortina, quadrícula de mur cortina, muntant, vidratge, aparador, mur de vidre, panell, vidre, per cara, cara, massa, línia de quadrícula, espaiat, perfil, travessany, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Què farà

Creareu un mur vidrat fet de vidres entre muntants, canviareu on són les línies de la quadrícula i triareu quines línies porten un muntant.

## Passos

1. Activeu **Dibuixa** i obriu el menú **Construcció** (en una disposició de cinta: la pestanya Arquitectura).
2. Trieu **Sistema de mur cortina**. A la seva fila definiu la part superior (el nivell de sobre, o una alçada), una línia cada tant al llarg, una línia cada tant amunt (deixeu-ho buit si no en voleu), si porta muntants, i el perfil del muntant.
3. Feu clic on comença i on acaba, igual que quan dibuixeu un mur. Shift el manté quadrat.
4. Per canviar la quadrícula, trieu **Quadrícula de mur cortina** i feu clic al sistema:
   - **Afegeix una línia**: una línia vertical va on feu clic. Per a una línia horitzontal, escriviu-ne primer l'alçada a **A**.
   - **Mou una línia**: feu clic a la línia i després al lloc on ha d'anar.
   - **Elimina una línia**: feu clic a la línia.
   - **Defineix per espaiat**: escriviu l'espaiat a **Cada**, i després feu clic al sistema.
5. Per canviar els muntants, trieu **Muntant**, escolliu sobre què actua (la línia vertical on feu clic, la línia horitzontal a una alçada, la vora, o totes les línies), trieu **Col·loca muntants** o **Elimina muntants** i un perfil, i després feu clic al sistema.
6. Seleccioneu un sistema per veure'l tot a **Propietats**: cada línia de quadrícula amb el seu lloc, una marca per al seu muntant i un botó per eliminar-lo; l'espaiat; la vora; el perfil; el gruix del vidre.

## Per cara

**Per cara** crea un sistema de mur cortina sobre una cara plana que cliqueu a la vista 3D. La seva fila té els mateixos ajustos de quadrícula i de muntants.

- Funciona amb qualsevol cara plana de qualsevol element que mostri la vista 3D: una massa, un mur, un forjat, un pla de coberta, un pilar, un element col·locat. La cara pot ser vertical, inclinada o horitzontal.
- El sistema pren el contorn de la cara. Un frontó o una altra forma estranya retalla els vidres i els muntants fins a aquest contorn.
- També pot fer un **mur** en lloc d'això, al llarg de la base d'una cara vertical i tan alt com la cara. Aquí un mur sempre és vertical, de manera que una cara inclinada o horitzontal no en pot fer cap.
- No fa cap coberta. Una coberta a BimCraft es calcula a partir del contorn d'una planta i d'una pendent, no d'una sola cara.
- Una cara corba són moltes cares planes petites: un clic en pren una d'elles.
- Una cara amb obertures: el sistema cobreix el contorn exterior de la cara.

## Com es mesura

- **Àrea bruta** és el contorn del sistema.
- **Àrea de vidre** són els vidres tal com s'han fet: cada vidre perd mig ample de muntant per cada costat amb un muntant de quadrícula, i un ample sencer amb un muntant de vora.
- Un muntant vertical va d'una vora a l'altra. Un muntant horitzontal s'atura a cada muntant vertical i a la vora. Els muntants de vora queden dins del contorn; on es troben dos, el més vertical va de cap a cap. Les juntes es tallen rectes, no a inglet.
- **Quadres** té una llista de **Sistemes de mur cortina** amb aquests números quan el model en té un.

## Al fitxer IFC

Un IfcCurtainWall a la seva planta, format per un IfcPlate (panell de mur cortina) per cada vidre i un IfcMember (muntant) per cada tros de muntant, cadascun amb la seva pròpia forma, material i quantitats de base.

## Bon a saber

- Qualsevol mida es fa tal com demaneu. Només es rebutja un contorn sense àrea, perquè no hi ha res a fer.
- Un sistema dibuixat com un mur conserva l'alçada amb què es va dibuixar. Si després moveu una planta, torneu a definir-ne l'alçada a Propietats.
- L'eina Mou encara no mou un sistema de mur cortina. Suprimiu-lo i dibuixeu-lo de nou, o canvieu-ne la quadrícula al lloc.
- Desfés desfà cada pas: el sistema sencer, un canvi de quadrícula, un canvi de muntants.
