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
     * SECTION: terrain
     */
    // const Engine = Matter.Engine,
    //   Render = Matter.Render,
    //   Runner = Matter.Runner,
    //   Composites = Matter.Composites,
    //   Common = Matter.Common,
    //   // MouseConstraint = Matter.MouseConstraint,
    //   // Mouse = Matter.Mouse,
    //   Composite = Matter.Composite,
    //   Query = Matter.Query,
    //   Svg = Matter.Svg,
    //   Bodies = Matter.Bodies,
    //   Body = Matter.Body;

    // // eslint-disable-next-line
    // Common.setDecomp(require("poly-decomp"));

    // // NOTE: ref - https://github.com/liabru/matter-js/issues/196#issuecomment-2566101872
    // // eslint-disable-next-line
    // require("pathseg");

    // // create engine
    // const engine = Engine.create(),
    //   world = engine.world;

    // // create renderer
    // const render = Render.create({
    //   element: container,
    //   engine: engine,
    //   options: {
    //     wireframes: false,
    //   },
    // });

    // Render.run(render);

    // // create runner
    // const runner = Runner.create();
    // Runner.run(runner, engine);

    // // add bodies
    // // @ts-expect-error - ts(7006)
    // const select = function (root, selector) {
    //   return Array.prototype.slice.call(root.querySelectorAll(selector));
    // };

    // // @ts-expect-error - ts(7006)
    // const loadSvg = function (url) {
    //   return fetch(url)
    //     .then(function (response) {
    //       return response.text();
    //     })
    //     .then(function (raw) {
    //       return new window.DOMParser().parseFromString(raw, "image/svg+xml");
    //     });
    // };

    // loadSvg("/svg/terrain.svg")
    //   .then(function (root) {
    //     const paths = select(root, "path");

    //     const vertexSets = paths.map(function (path) {
    //       return Svg.pathToVertices(path, 30);
    //     });

    //     const terrain = Bodies.fromVertices(
    //       400,
    //       350,
    //       vertexSets,
    //       {
    //         isStatic: true,
    //         render: {
    //           fillStyle: "gray",
    //           strokeStyle: "gray",
    //           lineWidth: 1,
    //         },
    //       },
    //       true
    //     );

    //     Composite.add(world, terrain);

    //     const bodyOptions: Matter.IChamferableBodyDefinition = {
    //       frictionAir: 0,
    //       friction: 0.0001,
    //       restitution: 0.6,
    //       label: "particle",
    //     };

    //     Composite.add(
    //       world,
    //       // @ts-expect-error - ts(7006)
    //       Composites.stack(100, 100, 20, 14, 10, 10, function (x, y) {
    //         const radius = 12;

    //         const offsets = [
    //           { x: -radius, y: -radius },
    //           { x: +radius, y: -radius },
    //           { x: -radius, y: +radius },
    //           { x: +radius, y: +radius },
    //         ];

    //         const isPointOutsideTerrain = offsets.every(
    //           (offset) =>
    //             Query.point([terrain], { x: x + offset.x, y: y + offset.y })
    //               .length === 0
    //         );

    //         if (isPointOutsideTerrain) {
    //           return Bodies.polygon(x, y, 5, radius, bodyOptions);
    //         }
    //       })
    //     );
    //   })
    //   .catch(console.error);

    // // fit the render viewport to the scene
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 },
    // });

    // // shake function
    // function shake() {
    //   const particles = Composite.allBodies(world).filter(
    //     (body) => body.label === "particle"
    //   );

    //   for (const particle of particles) {
    //     Body.applyForce(
    //       particle,
    //       {
    //         x: particle.position.x,
    //         y: particle.position.y,
    //       },
    //       {
    //         x: 0.0,
    //         y: -0.01,
    //       }
    //     );
    //   }
    // }

    // window.onmousedown = shake;

    /*
     * !SECTION
     */

    /*
     * SECTION: snowball - svg 시도
     */

    // const Engine = Matter.Engine,
    //   Render = Matter.Render,
    //   Runner = Matter.Runner,
    //   Composites = Matter.Composites,
    //   Common = Matter.Common,
    //   // MouseConstraint = Matter.MouseConstraint,
    //   // Mouse = Matter.Mouse,
    //   Composite = Matter.Composite,
    //   Query = Matter.Query,
    //   Svg = Matter.Svg,
    //   Bodies = Matter.Bodies,
    //   Body = Matter.Body;

    // // eslint-disable-next-line
    // Common.setDecomp(require("poly-decomp"));

    // // NOTE: ref - https://github.com/liabru/matter-js/issues/196#issuecomment-2566101872
    // // eslint-disable-next-line
    // require("pathseg");

    // // create engine
    // const engine = Engine.create(),
    //   world = engine.world;

    // // create renderer
    // const render = Render.create({
    //   element: container,
    //   engine: engine,
    //   options: {
    //     wireframes: false,
    //   },
    // });

    // Render.run(render);

    // // create runner
    // const runner = Runner.create();
    // Runner.run(runner, engine);

    // // add bodies
    // // @ts-expect-error - ts(7006)
    // const select = function (root, selector) {
    //   return Array.prototype.slice.call(root.querySelectorAll(selector));
    // };

    // // @ts-expect-error - ts(7006)
    // const loadSvg = function (url) {
    //   return fetch(url)
    //     .then(function (response) {
    //       return response.text();
    //     })
    //     .then(function (raw) {
    //       return new window.DOMParser().parseFromString(raw, "image/svg+xml");
    //     });
    // };

    // loadSvg("/svg/snow-ball.svg")
    //   .then(function (root) {
    //     const paths = select(root, "path");

    //     console.log({ paths });

    //     const vertexSets = paths.map(function (path) {
    //       return Svg.pathToVertices(path, 30);
    //     });

    //     const terrain = Bodies.fromVertices(
    //       400,
    //       300,
    //       vertexSets,
    //       {
    //         isStatic: true,
    //         render: {
    //           fillStyle: "#11264f",
    //           strokeStyle: "#11264f",
    //           // lineWidth: 2,
    //         },
    //       },
    //       true
    //     );

    //     Composite.add(world, terrain);

    //     const bodyOptions: Matter.IChamferableBodyDefinition = {
    //       frictionAir: 0,
    //       friction: 0.0001,
    //       restitution: 0.6,
    //       label: "particle",
    //       // isStatic: true,
    //       render: {
    //         // fillStyle: "white",
    //         // strokeStyle: "transperent", // 외곽선을 검정색으로 설정
    //         // lineWidth: 3, // 외곽선의 두께
    //       },
    //     };

    //     Composite.add(
    //       world,
    //       // @ts-expect-error - ts(7006)
    //       Composites.stack(300, 200, 15, 14, 10, 10, function (x, y) {
    //         const radius = 3;

    //         const offsets = [
    //           { x: -radius, y: -radius },
    //           { x: +radius, y: -radius },
    //           { x: -radius, y: +radius },
    //           { x: +radius, y: +radius },
    //         ];

    //         const isPointOutsideTerrain = offsets.every(
    //           (offset) =>
    //             Query.point([terrain], { x: x + offset.x, y: y + offset.y })
    //               .length === 0
    //         );

    //         // return Bodies.polygon(x, y, 5, radius, bodyOptions);
    //         // return Bodies.circle(x, y, radius, bodyOptions);

    //         if (isPointOutsideTerrain) {
    //           return Bodies.circle(x, y, radius, bodyOptions);
    //           // return Bodies.polygon(x, y, 5, radius, bodyOptions);
    //           // return Bodies.polygon(x, y, 5, radius, bodyOptions);
    //         } else {
    //           // return Bodies.circle(x, y, radius, {
    //           //   ...bodyOptions,
    //           //   render: { fillStyle: "red" },
    //           // });
    //         }
    //       })
    //     );
    //   })
    //   .catch(console.error);

    // // fit the render viewport to the scene
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 },
    // });

    // // shake function
    // function shake() {
    //   const particles = Composite.allBodies(world).filter(
    //     (body) => body.label === "particle"
    //   );

    //   for (const particle of particles) {
    //     Body.applyForce(
    //       particle,
    //       {
    //         x: particle.position.x,
    //         y: particle.position.y,
    //       },
    //       {
    //         x: 0.0,
    //         y: -0.0005,
    //       }
    //     );
    //   }
    // }

    // window.onmousedown = shake;
    /*
     * !SECTION
     */

    /*
     * SECTION: snowball - 벽 구현 시도
     */
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      // Common = Matter.Common,
      // MouseConstraint = Matter.MouseConstraint,
      // Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      // Query = Matter.Query,
      // Svg = Matter.Svg,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

    const engine = Engine.create();
    const world = engine.world;

    engine.gravity.scale /= 100;

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        // background: "black",
      },
    });

    // (400, 300) 좌표를 기준으로 반지름 100의 원형 배열로 20개의 벽 생성
    const centerX = 400;
    const centerY = 300;
    const radius = 300;
    // const wallCount = 20;
    const wallCount = 10;
    const wallWidth = 300;
    const wallHeight = 500;

    const walls: Matter.Body[] = [];

    for (let i = 0; i < wallCount; i++) {
      const angle = (i / wallCount) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const wall = Bodies.rectangle(x, y, wallWidth, wallHeight, {
        isStatic: true,
        angle: angle,
        render: {
          fillStyle: "black",
          // strokeStyle: "black",
          // lineWidth: 1,
        },
      });

      walls.push(wall);

      Composite.add(world, wall);
    }

    const bodyOptions: Matter.IChamferableBodyDefinition = {
      frictionAir: 0,
      friction: 0.0001,
      restitution: 0.6,
      label: "particle",
      // isStatic: true,
      render: {
        fillStyle: "white",
      },
    };

    Composite.add(
      world,
      // @ts-expect-error - ts(7006)
      // Composites.stack(330, 380, 40, 10, 0, 0, function (x, y) {
      Composites.stack(330, 380, 40, 10, 0, 0, function (x, y) {
        const radius = 1 + Math.random() * 1.5;
        return Bodies.polygon(x, y, 5, radius, bodyOptions);

        // if (Query.point([...walls], { x, y }).length === 0) {
        //   return Bodies.polygon(x, y, 5, radius, bodyOptions);
        // }
      })
    );

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    // shake function
    function shake() {
      const particles = Composite.allBodies(world).filter(
        (body) => body.label === "particle"
      );

      for (const particle of particles) {
        const forceMagnitude = 0.0004; // 힘의 크기 조정
        const forceX = (Math.random() - 0.5) * forceMagnitude; // -0.00001 ~ 0.00001 사이의 무작위 값
        const forceY = (Math.random() - 0.5) * forceMagnitude; // -0.00001 ~ 0.00001 사이의 무작위 값

        Body.applyForce(
          particle,
          {
            x: particle.position.x,
            y: particle.position.y,
          },
          {
            x: forceX,
            y: forceY,
          }
        );
      }
    }

    window.onmousedown = shake;

    shake();

    /*
     * !SECTION
     */
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
