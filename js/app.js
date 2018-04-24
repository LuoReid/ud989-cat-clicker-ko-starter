var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flicker.com/photos/big');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return 'New born';
    }
    if (this.clickCount() < 20) {
      return 'Infant';
    }
    if (this.clickCount() < 30) {
      return 'Teen';
    } else {
      return 'New born';
    }
    return '12';
  }, this);

  this.nickNames = ko.observableArray([
    { nickName: 'Tabtab' },
    { nickName: 'T-Bone' },
    { nickName: 'Mr.T' },
    { nickName: 'Tabitha Tab Tabby Catty Cat' }
  ]);
}

ko.applyBindings(new ViewModel());