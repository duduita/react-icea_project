# Visualização de Modelos Meteorológicos ICEA

Esse projeto foi desenvolvido utilizando o framework _React_. Também foi utilizada a biblioteca _Leaflet_, bem como alguns de seus plugins: _react-leaflet, leaflet-velocity_ e a _esri-leaflet._

## Objetivo

Desenvolver uma versão inicial que apresente a lógica necessária para manipular a biblioteca **leaflet**, e assim disponibilizar dados de vento, precipitação e temperatura do modelo de maneira dinâmica e reestilizada, além de ser possibilitar a visualização de dados obtidos via API da _RedeMET_, como dados dos radares e satélite.

## Instalação e Uso

Após a instalação dos módulos necessários, basta iniciar a aplicação:

### `npm install`

### `npm start`

## Informações úteis para desenvolvimento

Serão disponibilizadas dicas sobre tópicos pontuais do projeto, discutidos em alto nível para facilitar a manutenção da equipe de desenvolvimento, principalmente no que tange a _library react-leaflet_.

## React-leaflet

No projeto foi utilizado a biblioteca _react-leaflet_, a partir dessa foi possível criar o mapa, bem como adicionar as camadas.

Cada camada, i.e., uma _layer_, é um _functional component_, com isso, é possível utilizar os _Hooks_ do _react_, como por exemplo o _UseEffect_, e o _useLeafletContext_.

Todas as _layers_ estão no _index.js_, porém, sua aparição depende da variável estado correspondente, que sofre alteração através dos botões no menu. Assim, quando o usuário aciona o botão _vento_, por exemplo, a variável estado será alterada de _false_ para _true_, e assim a _layer_ será disponibilizada.

## Redux

Para armazenar os estados foi utilizada a _library Redux_, que converte estados e funções para propriedades, após isso guarda-as em um lugar, o _reducer_, o conjunto de estados da aplicação, de tal modo que possam ser acessadas por todos os componentes.

## UseEffect

É interessante destacar devido sua importância o _UseEffect_, que em suma se resume à uma equivalência com os conhecidos _ComponentDidMount e ComponentWillMount_, para saber mais: https://reactjs.org/docs/hooks-effect.html. A diferença é que esses últimos só podem ser utilizados em componentes simples, enquanto o _UseEffect_ é a maneira equivalente para _functional components_.

## React-leaflet Core API

A biblioteca do _react-leaflet_ por si só já possui uma série de funções, componentes, dentre outras funcionalidades já prontas, em alto nível, como por exemplo, o _MapContainer_, que é o mapa em si que guarda as _layers_, e o _LayerControl_, que é capaz de controlar o acionamento das layers. Contudo, para se criar um _LayerControl_ personalizado, já que nosso objetivo era criar um menu que controlasse as layers com o nosso próprio layout, teve-se que se utilizar do Core API.

Mas, o que seria isso?

O Core API guarda funções e objetos em mais baixo nível, de tal forma que seja posssível criarmos nossos próprios componentes, utilizando funcionalidades da _leaflet_, como um _LayerControl_ personalizado.

Ou seja, queriamos um menu personalizado, mas só tinhamos um menu default à disposição, em alto nível já fornecido pela library, então recorremos a funcionalidades mais baixo nível, como a _useLeafletContext_, implementadas no Core API que possibilitaram a criação do nosso próprio menu.

Para saber mais: https://react-leaflet.js.org/docs/core-architecture. Nesse exemplo, explica-se como criar uma _layer_ simples, um retângulo, e adicioná-la ao mapa utilizando _useLeafletContext_.

## useLeafletContext

Também é muito importante entender o _useLeafletContext_, que foi uma das funcionalidades obtidas a partir da Core API. Através dela podemos perceber o contexto, isto é, o mapa em que se deve adicionar as layers. Ou seja, ela busca o primeiro ascendente (pai) que seja um objeto do tipo _MapContainer_. Com isso, é possível adicionar as _layers_ em seu devido mapa.

## Lógica das requisições

Todas as requisições utilizaram a lib _axios_ que nada mais é do que um _fetch_, ou seja, ela faz a requisição a uma dada _url_ e recebe um _json_. Com isso, ela preenche as variáveis necessárias para a composição da _layer_, e após isso adiciona de acordo com a necessidade do cliente ao mapa. A única excessão, é para os radares, isso porque, cada _layer_ do radar é na verdade um conjunto de _layers_, é um _layerGroup_, o qual agrupa as imagens que recebe de todos os radares para aquela data, e após isso adiciona ao mapa o conjunto de _layers_, o _layerGroup_, como se fosse uma _layer_. Isso porque, ele herda os métodos _addLayer_ das layers. Para saber mais: https://leafletjs.com/reference-1.7.1.html#layergroup.

## Nota e próximos p assos

Foi desenvolvida toda a lógica baseada no _leaflet_ para as _wind layers_, _satelitte layers_ e _radar layers_. As camadas relativas à temperatura e precipitação, não foram concluídas à tempo para o projeto.

Para as _layers_ de temperatura e precipitação, basta utilizar da mesma lógica presente nas _wind layers_, no entanto, ao invés de se utilizar as _velocity layers_ (que dão o aspecto de movimento ao mapa), usar outro pluggin do _leaflet_. Uma sugestão, por exemplo, para as camadas de temperatura seria a _esri-leaflet_: https://github.com/slutske22/react-esri-leaflet.

Além disso, seria interessante um _loading_ no momento do fetching de dados (no momento que se utiliza a lib axios). Bem como adicionar ao menu das layers um slider de opção de opacidade e de ajuste de parâmetros para as _velocity layers_, como a _maxVelocity_, por exemplo. Porém, para essa versão não foi possível também implementá-los.
