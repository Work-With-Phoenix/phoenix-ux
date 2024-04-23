import { default as Swipe } from './Swipe';
import {default as Circle } from './Circle';
import {default as Center} from './Center';
import {default as Smoosh} from './Smoosh';
import {default as Curtain} from './Curtain';

interface ButtonProps {
    title?: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <>
            <Swipe title={title} />
            <Circle title={title} />
            <Center title={title} />
            <Smoosh title={title} />
            <Curtain title={title} />
        </>
    );
};

export default Button;
export { Swipe, Circle,Curtain, Smoosh, Center };
