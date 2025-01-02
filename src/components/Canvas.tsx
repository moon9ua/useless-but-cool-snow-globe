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
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      // MouseConstraint = Matter.MouseConstraint,
      // Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Query = Matter.Query,
      Svg = Matter.Svg,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

    // eslint-disable-next-line
    Common.setDecomp(require("poly-decomp"));

    // NOTE: ref - https://github.com/liabru/matter-js/issues/196#issuecomment-2566101872
    // eslint-disable-next-line
    require("pathseg");

    // create engine
    const engine = Engine.create(),
      world = engine.world;

    // create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        wireframes: false,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    // @ts-expect-error - ts(7006)
    const select = function (root, selector) {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    };

    // @ts-expect-error - ts(7006)
    const loadSvg = function (url) {
      return fetch(url)
        .then(function (response) {
          return response.text();
        })
        .then(function (raw) {
          return new window.DOMParser().parseFromString(raw, "image/svg+xml");
        });
    };

    loadSvg("/svg/terrain.svg")
      .then(function (root) {
        const paths = select(root, "path");

        const vertexSets = paths.map(function (path) {
          return Svg.pathToVertices(path, 30);
        });

        const terrain = Bodies.fromVertices(
          400,
          350,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: "gray",
              strokeStyle: "gray",
              lineWidth: 1,
            },
          },
          true
        );

        Composite.add(world, terrain);

        const bodyOptions: Matter.IChamferableBodyDefinition = {
          frictionAir: 0,
          friction: 0.0001,
          restitution: 0.6,
          label: "particle",
        };

        Composite.add(
          world,
          // @ts-expect-error - ts(7006)
          Composites.stack(100, 100, 20, 14, 10, 10, function (x, y) {
            const radius = 12;

            const offsets = [
              { x: -radius, y: -radius },
              { x: +radius, y: -radius },
              { x: -radius, y: +radius },
              { x: +radius, y: +radius },
            ];

            const isPointOutsideTerrain = offsets.every(
              (offset) =>
                Query.point([terrain], { x: x + offset.x, y: y + offset.y })
                  .length === 0
            );

            if (isPointOutsideTerrain) {
              return Bodies.polygon(x, y, 5, radius, bodyOptions);
            }
          })
        );
      })
      .catch(console.error);

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
        Body.applyForce(
          particle,
          {
            x: particle.position.x,
            y: particle.position.y,
          },
          {
            x: 0.0,
            y: -0.01,
          }
        );
      }
    }

    window.onmousedown = shake;

    /*
     * !SECTION
     */
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
