# Splatoon2api
A very simple library to get some information about Splatoon 2, such as current maps, future maps, SplatNet Gear, information about the SalmonRun game mode.<br>
This package uses the API of the [splatoon2.ink](https://splatoon2.ink) website.<br>
![npm](https://img.shields.io/npm/dm/splatoon2api?color=aqua&label=Download&style=flat-square) ![version](https://img.shields.io/npm/v/splatoon2api.svg?style=flat-square)<br>

## Installation
To install the module, simply execute the following command:
```npm
npm install splatoon2api
```

## Features
- Get current stages
- Get next stages
- Get SplatNet Gear
- Get information on SalmonRun
- Compatible with many languages

## Usage
### Import
To be able to use the module, you must first import it like this.
```js
const splatoon2api = require("splatoon2api");
const Splatoon2 = new splatoon2api.Client();
```
Once this is done, you can use all the functions of the module.<br />
#### Change the language
If you want to change the answer language, just specify it as an argument when declaring the module.
**Example**:
```js
const splatoon2api = require("splatoon2api");
const Splatoon2 = new splatoon2api.Client("fr");
```
**Here is the list of compatible languages**:
- `en` -> English (*default*)
- `es` -> Spanish
- `fr` -> French
- `de` -> German
- `nl` -> Dutch
- `it` -> Italian
- `ru` -> Russian
- `jp` -> Japanese
<br>*All translations come from the [splatoon2.ink](https://splatoon2.ink) website.*
### Get current stages
To get the current maps of Splatoon 2, nothing could be easier, just use the `getCurrentStages` function.<br>
**Example**:
```js
Splatoon2.getCurrentStages(res => {
  console.log(res);
});
```
This should return the following to you:
```
{
  regular: {
    start_time: 1609444800,
    end_time: 1609452000,
    stage1: {
      name: 'MakoMart',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/d9f0f6c330aaa3b975e572637b00c4c0b6b89f7d.png'
    },
    stage2: {
      name: 'Walleye Warehouse',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/65c99da154295109d6fe067005f194f681762f8c.png'
    },
    rules: 'Turf War'
  },
  ranked: {
    start_time: 1609444800,
    end_time: 1609452000,
    stage1: {
      name: 'Humpback Pump Track',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png'
    },
    stage2: {
      name: 'Skipper Pavilion',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/132327c819abf2bd44d0adc0f4a21aad9cc84bb2.png'
    },
    rules: 'Splat Zones'
  },
  league: {
    start_time: 1609444800,
    end_time: 1609452000,
    stage1: {
      name: 'Port Mackerel',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/0907fc7dc325836a94d385919fe01dc13848612a.png'
    },
    stage2: {
      name: 'Ancho-V Games',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png'
    },
    rules: 'Tower Control'
  }
}
```

### Get next stages
To get the next maps, just use the `getNextStages` function.<br>
**Example**:
```js
Splatoon2.getNextStages(res => {
	console.log(res);
});
```
This should return the following to you:
```
{
  regular: {
    start_time: 1609452000,
    end_time: 1609459200,
    stage1: {
      name: 'Kelp Dome',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/a12e4bf9f871677a5f3735d421317fbbf09e1a78.png'
    },
    stage2: {
      name: 'Manta Maria',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/070d7ee287fdf3c5df02411950c2a1ce5b238746.png'
    },
    rules: 'Turf War'
  },
  ranked: {
    start_time: 1609452000,
    end_time: 1609459200,
    stage1: {
      name: 'Arowana Mall',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/dcf332bdcc80f566f3ae59c1c3a29bc6312d0ba8.png'
    },
    stage2: {
      name: 'MakoMart',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/d9f0f6c330aaa3b975e572637b00c4c0b6b89f7d.png'
    },
    rules: 'Rainmaker'
  },
  league: {
    start_time: 1609452000,
    end_time: 1609459200,
    stage1: {
      name: 'Blackbelly Skatepark',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/758338859615898a59e93b84f7e1ca670f75e865.png'
    },
    stage2: {
      name: 'Snapper Canal',
      image: 'https://splatoon2.ink/assets/splatnet/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png'
    },
    rules: 'Clam Blitz'
  }
}
```

### Get Splanet Gear
To get the gear currently available in SplatNet Gear simply use the `getSplanetGear` function.<br/>
```js
Splatoon2.getSplanetGear(res => {
	console.log(res);
})
```
This should return the following to you:
```
{
  merchandises: {
    '0': {
      name: "New Year's Glasses DX",
      image: 'https://splatoon2.ink/assets/splatnet/images/head/28e48052c278bafacd11eef476b970d9de515dd3.png',
      end_time: 1609452000,
      price: 13653,
      rarity: 2,
      kind: 'head',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    },
    '1': {
      name: 'Slash King Tank',
      image: 'https://splatoon2.ink/assets/splatnet/images/clothes/2943fa1777855fa1a46774bbf982271b629dc7f5.png',
      end_time: 1609459200,
      price: 1125,
      rarity: 0,
      kind: 'clothes',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    },
    '2': {
      name: 'Streetstyle Cap',
      image: 'https://splatoon2.ink/assets/splatnet/images/head/3d7347bf69bf066b84f1ba272c401605424d2812.png',
      end_time: 1609466400,
      price: 1500,
      rarity: 0,
      kind: 'head',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    },
    '3': {
      name: 'Tan Work Boots',
      image: 'https://splatoon2.ink/assets/splatnet/images/shoes/4d0ce2bbebf87c5c5670d5e148056a645ac335de.png',
      end_time: 1609473600,
      price: 6000,
      rarity: 1,
      kind: 'shoes',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    },
    '4': {
      name: 'Part-Time Pirate',
      image: 'https://splatoon2.ink/assets/splatnet/images/clothes/c42a10239c8fe5b0dea49c201d2be4f8bf5229e2.png',
      end_time: 1609480800,
      price: 2000,
      rarity: 0,
      kind: 'clothes',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    },
    '5': {
      name: 'White Headband',
      image: 'https://splatoon2.ink/assets/splatnet/images/head/47f5724d202bff87b96c8fcbe398c9dcd5c7783c.png',
      end_time: 1609488000,
      price: 750,
      rarity: 0,
      kind: 'head',
      brand: [Object],
      skills: [Object],
      original_gear: [Object]
    }
  }
}
```
brand: [Object]
```
{
  name: 'SquidForce',
  image: 'https://splatoon2.ink/assets/splatnet/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png'
}
```
skills: [Object]
```
{
  name: 'Ink Saver (Main)',
  image: 'https://splatoon2.ink/assets/splatnet/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png'
}
```
original_gear: [Object]
```
{
  rarity: 0,
  price: 450,
  skills: {
    name: 'Thermal Ink',
    image: 'https://splatoon2.ink/assets/splatnet/images/skill/1d6ed2ef9cd1f71086368e9ec4b5704663ba3a0a.png'
  }
}
```
### Get information on SalmonRun
For information on SalmonRun just use the `getSalmonRun` function.<br/>
**Example**:
```js
Splatoon2.getSalmonRun(res => {
	console.log(res);
});
```
This should return the following to you:
```
{
  details: {
    '0': {
      start_time: 1609329600,
      end_time: 1609459200,
      stage: [Object],
      weapons: [Object]
    },
    '1': {
      start_time: 1609480800,
      end_time: 1609610400,
      stage: [Object],
      weapons: [Object]
    }
  },
  next: {
    '0': { start_time: 1609329600, end_time: 1609459200 },
    '1': { start_time: 1609480800, end_time: 1609610400 },
    '2': { start_time: 1609632000, end_time: 1609783200 },
    '3': { start_time: 1609804800, end_time: 1609934400 },
    '4': { start_time: 1609956000, end_time: 1610085600 }
  }
}
```
stage: [Object]
```
{
  name: 'Ruins of Ark Polaris',
  image: 'https://splatoon2.ink/assets/splatnet/images/coop_stage/50064ec6e97aac91e70df5fc2cfecf61ad8615fd.png'
}
```
weapons: [Object]
```
{
  '0': {
    name: 'Dark Tetra Dualies',
    image: 'https://splatoon2.ink/assets/splatnet/images/weapon/ba750d284eb067abdc995435c3358eed4e6f90fa.png'
  },
  '1': {
    name: 'Flingza Roller',
    image: 'https://splatoon2.ink/assets/splatnet/images/weapon/e32ed68bb18628c5ede5816a2fbc2b8fcdd04124.png'
  },
  '2': {
    name: 'Splat Dualies',
    image: 'https://splatoon2.ink/assets/splatnet/images/weapon/bb5caf24e43f8c7ceb126670bf24fd3aa9a3c3fc.png'
  },
  '3': {
    name: 'E-liter 4K',
    image: 'https://splatoon2.ink/assets/splatnet/images/weapon/a6279990ad871fccdd9f2a64a2951f8726f45c48.png'
  }
}
```
