/**
 *
 * @namespace faker.animal
 */
var Logistics = function (faker) {
  var self = this;

  /**
   * port
   *
   * @method faker.logistics.port
   */
  self.port = function() {
    return faker.random.arrayElement(faker.definitions.logistics.port);
  };

  /**
   * dog
   *
   * @method faker.animal.dog
   */
  self.dog = function() {
    return faker.random.arrayElement(faker.definitions.logistics.dog);
  };
  /**
   * cat
   *
   * @method faker.animal.cat
   */
  self.cat = function() {
    return faker.random.arrayElement(faker.definitions.logistics.cat);
  };
  /**
   * snake  
   *
   * @method faker.animal.snake
   */
  self.snake = function() {
    return faker.random.arrayElement(faker.definitions.logistics.snake);
  };
  /**
   * bear  
   *
   * @method faker.animal.bear
   */
  self.bear = function() {
    return faker.random.arrayElement(faker.definitions.logistics.bear);
  };
  /**
   * lion  
   *
   * @method faker.animal.lion
   */
  self.lion = function() {
    return faker.random.arrayElement(faker.definitions.logistics.lion);
  };
  /**
   * cetacean  
   *
   * @method faker.animal.cetacean
   */
  self.cetacean = function() {
    return faker.random.arrayElement(faker.definitions.logistics.cetacean);
  };
  /**
   * horse 
   *
   * @method faker.animal.horse
   */
  self.horse = function() {
    return faker.random.arrayElement(faker.definitions.logistics.horse);
  };
  /**
   * bird
   *
   * @method faker.animal.bird
   */
  self.bird = function() {
    return faker.random.arrayElement(faker.definitions.logistics.bird);
  };
  /**
   * cow 
   *
   * @method faker.animal.cow
   */
  self.cow = function() {
    return faker.random.arrayElement(faker.definitions.logistics.cow);
  };
  /**
   * fish
   *
   * @method faker.animal.fish
   */
  self.fish = function() {
    return faker.random.arrayElement(faker.definitions.logistics.fish);
  };
  /**
   * crocodilia
   *
   * @method faker.animal.crocodilia
   */
  self.crocodilia = function() {
    return faker.random.arrayElement(faker.definitions.logistics.crocodilia);
  };
  /**
   * insect  
   *
   * @method faker.animal.insect
   */
  self.insect = function() {
    return faker.random.arrayElement(faker.definitions.logistics.insect);
  };
  /**
   * rabbit 
   *
   * @method faker.animal.rabbit
   */
  self.rabbit = function() {
    return faker.random.arrayElement(faker.definitions.logistics.rabbit);
  };
  /**
   * type 
   *
   * @method faker.animal.type
   */
  self.type = function() {
    return faker.random.arrayElement(faker.definitions.logistics.type);
  };

  return self;
};

module['exports'] = Logistics;
