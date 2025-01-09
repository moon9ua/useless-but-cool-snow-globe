"use client";

import Matter from "matter-js";
import { useEffect, useRef } from "react";
import styles from "./Canvas.module.css";

export default function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;

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
        background: "gray",
      },
    });

    const centerX = 400;
    const centerY = 300;
    const radius = 310;
    const wallCount = 25;
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
          fillStyle: "transparent",
        },
      });

      walls.push(wall);

      Composite.add(world, wall);
    }

    const floor = Bodies.rectangle(400, 685, 500, 500, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
      },
    });

    Composite.add(world, floor);

    const bodyOptions: Matter.IChamferableBodyDefinition = {
      frictionAir: 0,
      friction: 0.0001,
      restitution: 0.6,
      label: "particle",
      render: {
        fillStyle: "white",
      },
    };

    Composite.add(
      world,
      // @ts-expect-error - ts(7006)
      Composites.stack(330, 380, 40, 10, 0, 0, function (x, y) {
        const radius = 1 + Math.random() * 1.5;
        return Bodies.polygon(x, y, 5, radius, bodyOptions);
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
        const forceMagnitude = 0.0004;
        const forceX = (Math.random() - 0.5) * forceMagnitude;
        const forceY = (Math.random() - 0.5) * forceMagnitude;

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
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
