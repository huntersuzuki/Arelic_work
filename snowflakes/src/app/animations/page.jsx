
import SnowfallEffect from '@/components/animations/SnowfallEffect';
import FloatingDecoration from '@/components/animations/FloatingDecoration';
import ParallaxEffect from '@/components/animations/ParallaxEffect';

export default function AnimationsPage() {
    return (
        <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
            <SnowfallEffect />
            <FloatingDecoration />
            <ParallaxEffect />
        </main>
    );
}
