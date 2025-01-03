// components/Particles.js
'use client'
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,  // Ensure particles stay in the background
                },
                particles: {
                    number: {
                        value: 100,  // Increase the number of particles
                        density: {
                            enable: true,
                            value_area: 800,  // Adjust this value to control density
                        },
                    },
                    color: {
                        value: "#ffffff",  // Snowflakes are white
                    },
                    shape: {
                        type: "circle",  // Snowflakes should be circles
                    },
                    opacity: {
                        value: 0.7,  // Set a higher opacity for better visibility
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                        },
                    },
                    size: {
                        value: 5,  // Size of the snowflakes
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            size_min: 0.1,
                        },
                    },
                    links: {
                        enable: false,  // Disable links between particles
                    },
                    move: {
                        enable: true,
                        speed: 1.5,  // Speed of the snowfall
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",  // Particles should disappear when out of bounds
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesComponent;
