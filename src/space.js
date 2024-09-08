// MouseTrail.js
import React, { useRef, useEffect } from 'react';

const Space = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Segm {
      constructor(x, y, l) {
        this.b = Math.random() * 1.9 + 0.1;
        this.x0 = x;
        this.y0 = y;
        this.a = Math.random() * 2 * Math.PI;
        this.x1 = this.x0 + l * Math.cos(this.a);
        this.y1 = this.y0 + l * Math.sin(this.a);
        this.l = l;
      }
      update(x, y) {
        this.x0 = x;
        this.y0 = y;
        this.a = Math.atan2(this.y1 - this.y0, this.x1 - this.x0);
        this.x1 = this.x0 + this.l * Math.cos(this.a);
        this.y1 = this.y0 + this.l * Math.sin(this.a);
      }
    }

    class Rope {
      constructor(tx, ty, l, b, slq, typ) {
        if (typ === "l") {
          this.res = l / 2;
        } else {
          this.res = l / slq;
        }
        this.type = typ;
        this.l = l;
        this.segm = [];
        this.segm.push(new Segm(tx, ty, this.l / this.res));
        for (let i = 1; i < this.res; i++) {
          this.segm.push(
            new Segm(this.segm[i - 1].x1, this.segm[i - 1].y1, this.l / this.res)
          );
        }
        this.b = b;
      }
      update(t) {
        this.segm[0].update(t.x, t.y);
        for (let i = 1; i < this.res; i++) {
          this.segm[i].update(this.segm[i - 1].x1, this.segm[i - 1].y1);
        }
      }
      show() {
        if (this.type === "l") {
          c.beginPath();
          for (let i = 0; i < this.segm.length; i++) {
            c.lineTo(this.segm[i].x0, this.segm[i].y0);
          }
          c.lineTo(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1
          );
          c.strokeStyle = "white";
          c.lineWidth = this.b;
          c.stroke();

          c.beginPath();
          c.arc(this.segm[0].x0, this.segm[0].y0, 1, 0, 2 * Math.PI);
          c.fillStyle = "white";
          c.fill();

          c.beginPath();
          c.arc(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1,
            2,
            0,
            2 * Math.PI
          );
          c.fillStyle = "white";
          c.fill();
        } else {
          for (let i = 0; i < this.segm.length; i++) {
            c.beginPath();
            c.arc(this.segm[i].x0, this.segm[i].y0, this.segm[i].b, 0, 2 * Math.PI);
            c.fillStyle = "white";
            c.fill();
          }
          c.beginPath();
          c.arc(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1,
            2, 0, 2 * Math.PI
          );
          c.fillStyle = "white";
          c.fill();
        }
      }
    }

    let mouse = {};
    let rl = 50;
    let randl = [];
    let target = { x: w / 2, y: h / 2 };
    let t = 0;
    let q = 10;
    let da = [];
    let ropes = [];
    let type = "l";

    for (let i = 0; i < 100; i++) {
      if (Math.random() > 0.25) {
        type = "l";
      } else {
        type = "o";
      }
      ropes.push(
        new Rope(
          w / 2,
          h / 2,
          (Math.random() * 1 + 0.5) * 500,
          Math.random() * 0.4 + 0.1,
          Math.random() * 15 + 5,
          type
       
        ));
        randl.push(Math.random() * 2 - 1);
        da.push(0);
      }
  
      function draw() {
        // Clear the canvas
        c.clearRect(0, 0, w, h);
  
        // Update the target position based on the mouse position
        if (mouse.x) {
          target.errx = mouse.x - target.x;
          target.erry = mouse.y - target.y;
        } else {
          target.errx =
            w / 2 +
            (h / 2 - q) *
              Math.sqrt(2) *
              Math.cos(t) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.x;
          target.erry =
            h / 2 +
            (h / 2 - q) *
              Math.sqrt(2) *
              Math.cos(t) *
              Math.sin(t) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.y;
        }
  
        target.x += target.errx / 10;
        target.y += target.erry / 10;
  
        t += 0.01;
  
        // Update rope positions and draw
        for (let i = 0; i < ropes.length; i++) {
          if (randl[i] > 0) {
            da[i] += (1 - randl[i]) / 10;
          } else {
            da[i] += (-1 - randl[i]) / 10;
          }
          ropes[i].update({
            x:
              target.x +
              randl[i] * rl * Math.cos((i * 2 * Math.PI) / ropes.length + da[i]),
            y:
              target.y +
              randl[i] * rl * Math.sin((i * 2 * Math.PI) / ropes.length + da[i])
          });
          ropes[i].show();
        }
  
        // Request the next animation frame
        requestAnimationFrame(draw);
      }
  
      // Mousemove event listener to update mouse position
      const handleMouseMove = (e) => {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
      };
      window.addEventListener("mousemove", handleMouseMove);
  
      // Mouseleave event listener to reset mouse position
      const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
      };
      window.addEventListener("mouseleave", handleMouseLeave);
  
      // Resize event listener to update canvas dimensions
      const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
  
      // Start the animation loop
      draw();
  
      // Clean up event listeners on component unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return <canvas ref={canvasRef} id="canvas" />;
  };
  
  export default Space;