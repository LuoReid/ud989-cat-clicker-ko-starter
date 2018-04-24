var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray();

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

var ViewModel = function() {
  var self = this;
  self.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/big',
    nickNames: [
      { nickName: 'Tabtab' },
      { nickName: 'T-Bone' },
      { nickName: 'Mr.T' },
      { nickName: 'Tabitha Tab Tabby Catty Cat' }
    ]
  }));
  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());