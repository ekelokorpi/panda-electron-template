game.module(
    'game.main'
)
.body(function() {
    
game.addAsset('panda.png');

game.createScene('Main', {
    init: function() {
        var sprite = new game.Sprite('panda.png');
        sprite.x = 400;
        sprite.y = 200;
        sprite.addTo(this.stage);
    }
});

});
