const silo = extendContent(Vault, "silo", {

	load(){
        this.super$load();
		this.baseRegion = Core.atlas.find(this.name);
		this.shadowRegion = Core.atlas.find(this.name + '-shadow');
    },

	draw(tile){
		Draw.rect(this.baseRegion, tile.drawx(), tile.drawy());
	},

	drawLayer(tile){
		Draw.rect(this.shadowRegion, tile.drawx(), tile.drawy());
	}

});

silo.layer = Layer.power;