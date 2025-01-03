// app/page.js
import ParticlesComponent from "../components/Particles";

export default function Home() {
    return (
        <div>
            <ParticlesComponent />
            <div className="content">
                <h1>Welcome to the Snowflakes Store</h1>
                <p>Shop your favorite snowflakes products!</p>
            </div>
        </div>
    );
}
