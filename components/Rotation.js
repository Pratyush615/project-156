AFRAME .registerComponent('terrain-rotation',{
    schema:{
        speed_of_rotation:{type:'number', default:0}
    },
    init: function(){
        window.addEventListener('keydown',(e)=>{
            
            if (e.key === 'ArrowRight'){
               if(this.data.speed_of_rotation < 0.1){
                this.data.speed_of_rotation+=.01
               } 
            }
            if (e.key === 'ArrowLeft'){
                if(this.data.speed_of_rotation > -0.1){
                 this.data.speed_of_rotation-=.01
                } 
             }
        })
        
    },
    
    tick: function(){
        map_rotation = this.el.getAttribute('rotation')
        map_rotation.y +=this.data.speed_of_rotation
        this.el.setAttribute('rotation',{
            x:map_rotation.x,y:map_rotation.y,z:map_rotation.z
        });
    },
  });
  


  AFRAME .registerComponent('scuba-rotation',{
    schema:{
        speed_of_rotation:{type:'number', default:0},
        speed_of_position:{type:'number',default:0}
    },
    init: function(){
        window.addEventListener('keydown',(e)=>{

            this.data.speed_of_rotation = this.el.getAttribute('rotation')
            this.data.speed_of_position = this.el.getAttribute('position')
            var scuba_rotation = this.data.speed_of_rotation
            var scuba_position= this.data.speed_of_position

            
            if (e.key === 'ArrowRight'){
               if(scuba_rotation.x < 10){
                scuba_rotation.x +=0.5
                    this.el.setAttribute('rotation',scuba_rotation)
               } 
            }
            if (e.key === 'ArrowLeft'){
                if(scuba_rotation.x > -10){
                    scuba_rotation.x-=0.5
                    this.el.setAttribute('rotation',scuba_rotation)
                } 
             }
             if (e.key === 'ArrowUp'){
                if(scuba_rotation.z < 0){
                    scuba_rotation.z+=0.5
                    this.el.setAttribute('rotation',scuba_rotation)
                }
                if(scuba_position.y < -18){
                    scuba_position.y+=0.1
                    this.el.setAttribute('position',scuba_position)
                } 
            }

             
            if (e.key === 'ArrowDown'){
                if(scuba_rotation.z > -23){
                    scuba_rotation.z-=0.5
                    this.el.setAttribute('rotation',scuba_rotation)
                }
                if(scuba_position.y >- 29){
                    scuba_position.y-=0.1
                    this.el.setAttribute('position',scuba_position)
                }
                }
              });
            }
          });
          




