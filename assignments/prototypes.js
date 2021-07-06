/*
  Objecttt oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

//Created Constructor Function GameObject
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
//Create GameObject 'object' for CharacterStats
CharacterStats.prototype = Object.create(GameObject.prototype);
//prototype method that returns name was removed from the game
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

//Created Constructor Function CharacterStats
function CharacterStats(attributes){
  this.healthPoints = attributes.healthPoints;
  //Allows use of methods belonging to GameObject 'object' (destroy)
  GameObject.call(this, attributes)
}
//prototype method that returns name took damage
CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

//Created Constructor Function Humanoid
function Humanoid(attributes){
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  //Invoke method with an owner object as an argument 
  //(allows use of method belonging to another object)
  CharacterStats.call(this, attributes)
}
//Created CharacterStats Object for Humanoid
Humanoid.prototype = Object.create(CharacterStats.prototype);
//Prototype method that returns name and language along with string
Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  //HERO
  //Created HeroHumanoid Constructor Function
  function HeroHumanoid(attributes){
      this.team = attributes.team;
      this.weapons = attributes.weapons;
      this.language = attributes.language;

      //Inherit CharacterStats
      CharacterStats.call(this, attributes)
    }
    //Create CharacterStats object for HeroHumanoids
    HeroHumanoid.prototype = Object.create(CharacterStats.prototype);

    //Create Humanoid object for HeroHumanoids
    HeroHumanoid.prototype = Object.create(Humanoid.prototype);

    //
    HeroHumanoid.prototype.heroSpeak = function(){
      return `${this.name} speaks in ${this.language}.`;
    }

    //VILLAIN
    //Created VillainHumanoid Constructor Function
    function VillainHumanoid(attributes){
      this.team = attributes.team;
      this.weapons = attributes.weapons;
      this.language = attributes.language;
      CharacterStats.call(this, attributes)
    }
  //Create CharacterStats object for HeroHumanoids
    VillainHumanoid.prototype = Object.create(CharacterStats.prototype);

  //Create CharacterStats object for HeroHumanoids
    VillainHumanoid.prototype = Object.create(Humanoid.prototype);

  //
    VillainHumanoid.prototype.villainSpeak = function(){
      return `${this.name} speaks in ${this.language}.`;
    }


        //Stretch Hero
        const Hero = new HeroHumanoid({
          createdAt: new Date(),
          dimensions: {
            length: 25,
            width: 25,
            height: 50,
          },
          healthPoints: 9000,
          name: 'Light',
          team: 'Light Realm',
          weapons: [
            'Spell of life',
            'Book of light',
          ],
          language: 'Lightish.',
        });
  
      //Stretch Villain
      const Villain = new VillainHumanoid({
          createdAt: new Date(),
          dimensions: {
            length: 225,
            width: 225,
            height: 500,
          },
          healthPoints: 9999,
          name: 'Evil',
          team: 'Dark Realm',
          weapons: [
            'Spell of Death',
          ],
          language: 'Unknown.',
        });
    
      // new console logs for hero and villain

      
      //Hero Speak
      console.log(Hero.heroSpeak());

      //Hero Take Damage
      console.log(Hero.takeDamage());

      //Villain Speak
      console.log(Villain.villainSpeak());
      
      //Villain Destroy
      console.log(Villain.destroy());
      
      //Others
      console.log(Hero.createdAt);
      console.log(Hero.takeDamage());
      console.log(Villain.greet());
      console.log(Hero.greet());
      console.log(Villain.takeDamage());
      console.log("The Light Banished Evil from this Realm.");