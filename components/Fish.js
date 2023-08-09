AFRAME.registerComponent("terrain-fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        const id = `fish${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 30;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };

        this.createFish(id, position);
      }
    },
  
    createFish: function (id, position) {
        const treasureEntity = document.querySelector('#volcano_island');
    
        var fishEl = document.createElement('a-entity')
        fishEl.setAttribute('id',id)
        fishEl.setAttribute('position',position)
        fishEl.setAttribute('scale',{x:.3,y:.3,z:.3})
        fishEl.setAttribute('gltf-model','./assets/fish/scene.gltf')
        fishEl.setAttribute('animation-mixer',{})
        fishEl.setAttribute('static-body', {shape:'sphere',sphereRadius:1})
        fishEl.setAttribute('collider',{elementID:`#${id}`})

        fishEl.setAttribute("game-play", {
          elementId: `#${id}`,
        });

        treasureEntity.appendChild(fishEl)
      }
  });
  