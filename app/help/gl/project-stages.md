---
title: Etapas do proxecto, desde o encargo ata as instrucións de obra
summary: Comece cun encargo con áreas obxectivo e vexa, mentres debuxa, se se cumpre ou se queda curto; compare opcións de concepto con el, vincule especificacións e detalles aos tipos, revise planos de taller e rexistre instrucións de obra sobre os elementos.
keywords: encargo, cadro de accesos, área obxectivo, obxectivo, cuartos, cumprido, por baixo, por riba, opcións de concepto, opcións, volumetría, orzamento, especificación, detalle, detalle construtivo, tipo, plano de taller, revisión, aprobar, reenviar, instrución de obra, causa, campo, etapa
from: 0a49b852
---

## Que fará

Traballe as etapas dun proxecto nun só panel: escriba o encargo do cliente como cuartos con áreas obxectivo, compare opcións de concepto con el, manteña a especificación e os detalles construtivos cos tipos aos que pertencen, revise os planos de taller à medida que volven dos oficios e rexistre instrucións de obra sobre os elementos que modifican.

## Pasos

1. No panel esquerdo abra **Etapas do proxecto** e despois **Encargo**.
2. Pegue os cuartos, un por liña: `Living; 1; 30` significa un cuarto de 30 m². O número pode omitirse. Escolla **Engadir os cuartos**. Complete o cliente, a obra, o orzamento, a tolerancia e o programa, e despois **Gardar o encargo**.
3. Debuxe os muros. Cada cuarto que formen os muros e que teña o nome dun cuarto do encargo (un número despois, como "Dormitorio 2", non se ten en conta) contabilízase. O **Cadro de accesos** indica **Cumprido**, **Por baixo**, **Por riba** ou **Sen debuxar**, coa diferenza en m².
4. Para comezar un proxecto novo deste modo, escolla **Iniciar un proxecto novo desde un encargo**. Abre un modelo novo, a partir dunha das súas plantillas gardadas se escolle unha, e coloca o encargo como primeiro paso.
5. Abra **Opcións fronte ao encargo**. Cada opción de volumetría que se conserva no modelo debúxase á mesma escala coa súa superficie bruta, o que pide o encargo e cantos cuartos do encargo caben. **Apilar o encargo aquí** coloca os cuartos nos pisos da opción, do máis baixo ao máis alto, e indica o que non cabe. O custo procede só da táboa de prezos do proxecto; sen fila correspondente indica "Sen tarifa".
6. Abra **Tipos, especificacións e detalles**. Cada tipo de muro, porta, xanela e chan indica se ten texto de especificación, os detalles vinculados e onde discrepan a especificación, os cadros e as follas. **Vincular un detalle** engade un ficheiro de DetailCraft ou de CadCraft, un enderezo ou unha folla deste modelo.
7. Abra **Planos de taller**. Seleccione no modelo os elementos que cobre un plano de taller e despois **Recibir**. Use **Aprobar**, **Como se indica** ou **Revisar** co nome e a nota do revisor. **Reenviado** crea a seguinte revisión do mesmo rexistro e conserva o historial de revisión. O estado escríbese tamén en cada elemento.
8. Abra **Instrucións de obra**. Seleccione os elementos, indique a causa e o que supón para o custo e o tempo coas súas propias palabras, e prema **Rexistrar**. Despois de rexistrar unha emisión, **Explicar os cambios desde esta emisión** indica a que elementos modificados cobre unha instrución e cales cambiaron sen que se rexistrase nada.

## Cousas que convén saber

- Cada paso é un Desfacer. Non se rexeita nada: un encargo que non se cumpre, un tipo que non concorda co seu texto ou un plano de taller atrasado é un aviso ou unha nota en **Problemas**.
- Os cuartos do encargo son espazos sen muros. Teñen un obxectivo, non unha superficie debuxada, polo que os cadros de cuartos e COBie nunca os contan como cuartos debuxados.
- Unha disposición só apila cuartos en pisos segundo a superficie. Non debuxa muros.
- O texto de especificación escríbese en **Documentos** do modelo. Aquí só se compara cos propios tamaños do modelo: nunca se escribe por vostede a cláusula dunha norma.
- Os planos de taller e as instrucións de obra son rexistros no mesmo historial que o panel Emisións e revisións, polo que ambos paneis os mostran.
- O estado dun plano de taller é unha propiedade de cada elemento (`CadCraft_ShopDrawing`), e unha instrución de obra é `CadCraft_SiteInstruction`, así que Buscar e Colorear por propiedade poden usalas.
- As marcas verificadas en obra (Etapa 7) están en **Propiedades**, baixo **Verificación**.
