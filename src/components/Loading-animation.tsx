import Lottie from "react-lottie";
import loading from '../lotties/loading-animation.json';

function LoadingAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
}

export default LoadingAnimation;