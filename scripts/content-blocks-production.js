const light_oil_processor = extendContent(GenericCrafter, "light-oil-processor", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.liquidRegion = Core.atlas.find(this.name + "-liquid");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
		Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}

});



const heavy_oil_processor = extendContent(GenericCrafter, "heavy-oil-processor", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.liquidRegion = Core.atlas.find(this.name + "-liquid");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
		
		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
		Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}

});



const mineral_extractor = extendContent(GenericCrafter, "mineral-extractor", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.liquidRegion = Core.atlas.find(this.name + "-liquid");
        this.spinnerRegion = Core.atlas.find(this.name + "-spinner");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.spinnerRegion, tile.drawx() + 3, tile.drawy() + 3, tile.entity.totalProgress * 2);
	}

});



const rock_crusher = extendContent(GenericCrafter, "rock-crusher", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.rotator1Region = Core.atlas.find(this.name + "-rotator1");
        this.rotator2Region = Core.atlas.find(this.name + "-rotator2");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.rect(this.rotator2Region, tile.drawx(), tile.drawy(), tile.entity.totalProgress * 1.9);

		Draw.rect(this.rotator1Region, tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2);

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}
	
});



const concrete_mixer = extendContent(GenericCrafter, "concrete-mixer", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.spinner1Region = Core.atlas.find(this.name + "-spinner1");
        this.spinner2Region = Core.atlas.find(this.name + "-spinner2");
        this.liquid1Region = Core.atlas.find(this.name + "-liquid1");
        this.liquid2Region = Core.atlas.find(this.name + "-liquid2");
        this.liquid3Region = Core.atlas.find(this.name + "-liquid3");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.color(Color.valueOf("e0d0a7"));
		Draw.alpha(tile.entity.items.total() / this.itemCapacity);
		Draw.rect(this.liquid1Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.color(Color.valueOf("afb0ab"));
		Draw.alpha(tile.entity.totalProgress / tile.entity.items.total());
		Draw.rect(this.liquid2Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(this.liquid3Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.spinner1Region, tile.drawx() + 5, tile.drawy() - 5, tile.entity.totalProgress);

		Draw.rect(this.spinner2Region, tile.drawx() - 8, tile.drawy() - 8.3, tile.entity.totalProgress * 2);

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}

});



const cement_mixer = extendContent(GenericCrafter, "cement-mixer", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.spinnerRegion = Core.atlas.find(this.name + "-spinner");
        this.liquid1Region = Core.atlas.find(this.name + "-liquid1");
        this.liquid2Region = Core.atlas.find(this.name + "-liquid2");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.color(Color.valueOf("e0d0a7"));
		Draw.alpha(tile.entity.totalProgress / tile.entity.items.total());
		Draw.rect(this.liquid1Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(this.liquid2Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.spinnerRegion, tile.drawx() - 4, tile.drawy() - 4, tile.entity.totalProgress);

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}

});



const taint_separation_plant = extendContent(Separator, "taint-separation-plant", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.liquid1Region = Core.atlas.find(this.name + "-liquid1");
        this.spinner1Region = Core.atlas.find(this.name + "-spinner1");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(this.liquid1Region, tile.drawx(), tile.drawy());
		Draw.color();

		Draw.rect(this.spinner1Region, tile.drawx(), tile.drawy() + 4, tile.entity.totalProgress * 2);

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	}

});



const stone_press = extendContent(GenericCrafter, "stone-press", {

	load(){
        this.super$load();
		this.frameRegions = [];
		for (var i = 0; i < 3; i++) {
			this.frameRegions[i] = Core.atlas.find(this.name + '-frame' + i);
		}
    },

	draw(tile){
		this.super$draw(tile);
		
		const entity = tile.ent();

        Draw.rect(this.frameRegions[Math.trunc(Mathf.absin(entity.totalProgress, 5, 2.999))], tile.drawx(), tile.drawy());
	}

});
