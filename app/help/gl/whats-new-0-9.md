---
title: Novidades da 0.9 (anteriores)
summary: Formas de muro, dividir, desprazar, estirar e bloquear á reixa, niveis por debaixo do chan, cotas de reixa e Medir na planta, vistas duplicadas con estilos de traballo e táboas de plumas, Informar como, exportación Collada e Google Earth, Scan to BIM, análise de vento e sismo, complementos de impresión en resina.
keywords: novidades 0.9, versión anterior, novidades, 0.9, notas de publicación, formas de muro, rectángulo, polígono, arco, escoller liñas, contorno de trazado, desprazamento, unión, estirar por caixa, aliñar e bloquear, dividir muro, abertura, volver unir, bloquear á reixa, crecer desde, medir desde, engadir un nivel debaixo, soto, comando de nivel, cotas de reixa, medir na planta, estilo de traballo, vista duplicada, copia propia, vista ligada, táboa de plumas, imprimir como se ve, informar como, escribir unha escala, importar svg, colocar na planta, colocar no modelo, collada, dae, kmz, google earth, scan to bim, carga de vento, sísmico, elementos finitos, panel de documentos, impresión en resina, novidades, cambios, rexistro de cambios, 0.8, 0.8.1, versión, novas funcións, evacuación, persoas, colas, acústica, reverberación, resposta ao impulso, inundación, vento, terremoto, perigo, ciclo de vida, vida útil, ids, etiquetas, cuadros, mover, aliñar, distribuír, imaxe, fondo, escaneado a muros, sitio desde civilcraft, debuxos de paneis, enmarcado, solar, fv, split, vrf, unidade de ventilador, dimensionamento de tubaxes, bandexa de cables, iluminancia, formigón, comparar escaneado, epsg, proxección, documentos, modelo, carbono, custo, energyplus, motor de render, abrir en, usd, glb, unreal, desfacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proxectos, disposición
from: 816df7f8
---

Isto é o que cambiou en BimCraft 0.9, en comparación coa 0.8.1. Os dous grandes temas son unha verdadeira ferramenta de muros e vistas que se comportan como esperan as persoas que chegan dos grandes programas BIM. Ao seu redor veñen a exportación Collada, asistentes que poden colocar dispositivos eléctricos, Scan to BIM, e o traballo de vento, sismo e elementos finitos na lapela {{ui:Análise}}.

## Novo

### Muros

- **Debuxar formas completas.** En {{ui:Debuxar}}, abra {{ui:Formas}} (ou escolla unha forma na lista de formas da fila Muro) para un rectángulo, un rectángulo xirado, un polígono de 3 a 64 lados, un arco por centro, un arco tanxente, muros sobre liñas escollidas ou muros arredor dunha área pechada na que fai clic dentro. Un rectángulo son catro muros con catro esquinas unidas e un só paso de desfacer. Vea [Formas de muro, dividir, desprazar, estirar e bloquear](topic:wall-tools).
- **Definir antes de debuxar, cambiar despois.** A fila Muro ten {{ui:Desprazamento}} e {{ui:Unión}} (desmarque para debuxar muros independentes). Despois use {{ui:Desprazamento}}, {{ui:Estirar por caixa}} e {{ui:Aliñar e bloquear}} nos muros debuxados. Un muro movido ou estirado conserva as súas portas, xanelas e cotas. Cada receita é un paso de desfacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Abertura}}, {{ui:Extremos libres}}, {{ui:Eliminar segmento}} e {{ui:Volver unir}} cortan un muro cun clic ou onde o cruza outro muro. Un corte por unha porta recházase. Vea [Formas de muro, dividir, desprazar, estirar e bloquear](topic:wall-tools).
- **Bloquear muros ás liñas de reixa.** Seleccione un muro ao longo dunha liña de reixa e marque {{ui:Bloquear á reixa}} en {{ui:Propiedades}}. Coa ferramenta Reixa activa, escriba unha distancia en {{ui:Mover por}} para unha liña escollida, e os muros bloqueados seguen nun só paso de desfacer.
- **Dar forma a un muro.** En {{ui:Propiedades}} dun muro, pode unir a súa parte superior ou a base a unha cuberta, piso ou teito, editar o contorno da súa elevación, inclinalo, ou cortar unha abertura de muro sen porta nin xanela. Vea [Forma do muro](topic:wall-shape).
- **A lonxitude indica que extremo queda.** {{ui:Crecer desde}} define se o inicio, o final ou o centro quedan fixos ao cambiar a lonxitude.
- **A lonxitude e a cota da planta coinciden.** {{ui:Medir desde}} (liña central, cara interior ou cara exterior) controla tanto o campo Lonxitude como as cotas de muros da planta. Comeza na liña central, así que as cotas de muros da planta agora len a liña central onde antes liían a cara exterior. Cámbiea na fila Muro, en {{ui:Propiedades}} ou en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muros}}.

### Niveis, reixas e medición

- **Engadir un nivel debaixo.** {{ui:Engadir un nivel debaixo}} no panel {{ui:Niveis}} engade un nivel por debaixo do máis baixo, tan alto como el, a unha elevación negativa (Nivel -1, Nivel -2). Nada máis se move. {{ui:Engadir niveis…}} agora acepta alturas negativas. Escribir LEVEL, LEVELS, STOREY ou STOREYS na liña de comandos abre {{ui:Engadir niveis…}}, e hai un botón {{ui:Niveis}} nos menús e nas lapelas da cinta. Vea [Terreos, edificios e niveis](topic:site-building-and-levels).
- **Cotas de reixa na planta.** Coa ferramenta {{ui:Reixa}} activa, marque {{ui:Cotas}} para debuxar o espazamento entre liñas veciñas e o tamaño total fóra das burbullas, en cada planta de cada nivel. Vea [Acotar unha reixa](topic:grid-dimensions).
- **Medir na planta.** {{ui:Medir}} no grupo {{ui:Debuxar}} dá unha distancia coas diferenzas X e Y entre dous clics. Nada se garda no modelo. Vea [Medir na planta](topic:measure-on-the-plan).
- **Cambiar varios piares á vez.** Seleccione piares xunto cun muro e a selección enumera cada tipo con {{ui:Manter só estes}}. Un clic mantén os piares e mostra os seus campos comúns.
- **Unha unidade de visualización en todas partes.** Coordenadas, medicións, seccións, escalas das follas, as cargas e resultados da lapela de marco e o texto de Problemas seguen a unidade que escolla. As exportacións quedan en SI.

### Vistas, follas e impresión

- **Estilo de traballo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Estilo de traballo}} escolle entre que cada vista teña as súas propias anotacións e táboas de plumas, ou que as comparta. Vea [Estilo de traballo, vistas duplicadas, plumas en papel, Informar como e modelos](topic:working-style).
- **Duplicar unha vista.** Plantas, planos de teito, chamadas, alzados e seccións poden duplicarse como {{ui:Copia propia}} ou {{ui:Ligado}}; {{ui:Converter en copia propia}} fai independente unha ligada. Vea o mesmo tópico.
- **Imprimir como se ve, ou a través dunha táboa de plumas.** As substitucións de plumas gárdanse no IFC coa vista, e as follas e os PDF debúxanas como na pantalla. O mesmo tópico cobre as táboas de plumas.
- **Informar como.** {{ui:Informar como}} en {{ui:Propiedades}} escribe unha laxe debuxada como estrada, un muro como panel ou unha cuberta como rampa no IFC coa clase que escolla, e conta así nos cuadros, Cantidades, Atopar, Colorear por e Problemas.
- **Editar en alzados e seccións.** Debuxe e mova muros, aberturas, niveis, cotas e notas directamente nun alzado ou sección, cos seus propios tamaños de folla e cadros de rótulo. Vea [Editar en alzados e seccións](topic:edit-in-elevations).
- **Follas.** Cada folla pode ser horizontal ou vertical. Unha caixa {{ui:Escriba unha escala}} xunto á lista de escalas de cada vista colocada (1:64, 2:1, 1/4" = 1'). Pode arrastrar un debuxo colocado ou movelo coas teclas de dirección, e {{ui:Formatos…}} › {{ui:Importar SVG…}} converte o seu propio deseño de folla nun cadro de rótulo con campos escritos por folla.
- **Créditos da biblioteca nunha folla.** Un conxunto de debuxos con elementos da biblioteca recibe un cuadro de créditos da biblioteca que pode colocar en calquera folla. Vea [Créditos da biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar segue a vista.** Na vista Planta, a biblioteca mostra {{ui:Colocar na planta}}; en 3D mostra {{ui:Colocar no modelo}}; na vista Dividir mostra un botón dividido con {{ui:Colocar na planta}} como acción principal. Os dous modos escriben o mesmo elemento IFC. Tamén pode arrastrar unha tarxeta da biblioteca á planta ou á vista 3D; cunha pluma ou co dedo, manteña premido e logo arrastre. Vea [Colocar desde a biblioteca](topic:place-from-library).

### Ficheiros e asistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menú Ficheiro nos estilos de menú) escribe un .dae, ou un .kmz colocado onde está o modelo no mapa. Vea [Exportar o modelo como Collada ou para Google Earth](topic:collada).
- **Os asistentes poden colocar dispositivos eléctricos.** O seu asistente conectado ten novas ferramentas para engadir, listar, cambiar e eliminar dispositivos e para definir luces. Os asistentes seguen desactivados ata que os active en {{ui:Configuración}}. Vea [Permitir que un asistente de IA traballe co seu modelo](topic:assistants).
- **Scan to BIM (complemento).** Desactivado por defecto e precisa do complemento de nubes de puntos. Propón pisos, muros, portas e xanelas desde un escaneado, coa desviación medida de cada un; aceptar é un só paso de desfacer.

### Análise

- **Datos de vento e sismo do terreo.** Na lapela {{ui:Análise}}: cargas de vento segundo ASCE 7-10 ou 7-16 para un edificio pechado e rixido, cunha forza en cada piso como casos de carga, e datos sísmicos do terreo cunha consulta USGS e o espectro de deseño.
- **Seguimento estrutural e elementos finitos.** Comprobacións de formigón segundo ACI 318-19, forzas laterais equivalentes segundo ASCE 7-22, deriva por piso, laxes e muros como placas, e combinacións de carga de ASCE 7 e EN 1990. O noso propio motor de elementos finitos fai cascas, tetraedros e análise modal. Vea [Comprobar elementos de formigón e xerar cargas sísmicas](topic:concrete-and-seismic) e [Análise de marcos](topic:frame-analysis).

### Outros complementos e documentos

- **Iluminación interior (complemento).** Coloca luminarias e escribe a iluminancia en lux como números en cada planta de nivel, cunha estimación de deslumbramento e un informe imprimible.
- **Panel de documentos.** {{ui:Ficheiro}} › {{ui:Documentos…}} ten retirar e devolver cun ficheiro de bloqueo, letras de revisión, estados de publicación e historial.
- **Rexións e aceiro.** Paquetes de debuxo e regulamentos de construción sudafricanos no complemento Regulamentos, e 976 tamaños de aceiro do Reino Unido na táboa de seccións compartida.
- **Complementos libres de impresión en resina.** Fatiador, soportes e balsa, proba de exposición, e os formatos de ficheiro GOO, SL1, Chitubox e Anycubic, todos desactivados por defecto.

## Para todas as aplicacións

- Ao pasar o rato sobre un botón ou control aparece unha suxestión Bootstrap.
- A suxestión de inicio na zona de debuxo baleira ten un botón de pechar; BimCraft lembra que se pechou.
- A barra de lapelas dun panel que non cabe agora se desprazada en vez de cortarse.
- Con un documento aberto, a lapela do navegador le «<document> - BimCraft | CadCraft».
- En {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Disposición}} as disposicións son unha lista despregable de opcións de dúas liñas.
- A lista de idiomas en {{ui:Configuración}} ofrece máis idiomas que na 0.8; os idiomas distintos do inglés son borradores automáticos.

## Corrixido

- **Mover funciona en escaleiras,** e en rampas, pasamáns, planos de cuberta, dispositivos independentes, imaxes e camiños.
- **Arrastrar un muro xa non deforma a sala.** A empuñadura central move o muro en cuadrado consigo mesmo e as súas esquinas deslízanse polos muros unidos. Manteña {{key:Mod}} para o antigo movemento libre; {{ui:Poñer en cadrado}} devolve os 90 graos.
- **Un cambio de espesor ou tipo nun nodo unido** agora mantén a esquina pechada nunha L, nunha T, nun nodo de tres muros e xunto a un muro curvo.
- **Mover ou copiar un grupo de cuartos** mantén unidos fóra do grupo os muros que estaban unidos.
- **Refacer mantén a identidade dunha cota de muro.**
- **Escoller un muro con Debuxar desactivado** xa non produce erro en Propiedades.
- **Render recorre a WebGL** cando a GPU non pode arrancar, en vez de deterse.
- **A comprobación de EnergyPlus** pode volver activarse.
- **Documentos abre como diálogo centrado.** {{key:Esc}}, a X ou un clic na páxina atenuada pecha.
- **Os botóns {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} aparecen** en canto hai un modelo aberto, e non só despois de activar Debuxar unha vez.

## Limitacións honestas

- Non se imprimiu nada en hardware real. Os soportes de resina son novos e non están probados.
- Os resultados de vento, sismo, formigón e elementos finitos son axudas de comprobación para un enxeñeiro, comprobadas contra formas pechadas, non contra un edificio real.
- Scan to BIM probouse nun edificio sintético, non nun escaneado real, e só atopa cuartos rectilíneos.
- Collada non se abriu aquí en Blender nin en Google Earth.
- A estimación de iluminación compróbase contra o noso propio trazado, non contra outros programas de iluminación.
- As cifras sudafricanas non están verificadas.
- Os estilos de unión de muros (a tope, en inglete, cadrado) e a prioridade de capas non están construídos; as esquinas van en inglete.
- Os idiomas distintos do inglés son borradores automáticos.

Todo o demais está en [Que aínda non está construído](topic:not-built-yet). Os cambios anteriores están nas notas da 0.8 e da 0.8.1 máis abaixo nesta páxina.

## Anterior: 0.8 e 0.8.1

Isto é o que cambiou en BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), en comparación coa 0.7. BimCraft pode agora responder preguntas sobre un edificio e probalo, con persoas, son, auga, vento e terremotos, e debuxalo con máis ferramentas; a 0.8.1 é unha versión de corrección.

### Novo

**Probar o edificio**

- **Persoas no edificio.** A sección {{ui:Persoas no edificio}} do panel esquerdo fai percorrer unha evacuación ou un día normal de chegadas polos seus cuartos, portas e escaleiras. Ve as colas onde o edificio se estreita, o percorrido máis longo ata unha saída desde cada cuarto e canto tarda a última persoa. Marque {{ui:Pechada}} nunha porta para ver que cambia, e marque {{ui:Mostrar as persoas na vista 3D}} para ver aos camiñantes. Os resultados van a Problemas. É un modelo aproximado de multitudes para decisións de deseño, non un certificado de seguridade contra incendios. Vea [Percorrer o edificio con persoas](topic:people-in-the-building).
- **Acústica de cuartos, e escoitalo.** A sección {{ui:Acústica de cuartos}} dá o tempo de reverberación de cada cuarto por bandas de oitava (Sabine e Eyring) a partir do seu tamaño e dos acabados que escolla, e cun obxectivo propio indica canta absorción cumpriría. {{ui:Reproducir neste cuarto}} reproduce unha voz, un aplauso, notas pulsadas ou un ficheiro de son propio a través dunha resposta ao impulso calculada para o cuarto. As cifras de absorción son valores publicados típicos para que os substitúa. Vea [Acústica de cuartos](topic:room-acoustics).
- **Reprodución de inundación, vento e terremoto.** {{ui:Reprodución de perigo}} fai subir a auga polos cuartos, presión do vento en cada piso e un terremoto que sacode os pisos, nunha planta ou alzado cun control deslizante de tempo. Modelos sinxelos, cos seus supostos no panel; non é unha comprobación normativa. Vea [Reproducir unha inundación, vento ou terremoto](topic:hazard-playback).
- **Que se desgasta en cincuenta anos.** {{ui:Vista do ciclo de vida}} lista as xanelas, portas, acabados e cuberta, cunha vida útil cada un, os anos en que se substitúen e, cando escribe un custo por unidade, o custo por ano e o seu valor actual. {{ui:Gardar o programa (CSV)}} escríbeo. As vidas útiles son cifras de planificación. Vea [Ver o que se desgasta en cincuenta anos](topic:life-cycle-view).
- **Comprobacións de formigón e sismo.** Os bloques {{ui:Elementos de formigón}} e {{ui:Cargas sísmicas}} da lapela {{ui:Análise}} comprobán vigas e piares de formigón segundo ACI 318-19 e xeran forzas laterais equivalentes segundo ASCE 7-22 en pisos rixidos, con deriva por piso. Para que un enxeñeiro o comprobe. Vea [Comprobar elementos de formigón e xerar cargas sísmicas](topic:concrete-and-seismic).

**Comprobar e informar**

- **Comprobar contra un IDS.** Cargue o ficheiro `.ids` que lle deu un cliente e vexa en Problemas cada elemento que non o cumpre, antes de entregar o IFC. Abra {{ui:Comprobar contra un IDS}} en {{ui:Comprobacións do modelo}}. Vea [Comprobar un modelo contra o IDS dun cliente](topic:check-against-ids).
- **Etiquetas e cuadros.** Defina as súas propias etiquetas, asígneas a moitos elementos á vez e cree cuadros cuxas columnas, filtros e agrupacións as lean; as etiquetas gárdanse no IFC. Vea [Etiquetas e cuadros](topic:tags-and-schedules).
- **Documentos desde o modelo.** {{ui:Documentos do modelo}} enche unha plantilla de especificación desde o IFC aberto e gárdaa como PDF, documento Word ou Markdown. Vea [Documentos desde o modelo](topic:documents-from-the-model).
- **Comparar un escaneado co modelo.** Con unha nube de puntos aberta, {{ui:Comparar}} xulga cada elemento como construído, parcialmente construído, ausente ou non alcanzado, e mostra a porcentaxe construída. Vea [Comparar un escaneado co modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O panel Carbono suma o carbono incorporado a partir dunha táboa de factores que pode editar, e o panel Custo reparte os prezos sobre o cronograma 4D. Os factores que traen BimCraft son xerais e están marcados como sen verificar. Vea [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Calquera proxección cartográfica.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, unha zona UTM, un nome ou a súa propia definición de proxección. Vea [Xeorreferenciar con calquera proxección](topic:georeference-any-projection).

**Debuxar e editar**

- **Mover, Aliñar e Distribuír.** Baixo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (o {{key:M}} simple segue sendo Medir). Mover copia mentres avanza con {{key:C}}, cada paso é un desfacer, e viaxa nunha sesión de Live TeamWork. Vea [Mover, copiar, aliñar e distribuír](topic:move-align-distribute).
- **Imaxes baixo a planta.** {{ui:Compilación}} › {{ui:Imaxe}} coloca un PNG, JPEG ou WebP baixo a planta dun nivel ou nun plano vertical. Fixe a escala con dous puntos e mova, xire, esvaeza e bloquee. Unha área copiada en MarkupCraft pégase á escala da súa folla. Vea [Pór unha imaxe baixo a planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneado.** Con un escaneado aberto, os muros, as portas e os cuartos chegan como propostas que conserva ou rexeita unha a unha, nun só paso de desfacer. Só se atopan muros en dúas direccións perpendiculares. Vea [Converter un escaneado en muros](topic:scan-to-walls).
- **Trazo, plumas e escaleira por esbozo.** {{ui:Calcar}} amosa outro nivel a trazos baixo a planta, {{ui:Plumas}} dá aos muros, portas e xanelas o seu propio grosor de liña nunha vista, e {{ui:Esbozar escaleira}} converte unha liña de paseo nunha escaleira. Ábrese unha malla Wavefront OBJ. Vea [Calcar un piso, plumas e unha escaleira desde un esbozo](topic:trace-pens-stairs-obj).
- **Edificios arredor dun enderezo.** Os edificios e a parcela que atopou Enderezo a sitio de CivilCraft chegan como suxestións; marque as que quere engadir. Vea [Comezar desde o sitio de CivilCraft](topic:site-from-civilcraft).
- **Debuxos de paneis.** {{ui:Compilación}} › {{ui:Debuxos de paneis}} enmarca muros, pisos e cubertas en madeira ou aceiro lixeiro e garda unha lista de corte como CSV e debuxos de taller como PDF. Valores de partida, non un deseño estrutural. Vea [Debuxos de paneis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} atopa símbolos eléctricos e de fontanería por nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista unhas 400 plantas con símbolos de planta. Vea [Paleta de símbolos](topic:symbol-palette) e [Colocar unha planta](topic:plant-list).

**Tubaxes, condutos e enerxía**

- **Split, VRF e unidades de ventilador.** Unidades interiores e exteriores cos seus conexións, e conxuntos de liñas dimensionados desde unha táboa de valores típicos de exemplo que pode cambiar. Vea [Split, VRF e unidades de ventilador](topic:split-vrf-fan-coils).
- **Cálculos.** O panel Cálculos comproba o dimensionamento de tubaxes de subministración e condutos por caída de presión, fai pasar cables por bandexas e condutos e mostra o seu enchemento, e calcula a iluminancia a partir de ficheiros IES ou EULUMDAT. Os valores por defecto están etiquetados; escriba os valores do seu código. Vea [Cálculos de tubaxe, conduto, cable e luz](topic:mep-calculations).
- **Ficheiros PCF.** {{ui:Exportar PCF}} da ferramenta Tubaxe escribe os tramos para programas de tensión en tubaxes e de isométricos, e un ficheiro PCF lido de volta debuxa a súa tubaxe. Vea [Ficheiros de compoñentes de tubaxe](topic:piping-pcf).
- **Solar FV.** Coloque conxuntos en cubertas ou no chan, sombreaos desde o modelo, estime a enerxía anual, comprobe as cadeas e cree datos de diagrama unifilar. O módulo inicial e as perdas son xerais. Vea [Solar fotovoltaica](topic:solar-pv).
- **Ficheiro EnergyPlus.** O panel Comprobar con EnergyPlus escribe o modelo como IDF para executalo no seu propio EnergyPlus. Executalo no navegador precisa unha compilación que vostede aloxe e cuxo enderezo escriba; BimCraft non a inclúe. Vea [Comprobar a calefacción e a refrixeración con EnergyPlus](topic:check-with-energyplus).

**Imaxes e ficheiros**

- **Escoller o motor de render.** {{ui:Render}} ten unha escolla {{ui:Motor}}. Os nosos dous motores integrados (Rápido e Trazador de camiños) seguen sendo o predeterminado. {{ui:Abrir en}} garda a escena como ficheiro USD ou glTF, e unha carpeta de proxecto Unreal como .zip; en CadCraft Studio un complemento pode engadir un motor. O complemento de Unreal que abre o proxecto non está publicado. Vea [Escoller que programa debuxa a imaxe](topic:render-engines).
- **Desfacer en Studio.** Dentro de CadCraft Studio, BimCraft informa a Studio de cada paso terminado para que Studio poida desfacer o seu último paso na xanela que usou por último. Vea [Desfacer entre aplicacións](topic:undo-across-apps).
- **Complementos no seu ficheiro.** Un IFC rexistra que complementos escribiron nel, e ofrece os que lle faltan ao abrilo. Vea [Complementos no seu ficheiro](topic:add-ons-in-your-file).

**Para todas as aplicacións**

- **Conecte a súa IA.** O seu propio asistente pode controlar BimCraft a través da conexión de Studio e responder preguntas sobre o modelo, como que cuartos están baixo unha área dada. Studio non ten IA propia. Vea [Permitir que un asistente de IA traballe co seu modelo](topic:assistants).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Envolver, 2 filas ou 1 fila; Envolver segue sendo o predeterminado.
- **Dispositivos de entrada.** Panel táctil, pluma, rato 3D, mando e configuración MIDI son compartidos por todas as aplicacións.
- **Problemas e Live.** O panel de avisos e as sesións Live funcionan como antes, coas novas comprobacións de arriba alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os distintos do inglés son borradores automáticos aínda non revisados por unha persoa falante nativa; as páxinas de axuda son en gran parte en inglés.

### Corrixido en 0.8.1

- **Disposición da cinta + navegador de proxectos.** Inserir › Importar CAD, Inserir › Imaxe e Xestionar › Unidades do proxecto dicían «Aínda non está en BimCraft». Imaxe abre agora a ferramenta Imaxe, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un debuxo…}} (DWG, DXF, PDF ou unha dixitalización), e Unidades do proxecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Aliñar executan as ferramentas Mover e Aliñar, Nivel abre {{ui:Engadir niveis…}}, Fases abre a sección de fases de reforma e Materiais abre a biblioteca de materiais.
- **Sección de clases DWG.** Líase como tipo erróneo; corrixido en BimCraft e nas outras aplicacións que len DWG.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma sen reiniciar. Aínda non se probou en todas as plataformas; diga se o idioma non cambia.
- **Script de paquete Archicad.** `archicad_bundle.py`, unha descarga aparte, agora atopa a ruta de Archicad, vixía o cartafol durante ata 20 segundos e volve tentar xunto ao paquete.

### Non está nesta versión aínda

- **Axudas de seguridade e deseño.** Persoas no edificio non ten límite de distancia de percorrido por código de edificación (vostede escribe o límite) e non se comprobou a man nun plano real. As cifras de acústica, ciclo de vida e perigo son valores de planificación, non unha comprobación normativa.
- **Futuros climáticos e EnergyPlus.** Non hai futuros climáticos integrados: pode cargar un ficheiro de escenario para a reprodución de inundacións. A execución de EnergyPlus no navegador non forma parte desta versión.
- **Disposición da cinta.** Material Takeoff segue en «Non construído» porque BimCraft non ten lista de cantidades de materiais, e 54 ferramentas da cinta en gris non teñen aínda unha ferramenta de BimCraft detrás.
- **Sinatura e plataformas.** Os instaladores de Windows e o .dmg de macOS non están asinados, polo que SmartScreen mostra {{ui:Máis información}}, e logo {{ui:Executar igualmente}}, e macOS precisa botón dereito e logo {{ui:Aberta}}. A versión para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Probas de páxina real.** Algunhas probas máis antigas do navegador de BimCraft aínda fallan na nosa páxina de proba, como fixeron antes da 0.8.1.

Todo o demais está en [Que aínda non está construído](topic:not-built-yet). Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
