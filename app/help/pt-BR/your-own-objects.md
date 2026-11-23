---
title: Traga seus próprios objetos e arquivos de família para a Biblioteca
summary: Leia arquivos de família (.rfa) e arquivos IFC, DWG, DXF, glTF ou OBJ na guia Biblioteca, posicione-os como qualquer item da biblioteca e mantenha-os em Meus objetos, uma lista privada que só você pode ver.
keywords: rfa, família, famílias, biblioteca de famílias, meus objetos, objetos privados, biblioteca privada, importar objetos, conteúdo do fabricante, objetos bim, objeto ifc, gltf, obj, bloco dwg, manter, trocar, migrar
from: 886261f8
---

## O que você vai fazer

Traga para o BimCraft objetos que você já tem: uma biblioteca de famílias do Revit, um download de IFC ou DWG de um fabricante, uma malha de outro modelador. Você lê o arquivo na guia {{ui:Biblioteca}}, posiciona o objeto no seu modelo como um elemento IFC completo e, se quiser usá-lo de novo depois, mantém-no em {{ui:Meus objetos}}.

## Passos

1. Abra um modelo IFC ou comece um edifício novo.
2. Clique na guia {{ui:Biblioteca}} ao lado de {{ui:Propriedades}}.
3. Clique em {{ui:Arquivos…}}, depois em {{ui:Escolher um arquivo…}}. Escolha um arquivo ou vários de uma vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ou `.csv`. Ou clique em {{ui:Escolha uma pasta…}} para ler uma pasta inteira e as pastas dentro dela (até 200 arquivos de uma vez).
4. Clique em um cartão para ver o que foi lido: a prévia da planta, o nome, o fabricante e o modelo, os tamanhos e as notas.
5. Clique em {{ui:Posicionar na planta}} ou {{ui:Posicionar no modelo}} para posicioná-lo.
6. Para usá-lo de novo em outros projetos, clique em {{ui:Manter em meus objetos}}. Com vários arquivos lidos, {{ui:Manter todos em meus objetos}} os mantém de uma vez.
7. Depois, clique em {{ui:Meus objetos}} na guia Biblioteca para encontrá-los. Eles são posicionados, trocados e atualizados como qualquer item da biblioteca.

Os arquivos são lidos nesta guia. Nada é enviado até você escolher {{ui:Manter em meus objetos}}.

## O que é lido de cada tipo de arquivo

| Arquivo | O que você obtém |
|---|---|
| IFC | Cada tipo de elemento como um objeto com a forma 3D real, a classe IFC e os conjuntos de propriedades |
| glTF, GLB, OBJ | Um objeto com a forma 3D real como malha. Defina antes as unidades e qual lado é para cima. |
| DWG, DXF | Cada bloco como um objeto com o desenho de planta e os atributos |
| Arquivo de família (`.rfa`) | O nome, a categoria, o fabricante, o modelo, os parâmetros da família e os tipos dela. **Não a forma 3D:** uma caixa com a Largura, a Profundidade e a Altura da família faz o papel dela. |
| CSV | Um objeto por linha: nome, tamanhos e dados, desenhado como uma caixa |

## Arquivos de família e a forma 3D

A forma 3D dentro de um arquivo `.rfa` é armazenada em um formato não documentado, então o BimCraft lê os dados da família e não tenta adivinhar a geometria dela. O cartão informa isso: "Geometria não lida desta família; uma caixa faz o papel dela."

Para trazer uma família com a forma real, exporte-a do programa que a criou (Revit):

1. Abra a família, ou um projeto com a família posicionada nele.
2. Escolha **Arquivo > Exportar > IFC**. Veja [as configurações de exportação que abrem melhor aqui](topic:rvt-to-ifc).
3. No BimCraft, leia o arquivo `.ifc` com {{ui:Arquivos…}}. Cada tipo de família chega como um objeto próprio, com a forma e os conjuntos de propriedades.

Muitos fabricantes oferecem um download de IFC ou DWG ao lado do arquivo de família. Esses são lidos diretamente.

## Tipos de família

Uma família com vários tipos chega como um item só, com uma escolha {{ui:Variante}}, uma variante por tipo. Cada variante tem os valores que diferem entre os tipos e sua própria caixa quando o tipo tem uma Largura e uma Profundidade. Uma família com um tipo é um item simples preenchido com os valores desse tipo.

Algumas famílias guardam os tipos em um catálogo de tipos: um arquivo `.txt` com o mesmo nome ao lado do arquivo de família. Escolha os dois juntos, ou escolha a pasta, e as linhas do catálogo viram as variantes.

## Os dados de uma família com forma real

Se uma pasta tiver um arquivo de família e um arquivo IFC, glTF ou OBJ com o mesmo nome (`Chair.rfa` e `Chair.ifc`), escolha os dois juntos ou escolha a pasta. O BimCraft cria um item: o arquivo de família fornece o nome, o fabricante, o modelo, os parâmetros e os tipos, e o outro arquivo fornece a forma 3D real. As notas dizem de qual arquivo veio a forma. Uma única forma é usada para todos os tipos.

Quando um arquivo de família tem uma imagem salva nele, os detalhes do item mostram essa imagem sob o desenho de planta. A imagem é mostrada apenas ali; ela não é mantida com o item.

## Meus objetos

{{ui:Meus objetos}} é a sua lista privada na Biblioteca. Só você pode ver o que há nela: ela não está na biblioteca pública, não aparece na busca e não é mostrada à sua equipe. Ela acompanha a sua conta, então os mesmos objetos estarão em outro computador assim que você entrar na biblioteca.

- Você precisa estar conectado à biblioteca para manter um objeto. Veja [entrar na biblioteca](topic:library-credits).
- Manter um objeto envia somente esse objeto para a sua conta. Até lá, ele fica no seu computador.
- {{ui:Remover de meus objetos}} tira um objeto da lista. As cópias já posicionadas em desenhos continuam.
- Para compartilhar um objeto com todos, envie-o para a biblioteca pública, sob uma licença que você escolhe.

:::note
Meus objetos está em teste e pode ainda não estar aberto para a sua conta. Se a origem estiver ausente, ou aparecer "Meus objetos ainda não está aberto para esta conta", você ainda pode ler e posicionar os seus próprios arquivos com {{ui:Arquivos…}}; eles são salvos dentro do seu modelo.
:::

## Erros comuns

- **Esperar a forma real da família a partir de um `.rfa`.** Só os dados são lidos. Exporte IFC para obter a forma.
- **Dois itens quando você esperava um.** Uma família e o arquivo de forma dela só são unidos quando os nomes coincidem exatamente, à parte a extensão, e estão na mesma pasta.
- **Uma malha chega mil vezes maior ou deitada de lado.** Defina {{ui:Unidades do arquivo}} e {{ui:Eixo vertical de uma malha}} em {{ui:Arquivos…}} antes de escolher o arquivo.
- **"Sem dados de família" em um arquivo.** É um projeto (`.rvt` salvo com outra extensão) ou um modelo de família, não uma família. Veja [Ler um arquivo de projeto ou de família](topic:read-rvt-file).
- **Manter conteúdo que talvez você não possa armazenar.** Algumas bibliotecas pagas não permitem cópias fora do próprio serviço delas. Verifique os termos de conteúdo que você não criou.
