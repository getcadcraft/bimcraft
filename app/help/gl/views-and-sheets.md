---
title: Vistas, rangos de vista e as túas propias follas
summary: Atopa cada planta, alzado, sección, vista 3D, cuadro e folla no navegador de proxecto, define como se corta cada planta e o que mostra, crea ampliacións, debuxa liñas e tramas nunha vista, garda os axustes en plantillas de vista e dispón follas propias.
keywords: ampliación, vista de ampliación, vista de detalle, planta ampliada, debuxo, liñas de detalle, liñas de debuxo, trama, zona de trama, zona recheada, planta reflectida do teito, rcp, planta de teito, cuadrícula de teito, luminarias, navegador de proxecto, vistas, rango de vista, recorte, región de recorte, vista recortada, escala de vista, subxacente, mostrar outro nivel, semitono, plano de corte, altura de corte, superior, inferior, profundidade da vista, visibilidade, categorías, ocultar na vista, plantilla de vista, plantillas, folla, follas, cajetín, ventá gráfica, escala, dispor follas, disposición, pdf, axustes da planta, navegador
from: ee1d5afe
---

## Que farás

Traballar como se organizan os proxectos BIM: cada vista nunha lista, cada planta cortada onde queiras, os mesmos axustes para varias plantas mediante unha plantilla, e follas que dispós ti mesmo.

## O navegador de proxecto

1. Activa {{ui:Debuxar}}. O panel esquerdo ten un {{ui:Navegador de proxecto}} baixo os modelos.
2. Lista:
   - **Plantas**: cada nivel. Fai clic nunha para ver a súa planta. O botón de regulador xunto a ela define o seu rango de vista (abaixo). Unha planta que segue unha plantilla mostra o nome da plantilla.
   - **Plantas de teito**: a planta reflectida do teito de cada nivel (abaixo).
   - **Ampliacións**: cada ampliación coa vista na que se debuxa, e {{ui:Nova ampliación}}. **Faltan** lista as ampliacións cuxa vista xa non existe.
   - **Alzados** e **Seccións**: os catro lados e cada liña de sección. Fai clic nun para abrir o conxunto de debuxos no que se debuxan.
   - **Vistas 3D**: as vistas que gardaches con {{ui:Vistas}}.
   - **Cuadros**: fai clic nun para mostralo baixo a planta.
   - **Follas**: as follas que fixeches, {{ui:Nova folla}}, e {{ui:Conxunto de debuxos…}} para todo o conxunto feito desde o modelo.
   - **Plantillas de vista**, con {{ui:Nova plantilla}}, e **Ligazóns** (os modelos ligados).

## Definir o rango de vista dunha planta

1. Fai clic no botón de regulador xunto a un nivel en **Plantas**.
2. Define as alturas, por riba dese nivel:
   - **Cortar en**: onde a planta corta muros, portas e xanelas (1200 mm, uns 4 ft, salvo que o cambies).
   - **Superior**: o que está por riba do corte e baixo o tope debúxase con trazos (un armario alto, unha viga). Déixao baleiro para a altura do nivel.
   - **Inferior** e **Profundidade baixo o inferior**: o que está máis baixo que o corte debúxase con liñas finas ata o inferior, e a esa distancia por debaixo.
3. Baixo **Amosado nesta planta**, desmarca o que esta planta deixa fóra: mobiliario, cuartos, pilares e demais.
4. Para deixar fóra elementos sueltos: escólleos na planta ou na vista 3D, abre o diálogo e fai clic en {{ui:Ocultar aquí o seleccionado}}. {{ui:Mostralos todos}} os devolve.
5. Fai clic en {{ui:Usar estes axustes}}.

A planta córtase de novo ao momento, e o conxunto de debuxos e as túas follas seguen o cambio. O corte dunha nube de puntos segue tamén a altura de corte.

## Recortar unha planta, darlle escala, mostrar outro nivel por debaixo

Os tres están no mesmo diálogo (o botón de regulador xunto a un nivel):

- **Escala**: a escala á que se imprime a planta ({{ui:Imprimir}} na barra da planta) e á que entra nunha folla. **Axustar** escolle a maior escala estándar que caiba.
- **Región de recorte**: fai clic en {{ui:Debuxar na planta…}}, despois fai clic nunha esquina e na esquina oposta na planta ({{key:Esc}} detén). A planta fóra da rexión vélase na pantalla, e aínda podes traballar alí; impresa, nas follas e no conxunto de debuxos, a planta só mostra o que está dentro. {{ui:Limpar}} quita o recorte. {{ui:Axustar}} axusta á zona recortada.
- **Subxacente**: escolle outro nivel. Os seus muros, elementos cortados, portas e xanelas debúxanse en claro baixo esta planta, para aliñar cousas co nivel de abaixo ou de arriba. Non podes escollelos aquí, e imprímense en gris claro.

A región de recorte e o subxacente pertencen sempre a unha soa planta. Unha plantilla de vista leva a escala cos alturas e as categorías.

## A planta de teito dun nivel

Cada nivel ten unha planta reflectida do teito xunto á súa planta: a planta vista desde abaixo, para dispor teitos e o que colga deles.

1. Fai clic no nivel baixo **Plantas de teito** no navegador, ou escolle {{ui:Planta de teito}} xunto ao nivel na barra da planta.
2. Os muros córtanse a 2300 mm (uns 7'-6"). Debúxase o que está por riba dese corte e baixo a altura do nivel: teitos coa súa cuadrícula e unha etiqueta de altura (`CLG 2438`), luminarias, vigas. Non se deixan portas, xanelas nin o que está baixo o corte.
3. Para crear un teito, usa {{ui:Teito}} como na planta, despois escóllao e elixe o seu **Patrón** en Propiedades. Consulta [Cuartos, pisos, teitos e cubertas](topic:floors-and-roofs).
4. Para colgar unha luminaria del, coloca o elemento da biblioteca mentres se mostra a planta de teito: vai a **No teito**. Consulta [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library).
5. O botón de regulador xunto a unha planta de teito define o seu corte e superior, escala, categorías, región de recorte e subxacente, como nunha planta. As plantas de teito non admiten plantilla de vista.

Debúxase do mesmo xeito que a planta (reflectida, non unha imaxe especular). Un teito máis baixo que o corte non se debuxa: baixa o corte para a planta de teito dese nivel. As plantas de teito van nas túas follas como as plantas; o conxunto de debuxos non as engade por si só.

## Crear unha ampliación

Unha ampliación mostra unha parte dunha planta máis grande, á súa propia escala, como unha vista propia: unha cociña, unha escaleira, unha esquina de muro.

1. Mostra a planta, a planta de teito ou a ampliación á que pertence.
2. Escolle {{ui:Anotar}} › {{ui:Ampliación}} na barra da planta (ou {{ui:Nova ampliación}} no navegador), despois fai clic nunha esquina da zona e na oposta. {{key:Esc}} detén.
3. A ampliación créase a 1:20 (1/2" = 1'-0" en pés e polgadas). O seu rectángulo e unha etiqueta redonda debúxanse na planta.
4. Fai clic na etiqueta con {{ui:Seleccionar}}, ou na ampliación no navegador, para abrila: a planta mostra só esa zona, á escala da ampliación. A barra di {{ui:Ampliación:}} e o seu nome; {{ui:Subir}} volve á vista na que se debuxa.
5. O botón de regulador xunto a ela (no navegador ou na barra) renomea, cambia a súa escala, debuxa de novo o seu rectángulo ou elimínaa.

Unha ampliación mostra o que mostra a súa vista: o mesmo corte, as mesmas categorías, os teitos dunha planta de teito. Unha ampliación dunha ampliación funciona igual. Pon unha ampliación nunha folla como unha planta; a súa etiqueta indica entón onde está (`1 / A-501`: a primeira vista da folla A-501). {{ui:Imprimir}} nunha ampliación imprime só esa zona á súa escala.

Eliminar unha ampliación elimina tamén as ampliacións debuxadas dentro dela, e as liñas e tramas debuxadas nelas (pregúntaseche antes). Se se elimina o nivel no que se debuxa unha ampliación, esta queda en **Faltan** ata que a elimines, e as follas nas que está informan de que falta.

## Debuxar liñas e tramas nunha vista

O debuxo é traballo 2D que pertence a unha soa vista: notas en liñas, unha zona trama de formigón ou terra, unha zona recheada. Nunca está na vista 3D nin noutra planta.

1. Mostra a planta, a planta de teito ou a ampliación onde debuxar.
2. Escolle desde {{ui:Anotar}} na barra da planta:
   - {{ui:Liña}}: fai clic onde empeza e onde acaba. A seguinte liña empeza onde acabou a última; {{key:Enter}} comeza de novo.
   - {{ui:Polilínea}}: fai clic nos seus puntos; {{key:Enter}} ou un dobre clic remata, e un clic no primeiro punto pecha.
   - {{ui:Rectángulo}}: dúas esquinas opostas.
   - {{ui:Zona de trama}}: escolle o **Patrón** (Sólido, Diagonal, Trama cruzada, Formigón, Illamento, Terra) e a súa escala na barra, despois fai clic nas esquinas; {{key:Enter}}, un dobre clic ou un clic na primeira esquina pecha. Con {{ui:Encher un cuarto}} marcado, un clic nun cuarto tramea o seu contorno.
3. Os puntos encaixan como nos muros; {{key:Shift}} mantén unha liña en ángulo recto, e podes escribir unha lonxitude como nos muros. {{key:Backspace}} quita o último punto.

Escolle unha liña ou trama con {{ui:Seleccionar}} na planta. Propiedades cambia o patrón e a escala dunha trama e ten {{ui:Mover…}} (fai clic no punto desde o que se move e despois onde vai). {{key:Delete}} a elimina. Cada liña, trama e cambio é un paso.

Liñas e tramas imprímense coa planta, pasan ás follas con ela e están no conxunto de debuxos. Desmarca **Anotacións** nun rango de vista para deixalas fóra desa vista.

## Gardar os axustes nunha plantilla de vista

1. Fai clic en {{ui:Nova plantilla}} no navegador, ou en {{ui:Gardar como plantilla…}} no rango de vista dunha planta (esa planta usa entón a plantilla).
2. Dalle un nome, define as alturas e categorías, e fai clic en {{ui:Gardar a plantilla}}.
3. En calquera rango de vista de planta, escolle a plantilla. A planta toma as súas alturas e categorías; cambia a plantilla para cambiar todas as plantas que a usan. Os elementos que ocultaches un a un seguen ocultos na súa propia planta.
4. Fai clic nunha plantilla no navegador para cambiala, renomeala ou eliminala. Ao eliminar unha, as súas plantas quedan cos axustes da plantilla como propios.

## Dispor unha folla propia

1. Fai clic en {{ui:Nova folla}}. Escribe o seu número e título e escolle o papel.
2. Fai clic en {{ui:Engadir}} xunto a unha planta, planta de teito, ampliación, alzado, sección ou cuadro. Cae no medio da folla.
3. Arrástrao ao seu sitio. Con el escollido, escolle unha **Escala**, ou déixao na escala da propia planta (cando a ten); se non, a escala que caiba nun terzo da folla. {{ui:Retirar a folla}} o quita.
4. Fai clic en {{ui:Gardar a folla}}. Aparece listada en **Follas**; fai clic nela para cambiala despois.
5. {{ui:Descargar como PDF}} garda esa folla como unha soa páxina.

## Que deberías ver

- Plantas cortadas á túa altura, co que está por riba do corte en trazos e o que quitaches deixado fóra.
- Unha planta recortada, velada fóra da súa rexión na pantalla e cortada a ela no papel, á escala que lle deches.
- Unha planta de teito coas cuadrículas dos teitos e as etiquetas de altura, e as luminarias no teito.
- Ampliacións co seu rectángulo e etiqueta na planta, cada unha abríndose á súa propia escala.
- Liñas e tramas só na vista na que as debuxaches.
- As túas follas redebuxadas desde o modelo cada vez que as abres, así sempre coinciden con el. Unha vista cuxo nivel ou liña de sección se eliminou infórmase, non se debuxa.
- Cada cambio aquí é un paso: {{key:Mod+Z}} o desfai.

:::note
Todo isto consérvase no ficheiro IFC como conxuntos de propiedades que outros programas non tocan: o rango de vista e a planta de teito de cada nivel no propio nivel, as plantillas, as ampliacións e as túas follas no proxecto. As liñas e tramas son anotacións IFC no seu nivel, así que outros programas as ven como curvas 2D e áreas tramadas (o seu propio debuxo de cada patrón), aínda que non saben a que vista pertencen.
:::

:::tip
Outros programas BIM chaman ao corte rango de vista ou plano de corte, ás plantillas plantillas de vista ou axustes de vista, ás liñas de debuxo liñas de detalle, e ás zonas de trama zonas recheadas. As ideas son as mesmas; os axustes de vista non viaxan con elas.
:::
