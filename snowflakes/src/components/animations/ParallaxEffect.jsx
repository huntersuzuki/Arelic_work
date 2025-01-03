
'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxEffect = () => (
    <ParallaxProvider>
        <div style={{ height: '100vh', background: 'green' }}>
            <Parallax speed={-10}>
                <h1 style={{ color: 'white', fontSize: '4rem', textAlign: 'center', marginTop: '50vh' }}>
                    CONTENT
                </h1>
            </Parallax>
        </div>
    </ParallaxProvider>
);

export default ParallaxEffect;
