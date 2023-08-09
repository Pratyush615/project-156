AFRAME.registerComponent("terrain-coins", {
    init: function () {
      for (var i = 1; i <= 15; i++) {
        const id = `coin${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 40;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };

        this.createCoins(id, position);
      }
    },
  
    createCoins: function (id, position) {
      const treasureEntity = document.querySelector('#volcano_island');
        var coinEl = document.createElement('a-entity');
        coinEl.setAttribute('id', id);
        coinEl.setAttribute('position', position);
        coinEl.setAttribute('material','color','#FF9100');
        coinEl.setAttribute('geometry',{primitive:'circle', radius: 1});
        coinEl.setAttribute('static-body', {shape:'sphere',sphereRadius:5})
        coinEl.setAttribute('collider',{elementID:`#${id}`})
        coinEl.setAttribute("animation",{
          property: "rotation",
          to: "8 360 0",
          loop: "true",
          dur: 1000
        });
  
        coinEl.setAttribute("game-play", {
          elementId: `#${id}`,
        });

      treasureEntity.appendChild(coinEl);
    }

  });
  
  AFRAME.registerComponent("terrain-chest", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        console.log(position)

        this.createChest(id, position);
      }
    },
  
    createChest: function (id, position) {
        const treasureEntity = document.querySelector('#volcano_island');
    
        var chestEl = document.createElement('a-entity')
        chestEl.setAttribute('id',id)
        chestEl.setAttribute('position',position)
        chestEl.setAttribute('scale',{x:5,y:5,z:5})
        chestEl.setAttribute('rotation',{x:0,y:45,z:5})
        chestEl.setAttribute('gltf-model','./assets/treasure/model.gltf')

        treasureEntity.appendChild(chestEl)
      }
  });