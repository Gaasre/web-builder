# WebBuilder

This project is a tool to help users to build websites visually without any knowledge of html/css or javascript. And it's going to be a saas like tool.

## How to launch the test server

First install the dependencies `npm install` then launch the server `ng serve`

## Annexe
### Routes

* `/`: Still empty for now
* `/editor`: Editor page

### Models
#### Block
* `id`: number;
* `name`: string;
* `type`: Type;
* `style`: Property[];
* `hoverStyle`: Property[];
* `content`: string;
* `open`: boolean;
* `children`: Block[];

#### Property
* `id`: number;
* `name`: string;
* `value`: string;
* `options`: string[];
* `type`: string;

#### Type
* `id`: number;
* `name`: string;
* `defaultStyle`: Property[];
