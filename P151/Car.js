AFRAME.registerComponent("Car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/cartoon_car" }
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
    position = { x: 0, y: 5, z: -10 };
       rotation = { x: 0, y:0, z: 20 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });