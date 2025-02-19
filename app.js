(function () {
    new Vue({
        el: "#vueapp",

        mounted() {
            let c2d = this.drawCanvasContext2d = this.$refs.drawCanvas.getContext("2d");
            c2d.lineWidth = 20;
            c2d.lineCap = "round";
            c2d.linJoin = "round"
        },

        methods: {

            canvasMouseDownHandler(e) {
                this.drawing = true;
                this.drawCanvasContext2d.moveTo(e.offsetX, e.offsetY);
            },

            canvasMouseMoverHandler(e) {
                if(this.drawing) {
                    this.drawCanvasContext2d.lineTo(e.offsetX, e.offsetY);
                    this.drawCanvasContext2d.stroke();
                }
            },

            canvasMouseUpHandler(e) {
                this.drawing = false
            }
        }
    })
})();