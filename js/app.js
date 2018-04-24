var initialCat = [{
  clickCount: 0,
  name: 'Tabby',
  imgSrc: 'img/1413379559_412a540d29_z.jpg',
  imgAttribution: 'https://www.flicker.com/photos/big',
  nickNames: ['Tabby']
}, {
  clickCount: 0,
  name: 'Tiger',
  imgSrc: 'img/22252709_010df3379e_z.jpg',
  imgAttribution: 'https://www.flicker.com/photos/big',
  nickNames: ['Tiger']
}, {
  clickCount: 0,
  name: 'Scaredy',
  imgSrc: 'img/4154543904_6e2428c421_z.jpg',
  imgAttribution: 'https://www.flicker.com/photos/big',
  nickNames: ['Scaredy']
}, {
  clickCount: 0,
  name: 'Shock',
  imgSrc: 'img/434164568_fea0ad4013_z.jpg',
  imgAttribution: 'https://www.flicker.com/photos/big',
  nickNames: ['Shocky']
}, {
  clickCount: 0,
  name: 'Tailer',
  imgSrc: 'img/9648464288_2516b35537_z.jpg',
  imgAttribution: 'https://www.flicker.com/photos/big',
  nickNames: ['Tailery']
}];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);

  this.level = ko.computed(function() {
    let title;
    const clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 20) {
      title = 'Infant';
    } else if (clicks < 30) {
      title = 'Teen';
    } else if (clicks < 40) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);
}

//[!!] Make the cats show up in a list
//[!!] Make the currentCat change with you click on a cat in the list
//[!!] Give yourself a high-five
var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  initialCat.forEach(function(cat) {
    self.catList.push(new Cat(cat));
  });
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
  this.setCat = function(e) {
    self.currentCat(e);
  }
}

ko.applyBindings(new ViewModel());