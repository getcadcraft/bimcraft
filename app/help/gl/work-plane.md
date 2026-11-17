---
title: O plano de traballo: definilo, mostralo, miralo de fronte
summary: O plano de traballo é o plano que usan as liñas do modelo, o texto do modelo e o Visor do plano de traballo. Defínao nun nivel, nunha cara, nun plano de referencia con nome ou nunha liña; móstreo nas vistas; abra o visor para debuxar sobre un plano vertical.
keywords: plano de traballo, definir plano de traballo, mostrar plano de traballo, plano de referencia, visor do plano de traballo, plano con nome, cara, nivel, plano vertical, plano en pé, debuxar sobre un muro, alzado, axustar, aliñamento, plano de ref
from: 8aceee1d
---

## O que vai facer

Escolla o plano no que debuxa, vexa onde está e debuxe sobre un plano que queda vertical.

## Pasos

1. Active **Debuxar** e abra o menú **Construír** (nunha disposición de cinta: a lapela Arquitectura, Plano de traballo).
2. Escolla **Definir plano de traballo**. Despois faga unha destas accións:
   - escolla un nivel en **Definir a**;
   - escolla un plano de referencia con nome na lista ao lado;
   - faga clic nunha liña da planta: un muro, unha liña de cuadrícula, un plano de referencia, unha liña do modelo ou un sistema de cortina. O plano de traballo pasa a ser o plano vertical que pasa por esa liña;
   - faga clic nunha cara plana na vista 3D. O plano de traballo queda sobre esa cara.
3. Escolla **Mostrar plano de traballo** para velo: unha folla tintada cunha cuadrícula de metros na vista 3D, un contorno ou liña descontinua na planta e un contorno descontinuo no panel de alzados e seccións. Escólleo de novo para ocultalo.
4. Escolla **Visor do plano de traballo** para mirar o plano de fronte. As liñas negras son o modelo cortado polo plano. Use as súas ferramentas para debuxar unha liña do modelo, un texto do modelo ou un plano de referencia sobre o plano. **Mirar en 3D** xira a vista 3D para quedar de cara ao plano.

## Planos de referencia

Un plano de referencia é un plano con nome que se debuxa como unha liña.

1. Escolla **Plano de referencia**. Escriba un nome na súa fila se o quere (se non, recibe un automaticamente) e unha altura.
2. Faga clic onde comeza e onde remata. Na planta isto crea un plano vertical. No Visor do plano de traballo crea un plano que queda perpendicular ao plano de traballo.
3. Aparece como unha liña verde descontinua co seu nome na planta, e como un contorno descontinuo na vista 3D e no panel de alzados e seccións.
4. Séleccionao para renomealo, cambiar a súa lonxitude, altura e base, ou prema **Usar como plano de traballo**.

Dous planos de referencia non poden ter o mesmo nome, porque o nome é o que se usa para escoller un.

## Cousas que convén saber

- Un modelo sen plano de traballo definido funciona no seu nivel máis baixo.
- O plano de traballo gárdase no ficheiro. Mostralo ou ocultalo recórdase neste navegador, non no ficheiro.
- Se o plano de traballo segue a un plano de referencia e vostede move ese plano, o plano de traballo móvese con el.
- Nun plano de traballo vertical, as ferramentas Liña do modelo e Texto do modelo abren o visor, porque unha planta non pode apuntar a unha altura.
- As ferramentas de debuxo prenden os extremos dos planos de referencia debuxados na planta do mesmo xeito que prenden os extremos doutras liñas no visor.

## No ficheiro IFC

- O plano de traballo é un conxunto de propiedades (CadCraft_WorkPlane) no proxecto.
- Un plano de referencia é un IfcAnnotation co tipo de obxecto ReferencePlane e o seu nome. A súa forma é o contorno pechado do plano, para que outro programa mostre onde está. O seu conxunto CadCraft_ReferencePlane contén a orixe, a dirección, a normal e a extensión. IFC non ten clase para un plano de referencia; unha anotación non se conta como elemento da construción e non delimita os cuartos.
