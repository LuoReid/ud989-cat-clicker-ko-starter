var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flicker.com/photos/big');
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

  this.nickNames = ko.observableArray([
    { nickName: 'Tabtab' },
    { nickName: 'T-Bone' },
    { nickName: 'Mr.T' },
    { nickName: 'Tabitha Tab Tabby Catty Cat' }
  ]);
}

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());