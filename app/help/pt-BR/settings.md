---
title: Configurações do BimCraft
summary: Escolha se ambientes e espaços aparecem, se as arestas são desenhadas e em qual vista um modelo abre, e comece posicionando com o snap de parede ligado.
keywords: configurações, preferências, opções, espaços, ambientes, ifcspace, arestas, linhas, desempenho, modelo grande, vista de abertura, câmera, vista superior, snap de parede, snap
from: 4416e64f
---

Abra {{ui:Configurações}} pela engrenagem na barra do aplicativo ou por {{key:Mod+,}}. A primeira guia, {{ui:BimCraft}}, reúne as configurações deste aplicativo; {{ui:Geral}} reúne as que todos os aplicativos do CadCraft compartilham (tema, barra de ferramentas, painéis). As configurações do BimCraft existem somente no aplicativo: você as altera aqui, e este navegador as guarda. {{ui:Redefinir configurações do BimCraft}} na parte inferior da caixa as devolve, junto com as compartilhadas, ao padrão.

## Menus, teclas e mouse

O estilo de menu (a barra de ferramentas própria do BimCraft, uma barra de menus de projeto residencial, uma faixa de opções BIM ou uma linha de comando de desenho), suas próprias teclas e menus, e o que a roda e os botões do mouse fazem. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).

## Quando um modelo abre

- **Mostrar ambientes e espaços** (desligado por padrão): ambientes e espaços são caixas transparentes que podem esconder as paredes atrás deles, por isso começam ocultos. O botão {{ui:Espaços}} acima do modelo ainda liga e desliga a exibição deles no modelo aberto.
- **Arestas**: {{ui:Arestas ligadas}} (o padrão) desenha as linhas de aresta que dão o aspecto de desenho técnico. {{ui:Somente modelos pequenos}} desenha-as apenas em modelos com menos de 300,000 triângulos, o que mantém modelos grandes mais rápidos de girar. {{ui:Arestas desligadas}} abre todos os modelos sem elas. O botão {{ui:Arestas}} ainda as liga e desliga no modelo aberto. Acima de 1.5 milhão de triângulos, as arestas ficam sempre desligadas.

## Desenhos abrem em

Como um desenho DWG ou DXF aparece primeiro: {{ui:3D (mais rápido)}} (o padrão) desenha até um desenho grande rapidamente, ou {{ui:Modelo (2D)}} abre a vista plana do espaço modelo. As guias acima do desenho alternam entre {{ui:Modelo}}, as folhas e {{ui:3D}} a qualquer momento. Um desenho sem nada no espaço modelo, ou um navegador que não mostra 3D, sempre abre em 2D.

## Vista de abertura

A câmera com que um modelo abre: {{ui:Ajustar}} (o padrão, o modelo inteiro a partir de um canto), {{ui:Superior}}, {{ui:Frontal}} ou {{ui:Lateral}}. Os botões acima do modelo mudam a vista a qualquer momento.

**Uma edificação girada no terreno**: muitos modelos chegam com a edificação em ângulo com os eixos do arquivo (em coordenadas de levantamento ou compartilhadas). {{ui:Alinhada à edificação}} (o padrão) mostra essa edificação alinhada: {{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}, as faces do cubo de vista e cada corte novo seguem as paredes dela, e a bússola do cubo de vista continua apontando para o norte do modelo. {{ui:Como colocada no terreno}} mantém os eixos do arquivo. Uma edificação cujas paredes seguem os eixos fica igual nos dois casos.

## Colocando itens da biblioteca

**Comece com o snap de parede ligado** (desligado por padrão): ao iniciar a colocação ou a colagem de um item da biblioteca, o verso dele encaixa na parede mais próxima, voltado para o ambiente. {{key:Tab}} ou {{ui:Snap de parede}} na barra de colocação o desliga por enquanto. Um pavimento sem paredes começa sem ele.

## Caixa de corte

{{ui:Folga em volta da seleção}} é quanto espaço {{ui:Caixa de corte em volta da seleção}} deixa em todos os lados dos elementos selecionados, em milímetros: 300 no início, até 5000. Veja [Cortar um modelo IFC com um plano de corte](topic:section-plane).

## Localização

{{ui:Latitude e longitude em}} escolhe o sistema em que {{ui:Medir}} › {{ui:Localização}} dá as latitudes e longitudes: WGS 84 (EPSG:4326, o padrão, como usam o GPS e os mapas da web), {{ui:O datum próprio do arquivo}}, ou um de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 e CGCS2000. O sistema de mapa e o datum próprios do arquivo também aparecem sempre. Veja [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).

## Indicador de canto

O que fica no canto inferior direito das vistas 3D (um modelo IFC e um desenho alternado para 3D): {{ui:Cubo de vista}} (o padrão), {{ui:Ícone de eixos}} (um pequeno X, Y e Z) ou {{ui:Nenhum}}. A mudança é imediata. A vista 2D de desenho nunca mostra um.

No cubo de vista, clique em uma face, uma aresta ou um canto para olhar daquele lado, arraste o cubo para orbitar, arraste o anel para girar e clique na casa para a vista inicial.

## Seu nome nos problemas

Com a sessão iniciada, os problemas levam o nome da sua conta, e o BimCraft não pede nada: esta parte mostra {{ui:Da sua conta (<name>)}}. {{ui:Usar outro nome}} abre uma caixa para outro nome, que prevalece até você escolher {{ui:Usar o nome da minha conta}}. Sem a sessão iniciada, o formulário de problema pede um nome, como antes. Veja [Problemas e arquivos BCF](topic:issues-bcf).

## Assistentes

**Deixar assistentes de IA e scripts usarem o BimCraft** (desligado por padrão) permite que um assistente no seu computador acesse o modelo aberto pelo CadCraft Studio: **Ler** encontra elementos e lê as propriedades deles, **Alterar a vista** isola, oculta e mostra. **Atividade** lista as chamadas dele. Veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).

:::note
As demais configurações valem quando um modelo abre ou quando a colocação começa. Um modelo já aberto mantém a aparência dele até você usar os botões da barra de ferramentas ou abri-lo de novo.
:::

## Relacionados

- [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste)
- [Posicionar equipamentos e mobiliário da biblioteca](topic:place-from-library)
- [A tela do BimCraft](topic:workspace)
- [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants)
