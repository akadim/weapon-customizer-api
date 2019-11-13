var express = require('express');
var router = express.Router();

var weaponTypes = [
  {
    id: 1,
    title: 'M-16',
    image: 'm-16.png'
  },
  {
    id: 2,
    title: 'Ak-47',
    image: 'ak-47.png'
  }
];

var weaponOptics = [
   {
     id: 1,
     title: 'Red dot scope',
     image: 'red-dot-scope.png'
   },
   {
     id: 2,
     title: 'Acog scope',
     image: 'acog-scope.png'
   }
];

var weaponAmmunitions = [
  {
    id: 1,
    title: '30 round magazine',
    image: '30-round-magazine.png'
  },
  {
    id: 2,
    title: '50 round magazine',
    image: '50-round-magazine.png'
  }
];

var weaponConfiguration = {
   name: 'M-16 with Red dot scope and 30 round magazine',
   type: 1,
   optic: 1,
   ammunition: 1
}

/* GET a Weapon Configuration. */
router.get('/weapon-configuration', function(req, res, next) {
  return res.end(JSON.stringify(weaponConfiguration));
});

/* GET Weapon Assets. */
router.get('/weapon-options', function(req, res, next) {
  res.end(JSON.stringify({ 
            weaponTypes: weaponTypes, 
            weaponOptics: weaponOptics, 
            weaponAmmunitions : weaponAmmunitions 
          }));
});

/* GET a Single Weapon Type. */
router.get('/weapon-type/:id', function(req, res, next) {

  let id = parseInt(req.params.id);

  weaponTypes.forEach( (weaponType) => {
      if(weaponType.id === id) {
          return res.end(JSON.stringify(weaponType));
      }  
  });
});


/* GET a Single Weapon Optic. */
router.get('/weapon-optic/:id', function(req, res, next) {

  let id = parseInt(req.params.id);

  weaponOptics.forEach( (weaponOptic) => {
      if(weaponOptic.id === id) {
          return res.end(JSON.stringify(weaponOptic));
      }  
  });
});

/* GET a Single Weapon Ammunition. */
router.get('/weapon-ammunition/:id', function(req, res, next) {

  let id = parseInt(req.params.id);

  weaponAmmunitions.forEach( (weaponAmmunition) => {
      if(weaponAmmunition.id === id) {
          return res.end(JSON.stringify(weaponAmmunition));
      }  
  });
});

module.exports = router;
