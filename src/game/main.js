game.module(
    'game.main'
)
.body(function() {
    
game.addAsset('panda.png');

game.createScene('Main', {
    init: function() {
        var sprite = new game.Sprite('panda.png');
        sprite.center(this.stage);
        sprite.addTo(this.stage);
    }
});

});
