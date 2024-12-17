"use client";

import Matter from "matter-js";
import { useEffect, useRef } from "react";
import styles from "./Canvas.module.css";

export default function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;

    /*
     * SECTION: 다각형으로 원 구현 - https://stackoverflow.com/questions/58507514/matter-js-hollow-circle-body
     * 모양은 된 것 같은데... 뭔가 계속 움직임 ...
     */
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Events = Matter.Events,
      Common = Matter.Common,
      Svg = Matter.Svg,
      Vertices = Matter.Vertices,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const render = Render.create({
      element: container,
      engine: engine,
      // options: {
      //   wireframes: false,
      //   background: "white",
      // },
    });

    const x = 400,
      y = 300,
      sides = 90,
      radius = 150;

    const width = 20;
    const extraLength = 1.15;
    const initialRotation = 0;

    const theta = (2 * Math.PI) / sides;
    // const sideLength = ((2 * radius * theta) / 2) * extraLength;
    const sideLength = ((2 * radius * theta) / 2) * extraLength;

    const parts = [];
    for (let i = 0; i < sides; i++) {
      // We'll build thin sides and then translate + rotate them appropriately.
      const body = Bodies.rectangle(0, 0, sideLength, width, {
        // friction: 0.1, // 마찰 설정
        // frictionAir: 0.01, // 공기 저항 설정
        // isStatic: true,
      });
      Body.rotate(body, i * theta);
      Body.translate(body, {
        x: radius * Math.sin(i * theta),
        y: -radius * Math.cos(i * theta),
      });
      parts.push(body);
    }

    const containerCircle = Body.create({
      isStatic: true,
    });
    Body.setParts(containerCircle, parts);
    // if (initialRotation) {
    //   Body.rotate(containerCircle, initialRotation);
    // }
    Body.translate(containerCircle, { x: x, y: y });

    Composite.add(engine.world, [containerCircle]);

    Render.run(render);

    const runner = Runner.create();

    Runner.run(runner, engine);

    const ground = Bodies.rectangle(
      container.offsetWidth / 2,
      container.offsetHeight - 10,
      container.offsetWidth,
      20,
      {
        isStatic: true,
        render: {
          fillStyle: "green",
        },
      }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground]);

    // add mouse control
    // const mouse = Mouse.create(render.canvas);
    // const mouseConstraint = MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     stiffness: 0.2,
    //     render: {
    //       visible: false,
    //     },
    //     // Allow static bodies to be dragged
    //     // body: null,
    //     pointA: { x: 0, y: 0 },
    //     pointB: { x: 0, y: 0 },
    //   },
    // });

    // Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;

    /*
     * !SECTION
     */

    /*
     * SECTION: 첫 예제 - 두 박스와 바닥
     */
    // // module aliases
    // const Engine = Matter.Engine,
    //   Render = Matter.Render,
    //   Runner = Matter.Runner,
    //   Bodies = Matter.Bodies,
    //   Composite = Matter.Composite,
    //   Events = Matter.Events,
    //   Common = Matter.Common,
    //   Svg = Matter.Svg,
    //   Vertices = Matter.Vertices;

    // // create an engine
    // const engine = Engine.create();

    // // create a renderer
    // const render = Render.create({
    //   element: container,
    //   engine: engine,
    //   options: {
    //     wireframes: false,
    //     background: "white",
    //   },
    // });

    // // create two boxes and a ground
    // const boxA = Bodies.rectangle(400, 200, 80, 80, {
    //   render: {
    //     fillStyle: "red",
    //   },
    // });
    // const boxB = Bodies.rectangle(450, 50, 80, 80, {
    //   render: {
    //     fillStyle: "blue",
    //   },
    // });
    // const ground = Bodies.rectangle(
    //   container.offsetWidth / 2,
    //   container.offsetHeight - 10,
    //   container.offsetWidth,
    //   20,
    //   {
    //     isStatic: true,
    //     render: {
    //       fillStyle: "green",
    //     },
    //   }
    // );

    // // add all of the bodies to the world
    // Composite.add(engine.world, [boxA, boxB, ground]);
    /*
     * !SECTION
     */

    // const containerCircle = Bodies.circle(400, 300, 150, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: "transparent",
    //     strokeStyle: "black",
    //     lineWidth: 2,
    //   },
    // });

    // const circleRadius = 150;
    // const segments = 40; // Increase the number of segments for smoother circle
    // const angleStep = (2 * Math.PI) / segments;
    // const containerCircle = Composite.create();
    // for (let i = 0; i < segments; i++) {
    //   const angle = i * angleStep;
    //   const x = 400 + circleRadius * Math.cos(angle);
    //   const y = 300 + circleRadius * Math.sin(angle);
    //   const rect = Bodies.rectangle(x, y, 10, 10, {
    //     isStatic: true,
    //     angle: angle,
    //     render: {
    //       fillStyle: "black",
    //     },
    //   });
    //   Composite.add(containerCircle, rect);
    // }

    // // define SVG path for a circle
    // const svgPath = "M 150 0 A 150 150 0 1 0 150.01 0 Z"; // SVG path for a circle

    // // convert SVG path to vertices
    // const vertices = Svg.pathToVertices(svgPath, 30); // 30 is the sample length for smoother circle

    // // create a hollow circle using fromVertices
    // const containerCircle = Bodies.fromVertices(400, 300, vertices, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: "transparent",
    //     strokeStyle: "black",
    //     lineWidth: 2,
    //   },
    // });

    /*
     * SECTION: 파티클, 다각형 ...
     */
    // create particles inside the container circle
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = Bodies.circle(
        400 + Math.random() * 100 - 50,
        300 + Math.random() * 100 - 50,
        10,
        {
          render: {
            fillStyle: "blue",
          },
        }
      );
      particles.push(particle);
    }

    // create a rectangle inside the container circle
    const rectangle = Bodies.rectangle(400, 300, 40, 20, {
      render: {
        fillStyle: "red",
      },
    });

    // create a polygon inside the container circle
    const polygon = Bodies.polygon(400, 300, 5, 20, {
      render: {
        fillStyle: "green",
      },
    });

    Composite.add(engine.world, [
      containerCircle,
      ...particles,
      rectangle,
      polygon,
    ]);

    function shake() {
      for (const i in particles) {
        Body.applyForce(
          particles[i],
          {
            x: particles[i].position.x,
            y: particles[i].position.y,
          },
          {
            x: 0.0,
            y: -0.01,
          }
        );
      }
    }

    window.onmousedown = shake;

    // Events.on(engine, "beforeUpdate", () => {
    //   const bodies = particles;
    //   bodies.forEach((body) => {
    //     const dx = body.position.x - containerCircle.position.x;
    //     const dy = body.position.y - containerCircle.position.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     const halfWidth =
    //       containerCircle.bounds.max.x - containerCircle.bounds.min.x;
    //     const halfHeight =
    //       containerCircle.bounds.max.y - containerCircle.bounds.min.y;

    //     if (Math.abs(dx) > halfWidth / 2 - body.circleRadius) {
    //       Body.setPosition(body, {
    //         x:
    //           containerCircle.position.x +
    //           Math.sign(dx) * (halfWidth / 2 - body.circleRadius),
    //         y: body.position.y,
    //       });
    //     }

    //     if (Math.abs(dy) > halfHeight / 2 - body.circleRadius) {
    //       Body.setPosition(body, {
    //         x: body.position.x,
    //         y:
    //           containerCircle.position.y +
    //           Math.sign(dy) * (halfHeight / 2 - body.circleRadius),
    //       });
    //     }
    //   });
    // });

    /*
     * !SECTION
     */
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
