---
title: Códigos de clasificación (Uniclass, OmniClass, UniFormat)
summary: Dé a cada elemento e tipo un código de clasificación, escolla que sistemas usa o proxecto, busque nas táboas Uniclass que trae a aplicación, cargue as táboas con licenza propia da súa oficina e amose os códigos nos cuadros. Os códigos escríbense no ficheiro IFC para outro software.
keywords: clasificación, clasificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, táboa, código de elemento, código de tipo, código predeterminado, IfcClassification, IfcClassificationReference, cobie, columna de cuadro, csv, licenza, license
from: 222b94cd
---

## Que vai facer

Poña un código de clasificación en muros, chans, cubertas, portas, xanelas e calquera outra cousa do modelo, en até tres sistemas lado a lado: Uniclass, OmniClass e UniFormat. Outras disciplinas e outros programas dependen do código, non do nome, así que os códigos gárdanse no ficheiro IFC como referencias de clasificación que calquera programa BIM le.

## Dar un código a un elemento

1. Seleccione un elemento (ou varios) e abra **Propiedades**. Abra a sección {{ui:Clasificación}}.
2. Escriba o código na caixa do seu sistema e prema Enter. Con unha lista de códigos cargada, escriba parte dun código ou algunhas palabras («curtain wall» ou «muro-cortina») e escolla entre as coincidencias: o título do código énchese por vostede.
3. {{ui:Aplícase a}} indica onde vai o código: **Este elemento**, ou **O seu tipo (todos os elementos do tipo)**. Un código nun tipo de muro lo todos os muros dese tipo, tamén os que debuxe despois.
4. {{ui:Limpar}} quita un código.

Baixo cada código, a sección indica de onde procede: fixado neste elemento, do seu tipo ou o predeterminado do proxecto para a súa clase. O código propio dun elemento sempre gaña ao do seu tipo, e o do tipo ao predeterminado. Cando hai varios elementos seleccionados, unha caixa que di «varía» significa que non comparten un código; se escribe un, dállelo a todos. Cada cambio é un paso de desfacer.

Un código sempre pode escribirse, haxa ou non unha lista cargada. Se non parece un código dese sistema, ou non está na lista cargada, unha pista di iso e o código consérvase tal como o escribiu.

## Escoller os sistemas do proxecto

Abra **Datos** na barra do modelo e escolla {{ui:Clasificación}} (ou {{ui:Clasificación do proxecto…}} na sección Propiedades).

- Marque os sistemas que usa este proxecto. Propiedades amosará entón só eses.
- **Uniclass**: as táboas de Elementos/funcións (EF), Sistemas (Ss) e Produtos (Pr) veñen coa aplicación. Son © NBS, con licenza Creative Commons Attribution-NoDerivatives 4.0, e pásanse sen cambios. O diálogo amosa a edición de cada táboa e o día en que se leu. Non son as máis recentes: o editor publica novas cada trimestre no seu propio sitio.
- **OmniClass** e **UniFormat**: a aplicación non trae ningunha lista de códigos, porque o seu editor non permite pasar as táboas sen licenza. Escriba calquera código, ou cargue a táboa con licenza da súa oficina.
- {{ui:Cargar unha táboa (CSV)…}} le a táboa propia da súa oficina desde un ficheiro CSV cunha columna de código e outra de título (unha fila de cabeceira chamada Code, Number ou Identifier e Title, Name ou Description encóntrase sola; sen ela úsanse as dúas primeiras columnas). A táboa queda neste navegador e nunca se mete no ficheiro do proxecto. No ficheiro só se gardan os códigos que asigna. Pode cargar unha táboa Uniclass máis nova do mesmo xeito.
- {{ui:Dar aos elementos un código predeterminado segundo a súa clase}} dá a cada muro, chan, cuberta, porta, xanela, escaleira, rampa, piar, viga e peza de mobiliario un código Uniclass inicial da táboa Elementos/funcións cando non ten código propio. Os elementos que debuxe despois tamén o reciben.
- {{ui:Amosar os códigos como columnas nos cuadros}} engade unha columna por sistema aos cuadros de Portas, Xanelas, Muros por tipo e Cuartos, e ao seu CSV. Unha fila de varios elementos amosa «varía» cando os seus códigos difiren.

## Boas a saber

- Os códigos predeterminados son a elección inicial de CadCraft, non a do editor, e un profesional non os revisou. Compróbeos coa norma do seu proxecto.
- No ficheiro, un predeterminado é unha clasificación real, marcada coa relación «CadCraft default», e desaparece en canto o elemento ou o seu tipo recibe un código propio.
- Os códigos que xa tiña un ficheiro importado léense e amósanse, sea cal sea a grafía que o outro programa usou para o nome do sistema. Os códigos de calquera outro sistema (o propio dunha oficina) listanse e déixanse tal cual.
- Os códigos léense de novo ao volver abrir o ficheiro, aquí ou noutro programa. Tamén se levan á exportación IFC5 alpha (IFCX) cando esa opción de laboratorio está activa, agás un código fixado nunha cuberta.
- Non implementado: unha árbore para navegar por unha táboa nivel a nivel, códigos en niveis e cuartos como predeterminados do proxecto, e comprobación dun código coa edición indicada no ficheiro.
